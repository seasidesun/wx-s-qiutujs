//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hi Man',
    userInfo: {},
    movements: [
        {
          "position": 1,
          "name": "俯卧撑",
          "nameEn": "Push Up",
          "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_pushup.png",
          "level": 1,
          "muscleGroup": "胸肌（胸大肌和胸小肌）、三角肌前束、肱三头肌",
          "muscleGroupImgList": "http://epaper.dfdaily.com/dfzb/res/1/1/2015-02/25/A12/res07_attpic_brief.jpg",
          "backgroundImgUrl": "steps_1_10_1.png",
          "descriptions": "  不同形式的俯卧撑锻炼肌肉的程度不同,但俯卧撑的所有变式都能增强力量、打肌肉。 俯卧撑尤其锻炼胸大肌、三角肌前束和胸小肌,从而最大限度地发展你躯干上的推力肌肉。 此外,俯卧撑还能够锻炼肱三头肌(上臂的主要肌肉)的三个头。",
          "slogan": "铠甲般的胸肌与钢铁般的肱三头肌"
        },
        {
          "position": 2,
          "name": "深蹲",
          "nameEn": "Squats",
          "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_squat.png",
          "level": 1,
          "muscleGroup": "",
          "muscleGroupImgList": "",
          "backgroundImgUrl": "steps_2_10_1.png",
          "descriptions": "",
          "slogan": "升降机般的大腿"
        },
        {
          "position": 3,
          "name": "引体向上",
          "nameEn": "Pull Up",
          "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_pullup.png",
          "level": 3,
          "muscleGroup": "",
          "muscleGroupImgList": "",
          "backgroundImgUrl": "steps_3_10_1.png",
          "descriptions": "",
          "slogan": "仓门般的背部与大炮般的肱二头肌"
        },
        {
          "position": 4,
          "name": "举腿",
          "nameEn": "Leg Raise",
          "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_legraise.png",
          "level": 2,
          "muscleGroup": "",
          "muscleGroupImgList": "",
          "backgroundImgUrl": "steps_4_10_2.png",
          "descriptions": "",
          "slogan": "魔鬼六块"
        },
        {
          "position": 5,
          "name": "桥",
          "nameEn": "Bridge",
          "level": 5,
          "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_bridges.png",
          "muscleGroup": "",
          "muscleGroupImgList": "",
          "backgroundImgUrl": "steps_5_10_1.png",
          "descriptions": "",
          "slogan": "严阵以待的脊柱"
        },
        {
          "position": 6,
          "name": "倒立撑",
          "nameEn": "Hand Stand",
          "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_handstand.png",
          "level": 4,
          "muscleGroup": "",
          "muscleGroupImgList": "",
          "backgroundImgUrl": "steps_6_10_1.png",
          "descriptions": "",
          "slogan": "健康、强力的肩膀"
        }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
