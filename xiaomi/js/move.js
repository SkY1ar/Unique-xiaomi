// var timer = null;   
var getInit = function(obj,attr){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[attr];
    }
    return currentStyle.attr;
}
var move = function(ele,attr,target,time,callback){
    var timer = null;
    var obj = ele;
    if (typeof ele == 'string'){
        var obj = document.querySelector(ele);
    };
    clearInterval(obj.timer); //讲timer作为一个属性存储在dom对象上,如果加在move函数上无法多物体运动.
    var init = parseFloat(getInit(obj,attr));
    if(attr == 'opacity') init *= 100;
    var s = target - init;
    var c = time / 50;
    var speed = s/ c ;
    obj.timer = setInterval(( ) => {
        init += speed;
        if ((init >= target && speed >= 0) || (init < target && speed < 0)) {
            init = target;
            clearInterval(obj.timer);
            // move('.box','opacity',50,1000);  能够执行 但会一直重复这一步
            // callback(obj)   执行一次之后,报错,undefined
            if(typeof callback == 'function'){
                callback(obj)
            };  //执行一次后,如果新传入的参数没有函数,则不再执行;
        }
        if(attr == 'opacity'){
            obj.style[attr] = init / 100;
        }else{
            obj.style[attr] = init + 'px';
        }
    },50)
}