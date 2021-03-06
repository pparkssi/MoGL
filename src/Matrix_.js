var Matrix = (function(){
	//if( window['WebkitCSSMatrix'] ) return window['WebkitCSSMatrix'];
	//if( window['MSCSSMatrix'] ) return window['MSCSSMatrix'];
	var CSSMatrix=function(h){if(!h||h==="none"){for(var g=0;g<16;g++){this["m"+((g/4|0)+1)+(g%4+1)]=g%4==(g/4|0)?1:0}return this}return this.setMatrixValue(h)};CSSMatrix.prototype={constructor:CSSMatrix,PID180:Math.PI/180,get a(){return this.m11},get b(){return this.m21},get c(){return this.m12},get d(){return this.m22},get e(){return this.m13},get f(){return this.m23},set a(g){this.m11=g},set b(g){this.m21=g},set c(g){this.m12=g},set d(g){this.m22=g},set e(g){this.m13=g},set f(g){this.m23=g},inverse:function(){var g=this.__clone__();g.m11=g.m23*g.m34*g.m42-g.m24*g.m33*g.m42+g.m24*g.m32*g.m43-g.m22*g.m34*g.m43-g.m23*g.m32*g.m44+g.m22*g.m33*g.m44;g.m12=g.m14*g.m33*g.m42-g.m13*g.m34*g.m42-g.m14*g.m32*g.m43+g.m12*g.m34*g.m43+g.m13*g.m32*g.m44-g.m12*g.m33*g.m44;g.m13=g.m13*g.m24*g.m42-g.m14*g.m23*g.m42+g.m14*g.m22*g.m43-g.m12*g.m24*g.m43-g.m13*g.m22*g.m44+g.m12*g.m23*g.m44;g.m14=g.m14*g.m23*g.m32-g.m13*g.m24*g.m32-g.m14*g.m22*g.m33+g.m12*g.m24*g.m33+g.m13*g.m22*g.m34-g.m12*g.m23*g.m34;g.m21=g.m24*g.m33*g.m41-g.m23*g.m34*g.m41-g.m24*g.m31*g.m43+g.m21*g.m34*g.m43+g.m23*g.m31*g.m44-g.m21*g.m33*g.m44;g.m22=g.m13*g.m34*g.m41-g.m14*g.m33*g.m41+g.m14*g.m31*g.m43-g.m11*g.m34*g.m43-g.m13*g.m31*g.m44+g.m11*g.m33*g.m44;g.m23=g.m14*g.m23*g.m41-g.m13*g.m24*g.m41-g.m14*g.m21*g.m43+g.m11*g.m24*g.m43+g.m13*g.m21*g.m44-g.m11*g.m23*g.m44;g.m24=g.m13*g.m24*g.m31-g.m14*g.m23*g.m31+g.m14*g.m21*g.m33-g.m11*g.m24*g.m33-g.m13*g.m21*g.m34+g.m11*g.m23*g.m34;g.m31=g.m22*g.m34*g.m41-g.m24*g.m32*g.m41+g.m24*g.m31*g.m42-g.m21*g.m34*g.m42-g.m22*g.m31*g.m44+g.m21*g.m32*g.m44;g.m32=g.m14*g.m32*g.m41-g.m12*g.m34*g.m41-g.m14*g.m31*g.m42+g.m11*g.m34*g.m42+g.m12*g.m31*g.m44-g.m11*g.m32*g.m44;g.m33=g.m12*g.m24*g.m41-g.m14*g.m22*g.m41+g.m14*g.m21*g.m42-g.m11*g.m24*g.m42-g.m12*g.m21*g.m44+g.m11*g.m22*g.m44;g.m34=g.m14*g.m22*g.m31-g.m12*g.m24*g.m31-g.m14*g.m21*g.m32+g.m11*g.m24*g.m32+g.m12*g.m21*g.m34-g.m11*g.m22*g.m34;g.m41=g.m23*g.m32*g.m41-g.m22*g.m33*g.m41-g.m23*g.m31*g.m42+g.m21*g.m33*g.m42+g.m22*g.m31*g.m43-g.m21*g.m32*g.m43;g.m42=g.m12*g.m33*g.m41-g.m13*g.m32*g.m41+g.m13*g.m31*g.m42-g.m11*g.m33*g.m42-g.m12*g.m31*g.m43+g.m11*g.m32*g.m43;g.m43=g.m13*g.m22*g.m41-g.m12*g.m23*g.m41-g.m13*g.m21*g.m42+g.m11*g.m23*g.m42+g.m12*g.m21*g.m43-g.m11*g.m22*g.m43;g.m44=g.m12*g.m23*g.m31-g.m13*g.m22*g.m31+g.m13*g.m21*g.m32-g.m11*g.m23*g.m32-g.m12*g.m21*g.m33+g.m11*g.m22*g.m33;return g.scale(1/g.__determinant__())},multiply:function(g){return this.__multiplyMatrices__(this.__clone__(),g)},__multiplyMatrices__:function(g,h){h.m11=h.m11*g.m11+h.m12*g.m21+h.m13*g.m31+h.m14*g.m41;h.m12=h.m11*g.m12+h.m12*g.m22+h.m13*g.m32+h.m14*g.m42;h.m13=h.m11*g.m13+h.m12*g.m23+h.m13*g.m33+h.m14*g.m43;h.m14=h.m11*g.m14+h.m12*g.m24+h.m13*g.m34+h.m14*g.m44;h.m21=h.m21*g.m11+h.m22*g.m21+h.m23*g.m31+h.m24*g.m41;h.m22=h.m21*g.m12+h.m22*g.m22+h.m23*g.m32+h.m24*g.m42;h.m23=h.m21*g.m13+h.m22*g.m23+h.m23*g.m33+h.m24*g.m43;h.m24=h.m21*g.m14+h.m22*g.m24+h.m23*g.m34+h.m24*g.m44;h.m31=h.m31*g.m11+h.m32*g.m21+h.m33*g.m31+h.m34*g.m41;h.m32=h.m31*g.m12+h.m32*g.m22+h.m33*g.m32+h.m34*g.m42;h.m33=h.m31*g.m13+h.m32*g.m23+h.m33*g.m33+h.m34*g.m43;h.m34=h.m31*g.m14+h.m32*g.m24+h.m33*g.m34+h.m34*g.m44;h.m41=h.m41*g.m11+h.m42*g.m21+h.m43*g.m31+h.m44*g.m41;h.m42=h.m41*g.m12+h.m42*g.m22+h.m43*g.m32+h.m44*g.m42;h.m43=h.m41*g.m13+h.m42*g.m23+h.m43*g.m33+h.m44*g.m43;h.m44=h.m41*g.m14+h.m42*g.m24+h.m43*g.m34+h.m44*g.m44;return h},multiplyLeft:function(g){return this.__multiplyMatrices__(g,this.__clone__())},rotate:function(i,h,g){if(i&&!(h&&g)){return this.__rotateX__(i)}else{if(h&&!(i&&g)){return this.__rotateY__(h)}else{if(g&&!(i&&h)){return this.__rotateZ__(g)}}}h=h||i;g=g||g;return this.__rotateX__(i).__rotateY__(h).__rotateZ__(g)},__rotateX__:function(i){var j=Math.cos(-i*Math.PI/180),h=Math.sin(-i*Math.PI/180),g=this.__clone__();g.m12=j*this.m12+h*this.m13;g.m22=j*this.m22+h*this.m23;g.m32=j*this.m32+h*this.m33;g.m42=j*this.m42+h*this.m43;g.m13=j*this.m13-h*this.m12;g.m23=j*this.m23-h*this.m22;g.m33=j*this.m33-h*this.m32;g.m43=j*this.m43-h*this.m42;return g},__rotateY__:function(i){var j=Math.cos(-i*this.PID180),h=Math.sin(-i*this.PID180),g=this.__clone__();g.m11=j*this.m11-h*this.m13;g.m21=j*this.m21-h*this.m23;g.m31=j*this.m31-h*this.m33;g.m41=j*this.m41-h*this.m43;g.m13=j*this.m13+h*this.m11;g.m23=j*this.m23+h*this.m21;g.m33=j*this.m33+h*this.m31;g.m43=j*this.m43+h*this.m41;return g},__rotateZ__:function(i){var j=Math.cos(-i*this.PID180),h=Math.sin(-i*this.PID180),g=this.__clone__();g.m11=j*this.m11+h*this.m12;g.m21=j*this.m21+h*this.m22;g.m31=j*this.m31+h*this.m32;g.m41=j*this.m41+h*this.m42;g.m12=j*this.m12-h*this.m11;g.m22=j*this.m22-h*this.m21;g.m32=j*this.m32-h*this.m31;g.m42=j*this.m42-h*this.m41;return g},rotateAxisAngle:function(g,m,k,j){m=m||g;k=k||m;if(g===1&&m===0&&k===0){return this.__rotateX__(j)}else{if(g===0&&m===1&&k===0){return this.__rotateY__(j)}else{if(g===0&&m===0&&k===1){return this.__rotateZ__(j)}}}var i=new CSSMatrix(),l=Math.cos(j)*this.PID180,h=Math.sin(j)*this.PID180;i.m11=l+g*g*(1-l);i.m12=g*m*(1-l)-k*h;i.m13=g*k*(1-l)+m*h;i.m21=m*g*(1-l)+k*h;i.m22=l+m*m*(1-l);i.m23=m*k*(1-l)-g*h;i.m31=k*g*(1-l)-m*h;i.m32=k*m*(1-l)+g*h;i.m33=l+k*k*(1-l);return this.__clone__().multiply(i)},scale:function(j,i,g){i=i||j;g=g||1;var h=this.__clone__();h.m11*=j;h.m21*=i;h.m31*=g;h.m12*=j;h.m22*=i;h.m32*=g;h.m13*=j;h.m23*=i;h.m33*=g;h.m13*=j;h.m24*=i;h.m34*=g;return h},setMatrixValue:function(j){var g=j.match(/[+-]?\d*[.]?\d+(?=,|\))/g);for(var h=0;h<16;h++){this["m"+((h/4|0)+1)+(h%4+1)]=Number(g[h])}return this},skewX:function(h){h*=this.PID180;var g=this.__clone__();g.m21=Math.tan(h);return g},skewY:function(h){h*=this.PID180;var g=this.__clone__();g.m12=Math.tan(h);return g},toString:function(){var h=this.m11.toFixed(6);for(var g=1;g<16;g++){h+=","+(this["m"+((g/4|0)+1)+(g%4+1)]).toFixed(6)}return"matrix3d("+h+")"},translate:function(h,j,i){var g=this.__clone__(),i=i||0;g.m41=g.m11*h+g.m21*j+g.m31*i+g.m41;g.m42=g.m12*h+g.m22*j+g.m32*i+g.m42;g.m43=g.m13*h+g.m14*j+g.m33*i+g.m43;g.m44=g.m14*h+g.m24*j+g.m34*i+g.m44;return g},__determinant__:function(){return(this.m41*(+this.m14*this.m23*this.m32-this.m13*this.m24*this.m32-this.m14*this.m22*this.m33+this.m12*this.m24*this.m33+this.m13*this.m22*this.m34-this.m12*this.m23*this.m34)+this.m42*(+this.m11*this.m23*this.m34-this.m11*this.m24*this.m33+this.m14*this.m21*this.m33-this.m13*this.m21*this.m34+this.m13*this.m24*this.m31-this.m14*this.m23*this.m31)+this.m43*(+this.m11*this.m24*this.m32-this.m11*this.m22*this.m34-this.m14*this.m21*this.m32+this.m12*this.m21*this.m34+this.m14*this.m22*this.m31-this.m12*this.m24*this.m31)+this.m44*(-this.m13*this.m22*this.m31-this.m11*this.m23*this.m32+this.m11*this.m22*this.m33+this.m13*this.m21*this.m32-this.m12*this.m21*this.m33+this.m12*this.m23*this.m31))},__clone__:function(){var h=new CSSMatrix();for(var g=0;g<16;g++){h["m"+((g/4|0)+1)+(g%4+1)]=this["m"+((g/4|0)+1)+(g%4+1)]}return h}};
    return CSSMatrix;
})();