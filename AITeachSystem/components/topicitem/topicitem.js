// components/topicitem/topicitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    typeoftopic: {
      type: String,   //类型
      value: 'teacher'//teacher,discuss,question,该值与显示的图标相关
    },

    typeid: {
      type: Number,
      value: 0
    },

    hotdegree: {
      type: Number,//类型
      value: 0
    },

    author: {
      type: String,
      value: ''
    },

    content:{
      type:String,
      value: ''
    },

    createtime:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes:{
    attached:function(){
      var that=this;
      var degree=that.properties.hotdegree;
      var intdegree=parseInt(degree*10);
      var lights = [];
      var halfs = [];
      var emptys = [];
      for (var index = 1; index <= 5; index++) {
        if (index <= parseInt(intdegree / 2))
          lights.push(index);
        else {
          if (index == parseInt(intdegree / 2) + intdegree % 2)
            halfs.push(1);
          else
            emptys.push(index - (parseInt(intdegree / 2) + intdegree % 2));
        }
      }

      that.setData({
        lights: lights,
        halfs: halfs,
        emptys: emptys
      });
    }
  }
})
