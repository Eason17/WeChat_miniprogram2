Page({
  data: {
    phone: 'admin',
    password:'123456'
  },
 
// 获取输入账号
  phoneInput :function (e) {
    this.setData({
      phone:e.detail.value
    })
  },
 
// 获取输入密码
  passwordInput :function (e) {
    this.setData({
      password:e.detail.value
    })
  },
 
// 登录
  login: function () {
    if(this.data.phone.length == 0 || this.data.password.length == 0){
      wx.showToast({  
        title: '空用户名/密码', 
        icon: 'loading', 
        duration: 1500
      })
}
else{
  // 这里修改成跳转的页面
      wx.showToast({  
        title: '登录成功',  
        icon: 'success',  
        duration: 500  
      })

      wx.switchTab({
        url: 'reservation/reservation',
      })
    }
  },

  register: function(){
    wx.navigateTo({
      url: 'register',
    })
  }
})