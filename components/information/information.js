// components/information/information.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selected:{
      type:String,
      value:'已选商品'
    },
    empty:{
      type:String,
      value:'清空购物车'
    },
    title:{
      type:String,
      value:'奶茶'
    },
    money:{
      type:String,
      value:'￥13.0'
    },
    down:{
      type:String,
      value:'-'
    },
    num:{
      type:Number,
      value:'2'
    },
    add:{
      type:String,
      value:'+'
    },
  },
  // showinformation:{
  //   type:Boolean,
  //   value:true
  // },
  /**
   * 组件的初始数据
   */
  data: {
    showinformation:true,
    
    // events:[
    //   {
    //     id:0,
    //    title:'奶茶',
    //    money:'￥13.0',
    //    down:'-',
    //    num:'3',
    //    add:'+'
    //   },
    //   {
    //     id:1,
    //     title:'奶茶',
    //     money:'￥13.0',
    //     down:'-',
    //     num:'4',
    //     add:'+'
    //    },
    //    {
    //      id:2,
    //     title:'奶茶',
    //     money:'￥13.0',
    //     down:'-',
    //     num:'5',
    //     add:'+'
    //    },
    //    {
    //      id:3,
    //     title:'奶茶',
    //     money:'￥13.0',
    //     down:'-',
    //     num:'6',
    //     add:'+'
    //    },
    //    {
    //      id:4,
    //     title:'奶茶',
    //     money:'￥13.0',
    //     down:'-',
    //     num:'7',
    //     add:'+'
    //    },
    //    {
    //      id:5,
    //     title:'奶茶',
    //     money:'￥13.0',
    //     down:'-',
    //     num:'8',
    //     add:'+'
    //    },
    //    {
    //      id:6,
    //     title:'奶茶',
    //     money:'￥13.0',
    //     down:'-',
    //     num:'9',
    //     add:'+'
    //    },
    // ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide: function(){
      this.setData({
        showinformation:true
      })
    },
    show: function(){
      this.setData({
        showinformation:false
      })
    },
    close: function(){
      this.setData({
        showinformation:true
      })
    }
  }
})
