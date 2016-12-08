//app.js
App({
  // onLaunch 小程序初始化 （全局只触发一次）
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  // 开发者可以添加任意的函数 或者数据，通过this可以访问
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  // 数据对象  通过this可以访问
  globalData:{
    userInfo:null
  }
})

// 注意之处：
// App() 必须在 app.js 中注册，且不能注册多个。

//不要在定义于 App() 内的函数中调用 getApp() ，
//使用 this 就可以拿到 app 实例。

//不要在 onLaunch 的时候调用 getCurrentPage()，
//此时 page 还没有生成。

//通过 getApp() 获取实例之后，不要私自调用生命周期函数。