import { initializeApp} from "firebase/app";
import { addDoc, collection, getFirestore, onSnapshot, orderBy, query } from "firebase/firestore";

const rawData = {
  layer1: [
    {
      id: "001",
      name: {
        "en-us": "Northern Area",
        "zh-tw": "北部"
      }
    },
    {
      id: "002",
      name: {
        "en-us": "Central Area",
        "zh-tw": "中部"
      }
    },
    {
      id: "003",
      name: {
        "en-us": "Southern Area",
        "zh-tw": "南部"
      }
    },
    {
      id: "004",
      name: {
        "en-us": "Eastern Area",
        "zh-tw": "東部"
      }
    },
    {
      id: "005",
      name: {
        "en-us": "Outlying Islands Area",
        "zh-tw": "離島"
      }
    },
  ],
  layer2: [
    {
      id: "001",
      parentId: "001",
      name: {
        "en-us": "Taipei City",
        "zh-tw": "臺北市"
      }
    },
    {
      id: "002",
      parentId: "001",
      name: {
        "en-us": "New Taipei City",
        "zh-tw": "新北市"
      }
    },
    {
      id: "003",
      parentId: "001",
      name: {
        "en-us": "Keelong City",
        "zh-tw": "基隆市"
      }
    },
    {
      id: "004",
      parentId: "001",
      name: {
        "en-us": "Taoyuan City",
        "zh-tw": "桃園市"
      }
    },
    {
      id: "005",
      parentId: "001",
      name: {
        "en-us": "Hsinchu City",
        "zh-tw": "新竹市"
      }
    },
    {
      id: "006",
      parentId: "001",
      name: {
        "en-us": "Hsinchu County",
        "zh-tw": "新竹縣"
      }
    },
    {
      id: "007",
      parentId: "001",
      name: {
        "en-us": "Yilan County",
        "zh-tw": "宜蘭縣"
      }
    },
    {
      id: "008",
      parentId: "002",
      name: {
        "en-us": "Miaoli County",
        "zh-tw": "苗栗縣"
      }
    },
    {
      id: "009",
      parentId: "002",
      name: {
        "en-us": "Taichung City",
        "zh-tw": "臺中市"
      }
    },
    {
      id: "010",
      parentId: "002",
      name: {
        "en-us": "Changhua County",
        "zh-tw": "彰化縣"
      }
    },
    {
      id: "011",
      parentId: "002",
      name: {
        "en-us": "Nantou County",
        "zh-tw": "南投縣"
      }
    },
    {
      id: "012",
      parentId: "002",
      name: {
        "en-us": "Yunlin County",
        "zh-tw": "雲林縣"
      }
    },
    {
      id: "013",
      parentId: "003",
      name: {
        "en-us": "Chiayi County",
        "zh-tw": "嘉義縣"
      }
    },
    {
      id: "014",
      parentId: "003",
      name: {
        "en-us": "Chiayi City",
        "zh-tw": "嘉義市"
      }
    },
    {
      id: "015",
      parentId: "003",
      name: {
        "en-us": "Tainan City",
        "zh-tw": "臺南市"
      }
    },
    {
      id: "016",
      parentId: "003",
      name: {
        "en-us": "Kaohsiung City",
        "zh-tw": "高雄市"
      }
    },
    {
      id: "017",
      parentId: "003",
      name: {
        "en-us": "Pingtung County",
        "zh-tw": "屏東縣"
      }
    },
    {
      id: "018",
      parentId: "003",
      name: {
        "en-us": "Penghu County",
        "zh-tw": "澎湖縣"
      }
    },
    {
      id: "019",
      parentId: "004",
      name: {
        "en-us": "Hualien County",
        "zh-tw": "花蓮縣"
      }
    },
    {
      id: "020",
      parentId: "004",
      name: {
        "en-us": "Taitung County",
        "zh-tw": "臺東縣"
      }
    },
    {
      id: "021",
      parentId: "005",
      name: {
        "en-us": "Kinmen County",
        "zh-tw": "金門縣"
      }
    },
    {
      id: "022",
      parentId: "005",
      name: {
        "en-us": "Lienchiang County",
        "zh-tw": "連江縣"
      }
    },
  ],
  layer3: [
    // 台北市
    {
      "id": "100",
      "parentId": "001",
      "name": {
        "en-us": "Zhongzheng District",
        "zh-tw": "中正區"
      }
    },
    {
      "id": "103",
      "parentId": "001",
      "name": {
        "en-us": "Datong District",
        "zh-tw": "大同區"
      }
    },
    {
      "id": "104",
      "parentId": "001",
      "name": {
        "en-us": "Zhongshan District",
        "zh-tw": "中山區"
      }
    },
    {
      "id": "105",
      "parentId": "001",
      "name": {
        "en-us": "Songshan District",
        "zh-tw": "松山區"
      }
    },
    {
      "id": "106",
      "parentId": "001",
      "name": {
        "en-us": "Da'an District",
        "zh-tw": "大安區"
      }
    },
    {
      "id": "108",
      "parentId": "001",
      "name": {
        "en-us": "Wanhua District",
        "zh-tw": "萬華區"
      }
    },
    {
      "id": "110",
      "parentId": "001",
      "name": {
        "en-us": "Xinyi District",
        "zh-tw": "信義區"
      }
    },
    {
      "id": "111",
      "parentId": "001",
      "name": {
        "en-us": "Shilin District",
        "zh-tw": "士林區"
      }
    },
    {
      "id": "112",
      "parentId": "001",
      "name": {
        "en-us": "Beitou District",
        "zh-tw": "北投區"
      }
    },
    {
      "id": "114",
      "parentId": "001",
      "name": {
        "en-us": "Neihu District",
        "zh-tw": "內湖區"
      }
    },
    {
      "id": "115",
      "parentId": "001",
      "name": {
        "en-us": "Nangang District",
        "zh-tw": "南港區"
      }
    },
    {
      "id": "116",
      "parentId": "001",
      "name": {
        "en-us": "Wenshan District",
        "zh-tw": "文山區"
      }
    },
    // 新北市
    {
      "id": "207",
      "parentId": "002",
      "name": {
        "en-us": "Wanli District",
        "zh-tw": "萬里區"
      }
    },
    {
      "id": "208",
      "parentId": "002",
      "name": {
        "en-us": "Jinshan District",
        "zh-tw": "金山區"
      }
    },
    {
      "id": "220",
      "parentId": "002",
      "name": {
        "en-us": "Banqiao District",
        "zh-tw": "板橋區"
      }
    },
    {
      "id": "221",
      "parentId": "002",
      "name": {
        "en-us": "Xizhi District",
        "zh-tw": "汐止區"
      }
    },
    {
      "id": "222",
      "parentId": "002",
      "name": {
        "en-us": "Shenkeng District",
        "zh-tw": "深坑區"
      }
    },
    {
      "id": "223",
      "parentId": "002",
      "name": {
        "en-us": "Shiding District",
        "zh-tw": "石碇區"
      }
    },
    {
      "id": "224",
      "parentId": "002",
      "name": {
        "en-us": "Ruifang District",
        "zh-tw": "瑞芳區"
      }
    },
    {
      "id": "226",
      "parentId": "002",
      "name": {
        "en-us": "Pingxi District",
        "zh-tw": "平溪區"
      }
    },
    {
      "id": "227",
      "parentId": "002",
      "name": {
        "en-us": "Shuangxi District",
        "zh-tw": "雙溪區"
      }
    },
    {
      "id": "228",
      "parentId": "002",
      "name": {
        "en-us": "Gongliao District",
        "zh-tw": "貢寮區"
      }
    },
    {
      "id": "231",
      "parentId": "002",
      "name": {
        "en-us": "Xindian District",
        "zh-tw": "新店區"
      }
    },
    {
      "id": "232",
      "parentId": "002",
      "name": {
        "en-us": "Pinglin District",
        "zh-tw": "坪林區"
      }
    },
    {
      "id": "233",
      "parentId": "002",
      "name": {
        "en-us": "Wulai District",
        "zh-tw": "烏來區"
      }
    },
    {
      "id": "234",
      "parentId": "002",
      "name": {
        "en-us": "Yonghe District",
        "zh-tw": "永和區"
      }
    },
    {
      "id": "235",
      "parentId": "002",
      "name": {
        "en-us": "Zhonghe District",
        "zh-tw": "中和區"
      }
    },
    {
      "id": "236",
      "parentId": "002",
      "name": {
        "en-us": "Tucheng District",
        "zh-tw": "土城區"
      }
    },
    {
      "id": "237",
      "parentId": "002",
      "name": {
        "en-us": "Sanxia District",
        "zh-tw": "三峽區"
      }
    },
    {
      "id": "238",
      "parentId": "002",
      "name": {
        "en-us": "Shulin District",
        "zh-tw": "樹林區"
      }
    },
    {
      "id": "239",
      "parentId": "002",
      "name": {
        "en-us": "Yingge District",
        "zh-tw": "鶯歌區"
      }
    },
    {
      "id": "241",
      "parentId": "002",
      "name": {
        "en-us": "Sanchong District",
        "zh-tw": "三重區"
      }
    },
    {
      "id": "242",
      "parentId": "002",
      "name": {
        "en-us": "Xinzhuang District",
        "zh-tw": "新莊區"
      }
    },
    {
      "id": "243",
      "parentId": "002",
      "name": {
        "en-us": "Taishan District",
        "zh-tw": "泰山區"
      }
    },
    {
      "id": "244",
      "parentId": "002",
      "name": {
        "en-us": "Linkou District",
        "zh-tw": "林口區"
      }
    },
    {
      "id": "247",
      "parentId": "002",
      "name": {
        "en-us": "Luzhou District",
        "zh-tw": "蘆洲區"
      }
    },
    {
      "id": "248",
      "parentId": "002",
      "name": {
        "en-us": "Wugu District",
        "zh-tw": "五股區"
      }
    },
    {
      "id": "249",
      "parentId": "002",
      "name": {
        "en-us": "Bali District",
        "zh-tw": "八里區"
      }
    },
    {
      "id": "251",
      "parentId": "002",
      "name": {
        "en-us": "Tamsui District",
        "zh-tw": "淡水區"
      }
    },
    {
      "id": "252",
      "parentId": "002",
      "name": {
        "en-us": "Sanjhih District",
        "zh-tw": "三芝區"
      }
    },
    {
      "id": "253",
      "parentId": "002",
      "name": {
        "en-us": "Shimen District",
        "zh-tw": "石門區"
      }
    },
    // 基隆市
    {
      "id": "200",
      "parentId": "003",
      "name": {
        "en-us": "Ren'ai District",
        "zh-tw": "仁愛區"
      }
    },
    {
      "id": "201",
      "parentId": "003",
      "name": {
        "en-us": "Xinyi District",
        "zh-tw": "信義區"
      }
    },
    {
      "id": "202",
      "parentId": "003",
      "name": {
        "en-us": "Zhongzheng District",
        "zh-tw": "中正區"
      }
    },
    {
      "id": "203",
      "parentId": "003",
      "name": {
        "en-us": "Zhongshan District",
        "zh-tw": "中山區"
      }
    },
    {
      "id": "204",
      "parentId": "003",
      "name": {
        "en-us": "Anle District",
        "zh-tw": "安樂區"
      }
    },
    {
      "id": "205",
      "parentId": "003",
      "name": {
        "en-us": "Nuannuan District",
        "zh-tw": "暖暖區"
      }
    },
    {
      "id": "206",
      "parentId": "003",
      "name": {
        "en-us": "Qidu District",
        "zh-tw": "七堵區"
      }
    },
    // 桃園市
    {
      "id": "320",
      "parentId": "004",
      "name": {
        "en-us": "Zhongli District",
        "zh-tw": "中壢區"
      }
    },
    {
      "id": "324",
      "parentId": "004",
      "name": {
        "en-us": "Pingzhen District",
        "zh-tw": "平鎮區"
      }
    },
    {
      "id": "325",
      "parentId": "004",
      "name": {
        "en-us": "Longtan District",
        "zh-tw": "龍潭區"
      }
    },
    {
      "id": "326",
      "parentId": "004",
      "name": {
        "en-us": "Yangmei District",
        "zh-tw": "楊梅區"
      }
    },
    {
      "id": "327",
      "parentId": "004",
      "name": {
        "en-us": "Xinwu District",
        "zh-tw": "新屋區"
      }
    },
    {
      "id": "328",
      "parentId": "004",
      "name": {
        "en-us": "Guanyin District",
        "zh-tw": "觀音區"
      }
    },
    {
      "id": "330",
      "parentId": "004",
      "name": {
        "en-us": "Taoyuan District",
        "zh-tw": "桃園區"
      }
    },
    {
      "id": "333",
      "parentId": "004",
      "name": {
        "en-us": "Guishan District",
        "zh-tw": "龜山區"
      }
    },
    {
      "id": "334",
      "parentId": "004",
      "name": {
        "en-us": "Bade District",
        "zh-tw": "八德區"
      }
    },
    {
      "id": "335",
      "parentId": "004",
      "name": {
        "en-us": "Daxi District",
        "zh-tw": "大溪區"
      }
    },
    {
      "id": "336",
      "parentId": "004",
      "name": {
        "en-us": "Fuxing District",
        "zh-tw": "復興區"
      }
    },
    {
      "id": "337",
      "parentId": "004",
      "name": {
        "en-us": "Dayuan District",
        "zh-tw": "大園區"
      }
    },
    {
      "id": "338",
      "parentId": "004",
      "name": {
        "en-us": "Luzhu District",
        "zh-tw": "蘆竹區"
      }
    },
    // 新竹市
    {
      "id": "3001",
      "parentId": "005",
      "name": {
        "en-us": "North District",
        "zh-tw": "北區"
      }
    },
    {
      "id": "3002",
      "parentId": "005",
      "name": {
        "en-us": "East District",
        "zh-tw": "東區"
      }
    },
    {
      "id": "3003",
      "parentId": "005",
      "name": {
        "en-us": "Xiangshan District",
        "zh-tw": "香山區"
      }
    },
    // 台中市
    {
      "id": "400",
      "parentId": "009",
      "name": {
        "en-us": "Central District",
        "zh-tw": "中區"
      }
    },
    {
      "id": "401",
      "parentId": "009",
      "name": {
        "en-us": "East District",
        "zh-tw": "東區"
      }
    },
    {
      "id": "402",
      "parentId": "009",
      "name": {
        "en-us": "South District",
        "zh-tw": "南區"
      }
    },
    {
      "id": "403",
      "parentId": "009",
      "name": {
        "en-us": "West District",
        "zh-tw": "西區"
      }
    },
    {
      "id": "404",
      "parentId": "009",
      "name": {
        "en-us": "North District",
        "zh-tw": "北區"
      }
    },
    {
      "id": "406",
      "parentId": "009",
      "name": {
        "en-us": "Beitun District",
        "zh-tw": "北屯區"
      }
    },
    {
      "id": "407",
      "parentId": "009",
      "name": {
        "en-us": "Xitun District",
        "zh-tw": "西屯區"
      }
    },
    {
      "id": "408",
      "parentId": "009",
      "name": {
        "en-us": "Nantun District",
        "zh-tw": "南屯區"
      }
    },
    {
      "id": "411",
      "parentId": "009",
      "name": {
        "en-us": "Taiping District",
        "zh-tw": "太平區"
      }
    },
    {
      "id": "412",
      "parentId": "009",
      "name": {
        "en-us": "Dali District",
        "zh-tw": "大里區"
      }
    },
    {
      "id": "413",
      "parentId": "009",
      "name": {
        "en-us": "Wufeng District",
        "zh-tw": "霧峰區"
      }
    },
    {
      "id": "414",
      "parentId": "009",
      "name": {
        "en-us": "Wuri District",
        "zh-tw": "烏日區"
      }
    },
    {
      "id": "420",
      "parentId": "009",
      "name": {
        "en-us": "Fengyuan District",
        "zh-tw": "豐原區"
      }
    },
    {
      "id": "421",
      "parentId": "009",
      "name": {
        "en-us": "Houli District",
        "zh-tw": "后里區"
      }
    },
    {
      "id": "422",
      "parentId": "009",
      "name": {
        "en-us": "Shigang District",
        "zh-tw": "石岡區"
      }
    },
    {
      "id": "423",
      "parentId": "009",
      "name": {
        "en-us": "Dongshi District",
        "zh-tw": "東勢區"
      }
    },
    {
      "id": "424",
      "parentId": "009",
      "name": {
        "en-us": "Heping District",
        "zh-tw": "和平區"
      }
    },
    {
      "id": "426",
      "parentId": "009",
      "name": {
        "en-us": "Xinshe District",
        "zh-tw": "新社區"
      }
    },
    {
      "id": "427",
      "parentId": "009",
      "name": {
        "en-us": "Tanzi District",
        "zh-tw": "潭子區"
      }
    },
    {
      "id": "428",
      "parentId": "009",
      "name": {
        "en-us": "Daya District",
        "zh-tw": "大雅區"
      }
    },
    {
      "id": "429",
      "parentId": "009",
      "name": {
        "en-us": "Shenji District",
        "zh-tw": "神岡區"
      }
    },
    {
      "id": "432",
      "parentId": "009",
      "name": {
        "en-us": "Dadu District",
        "zh-tw": "大肚區"
      }
    },
    {
      "id": "433",
      "parentId": "009",
      "name": {
        "en-us": "Shalu District",
        "zh-tw": "沙鹿區"
      }
    },
    {
      "id": "434",
      "parentId": "009",
      "name": {
        "en-us": "Longjing District",
        "zh-tw": "龍井區"
      }
    },
    {
      "id": "435",
      "parentId": "009",
      "name": {
        "en-us": "Wuqi District",
        "zh-tw": "梧棲區"
      }
    },
    {
      "id": "436",
      "parentId": "009",
      "name": {
        "en-us": "Qingshui District",
        "zh-tw": "清水區"
      }
    },
    {
      "id": "437",
      "parentId": "009",
      "name": {
        "en-us": "Dajia District",
        "zh-tw": "大甲區"
      }
    },
    {
      "id": "438",
      "parentId": "009",
      "name": {
        "en-us": "Waipu District",
        "zh-tw": "外埔區"
      }
    },
    {
      "id": "439",
      "parentId": "009",
      "name": {
        "en-us": "Da'an District",
        "zh-tw": "大安區"
      }
    },
    // 嘉義市
    {
      "id": "6001",
      "parentId": "014",
      "name": {
        "en-us": "East District",
        "zh-tw": "東區"
      }
    },
    {
      "id": "6002",
      "parentId": "014",
      "name": {
        "en-us": "West District",
        "zh-tw": "西區"
      }
    },
    // 台南市
    {
      "id": "700",
      "parentId": "015",
      "name": {
        "en-us": "Zhongxi District",
        "zh-tw": "中西區"
      }
    },
    {
      "id": "701",
      "parentId": "015",
      "name": {
        "en-us": "East District",
        "zh-tw": "東區"
      }
    },
    {
      "id": "702",
      "parentId": "015",
      "name": {
        "en-us": "South District",
        "zh-tw": "南區"
      }
    },
    {
      "id": "704",
      "parentId": "015",
      "name": {
        "en-us": "North District",
        "zh-tw": "北區"
      }
    },
    {
      "id": "708",
      "parentId": "015",
      "name": {
        "en-us": "Anping District",
        "zh-tw": "安平區"
      }
    },
    {
      "id": "709",
      "parentId": "015",
      "name": {
        "en-us": "Annan District",
        "zh-tw": "安南區"
      }
    },
    {
      "id": "710",
      "parentId": "015",
      "name": {
        "en-us": "Yongkang District",
        "zh-tw": "永康區"
      }
    },
    {
      "id": "711",
      "parentId": "015",
      "name": {
        "en-us": "Guiren District",
        "zh-tw": "歸仁區"
      }
    },
    {
      "id": "712",
      "parentId": "015",
      "name": {
        "en-us": "Xinhua District",
        "zh-tw": "新化區"
      }
    },
    {
      "id": "713",
      "parentId": "015",
      "name": {
        "en-us": "Zuozhen District",
        "zh-tw": "左鎮區"
      }
    },
    {
      "id": "714",
      "parentId": "015",
      "name": {
        "en-us": "Yujing District",
        "zh-tw": "玉井區"
      }
    },
    {
      "id": "715",
      "parentId": "015",
      "name": {
        "en-us": "Nanxi District",
        "zh-tw": "楠西區"
      }
    },
    {
      "id": "716",
      "parentId": "015",
      "name": {
        "en-us": "Nanhua District",
        "zh-tw": "南化區"
      }
    },
    {
      "id": "717",
      "parentId": "015",
      "name": {
        "en-us": "Rende District",
        "zh-tw": "仁德區"
      }
    },
    {
      "id": "718",
      "parentId": "015",
      "name": {
        "en-us": "Guanmiao District",
        "zh-tw": "關廟區"
      }
    },
    {
      "id": "719",
      "parentId": "015",
      "name": {
        "en-us": "Longqi District",
        "zh-tw": "龍崎區"
      }
    },
    {
      "id": "720",
      "parentId": "015",
      "name": {
        "en-us": "Guantian District",
        "zh-tw": "官田區"
      }
    },
    {
      "id": "721",
      "parentId": "015",
      "name": {
        "en-us": "Madou District",
        "zh-tw": "麻豆區"
      }
    },
    {
      "id": "722",
      "parentId": "015",
      "name": {
        "en-us": "Jiali District",
        "zh-tw": "佳里區"
      }
    },
    {
      "id": "723",
      "parentId": "015",
      "name": {
        "en-us": "Xigang District",
        "zh-tw": "西港區"
      }
    },
    {
      "id": "724",
      "parentId": "015",
      "name": {
        "en-us": "Qigu District",
        "zh-tw": "七股區"
      }
    },
    {
      "id": "725",
      "parentId": "015",
      "name": {
        "en-us": "Jiangjun District",
        "zh-tw": "將軍區"
      }
    },
    {
      "id": "726",
      "parentId": "015",
      "name": {
        "en-us": "Xuejia District",
        "zh-tw": "學甲區"
      }
    },
    {
      "id": "727",
      "parentId": "015",
      "name": {
        "en-us": "Beimen District",
        "zh-tw": "北門區"
      }
    },
    {
      "id": "730",
      "parentId": "015",
      "name": {
        "en-us": "Xinying District",
        "zh-tw": "新營區"
      }
    },
    {
      "id": "731",
      "parentId": "015",
      "name": {
        "en-us": "Houbi District",
        "zh-tw": "後壁區"
      }
    },
    {
      "id": "732",
      "parentId": "015",
      "name": {
        "en-us": "Baihe District",
        "zh-tw": "白河區"
      }
    },
    {
      "id": "733",
      "parentId": "015",
      "name": {
        "en-us": "Dongshan District",
        "zh-tw": "東山區"
      }
    },
    {
      "id": "734",
      "parentId": "015",
      "name": {
        "en-us": "Liujia District",
        "zh-tw": "六甲區"
      }
    },
    {
      "id": "735",
      "parentId": "015",
      "name": {
        "en-us": "Xiaying District",
        "zh-tw": "下營區"
      }
    },
    {
      "id": "736",
      "parentId": "015",
      "name": {
        "en-us": "Liuying District",
        "zh-tw": "柳營區"
      }
    },
    {
      "id": "737",
      "parentId": "015",
      "name": {
        "en-us": "Yanshui District",
        "zh-tw": "鹽水區"
      }
    },
    {
      "id": "741",
      "parentId": "015",
      "name": {
        "en-us": "Shanhua District",
        "zh-tw": "善化區"
      }
    },
    {
      "id": "741",
      "parentId": "015",
      "name": {
        "en-us": "Xinshi District",
        "zh-tw": "新市區"
      }
    },
    {
      "id": "742",
      "parentId": "015",
      "name": {
        "en-us": "Danei District",
        "zh-tw": "大內區"
      }
    },
    {
      "id": "743",
      "parentId": "015",
      "name": {
        "en-us": "Shanshang District",
        "zh-tw": "山上區"
      }
    },
    {
      "id": "744",
      "parentId": "015",
      "name": {
        "en-us": "Xinshi District",
        "zh-tw": "新市區"
      }
    },
    {
      "id": "745",
      "parentId": "015",
      "name": {
        "en-us": "Anding District",
        "zh-tw": "安定區"
      }
    },
    // 高雄市
    {
      "id": "800",
      "parentId": "016",
      "name": {
        "en-us": "Xinxing District",
        "zh-tw": "新興區"
      }
    },
    {
      "id": "801",
      "parentId": "016",
      "name": {
        "en-us": "Qianjin District",
        "zh-tw": "前金區"
      }
    },
    {
      "id": "802",
      "parentId": "016",
      "name": {
        "en-us": "Lingya District",
        "zh-tw": "苓雅區"
      }
    },
    {
      "id": "803",
      "parentId": "016",
      "name": {
        "en-us": "Yancheng District",
        "zh-tw": "鹽埕區"
      }
    },
    {
      "id": "804",
      "parentId": "016",
      "name": {
        "en-us": "Gushan District",
        "zh-tw": "鼓山區"
      }
    },
    {
      "id": "805",
      "parentId": "016",
      "name": {
        "en-us": "Qijin District",
        "zh-tw": "旗津區"
      }
    },
    {
      "id": "806",
      "parentId": "016",
      "name": {
        "en-us": "Qianzhen District",
        "zh-tw": "前鎮區"
      }
    },
    {
      "id": "807",
      "parentId": "016",
      "name": {
        "en-us": "Sanmin District",
        "zh-tw": "三民區"
      }
    },
    {
      "id": "811",
      "parentId": "016",
      "name": {
        "en-us": "Nanzi District",
        "zh-tw": "楠梓區"
      }
    },
    {
      "id": "812",
      "parentId": "016",
      "name": {
        "en-us": "Xiaogang District",
        "zh-tw": "小港區"
      }
    },
    {
      "id": "813",
      "parentId": "016",
      "name": {
        "en-us": "Zuoying District",
        "zh-tw": "左營區"
      }
    },
    {
      "id": "814",
      "parentId": "016",
      "name": {
        "en-us": "Renwu District",
        "zh-tw": "仁武區"
      }
    },
    {
      "id": "815",
      "parentId": "016",
      "name": {
        "en-us": "Dashe District",
        "zh-tw": "大社區"
      }
    },
    {
      "id": "820",
      "parentId": "016",
      "name": {
        "en-us": "Gangshan District",
        "zh-tw": "岡山區"
      }
    },
    {
      "id": "821",
      "parentId": "016",
      "name": {
        "en-us": "Luzhu District",
        "zh-tw": "路竹區"
      }
    },
    {
      "id": "822",
      "parentId": "016",
      "name": {
        "en-us": "Alian District",
        "zh-tw": "阿蓮區"
      }
    },
    {
      "id": "823",
      "parentId": "016",
      "name": {
        "en-us": "Tianliao District",
        "zh-tw": "田寮區"
      }
    },
    {
      "id": "824",
      "parentId": "016",
      "name": {
        "en-us": "Yanchao District",
        "zh-tw": "燕巢區"
      }
    },
    {
      "id": "825",
      "parentId": "016",
      "name": {
        "en-us": "Qiaotou District",
        "zh-tw": "橋頭區"
      }
    },
    {
      "id": "826",
      "parentId": "016",
      "name": {
        "en-us": "Ziguan District",
        "zh-tw": "梓官區"
      }
    },
    {
      "id": "827",
      "parentId": "016",
      "name": {
        "en-us": "Mituo District",
        "zh-tw": "彌陀區"
      }
    },
    {
      "id": "828",
      "parentId": "016",
      "name": {
        "en-us": "Yong'an District",
        "zh-tw": "永安區"
      }
    },
    {
      "id": "829",
      "parentId": "016",
      "name": {
        "en-us": "Hunei District",
        "zh-tw": "湖內區"
      }
    },
    {
      "id": "830",
      "parentId": "016",
      "name": {
        "en-us": "Fengshan District",
        "zh-tw": "鳳山區"
      }
    },
    {
      "id": "831",
      "parentId": "016",
      "name": {
        "en-us": "Daliao District",
        "zh-tw": "大寮區"
      }
    },
    {
      "id": "832",
      "parentId": "016",
      "name": {
        "en-us": "Linyuan District",
        "zh-tw": "林園區"
      }
    },
    {
      "id": "833",
      "parentId": "016",
      "name": {
        "en-us": "Niaosong District",
        "zh-tw": "鳥松區"
      }
    },
    {
      "id": "840",
      "parentId": "016",
      "name": {
        "en-us": "Dashu District",
        "zh-tw": "大樹區"
      }
    },
    {
      "id": "842",
      "parentId": "016",
      "name": {
        "en-us": "Qishan District",
        "zh-tw": "旗山區"
      }
    },
    {
      "id": "843",
      "parentId": "016",
      "name": {
        "en-us": "Meinong District",
        "zh-tw": "美濃區"
      }
    },
    {
      "id": "844",
      "parentId": "016",
      "name": {
        "en-us": "Liugui District",
        "zh-tw": "六龜區"
      }
    },
    {
      "id": "845",
      "parentId": "016",
      "name": {
        "en-us": "Neimen District",
        "zh-tw": "內門區"
      }
    },
    {
      "id": "846",
      "parentId": "016",
      "name": {
        "en-us": "Shanlin District",
        "zh-tw": "杉林區"
      }
    },
    {
      "id": "847",
      "parentId": "016",
      "name": {
        "en-us": "Jiaxian District",
        "zh-tw": "甲仙區"
      }
    },
    {
      "id": "848",
      "parentId": "016",
      "name": {
        "en-us": "Taoyuan District",
        "zh-tw": "桃源區"
      }
    },
    {
      "id": "849",
      "parentId": "016",
      "name": {
        "en-us": "Namaxia District",
        "zh-tw": "那瑪夏區"
      }
    },
    {
      "id": "851",
      "parentId": "016",
      "name": {
        "en-us": "Maolin District",
        "zh-tw": "茂林區"
      }
    },
    {
      "id": "852",
      "parentId": "016",
      "name": {
        "en-us": "Qieding District",
        "zh-tw": "茄萣區"
      }
    }
  ]
};

const firebaseConfig = {
  apiKey: "AIzaSyDK4oyUymNza1CROMlzGTrmSvT25FiZdQU",
  authDomain: "hairsalon-64629.firebaseapp.com",
  projectId: "hairsalon-64629",
  storageBucket: "hairsalon-64629.appspot.com",
  messagingSenderId: "557131081488",
  appId: "1:557131081488:web:a6b5cac76c899863136795"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection references
const regionsRef = collection(db, "divisions/regions/items");
const citiesRef = collection (db, "divisions/cities/items");
const districtsRef = collection(db, "divisions/districts/items");

// get real-time collection data
onSnapshot(query(districtsRef, orderBy("id")), snapshot => {
  snapshot.docs.forEach(doc => {
  });
});
