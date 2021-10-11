var dateTimePicker = require('../../common/dateTimePicker.js')

Page( {
  data: {  //状态机数据
    inputValue: "", //输入的内容
    loading: false, //加载状态
    disabled: true, //按钮是否可用
    hiddenModal: true, //modal弹出状态
    listData:[
      {"code":"30001","text":"飞云楼107","type":"1"},
      {"code":"30002","text":"杏林楼一教","type":"1"},
      {"code":"30003","text":"格致楼211","type":"1"},
      {"code":"30004","text":"公用机房","type":"5"},
      {"code":"30005","text":"可用自习室","type":"179"},
      {"code":"30006","text":"Dell灵越","type":"30"},
      {"code":"30007","text":"CSE 1000","type":"7"},
      {"code":"30008","text":"三脚架","type":"34"},
      {"code":"30009","text":"电动三轮车","type":"17"},
      {"code":"30010","text":"手推车","type":"84"},
      {"code":"30011","text":"研讨室","type":"23"},
      {"code":"30012","text":"大会议室","type":"18"},
      {"code":"30013","text":"便携投影仪","type":"18"}
    ],

    date: '2021-01-01',
    time: '00:00',
    dateTimeArray: null,
    dateTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2000,
    endYear: 2050
},
  // formSubmit: function () {

    //声明当天执行的
    // var that = this;
 
    // wx.showLoading({
    //   title: '搜索中',
    //   icon: 'loading'
    // })
  //   wx.request({
  //     url: "http://119.45.36.212/select/Object/1116/test6/video/1212/6",
  //     method: 'GET',
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded'
  //     },
  //     data: {},
  //     success: function (res) {
  //       console.log('数据加载成功')
  //       that.setData({
  //         Manager: res.data
  //       })
  //     },
  //     fail: (err) => {
  //       console.error('失败')
  //     }
  //   })
  // },

  listenerButton:function() {
    this.setData({
        hiddenModal: false
    })
  },

  listenerConfirm:function() {
      this.setData({
          hiddenModal: true
      })
  },

  listenerCancel:function() {
      this.setData({
          hiddenModal: true
      })
  },

  modalChange: function() {
    this.setData({
      modalHidden: true
    })
  },
  onLoad(){
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    var lastArray = obj1.dateTimeArray.pop();
    var lastTime = obj1.dateTime.pop();
    
    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj1.dateTimeArray,
      dateTime1: obj1.dateTime
    });
  },

  changeDate(e){
    this.setData({ date:e.detail.value});
  },

  changeTime(e){
    this.setData({ time: e.detail.value });
  },

  changeDateTime(e){
    this.setData({ dateTime: e.detail.value });
  },

  changeDateTime1(e) {
    this.setData({ dateTime1: e.detail.value });
  },

  changeDateTimeColumn(e){
    var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },

  changeDateTimeColumn1(e) {
    var arr = this.data.dateTime1, dateArr = this.data.dateTimeArray1;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({ 
      dateTimeArray1: dateArr,
      dateTime1: arr
    });
}
})