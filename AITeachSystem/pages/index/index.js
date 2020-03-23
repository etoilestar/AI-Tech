//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎使用AI教学与评价系统',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    username:'',
    classname:''
  },

  //事件处理函数
  inputname: function (e) {//方法1
    var username = e.detail.value;
    this.setData({username});
   
  },

  inputclass: function (e) {//方法1
    var classname = e.detail.value;
    this.setData({ classname });
  },

  bindViewTap: function () {
    // wx.navigateTo({
    //   url: '../me/me'
    // })

    //如果输入信息是空的，需要提示输入，在javascript中用length==0判断是否为空可以
    //避免多种类型转换造成的不确定问题，要解决空格等其它符号也为空的判断，则需要借助
    //正则表达式
    if ((this.data.username.length == 0) && (this.data.classname.length == 0))
    {
      wx.showToast({
        title: "请输入姓名班级",
        icon: 'fail',
        image: '../../images/fail_highlight.png',
        duration: 2000,
        mask: true
      })
    }
    else
    {
      console.log("class:" + this.data.classname+"name:"+this.data.username);

      //读取数据库验证输入的姓名班级是否正确
      //并设置相应的模式
      if (this.data.username != '')
      {
        if (this.data.classname == '')
        {
          app.globalData.role = "teacher";
        }
        else
        {
          app.globalData.role = "student";
        } 

        app.globalData.classname = this.data.classname;
        app.globalData.username  = this.data.username;

        wx.redirectTo({
          url: '/pages/current/current',
          fail(ex) {
            //console.log(ex)//fail can not redirectTo a tabbar page"
            wx.switchTab({
              url: '/pages/current/current',
            })
          }
        })
      }
    }
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    if(this.data.hasUserInfo==false)
    {
      wx.showToast({
        title: "需要验证个人信息",
        icon: 'fail',
        image:'../../images/fail_highlight.png',
        duration: 2000,
        mask: true
      })

      this.setData({
        username:'',
        classname:''
      })
    }
    else
    {
      username = '';
      classname = '';
      //从userinfo中获取唯一标识从数据库中匹配
      //如果验证已经绑定，将读取的名字和班级信息
      //显示到输入框中
      //username:username略为username
      this.setData({
        username,
        classname
      })

      console.log("初始化姓名和班级");
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
