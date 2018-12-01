webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-particles-js/lib/particles.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-particles-js/lib/particles.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e){return function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=5)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CIRCLE="circle",e.EDGE="edge",e.TRIANGLE="triangle",e.POLYGON="polygon",e.STAR="star",e.IMAGE="image",e.IMAGES="images"}(t.ShapeType||(t.ShapeType={})),function(e){e.TOP="top",e.TOP_RIGHT="top-right",e.RIGHT="right",e.BOTTOM_RIGHT="bottom-right",e.BOTTOM="bottom",e.BOTTOM_LEFT="bottom-left",e.LEFT="left",e.TOP_LEFT="top-left",e.NONE="none"}(t.MoveDirection||(t.MoveDirection={})),function(e){e.BOUNCE="bounce",e.OUT="out"}(t.MoveOutMode||(t.MoveOutMode={})),function(e){e.GRAB="grab",e.PUSH="push",e.REMOVE="remove",e.BUBBLE="bubble",e.REPULSE="repulse"}(t.InteractivityMode||(t.InteractivityMode={})),function(e){e.INLINE="inline",e.INSIDE="inside",e.OUTSIDE="outside"}(t.PolygonType||(t.PolygonType={})),function(e){e.RANDOM_POINT="random-point",e.ONE_PER_POINT="one-per-point",e.RANDOM_LENGTH="random-length",e.EQUIDISTANT="equidistant"}(t.PolygonInlineArrangementType||(t.PolygonInlineArrangementType={})),function(e){e.PATH="path",e.RADIUS="radius"}(t.PolygonMoveType||(t.PolygonMoveType={}))},function(e,t,i){"use strict";function a(e){for(var i in e)t.hasOwnProperty(i)||(t[i]=e[i])}Object.defineProperty(t,"__esModule",{value:!0});var n=i(4);t.Interactivity=n.default;var r=i(7);t.Modes=r.default;var o=i(8);t.Particle=o.default;var s=i(9);t.ParticleManager=s.default;var l=i(10);t.ParticlesLibrary=l.default;var c=i(12);t.Vendors=c.default,a(i(13)),a(i(0)),a(i(14)),a(i(2))},function(e,t,i){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){return t.indexOf(e)>-1}Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRgb=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,i,a){return t+t+i+i+a+a});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},t.clamp=function(e,t,i){return Math.min(Math.max(e,t),i)},t.isInArray=n,t.isEqual=function(e,t){return Array.isArray(t)?n(e,t):t===e},t.deepAssign=function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];for(var o=0;o<n.length;o++){var s=n[o];if(void 0!==s&&null!==s)if("object"===a(s)){Array.isArray(s)?"object"===a(e)&&e&&Array.isArray(e)||(e=[]):"object"===a(e)&&e&&!Array.isArray(e)||(e={});var l=function(i){if("__proto__"===i)return"continue";var n=s[i],r="object"===a(n);r&&Array.isArray(n)?e[i]=n.map(function(a){return t.deepAssign(e[i],a)}):e[i]=t.deepAssign(e[i],n)};for(var c in s)l(c)}else e=s}return e},t.getColor=function(e){var i={};if("object"==a(e))if(e instanceof Array){var n=e[Math.floor(Math.random()*e.length)];i.rgb=t.hexToRgb(n)}else{var r=e.r,o=e.g,s=e.b;if(void 0!==r&&void 0!==o&&void 0!==s)i.rgb={r:r,g:o,b:s};else{var l=e.h,c=e.s,h=e.l;void 0!==l&&void 0!==o&&void 0!==s&&(i.hsl={h:l,s:c,l:h})}}else"random"==e?i.rgb={r:Math.floor(255*Math.random())+1,g:Math.floor(255*Math.random())+1,b:Math.floor(255*Math.random())+1}:"string"==typeof e&&(i.rgb=t.hexToRgb(e));return i}},function(t,i){t.exports=e},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n,r=i(0);!function(e){e.MOUSEMOVE="mousemove",e.MOUSELEAVE="mouseleave"}(n=t.MouseInteractivityStatus||(t.MouseInteractivityStatus={}));var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.library=t,this.mouseMovePosition={x:0,y:0},this.mouseClickPosition={x:0,y:0},this.mouseClickTime=0,this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseClick=this.onMouseClick.bind(this)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"attachEventHandlers",value:function(){var e=this.library.getParameter(function(e){return e.interactivity});"window"===e.detect_on?this.interactionElement=window:this.interactionElement=this.library.canvas.element,(e.events.onhover.enable||e.events.onclick.enable)&&(this.interactionElement.addEventListener("mousemove",this.onMouseMove),this.interactionElement.addEventListener("mouseleave",this.onMouseLeave)),e.events.onclick.enable&&this.interactionElement.addEventListener("click",this.onMouseClick)}},{key:"detachEventHandlers",value:function(){var e=this.library.getParameter(function(e){return e.interactivity});this.interactionElement&&((e.events.onhover.enable||e.events.onclick.enable)&&(this.interactionElement.removeEventListener("mousemove",this.onMouseMove),this.interactionElement.removeEventListener("mouseleave",this.onMouseLeave)),e.events.onclick.enable&&this.interactionElement.removeEventListener("click",this.onMouseClick))}},{key:"onMouseMove",value:function(e){var t={x:0,y:0};this.interactionElement===window?(t.x=e.clientX,t.y=e.clientY):(t.x=e.offsetX||e.clientX,t.y=e.offsetY||e.clientY),this.mouseMovePosition=t,this.library.retina&&(this.mouseMovePosition.x*=this.library.canvas.pxratio,this.mouseMovePosition.y*=this.library.canvas.pxratio),this.mouseStatus=n.MOUSEMOVE}},{key:"onMouseLeave",value:function(){this.mouseMovePosition.x=0,this.mouseMovePosition.y=0,this.mouseStatus=n.MOUSELEAVE}},{key:"onMouseClick",value:function(){var e=this,t=this.library.getParameter(function(e){return e.interactivity}),i=this.library.getParameter(function(e){return e.particles}),a=this.library.getParameter(function(e){return e.polygon});if(this.mouseClickPosition=Object.assign({},this.mouseMovePosition),a.enable&&[r.PolygonType.INSIDE,r.PolygonType.OUTSIDE].indexOf(a.type)>-1){var n=this.library.polygonMask.isPointInsidePolygon(this.mouseClickPosition);if(a.type===r.PolygonType.INSIDE&&!n)return;if(a.type===r.PolygonType.OUTSIDE&&n)return}if(this.mouseClickTime=(new Date).getTime(),t.events.onclick.enable)switch(t.events.onclick.mode){case r.InteractivityMode.PUSH:i.move.enable?this.library.modes.pushParticles(t.modes.push.particles_nb,this.mouseClickPosition):1==t.modes.push.particles_nb?this.library.modes.pushParticles(t.modes.push.particles_nb,this.mouseClickPosition):t.modes.push.particles_nb>1&&this.library.modes.pushParticles(t.modes.push.particles_nb);break;case r.InteractivityMode.REMOVE:this.library.modes.removeParticles(t.modes.remove.particles_nb);break;case r.InteractivityMode.BUBBLE:this.library.modes.bubble_clicking=!0;break;case r.InteractivityMode.REPULSE:this.library.modes.repulse_clicking=!0,this.library.modes.repulse_count=0,this.library.modes.repulse_finish=!1,setTimeout(function(){e.library.modes.repulse_clicking=!1},1e3*t.modes.repulse.duration)}}},{key:"linkParticles",value:function(e,t){var i=this.library.manager.getDistance(e,t),a=this.library.canvas,n=this.library.getParameter(function(e){return e.particles.line_linked});if(i<=n.distance){var r=n.opacity-i/(1/n.opacity)/n.distance;if(r>0){var o=n.color_rgb_line,s=o.r,l=o.g,c=o.b;a.ctx.save(),a.ctx.strokeStyle="rgba( ".concat(s,", ").concat(l,", ").concat(c,", ").concat(r," )"),a.ctx.lineWidth=n.width,a.ctx.beginPath(),n.shadow.enable&&(a.ctx.shadowBlur=n.shadow.blur,a.ctx.shadowColor=n.shadow.color),a.ctx.moveTo(e.x,e.y),a.ctx.lineTo(t.x,t.y),a.ctx.stroke(),a.ctx.closePath(),a.ctx.restore()}}}},{key:"attractParticles",value:function(e,t){var i=this.library.manager.getDistances(e,t),a=i.distance,n=i.distanceX,r=i.distanceY,o=this.library.getParameter(function(e){return e.particles.line_linked}),s=this.library.getParameter(function(e){return e.particles.move.attract});if(a<=o.distance){var l=n/(1e3*s.rotateX),c=r/(1e3*s.rotateY);e.vx-=l,e.vy-=c,t.vx+=l,t.vy+=c}}},{key:"bounceParticles",value:function(e,t){this.library.manager.getDistance(e,t)<=e.radius+t.radius&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)}}]),e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(6);t.Particles=a.default,t.default=a.default},function(e,t,i){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,i){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(a){var n=Object.getOwnPropertyDescriptor(a,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Object.defineProperty(t,"__esModule",{value:!0});var c=i(3),h=i(3),u=i(1),y=function(e){function t(e){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?l(e):t}(this,o(t).call(this,e))).state={canvas:void 0,library:void 0},i.loadCanvas=i.loadCanvas.bind(l(l(i))),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,h.Component),function(e,t,i){t&&n(e.prototype,t),i&&n(e,i)}(t,[{key:"buildParticlesLibrary",value:function(e){try{if(void 0===window)return null}catch(e){return null}return new u.ParticlesLibrary(e)}},{key:"refresh",value:function(e){var t=this;this.state.canvas&&(this.destroy(),this.setState({library:this.buildParticlesLibrary(e.params)},function(){t.loadCanvas(t.state.canvas)}))}},{key:"destroy",value:function(){this.state.library.destroy()}},{key:"loadCanvas",value:function(e){var t=this;e&&this.setState({canvas:e},function(){t.state.library.loadCanvas(t.state.canvas),t.state.library.start()})}},{key:"shouldComponentUpdate",value:function(e){return e!==this.props}},{key:"componentDidUpdate",value:function(){this.refresh(this.props)}},{key:"forceUpdate",value:function(){this.refresh(this.props),r(o(t.prototype),"forceUpdate",this).call(this)}},{key:"componentDidMount",value:function(){this.setState({library:this.buildParticlesLibrary(this.props.params)})}},{key:"componentWillUnmount",value:function(){this.destroy(),this.setState({library:void 0})}},{key:"render",value:function(){var e=this.props,t=e.width,i=e.height,a=e.className,n=e.canvasClassName;return c.createElement("div",{className:a},c.createElement("canvas",{ref:this.loadCanvas,className:n,style:Object.assign({},this.props.style,{width:t,height:i})}))}}]),t}();y.defaultProps={width:"100%",height:"100%",params:{},style:{}},t.default=y},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=i(4),s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.library=t,this.bubble_clicking=!1,this.bubble_duration_end=!1,this.pushing=!1,this.repulse_clicking=!1,this.repulse_count=0,this.repulse_finish=!1}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"pushParticles",value:function(e,t){var i=this.library.manager,a=this.library.getParameter(function(e){return e.particles});this.pushing=!0;for(var r=0;r<e;r++)a.array.push(new n.Particle(this.library,{position:t})),r===e-1&&(a.move.enable||i.particlesDraw(),this.pushing=!1)}},{key:"removeParticles",value:function(e){var t=this.library.manager,i=this.library.getParameter(function(e){return e.particles});i.array.splice(0,e),i.move.enable||t.particlesDraw()}},{key:"bubbleParticle",value:function(e){var t=this,i=this.library.getParameter(function(e){return e.interactivity}),a=this.library.getParameter(function(e){return e.particles});if(i.events.onhover.enable&&n.isInArray(r.InteractivityMode.BUBBLE,i.events.onhover.mode)){var s=this.library.manager.getDistance(e,this.library.interactivity.mouseMovePosition),l=i.modes.bubble.distance,c=1-s/l;if(s<=l){if(c>=0&&this.library.interactivity.mouseStatus===o.MouseInteractivityStatus.MOUSEMOVE){var h=i.modes.bubble.size,u=a.size.value;if(h!=u)if(h>u){var y=e.radius+h*c;y>=0&&(e.radius_bubble=y)}else{var v=e.radius-h,p=e.radius-v*c;e.radius_bubble=p>0?p:0}if(i.modes.bubble.opacity!==a.opacity.value)if(i.modes.bubble.opacity>a.opacity.value){var d=i.modes.bubble.opacity*c;d>e.opacityValue&&d<=i.modes.bubble.opacity&&(e.bubbleOpacity=d)}else{var g=e.opacityValue-(a.opacity.value-i.modes.bubble.opacity)*c;g<e.opacityValue&&g>=i.modes.bubble.opacity&&(e.bubbleOpacity=g)}}}else e.bubbleOpacity=e.opacityValue,e.radius_bubble=e.radius;this.library.interactivity.mouseStatus===o.MouseInteractivityStatus.MOUSELEAVE&&(e.bubbleOpacity=e.opacityValue,e.radius_bubble=e.radius)}else if(i.events.onclick.enable&&n.isInArray(r.InteractivityMode.BUBBLE,i.events.onclick.mode)&&this.bubble_clicking){var b=this.library.manager.getDistance(e,this.library.interactivity.mouseClickPosition),f=((new Date).getTime()-this.library.interactivity.mouseClickTime)/1e3;f>i.modes.bubble.duration&&(this.bubble_duration_end=!0),f>2*i.modes.bubble.duration&&(this.bubble_clicking=!1,this.bubble_duration_end=!1);var m=function(a,n,r,o,s){if(a!=n)if(t.bubble_duration_end){if(void 0!=r){var l=a+(a-(o-f*(o-a)/i.modes.bubble.duration));"size"==s&&(e.radius_bubble=l),"opacity"==s&&(e.bubbleOpacity=l)}}else if(b<=i.modes.bubble.distance){if((void 0!=r?r:o)!=a){var c=o-f*(o-a)/i.modes.bubble.duration;"size"==s&&(e.radius_bubble=c),"opacity"==s&&(e.bubbleOpacity=c)}}else"size"==s&&(e.radius_bubble=void 0),"opacity"==s&&(e.bubbleOpacity=void 0)};this.bubble_clicking&&(m(i.modes.bubble.size,a.size.value,e.radius_bubble,e.radius,"size"),m(i.modes.bubble.opacity,a.opacity.value,e.bubbleOpacity,e.opacityValue,"opacity"))}}},{key:"repulseParticle",value:function(e){var t=this.library.canvas,i=this.library.getParameter(function(e){return e.interactivity}),a=this.library.getParameter(function(e){return e.particles});if(i.events.onhover.enable&&n.isInArray(r.InteractivityMode.REPULSE,i.events.onhover.mode)&&this.library.interactivity.mouseStatus===o.MouseInteractivityStatus.MOUSEMOVE){var s=this.library.manager.getDistances(e,this.library.interactivity.mouseMovePosition),l=s.distance,c={x:s.distanceX/l,y:s.distanceY/l},h=i.modes.repulse.distance,u=n.clamp(1/h*(-1*Math.pow(l/h,2)+1)*h*100,0,50),y={x:e.x+c.x*u,y:e.y+c.y*u};a.move.out_mode===r.MoveOutMode.BOUNCE?(y.x-e.radius>0&&y.x+e.radius<t.width&&(e.x=y.x),y.y-e.radius>0&&y.y+e.radius<t.height&&(e.y=y.y)):(e.x=y.x,e.y=y.y)}else if(i.events.onclick.enable&&n.isInArray(r.InteractivityMode.REPULSE,i.events.onclick.mode))if(this.repulse_finish||(this.repulse_count++,this.repulse_count==a.array.length&&(this.repulse_finish=!0)),this.repulse_clicking){var v=Math.pow(i.modes.repulse.distance/6,3),p=this.library.manager.getDistances(this.library.interactivity.mouseClickPosition,e),d=p.distance,g=p.distanceX,b=p.distanceY,f=-1*(v/Math.pow(d,2));if(d<=v){var m=Math.atan2(b,g);if(e.vx=f*Math.cos(m),e.vy=f*Math.sin(m),a.move.out_mode===r.MoveOutMode.BOUNCE){var P={x:e.x+e.vx,y:e.y+e.vy};P.x+e.radius>t.width?e.vx=-e.vx:P.x-e.radius<0&&(e.vx=-e.vx),P.y+e.radius>t.height?e.vy=-e.vy:P.y-e.radius<0&&(e.vy=-e.vy)}}}else!1===this.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)}},{key:"grabParticle",value:function(e){var t=this.library.canvas,i=this.library.getParameter(function(e){return e}),a=i.interactivity,n=i.particles;if(a.events.onhover.enable&&this.library.interactivity.mouseStatus===o.MouseInteractivityStatus.MOUSEMOVE){var r=this.library.manager.getDistance(e,this.library.interactivity.mouseMovePosition);if(r<=a.modes.grab.distance){var s=a.modes.grab,l=s.line_linked.opacity-r/(1/s.line_linked.opacity)/s.distance;if(l>0){var c=n.line_linked.color_rgb_line,h=c.r,u=c.g,y=c.b;t.ctx.strokeStyle="rgba( ".concat(h,", ").concat(u,", ").concat(y,", ").concat(l," )"),t.ctx.lineWidth=n.line_linked.width,t.ctx.beginPath(),t.ctx.moveTo(e.x,e.y),t.ctx.lineTo(this.library.interactivity.mouseMovePosition.x,this.library.interactivity.mouseMovePosition.y),t.ctx.stroke(),t.ctx.closePath()}}}}}]),e}();t.default=s},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=i(2),s=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.color,n=i.move,r=i.opacity,o=i.polygon,s=i.position,l=i.shape,c=i.size;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.library=t,this.setupSize(c),this.setupPosition(n,o,s),this.setupColor(a),this.setupOpacity(r),this.setupAnimation(n),this.setupShape(l)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"setupSize",value:function(e){var t=this.library.getParameter(function(e){return e.particles.size});e=o.deepAssign({},t,e),this.radius=(e.random?Math.random():1)*e.value,e.anim.enable&&(this.size_status=!1,this.vs=e.anim.speed/100,e.anim.sync||(this.vs=this.vs*Math.random()))}},{key:"setupPosition",value:function(e,t,i){this.initialPosition=i;var a=this.library.getParameter(function(e){return e.particles.move});e=o.deepAssign({},a,e);var n=this.library.getParameter(function(e){return e.polygon});t=o.deepAssign({},n,t);var s=this.library.getParameter(function(e){return e.particles.array}),l=this.library,c=l.canvas,h=l.vendors;if(i)this.x=i.x,this.y=i.y;else if(t.enable){var u;switch(t.type){case r.PolygonType.INLINE:switch(t.inline.arrangement){case r.PolygonInlineArrangementType.RANDOM_POINT:u=this.library.polygonMask.getRandomPointOnPolygonPath();break;case r.PolygonInlineArrangementType.RANDOM_LENGTH:u=this.library.polygonMask.getRandomPointOnPolygonPathByLength();break;case r.PolygonInlineArrangementType.EQUIDISTANT:u=this.library.polygonMask.getEquidistantPoingOnPolygonPathByIndex(s.length);break;case r.PolygonInlineArrangementType.ONE_PER_POINT:default:u=this.library.polygonMask.getPoingOnPolygonPathByIndex(s.length)}break;case r.PolygonType.INSIDE:u=this.library.polygonMask.getRandomPointInsidePolygonPath();break;case r.PolygonType.OUTSIDE:u=this.library.polygonMask.getRandomPointOutsidePolygonPath()}u&&(this.x=u.x,this.y=u.y,this.initialPosition={x:this.x,y:this.y})}void 0!==this.x&&void 0!==this.y||(this.x=Math.random()*c.width,this.y=Math.random()*c.height),this.x>c.width-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>c.height-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),e.bounce&&h.checkOverlap(this,{x:this.x,y:this.y})}},{key:"setupColor",value:function(e){var t=this.library.getParameter(function(e){return e.particles.color});e=o.deepAssign({},e,t),this.color=n.getColor(e.value)}},{key:"setupOpacity",value:function(e){var t=this.library.getParameter(function(e){return e.particles.opacity});e=o.deepAssign({},t,e),this.opacityValue=(e.random?Math.random():1)*e.value,e.anim.enable&&(this.opacity_status=!1,this.vo=e.anim.speed/100,e.anim.sync||(this.vo=this.vo*Math.random()))}},{key:"setupAnimation",value:function(e){var t,i=this.library.getParameter(function(e){return e.particles.move});switch((e=o.deepAssign({},i,e)).direction){case r.MoveDirection.TOP:t={x:0,y:-1};break;case r.MoveDirection.TOP_RIGHT:t={x:.5,y:-.5};break;case r.MoveDirection.RIGHT:t={x:1,y:0};break;case r.MoveDirection.BOTTOM_RIGHT:t={x:.5,y:.5};break;case r.MoveDirection.BOTTOM:t={x:0,y:1};break;case r.MoveDirection.BOTTOM_LEFT:t={x:-.5,y:1};break;case r.MoveDirection.LEFT:t={x:-1,y:0};break;case r.MoveDirection.TOP_LEFT:t={x:-.5,y:-.5};break;default:t={x:0,y:0}}e.straight?(this.vx=t.x,this.vy=t.y,e.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=t.x+Math.random()-.5,this.vy=t.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy}},{key:"setupShape",value:function(e){var t=this,i=this.library.getParameter(function(e){return e.particles.shape});e=o.deepAssign({},i,e);var a=this.library.getParameter(function(e){return e.particles.array});if(Array.isArray(e.type)){var n=e.type[Math.floor(Math.random()*e.type.length)];e=o.deepAssign({},e,{type:n})}this.shape=e,e.type!==r.ShapeType.IMAGE&&e.type!==r.ShapeType.IMAGES||(e.type===r.ShapeType.IMAGES?this.shapeImage=this.library.imageManager.getImage(a.length):this.shapeImage=this.library.imageManager.getImage(),"svg"===this.shapeImage.type&&void 0!==this.shapeImage.svgData&&this.library.imageManager.createSvgImage(this.shapeImage.svgData,{color:this.color,opacity:this.opacityValue}).then(function(e){t.shapeImage.elementData=e,t.shapeImage.loaded=!0}))}},{key:"draw",value:function(){var e,t,i,a=this.library,n=a.canvas,o=a.vendors;if(e=void 0!==this.radius_bubble?this.radius_bubble:this.radius,t=void 0!==this.bubbleOpacity?this.bubbleOpacity:this.opacityValue,this.color.rgb){var s=this.color.rgb,l=s.r,c=s.g,h=s.b;i="rgba( ".concat(l,", ").concat(c,", ").concat(h,", ").concat(t," )")}else{var u=this.color.hsl,y=u.h,v=u.s,p=u.l;i="hsla( ".concat(y,", ").concat(v,", ").concat(p,", ").concat(t," )")}switch(n.ctx.fillStyle=i,n.ctx.beginPath(),this.shape.type){case r.ShapeType.CIRCLE:n.ctx.arc(this.x,this.y,e,0,2*Math.PI,!1);break;case r.ShapeType.EDGE:n.ctx.rect(this.x-e,this.y-e,2*e,2*e);break;case r.ShapeType.TRIANGLE:o.drawShape(n.ctx,this.x-e,this.y+e/1.66,2*e,3,2);break;case r.ShapeType.POLYGON:o.drawShape(n.ctx,this.x-e/(this.shape.polygon.nb_sides/3.5),this.y-e/.76,2.66*e/(this.shape.polygon.nb_sides/3),this.shape.polygon.nb_sides,1);break;case r.ShapeType.STAR:o.drawShape(n.ctx,this.x-2*e/(this.shape.polygon.nb_sides/4),this.y-e/1.52,2*e*2.66/(this.shape.polygon.nb_sides/3),this.shape.polygon.nb_sides,2);break;case r.ShapeType.IMAGES:case r.ShapeType.IMAGE:this.shapeImage.elementData&&n.ctx.drawImage(this.shapeImage.elementData,this.x-e,this.y-e,2*e,2*e/this.shapeImage.ratio)}n.ctx.closePath(),this.shape.stroke.width>0&&(n.ctx.strokeStyle=this.shape.stroke.color,n.ctx.lineWidth=this.shape.stroke.width,n.ctx.stroke()),n.ctx.fill()}}]),e}();t.default=s},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.library=t,this.particlesCreate=this.particlesCreate.bind(this)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"particlesCreate",value:function(){var e=this.library.getParameter(function(e){return e.particles}),t=this.library.getParameter(function(e){return e.polygon}),i=e.number.value;t.enable&&t.type===r.PolygonType.INLINE&&t.inline.arrangement===r.PolygonInlineArrangementType.ONE_PER_POINT&&(i=this.library.polygonMask.getVerticesNumber());for(var a=0;a<i;a++)e.array.push(new n.Particle(this.library))}},{key:"particlesUpdate",value:function(){var e=this,t=this.library,i=t.canvas,a=t.modes,o=this.library.getParameter(function(e){return e.interactivity}),s=this.library.getParameter(function(e){return e.particles}),l=this.library.getParameter(function(e){return e.polygon});s.array.forEach(function(t,c){if(s.move.enable){var h=s.move.speed/2;t.x+=t.vx*h,t.y+=t.vy*h}var u;switch(s.opacity.anim.enable&&(1==t.opacity_status?(t.opacityValue>=s.opacity.value&&(t.opacity_status=!1),t.opacityValue+=t.vo):(t.opacityValue<=s.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacityValue-=t.vo),t.opacityValue<0&&(t.opacityValue=0)),s.size.anim.enable&&(1==t.size_status?(t.radius>=s.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=s.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),u="bounce"==s.move.out_mode?{x_left:t.radius,x_right:i.width,y_top:t.radius,y_bottom:i.height}:{x_left:-t.radius,x_right:i.width+t.radius,y_top:-t.radius,y_bottom:i.height+t.radius},t.x-t.radius>i.width?(t.x=u.x_left,t.y=Math.random()*i.height):t.x+t.radius<0&&(t.x=u.x_right,t.y=Math.random()*i.height),t.y-t.radius>i.height?(t.y=u.y_top,t.x=Math.random()*i.width):t.y+t.radius<0&&(t.y=u.y_bottom,t.x=Math.random()*i.width),s.move.out_mode){case"bounce":if(l.enable){var y=l.move.radius;switch(l.type){case r.PolygonType.INLINE:e.getDistance(t.initialPosition,t)>y&&(t.vx=-t.vx+t.vy/2,t.vy=-t.vy+t.vx/2);break;case r.PolygonType.INSIDE:case r.PolygonType.OUTSIDE:var v=l.move.type;if(v===r.PolygonMoveType.RADIUS)e.getDistance(t.initialPosition,t)>y&&(t.vx=-t.vx+t.vy/2,t.vy=-t.vy+t.vx/2);else if(v===r.PolygonMoveType.PATH){var p=l.type===r.PolygonType.INSIDE,d=e.library.polygonMask.isPointInsidePolygon({x:t.x,y:t.y});(p&&!d||!p&&d)&&(t.vx=-t.vx+t.vy/2,t.vy=-t.vy+t.vx/2)}}}else t.x+t.radius>i.width?t.vx=-t.vx:t.x-t.radius<0&&(t.vx=-t.vx),t.y+t.radius>i.height?t.vy=-t.vy:t.y-t.radius<0&&(t.vy=-t.vy)}if(n.isInArray("grab",o.events.onhover.mode)&&a.grabParticle(t),(n.isInArray("bubble",o.events.onhover.mode)||n.isInArray("bubble",o.events.onclick.mode))&&a.bubbleParticle(t),(n.isInArray("repulse",o.events.onhover.mode)||n.isInArray("repulse",o.events.onclick.mode))&&a.repulseParticle(t),s.line_linked.enable||s.move.attract.enable)for(var g=c+1;g<s.array.length;g++){var b=s.array[g];s.line_linked.enable&&e.library.interactivity.linkParticles(t,b),s.move.attract.enable&&e.library.interactivity.attractParticles(t,b),s.move.bounce&&e.library.interactivity.bounceParticles(t,b)}})}},{key:"getDistances",value:function(e,t){var i=e.x-t.x,a=e.y-t.y;return{distance:Math.sqrt(i*i+a*a),distanceX:i,distanceY:a}}},{key:"getDistance",value:function(e,t){return this.getDistances(e,t).distance}},{key:"particlesDraw",value:function(){var e=this.library,t=e.canvas,i=e.manager,a=this.library.getParameter(function(e){return e.particles}),n=this.library.getParameter(function(e){return e.polygon});t.ctx.clearRect(0,0,t.width,t.height),i.particlesUpdate(),a.array.forEach(function(e){e.draw()}),n.enable&&n.draw.enable&&this.library.polygonMask.drawPolygon()}},{key:"particlesEmpty",value:function(){this.library.getParameter(function(e){return e.particles}).array=[]}},{key:"particlesRefresh",value:function(){cancelAnimationFrame(this.library.drawAnimFrame),this.particlesEmpty(),this.library.canvasClear(),this.library.start()}}]),e}();t.default=o},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(11),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.imageManager=new r.ImageManager,this.retina=!1,this.onWindowResize=this.onWindowResize.bind(this),this.loadParameters(t),this.interactivity=new n.Interactivity(this),this.modes=new n.Modes(this),this.vendors=new n.Vendors(this.imageManager,this.params,this),this.manager=new n.ParticleManager(this),this.polygonMask=new n.PolygonMask(this)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"getParameter",value:function(e){return e(this.params)}},{key:"setParameters",value:function(e){this.params=n.deepAssign(Object.assign({},this.params),e)}},{key:"loadParameters",value:function(e){var t=n.deepAssign({},n.getDefaultParams(),e);this.params=t}},{key:"loadCanvas",value:function(e){this.canvas={element:e,width:e.offsetWidth,height:e.offsetHeight}}},{key:"start",value:function(){this.interactivity.attachEventHandlers(),this.vendors.start()}},{key:"destroy",value:function(){this.detachListeners(),this.interactivity.detachEventHandlers(),cancelAnimationFrame(this.drawAnimFrame),this.canvasClear()}},{key:"detachListeners",value:function(){window.removeEventListener("resize",this.onWindowResize)}},{key:"retinaInit",value:function(){var e=window.devicePixelRatio;if(this.params.retina_detect&&e>1){this.canvas.pxratio=e,this.canvas.width=this.canvas.element.offsetWidth*this.canvas.pxratio,this.canvas.height=this.canvas.element.offsetHeight*this.canvas.pxratio,this.retina=!0;var t=this.getParameter(function(e){return e});this.setParameters({interactivity:{modes:{bubble:{distance:t.interactivity.modes.bubble.distance*e,size:t.interactivity.modes.bubble.size*e},grab:{distance:t.interactivity.modes.grab.distance*e},repulse:{distance:t.interactivity.modes.repulse.distance*e}}},particles:{line_linked:{distance:t.particles.line_linked.distance*e,width:t.particles.line_linked.width*e},move:{speed:t.particles.move.speed*e},size:{value:t.particles.size.value*e,anim:{speed:t.particles.size.anim.speed*e}}}})}else this.canvas.pxratio=1,this.retina=!1}},{key:"canvasInit",value:function(){var e=this.canvas;e.ctx=e.element.getContext("2d")}},{key:"canvasSize",value:function(){var e=this.canvas;e.element.width=e.width,e.element.height=e.height,this.params&&this.params.interactivity.events.resize&&window.addEventListener("resize",this.onWindowResize)}},{key:"canvasPaint",value:function(){var e=this.canvas;if(e&&e.ctx)try{e.ctx.fillRect(0,0,e.width,e.height)}catch(e){console.warn(e)}}},{key:"canvasClear",value:function(){var e=this.canvas;if(e&&e.ctx)try{e.ctx.clearRect(0,0,e.width,e.height)}catch(e){console.warn(e)}}},{key:"onWindowResize",value:function(){var e=this.canvas,t=this.manager,i=this.vendors;e.width=e.element.offsetWidth,e.height=e.element.offsetHeight,this.retina&&(e.width*=e.pxratio,e.height*=e.pxratio),e.element.width=e.width,e.element.height=e.height,!this.params.particles.move.enable||this.params.polygon.enable?(t.particlesEmpty(),this.polygonMask.initialize(this.getParameter(function(e){return e.polygon})).then(function(){t.particlesCreate(),t.particlesDraw()})):i.densityAutoParticles()}}]),e}();t.default=o},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n,r=i(0),o=i(2);!function(e){e.SINGLE="single",e.MULTIPLE="multiple"}(n=t.ImageMode||(t.ImageMode={}));var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.singleImage=null,this.multipleImages=[],this.mode=n.SINGLE}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"getImage",value:function(e){if(void 0!==e){if(0===this.multipleImages.length)throw new Error("No images loaded. You may need to define 'shape.type' = 'images'.");return this.multipleImages[e%this.multipleImages.length]}return this.singleImage}},{key:"parseShape",value:function(e){var t=this;if(o.isEqual(r.ShapeType.IMAGE,e.type))return this.mode=n.SINGLE,this.parseSingleImage(e.image).then(function(i){return t.singleImage=i,Object.assign({},e,{image:i})});if(o.isEqual(r.ShapeType.IMAGES,e.type)){this.mode=n.MULTIPLE;var i=e.images.map(function(e){return t.parseSingleImage(e)});return Promise.all(i).then(function(i){return t.multipleImages=i,Object.assign({},e,{images:i})})}return Promise.resolve(e)}},{key:"parseSingleImage",value:function(e){var t,i=this.buildImageObject({height:e.height,width:e.width,src:e.src}),a=e.width/e.height;return a!==1/0&&0!==a||(a=1),i.ratio=a,(t=/^data:image\/(\w{3})\+xml;(.*?)base64,(.*)$/.exec(e.src))?(i.type=t[1],i.svgData=atob(t[3])):(t=/^.*(\w{3})$/.exec(e.src))&&(i.type=t[1]),this.loadImage(i)}},{key:"loadImage",value:function(e){return""!=(e=Object.assign({},e)).src?"svg"==e.type?e.svgData?Promise.resolve(e):this.downloadImage(e.src).then(function(t){return e.svgData=t.response,e}):new Promise(function(t){var i=new Image;i.addEventListener("load",function(){e.elementData=i,t(e)}),i.src=e.src}):Promise.reject(new Error("Error react-particles-js - no image.src"))}},{key:"downloadImage",value:function(e){return new Promise(function(t,i){var a=new XMLHttpRequest;a.open("GET",e),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?t({response:e.currentTarget.response,xhr:a}):i(new Error("Error react-particles-js - Status code ".concat(a.readyState))))},a.send()})}},{key:"createSvgImage",value:function(e,t){var i=e.replace(/#([0-9A-F]{3,6})|rgb\([0-9,]+\)/gi,function(e,i,a,n){var r;if(t.color.rgb){var o=t.color.rgb,s=o.r,l=o.g,c=o.b;r="rgba( ".concat(s,", ").concat(l,", ").concat(c,", ").concat(t.opacity," )")}else{var h=t.color.hsl,u=h.h,y=h.s,v=h.l;r="rgba( ".concat(u,", ").concat(y,", ").concat(v,", ").concat(t.opacity," )")}return r}),a=new Blob([i],{type:"image/svg+xml;charset=utf-8"}),n=window.URL||window,r=n.createObjectURL(a);return new Promise(function(e){var t=new Image;t.addEventListener("load",function(){n.revokeObjectURL(r),e(t)}),t.src=r})}},{key:"buildImageObject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({svgData:null,height:0,width:0,ratio:0,src:"",type:""},e)}}]),e}();t.ImageManager=s},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(t,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.imageManager=t,this.initialized=!1,this.params=i,this.library=a,"undefined"!=typeof performance&&(this.lastDraw=performance.now()),this.draw=this.draw.bind(this)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"densityAutoParticles",value:function(){var e=this.library,t=e.canvas,i=e.modes,a=this.params.particles,n=a.number.density,r=n.value_area;if(n.enable){var o=t.element.width*t.element.height/1e3;this.library.retina&&(o/=2*t.pxratio);var s=o*a.number.value/r,l=a.array.length-s;l<0?i.pushParticles(Math.abs(l)):i.removeParticles(l)}}},{key:"checkOverlap",value:function(e,t){var i=this,a=this.library,n=a.canvas,o=a.vendors;n.width&&n.height&&this.params.particles.array.forEach(function(a){var s=a,l=e.x-s.x,c=e.y-s.y;if(Math.sqrt(l*l+c*c)<=e.radius+s.radius)if(i.library.params.polygon.enable)switch(i.library.params.polygon.inline.arrangement){case r.PolygonInlineArrangementType.RANDOM_LENGTH:case r.PolygonInlineArrangementType.RANDOM_POINT:}else e.x=t?t.x:Math.random()*n.width,e.y=t?t.y:Math.random()*n.height,o.checkOverlap(e)})}},{key:"destroy",value:function(){cancelAnimationFrame(this.library.drawAnimFrame),this.library.canvas.element.remove()}},{key:"drawShape",value:function(e,t,i,a,n,r){var o=n*r,s=n/r,l=180*(s-2)/s,c=Math.PI-Math.PI*l/180;e.save(),e.beginPath(),e.translate(t,i),e.moveTo(0,0);for(var h=0;h<o;h++)e.lineTo(a,0),e.translate(a,0),e.rotate(c);e.fill(),e.restore()}},{key:"exportImg",value:function(){var e=this.library.canvas;window.open(e.element.toDataURL("image/png"),"_blank")}},{key:"draw",value:function(){var e=!0,t=this.library,i=t.manager,a=t.vendors,n=this.params.particles;void 0!==performance&&(performance.now()-this.lastDraw<1e3/this.params.fps_limit?e=!1:this.lastDraw=performance.now());e&&i.particlesDraw(),n.move.enable?this.library.drawAnimFrame=requestAnimationFrame(a.draw):cancelAnimationFrame(this.library.drawAnimFrame)}},{key:"init",value:function(){var e=this;if(!this.initialized){this.initialized=!0;var t=this.library,i=t.manager,a=t.vendors,r=this.params.particles;t.retinaInit(),t.canvasInit(),t.canvasSize(),t.polygonMask.initialize(this.library.getParameter(function(e){return e.polygon})).then(function(){i.particlesCreate(),a.densityAutoParticles(),e.library.setParameters({particles:{line_linked:{color_rgb_line:n.hexToRgb(r.line_linked.color)}}}),e.draw()})}}},{key:"start",value:function(){var e=this,t=this.params.particles;this.imageManager.parseShape(t.shape).then(function(t){e.init()})}}]),e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),n=i(2),r={particles:{number:{value:40,density:{enable:!1,value_area:1200}},color:{value:"#FFF"},shape:{type:a.ShapeType.CIRCLE,stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100},images:[]},opacity:{value:.5,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:1,random:!1,anim:{enable:!1,speed:40,size_min:0,sync:!1}},line_linked:{enable:!0,distance:150,color:"#FFF",opacity:.6,width:1,shadow:{enable:!1,blur:5,color:"lime"}},move:{enable:!0,speed:3,direction:a.MoveDirection.NONE,random:!1,straight:!1,out_mode:a.MoveOutMode.BOUNCE,bounce:!0,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:a.InteractivityMode.GRAB},onclick:{enable:!1,mode:a.InteractivityMode.REPULSE},resize:!0},modes:{grab:{distance:180,line_linked:{opacity:.35}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:100,duration:5},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fps_limit:999,polygon:{enable:!1,scale:1,type:a.PolygonType.INLINE,inline:{arrangement:a.PolygonInlineArrangementType.ONE_PER_POINT},draw:{enable:!1,stroke:{width:.5,color:"rgba(255, 255, 255, .1)"}},move:{radius:10,type:a.PolygonMoveType.PATH},url:""}};t.getDefaultParams=function(){return n.deepAssign({},r)}},function(e,t,i){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],a=!0,n=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){n=!0,r=e}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function n(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.library=t,this.polygonPathLength=0,this.initialized=!1,this.path2DSupported=!!window.Path2D,this.debounceTime=250,this.parseSvgPathToPolygon=this.parseSvgPathToPolygon.bind(this)}return function(e,t,i){t&&n(e.prototype,t),i&&n(e,i)}(e,[{key:"initialize",value:function(e){var t=this;return this.polygon=e,e.enable?this.initialized?new Promise(function(e){t.debounceTimer&&clearTimeout(t.debounceTimer),t.debounceTimer=setTimeout(function(){t.parseSvgPathToPolygon().then(function(t){e()})},t.debounceTime)}):this.parseSvgPathToPolygon().then(function(e){t.initialized=!0}):Promise.resolve()}},{key:"getVerticesNumber",value:function(){return this.initialized?this.polygonRaw.length:0}},{key:"parseSvgPathToPolygon",value:function(e){var t=this;e=e||this.polygon.url;var i=this.library.canvas.width===this.lastCanvasWidth&&this.library.canvas.height===this.lastCanvasHeight;return this.polygonRaw&&this.polygonRaw.length&&i?Promise.resolve(this.polygonRaw):this.parseSvgPath(e).then(function(e){return t.polygonData=e,t.polygonWidth=parseInt(t.polygonData.svg.getAttribute("width"))*t.polygon.scale,t.polygonHeight=parseInt(t.polygonData.svg.getAttribute("height"))*t.polygon.scale,t.polygonOffsetX=t.library.canvas.width/2-t.polygonWidth/2,t.polygonOffsetY=t.library.canvas.height/2-t.polygonHeight/2,t.polygonData.paths.length&&(t.polygonPathLength=t.polygonData.paths[0].getTotalLength()),t.polygonRaw=[],t.polygonData.paths.forEach(function(e){for(var i=e.pathSegList.numberOfItems,a=0;a<i;a++){var n={x:0,y:0},r=e.pathSegList.getItem(a);switch(r.pathSegType){case SVGPathSeg.PATHSEG_ARC_ABS:case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:case SVGPathSeg.PATHSEG_LINETO_ABS:case SVGPathSeg.PATHSEG_MOVETO_ABS:n.x=r.x,n.y=r.y;case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:n.x=r.x;break;case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:n.y=r.y;break;case SVGPathSeg.PATHSEG_ARC_REL:case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:case SVGPathSeg.PATHSEG_LINETO_REL:case SVGPathSeg.PATHSEG_MOVETO_REL:n.x=r.x,n.y=r.y;case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:n.x=r.x;break;case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:n.y=r.y;break;case SVGPathSeg.PATHSEG_UNKNOWN:case SVGPathSeg.PATHSEG_CLOSEPATH:default:continue}t.polygonRaw.push([n.x*t.polygon.scale+t.polygonOffsetX,n.y*t.polygon.scale+t.polygonOffsetY])}}),t.lastCanvasWidth=t.library.canvas.width,t.lastCanvasHeight=t.library.canvas.height,t.createPath2D(),t.polygonRaw})}},{key:"parseSvgPath",value:function(e){return this.polygonData&&this.polygonData.paths&&this.polygonData.paths.length&&this.polygonData.svg?Promise.resolve(this.polygonData):this.library.imageManager.downloadImage(e).then(function(e){return{paths:[e.xhr.responseXML.getElementsByTagName("path")[0]],svg:e.xhr.responseXML.getElementsByTagName("svg")[0]}})}},{key:"getRandomPointOnPolygonPath",value:function(){if(!this.initialized)throw new Error("No polygon data loaded.");var e=a(this.polygonRaw[Math.floor(Math.random()*this.polygonRaw.length)],2);return{x:e[0],y:e[1]}}},{key:"getRandomPointOnPolygonPathByLength",value:function(){if(!this.initialized)throw new Error("No polygon data loaded.");var e=this.polygonData.paths[0].getPointAtLength(Math.floor(Math.random()*this.polygonPathLength)+1);return{x:e.x*this.polygon.scale+this.polygonOffsetX,y:e.y*this.polygon.scale+this.polygonOffsetY}}},{key:"getRandomPointInsidePolygonPath",value:function(){if(!this.initialized)throw new Error("No polygon data loaded.");var e={x:Math.random()*this.library.canvas.width,y:Math.random()*this.library.canvas.height};return this.isPointInsidePolygon(e)?e:this.getRandomPointInsidePolygonPath()}},{key:"getRandomPointOutsidePolygonPath",value:function(){if(!this.initialized)throw new Error("No polygon data loaded.");var e={x:Math.random()*this.library.canvas.width,y:Math.random()*this.library.canvas.height};return this.isPointInsidePolygon(e)?this.getRandomPointOutsidePolygonPath():e}},{key:"isPointInsidePolygon",value:function(e){if(this.path2DSupported&&this.polygonPath)return this.library.canvas.ctx.isPointInPath(this.polygonPath,e.x,e.y);for(var t=!1,i=0,a=this.polygonRaw.length-1;i<this.polygonRaw.length;a=i++){var n=this.polygonRaw[i][0],r=this.polygonRaw[i][1],o=this.polygonRaw[a][0],s=this.polygonRaw[a][1];r>e.y!=s>e.y&&e.x<(o-n)*(e.y-r)/(s-r)+n&&(t=!t)}return t}},{key:"getPoingOnPolygonPathByIndex",value:function(e){if(!this.initialized)throw new Error("No polygon data loaded.");var t=a(this.polygonRaw[e%this.polygonRaw.length],2);return{x:t[0],y:t[1]}}},{key:"getEquidistantPoingOnPolygonPathByIndex",value:function(e){if(!this.initialized)throw new Error("No polygon data loaded.");var t=this.polygonData.paths[0].getPointAtLength(this.polygonPathLength/this.library.getParameter(function(e){return e.particles.number.value})*e);return{x:t.x*this.polygon.scale+this.polygonOffsetX,y:t.y*this.polygon.scale+this.polygonOffsetY}}},{key:"drawPolygon",value:function(){var e=this.library.canvas.ctx;if(!this.path2DSupported){if(!this.initialized)return;e.beginPath(),e.moveTo(this.polygonRaw[0][0],this.polygonRaw[0][1]),this.polygonRaw.forEach(function(t,i){var n=a(t,2),r=n[0],o=n[1];i>0&&e.lineTo(r,o)}),e.closePath()}e.strokeStyle=this.polygon.draw.stroke.color,e.lineWidth=this.polygon.draw.stroke.width,this.polygonPath?e.stroke(this.polygonPath):e.stroke()}},{key:"createPath2D",value:function(){var e=this;this.path2DSupported&&(this.polygonPath=new Path2D,this.polygonPath.moveTo(this.polygonRaw[0][0],this.polygonRaw[0][1]),this.polygonRaw.forEach(function(t,i){var n=a(t,2),r=n[0],o=n[1];i>0&&e.polygonPath.lineTo(r,o)}),this.polygonPath.closePath())}}]),e}();t.PolygonMask=r}])});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cheerio */ "./node_modules/cheerio/index.js");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/maureenvogel/webprojects/stocks/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var url = 'https://www.gurufocus.com/term/peg/AAPL/PEG-Ratio';
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';


 // https://codepen.io/anon/pen/gQBGdR FIXED HEADER
// https://github.com/jerairrest/react-chartjs-2/issues/81 create custom legend?
// https://github.com/chartjs/Chart.js/issues/3150 show hide bar lines on custom click

var chartData = {
  labels: [],
  datasets: []
};
var chartOptions = {
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.1
    }
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 8,
        maxRotation: 0,
        minRotation: 0
      }
    }],
    yAxes: [{
      ticks: {
        maxTicksLimit: 5,
        beginAtZero: true
      }
    }]
  },
  tooltips: {
    callbacks: {}
  }
};
var chartColors = ['#0d60bb', '#01a8d2', '#1dc7a3', '#0db106'];
var ChartContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ChartContainer",
  componentId: "sc-1cvwks4-0"
})(["height:300px;width:100%;margin-top:50px;padding-bottom:100px;"]);
var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "HeroTitle",
  componentId: "sc-1cvwks4-1"
})(["color:red;position:relative;z-index:1;text-transform:uppercase;font-size:100px;margin-bottom:-10px;font-family:'Anton',sans-serif;text-shadow:-3px 0px 11px rgba(0,0,0,0.7);"]);
var Table = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].table.withConfig({
  displayName: "Table",
  componentId: "sc-1cvwks4-2"
})([""]);
var Tbody = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].tbody.withConfig({
  displayName: "Tbody",
  componentId: "sc-1cvwks4-3"
})(["border-bottom:1px solid gray;"]);
var OuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "OuterContainer",
  componentId: "sc-1cvwks4-4"
})(["background:#f5f5f5;width:100%;height:100%;border-radius:4px;max-width:1200px;display:flex;align-items:center;justify-content:center;margin:20px;"]);
var InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "InnerContainer",
  componentId: "sc-1cvwks4-5"
})(["padding:20px;width:100%;max-width:1000px;"]);
var Tr = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].tr.withConfig({
  displayName: "Tr",
  componentId: "sc-1cvwks4-6"
})(["font-family:'Roboto',sans-serif;text-align:left;position:", ";border-bottom:", ";"], function (props) {
  return props.fixed && 'fixed';
}, function (props) {
  return !props.fixed && '1px solid #d6d6d6';
});
var Th = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].th.withConfig({
  displayName: "Th",
  componentId: "sc-1cvwks4-7"
})(["text-align:", ";padding:10px 20px;font-size:13px;"], function (props) {
  return props.left ? 'left' : 'right';
});
var SelectStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SelectStyles",
  componentId: "sc-1cvwks4-8"
})([".Select-control{width:200px;}"]);
var Bullet = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Bullet",
  componentId: "sc-1cvwks4-9"
})(["width:20px;height:20px;border-radius:10px;margin-right:8px;background-color:", ";"], function (props) {
  return props.color;
});
var LegendName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "LegendName",
  componentId: "sc-1cvwks4-10"
})(["font-size:13px;font-family:'Roboto',sans-serif;"]);
var LegendItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "LegendItemContainer",
  componentId: "sc-1cvwks4-11"
})(["display:flex;align-items:center;margin:0 20px;cursor:pointer;opacity:", ";"], function (props) {
  return props.opacity;
});
var ChartLegend = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ChartLegend",
  componentId: "sc-1cvwks4-12"
})(["display:flex;justify-content:center;"]);
var DateRangeContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DateRangeContainer",
  componentId: "sc-1cvwks4-13"
})(["display:flex;justify-content:center;margin-bottom:20px;"]);
var DateRangeSelector = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DateRangeSelector",
  componentId: "sc-1cvwks4-14"
})([".input{position:relative;z-index:-9999;}.input:checked + label{background:black;}.label{background:gray;color:#fff;padding:5px;font-family:'Roboto',sans-serif;cursor:pointer;font-size:13px;border-radius:4px;width:30px;text-align:center;display:inline-block;}"]);
var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Dropdown",
  componentId: "sc-1cvwks4-15"
})(["position:absolute;background:#fff;width:230px;padding:15px 0;border-radius:4px;.match{transition:all 0.2s ease-in-out;font-size:13px;padding:10px 15px;border-bottom:1px solid #d6d6d6;display:flex;justify-content:space-between;&:last-child{border-bottom:0;}&:hover{background:#d6d6d6;cursor:pointer;}}.symbol{font-weight:500;}.company-name{max-width:150px;text-align:right;line-height:1.3;color:#767676;}"]);
var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DropdownContainer",
  componentId: "sc-1cvwks4-16"
})(["position:relative;.input{font-size:13px;}"]);

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      stocks: {},
      symbolList: [],
      chartRange: '1M',
      redraw: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buildChartData", function (stocks) {
      var chartRange = _this.state.chartRange;
      chartData.datasets = [];
      var labels = [];

      if (chartRange === '1D') {
        stocks[0].chart.map(function (c) {
          return labels.push(c.minute);
        });
      } else {
        stocks[0].chart.map(function (c) {
          return labels.push(c.date);
        });
      }

      chartData.labels = labels;
      stocks.map(function (s, i) {
        var data = [];
        s.chart.map(function (c) {
          return data.push(c.close && c.close.toFixed(2));
        });
        chartData.datasets.push({
          label: s.company.companyName,
          fill: false,
          lineTension: 0.1,
          backgroundColor: chartColors[i],
          borderColor: chartColors[i],
          borderCapStyle: 'butt',
          borderJoinStyle: 'bevel',
          pointBorderColor: chartColors[i],
          pointBackgroundColor: chartColors[i],
          pointBorderWidth: 0.5,
          borderWidth: 2,
          pointHoverRadius: 3,
          pointHoverBackgroundColor: chartColors[i],
          pointHoverBorderColor: chartColors[i],
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          pointHitRadius: 5,
          data: data
        });
      });

      chartOptions.tooltips.callbacks.label = function (tooltipItem) {
        return '$' + tooltipItem.yLabel.toLocaleString(2);
      };

      _this.setState({
        chartData: chartData,
        chartOptions: chartOptions
      }); // if ( chartFilter === 'total' ) {
      // chartOptions.tooltips.callbacks.label = tooltipItem => '$' + tooltipItem.yLabel.toLocaleString()
      // chartOptions.scales.yAxes[0].ticks.callback = value => '$' + value.toLocaleString()
      // chartData.datasets[0].data = Object.values( chartDataArray ).map( i => i.toFixed( 2 ))

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateDebtToEquity", function (stock) {
      if (stock.financials.financials) {
        var shareholderEquity = stock.financials.financials[0].shareholderEquity;
        var totalDebt = stock.financials.financials[0].totalDebt;
        var debtToEquity = (totalDebt / shareholderEquity).toFixed(2);
        return "".concat(debtToEquity, "%");
      } else {
        return 'N/A';
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateAssetTurnover", function (stock) {
      if (stock.financials.financials) {
        var totalAssetsThisQuarter = stock.financials.financials[0].totalAssets;
        var totalAssetsLastQuarter = stock.financials.financials[1].totalAssets;
        var averageTotalAssets = (totalAssetsThisQuarter + totalAssetsLastQuarter) / 2;
        var assetTurnover = stock.financials.financials[0].totalRevenue / averageTotalAssets;
        return "".concat(assetTurnover.toFixed(2), "%");
      } else {
        return 'N/A';
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculatePayoutRatio", function (stock) {
      if (stock.earnings.earnings) {
        var EPS = stock.earnings.earnings && stock.earnings.earnings.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.actualEPS;
        }, 0);
        var dividendRate = stock.stats.dividendRate;
        var payoutRatio = Math.floor(dividendRate / EPS * 100 * 100) / 100;
        return "".concat(payoutRatio, "%");
      } else {
        return 'N/A';
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSymbol", function (index, e, clickedItem) {
      var selected;

      if (clickedItem === "input") {
        selected = e.target.value.toUpperCase();
        setTimeout(function () {
          _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            var res, data;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(selected, "&apikey=KT28GNBJ2ECP4SJ1"));

                  case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                  case 5:
                    data = _context.sent;

                    _this.setState(_defineProperty({}, "matches".concat(index), data['bestMatches']));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }))();
        }, 500);
      } else {
        selected = e;

        _this.setState(_defineProperty({}, "matches".concat(index), null));
      }

      var symbolList = _toConsumableArray(_this.state.symbolList);

      symbolList[index] = selected;

      _this.setState({
        symbolList: symbolList
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearMatches", function (i) {
      _this.setState(_defineProperty({}, "matches".concat(i), null));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function () {
      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var symbolList, removeFromList, filteredList, res, data, stocks, array;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                symbolList = _this.state.symbolList;

                if (!(symbolList.length > 0)) {
                  _context2.next = 14;
                  break;
                }

                removeFromList = [undefined, null];
                filteredList = symbolList.filter(function (i) {
                  return !removeFromList.includes(i);
                });

                _this.setState({
                  symbolList: filteredList
                });

                _context2.next = 7;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.iextrading.com/1.0/stock/market/batch?symbols=".concat(filteredList.join(","), "&types=quote,stats,financials,company,earnings,chart&range=1m"));

              case 7:
                res = _context2.sent;
                _context2.next = 10;
                return res.json();

              case 10:
                data = _context2.sent;
                stocks = [];
                array = Object.keys(data).map(function (d) {
                  return stocks.push(data[d]);
                });

                if (stocks.length > 0) {
                  _this.setState({
                    stocks: stocks,
                    line0: true,
                    line1: true,
                    line2: true,
                    line3: true
                  });

                  _this.buildChartData(stocks);
                }

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setChartRange", function (range) {
      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var symbolList, removeFromList, filteredList, res, data, dataArray, _arr, _i, _arr$_i, key, value, stocks;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                symbolList = _this.state.symbolList;

                if (!(symbolList.length > 0)) {
                  _context3.next = 17;
                  break;
                }

                removeFromList = [undefined, null];
                filteredList = symbolList.filter(function (i) {
                  return !removeFromList.includes(i);
                });

                _this.setState({
                  symbolList: filteredList,
                  chartRange: range
                });

                _context3.next = 7;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.iextrading.com/1.0/stock/market/batch?symbols=".concat(filteredList.join(","), "&types=chart&range=").concat(range));

              case 7:
                res = _context3.sent;
                _context3.next = 10;
                return res.json();

              case 10:
                data = _context3.sent;
                dataArray = [];
                _arr = Object.entries(data);

                for (_i = 0; _i < _arr.length; _i++) {
                  _arr$_i = _slicedToArray(_arr[_i], 2), key = _arr$_i[0], value = _arr$_i[1];
                  dataArray.push(_defineProperty({}, key, value));
                }

                stocks = _toConsumableArray(_this.state.stocks);
                stocks.map(function (s, i) {
                  var chartData = dataArray.find(function (d) {
                    return Object.keys(d)[0] === s.company.symbol;
                  });
                  s.chart = chartData[s.company.symbol].chart;
                });

                _this.setState({
                  stocks: stocks
                }, function () {
                  return _this.buildChartData(stocks);
                });

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderInputFields", function () {
      var symbolList = _this.state.symbolList;
      return Array.from(new Array(4), function (val, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
          left: true,
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 404
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownContainer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 405
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          className: "input",
          type: "text",
          placeholder: "Enter stock symbol",
          value: symbolList[i] || '',
          onChange: function onChange(e) {
            return _this.setSymbol(i, e, 'input');
          },
          onBlur: function onBlur() {
            return _this.clearMatches(i);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 406
          },
          __self: this
        }), _this.state["matches".concat(i)] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dropdown, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 408
          },
          __self: this
        }, _this.state["matches".concat(i)].map(function (m) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "match",
            onClick: function onClick(e) {
              return _this.setSymbol(i, m['1. symbol'], 'dropdown');
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 410
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            className: "symbol",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 411
            },
            __self: this
          }, m['1. symbol']), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            className: "company-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 412
            },
            __self: this
          }, m['2. name']));
        }))));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleLine", function (i) {
      _this.refs.chart.chartInstance.getDatasetMeta(i).hidden = _this.state["line".concat(i)];

      _this.setState(function (prevState) {
        var _ref4;

        return _ref4 = {}, _defineProperty(_ref4, "line".concat(i), !prevState["line".concat(i)]), _defineProperty(_ref4, "redraw", false), _ref4;
      });

      _this.refs.chart.chartInstance.update();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderLegend", function () {
      var stocks = _this.state.stocks;
      return stocks.length && stocks.map(function (s, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LegendItemContainer, {
          onClick: function onClick() {
            return _this.toggleLine(i);
          },
          opacity: _this.state["line".concat(i)] ? 1 : 0.3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bullet, {
          color: chartColors[i],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LegendName, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434
          },
          __self: this
        }, s.company.companyName));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getValue", function (value) {
      if (typeof value === "string") {
        return value;
      } else if (value === 0) {
        return 0;
      } else if (typeof value === "number") {
        //return Math.floor( value * 100 ) / 100
        return value.toFixed(2);
      } else if (value === null || value === undefined) {
        return 'N/A';
      } else {
        return value;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCalculatedValues", function (functionName) {
      var stocks = _this.state.stocks;

      if (stocks.length) {
        switch (functionName) {
          case 'calculatePayoutRatio':
            return stocks.map(function (s) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
                key: s.company.companyName,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 464
                },
                __self: this
              }, _this.calculatePayoutRatio(s));
            });
            break;

          case 'calculateDebtToEquity':
            return stocks.map(function (s) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
                key: s.company.companyName,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 469
                },
                __self: this
              }, _this.calculateDebtToEquity(s));
            });
            break;

          case 'calculateAssetTurnover':
            return stocks.map(function (s) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
                key: s.company.companyName,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 474
                },
                __self: this
              }, _this.calculateAssetTurnover(s));
            });
            break;

          default:
            return;
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
          colSpan: "4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 482
          },
          __self: this
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCalculatedRow", function (title, functionName) {
      var stocks = _this.state.stocks;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tr, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, title), _this.getCalculatedValues(functionName), stocks.length < 4 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        colSpan: 4 - stocks.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChartOptions", function () {
      var options = ['1D', '1M', '1Y', '5Y'];
      return options.map(function (o) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateRangeSelector, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 501
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          className: "input",
          name: "chart",
          onClick: function onClick() {
            return _this.setChartRange(o);
          },
          id: o,
          type: "radio",
          key: o,
          value: o,
          checked: o === _this.state.chartRange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 502
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "label",
          htmlFor: o,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 503
          },
          __self: this
        }, o));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderTableRow", function (title, category, subcategory, isDollar, isPercent) {
      var stocks = _this.state.stocks;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tr, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }, title), stocks.length ? stocks.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
          key: s.company.companyName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 516
          },
          __self: this
        }, isDollar && s[category][subcategory] !== null && '$', _this.getValue(s[category][subcategory]), isPercent && s[category][subcategory] !== null && '%');
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        colSpan: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }), stocks.length < 4 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        colSpan: 4 - stocks.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }));
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // ( async () => {
      //   const res = await fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,msft&types=quote,stats,financials,company,earnings,chart&range=3m')
      //   const data = await res.json()
      //   const stocks = []
      //   const array = Object.keys( data ).map( d => stocks.push( data[d] ))
      //   this.setState({ stocks })
      //   this.buildChartData( stocks )
      // })()
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(proxyUrl + url).then(function (res) {
        return res.text();
      }).then(function (body) {
        // comp_name
        var test = cheerio__WEBPACK_IMPORTED_MODULE_4___default.a.load(body); //console.log(test('.comp_name font').text(), 'the test')
        // test('.comp_name font').each(( index, element ) => {
        //   console.log(element, 'the index')
        // })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          stocks = _this$state.stocks,
          chartData = _this$state.chartData,
          chartOptions = _this$state.chartOptions,
          redraw = _this$state.redraw;
      var tableHeaders = ['Name', 'PEG', //
      'Price To Earning (P/E)', 'Price to Sales (P/S)', 'Price to Book (P/B)', 'Dividend Yield', 'Dividend Payout', 'Return On Assets', 'Return On Equity', 'Profit Margin', 'Current Ratio', //
      'Quick Ratio', //
      'Debt to Equity', 'Interest Coverage', //
      'Asset Turnover', //
      'Inventory Turnover'];
      // still need: PEG, current ratio, quick ratio, intereset coverage, asset turnover, inventory turnover
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OuterContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_8___default.a, {
        params: {
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_meta__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tr, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Th, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }, " Stock Symbol "), this.renderInputFields(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.submit();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, " Go ")), this.renderTableRow('Name', 'company', 'companyName', false, false), this.renderTableRow('Sector', 'company', 'sector', false, false), this.renderTableRow('Industry', 'company', 'industry', false, false), this.renderTableRow('Latest Price', 'quote', 'latestPrice', true, false), this.renderTableRow('Price to Earning (P/E)', 'quote', 'peRatio', false, true), this.renderTableRow('Price to Sales (P/S)', 'stats', 'priceToSales', false, true), this.renderTableRow('Price to Book (P/B)', 'stats', 'priceToBook', false, true), this.renderTableRow('Dividend Yield', 'stats', 'dividendYield', false, true), this.renderTableRow('Dividend Rate', 'stats', 'dividendRate', true, false), this.renderCalculatedRow('Dividend Payout Ratio', 'calculatePayoutRatio'), this.renderTableRow('Return On Assets', 'stats', 'returnOnAssets', false, true), this.renderTableRow('Return On Equity', 'stats', 'returnOnEquity', false, true), this.renderTableRow('Profit Margin', 'stats', 'profitMargin', false, true), this.renderCalculatedRow('Debt to Equity', 'calculateDebtToEquity'), this.renderCalculatedRow('Asset Turnover (Current Quarter)', 'calculateAssetTurnover'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChartContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateRangeContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        },
        __self: this
      }, this.renderChartOptions()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChartLegend, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      }, this.renderLegend()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        ref: "chart",
        data: chartData,
        options: chartOptions,
        redraw: redraw,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.f25f0b1827ce9119cb38.hot-update.js.map