/* header随浏览器变化而改变 */
//Start
function getScrollTop(){
　　return  scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
}

function $(id){
    return document.getElementById(id);
}

window.onscroll = function(){
    if(getScrollTop() <= 10){
        var change = $('header');
        change.style.boxShadow = 'none';
    }else{
        var change = $('header');
        change.style.boxShadow = '0px 2px 20px rgba(0, 0, 0, 0.03)';
    }
}
//End
