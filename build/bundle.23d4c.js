!function(t){function e(l){if(n[l])return n[l].exports;var r=n[l]={i:l,l:!1,exports:{}};return t[l].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,l){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:l})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(l,r,function(e){return t[e]}.bind(null,r));return l},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="mdyV")}({QfWi:function(t,e,n){"use strict";function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){for(var n=0;n<e.length;n++){var l=e[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return s(this,n)}}function s(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function f(){return Object(d.b)("div",{class:"pageHeader",style:{"padding-top":"0.667em"}},Object(d.b)("i",{class:"fas fa-calculator",style:{"padding-left":"0.25em"}}),Object(d.b)("span",{class:"header"},"Tip Calculator"),Object(d.b)("i",{class:"fas fa-percentage",style:{"padding-right":"0.25em"}}))}n.r(e);var d=n("hosL"),h=function(t){function e(){return n.apply(this,arguments)}a(e,t);var n=c(e);return o(e,[{key:"render",value:function(t){return Object(d.b)("div",null,Object(d.b)("div",{class:"foo"},Object(d.b)("div",{class:"fas fa-angle-double-left pointer leftBumper",style:{"padding-left":"4.0em"},onClick:t.handleTipPercentageBump,inc:"-5"}),Object(d.b)("div",{class:"fas fa-angle-left pointer leftBumper",onClick:t.handleTipPercentageBump,inc:"-1"}),t.children,Object(d.b)("div",{class:"fas fa-angle-right pointer rightBumper",onClick:t.handleTipPercentageBump,inc:"1"}),Object(d.b)("div",{class:"fas fa-angle-double-right pointer rightBumper",onClick:t.handleTipPercentageBump,inc:"5"})),Object(d.b)("div",{style:{clear:"left"}}))}}]),e}(d.a),b=function(t){function e(){for(var t,e=arguments.length,l=new Array(e),i=0;i<e;i++)l[i]=arguments[i];return r(_(t=n.call.apply(n,[this].concat(l))),"state",{total:0,tipPercentage:20,splits:[{locked:!1}]}),r(_(t),"getTotalWithTip",(function(){return(Math.round(100*(t.state.total+t.state.total*(t.state.tipPercentage/100)))/100).toFixed(2)})),r(_(t),"getSplitValue",(function(){return(Math.round(100*((t.state.total+t.state.total*(t.state.tipPercentage/100))/t.state.splits.length))/100).toFixed(2)})),r(_(t),"bumpIt",(function(t,e){var n=Math.floor(t),l=Math.floor(n/Math.abs(e)),r=n%e;return e<0?-1===e?l+e:(0===r&&(r=-1*e),n-r):1===e?l+e:(l+1)*e})),r(_(t),"handleTipPercentageBump",(function(e){var n=parseInt(e.target.attributes.inc.value);t.setState({total:t.state.total,tipPercentage:t.bumpIt(t.state.tipPercentage,n),splits:t.state.splits})})),r(_(t),"handleTotalWithBillBump",(function(e){var n=t.getTotalWithTip(),l=parseInt(e.target.attributes.inc.value),r=t.bumpIt(n,l);t.setState({total:t.state.total,tipPercentage:(Math.round(100*((r-t.state.total)/t.state.total*100))/100).toFixed(2),splits:t.state.splits})})),r(_(t),"handleAddClick",(function(){t.state.splits.push({locked:!1}),t.setState({total:t.state.total,tipPercentage:t.state.tipPercentage,splits:t.state.splits})})),r(_(t),"handleTotalChange",(function(e){t.setState({total:e.target.value/1,tipPercentage:t.state.tipPercentage,splits:t.state.splits})})),r(_(t),"handleDeleteClick",(function(e){t.state.splits.splice(e.target.id,1),t.setState({total:t.state.total,tipPercentage:t.state.tipPercentage,splits:t.state.splits})})),r(_(t),"handleTotalSplitsClick",(function(e){for(var n=parseInt(e.target.attributes.totalSplits.value),l=[],r=0;r<n;r++)l.push({locked:!1});t.setState({total:t.state.total,tipPercentage:t.state.tipPercentage,splits:l})})),t}a(e,t);var n=c(e);return o(e,[{key:"render",value:function(t,e){var n=this,l=e.splits;return Object(d.b)("div",{id:"app"},Object(d.b)(f,null),Object(d.b)("div",{class:"billTotal"},Object(d.b)("label",{style:{"padding-right":"0.33em"}},"Bill Total"),Object(d.b)("input",{type:"text",id:"txtTotal",style:{"text-align":"center"},onChange:this.handleTotalChange})),Object(d.b)("div",{style:{clear:"left"}},Object(d.b)("div",{class:"tipPercentageText"},Object(d.b)("label",null,"Tip Percentage")),Object(d.b)(h,{handleTipPercentageBump:this.handleTipPercentageBump},this.state.tipPercentage)),Object(d.b)("div",{class:"tipPercentageText"},Object(d.b)("label",null,"Total With Tip"),Object(d.b)(h,{handleTipPercentageBump:this.handleTotalWithBillBump},this.getTotalWithTip())),Object(d.b)("hr",null),Object(d.b)("div",{class:"splitPick"},Object(d.b)("div",{totalSplits:"1",onClick:this.handleTotalSplitsClick,class:l.length>0?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(d.b)("div",{totalSplits:"2",onClick:this.handleTotalSplitsClick,class:l.length>1?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(d.b)("div",{totalSplits:"3",onClick:this.handleTotalSplitsClick,class:l.length>2?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(d.b)("div",{totalSplits:"4",onClick:this.handleTotalSplitsClick,class:l.length>3?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(d.b)("div",{totalSplits:"5",onClick:this.handleTotalSplitsClick,class:l.length>4?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(d.b)("div",{totalSplits:"6",onClick:this.handleTotalSplitsClick,class:l.length>5?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"})),this.state.splits.map((function(t,e){return Object(d.b)("div",{class:"splitLine"},n.getSplitValue(),Object(d.b)("div",{id:e,class:"pointer ",style:{color:"#990000"},onClick:n.handleDeleteClick.bind(n)},Object(d.b)("i",{class:"fas fa-trash-alt"})))})),Object(d.b)("div",{class:"fas fa-plus-square fa-2x pointer",style:{color:"#009900"},onClick:this.handleAddClick}))}}]),e}(d.a);e.default=b},hosL:function(t,e,n){"use strict";function l(t,e){for(var n in e)t[n]=e[n];return t}function r(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var l,r,i,a={};for(i in e)"key"==i?l=e[i]:"ref"==i?r=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?x.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===a[i]&&(a[i]=t.defaultProps[i]);return o(t,a,l,r,null)}function o(t,e,n,l,r){var i={type:t,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++B:r};return null==r&&null!=w.vnode&&w.vnode(i),i}function a(t){return t.children}function u(t,e){this.props=t,this.context=e}function c(t,e){if(null==e)return t.__?c(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?c(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function _(t){(!t.__d&&(t.__d=!0)&&M.push(t)&&!p.__r++||W!==w.debounceRendering)&&((W=w.debounceRendering)||D)(p)}function p(){for(var t;p.__r=M.length;)t=M.sort((function(t,e){return t.__v.__b-e.__v.__b})),M=[],t.some((function(t){var e,n,r,i,o,a;t.__d&&(o=(i=(e=t).__v).__e,(a=e.__P)&&(n=[],(r=l({},i)).__v=i.__v+1,m(a,i,r,e.__n,void 0!==a.ownerSVGElement,null!=i.__h?[o]:null,n,null==o?c(i):o,i.__h),k(n,i),i.__e!=o&&s(i)))}))}function f(t,e,n,l,r,i,u,s,_,p){var f,b,y,v,g,k,P,S=l&&l.__k||A,T=S.length;for(n.__k=[],f=0;f<e.length;f++)if(null!=(v=n.__k[f]=null==(v=e[f])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?o(null,v,null,null,v):Array.isArray(v)?o(a,{children:v},null,null,null):v.__b>0?o(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(y=S[f])||y&&v.key==y.key&&v.type===y.type)S[f]=void 0;else for(b=0;b<T;b++){if((y=S[b])&&v.key==y.key&&v.type===y.type){S[b]=void 0;break}y=null}m(t,v,y=y||E,r,i,u,s,_,p),g=v.__e,(b=v.ref)&&y.ref!=b&&(P||(P=[]),y.ref&&P.push(y.ref,null,v),P.push(b,v.__c||g,v)),null!=g?(null==k&&(k=g),"function"==typeof v.type&&v.__k===y.__k?v.__d=_=d(v,_,t):_=h(t,v,y,S,g,_),"function"==typeof n.type&&(n.__d=_)):_&&y.__e==_&&_.parentNode!=t&&(_=c(y))}for(n.__e=k,f=T;f--;)null!=S[f]&&("function"==typeof n.type&&null!=S[f].__e&&S[f].__e==n.__d&&(n.__d=c(l,f+1)),j(S[f],S[f]));if(P)for(f=0;f<P.length;f++)O(P[f],P[++f],P[++f])}function d(t,e,n){for(var l,r=t.__k,i=0;r&&i<r.length;i++)(l=r[i])&&(l.__=t,e="function"==typeof l.type?d(l,e,n):h(n,l,l,r,l.__e,e));return e}function h(t,e,n,l,r,i){var o,a,u;if(void 0!==e.__d)o=e.__d,e.__d=void 0;else if(null==n||r!=i||null==r.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(r),o=null;else{for(a=i,u=0;(a=a.nextSibling)&&u<l.length;u+=2)if(a==r)break t;t.insertBefore(r,i),o=i}return void 0!==o?o:r.nextSibling}function b(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||L.test(e)?n:n+"px"}function y(t,e,n,l,r){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof l&&(t.style.cssText=l=""),l)for(e in l)n&&e in n||b(t.style,e,"");if(n)for(e in n)l&&n[e]===l[e]||b(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?l||t.addEventListener(e,i?g:v,i):t.removeEventListener(e,i?g:v,i);else if("dangerouslySetInnerHTML"!==e){if(r)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function v(t){this.l[t.type+!1](w.event?w.event(t):t)}function g(t){this.l[t.type+!0](w.event?w.event(t):t)}function m(t,e,n,r,i,o,c,s,_){var p,d,h,b,y,v,g,m,k,O,j,T=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(_=n.__h,s=e.__e=n.__e,e.__h=null,o=[s]),(p=w.__b)&&p(e);try{t:if("function"==typeof T){if(m=e.props,k=(p=T.contextType)&&r[p.__c],O=p?k?k.props.value:p.__:r,n.__c?g=(d=e.__c=n.__c).__=d.__E:("prototype"in T&&T.prototype.render?e.__c=d=new T(m,O):(e.__c=d=new u(m,O),d.constructor=T,d.render=S),k&&k.sub(d),d.props=m,d.state||(d.state={}),d.context=O,d.__n=r,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=T.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=l({},d.__s)),l(d.__s,T.getDerivedStateFromProps(m,d.__s))),b=d.props,y=d.state,h)null==T.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==T.getDerivedStateFromProps&&m!==b&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(m,O),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(m,d.__s,O)||e.__v===n.__v){d.props=m,d.state=d.__s,e.__v!==n.__v&&(d.__d=!1),d.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),d.__h.length&&c.push(d);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(m,d.__s,O),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(b,y,v)}))}d.context=O,d.props=m,d.state=d.__s,(p=w.__r)&&p(e),d.__d=!1,d.__v=e,d.__P=t,p=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(r=l(l({},r),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(b,y)),j=null!=p&&p.type===a&&null==p.key?p.props.children:p,f(t,Array.isArray(j)?j:[j],e,n,r,i,o,c,s,_),d.base=e.__e,e.__h=null,d.__h.length&&c.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==o&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=P(n.__e,e,n,r,i,o,c,_);(p=w.diffed)&&p(e)}catch(t){e.__v=null,(_||null!=o)&&(e.__e=s,e.__h=!!_,o[o.indexOf(s)]=null),w.__e(t,e,n)}}function k(t,e){w.__c&&w.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){w.__e(t,e.__v)}}))}function P(t,e,n,l,i,o,a,u){var s,_,p,d=n.props,h=e.props,b=e.type,v=0;if("svg"===b&&(i=!0),null!=o)for(;v<o.length;v++)if((s=o[v])&&"setAttribute"in s==!!b&&(b?s.localName===b:3===s.nodeType)){t=s,o[v]=null;break}if(null==t){if(null===b)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,h.is&&h),o=null,u=!1}if(null===b)d===h||u&&t.data===h||(t.data=h);else{if(o=o&&x.call(t.childNodes),_=(d=n.props||E).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!u){if(null!=o)for(d={},v=0;v<t.attributes.length;v++)d[t.attributes[v].name]=t.attributes[v].value;(p||_)&&(p&&(_&&p.__html==_.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(t,e,n,l,r){var i;for(i in n)"children"===i||"key"===i||i in e||y(t,i,null,n[i],l);for(i in e)r&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||y(t,i,e[i],n[i],l)}(t,h,d,i,u),p)e.__k=[];else if(v=e.props.children,f(t,Array.isArray(v)?v:[v],e,n,l,i&&"foreignObject"!==b,o,a,o?o[0]:n.__k&&c(n,0),u),null!=o)for(v=o.length;v--;)null!=o[v]&&r(o[v]);u||("value"in h&&void 0!==(v=h.value)&&(v!==d.value||v!==t.value||"progress"===b&&!v)&&y(t,"value",v,d.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==t.checked&&y(t,"checked",v,d.checked,!1))}return t}function O(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){w.__e(t,n)}}function j(t,e,n){var l,i;if(w.unmount&&w.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||O(l,null,e)),null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){w.__e(t,e)}l.base=l.__P=null}if(l=t.__k)for(i=0;i<l.length;i++)l[i]&&j(l[i],e,"function"!=typeof t.type);n||null==t.__e||r(t.__e),t.__e=t.__d=void 0}function S(t,e,n){return this.constructor(t,n)}function T(t,e,n){var l,r,o;w.__&&w.__(t,e),r=(l="function"==typeof n)?null:n&&n.__k||e.__k,o=[],m(e,t=(!l&&n||e).__k=i(a,null,[t]),r||E,E,void 0!==e.ownerSVGElement,!l&&n?[n]:r?null:e.firstChild?x.call(e.childNodes):null,o,!l&&n?n:r?r.__e:e.firstChild,l),k(o,t)}function C(t,e){T(t,e,C)}n.d(e,"d",(function(){return T})),n.d(e,"c",(function(){return C})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}));var x,w,B,M,D,W,E={},A=[],L=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;x=A.slice,w={__e:function(t,e){for(var n,l,r;e=e.__;)if((n=e.__c)&&!n.__)try{if((l=n.constructor)&&null!=l.getDerivedStateFromError&&(n.setState(l.getDerivedStateFromError(t)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),r=n.__d),r)return n.__E=n}catch(e){t=e}throw t}},B=0,u.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=l({},this.state),"function"==typeof t&&(t=t(l({},n),this.props)),t&&l(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),_(this))},u.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},u.prototype.render=a,M=[],D="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0},mdyV:function(t,e,n){"use strict";n.r(e);var l=n("hosL"),r=l.b,i=l.d,o=l.c,a=function(t){return t&&t.default?t.default:t},u=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(u(n.p)+"sw.js"),"function"==typeof a(n("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=a(n("QfWi")),e={},l=document.querySelector('[type="__PREACT_CLI_DATA__"]');l&&(e=JSON.parse(decodeURI(l.innerHTML)).preRenderData||e);var s={preRenderData:e},_=e.url?u(e.url):"";(o&&_===u(location.pathname)?o:i)(r(t,{CLI_DATA:s}),document.body,c)}()}}});
//# sourceMappingURL=bundle.23d4c.js.map