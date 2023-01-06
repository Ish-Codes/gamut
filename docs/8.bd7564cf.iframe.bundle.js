(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{2089:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Container",(function(){return Container})),__webpack_require__.d(__webpack_exports__,"PlayingImage",(function(){return PlayingImage})),__webpack_require__.d(__webpack_exports__,"BaseImage",(function(){return BaseImage_BaseImage}));var emotion_styled_base_browser_esm=__webpack_require__(7),HiddenText=__webpack_require__(215),FillButton=__webpack_require__(71),PlayIcon=__webpack_require__(2099),react=__webpack_require__(2),dist_props=__webpack_require__(19),jsx_runtime=__webpack_require__(1);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var PauseIcon=react.forwardRef((function(_ref,svgRef){var _ref$title=_ref.title,title=void 0===_ref$title?"Pause Icon":_ref$title,titleId=_ref.titleId,_ref$size=_ref.size,size=void 0===_ref$size?16:_ref$size,_ref$height=_ref.height,height=void 0===_ref$height?size:_ref$height,_ref$width=_ref.width,width=void 0===_ref$width?size:_ref$width,props=_objectWithoutProperties(_ref,["title","titleId","size","height","width"]);return Object(jsx_runtime.jsxs)(dist_props.a,_objectSpread(_objectSpread({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",role:"img","aria-hidden":"true",width:width,height:height,ref:svgRef,"aria-labelledby":titleId},props),{},{children:[void 0===title?Object(jsx_runtime.jsx)("title",{id:titleId,children:"controls-pause"}):title?Object(jsx_runtime.jsx)("title",{id:titleId,children:title}):null,Object(jsx_runtime.jsx)("rect",{x:5.25,y:3.75,width:4.5,height:16.5,rx:1.5,ry:1.5,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}),Object(jsx_runtime.jsx)("rect",{x:14.25,y:3.75,width:4.5,height:16.5,rx:1.5,ry:1.5,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5})]}))}));PauseIcon.__docgenInfo={description:"",methods:[],displayName:"PauseIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../gamut-icons/dist/icons/regular/PauseIcon.js"]={name:"PauseIcon",docgenInfo:PauseIcon.__docgenInfo,path:"../gamut-icons/dist/icons/regular/PauseIcon.js"});var ReactFreezeframe=__webpack_require__(2174),ReactFreezeframe_default=__webpack_require__.n(ReactFreezeframe),PausableImage=__webpack_require__(214);function BaseImage_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function BaseImage_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?BaseImage_ownKeys(Object(source),!0).forEach((function(key){BaseImage_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):BaseImage_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function BaseImage_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function BaseImage_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function BaseImage_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Container=Object(emotion_styled_base_browser_esm.a)("div",{target:"e1bj4l191",label:"Container"})({name:"1v365f0",styles:"align-items:center;justify-content:center;height:100%;display:flex;position:relative;width:100%;>img,>.react-freezeframe,>.react-freezeframe img{max-width:100%;}.ff-container .ff-canvas{transition:none;}.ff-loading-icon::before{display:none;}"}),PlayingImage=PausableImage.b,StyledFreezeframe=Object(emotion_styled_base_browser_esm.a)(ReactFreezeframe_default.a,{target:"e1bj4l190",label:"StyledFreezeframe"})(PausableImage.b,""),BaseImage_BaseImage=function BaseImage(_ref){var alt=_ref.alt,rest=BaseImage_objectWithoutProperties(_ref,["alt"]),_useState2=_slicedToArray(Object(react.useState)(!1),2),paused=_useState2[0],setPaused=_useState2[1],_ref3=_slicedToArray(paused?["".concat(alt,", paused"),"Play animated image",PlayIcon.a,StyledFreezeframe]:["".concat(alt,", playing"),"Pause animated image",PauseIcon,PlayingImage],4),liveText=_ref3[0],buttonLabel=_ref3[1],Icon=_ref3[2],Image=_ref3[3];return Object(jsx_runtime.jsxs)(Container,{children:[Object(jsx_runtime.jsx)(Image,BaseImage_objectSpread({alt:alt},rest)),Object(jsx_runtime.jsx)(HiddenText.a,{"aria-live":"polite",children:alt?liveText:buttonLabel}),Object(jsx_runtime.jsx)(FillButton.a,{bottom:0,m:8,onClick:function onClick(){return setPaused(!paused)},position:"absolute",right:0,variant:"secondary",zIndex:1,"aria-label":buttonLabel,children:Object(jsx_runtime.jsx)(Icon,{color:"currentColor"})})]})};__webpack_exports__.default=BaseImage_BaseImage;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../gamut-labs/src/PausableImage/BaseImage/index.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"../gamut-labs/src/PausableImage/BaseImage/index.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{PlayingImage.displayName="PlayingImage",PlayingImage.__docgenInfo={description:"",displayName:"PlayingImage",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../gamut-labs/src/PausableImage/BaseImage/index.tsx#PlayingImage"]={docgenInfo:PlayingImage.__docgenInfo,name:"PlayingImage",path:"../gamut-labs/src/PausableImage/BaseImage/index.tsx#PlayingImage"})}catch(__react_docgen_typescript_loader_error){}try{BaseImage_BaseImage.displayName="BaseImage",BaseImage_BaseImage.__docgenInfo={description:"",displayName:"BaseImage",props:{alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../gamut-labs/src/PausableImage/BaseImage/index.tsx#BaseImage"]={docgenInfo:BaseImage_BaseImage.__docgenInfo,name:"BaseImage",path:"../gamut-labs/src/PausableImage/BaseImage/index.tsx#BaseImage"})}catch(__react_docgen_typescript_loader_error){}}}]);