!function(t){function e(l){if(n[l])return n[l].exports;var i=n[l]={i:l,l:!1,exports:{}};return t[l].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,l){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:l})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(l,i,function(e){return t[e]}.bind(null,i));return l},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="mdyV")}({QfWi:function(t,e,n){"use strict";function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){return Object(o.h)("div",{class:"billTotal"},Object(o.h)("label",{style:{"padding-right":"0.33em"}},"Bill Total"),Object(o.h)("input",{type:"text",id:"txtTotal",style:{"text-align":"center"},onChange:t.handleTotalChange}))}function r(t){return Object(o.h)("div",null,Object(o.h)("div",{class:"tipPercentageText"},t.label),Object(o.h)("div",{class:"valueBumpers"},Object(o.h)("span",{class:"fas fa-angle-double-left pointer bumper",onClick:t.handleBump,inc:"-5"}),Object(o.h)("span",{class:"fas fa-angle-left pointer bumper",onClick:t.handleBump,inc:"-1"}),Object(o.h)("span",{class:"foo"},t.children),Object(o.h)("span",{class:"fas fa-angle-right pointer bumper",onClick:t.handleBump,inc:"1"}),Object(o.h)("span",{class:"fas fa-angle-double-right pointer bumper",onClick:t.handleBump,inc:"5"})),Object(o.h)("div",{style:{clear:"left"}}))}n.r(e);var o=n("hosL"),s=n("QyV/");e.default=class extends o.Component{constructor(...t){super(...t),l(this,"state",{total:0,tipPercentage:20,splits:[{locked:!1}]}),l(this,"getTipAmount",(()=>{let t=this.getTotalWithTip();return(Math.round(100*(t-this.state.total))/100).toFixed(2)})),l(this,"getTotalWithTip",(()=>(Math.round(100*(this.state.total+this.state.total*(this.state.tipPercentage/100)))/100).toFixed(2))),l(this,"getSplitValue",(()=>(Math.round(100*((this.state.total+this.state.total*(this.state.tipPercentage/100))/this.state.splits.length))/100).toFixed(2))),l(this,"bumpIt",((t,e)=>{let n=Math.floor(t),l=Math.floor(n/Math.abs(e)),i=n%e,r=0;return e<0?-1===e?r=parseFloat(t)===Math.floor(t)?t-1:Math.floor(t):(0===i&&(i=-1*e),r=n-i):r=1===e?l+e:(l+1)*e,(NaN===r||r<=0)&&(r=0),r})),l(this,"handleTipPercentageBump",(t=>{let e=parseInt(t.target.attributes.inc.value);this.setState({total:NaN===this.state.total?0:this.state.total,tipPercentage:this.bumpIt(this.state.tipPercentage,e),splits:this.state.splits})})),l(this,"handleTipAmountBump",(t=>{let e=this.getTotalWithTip()-this.state.total,n=parseInt(t.target.attributes.inc.value),l=this.bumpIt(e,n);this.setState({total:NaN===this.state.total?0:this.state.total,tipPercentage:(Math.round(100*(l/this.state.total*100))/100).toFixed(2),splits:this.state.splits})})),l(this,"handleTotalWithBillBump",(t=>{let e=this.getTotalWithTip(),n=parseInt(t.target.attributes.inc.value),l=this.bumpIt(e,n);this.setState({total:NaN===this.state.total?0:this.state.total,tipPercentage:(Math.round(100*((l-this.state.total)/this.state.total*100))/100).toFixed(2),splits:this.state.splits})})),l(this,"handleAddClick",(()=>{this.state.splits.push({locked:!1}),this.setState({total:this.state.total,tipPercentage:this.state.tipPercentage,splits:this.state.splits})})),l(this,"handleTotalChange",(t=>{this.setState({total:t.target.value/1,tipPercentage:this.state.tipPercentage,splits:this.state.splits})})),l(this,"handleDeleteClick",(t=>{this.state.splits.splice(t.target.id,1),this.setState({total:this.state.total,tipPercentage:this.state.tipPercentage,splits:this.state.splits})})),l(this,"handleTotalSplitsClick",(t=>{let e=parseInt(t.target.attributes.totalSplits.value),n=[];for(let t=0;t<e;t++)n.push({locked:!1});this.setState({total:this.state.total,tipPercentage:this.state.tipPercentage,splits:n})})),l(this,"deleteComponent",(t=>Object(o.h)("div",{id:t,class:"pointer ",style:{color:"#990000","text-align":"right"},onClick:this.handleDeleteClick.bind(this)},Object(o.h)("i",{class:"fas fa-trash-alt"}))))}render(t,{splits:e}){return Object(o.h)("div",{id:"app"},Object(o.h)(s.a,null),Object(o.h)(i,{handleTotalChange:this.handleTotalChange}),Object(o.h)("div",{style:{clear:"left"}},Object(o.h)(r,{label:"Tip Percentage",handleBump:this.handleTipPercentageBump},this.state.tipPercentage)),Object(o.h)("div",null,Object(o.h)(r,{label:"Tip Amount",handleBump:this.handleTipAmountBump},this.getTipAmount())),Object(o.h)("div",null,Object(o.h)(r,{label:"Total With Tip",handleBump:this.handleTotalWithBillBump},this.getTotalWithTip())),Object(o.h)("hr",null),Object(o.h)("div",null,Object(o.h)("div",{totalSplits:"1",onClick:this.handleTotalSplitsClick,class:e.length>0?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(o.h)("div",{totalSplits:"2",onClick:this.handleTotalSplitsClick,class:e.length>1?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(o.h)("div",{totalSplits:"3",onClick:this.handleTotalSplitsClick,class:e.length>2?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(o.h)("div",{totalSplits:"4",onClick:this.handleTotalSplitsClick,class:e.length>3?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(o.h)("div",{totalSplits:"5",onClick:this.handleTotalSplitsClick,class:e.length>4?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(o.h)("div",{totalSplits:"6",onClick:this.handleTotalSplitsClick,class:e.length>5?"fas fa-user splitPicker pointer":"far fa-user splitPicker pointer"}),Object(o.h)("div",{class:"fa fa-user-plus pointer",style:{"padding-left":"50px"},onClick:this.handleAddClick})),this.state.splits.map(((t,e)=>Object(o.h)("div",{class:"splitLine"},Object(o.h)("div",{class:"splitterCount"},e+1),Object(o.h)("div",{class:"splitterValue"},this.getSplitValue()),e>0?this.deleteComponent(e):""))))}}},"QyV/":function(t,e,n){"use strict";(function(t){e.a=()=>t("div",{class:"pageHeader"},t("i",{class:"fas fa-calculator",style:{"padding-left":"0.25em"}}),t("span",{class:"header"},"Tip Calculator"),t("i",{class:"fas fa-percentage",style:{"padding-right":"0.25em"}}))}).call(this,n("hosL").h)},hosL:function(t,e,n){"use strict";function l(t,e){for(var n in e)t[n]=e[n];return t}function i(t){var e=t.parentNode;e&&e.removeChild(t)}function r(t,e,n){var l,i,r,s={};for(r in e)"key"==r?l=e[r]:"ref"==r?i=e[r]:s[r]=e[r];if(arguments.length>2&&(s.children=arguments.length>3?B.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===s[r]&&(s[r]=t.defaultProps[r]);return o(t,s,l,i,null)}function o(t,e,n,l,i){var r={type:t,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++D:i};return null==i&&null!=N.vnode&&N.vnode(r),r}function s(){return{current:null}}function a(t){return t.children}function u(t,e){this.props=t,this.context=e}function c(t,e){if(null==e)return t.__?c(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?c(t):null}function _(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return _(t)}}function p(t){(!t.__d&&(t.__d=!0)&&w.push(t)&&!h.__r++||I!==N.debounceRendering)&&((I=N.debounceRendering)||L)(h)}function h(){for(var t;h.__r=w.length;)t=w.sort((function(t,e){return t.__v.__b-e.__v.__b})),w=[],t.some((function(t){var e,n,i,r,o,s;t.__d&&(o=(r=(e=t).__v).__e,(s=e.__P)&&(n=[],(i=l({},r)).__v=r.__v+1,C(s,r,i,e.__n,void 0!==s.ownerSVGElement,null!=r.__h?[o]:null,n,null==o?c(r):o,r.__h),P(n,r),r.__e!=o&&_(r)))}))}function f(t,e,n,l,i,r,s,u,_,p){var h,f,v,m,y,b,k,P=l&&l.__k||V,T=P.length;for(n.__k=[],h=0;h<e.length;h++)if(null!=(m=n.__k[h]=null==(m=e[h])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?o(null,m,null,null,m):Array.isArray(m)?o(a,{children:m},null,null,null):m.__b>0?o(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=P[h])||v&&m.key==v.key&&m.type===v.type)P[h]=void 0;else for(f=0;f<T;f++){if((v=P[f])&&m.key==v.key&&m.type===v.type){P[f]=void 0;break}v=null}C(t,m,v=v||F,i,r,s,u,_,p),y=m.__e,(f=m.ref)&&v.ref!=f&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(f,m.__c||y,m)),null!=y?(null==b&&(b=y),"function"==typeof m.type&&m.__k===v.__k?m.__d=_=d(m,_,t):_=g(t,m,v,P,y,_),"function"==typeof n.type&&(n.__d=_)):_&&v.__e==_&&_.parentNode!=t&&(_=c(v))}for(n.__e=b,h=T;h--;)null!=P[h]&&("function"==typeof n.type&&null!=P[h].__e&&P[h].__e==n.__d&&(n.__d=c(l,h+1)),S(P[h],P[h]));if(k)for(h=0;h<k.length;h++)O(k[h],k[++h],k[++h])}function d(t,e,n){for(var l,i=t.__k,r=0;i&&r<i.length;r++)(l=i[r])&&(l.__=t,e="function"==typeof l.type?d(l,e,n):g(n,l,l,i,l.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function g(t,e,n,l,i,r){var o,s,a;if(void 0!==e.__d)o=e.__d,e.__d=void 0;else if(null==n||i!=r||null==i.parentNode)t:if(null==r||r.parentNode!==t)t.appendChild(i),o=null;else{for(s=r,a=0;(s=s.nextSibling)&&a<l.length;a+=2)if(s==i)break t;t.insertBefore(i,r),o=r}return void 0!==o?o:i.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||R.test(e)?n:n+"px"}function y(t,e,n,l,i){var r;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof l&&(t.style.cssText=l=""),l)for(e in l)n&&e in n||m(t.style,e,"");if(n)for(e in n)l&&n[e]===l[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?l||t.addEventListener(e,r?k:b,r):t.removeEventListener(e,r?k:b,r);else if("dangerouslySetInnerHTML"!==e){if(i)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function b(t){this.l[t.type+!1](N.event?N.event(t):t)}function k(t){this.l[t.type+!0](N.event?N.event(t):t)}function C(t,e,n,i,r,o,s,c,_){var p,h,d,v,g,m,y,b,k,C,P,O=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(_=n.__h,c=e.__e=n.__e,e.__h=null,o=[c]),(p=N.__b)&&p(e);try{t:if("function"==typeof O){if(b=e.props,k=(p=O.contextType)&&i[p.__c],C=p?k?k.props.value:p.__:i,n.__c?y=(h=e.__c=n.__c).__=h.__E:("prototype"in O&&O.prototype.render?e.__c=h=new O(b,C):(e.__c=h=new u(b,C),h.constructor=O,h.render=j),k&&k.sub(h),h.props=b,h.state||(h.state={}),h.context=C,h.__n=i,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=O.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=l({},h.__s)),l(h.__s,O.getDerivedStateFromProps(b,h.__s))),v=h.props,g=h.state,d)null==O.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==O.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,C)||e.__v===n.__v){h.props=b,h.state=h.__s,e.__v!==n.__v&&(h.__d=!1),h.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),h.__h.length&&s.push(h);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,C),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(v,g,m)}))}h.context=C,h.props=b,h.state=h.__s,(p=N.__r)&&p(e),h.__d=!1,h.__v=e,h.__P=t,p=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(i=l(l({},i),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(m=h.getSnapshotBeforeUpdate(v,g)),P=null!=p&&p.type===a&&null==p.key?p.props.children:p,f(t,Array.isArray(P)?P:[P],e,n,i,r,o,s,c,_),h.base=e.__e,e.__h=null,h.__h.length&&s.push(h),y&&(h.__E=h.__=null),h.__e=!1}else null==o&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=T(n.__e,e,n,i,r,o,s,_);(p=N.diffed)&&p(e)}catch(t){e.__v=null,(_||null!=o)&&(e.__e=c,e.__h=!!_,o[o.indexOf(c)]=null),N.__e(t,e,n)}}function P(t,e){N.__c&&N.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){N.__e(t,e.__v)}}))}function T(t,e,n,l,r,o,s,a){var u,_,p,h=n.props,d=e.props,v=e.type,g=0;if("svg"===v&&(r=!0),null!=o)for(;g<o.length;g++)if((u=o[g])&&"setAttribute"in u==!!v&&(v?u.localName===v:3===u.nodeType)){t=u,o[g]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=r?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),o=null,a=!1}if(null===v)h===d||a&&t.data===d||(t.data=d);else{if(o=o&&B.call(t.childNodes),_=(h=n.props||F).dangerouslySetInnerHTML,p=d.dangerouslySetInnerHTML,!a){if(null!=o)for(h={},g=0;g<t.attributes.length;g++)h[t.attributes[g].name]=t.attributes[g].value;(p||_)&&(p&&(_&&p.__html==_.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(t,e,n,l,i){var r;for(r in n)"children"===r||"key"===r||r in e||y(t,r,null,n[r],l);for(r in e)i&&"function"!=typeof e[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===e[r]||y(t,r,e[r],n[r],l)}(t,d,h,r,a),p)e.__k=[];else if(g=e.props.children,f(t,Array.isArray(g)?g:[g],e,n,l,r&&"foreignObject"!==v,o,s,o?o[0]:n.__k&&c(n,0),a),null!=o)for(g=o.length;g--;)null!=o[g]&&i(o[g]);a||("value"in d&&void 0!==(g=d.value)&&(g!==h.value||g!==t.value||"progress"===v&&!g)&&y(t,"value",g,h.value,!1),"checked"in d&&void 0!==(g=d.checked)&&g!==t.checked&&y(t,"checked",g,h.checked,!1))}return t}function O(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){N.__e(t,n)}}function S(t,e,n){var l,r;if(N.unmount&&N.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||O(l,null,e)),null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){N.__e(t,e)}l.base=l.__P=null}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&S(l[r],e,"function"!=typeof t.type);n||null==t.__e||i(t.__e),t.__e=t.__d=void 0}function j(t,e,n){return this.constructor(t,n)}function x(t,e,n){var l,i,o;N.__&&N.__(t,e),i=(l="function"==typeof n)?null:n&&n.__k||e.__k,o=[],C(e,t=(!l&&n||e).__k=r(a,null,[t]),i||F,F,void 0!==e.ownerSVGElement,!l&&n?[n]:i?null:e.firstChild?B.call(e.childNodes):null,o,!l&&n?n:i?i.__e:e.firstChild,l),P(o,t)}function A(t,e){x(t,e,A)}function M(t,e,n){var i,r,s,a=l({},t.props);for(s in e)"key"==s?i=e[s]:"ref"==s?r=e[s]:a[s]=e[s];return arguments.length>2&&(a.children=arguments.length>3?B.call(arguments,2):n),o(t.type,a,i||t.key,r||t.ref,null)}function W(t,e){var n={__c:e="__cC"+U++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,l;return this.getChildContext||(n=[],(l={})[e]=this,this.getChildContext=function(){return l},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(p)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return x})),n.d(e,"hydrate",(function(){return A})),n.d(e,"createElement",(function(){return r})),n.d(e,"h",(function(){return r})),n.d(e,"Fragment",(function(){return a})),n.d(e,"createRef",(function(){return s})),n.d(e,"isValidElement",(function(){return E})),n.d(e,"Component",(function(){return u})),n.d(e,"cloneElement",(function(){return M})),n.d(e,"createContext",(function(){return W})),n.d(e,"toChildArray",(function(){return v})),n.d(e,"options",(function(){return N}));var B,N,D,E,w,L,I,U,F={},V=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;B=V.slice,N={__e:function(t,e){for(var n,l,i;e=e.__;)if((n=e.__c)&&!n.__)try{if((l=n.constructor)&&null!=l.getDerivedStateFromError&&(n.setState(l.getDerivedStateFromError(t)),i=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),i=n.__d),i)return n.__E=n}catch(e){t=e}throw t}},D=0,E=function(t){return null!=t&&void 0===t.constructor},u.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=l({},this.state),"function"==typeof t&&(t=t(l({},n),this.props)),t&&l(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),p(this))},u.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),p(this))},u.prototype.render=a,w=[],L="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,h.__r=0,U=0},mdyV:function(t,e,n){"use strict";n.r(e);var l=n("hosL");const{h:i,render:r,hydrate:o}=l,s=t=>t&&t.default?t.default:t,a=t=>"/"===t[t.length-1]?t:t+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(a(n.p)+"sw-esm.js"),"function"==typeof s(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild,e=()=>{let e=s(n("QfWi")),l={};const u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(l=JSON.parse(decodeURI(u.innerHTML)).preRenderData||l);const c={preRenderData:l},_=l.url?a(l.url):"";(o&&_===a(location.pathname)?o:r)(i(e,{CLI_DATA:c}),document.body,t)};0,e()}}});
//# sourceMappingURL=bundle.530c2.esm.js.map