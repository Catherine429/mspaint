/**
 * Created by Administrator on 2017/11/14.
 */
/*function Canvas() {
    
}

Canvas.prototype.mouseDown = function () {

}*/


function Polygon(color, lineWidth, orignalX, orignalY, lastX, lastY) {
    this.color = color;
    this.lineWidth = lineWidth;
    this.orignalX = orignalX;
    this.orignalY = orignalY;
    this.lastX = lastX;
    this.lastY = lastY;
}

Polygon.prototype.draw = function () {}
Polygon.prototype.delete = function () {}

/*曲线*/
function Curve(color, lineWidth, orignalX, orignalY, lastX, lastY) {
    Polygon.call(this, color, lineWidth, orignalX, orignalY, lastX, lastY);
}

for(var i in Polygon.prototype) {
    Curve.prototype[i] = Polygon.prototype[i];
}

Curve.prototype.draw = function () {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.moveTo(this.orignalX, this.orignalY);
    context.lineTo(this.lastX, this.lastY);
    context.stroke();
    context.closePath();
}

Curve.prototype.delete = function () {

}

/*直线*/
function Line(color, lineWidth, orignalX, orignalY, lastX, lastY) {
    Polygon.call(this, color, lineWidth, orignalX, orignalY, lastX, lastY);
}

for(var i in Polygon.prototype) {
    Line.prototype[i] = Polygon.prototype[i];
}

Line.prototype.draw = function () {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.moveTo(this.orignalX,this.orignalY);
    context.lineTo(this.lastX, this.lastY);
    context.stroke();
    context.closePath();
}

Line.prototype.delete = function () {

}


/*圆*/
function Circle(color, lineWidth, orignalX, orignalY, lastX, lastY) {
    Polygon.call(this, color, lineWidth, orignalX, orignalY, lastX, lastY);
}

for(var i in Polygon.prototype) {
    Circle.prototype[i] = Polygon.prototype[i];
}

Circle.prototype.draw = function () {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;
    console.log(this.orignalX + '   ' + this.orignalY);
    context.arc(this.orignalX+(this.lastX-this.orignalX)/2,this.orignalY+(this.lastY-this.orignalY)/2,Math.sqrt((this.lastX-this.orignalX)/2*(this.lastX-this.orignalX)/2 + (this.lastY-this.orignalY)/2*(this.lastY-this.orignalY)/2),0,Math.PI * 2,true);
    context.stroke();
    context.closePath();
}

Circle.prototype.delete = function () {

}


/*矩形*/
function Rectangle(color, lineWidth, orignalX, orignalY, lastX, lastY) {
    Polygon.call(this, color, lineWidth, orignalX, orignalY, lastX, lastY);
}

for(var i in Polygon.prototype) {
    Rectangle.prototype[i] = Polygon.prototype[i];
}

Rectangle.prototype.draw = function () {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.strokeRect(this.orignalX, this.orignalY, this.lastX-this.orignalX, this.lastY-this.orignalY);
    context.closePath();
}

Rectangle.prototype.delete = function () {

}


