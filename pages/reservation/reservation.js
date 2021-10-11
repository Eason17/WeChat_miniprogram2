const Constant = require( '../../common/constant.js' );
const util = require( '../../common/utils.js' );
Page( {
  data: {
  },
  
  //输入框绑定的事件
  bindKeyInput: function( e ) {
    let value = e.detail.value;
    //输入框,当输入的值大于0的时候按钮可用
    this.setData( {
      inputValue: value,
      disabled: !value.length > 0
    });
  },

  toggleDialog1() {
    wx.navigateTo({
      url: '../result/result',
    })
  },
})