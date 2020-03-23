// pages/homeworks/homeworks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unit_name:'',
    homeworklist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //根据unit_name从数据库中读取相关数据存入homeworklist
    var homeworklist = 
    [{
      id:'1',
      createtime: '2020-02-03 12:10',
      title:'用Python编写程序解决百钱百鸡问题',
      content:'',
      attached:''
    },{
      id: '2',
      createtime: '2020-02-04 14:30',
      title: '按照附件要求编写程序实现数据的线性二分类',
      content: '',
      attached: 'data.zip'
    },{
      id: '3',
      createtime: '2020-02-05 17:30',
      title: '参照附件编写程序实现数字识别',
      content: '',
      attached: 'num.zip'
    }];

    this.setData({
      unit_name: options.unit_name,
      homeworklist
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})