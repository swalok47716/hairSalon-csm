import { firebaseConfig } from "@js/components/config"
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDoc, getFirestore, onSnapshot, orderBy, query, setDoc, doc, serverTimestamp, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

function setupSelectCity() {
  const selectCity = document.querySelector("#city");
  selectCity.innerHTML = areaData.layer2.reduce((html, city) => {
    return html + `
    <option value="${city.id}">${city.name["zh-tw"]}</option>
  `;
  }, `<option value="" selected>-請選擇-</option>`);
}

const areaData = {
  layer2: [],
  layer3: []
};

// 初始化firebase核心
initializeApp(firebaseConfig);

// 初始化各項服務
const db = getFirestore();
const storage = getStorage();

// 取得collection references
const citiesRef = collection(db, "divisions/cities/items");
const districtsRef = collection(db, "divisions/districts/items");
const statsRef = collection(db, "divisions/statistics/items");
const salonsRef = collection(db, "salons");

// 取得firebase即時資料
onSnapshot(query(citiesRef, orderBy("id")), snapshot => {
  snapshot.docs.forEach(doc => {
    areaData.layer2.push(doc.data());
  });
  setupSelectCity();
});
onSnapshot(query(districtsRef, orderBy("id")), snapshot => {
  snapshot.docs.forEach(doc => {
    areaData.layer3.push(doc.data());
  });
});

// 依據縣市渲染區域
const selectCity = document.querySelector("#city");
const selectDistrict = document.querySelector("#district");
selectCity.addEventListener("change", e => {
  const id = selectCity.value;
  selectDistrict.innerHTML = areaData.layer3
    .filter(district => district.parent.id === id)
    .reduce((html, district) => {
      return html + `
      <option value="${district.id}">${district.name["zh-tw"]}</option>
    `;
    }, `<option value="" selected>-請選擇-</option>`);
});

// 送出表單
const addSalonForm = document.querySelector("#addSalon");
addSalonForm.addEventListener("submit", async e => {
  e.preventDefault();

  const name = addSalonForm.salonName.value;
  const districtId = addSalonForm.district.value;
  const address = addSalonForm.address.value;
  const timeFrom = addSalonForm.timeFrom.value;
  const timeTo = addSalonForm.timeTo.value;
  const tel = addSalonForm.tel.value;

  let district;
  for (const item of areaData.layer3) {
    if (item.id === districtId) {
      district = item;
      break;
    }
  }

  // get images from File API
  let thumnailUrl = "", viewUrl = "";
  const thumbnail = addSalonForm.thumbnail.files[0];
  const view = addSalonForm.view.files[0];

  // get storage references
  const thumbnailRef = ref(storage, `images/${+new Date()}-${thumbnail.name}`);
  const viewRef = ref(storage, `images/${+new Date()}-${view.name}`);

  try {
    // 上傳圖片
    const thumbnailSnapshot = await uploadBytes(thumbnailRef, thumbnail);
    const viewSnapshot = await uploadBytes(viewRef, view);
    thumnailUrl = await getDownloadURL(thumbnailSnapshot.ref);
    viewUrl = await getDownloadURL(viewSnapshot.ref);

    // 更新區域統計資料
    const statsSnapshot = await getDoc(doc(db, "statistics", districtId));
    if (statsSnapshot.data()) {
      const newDoc = statsSnapshot.data();
      newDoc.salonNum++;
      await setDoc(doc(db, "statistics", districtId), newDoc);
      console.log("success! updated statistics");
      addSalonForm.reset();
    }
    else {
      await setDoc(doc(db, "statistics", districtId), {
        ...district,
        salonNum: 1
      });
      console.log("success! added a document to statistics");
      addSalonForm.reset();
    }

    // 新增店家
    await addDoc(salonsRef, {
      name: name,
      districtId: districtId,
      location: {
        city: district.parent.name,
        district: district.name,
        address: address
      },
      openTime: `${timeFrom}-${timeTo}`,
      tel: tel,
      createdAt: serverTimestamp(),
      thumbnail: thumnailUrl,
      view: viewUrl,
      reviews: [],
      designers: [],
      services: [],
      events: []
    });
    console.log("success! added a salon");
  } catch (err) {
    console.log(err.message);
  }

});

const q = query(salonsRef, where("location.city.en-us", "==", "New Taipei City"));
onSnapshot(q, snapshot => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
  });
});