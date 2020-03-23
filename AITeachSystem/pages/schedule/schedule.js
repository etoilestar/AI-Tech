// pages/schedule/schedule.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    role: '',
    scorelist:null,
    chapterlist: [{
      id: '1',
      name: '第一章 数学与编程基础',
      open: false,
      pages: ['知识单元1-1', '知识单元1-2', '知识单元1-3', '知识单元1-4', '知识单元1-5']
    }, {
      id: '2',
      name: '第二章 搜索',
      open: false,
      pages: ['知识单元2-1', '知识单元2-2', '知识单元2-3', '知识单元2-4']
    }, {
      id: '3',
      name: '第三章 机器学习',
      open: false,
      pages: ['知识单元3-1', '知识单元3-2', '知识单元3-3', '知识单元3-4', '知识单元3-5', '知识单元3-6', '知识单元3-7']
    }, {
      id: '4',
      name: '第四章 线性回归',
      open: false,
      pages: ['知识单元4-1', '知识单元4-2']
    }, {
      id: '5',
      name: '第五章 决策树与随机森林',
      open: false,
      pages: ['知识单元5-1', '知识单元5-2', '知识单元5-3']
    }, {
      id: '6',
      name: '第六章 神经网络',
      open: false,
      pages: ['知识单元6-1', '知识单元6-2']
    }, {
      id: '7',
      name: '第七章 计算机视觉',
      open: false,
      pages: ['知识单元7-1', '知识单元7-2','知识单元7-3']
    }, {
      id: '8',
      name: '第八章 自然语言处理',
      open: false,
      pages: ['知识单元8-1', '知识单元8-2', '知识单元8-3']
    }, {
      id: '9',
      name: '第九章 强化学习',
      open: false,
      pages: ['知识单元9-1']
    }]
  },

  /**
   * 收缩核心代码
   */
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.chapterlist
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }

    /**
      * key和value名称一样时，可以省略
      * 
      * list:list=>list
      */
    this.setData({
      chapterlist:list
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      role: app.globalData.role
    });

    this.setData({
      scorelist: app.globalData.scorelist
    })
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