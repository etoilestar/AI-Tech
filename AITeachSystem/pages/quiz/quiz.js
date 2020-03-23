// pages/quiz/quiz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unit_name: '',
    singlequizlist:[],
    multiplequizlist:[],
    questionquizlist:[]
  },

  radioChange: function(e) {

  },

  checkboxChange: function (e) {

  },

  bindTextAreaContent:function(e){

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var unit_name = options.unit_name;
    //利用unit_name从数据库中读取数据生成单选题、多选题、简答题的列表
    var singlequizlist = [{
      id: '1',
      diffculty: 'simple',
      stem: '单选题题目一',
      options: ['选项1', '选项2', '选项3', '选项4']
    }, {
      id: '2',
      diffculty: 'simple',
      type: 'single',
      stem: '单选题题目二',
      options: ['选项1', '选项2', '选项3', '选项4']
    }];
    var multiplequizlist = [{
      id: '1',
      diffculty: 'medium',
      stem: '多选题题目一',
      options: ['选项1', '选项2', '选项3', '选项4']
    }];
    var questionquizlist = [{
      id: '1',
      diffculty: 'hard',
      stem: '简答题题目一',
    }];

    this.setData({
      unit_name,
      singlequizlist,
      multiplequizlist,
      questionquizlist
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