import center from '../../utils/center.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 'hello'
  },

  inputAction(ev){
    this.setData({value: ev.detail.value});
  },

  finishAdd(){
    console.log(this.data.value);
    //保存输入的值，到app上。
    // let app = getApp();
    // app.tmp = this.data.value;

    // 保存输入的值在一个临时的文件中
    center.publish('add-finish', this.data.value);

    // 返回到上一页
    wx.navigateBack();

  }


})