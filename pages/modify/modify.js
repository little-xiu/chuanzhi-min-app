import center from '../../utils/center.js'
Page({

  data: {
    value: 'hello'
  },

  inputAction(ev){
    this.setData({value: ev.detail.value});
  },

  onLoad: function (options) {
    console.log('修改页面 onLoad');
    console.log(options);
    this.setData({value: options.value});
  },

  finishModify(){
    // 保存修改的数据到临时文件中
    center.publish('finish-modify', this.data.value);

    // 返回上一页
    wx.navigateBack();

  }



})

