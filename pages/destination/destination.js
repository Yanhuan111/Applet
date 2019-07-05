const app = getApp()

Page({
  data: {
    latitude: 0,//地图初次加载时的纬度坐标
    longitude: 0, //地图初次加载时的经度坐标
    name: "" ,//选择的位置名称
    address:"",
    totaledquantity:0,
    totalprice:0,
    isShow: 0,
    Hidden: true,
    selectAllStatus: false
  },
  Account: function(){
    this.setData({
      Hidden:false
    })
  },
  Close: function(){
    this.setData({
      Hidden:true
    })
  },
  Select: function() {
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    this.setData({
      selectAllStatus: selectAllStatus
    })
  },
  Gopay: function(){
    wx.switchTab({
      url: '../../pages/index/index',
    })
  },
  Choose: function(res){
    let self = this
    wx.chooseLocation({
      success: function(res){
        console.log(res);
        app.globalData.activity_lat = res.latitude;
        app.globalData.activity_lng = res.longitude;
        app.globalData.activity_location = res.name;
        app.globalData.activity_address = res.address;
        self.setData({
          name: res.name,
          address:res.address
        })
        console.log(app.globalData.activity_location);
      },
    })  
  },
  onLoad: function (options) {
    console.log(typeof(options.show))
    var that = this
    that.setData({
      totaledquantity: options.allquantity,
      isShow: Number(options.show) || 0,
      totalprice: options.allprice
    })   
  },
  onReady: function () {
    let carts = app.globalData.carts
    this.setData({
      carts:carts
    })
    console.log(app.globalData.carts)
  },

})