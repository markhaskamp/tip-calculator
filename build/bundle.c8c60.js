!function(t){function e(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return t[l].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,l){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:l})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(l,o,function(e){return t[e]}.bind(null,o));return l},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="mdyV")}({QfWi:function(t,e,n){"use strict";function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){for(var n=0;n<e.length;n++){var l=e[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return u(this,n)}}function u(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function f(){return Object(d.b)("div",{class:"row pageHeader",style:{"padding-top":"0.667em"}},Object(d.b)("div",{class:"one column"},Object(d.b)("i",{class:"fas fa-calculator",style:{"padding-left":"0.25em"}})),Object(d.b)("div",{class:"ten columns"},Object(d.b)("h4",null,"Tip Calculator")),Object(d.b)("div",{class:"one column"},Object(d.b)("i",{class:"fas fa-percentage",style:{"padding-right":"0.25em"}})))}n.r(e);var d=n("hosL"),b=function(t){function e(){return n.apply(this,arguments)}c(e,t);var n=s(e);return i(e,[{key:"render",value:function(t){return Object(d.b)("div",{class:"seven columns"},Object(d.b)("div",{class:"row"},Object(d.b)("div",{class:"one column"},Object(d.b)("i",{class:"fas fa-angle-double-left bumper pointer",onClick:t.handleTipPercentageBump,inc:"-5"})),Object(d.b)("div",{class:"one column"},Object(d.b)("i",{class:"fas fa-angle-left bumper pointer",onClick:t.handleTipPercentageBump,inc:"-1"})),Object(d.b)("div",{class:"two columns",style:{"text-align":"center"}},t.children),Object(d.b)("div",{class:"one column"},Object(d.b)("i",{class:"fas fa-angle-right bumper pointer",onClick:t.handleTipPercentageBump,inc:"1"})),Object(d.b)("div",{class:"one column"},Object(d.b)("i",{class:"fas fa-angle-double-right bumper pointer",onClick:t.handleTipPercentageBump,inc:"5"}))))}}]),e}(d.a),h=function(t){function e(){for(var t,e=arguments.length,l=new Array(e),r=0;r<e;r++)l[r]=arguments[r];return o(_(t=n.call.apply(n,[this].concat(l))),"state",{total:0,tipPercentage:20,splits:[{locked:!1}]}),o(_(t),"getTotalWithTip",(function(){return(Math.round(100*(t.state.total+t.state.total*(t.state.tipPercentage/100)))/100).toFixed(2)})),o(_(t),"getSplitValue",(function(){return(Math.round(100*((t.state.total+t.state.total*(t.state.tipPercentage/100))/t.state.splits.length))/100).toFixed(2)})),o(_(t),"bumpIt",(function(t,e){var n=Math.floor(t),l=Math.floor(n/Math.abs(e)),o=n%e;return e<0?-1===e?l+e:(0===o&&(o=-1*e),n-o):1===e?l+e:(l+1)*e})),o(_(t),"handleTipPercentageBump",(function(e){var n=parseInt(e.target.attributes.inc.value);t.setState({total:t.state.total,tipPercentage:t.bumpIt(t.state.tipPercentage,n),splits:t.state.splits})})),o(_(t),"handleTotalWithBillBump",(function(e){var n=t.getTotalWithTip(),l=parseInt(e.target.attributes.inc.value),o=t.bumpIt(n,l);t.setState({total:t.state.total,tipPercentage:(Math.round(100*((o-t.state.total)/t.state.total*100))/100).toFixed(2),splits:t.state.splits})})),o(_(t),"handleAddClick",(function(){t.state.splits.push({locked:!1}),t.setState({total:t.state.total,tipPercentage:t.state.tipPercentage,splits:t.state.splits})})),o(_(t),"handleTotalChange",(function(e){t.setState({total:e.target.value/1,tipPercentage:t.state.tipPercentage,splits:t.state.splits})})),o(_(t),"handleDeleteClick",(function(e){t.state.splits.splice(e.target.id,1),t.setState({total:t.state.total,tipPercentage:t.state.tipPercentage,splits:t.state.splits})})),o(_(t),"handleTotalSplitsClick",(function(e){for(var n=parseInt(e.target.attributes.totalSplits.value),l=[],o=0;o<n;o++)l.push({locked:!1});t.setState({total:t.state.total,tipPercentage:t.state.tipPercentage,splits:l})})),t}c(e,t);var n=s(e);return i(e,[{key:"render",value:function(t,e){var n=this,l=e.splits;return Object(d.b)("div",{id:"app",class:"container"},Object(d.b)(f,null),Object(d.b)("div",{style:{"margin-top":"1.5em"},class:"calculator row"},Object(d.b)("div",{class:"three columns"}," "),Object(d.b)("label",{class:"two columns"},"Bill Total"),Object(d.b)("input",{class:"three columns",type:"text",id:"txtTotal",style:{"text-align":"center"},onChange:this.handleTotalChange})),Object(d.b)("div",{class:"calculator row"},Object(d.b)("div",{class:"one column"}," "),Object(d.b)("label",{class:"four columns",style:{"text-align":"right"}},"Tip Percentage"),Object(d.b)(b,{handleTipPercentageBump:this.handleTipPercentageBump},this.state.tipPercentage)),Object(d.b)("div",{class:"calculator row"},Object(d.b)("div",{class:"two columns"}," "),Object(d.b)("label",{class:"three columns",style:{"text-align":"right"}},"Total With Tip"),Object(d.b)(b,{class:"two columns",handleTipPercentageBump:this.handleTotalWithBillBump},this.getTotalWithTip())),Object(d.b)("div",{class:"row"},Object(d.b)("div",{class:"two columns"}," "),Object(d.b)("div",{class:"eight columns"},Object(d.b)("hr",null))),Object(d.b)("div",{class:"splitPick row"},Object(d.b)("div",{class:"one column"}," "),Object(d.b)("div",{class:"one column"},Object(d.b)("i",{totalSplits:"1",onClick:this.handleTotalSplitsClick,class:l.length>0?"fas fa-user pointer":"far fa-user pointer"})),Object(d.b)("div",{class:"one column"},Object(d.b)("i",{totalSplits:"2",onClick:this.handleTotalSplitsClick,class:l.length>1?"fas fa-user pointer":"far fa-user pointer"})),Object(d.b)("div",{class:"one column"},Object(d.b)("i",{totalSplits:"3",onClick:this.handleTotalSplitsClick,class:l.length>2?"fas fa-user pointer":"far fa-user pointer"})),Object(d.b)("div",{class:"one column"},Object(d.b)("i",{totalSplits:"4",onClick:this.handleTotalSplitsClick,class:l.length>3?"fas fa-user pointer":"far fa-user pointer"})),Object(d.b)("div",{class:"one column"},Object(d.b)("i",{totalSplits:"5",onClick:this.handleTotalSplitsClick,class:l.length>4?"fas fa-user pointer":"far fa-user pointer"})),Object(d.b)("div",{class:"one column"},Object(d.b)("i",{totalSplits:"6",onClick:this.handleTotalSplitsClick,class:l.length>5?"fas fa-user pointer":"far fa-user pointer"}))),this.state.splits.map((function(t,e){return Object(d.b)("div",{class:"splitLine row"},Object(d.b)("div",{class:"four columns"}," "),Object(d.b)("div",{class:"six columns"},n.getSplitValue()),Object(d.b)("div",{class:"one column"}," "),Object(d.b)("div",{id:e,class:"one column pointer ",style:{color:"#990000"},onClick:n.handleDeleteClick.bind(n)},Object(d.b)("i",{class:"fas fa-trash-alt"})))})),Object(d.b)("div",{class:"fas fa-plus-square fa-2x pointer",style:{color:"#009900"},onClick:this.handleAddClick}))}}]),e}(d.a);e.default=h},hosL:function(t,e,n){"use strict";function l(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function r(t,e,n){var l,o,r,c={};for(r in e)"key"==r?l=e[r]:"ref"==r?o=e[r]:c[r]=e[r];if(arguments.length>2&&(c.children=arguments.length>3?w.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===c[r]&&(c[r]=t.defaultProps[r]);return i(t,c,l,o,null)}function i(t,e,n,l,o){var r={type:t,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++M:o};return null==o&&null!=x.vnode&&x.vnode(r),r}function c(t){return t.children}function a(t,e){this.props=t,this.context=e}function s(t,e){if(null==e)return t.__?s(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?s(t):null}function u(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return u(t)}}function _(t){(!t.__d&&(t.__d=!0)&&B.push(t)&&!p.__r++||W!==x.debounceRendering)&&((W=x.debounceRendering)||D)(p)}function p(){for(var t;p.__r=B.length;)t=B.sort((function(t,e){return t.__v.__b-e.__v.__b})),B=[],t.some((function(t){var e,n,o,r,i,c;t.__d&&(i=(r=(e=t).__v).__e,(c=e.__P)&&(n=[],(o=l({},r)).__v=r.__v+1,g(c,r,o,e.__n,void 0!==c.ownerSVGElement,null!=r.__h?[i]:null,n,null==i?s(r):i,r.__h),O(n,r),r.__e!=i&&u(r)))}))}function f(t,e,n,l,o,r,a,u,_,p){var f,h,v,y,m,O,k,S=l&&l.__k||A,T=S.length;for(n.__k=[],f=0;f<e.length;f++)if(null!=(y=n.__k[f]=null==(y=e[f])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?i(null,y,null,null,y):Array.isArray(y)?i(c,{children:y},null,null,null):y.__b>0?i(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=S[f])||v&&y.key==v.key&&y.type===v.type)S[f]=void 0;else for(h=0;h<T;h++){if((v=S[h])&&y.key==v.key&&y.type===v.type){S[h]=void 0;break}v=null}g(t,y,v=v||E,o,r,a,u,_,p),m=y.__e,(h=y.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(h,y.__c||m,y)),null!=m?(null==O&&(O=m),"function"==typeof y.type&&y.__k===v.__k?y.__d=_=d(y,_,t):_=b(t,y,v,S,m,_),"function"==typeof n.type&&(n.__d=_)):_&&v.__e==_&&_.parentNode!=t&&(_=s(v))}for(n.__e=O,f=T;f--;)null!=S[f]&&("function"==typeof n.type&&null!=S[f].__e&&S[f].__e==n.__d&&(n.__d=s(l,f+1)),P(S[f],S[f]));if(k)for(f=0;f<k.length;f++)j(k[f],k[++f],k[++f])}function d(t,e,n){for(var l,o=t.__k,r=0;o&&r<o.length;r++)(l=o[r])&&(l.__=t,e="function"==typeof l.type?d(l,e,n):b(n,l,l,o,l.__e,e));return e}function b(t,e,n,l,o,r){var i,c,a;if(void 0!==e.__d)i=e.__d,e.__d=void 0;else if(null==n||o!=r||null==o.parentNode)t:if(null==r||r.parentNode!==t)t.appendChild(o),i=null;else{for(c=r,a=0;(c=c.nextSibling)&&a<l.length;a+=2)if(c==o)break t;t.insertBefore(o,r),i=r}return void 0!==i?i:o.nextSibling}function h(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||L.test(e)?n:n+"px"}function v(t,e,n,l,o){var r;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof l&&(t.style.cssText=l=""),l)for(e in l)n&&e in n||h(t.style,e,"");if(n)for(e in n)l&&n[e]===l[e]||h(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?l||t.addEventListener(e,r?m:y,r):t.removeEventListener(e,r?m:y,r);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function y(t){this.l[t.type+!1](x.event?x.event(t):t)}function m(t){this.l[t.type+!0](x.event?x.event(t):t)}function g(t,e,n,o,r,i,s,u,_){var p,d,b,h,v,y,m,g,O,j,P,T=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(_=n.__h,u=e.__e=n.__e,e.__h=null,i=[u]),(p=x.__b)&&p(e);try{t:if("function"==typeof T){if(g=e.props,O=(p=T.contextType)&&o[p.__c],j=p?O?O.props.value:p.__:o,n.__c?m=(d=e.__c=n.__c).__=d.__E:("prototype"in T&&T.prototype.render?e.__c=d=new T(g,j):(e.__c=d=new a(g,j),d.constructor=T,d.render=S),O&&O.sub(d),d.props=g,d.state||(d.state={}),d.context=j,d.__n=o,b=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=T.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=l({},d.__s)),l(d.__s,T.getDerivedStateFromProps(g,d.__s))),h=d.props,v=d.state,b)null==T.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==T.getDerivedStateFromProps&&g!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,j),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,j)||e.__v===n.__v){d.props=g,d.state=d.__s,e.__v!==n.__v&&(d.__d=!1),d.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),d.__h.length&&s.push(d);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,j),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,v,y)}))}d.context=j,d.props=g,d.state=d.__s,(p=x.__r)&&p(e),d.__d=!1,d.__v=e,d.__P=t,p=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(o=l(l({},o),d.getChildContext())),b||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(h,v)),P=null!=p&&p.type===c&&null==p.key?p.props.children:p,f(t,Array.isArray(P)?P:[P],e,n,o,r,i,s,u,_),d.base=e.__e,e.__h=null,d.__h.length&&s.push(d),m&&(d.__E=d.__=null),d.__e=!1}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=k(n.__e,e,n,o,r,i,s,_);(p=x.diffed)&&p(e)}catch(t){e.__v=null,(_||null!=i)&&(e.__e=u,e.__h=!!_,i[i.indexOf(u)]=null),x.__e(t,e,n)}}function O(t,e){x.__c&&x.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){x.__e(t,e.__v)}}))}function k(t,e,n,l,r,i,c,a){var u,_,p,d=n.props,b=e.props,h=e.type,y=0;if("svg"===h&&(r=!0),null!=i)for(;y<i.length;y++)if((u=i[y])&&"setAttribute"in u==!!h&&(h?u.localName===h:3===u.nodeType)){t=u,i[y]=null;break}if(null==t){if(null===h)return document.createTextNode(b);t=r?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,b.is&&b),i=null,a=!1}if(null===h)d===b||a&&t.data===b||(t.data=b);else{if(i=i&&w.call(t.childNodes),_=(d=n.props||E).dangerouslySetInnerHTML,p=b.dangerouslySetInnerHTML,!a){if(null!=i)for(d={},y=0;y<t.attributes.length;y++)d[t.attributes[y].name]=t.attributes[y].value;(p||_)&&(p&&(_&&p.__html==_.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(t,e,n,l,o){var r;for(r in n)"children"===r||"key"===r||r in e||v(t,r,null,n[r],l);for(r in e)o&&"function"!=typeof e[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===e[r]||v(t,r,e[r],n[r],l)}(t,b,d,r,a),p)e.__k=[];else if(y=e.props.children,f(t,Array.isArray(y)?y:[y],e,n,l,r&&"foreignObject"!==h,i,c,i?i[0]:n.__k&&s(n,0),a),null!=i)for(y=i.length;y--;)null!=i[y]&&o(i[y]);a||("value"in b&&void 0!==(y=b.value)&&(y!==d.value||y!==t.value||"progress"===h&&!y)&&v(t,"value",y,d.value,!1),"checked"in b&&void 0!==(y=b.checked)&&y!==t.checked&&v(t,"checked",y,d.checked,!1))}return t}function j(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){x.__e(t,n)}}function P(t,e,n){var l,r;if(x.unmount&&x.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||j(l,null,e)),null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){x.__e(t,e)}l.base=l.__P=null}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&P(l[r],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function S(t,e,n){return this.constructor(t,n)}function T(t,e,n){var l,o,i;x.__&&x.__(t,e),o=(l="function"==typeof n)?null:n&&n.__k||e.__k,i=[],g(e,t=(!l&&n||e).__k=r(c,null,[t]),o||E,E,void 0!==e.ownerSVGElement,!l&&n?[n]:o?null:e.firstChild?w.call(e.childNodes):null,i,!l&&n?n:o?o.__e:e.firstChild,l),O(i,t)}function C(t,e){T(t,e,C)}n.d(e,"d",(function(){return T})),n.d(e,"c",(function(){return C})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var w,x,M,B,D,W,E={},A=[],L=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;w=A.slice,x={__e:function(t,e){for(var n,l,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((l=n.constructor)&&null!=l.getDerivedStateFromError&&(n.setState(l.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(e){t=e}throw t}},M=0,a.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=l({},this.state),"function"==typeof t&&(t=t(l({},n),this.props)),t&&l(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),_(this))},a.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},a.prototype.render=c,B=[],D="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0},mdyV:function(t,e,n){"use strict";n.r(e);var l=n("hosL"),o=l.b,r=l.d,i=l.c,c=function(t){return t&&t.default?t.default:t},a=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(a(n.p)+"sw.js"),"function"==typeof c(n("QfWi"))){var s=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=c(n("QfWi")),e={},l=document.querySelector('[type="__PREACT_CLI_DATA__"]');l&&(e=JSON.parse(decodeURI(l.innerHTML)).preRenderData||e);var u={preRenderData:e},_=e.url?a(e.url):"";(i&&_===a(location.pathname)?i:r)(o(t,{CLI_DATA:u}),document.body,s)}()}}});
//# sourceMappingURL=bundle.c8c60.js.map