import center from '../../utils/center.js'
Page({

  data: {
    flag: false,
    modifyIndex: -1,
    list: []
  },

  addAction(){
    // 去新增页面
    wx.navigateTo({
      // url: '/pages/add/add',
      url: '../add/add',
      success:()=>{
        //监听新增事件
        center.subscribe('add-finish', (value)=>{
          console.log('监听到了新增');
          this.setData({ list: [...this.data.list, value] });
        });
      }
    });

  },

  modifyAction(ev){
    console.log('index:', ev.currentTarget.dataset.index);
    let index = ev.currentTarget.dataset.index;
    let value = this.data.list[index];
    //去修改界面
    wx.navigateTo({
      // url: '/pages/modify/modify'
      url: '/pages/modify/modify?value=' + value,
      success: ()=>{
        //监听修改完成事件
        center.subscribe('finish-modify', (value)=>{
          console.log('监听到了修改');
          this.data.list.splice(index, 1, value);
          this.setData({ list: this.data.list});
        })
      }
    })
  },

  onShow(){
    console.log('index show');
    center.unSubscribe('add-finish');
    center.unSubscribe('finish-modify');

  }


})