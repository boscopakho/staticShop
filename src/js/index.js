function Rotation(name,length) { 
    var ele= document.querySelector(name)
    setInterval(function(){
        var left= parseInt(window.getComputedStyle(ele,null).left)
        left+=-329
        if(left<=-length){left=0}
        ele.style.left=left+"px"
    },1000)
}
// Rotation('.floor_b',987)

