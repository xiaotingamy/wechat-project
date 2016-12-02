//index.js
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../images/a1.jpg',
      '../../images/a2.jpg',
      '../../images/a3.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  toLogin: function() {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  toReg: function() {
    wx.navigateTo({
      url: '../register/register'
    })
  }
})
