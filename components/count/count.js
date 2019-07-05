// components/count/count.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  // parent
  properties: {
    title:{
      type: String,
      value: ''
    },
    money:{
      type: String,
      value:''
    },
   nums:{
     type: Number,
     value:''
   }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:true,
    // title:'',
    metarial:'加料',
    metarials: [
      {name:'常规'},
      {name:'珍珠'},
      {name:'椰果'}
    ],
    temperature:'温度',
    temperatures:[
      {name:'常温'},
      {name:'多冰'},
      {name:'少冰'},
      {name:'去冰'},
    ], 
    sugar:'糖度',
    sugars:[
      // {name:'常规糖'},
      {name:'半糖'},
      {name:'微糖'},
      {name:'不加糖'},
    ],
    // money:'',
    add:'加入购物车',
    flag: true,
    isActive: false,
    cart: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    Change:function(e){
      var that = this
      let index = e.currentTarget.dataset.index
      console.log(e.currentTarget.dataset.index);
      for (let i = 0; i < that.data.metarials.length; i++) {
        let cencal = `metarials[${i}].active`
        that.setData({
          [cencal]: false
        })
      }
      let test = `metarials[${index}].active`
      that.setData({
        [test]: true
      })
      app.globalData.cart.metarial = that.data.metarials[index].name || '常规'
      console.log(app.globalData.cart);
    },
    Change1: function(e){
      var that = this
      let index = e.currentTarget.dataset.index
      console.log(e.currentTarget.dataset.index);
      for (let j = 0; j < that.data.temperatures.length; j++) {
        let cencal1 = `temperatures[${j}].active1`
        that.setData({
          [cencal1]: false
        })
      }
      let test1 = `temperatures[${index}].active1`
      that.setData({
        [test1]: true
      })
      app.globalData.cart.temperature = that.data.temperatures[index].name || '常温'
      console.log(app.globalData.cart);
    },
    Change2: function(e){
      var that = this
      let index = e.currentTarget.dataset.index
      console.log(e.currentTarget.dataset.index);
      for (let k = 0; k < that.data.sugars.length; k++) {
        let cencal2 = `sugars[${k}].active2`
        that.setData({
          [cencal2]: false
        })
      }
      let test2 = `sugars[${index}].active2`
      that.setData({
        [test2]: true
      })
      app.globalData.cart.sugar = that.data.sugars[index].name || '半糖'
      console.log(app.globalData.cart);
    },
      //隐藏弹框
      hide: function () {
        this.setData({
          flag: true
        })
      },
      //展示弹框
      show: function () {
        this.setData({
          flag: false
        })
     },
     Add: function(e){
       var that = this;
       console.log(this.data.metarials);
       if (!app.globalData.cart.metarial) {
         app.globalData.cart.metarial = '常规'
       }
       if (!app.globalData.cart.C) {
         app.globalData.cart.temperature = '常温'
       }
       if (!app.globalData.cart.sugar) {
         app.globalData.cart.sugar = '半糖'
       }
       app.globalData.cart.title = that.data.title
       app.globalData.cart.money = that.data.money
       app.globalData.cart.nums = that.data.nums
       app.globalData.carts.push(app.globalData.cart)
       app.globalData.cart = {}
       console.log(app.globalData.carts);
       this.setData({
         flag:true
       })
     },
}
})
