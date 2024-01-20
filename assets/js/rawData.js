import { firebaseConfig } from "@js/components/config"
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";

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
      name: {
        "en-us": "Taipei City",
        "zh-tw": "臺北市"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Northern Area",
          "zh-tw": "北部"
        }
      }
    },
    {
      id: "002",
      name: {
        "en-us": "New Taipei City",
        "zh-tw": "新北市"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Northern Area",
          "zh-tw": "北部"
        }
      }
    },
    {
      id: "003",
      name: {
        "en-us": "Keelong City",
        "zh-tw": "基隆市"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Northern Area",
          "zh-tw": "北部"
        }
      }
    },
    {
      id: "004",
      name: {
        "en-us": "Taoyuan City",
        "zh-tw": "桃園市"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Northern Area",
          "zh-tw": "北部"
        }
      }
    },
    {
      id: "005",
      name: {
        "en-us": "Hsinchu City",
        "zh-tw": "新竹市"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Northern Area",
          "zh-tw": "北部"
        }
      }
    },
    {
      id: "006",
      name: {
        "en-us": "Hsinchu County",
        "zh-tw": "新竹縣"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Northern Area",
          "zh-tw": "北部"
        }
      }
    },
    {
      id: "007",
      name: {
        "en-us": "Yilan County",
        "zh-tw": "宜蘭縣"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Northern Area",
          "zh-tw": "北部"
        }
      }
    },
    {
      id: "008",
      name: {
        "en-us": "Miaoli County",
        "zh-tw": "苗栗縣"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "Central Area",
          "zh-tw": "中部"
        }
      }
    },
    {
      id: "009",
      name: {
        "en-us": "Taichung City",
        "zh-tw": "臺中市"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "Central Area",
          "zh-tw": "中部"
        }
      }
    },
    {
      id: "010",
      name: {
        "en-us": "Changhua County",
        "zh-tw": "彰化縣"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "Central Area",
          "zh-tw": "中部"
        }
      }
    },
    {
      id: "011",
      name: {
        "en-us": "Nantou County",
        "zh-tw": "南投縣"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "Central Area",
          "zh-tw": "中部"
        }
      }
    },
    {
      id: "012",
      name: {
        "en-us": "Yunlin County",
        "zh-tw": "雲林縣"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "Central Area",
          "zh-tw": "中部"
        }
      }
    },
    {
      id: "013",
      name: {
        "en-us": "Chiayi County",
        "zh-tw": "嘉義縣"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Southern Area",
          "zh-tw": "南部"
        }
      }
    },
    {
      id: "014",
      name: {
        "en-us": "Chiayi City",
        "zh-tw": "嘉義市"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Southern Area",
          "zh-tw": "南部"
        }
      }
    },
    {
      id: "015",
      name: {
        "en-us": "Tainan City",
        "zh-tw": "臺南市"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Southern Area",
          "zh-tw": "南部"
        }
      }
    },
    {
      id: "016",
      name: {
        "en-us": "Kaohsiung City",
        "zh-tw": "高雄市"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Southern Area",
          "zh-tw": "南部"
        }
      }
    },
    {
      id: "017",
      name: {
        "en-us": "Pingtung County",
        "zh-tw": "屏東縣"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Southern Area",
          "zh-tw": "南部"
        }
      }
    },
    {
      id: "018",
      name: {
        "en-us": "Penghu County",
        "zh-tw": "澎湖縣"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Southern Area",
          "zh-tw": "南部"
        }
      }
    },
    {
      id: "019",
      name: {
        "en-us": "Hualien County",
        "zh-tw": "花蓮縣"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Eastern Area",
          "zh-tw": "東部"
        }
      }
    },
    {
      id: "020",
      name: {
        "en-us": "Taitung County",
        "zh-tw": "臺東縣"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Eastern Area",
          "zh-tw": "東部"
        }
      }
    },
    {
      id: "021",
      name: {
        "en-us": "Kinmen County",
        "zh-tw": "金門縣"
      },
      parent: {
        id: "005",
        name: {
          "en-us": "Outlying Islands Area",
          "zh-tw": "離島"
        }
      }
    },
    {
      id: "022",
      name: {
        "en-us": "Lienchiang County",
        "zh-tw": "連江縣"
      },
      parent: {
        id: "005",
        name: {
          "en-us": "Outlying Islands Area",
          "zh-tw": "離島"
        }
      }
    },
  ],
  layer3: [
    // 台北市
    {
      "id": "100",
      "name": {
        "en-us": "Zhongzheng District",
        "zh-tw": "中正區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "103",
      "name": {
        "en-us": "Datong District",
        "zh-tw": "大同區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "104",
      "name": {
        "en-us": "Zhongshan District",
        "zh-tw": "中山區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "105",
      "name": {
        "en-us": "Songshan District",
        "zh-tw": "松山區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "106",
      "name": {
        "en-us": "Da'an District",
        "zh-tw": "大安區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "108",
      "name": {
        "en-us": "Wanhua District",
        "zh-tw": "萬華區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "110",
      "name": {
        "en-us": "Xinyi District",
        "zh-tw": "信義區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "111",
      "name": {
        "en-us": "Shilin District",
        "zh-tw": "士林區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "112",
      "name": {
        "en-us": "Beitou District",
        "zh-tw": "北投區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "114",
      "name": {
        "en-us": "Neihu District",
        "zh-tw": "內湖區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "115",
      "name": {
        "en-us": "Nangang District",
        "zh-tw": "南港區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "116",
      "name": {
        "en-us": "Wenshan District",
        "zh-tw": "文山區"
      },
      parent: {
        id: "001",
        name: {
          "en-us": "Taipei City",
          "zh-tw": "臺北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    // 新北市
    {
      "id": "207",
      "name": {
        "en-us": "Wanli District",
        "zh-tw": "萬里區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "208",
      "name": {
        "en-us": "Jinshan District",
        "zh-tw": "金山區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "220",
      "name": {
        "en-us": "Banqiao District",
        "zh-tw": "板橋區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "221",
      "name": {
        "en-us": "Xizhi District",
        "zh-tw": "汐止區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "222",
      "name": {
        "en-us": "Shenkeng District",
        "zh-tw": "深坑區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "223",
      "name": {
        "en-us": "Shiding District",
        "zh-tw": "石碇區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "224",
      "name": {
        "en-us": "Ruifang District",
        "zh-tw": "瑞芳區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "226",
      "name": {
        "en-us": "Pingxi District",
        "zh-tw": "平溪區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "227",
      "name": {
        "en-us": "Shuangxi District",
        "zh-tw": "雙溪區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "228",
      "name": {
        "en-us": "Gongliao District",
        "zh-tw": "貢寮區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "231",
      "name": {
        "en-us": "Xindian District",
        "zh-tw": "新店區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "232",
      "name": {
        "en-us": "Pinglin District",
        "zh-tw": "坪林區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "233",
      "name": {
        "en-us": "Wulai District",
        "zh-tw": "烏來區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "234",
      "name": {
        "en-us": "Yonghe District",
        "zh-tw": "永和區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "235",
      "name": {
        "en-us": "Zhonghe District",
        "zh-tw": "中和區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "236",
      "name": {
        "en-us": "Tucheng District",
        "zh-tw": "土城區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "237",
      "name": {
        "en-us": "Sanxia District",
        "zh-tw": "三峽區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "238",
      "name": {
        "en-us": "Shulin District",
        "zh-tw": "樹林區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "239",
      "name": {
        "en-us": "Yingge District",
        "zh-tw": "鶯歌區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "241",
      "name": {
        "en-us": "Sanchong District",
        "zh-tw": "三重區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "242",
      "name": {
        "en-us": "Xinzhuang District",
        "zh-tw": "新莊區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "243",
      "name": {
        "en-us": "Taishan District",
        "zh-tw": "泰山區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "244",
      "name": {
        "en-us": "Linkou District",
        "zh-tw": "林口區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "247",
      "name": {
        "en-us": "Luzhou District",
        "zh-tw": "蘆洲區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "248",
      "name": {
        "en-us": "Wugu District",
        "zh-tw": "五股區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "249",
      "name": {
        "en-us": "Bali District",
        "zh-tw": "八里區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "251",
      "name": {
        "en-us": "Tamsui District",
        "zh-tw": "淡水區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "252",
      "name": {
        "en-us": "Sanjhih District",
        "zh-tw": "三芝區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "253",
      "name": {
        "en-us": "Shimen District",
        "zh-tw": "石門區"
      },
      parent: {
        id: "002",
        name: {
          "en-us": "New Taipei City",
          "zh-tw": "新北市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    // 基隆市
    {
      "id": "200",
      "name": {
        "en-us": "Ren'ai District",
        "zh-tw": "仁愛區"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Keelong City",
          "zh-tw": "基隆市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "201",
      "name": {
        "en-us": "Xinyi District",
        "zh-tw": "信義區"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Keelong City",
          "zh-tw": "基隆市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "202",
      "name": {
        "en-us": "Zhongzheng District",
        "zh-tw": "中正區"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Keelong City",
          "zh-tw": "基隆市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "203",
      "name": {
        "en-us": "Zhongshan District",
        "zh-tw": "中山區"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Keelong City",
          "zh-tw": "基隆市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "204",
      "name": {
        "en-us": "Anle District",
        "zh-tw": "安樂區"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Keelong City",
          "zh-tw": "基隆市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "205",
      "name": {
        "en-us": "Nuannuan District",
        "zh-tw": "暖暖區"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Keelong City",
          "zh-tw": "基隆市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "206",
      "name": {
        "en-us": "Qidu District",
        "zh-tw": "七堵區"
      },
      parent: {
        id: "003",
        name: {
          "en-us": "Keelong City",
          "zh-tw": "基隆市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    // 桃園市
    {
      "id": "320",
      "name": {
        "en-us": "Zhongli District",
        "zh-tw": "中壢區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "324",
      "name": {
        "en-us": "Pingzhen District",
        "zh-tw": "平鎮區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "325",
      "name": {
        "en-us": "Longtan District",
        "zh-tw": "龍潭區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "326",
      "name": {
        "en-us": "Yangmei District",
        "zh-tw": "楊梅區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "327",
      "name": {
        "en-us": "Xinwu District",
        "zh-tw": "新屋區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "328",
      "name": {
        "en-us": "Guanyin District",
        "zh-tw": "觀音區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "330",
      "name": {
        "en-us": "Taoyuan District",
        "zh-tw": "桃園區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "333",
      "name": {
        "en-us": "Guishan District",
        "zh-tw": "龜山區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "334",
      "name": {
        "en-us": "Bade District",
        "zh-tw": "八德區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "335",
      "name": {
        "en-us": "Daxi District",
        "zh-tw": "大溪區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "336",
      "name": {
        "en-us": "Fuxing District",
        "zh-tw": "復興區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "337",
      "name": {
        "en-us": "Dayuan District",
        "zh-tw": "大園區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "338",
      "name": {
        "en-us": "Luzhu District",
        "zh-tw": "蘆竹區"
      },
      parent: {
        id: "004",
        name: {
          "en-us": "Taoyuan City",
          "zh-tw": "桃園市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    // 新竹市
    {
      "id": "3001",
      "name": {
        "en-us": "North District",
        "zh-tw": "北區"
      },
      parent: {
        id: "005",
        name: {
          "en-us": "Hsinchu City",
          "zh-tw": "新竹市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "3002",
      "name": {
        "en-us": "East District",
        "zh-tw": "東區"
      },
      parent: {
        id: "005",
        name: {
          "en-us": "Hsinchu City",
          "zh-tw": "新竹市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    {
      "id": "3003",
      "name": {
        "en-us": "Xiangshan District",
        "zh-tw": "香山區"
      },
      parent: {
        id: "005",
        name: {
          "en-us": "Hsinchu City",
          "zh-tw": "新竹市"
        },
        parent: {
          id: "001",
          name: {
            "en-us": "Northern Area",
            "zh-tw": "北部"
          }
        }
      }
    },
    // 台中市
    {
      "id": "400",
      "name": {
        "en-us": "Central District",
        "zh-tw": "中區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "401",
      "name": {
        "en-us": "East District",
        "zh-tw": "東區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "402",
      "name": {
        "en-us": "South District",
        "zh-tw": "南區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "403",
      "name": {
        "en-us": "West District",
        "zh-tw": "西區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "404",
      "name": {
        "en-us": "North District",
        "zh-tw": "北區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "406",
      "name": {
        "en-us": "Beitun District",
        "zh-tw": "北屯區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "407",
      "name": {
        "en-us": "Xitun District",
        "zh-tw": "西屯區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "408",
      "name": {
        "en-us": "Nantun District",
        "zh-tw": "南屯區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "411",
      "name": {
        "en-us": "Taiping District",
        "zh-tw": "太平區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "412",
      "name": {
        "en-us": "Dali District",
        "zh-tw": "大里區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "413",
      "name": {
        "en-us": "Wufeng District",
        "zh-tw": "霧峰區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "414",
      "name": {
        "en-us": "Wuri District",
        "zh-tw": "烏日區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "420",
      "name": {
        "en-us": "Fengyuan District",
        "zh-tw": "豐原區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "421",
      "name": {
        "en-us": "Houli District",
        "zh-tw": "后里區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "422",
      "name": {
        "en-us": "Shigang District",
        "zh-tw": "石岡區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "423",
      "name": {
        "en-us": "Dongshi District",
        "zh-tw": "東勢區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "424",
      "name": {
        "en-us": "Heping District",
        "zh-tw": "和平區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "426",
      "name": {
        "en-us": "Xinshe District",
        "zh-tw": "新社區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "427",
      "name": {
        "en-us": "Tanzi District",
        "zh-tw": "潭子區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "428",
      "name": {
        "en-us": "Daya District",
        "zh-tw": "大雅區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "429",
      "name": {
        "en-us": "Shenji District",
        "zh-tw": "神岡區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "432",
      "name": {
        "en-us": "Dadu District",
        "zh-tw": "大肚區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "433",
      "name": {
        "en-us": "Shalu District",
        "zh-tw": "沙鹿區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "434",
      "name": {
        "en-us": "Longjing District",
        "zh-tw": "龍井區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "435",
      "name": {
        "en-us": "Wuqi District",
        "zh-tw": "梧棲區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "436",
      "name": {
        "en-us": "Qingshui District",
        "zh-tw": "清水區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "437",
      "name": {
        "en-us": "Dajia District",
        "zh-tw": "大甲區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "438",
      "name": {
        "en-us": "Waipu District",
        "zh-tw": "外埔區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    {
      "id": "439",
      "name": {
        "en-us": "Da'an District",
        "zh-tw": "大安區"
      },
      parent: {
        id: "009",
        name: {
          "en-us": "Taichung City",
          "zh-tw": "臺中市"
        },
        parent: {
          id: "002",
          name: {
            "en-us": "Central Area",
            "zh-tw": "中部"
          }
        }
      }
    },
    // 嘉義市
    {
      "id": "6001",
      "name": {
        "en-us": "East District",
        "zh-tw": "東區"
      },
      parent: {
        id: "013",
        name: {
          "en-us": "Chiayi County",
          "zh-tw": "嘉義縣"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "6002",
      "name": {
        "en-us": "West District",
        "zh-tw": "西區"
      },
      parent: {
        id: "013",
        name: {
          "en-us": "Chiayi County",
          "zh-tw": "嘉義縣"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    // 台南市
    {
      "id": "700",
      "name": {
        "en-us": "Zhongxi District",
        "zh-tw": "中西區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "701",
      "name": {
        "en-us": "East District",
        "zh-tw": "東區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "702",
      "name": {
        "en-us": "South District",
        "zh-tw": "南區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "704",
      "name": {
        "en-us": "North District",
        "zh-tw": "北區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "708",
      "name": {
        "en-us": "Anping District",
        "zh-tw": "安平區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "709",
      "name": {
        "en-us": "Annan District",
        "zh-tw": "安南區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "710",
      "name": {
        "en-us": "Yongkang District",
        "zh-tw": "永康區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "711",
      "name": {
        "en-us": "Guiren District",
        "zh-tw": "歸仁區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "712",
      "name": {
        "en-us": "Xinhua District",
        "zh-tw": "新化區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "713",
      "name": {
        "en-us": "Zuozhen District",
        "zh-tw": "左鎮區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "714",
      "name": {
        "en-us": "Yujing District",
        "zh-tw": "玉井區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "715",
      "name": {
        "en-us": "Nanxi District",
        "zh-tw": "楠西區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "716",
      "name": {
        "en-us": "Nanhua District",
        "zh-tw": "南化區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "717",
      "name": {
        "en-us": "Rende District",
        "zh-tw": "仁德區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "718",
      "name": {
        "en-us": "Guanmiao District",
        "zh-tw": "關廟區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "719",
      "name": {
        "en-us": "Longqi District",
        "zh-tw": "龍崎區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "720",
      "name": {
        "en-us": "Guantian District",
        "zh-tw": "官田區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "721",
      "name": {
        "en-us": "Madou District",
        "zh-tw": "麻豆區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "722",
      "name": {
        "en-us": "Jiali District",
        "zh-tw": "佳里區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "723",
      "name": {
        "en-us": "Xigang District",
        "zh-tw": "西港區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "724",
      "name": {
        "en-us": "Qigu District",
        "zh-tw": "七股區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "725",
      "name": {
        "en-us": "Jiangjun District",
        "zh-tw": "將軍區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "726",
      "name": {
        "en-us": "Xuejia District",
        "zh-tw": "學甲區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "727",
      "name": {
        "en-us": "Beimen District",
        "zh-tw": "北門區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "730",
      "name": {
        "en-us": "Xinying District",
        "zh-tw": "新營區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "731",
      "name": {
        "en-us": "Houbi District",
        "zh-tw": "後壁區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "732",
      "name": {
        "en-us": "Baihe District",
        "zh-tw": "白河區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "733",
      "name": {
        "en-us": "Dongshan District",
        "zh-tw": "東山區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "734",
      "name": {
        "en-us": "Liujia District",
        "zh-tw": "六甲區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "735",
      "name": {
        "en-us": "Xiaying District",
        "zh-tw": "下營區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "736",
      "name": {
        "en-us": "Liuying District",
        "zh-tw": "柳營區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "737",
      "name": {
        "en-us": "Yanshui District",
        "zh-tw": "鹽水區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "741",
      "name": {
        "en-us": "Shanhua District",
        "zh-tw": "善化區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "741",
      "name": {
        "en-us": "Xinshi District",
        "zh-tw": "新市區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "742",
      "name": {
        "en-us": "Danei District",
        "zh-tw": "大內區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "743",
      "name": {
        "en-us": "Shanshang District",
        "zh-tw": "山上區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "744",
      "name": {
        "en-us": "Xinshi District",
        "zh-tw": "新市區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "745",
      "name": {
        "en-us": "Anding District",
        "zh-tw": "安定區"
      },
      parent: {
        id: "015",
        name: {
          "en-us": "Tainan City",
          "zh-tw": "臺南市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    // 高雄市
    {
      "id": "800",
      "name": {
        "en-us": "Xinxing District",
        "zh-tw": "新興區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "801",
      "name": {
        "en-us": "Qianjin District",
        "zh-tw": "前金區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "802",
      "name": {
        "en-us": "Lingya District",
        "zh-tw": "苓雅區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "803",
      "name": {
        "en-us": "Yancheng District",
        "zh-tw": "鹽埕區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "804",
      "name": {
        "en-us": "Gushan District",
        "zh-tw": "鼓山區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "805",
      "name": {
        "en-us": "Qijin District",
        "zh-tw": "旗津區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "806",
      "name": {
        "en-us": "Qianzhen District",
        "zh-tw": "前鎮區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "807",
      "name": {
        "en-us": "Sanmin District",
        "zh-tw": "三民區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "811",
      "name": {
        "en-us": "Nanzi District",
        "zh-tw": "楠梓區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "812",
      "name": {
        "en-us": "Xiaogang District",
        "zh-tw": "小港區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "813",
      "name": {
        "en-us": "Zuoying District",
        "zh-tw": "左營區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "814",
      "name": {
        "en-us": "Renwu District",
        "zh-tw": "仁武區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "815",
      "name": {
        "en-us": "Dashe District",
        "zh-tw": "大社區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "820",
      "name": {
        "en-us": "Gangshan District",
        "zh-tw": "岡山區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "821",
      "name": {
        "en-us": "Luzhu District",
        "zh-tw": "路竹區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "822",
      "name": {
        "en-us": "Alian District",
        "zh-tw": "阿蓮區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "823",
      "name": {
        "en-us": "Tianliao District",
        "zh-tw": "田寮區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "824",
      "name": {
        "en-us": "Yanchao District",
        "zh-tw": "燕巢區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "825",
      "name": {
        "en-us": "Qiaotou District",
        "zh-tw": "橋頭區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "826",
      "name": {
        "en-us": "Ziguan District",
        "zh-tw": "梓官區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "827",
      "name": {
        "en-us": "Mituo District",
        "zh-tw": "彌陀區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "828",
      "name": {
        "en-us": "Yong'an District",
        "zh-tw": "永安區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "829",
      "name": {
        "en-us": "Hunei District",
        "zh-tw": "湖內區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "830",
      "name": {
        "en-us": "Fengshan District",
        "zh-tw": "鳳山區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "831",
      "name": {
        "en-us": "Daliao District",
        "zh-tw": "大寮區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "832",
      "name": {
        "en-us": "Linyuan District",
        "zh-tw": "林園區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "833",
      "name": {
        "en-us": "Niaosong District",
        "zh-tw": "鳥松區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "840",
      "name": {
        "en-us": "Dashu District",
        "zh-tw": "大樹區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "842",
      "name": {
        "en-us": "Qishan District",
        "zh-tw": "旗山區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "843",
      "name": {
        "en-us": "Meinong District",
        "zh-tw": "美濃區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "844",
      "name": {
        "en-us": "Liugui District",
        "zh-tw": "六龜區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "845",
      "name": {
        "en-us": "Neimen District",
        "zh-tw": "內門區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "846",
      "name": {
        "en-us": "Shanlin District",
        "zh-tw": "杉林區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "847",
      "name": {
        "en-us": "Jiaxian District",
        "zh-tw": "甲仙區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "848",
      "name": {
        "en-us": "Taoyuan District",
        "zh-tw": "桃源區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "849",
      "name": {
        "en-us": "Namaxia District",
        "zh-tw": "那瑪夏區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "851",
      "name": {
        "en-us": "Maolin District",
        "zh-tw": "茂林區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    },
    {
      "id": "852",
      "name": {
        "en-us": "Qieding District",
        "zh-tw": "茄萣區"
      },
      parent: {
        id: "016",
        name: {
          "en-us": "Kaohsiung City",
          "zh-tw": "高雄市"
        },
        parent: {
          id: "003",
          name: {
            "en-us": "Southern Area",
            "zh-tw": "南部"
          }
        }
      }
    }
  ]
};

initializeApp(firebaseConfig);

const db = getFirestore();

const citiesRef = collection(db, "divisions/cities/items");
const districtsRef = collection(db, "divisions/districts/items");
const statsRef = collection(db, "divisions/statistics/items");

// rawData.layer1.forEach(async item => {
//   await setDoc(doc(db, "divisions/regions/items", item.id), item);
//   console.log("success!");
// });
// rawData.layer2.forEach(async item => {
//   await setDoc(doc(db, "divisions/cities/items", item.id), item);
//   console.log("success!");
// });
// rawData.layer3.forEach(async item => {
//   await setDoc(doc(db, "divisions/districts/items", item.id), item);
//   console.log("success!");
// });