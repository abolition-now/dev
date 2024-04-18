(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9538],{5688:function(e,t,r){"use strict";var n=r(930);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return _noSSR},default:function(){return dynamic}});var o=r(8754),a=(r(7294),o._(r(5253)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function _noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){var r=a.default,n={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=_objectSpread(_objectSpread({},n),e));var o=(n=_objectSpread(_objectSpread({},n),t)).loader;return(n.loadableGenerated&&(n=_objectSpread(_objectSpread({},n),n.loadableGenerated),delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r(_objectSpread(_objectSpread({},n),{},{loader:function(){return null!=o?o().then(convertModule):Promise.resolve(convertModule(function(){return null}))}})):(delete n.webpack,delete n.modules,_noSSR(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7944:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});var n=r(8754)._(r(7294)).default.createContext(null)},5253:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/var n=r(930),o=r(3227),a=r(8361);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});var u=r(8754)._(r(7294)),i=r(7944),l=[],c=[],s=!1;function load(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(function(e){return r.loading=!1,r.loaded=e,e}).catch(function(e){throw r.loading=!1,r.error=e,e}),r}var f=function(){function LoadableSubscription(e,t){o(this,LoadableSubscription),this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(LoadableSubscription,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"==typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},r.delay)),"number"==typeof r.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},r.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=_objectSpread(_objectSpread({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),LoadableSubscription}();function Loadable(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function init(){if(!n){var t=new f(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!s){var o=r.webpack?r.webpack():r.modules;o&&c.push(function(e){var t,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}(e))){r&&(e=r);var n=0,F=function(){};return{s:F,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:F}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}(o);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(e.includes(n))return init()}}catch(e){r.e(e)}finally{r.f()}})}function LoadableComponent(e,t){init(),(o=u.default.useContext(i.LoadableContext))&&Array.isArray(r.modules)&&r.modules.forEach(function(e){o(e)});var o,a=u.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return u.default.useImperativeHandle(t,function(){return{retry:n.retry}},[]),u.default.useMemo(function(){var t;return a.loading||a.error?u.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?u.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return LoadableComponent.preload=function(){return init()},LoadableComponent.displayName="LoadableComponent",u.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then(function(){if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=function(){return new Promise(function(e,t){flushInitializers(l).then(e,t)})},Loadable.preloadReady=function(e){return void 0===e&&(e=[]),new Promise(function(t){var res=function(){return s=!0,t()};flushInitializers(c,e).then(res,res)})},window.__NEXT_PRELOADREADY=Loadable.preloadReady;var d=Loadable},7459:function(e,t,r){"use strict";r.d(t,{N:function(){return getFeatures},z:function(){return getBounds}});var n=r(7812),getBounds=function(e){var t,r=e.map(function(e){var t=e.features.filter(function(e){return"Point"===e.geometry.type}).map(function(e){return[e.geometry.coordinates[1],e.geometry.coordinates[0]]});return(0,n.Z)(t)});return(t=[]).concat.apply(t,(0,n.Z)(r))},getFeatures=function(e){return e.map(function(e){return{id:e.id,thumbnail:e.thumbnail,label:e.label,slug:"works/".concat(e.slug),features:e.navPlace.features.filter(function(e){return"Point"===e.geometry.type})}})}},1316:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return c},default:function(){return MapPage}}),r(9369);var n=r(7843);r(7294);var o=r(5152),a=r.n(o),u=r(7459),i=r(5893),l=a()(function(){return Promise.all([r.e(9269),r.e(9690),r.e(6992)]).then(r.bind(r,6078))},{ssr:!1,loadableGenerated:{webpack:function(){return[6078]}}}),c=!0;function MapPage(e){var t=e.manifests.filter(function(e){return e.navPlace}),r=(0,u.N)(t);return(0,i.jsx)(n.Z,{children:(0,i.jsx)("div",{children:(0,i.jsx)(l,{manifests:r})})})}},5078:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return r(1316)}])},9369:function(){},5152:function(e,t,r){e.exports=r(5688)},7812:function(e,t,r){"use strict";r.d(t,{Z:function(){return _toConsumableArray}});var n=r(2587),o=r(2937);function _toConsumableArray(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[9412,7409,1971,9041,9774,2888,179],function(){return e(e.s=5078)}),_N_E=e.O()}]);