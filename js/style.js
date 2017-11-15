/**
 * Created by Administrator on 2017/11/14.
 */
var nav = document.getElementById('nav');
var file = document.getElementById('file');
var fileList = file.getElementsByTagName('dl')[0].getElementsByTagName('dd');
var navList = nav.getElementsByTagName('div');
var ulList = nav.getElementsByTagName('ul');

file.addEventListener('click', function () {
    for(var i=0; i<fileList.length; i++) {
        fileList[i].classList.toggle('display');
    }
}, false);

for(var i=0; i<navList.length; i++) {
    navList[i].addEventListener('mouseover', function () {
        for(var j=0; j<ulList.length; j++) {
            ulList[j].classList.add('display');
        }
        if (this.getElementsByTagName('ul')[0]) {
            this.getElementsByTagName('ul')[0].classList.toggle('display');
        }
    }, false)
}

for(var i=0; i<ulList.length; i++) {
    ulList[i].addEventListener('click', function () {
        this.classList.toggle('display');
    }, true)
}