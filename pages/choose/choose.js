const API = 'https://www.easy-mock.com/mock/5ce7ede7b3ab8d779e20e856/Drink/Drink'
Page({
  data:{
    totalprice:0,
    totaledquantity:0,
    isShow:0,
    category:[
      {name1:'季节限定',id:'season'},
      {name1:'醇香奶茶',id:'chunxiang'},
      {name1:'醇黑浓情',id:'chunhei'},
      {name1:'鲜果鲜茶',id:'xianguo'},  
      {name1:'白色恋人',id:'baise'},
      {name1:'咖啡时光',id:'cofei'},
    ],
    detail:[],
    countname:0,
    countprice:0,
    countnum:0,
    menuIndex: 0
  },
  test (e) {
    console.log(e.currentTarget.dataset.index)
    this.setData({
      menuIndex: e.currentTarget.dataset.index
    })
  },
  addCount:function(e){
    console.log(e.currentTarget.dataset.index)
    this.count.show();
    this.setData({
      countname:e.target.dataset.name,
      countprice:e.target.dataset.price,
    })
    const index = e.target.dataset.index
    console.log(e);
    let carts = this.data.detail
    console.log(carts)
    let num = carts[this.data.menuIndex].detail[index].num 
    console.log(num)
    let price = carts[this.data.menuIndex].detail[index].price
    console.log(price)
    num = num + 1
    carts[this.data.menuIndex].detail[index].num = num
    console.log(carts)
    this.setData({
      detail:carts,
      isShow:1,
      countnum:num
    })
    this.getTotalprice()
    this.getTotalnum()
  },
  reduceCount: function(e){
    const index = e.target.dataset.index 
    console.log(e);
    let carts = this.data.detail
    console.log(carts)
    let num = carts[this.data.menuIndex].detail[index].num
    console.log(num)
    if(num > 0){
      num = num - 1
    }else{
      return num 
    }
    carts[this.data.menuIndex].detail[index].num = num
    console.log(carts)
    this.setData({
      detail:carts
    })
    this.getreducenum()  
    this.getreduceprice() 
  },
  getTotalprice(){
    let carts = this.data.detail
    let total = 0
    let total1 = 0
    for(let i = 0; i<carts.length;i++){
      for(let j = 0; j<carts[i].detail.length;j++){
        if(carts[i].detail[j].price){
        total +=carts[i].detail[j].num * carts[i].detail[j].price
        total1 =(parseFloat(total)).toFixed(1)
        }
      }
    }
    this.setData({
      totalprice: total1
    })
  },
  getreduceprice(){
    let carts = this.data.detail
    let total2 = 0
    for(let i = 0; i<carts.length;i++){
      for(let j = 0; j<carts[i].detail.length;j++){
        if(carts[i].detail[j].price){
        total2 -=carts[i].detail[j].num * carts[i].detail[j].price
        var total3 = (parseFloat(Math.abs(total2))).toFixed(1) 
        }
      }
    }
    this.setData({
      totalprice: total3
    })
  },
  getTotalnum(){
    let carts = this.data.detail
    let totalnum = 0
    for(let i = 0; i<carts.length;i++){
      for(let j = 0; j<carts[i].detail.length;j++){
        if(carts[i].detail[j].num){
          totalnum +=carts[i].detail[j].num 
        }
      }
    }
    this.setData({
      totaledquantity: totalnum
    })
  },
  getreducenum(){
    let carts = this.data.detail
    let totalnum = 0
    for(let i = 0; i<carts.length;i++){
      for(let j = 0; j<carts[i].detail.length;j++){
        if(carts[i].detail[j].num){
          totalnum =carts[i].detail[j].num 
        }
      }
    }
    this.setData({
      totaledquantity: totalnum,
    })
  },
  switchTap(e){
    console.log(e);
    this.setData({
      toView:e.target.dataset.id,
      curIndex:e.target.dataset.index
    })
  },
  onLoad: function (options) {
    let self = this
    wx.request({
      url:API,
      method:'get',
      success(res){
        self.setData({
        detail:res.data
        })
        console.log(res);
      }
    })
  },

  onReady: function () {
    this.count = this.selectComponent('#count');
    // this.information = this.selectComponent('#information');
  },
  Selected: function(e){
          console.log(e);
    // this.information.show();
  },
  Account: function(){
    var that = this
    wx.navigateTo({
      url: '../../pages/destination/destination?allprice=' + that.data.totalprice +
       '&allquantity=' + that.data.totaledquantity + '&show=' + that.data.isShow
    })
  },
})
