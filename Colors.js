var Links = {
    setColor:function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            console.log(alist[i]);
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
var Body = {
    setColor:function(color){
    document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
    }
}
function NightDayHandler(self){
    if(self.value === 'night'){
        Body.setColor('white');
        Body.setBackgroundColor('black');
        Links.setColor('powderblue');
        self.value = 'day';
    }
    else{
        Body.setColor('black');
        Body.setBackgroundColor('white');
        Links.setColor('blue');
        self.value = 'night';
    }
}