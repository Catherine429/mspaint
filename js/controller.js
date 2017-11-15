/**
 * Created by Administrator on 2017/11/14.
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var shape = document.getElementById('shape');
var shapeList = shape.getElementsByTagName('li');

var pen = document.getElementById('pen');
var penList = pen.getElementsByTagName('li');

var oColor = document.getElementById('color').getElementsByTagName('input')[0];
var lines = [2, 4, 5, 10];

var color = 'red';
var lineWidth = 2;
var width = canvas.width, height = canvas.height;
var shape = 0;
var orignalX, orignalY;
var lastX, lastY;
var olderX, olderY;
var data;
var isMouseDown = false;

for(var i=0; i<penList.length; i++) {
    penList[i].addEventListener('click', (function (index) {
        return function () {
            lineWidth = lines[index];
        }
    })(i), false);
}

function curveButtonClick() {
    shape = 0;
}
function lineButtonClick() {
    shape = 1;
}
function circleButtonClick() {
    shape = 2;
}
function rectButtonClick() {
    shape = 4;
}

function onMouseDown(ev) {
    var event = event || ev;

    if(event.button == 0) {
        color = oColor.value;
        orignalX = event.offsetX;
        orignalY = event.offsetY;
        olderX = orignalX;
        olderY = orignalY;
        data = context.getImageData(0, 0, width, height);
        isMouseDown = true;
    }
}

function onMouseMove(ev) {
    var event = event || ev;

    if(isMouseDown) {
        context.clearRect(0, 0, width, height);
        context.putImageData(data, 0, 0);
        lastX = event.offsetX;
        lastY = event.offsetY;

        switch (shape) {
            case 0: {
                new Curve(color, lineWidth, olderX, olderY, lastX, lastY).draw();
                data = context.getImageData(0, 0, width, height);
            }
                break;
            case 1:new Line(color, lineWidth, orignalX, orignalY, lastX, lastY).draw();break;
            case 2: new Circle(color, lineWidth, orignalX, orignalY, lastX, lastY).draw();
                break;
            case 3: ; break;
            case 4: new Rectangle(color, lineWidth, orignalX, orignalY, lastX, lastY).draw();break;
        }
        olderX = lastX;
        olderY = lastY;
    }

}

function onMouseUp(ev) {
    var event = event || ev;

    if (isMouseDown) {
        context.clearRect(0, 0, width, height);
        context.putImageData(data, 0, 0);
        lastX = event.offsetX;
        lastY = event.offsetY;

        switch (shape) {
            case 0:
                new Curve(color, lineWidth, olderX, olderY, lastX, lastY).draw();
                break;
            case 1:new Line(color, lineWidth, orignalX, orignalY, lastX, lastY).draw();
                break;
            case 2: new Circle(color, lineWidth, orignalX, orignalY, lastX, lastY).draw();break;
            case 3:
                ;
                break;
            case 4: new Rectangle(color, lineWidth, orignalX, orignalY, lastX, lastY).draw();
                break;
        }
    }

    isMouseDown = false;
    lastX = null;
    lastY = null;
}

for(var i=0; i<shapeList.length; i++) {
    shapeList[i].addEventListener('click', (function (index) {
        return function () {
            switch (index) {
                case 0: curveButtonClick();break;
                case 1: lineButtonClick(); break;
                case 2: circleButtonClick(); break;
                case 3: ; break;
                case 4: rectButtonClick(); break;
            }
        }
    })(i), false);
}

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mousemove', onMouseMove, false);
canvas.addEventListener('mouseup', onMouseUp, false);
