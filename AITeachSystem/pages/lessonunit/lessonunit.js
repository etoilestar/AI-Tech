// pages/lessonunit/lessonunit.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    unit_name:'',
    role:'',
    abstract:'相关简介，包括教学目标等',
    prerequisite:[],
    videolist: [{
      id: '1',
      title: '教学视频1',
      link: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    },{
      id: '2',
      title: '教学视频2',
      link: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var prerequisite;
    if (options.unit_name=='知识单元2-3')
    {
      prerequisite = ['知识单元1-1', '知识单元1-2', '知识单元1-3', '知识单元2-1', '知识单元2-2'];
    }
    else
    {
      prerequisite = [];
    }

    this.setData({
      unit_name: options.unit_name,
      role: app.globalData.role,
      prerequisite
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