// pages/current/current.js
const app = getApp()

Page({
  /*
   * 页面的初始数据
   */
  data: {
    role:'',
    tabhasInitiallized: false,
    tablabelteacher:[
      "任务列表",
      "教学计划",
      "评价反馈",
      "学生管理"
    ],
    tablabelstudent: [
      "当前学习",
      "单元列表",
      "讨论答疑",
      "我的成绩"
    ],

    unit:'',
    unitlist:
    [{
      id: '1',
      name: '知识单元1-1',
      status: 'finished',
      learntype: 'teach',
    }, {
      id: '2',
      name: '知识单元1-2',
      status: 'finished',
      learntype: 'teach',
    }, {
      id: '3',
      name: '知识单元1-3',
      status: 'finished', 
      learntype: 'teach',
    }, {
      id: '4',
      name: '知识单元1-4',
      status: 'finished',
      learntype: 'self',
    }, {
      id: '5',
      name: '知识单元2-1',
      status: 'finished',
      learntype: 'teach'
    }, {
      id: '6',
      name: '知识单元2-2',
      status: 'ongoing',
      learntype: 'teach'
    }, {
      id: '7',
      name: '知识单元2-3',
      status: 'ongoing',
      learntype: 'self',   
    }, {
      id: '8',
      name: '知识单元2-4',
      status: 'ongoing',
      learntype: 'self',         
    }, {
      id: '9',
      name: '知识单元3-1',
      status: 'ongoing',
      learntype: 'self'  
    }, {
      id: '10',
      name: '知识单元3-2',
      status: 'prepare',
      learntype: 'teach'   
    }, {
      id: '11',
      name: '知识单元5-1',
      status: 'prepare',
      learntype: 'teach'  
    }, {
      id: '12',
      name: '知识单元6-1',
      status: 'prepare',
      learntype: 'teach'  
    }, {
      id: '13',
      name: '知识单元7-1',
      status: 'prepare',
      learntype: 'teach'  
    }, {
      id: '14',
      name: '知识单元8-1',
      status: 'prepare',
      learntype: 'teach'  
    }, {
      id: '15',
      name: '知识单元9-1',
      status: 'prepare',
      learntype: 'self'       
    }],

    //对应登录的学生的个人成绩
    scorelist:
    [{
      name: '知识单元1-1',
      score: 80.0,
      Enable: false
    }, {
      name: '知识单元1-2',
      score: 76.0,
      Enable: false
    }, {
      name: '知识单元1-3',
      score: 85.0,
      Enable:false
    }, {
      name: '知识单元1-4',
      score: 56.0,
      Enable:false
    }, {
      name: '知识单元2-1',
      score: 72.0,
      Enable:false
    }, {
      name: '知识单元2-2',
      score: 65.0,
      Enable:false
    }, {
      name: '知识单元2-3',
      score: 0,
      Enable:false
    }, {
      name: '知识单元2-4',
      score: 0,
      Enable:false
    }, {
      name: '知识单元3-1',
      score: 0,
      Enable:false
    }, {
      name: '知识单元3-2',
      score: 0,
      Enable:false
    }, {
      name: '知识单元5-1',
      score: 0,
      Enable:false
    }, {
      name: '知识单元6-1',
      score: 0,
      Enable:false
    }, {
      name: '知识单元7-1',
      score: 0,
      Enable:false
    }, {
      name: '知识单元8-1',
      score: 0,
      Enable:false
    }, {
      name: '知识单元9-1',
      score:0,
      Enable:false 
    }],

    //达标的知识单元
    unitssuccess:[],
    //未达标的知识单元
    unitsfailed:[],
    //当前可学的知识单元
    unitscurrent:[],

    //签到模式对话框
    hideModal: true, // 显示modal弹窗
    checkcode:''
  },

  radioChange(e) {
    var unit = e.detail.value;
    this.setData({unit});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //如果没有初始化过, 根据角色初始化tabbar
    if (this.data.tabhasInitiallized!=true) {
      this.setData({
        tabhasInitiallized: true
      })
      
      var array=null;
      if (app.globalData.role=="teacher")
      {
        array = this.data.tablabelteacher;
      }
      else
      {
        array = this.data.tablabelstudent;
      }
      
      array.forEach(function(item, i)
      {
        wx.setTabBarItem({
          index: i,
          text: item,
        });
      });
    }

    //从数据库读取数据为本页面的数据赋值


    //如果角色为学生，需要生成要显示的内容
    if (app.globalData.role == 'student') {
      var unitlist  = this.data.unitlist;
      var scorelist = this.data.scorelist;

      var unitssuccess=[];
      var unitsfailed =[];
      var unitscurrent=[];

      var si;
      for (si = 0; si < scorelist.length; si++) {
        var unit = unitlist[si];
        var unitscore = scorelist[si];
        if (unit.status == 'finished') {
          scorelist[si].Enable = true;
          if (parseFloat(unitscore.score) >= 60.0) {
            unitssuccess.push({
              id: unit.id,
              name: unit.name,
              score: unitscore.score
            });
          }
          else {
            unitsfailed.push({
              id: unit.id,
              name: unit.name,
              score: unitscore.score
            });
          }
        }
        else if (unit.status == 'ongoing') {
          scorelist[si].Enable = true;
          if (parseFloat(unitscore.score) >= 60.0)
          {
            unitssuccess.push({
              id: unit.id,
              name: unit.name,
              score: unitscore.score
            });
          }
          else
          {
            unitscurrent.push({
              id: unit.id,
              name: unit.name,
              score: unitscore.score
            });
          }
        }
      }

      //需要根据依赖关系清除unitscurrent中不必要的元素
      //这里以知识单元2-4作为例子
      unitscurrent.splice(1,1);
      scorelist[7].Enable = false;

      this.setData({
        unitssuccess,
        unitsfailed,
        unitscurrent
      });

      app.globalData.scorelist = scorelist;
    }

    this.setData({
      role: app.globalData.role
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

  },

  /**
   * 教师页面相关函数
   */
  onLessonUnit: function (e) {
    var unit = this.data.unit;
    if(unit.length==0)
      return;
    wx.navigateTo({
       url: '../../pages/lessonunit/lessonunit?unit_name='+unit
    });
  }, 

  onStartTeach: function (e) {
    var unit = this.data.unit;
    if (unit.length == 0)
      return;
  
    var unitlist = this.data.unitlist;
    for(var i=0; i<unitlist.length; i++)
    {
      if (unitlist[i].name==unit)
      {
        unitlist[i].status = 'ongoing';
        break;
      }
    }
    this.setData({
      unitlist
    })
  },

  onSignin: function (e) {
    console.log("课堂签到");
  },

  onTopic: function(e) {
    wx.navigateTo({
      url: '../../pages/starttopic/starttopic?topictype=teacher'
    });   
  },

  onAnswerQuestion: function(e) {
    wx.navigateTo({
      url: '../../pages/questionlist/questionlist'
    });    
  },

  onAssignHomework: function(e) {
    var unit = this.data.unit;
    if (unit.length == 0)
      return;

    var unitlist = this.data.unitlist;
    var unititem;
    for (var i = 0; i < unitlist.length; i++) {
      if (unitlist[i].name == unit) {
        unititem = unitlist[i];
        break;
      }
    }

    //只有对正在
    if (unititem.status!="ongoing")
    {
      wx.showToast({
        title: "需选择进行中",
        icon: 'fail',
        image: '../../images/fail_highlight.png',
        duration: 2000,
        mask: true
      })
    }
    else //转到布置作业页面
    {
      wx.navigateTo({
        url: '../../pages/assignhomework/assignhomework'
      });
    }
  },

  onStatistics: function(e) {
    console.log("查看统计数据");
  },

  onFinishTeach: function (e) {
    var unit = this.data.unit;
    if (unit.length == 0)
      return;

    var unitlist = this.data.unitlist;
    for (var i = 0; i < unitlist.length; i++) {
      if (unitlist[i].name == unit) {
        unitlist[i].status = 'finished';
        break;
      }
    }
    this.setData({
      unitlist
    })
  },

  /**
    * 学生页面相关函数
  */
  inputcheckcode: function (e) {
    var checkcode = e.detail.value;
    this.setData({ checkcode });
  },

  //输入签到码确认
  onPressComfirm: function (e) {
    console.log(this.data.checkcode);
    this.setData({
      hideModal: true
    });
  },

  onStartLearn: function(e) {
    var unit = this.data.unit;
    if (unit.length == 0)
      return;
    wx.navigateTo({
      url: '../../pages/lessonunit/lessonunit?unit_name=' + unit
    });
    
    //测试签到对话框
    // this.setData({
    //   hideModal:false
    // });
  },

  onDoHomework: function(e) {
    var unit = this.data.unit;
    if (unit.length == 0)
      return;

    //需要判断是否为正在进行中的学习单元
    
    //打开相应的作业列表
    wx.navigateTo({
      url: '../../pages/homeworks/homeworks?unit_name='+unit
    })
 },

  onAskQuestion: function (e) {
    wx.navigateTo({
      url: '../../pages/starttopic/starttopic?topictype=question'
    }); 
  },  

  onDiscuss: function (e) {
    wx.navigateTo({
      url: '../../pages/starttopic/starttopic?topictype=discuss'
    }); 
  }
})

