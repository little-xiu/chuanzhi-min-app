


/*
center.subscribe('send-data', (result)=>{})

callbackMap = {
    'send-data': [callback]
}

center.subscribe('send-data', (result)=>{})

callbackMap = {
    'send-data': [callback, callback]
}


center.subscribe('hello-world', (result)=>{})

center.subscribe('hello-world', (result)=>{})

callbackMap = {
    'send-data': [callback, callback],
    'hello-world': [callback, callback]
}


center.publish('send-data', this.refs.in.value);

*/





// 发布订阅的设计模式



const callbackMap = {};

export default {
    publish: function(eventName, value){
        // console.log('publish执行。调用保存的callback');

        // 根据事件名字，执行保存的所有回调函数

        // 1.取出事件名字对应的所有回调函数
        let callbackArr = callbackMap[eventName] || [];

        // 2.执行所有回调
        callbackArr.map(callbackItem=>{
            callbackItem(value);
        })

    },
    //订阅事件
    subscribe: function(eventName, callback){
        // console.log('subscribe执行。保存callback');
        //根据事件名字，保存回调函数
        
        // 1.判断callbackMap对象上，有没有key值跟事件名字相等的
        if(!callbackMap[eventName]){
            callbackMap[eventName] = [];
        }
        //2.保存回调函数到事件名字对应的数组中
        callbackMap[eventName].push(callback);

        // console.log(callbackMap);

    },
    //移除订阅
    unSubscribe: function(eventName, callback){
        if(!eventName){
            return;
        }
        if(eventName && (!callback)){
            //移除对应事件的所有回调
            callbackMap[eventName] = [];
        }
        if(eventName && callback){
            //移除对应事件的callback回调

            //1.取出所有回调
            let callbackArr = callbackMap[eventName];

            //2.过滤掉需要移除的回调
            let newArr = callbackArr.filter(callbackItem=>{
                if(callbackItem == callback){
                    return false;
                }else{
                    return true;
                }
            })
            callbackMap[eventName] = newArr;

        }
    }
}


