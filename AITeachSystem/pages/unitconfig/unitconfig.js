// pages/unitconfig/unitconfig.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unit_name: '',
    //以下数据通过unit_name从数据库中读取
    learntype: '',
    simplepercent:'',
    mediumpercent:'',
    hardpercent:''
  },

  switchChange:function(e)
  {
    //设置对应值到数据库
    console.log("switchChange");
  },

  listenSliderSimple: function (e) {
    //设置对应值到数据库
    console.log("listenSliderSimple");
  },

  listenSliderMedium: function (e) {
    //设置对应值到数据库
    console.log("listenSliderMedium");
  },

  listenSliderHard: function (e) {
    //设置对应值到数据库
    console.log("listenSliderHard");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置unit值
    this.setData({
      unit_name: options.unit_name
    });
    //从数据库读取相应的learntype和drawpercent值
    var learntype     = 'self';
    var simplepercent = '60';
    var mediumpercent = '20'; 
    var hardpercent   = '20';
    this.setData({
      learntype,
      simplepercent,
      mediumpercent,
      hardpercent
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