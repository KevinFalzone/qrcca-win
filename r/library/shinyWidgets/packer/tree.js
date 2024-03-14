(()=>{var e={6167:e=>{window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var r,o=(r=n(1))&&r.__esModule?r:{default:r};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){var t={};return e.reduce((function(e,n){return t[n]||(t[n]=!0,e.push(n)),e}),[])}function a(e,t){requestAnimationFrame((function(){t.enter(),requestAnimationFrame((function(){t.active(),setTimeout((function(){t.leave()}),e)}))}))}function d(e,t){var n=this;this.treeNodes=[],this.nodesById={},this.leafNodesById={},this.liElementsById={},this.willUpdateNodesById={},this.container=e,this.options=Object.assign({selectMode:"checkbox",values:[],disables:[],beforeLoad:null,loaded:null,url:null,method:"GET",closeDepth:null},t),Object.defineProperties(this,{values:{get:function(){return this.getValues()},set:function(e){return this.setValues(i(e))}},disables:{get:function(){return this.getDisables()},set:function(e){return this.setDisables(i(e))}},selectedNodes:{get:function(){var e=[],t=this.nodesById;for(var n in t)if(t.hasOwnProperty(n)&&(1===t[n].status||2===t[n].status)){var r=Object.assign({},t[n]);delete r.parent,delete r.children,e.push(r)}return e}},disabledNodes:{get:function(){var e=[],t=this.nodesById;for(var n in t)if(t.hasOwnProperty(n)&&t[n].disabled){var r=Object.assign({},t[n]);delete r.parent,e.push(r)}return e}}}),this.options.url?this.load((function(e){n.init(e)})):this.init(this.options.data)}n(2),d.prototype.init=function(e){var t=d.parseTreeData(e),n=t.treeNodes,r=t.nodesById,o=t.leafNodesById,s=t.defaultValues,i=t.defaultDisables;this.treeNodes=n,this.nodesById=r,this.leafNodesById=o,this.render(this.treeNodes);var a=this.options,l=a.values,c=a.disables,u=a.loaded;l&&l.length&&(s=l),s.length&&this.setValues(s),c&&c.length&&(i=c),i.length&&this.setDisables(i),u&&u.call(this)},d.prototype.load=function(e){var t=this.options,n=t.url,r=t.method,s=t.beforeLoad;(0,o.default)({url:n,method:r,success:function(t){var n=t;s&&(n=s(t)),e(n)}})},d.prototype.render=function(e){var t=d.createRootEle();t.appendChild(this.buildTree(e,0)),this.bindEvent(t);var n=document.querySelector(this.container);!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(n),n.appendChild(t)},d.prototype.buildTree=function(e,t){var n=this,r=d.createUlEle();return e&&e.length&&e.forEach((function(e){var o=d.createLiEle(e,t===n.options.closeDepth-1);n.liElementsById[e.id]=o;var s=null;e.children&&e.children.length&&(s=n.buildTree(e.children,t+1)),s&&o.appendChild(s),r.appendChild(o)})),r},d.prototype.bindEvent=function(e){var t=this;e.addEventListener("click",(function(e){var n=e.target;"SPAN"===n.nodeName&&(n.classList.contains("treejs-checkbox")||n.classList.contains("treejs-label"))?t.onItemClick(n.parentNode.nodeId):"LI"===n.nodeName&&n.classList.contains("treejs-node")?t.onItemClick(n.nodeId):"SPAN"===n.nodeName&&n.classList.contains("treejs-switcher")&&t.onSwitcherClick(n)}),!1)},d.prototype.onItemClick=function(e){var t=this.nodesById[e],n=this.options.onChange;t.disabled||(this.setValue(e),this.updateLiElements()),n&&n.call(this)},d.prototype.setValue=function(e){var t=this.nodesById[e];if(t){var n=t.status,r=1===n||2===n?0:2;t.status=r,this.markWillUpdateNode(t),this.walkUp(t,"status"),this.walkDown(t,"status")}},d.prototype.getValues=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&(1!==this.leafNodesById[t].status&&2!==this.leafNodesById[t].status||e.push(t));return e},d.prototype.setValues=function(e){var t=this;this.emptyNodesCheckStatus(),e.forEach((function(e){t.setValue(e)})),this.updateLiElements();var n=this.options.onChange;n&&n.call(this)},d.prototype.setDisable=function(e){var t=this.nodesById[e];t&&(t.disabled||(t.disabled=!0,this.markWillUpdateNode(t),this.walkUp(t,"disabled"),this.walkDown(t,"disabled")))},d.prototype.getDisables=function(){var e=[];for(var t in this.leafNodesById)this.leafNodesById.hasOwnProperty(t)&&this.leafNodesById[t].disabled&&e.push(t);return e},d.prototype.setDisables=function(e){var t=this;this.emptyNodesDisable(),e.forEach((function(e){t.setDisable(e)})),this.updateLiElements()},d.prototype.emptyNodesCheckStatus=function(){this.willUpdateNodesById=this.getSelectedNodesById(),Object.values(this.willUpdateNodesById).forEach((function(e){e.disabled||(e.status=0)}))},d.prototype.emptyNodesDisable=function(){this.willUpdateNodesById=this.getDisabledNodesById(),Object.values(this.willUpdateNodesById).forEach((function(e){e.disabled=!1}))},d.prototype.getSelectedNodesById=function(){return Object.entries(this.nodesById).reduce((function(e,t){var n=s(t,2),r=n[0],o=n[1];return 1!==o.status&&2!==o.status||(e[r]=o),e}),{})},d.prototype.getDisabledNodesById=function(){return Object.entries(this.nodesById).reduce((function(e,t){var n=s(t,2),r=n[0],o=n[1];return o.disabled&&(e[r]=o),e}),{})},d.prototype.updateLiElements=function(){var e=this;Object.values(this.willUpdateNodesById).forEach((function(t){e.updateLiElement(t)})),this.willUpdateNodesById={}},d.prototype.markWillUpdateNode=function(e){this.willUpdateNodesById[e.id]=e},d.prototype.onSwitcherClick=function(e){var t=e.parentNode,n=t.lastChild,r=n.scrollHeight;t.classList.contains("treejs-node__close")?a(150,{enter:function(){n.style.height=0,n.style.opacity=0},active:function(){n.style.height="".concat(r,"px"),n.style.opacity=1},leave:function(){n.style.height="",n.style.opacity="",t.classList.remove("treejs-node__close")}}):a(150,{enter:function(){n.style.height="".concat(r,"px"),n.style.opacity=1},active:function(){n.style.height=0,n.style.opacity=0},leave:function(){n.style.height="",n.style.opacity="",t.classList.add("treejs-node__close")}})},d.prototype.walkUp=function(e,t){var n=e.parent;if(n){if("status"===t){var r,o=n.children.reduce((function(e,t){return isNaN(t.status)?e:e+t.status}),0);if(r=o?o===2*n.children.length?2:1:0,n.status===r)return;n.status=r}else{var s=n.children.reduce((function(e,t){return e&&t.disabled}),!0);if(n.disabled===s)return;n.disabled=s}this.markWillUpdateNode(n),this.walkUp(n,t)}},d.prototype.walkDown=function(e,t){var n=this;e.children&&e.children.length&&e.children.forEach((function(r){"status"===t&&r.disabled||(r[t]=e[t],n.markWillUpdateNode(r),n.walkDown(r,t))}))},d.prototype.updateLiElement=function(e){var t=this.liElementsById[e.id].classList;switch(e.status){case 0:t.remove("treejs-node__halfchecked","treejs-node__checked");break;case 1:t.remove("treejs-node__checked"),t.add("treejs-node__halfchecked");break;case 2:t.remove("treejs-node__halfchecked"),t.add("treejs-node__checked")}switch(e.disabled){case!0:t.contains("treejs-node__disabled")||t.add("treejs-node__disabled");break;case!1:t.contains("treejs-node__disabled")&&t.remove("treejs-node__disabled")}},d.parseTreeData=function(e){var t,n=(t=e,JSON.parse(JSON.stringify(t))),r={},o={},s=[],i=[];return function e(t,n){t.forEach((function(t){r[t.id]=t,t.checked&&s.push(t.id),t.disabled&&i.push(t.id),n&&(t.parent=n),t.children&&t.children.length?e(t.children,t):o[t.id]=t}))}(n),{treeNodes:n,nodesById:r,leafNodesById:o,defaultValues:s,defaultDisables:i}},d.createRootEle=function(){var e=document.createElement("div");return e.classList.add("treejs"),e},d.createUlEle=function(){var e=document.createElement("ul");return e.classList.add("treejs-nodes"),e},d.createLiEle=function(e,t){var n=document.createElement("li");if(n.classList.add("treejs-node"),t&&n.classList.add("treejs-node__close"),e.children&&e.children.length){var r=document.createElement("span");r.classList.add("treejs-switcher"),n.appendChild(r)}else n.classList.add("treejs-placeholder");var o=document.createElement("span");o.classList.add("treejs-checkbox"),n.appendChild(o);var s=document.createElement("span");s.classList.add("treejs-label");var i=document.createTextNode(e.text);return s.appendChild(i),n.appendChild(s),n.nodeId=e.id,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={method:"GET",url:"",async:!0,success:null,failed:null,"Content-Type":"application/json; charset=utf-8"},n=Object.assign(t,e),r=new XMLHttpRequest,o=Object.entries(n.data).reduce((function(e,t){var n,r=(2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=[],r=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),2!==n.length);r=!0);}catch(e){o=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw s}}return n}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),o=r[0],s=r[1];return e.push("".concat(o,"=").concat(s)),e}),[]).join("&");if("POST"===n.method.toUpperCase())r.open(n.method,n.url,n.async),r.setRequestHeader("Content-Type",n["Content-Type"]),r.send(o);else if("GET"===n.method.toUpperCase()){var s=n.url;o&&(s.indexOf("?"),s+="&".concat(o)),r.open(n.method,s,n.async),r.setRequestHeader("Content-Type",n["Content-Type"]),r.send(null)}r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var e=r.responseText;n["Content-Type"]===t["Content-Type"]&&(e=JSON.parse(e)),n.success&&n.success(e)}else n.failed&&n.failed(r.status)}}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);n(5)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".treejs {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 14px;\n}\n.treejs *:after,\n.treejs *:before {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.treejs > .treejs-node {\n  padding-left: 0;\n}\n.treejs .treejs-nodes {\n  list-style: none;\n  padding-left: 20px;\n  overflow: hidden;\n  -webkit-transition: height 150ms ease-out, opacity 150ms ease-out;\n  -o-transition: height 150ms ease-out, opacity 150ms ease-out;\n  transition: height 150ms ease-out, opacity 150ms ease-out;\n}\n.treejs .treejs-node {\n  cursor: pointer;\n  overflow: hidden;\n}\n.treejs .treejs-node.treejs-placeholder {\n  padding-left: 20px;\n}\n.treejs .treejs-switcher {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: relative;\n  -webkit-transition: -webkit-transform 150ms ease-out;\n  transition: -webkit-transform 150ms ease-out;\n  -o-transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;\n}\n.treejs .treejs-switcher:before {\n  position: absolute;\n  top: 8px;\n  left: 6px;\n  display: block;\n  content: ' ';\n  border: 4px solid transparent;\n  border-top: 4px solid rgba(0, 0, 0, 0.4);\n  -webkit-transition: border-color 150ms;\n  -o-transition: border-color 150ms;\n  transition: border-color 150ms;\n}\n.treejs .treejs-switcher:hover:before {\n  border-top: 4px solid rgba(0, 0, 0, 0.65);\n}\n.treejs .treejs-node__close > .treejs-switcher {\n  -webkit-transform: rotate(-90deg);\n      -ms-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.treejs .treejs-node__close > .treejs-nodes {\n  height: 0;\n}\n.treejs .treejs-checkbox {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: relative;\n}\n.treejs .treejs-checkbox:before {\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  position: absolute;\n  top: 2px;\n  content: ' ';\n  display: block;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n}\n.treejs .treejs-checkbox:hover:before {\n  -webkit-box-shadow: 0 0 2px 1px #1890ff;\n          box-shadow: 0 0 2px 1px #1890ff;\n}\n.treejs .treejs-node__checked > .treejs-checkbox:before {\n  background-color: #1890ff;\n  border-color: #1890ff;\n}\n.treejs .treejs-node__checked > .treejs-checkbox:after {\n  position: absolute;\n  content: ' ';\n  display: block;\n  top: 4px;\n  left: 5px;\n  width: 5px;\n  height: 9px;\n  border: 2px solid #fff;\n  border-top: none;\n  border-left: none;\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.treejs .treejs-node__halfchecked > .treejs-checkbox:before {\n  background-color: #1890ff;\n  border-color: #1890ff;\n}\n.treejs .treejs-node__halfchecked > .treejs-checkbox:after {\n  position: absolute;\n  content: ' ';\n  display: block;\n  top: 9px;\n  left: 3px;\n  width: 10px;\n  height: 2px;\n  background-color: #fff;\n}\n.treejs .treejs-node__disabled {\n  cursor: not-allowed;\n  color: rgba(0, 0, 0, 0.25);\n}\n.treejs .treejs-node__disabled .treejs-checkbox {\n  cursor: not-allowed;\n}\n.treejs .treejs-node__disabled .treejs-checkbox:before {\n  cursor: not-allowed;\n  border-color: #d9d9d9 !important;\n  background-color: #f5f5f5 !important;\n}\n.treejs .treejs-node__disabled .treejs-checkbox:hover:before {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.treejs .treejs-node__disabled .treejs-node__checked > .treejs-checkbox:after {\n  border-color: #d9d9d9;\n}\n.treejs .treejs-node__disabled .treejs-node__halfchecked > .treejs-checkbox:after {\n  background-color: #d9d9d9;\n}\n.treejs .treejs-node__disabled.treejs-node__checked > .treejs-checkbox:after {\n  border-color: #d9d9d9;\n}\n.treejs .treejs-node__disabled.treejs-node__halfchecked > .treejs-checkbox:after {\n  background-color: #d9d9d9;\n}\n.treejs .treejs-label {\n  vertical-align: middle;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var s=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[r].concat(i).concat([s]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r,o,s={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),d=null,l=0,c=[],u=n(6);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=s[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(m(r.parts[i],t))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(m(r.parts[i],t));s[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var s=e[o],i=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function y(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),h(e,t),t}function v(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function m(e,t){var n,r,o,s;if(t.transform&&e.css){if(!(s=t.transform(e.css)))return function(){};e.css=s}if(t.singleton){var i=l++;n=d||(d=y(t)),r=w.bind(null,n,i,!1),o=w.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||s)&&(r=u(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(a=s[i.id]).refs--,r.push(a)}for(e&&f(p(e,t),t),o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete s[a.id]}}}};var j,g=(j=[],function(e,t){return j[e]=t,j.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,s=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(o=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}]).default},3933:(e,t,n)=>{e.exports=n(6167)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=jQuery;var t=n.n(e);Shiny;var r=n(3933),o=n.n(r);function s(e,t){try{const n=e.liElementsById[t.parent.id];n.classList.contains("treejs-node__close")||n.getElementsByClassName("treejs-switcher")[0].click()}catch(e){return}t.hasOwnProperty("parent")&&s(e,t.parent)}function i(e,t,n){var r=n;const o=e.liElementsById[t.id];if(o.classList.contains("treejs-node__close")){var s=o.getElementsByClassName("treejs-switcher")[0];s&&s.click()}if(r>0&&t.hasOwnProperty("children")){r-=1;for(let n of t.children)i(e,n,r)}}var a=new Shiny.InputBinding;t().extend(a,{store:[],updateStore:(e,t)=>{a.store[e.id]=t},find:e=>t()(e).find(".tree-widget"),getType:e=>"all"==t()(e).attr("data-return")?"sw.tree.all":"sw.tree",getValue:e=>{var n=a.store[e.id].selectedNodes;return n.length<1?null:("text"==t()(e).attr("data-return")?n=n.map((e=>{if(2==e.status)return e.text[0]})):"id"==t()(e).attr("data-return")&&(n=n.map((e=>{if(2==e.status)return e.id[0]}))),n)},setValue:(e,t)=>{var n=a.store[e.id],r=n.nodesById,o=Object.entries(r).map((e=>t.includes(e[1].id[0])||t.includes(e[1].text[0])?e[1].id[0]:null));o=o.filter((e=>null!==e)),n.values=o},subscribe:(e,n)=>{t()(e).on("change.treeWidgetBinding",(function(e){n()}))},unsubscribe:e=>{t()(e).off(".treeWidgetBinding")},receiveMessage:(e,n)=>{if(n.hasOwnProperty("label")){var r=t()("#"+e.id+"-label");!function(e,t){if(void 0!==e){if(1!==t.length)throw new Error("labelNode must be of length 1");Array.isArray(e)&&0===e.length?t.addClass("shiny-label-null"):(t.html(e),t.removeClass("shiny-label-null"))}}(n.label,r)}n.hasOwnProperty("values")&&a.setValue(e,n.values)},initialize:e=>{var n=e.querySelector('script[data-for="'+e.id+'"]'),r=JSON.parse(n.text),d=null!==typeof r.closeDepth?r.closeDepth-1:0;r.closeDepth=1,r.onChange=function(){t()(e).trigger("change")},r.loaded=function(){t()(e).find(".treejs-nodes").first().css("padding-left",0)};const l=new(o())("#"+e.id,r);a.updateStore(e,l),r.hasOwnProperty("values")&&a.setValue(e,r.values),function(e){const t=e.leafNodesById;for(let n in t)s(e,t[n])}(l),setTimeout((function(){if(d>=0)for(let e of l.treeNodes)i(l,e,d)}),250)}}),Shiny.inputBindings.register(a,"shinyWidgets.treeWidgetBinding")})()})();