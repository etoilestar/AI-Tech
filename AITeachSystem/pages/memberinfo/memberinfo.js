// pages/memberinfo/memberinfo.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: '',
    scorelist: null,
    studentname:'',
    studentlist:
      [{
        id: '1',
        name: '张三',
        status:'binded',
      }, {
        id: '2',
        name: '李四',
        status: 'binded',
      }, {
        id: '3',
        name: '王五',
        status: 'binded', 
      }],
      selectedarray:null
  },


  //将选中的元素的checked值置为true
  checkboxChange(e) {
    this.setData({
      selectedarray: e.detail.value
    });
  },

  inputstudent: function (e) {//方法1
    var studentname = e.detail.value;
    this.setData({
      studentname
    }); 
  },

 /**
   * 点击添加按钮，修改数组，新加入的元素id为最后的元素id+1
   */
  onAddClicked:function(event){
    var studentlist=this.data.studentlist;
    var studentname=this.data.studentname;
    var lastid=1;
    if (studentlist.length!=0)
      lastid = parseInt(studentlist[studentlist.length - 1].id)+1;
    studentlist.push({
      id: lastid,
      name: studentname,
      status: 'unbinded'
    });
    this.setData({
      studentlist
    }); 
  },

  /**
   * 点击删除按钮，将选中
   */
 onDelClicked: function (event) {
    var studentlist = this.data.studentlist;
    console.log(studentlist);

    var indexarray = this.data.selectedarray;
    if(indexarray.length==0)
      return;
    console.log(indexarray);
  
    for(var i = studentlist.length-1; i>-1; i--)
    {
      for (var j = indexarray.length-1; j>-1; j--)
      {
        if (indexarray[j] == studentlist[i].id)
        {
          studentlist.splice(i, 1);
          indexarray.splice(j, 1);
          break;
        } 
      }
    }
    console.log(studentlist);
    indexarray = [];

    this.setData({
      studentlist
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      role: app.globalData.role,  
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