(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{2218:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__(2219),_interopRequireDefault=__webpack_require__(2220);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(232)),_createClass2=_interopRequireDefault(__webpack_require__(233)),_inherits2=_interopRequireDefault(__webpack_require__(234)),_createSuper2=_interopRequireDefault(__webpack_require__(2222)),_react=_interopRequireWildcard(__webpack_require__(1)),_freezeframe=_interopRequireDefault(__webpack_require__(2221)),_default=function(_Component){(0,_inherits2.default)(ReactFreezeframe,_Component);var _super=(0,_createSuper2.default)(ReactFreezeframe);function ReactFreezeframe(props){var _this;return(0,_classCallCheck2.default)(this,ReactFreezeframe),(_this=_super.call(this,props)).$freezeframe=void 0,_this.props=void 0,_this.freeze=(0,_react.createRef)(),_this.state={isPlaying:!1},_this.props=props,_this}return(0,_createClass2.default)(ReactFreezeframe,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(null===this.freeze.current)throw new ReferenceError("You must provide a valid ref");this.$freezeframe=new _freezeframe.default(this.freeze.current,this.props.options),this.$freezeframe.on("toggle",(function(items,isPlaying){isPlaying?_this2.props.onStart&&_this2.props.onStart(items,isPlaying):_this2.props.onStop&&_this2.props.onStop(items,isPlaying),_this2.props.onToggle&&_this2.props.onToggle(items,isPlaying)}))}},{key:"componenWillUnmount",value:function componenWillUnmount(){this.$freezeframe&&this.$freezeframe.destroy()}},{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,alt=_this$props.alt,src=_this$props.src;return _react.default.createElement("div",{className:"react-freezeframe"},children?_react.default.createElement("div",{ref:this.freeze},children):_react.default.createElement("img",{ref:this.freeze,alt:alt,src:src}))}},{key:"start",value:function start(){var _this$$freezeframe;null===(_this$$freezeframe=this.$freezeframe)||void 0===_this$$freezeframe||_this$$freezeframe.start(),this.setState({isPlaying:!0})}},{key:"stop",value:function stop(){var _this$$freezeframe2;null===(_this$$freezeframe2=this.$freezeframe)||void 0===_this$$freezeframe2||_this$$freezeframe2.stop(),this.setState({isPlaying:!1})}},{key:"toggle",value:function toggle(){this.state.isPlaying?this.stop():this.start()}}]),ReactFreezeframe}(_react.Component);exports.default=_default},2219:function(module,exports,__webpack_require__){var _typeof=__webpack_require__(1103).default;function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}module.exports=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj},module.exports.default=module.exports,module.exports.__esModule=!0},2220:function(module,exports){module.exports=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}},module.exports.default=module.exports,module.exports.__esModule=!0},2221:function(module,exports,__webpack_require__){window,module.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="examples",n(n.s=4)}([function(t,e,n){var i,r;!function(o,s){"use strict";i=[n(2)],void 0===(r=function(t){return function(t,e){var n=t.jQuery,i=t.console;function r(t,e){for(var n in e)t[n]=e[n];return t}var o=Array.prototype.slice;function s(t,e,a){if(!(this instanceof s))return new s(t,e,a);var c,l=t;"string"==typeof t&&(l=document.querySelectorAll(t)),l?(this.elements=(c=l,Array.isArray(c)?c:"object"==typeof c&&"number"==typeof c.length?o.call(c):[c]),this.options=r({},this.options),"function"==typeof e?a=e:r(this.options,e),a&&this.on("always",a),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):i.error("Bad element for imagesLoaded "+(l||t))}s.prototype=Object.create(e.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&a[e]){for(var n=t.querySelectorAll("img"),i=0;i<n.length;i++){var r=n[i];this.addImage(r)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(i=0;i<o.length;i++){var s=o[i];this.addElementBackgroundImages(s)}}}};var a={1:!0,9:!0,11:!0};function c(t){this.img=t}function l(t,e){this.url=t,this.element=e,this.img=new Image}return s.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var n=/url\((['"])?(.*?)\1\)/gi,i=n.exec(e.backgroundImage);null!==i;){var r=i&&i[2];r&&this.addBackground(r,t),i=n.exec(e.backgroundImage)}},s.prototype.addImage=function(t){var e=new c(t);this.images.push(e)},s.prototype.addBackground=function(t,e){var n=new l(t,e);this.images.push(n)},s.prototype.check=function(){var t=this;function e(e,n,i){setTimeout((function(){t.progress(e,n,i)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(t){t.once("progress",e),t.check()})):this.complete()},s.prototype.progress=function(t,e,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+n,t,e)},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},c.prototype=Object.create(e.prototype),c.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},c.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},c.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},c.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},c.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype=Object.create(c.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},s.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((n=e).fn.imagesLoaded=function(t,e){return new s(this,t,e).jqDeferred.promise(n(this))})},s.makeJQueryPlugin(),s}(o,t)}.apply(e,i))||(t.exports=r)}("undefined"!=typeof window?window:this)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.ff-container{display:inline-block;position:relative}.ff-container .ff-image{z-index:0;vertical-align:top;opacity:0}.ff-container .ff-canvas{display:inline-block;position:absolute;top:0;left:0;pointer-events:none;z-index:1;vertical-align:top;opacity:0}.ff-container .ff-canvas.ff-canvas-ready{-webkit-transition:opacity 300ms;-o-transition:opacity 300ms;-moz-transition:opacity 300ms;transition:opacity 300ms;opacity:1}.ff-container.ff-active .ff-image{opacity:1}.ff-container.ff-active .ff-canvas.ff-canvas-ready{-webkit-transition:none;-o-transition:none;-moz-transition:none;transition:none;opacity:0}.ff-container.ff-active .ff-overlay{display:none}.ff-container.ff-inactive .ff-canvas.ff-canvas-ready{-webkit-transition:opacity 300ms;-o-transition:opacity 300ms;-moz-transition:opacity 300ms;transition:opacity 300ms;opacity:1}.ff-container.ff-inactive .ff-image{-webkit-transition:opacity 300ms;-o-transition:opacity 300ms;-moz-transition:opacity 300ms;transition:opacity 300ms;-webkit-transition-delay:170ms;-moz-transition-delay:170ms;-o-transition-delay:170ms;transition-delay:170ms;opacity:0}.ff-container.ff-responsive{width:100%}.ff-container.ff-responsive .ff-image,.ff-container.ff-responsive .ff-canvas{width:100%}.ff-container.ff-loading-icon:before{content:"";position:absolute;background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc1MHB4JyBoZWlnaHQ9JzUwcHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXNwaW4iPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiPjxnIHRyYW5zZm9ybT0icm90YXRlKDApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwcyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMHMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4xMnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMTJzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuMjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTM1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4zN3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMzdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxODApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyMjUpIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjYycyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC42MnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuNzVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjc1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzE1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC44N3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuODdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48L2c+PC9zdmc+");background-position:center center;background-repeat:no-repeat;height:46px;width:46px;z-index:3;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.ff-container .ff-overlay{background-image:url("data:image/png;base64,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");background-repeat:no-repeat;max-width:94px;max-height:94px;position:absolute;left:0%;right:0%;top:0%;bottom:0%;margin:auto;-webkit-background-size:contain;-moz-background-size:contain;background-size:contain;background-position:center;pointer-events:none;z-index:100}',""])},function(t,e,n){var i,r;"undefined"!=typeof window&&window,void 0===(r="function"==typeof(i=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},i=n[t]=n[t]||[];return-1==i.indexOf(e)&&i.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{};return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var i=n.indexOf(e);return-1!=i&&n.splice(i,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){n=n.slice(0),e=e||[];for(var i=this._onceEvents&&this._onceEvents[t],r=0;r<n.length;r++){var o=n[r];i&&i[o]&&(this.off(t,o),delete i[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?i.call(e,n,e,t):i)||(t.exports=r)},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var s,n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){"use strict";n.r(e);var i,r=n(0),o=n.n(r);!function(t){t.START="start",t.STOP="stop",t.TOGGLE="toggle"}(i||(i={}));const s=t=>`✨Freezeframe: ${t}✨`,a=(t,...e)=>{console.error(s(t),...e)},c=t=>"string"==typeof t?document.querySelectorAll(t):t,l=(t,e,n)=>{const i=t instanceof Element?[t]:t;return Array.from(i).reduce(((t,e)=>{if(e instanceof HTMLImageElement)t.push(e),"gif"!==(t=>t.split(".").pop().toLowerCase().substring(0,3))(e.src)&&n.warnings&&((t,...e)=>{console.warn(s(t),...e)})("Image does not appear to be a gif",e);else{const n=e.querySelectorAll("img");n.length?t=t.concat(Array.from(n)):a("Invalid element",e)}return t}),[])},u=t=>[...new Set(t)],m=t=>{const e=window.document.createElement("div");e.innerHTML=t;const n=e.childNodes;return n.length>1?n:n[0]};var h,f,d=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),p=(h=["",""],f=["",""],Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(f)}})));function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var I=function(){function t(){for(var e=this,n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return g(this,t),this.tag=function(t){for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return"function"==typeof t?e.interimTag.bind(e,t):"string"==typeof t?e.transformEndResult(t):(t=t.map(e.transformString.bind(e)),e.transformEndResult(t.reduce(e.processSubstitutions.bind(e,i))))},i.length>0&&Array.isArray(i[0])&&(i=i[0]),this.transformers=i.map((function(t){return"function"==typeof t?t():t})),this.tag}return d(t,[{key:"interimTag",value:function(t,e){for(var n=arguments.length,i=Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return this.tag(p,t.apply(void 0,[e].concat(i)))}},{key:"processSubstitutions",value:function(t,e,n){var i=this.transformSubstitution(t.shift(),e);return"".concat(e,i,n)}},{key:"transformString",value:function(t){return this.transformers.reduce((function(t,e){return e.onString?e.onString(t):t}),t)}},{key:"transformSubstitution",value:function(t,e){return this.transformers.reduce((function(t,n){return n.onSubstitution?n.onSubstitution(t,e):t}),t)}},{key:"transformEndResult",value:function(t){return this.transformers.reduce((function(t,e){return e.onEndResult?e.onEndResult(t):t}),t)}}]),t}(),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(e){if(""===t)return e.trim();if("start"===(t=t.toLowerCase())||"left"===t)return e.replace(/^\s*/,"");if("end"===t||"right"===t)return e.replace(/\s*$/,"");throw new Error("Side not supported: "+t)}}};function y(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(e){if("initial"===t){var n=e.match(/^[^\S\n]*(?=\S)/gm),i=n&&Math.min.apply(Math,y(n.map((function(t){return t.length}))));if(i){var r=new RegExp("^.{"+i+"}","gm");return e.replace(r,"")}return e}if("all"===t)return e.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+t)}}},Z=function(t,e){return{onEndResult:function(n){if(null==t||null==e)throw new Error("replaceResultTransformer requires at least 2 arguments.");return n.replace(t,e)}}},j=function(t,e){return{onSubstitution:function(n,i){if(null==t||null==e)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==n?n:n.toString().replace(t,e)}}},S={separator:"",conjunction:"",serial:!1},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return{onSubstitution:function(e,n){if(Array.isArray(e)){var i=e.length,r=t.separator,o=t.conjunction,s=t.serial,a=n.match(/(\n?[^\S\n]+)$/);if(e=a?e.join(r+a[1]):e.join(r+" "),o&&i>1){var c=e.lastIndexOf(r);e=e.slice(0,c)+(s?r:"")+" "+o+e.slice(c+1)}}return e}}},G=function(t){return{onSubstitution:function(e,n){if(null==t||"string"!=typeof t)throw new Error("You need to specify a string character to split by.");return"string"==typeof e&&e.includes(t)&&(e=e.split(t)),e}}},W=function(t){return null!=t&&!Number.isNaN(t)&&"boolean"!=typeof t},P=function(){return{onSubstitution:function(t){return Array.isArray(t)?t.filter(W):W(t)?t:""}}},E=(new I(w({separator:","}),b,v),new I(w({separator:",",conjunction:"and"}),b,v),new I(w({separator:",",conjunction:"or"}),b,v),new I(G("\n"),P,w,b,v));new I(G("\n"),w,b,v,j(/&/g,"&amp;"),j(/</g,"&lt;"),j(/>/g,"&gt;"),j(/"/g,"&quot;"),j(/'/g,"&#x27;"),j(/`/g,"&#x60;")),new I(Z(/(?:\n(?:\s*))+/g," "),v),new I(Z(/(?:\n\s*)/g,""),v),new I(w({separator:","}),Z(/(?:\s+)/g," "),v),new I(w({separator:",",conjunction:"or"}),Z(/(?:\s+)/g," "),v),new I(w({separator:",",conjunction:"and"}),Z(/(?:\s+)/g," "),v),new I(w,b,v),new I(w,Z(/(?:\s+)/g," "),v),new I(b,v),new I(b("all"),v);const R=".freezeframe",Y="ff-container",A="ff-loading-icon",x="ff-image",B="ff-canvas",J="ff-ready",F="ff-inactive",L="ff-active",k="ff-canvas-ready",z="ff-responsive",M="ff-overlay",H={selector:R,responsive:!0,trigger:"hover",overlay:!1,warnings:!0};var V,N,C,T=n(1),X=n.n(T),U=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function s(t){try{c(i.next(t))}catch(t){o(t)}}function a(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((i=i.apply(t,e||[])).next())}))},O=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},D=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};V=new WeakMap,N=new WeakMap,C=new WeakMap,e.default=class{constructor(t=R,e){this.items=[],this.$images=[],V.set(this,void 0),N.set(this,void 0),this._eventListeners=Object.assign({},Object.values(i).reduce(((t,e)=>(t[e]=[],t)),{})),C.set(this,[]),"string"==typeof t||t instanceof Element||t instanceof HTMLCollection||t instanceof NodeList?(this.options=Object.assign(Object.assign({},H),e),O(this,V,t)):"object"!=typeof t||e?a("Invalid Freezeframe.js configuration:",...[t,e].filter((t=>void 0!==t))):(this.options=Object.assign(Object.assign({},H),t),O(this,V,this.options.selector)),this._init(D(this,V))}get _stylesInjected(){return!!document.querySelector("style#ff-styles")}_init(t){this._injectStylesheet(),O(this,N,"ontouchstart"in window||"onmsgesturechange"in window),this._capture(t),this._load(this.$images)}_capture(t){this.$images=((...t)=>(...e)=>t.reduceRight(((t,n)=>(...i)=>t(n(...i,...e))))())(c,l,u)(t,this.options)}_load(t){o()(t).on("progress",((t,{img:e})=>{this._setup(e)}))}_setup(t){return U(this,void 0,void 0,(function*(){const e=this._wrap(t);this.items.push(e),yield this._process(e),this._attach(e)}))}_wrap(t){const e=m(E`
    <div class="${Y} ${A}">
    </div>
  `),n=m(E`
    <canvas class="${B}" width="0" height="0">
    </canvas>
  `);var i,r;return this.options.responsive&&e.classList.add(z),this.options.overlay&&e.appendChild(m(E`
    <div class="${M}">
    </div>
  `)),t.classList.add(x),e.appendChild(n),r=e,(i=t).parentNode.insertBefore(r,i),r.appendChild(i),{$container:e,$canvas:n,$image:t}}_process(t){return new Promise((e=>{const{$canvas:n,$image:i,$container:r}=t,{clientWidth:o,clientHeight:s}=i;n.setAttribute("width",o.toString()),n.setAttribute("height",s.toString()),n.getContext("2d").drawImage(i,0,0,o,s),n.classList.add(k),n.addEventListener("transitionend",(()=>{this._ready(r),e(t)}),{once:!0})}))}_ready(t){t.classList.add(J),t.classList.add(F),t.classList.remove(A)}_attach(t){const{$image:e}=t;if(!D(this,N)&&"hover"===this.options.trigger){const n=()=>{this._toggleOn(t),this._emit(i.START,t,!0),this._emit(i.TOGGLE,t,!0)},r=()=>{this._toggleOff(t),this._emit(i.START,t,!1),this._emit(i.TOGGLE,t,!1)};this._addEventListener(e,"mouseleave",r),this._addEventListener(e,"mouseenter",n)}if(D(this,N)||"click"===this.options.trigger){const n=()=>{this._toggle(t)};this._addEventListener(e,"click",n)}}_addEventListener(t,e,n){D(this,C).push({$image:t,event:e,listener:n}),t.addEventListener(e,n)}_removeEventListener(t,e,n){t.removeEventListener(e,n)}_injectStylesheet(){this._stylesInjected||document.head.appendChild(m(E(`\n    <style id="ff-styles">\n      ${X.a.toString()}\n    </style>\n  `)))}_emit(t,e,n){this._eventListeners[t].forEach((t=>{t(Array.isArray(e)&&1===e.length?e[0]:e,n)}))}_toggleOn(t){const{$container:e,$image:n}=t;e.classList.contains(J)&&(n.setAttribute("src",n.src),e.classList.remove(F),e.classList.add(L))}_toggleOff(t){const{$container:e}=t;e.classList.contains(J)&&(e.classList.add(F),e.classList.remove(L))}_toggle(t){const{$container:e}=t,n=e.classList.contains(L);return n?this._toggleOff(t):this._toggleOn(t),!n}start(){return this.items.forEach((t=>{this._toggleOn(t)})),this._emit(i.START,this.items,!0),this._emit(i.TOGGLE,this.items,!0),this}stop(){return this.items.forEach((t=>{this._toggleOff(t)})),this._emit(i.STOP,this.items,!1),this._emit(i.TOGGLE,this.items,!1),this}toggle(){return this.items.forEach((t=>{const e=this._toggle(t);e?this._emit(i.START,this.items,!1):this._emit(i.STOP,this.items,!1),this._emit(i.TOGGLE,this.items,e)})),this}on(t,e){return this._eventListeners[t].push(e),this}destroy(){D(this,C).forEach((({$image:t,event:e,listener:n})=>{this._removeEventListener(t,e,n)}))}}}]).default},2222:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return _createSuper}));var getPrototypeOf=__webpack_require__(952),isNativeReflectConstruct=__webpack_require__(953),helpers_typeof=__webpack_require__(1103),typeof_default=__webpack_require__.n(helpers_typeof),assertThisInitialized=__webpack_require__(951);function _possibleConstructorReturn(self,call){return!call||"object"!==typeof_default()(call)&&"function"!=typeof call?Object(assertThisInitialized.a)(self):call}function _createSuper(Derived){var hasNativeReflectConstruct=Object(isNativeReflectConstruct.a)();return function _createSuperInternal(){var result,Super=Object(getPrototypeOf.a)(Derived);if(hasNativeReflectConstruct){var NewTarget=Object(getPrototypeOf.a)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}}}]);