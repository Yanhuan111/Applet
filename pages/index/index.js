//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  imgUrls:[
    '../../images/1.jpg',
    '../../images/2.jpg',
    '../../images/3.jpg',
    '../../images/4.jpg'
  ],
  autoplay:true,
  interval:3000,
  duration:500
  },
  order: function(opotions){
    wx.navigateTo({
      url: '../../pages/choose/choose',
    })
  },
})
