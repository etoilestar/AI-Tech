// components/inputbar.js
// 自定义的输入组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inputtips: {
      type: String,//类型
      value: '请输入'//默认值
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
    inputListener: function (e) {
      var value = e.detail.value;
      var cursor = e.detail.cursor;
      var detail = {
        value: value,
        cursor: cursor
      };
      this.triggerEvent('inputListener', detail);
    },
    
    inputConfirm: function (e) {
      var value = e.detail.value;
      var detail = {
        value: value
      }
      this.triggerEvent('inputConfirm', detail);
    }
  }
})
