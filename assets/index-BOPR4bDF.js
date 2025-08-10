(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qn(e,t){const n=new Set(e.split(","));return s=>n.has(s)}const z={},gt=[],Re=()=>{},hi=()=>!1,sn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),zn=e=>e.startsWith("onUpdate:"),ne=Object.assign,jn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},pi=Object.prototype.hasOwnProperty,$=(e,t)=>pi.call(e,t),D=Array.isArray,vt=e=>rn(e)==="[object Map]",or=e=>rn(e)==="[object Set]",x=e=>typeof e=="function",se=e=>typeof e=="string",ht=e=>typeof e=="symbol",j=e=>e!==null&&typeof e=="object",lr=e=>(j(e)||x(e))&&x(e.then)&&x(e.catch),ar=Object.prototype.toString,rn=e=>ar.call(e),mi=e=>rn(e).slice(8,-1),cr=e=>rn(e)==="[object Object]",Jn=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Rt=qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),on=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},gi=/-(\w)/g,He=on(e=>e.replace(gi,(t,n)=>n?n.toUpperCase():"")),vi=/\B([A-Z])/g,Tt=on(e=>e.replace(vi,"-$1").toLowerCase()),ln=on(e=>e.charAt(0).toUpperCase()+e.slice(1)),yn=on(e=>e?`on${ln(e)}`:""),ft=(e,t)=>!Object.is(e,t),Ut=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ur=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Mn=e=>{const t=parseFloat(e);return isNaN(t)?e:t},yi=e=>{const t=se(e)?Number(e):NaN;return isNaN(t)?e:t};let ys;const fr=()=>ys||(ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ft(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=se(s)?Ai(s):Ft(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(se(e)||j(e))return e}const Ti=/;(?![^(]*\))/g,Ci=/:([^]+)/,_i=/\/\*[^]*?\*\//g;function Ai(e){const t={};return e.replace(_i,"").split(Ti).forEach(n=>{if(n){const s=n.split(Ci);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Te(e){let t="";if(se(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const s=Te(e[n]);s&&(t+=s+" ")}else if(j(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Si=qn(bi);function dr(e){return!!e||e===""}const ie=e=>se(e)?e:e==null?"":D(e)||j(e)&&(e.toString===ar||!x(e.toString))?JSON.stringify(e,hr,2):String(e),hr=(e,t)=>t&&t.__v_isRef?hr(e,t.value):vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Tn(s,i)+" =>"]=r,n),{})}:or(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Tn(n))}:ht(t)?Tn(t):j(t)&&!D(t)&&!cr(t)?String(t):t,Tn=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class Ri{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=De,!t&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=De;try{return De=this,t()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ei(e,t=De){t&&t.active&&t.effects.push(e)}function wi(){return De}let ct;class Xn{constructor(t,n,s,r){this.fn=t,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ei(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ye();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Li(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ze()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=je,n=ct;try{return je=!0,ct=this,this._runnings++,Ts(this),this.fn()}finally{Cs(this),this._runnings--,ct=n,je=t}}stop(){this.active&&(Ts(this),Cs(this),this.onStop&&this.onStop(),this.active=!1)}}function Li(e){return e.value}function Ts(e){e._trackId++,e._depsLength=0}function Cs(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)pr(e.deps[t],e);e.deps.length=e._depsLength}}function pr(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let je=!0,xn=0;const mr=[];function Ye(){mr.push(je),je=!1}function Ze(){const e=mr.pop();je=e===void 0?!0:e}function Yn(){xn++}function Zn(){for(xn--;!xn&&kn.length;)kn.shift()()}function gr(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&pr(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const kn=[];function vr(e,t,n){Yn();for(const s of e.keys()){let r;s._dirtyLevel<t&&(r??(r=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(r??(r=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&kn.push(s.scheduler)))}Zn()}const yr=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Bn=new WeakMap,ut=Symbol(""),Fn=Symbol("");function Ce(e,t,n){if(je&&ct){let s=Bn.get(e);s||Bn.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=yr(()=>s.delete(n))),gr(ct,r)}}function $e(e,t,n,s,r,i){const o=Bn.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&D(e)){const c=Number(s);o.forEach((f,d)=>{(d==="length"||!ht(d)&&d>=c)&&l.push(f)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":D(e)?Jn(n)&&l.push(o.get("length")):(l.push(o.get(ut)),vt(e)&&l.push(o.get(Fn)));break;case"delete":D(e)||(l.push(o.get(ut)),vt(e)&&l.push(o.get(Fn)));break;case"set":vt(e)&&l.push(o.get(ut));break}Yn();for(const c of l)c&&vr(c,4);Zn()}const Di=qn("__proto__,__v_isRef,__isVue"),Tr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht)),_s=Mi();function Mi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=N(this);for(let i=0,o=this.length;i<o;i++)Ce(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(N)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ye(),Yn();const s=N(this)[t].apply(this,n);return Zn(),Ze(),s}}),e}function xi(e){ht(e)||(e=String(e));const t=N(this);return Ce(t,"has",e),t.hasOwnProperty(e)}class Cr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ki:Sr:i?br:Ar).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=D(t);if(!r){if(o&&$(_s,n))return Reflect.get(_s,n,s);if(n==="hasOwnProperty")return xi}const l=Reflect.get(t,n,s);return(ht(n)?Tr.has(n):Di(n))||(r||Ce(t,"get",n),i)?l:be(l)?o&&Jn(n)?l:l.value:j(l)?r?Rr(l):cn(l):l}}class _r extends Cr{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const c=Zt(i);if(!In(s)&&!Zt(s)&&(i=N(i),s=N(s)),!D(t)&&be(i)&&!be(s))return c?!1:(i.value=s,!0)}const o=D(t)&&Jn(n)?Number(n)<t.length:$(t,n),l=Reflect.set(t,n,s,r);return t===N(r)&&(o?ft(s,i)&&$e(t,"set",n,s):$e(t,"add",n,s)),l}deleteProperty(t,n){const s=$(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&$e(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!ht(n)||!Tr.has(n))&&Ce(t,"has",n),s}ownKeys(t){return Ce(t,"iterate",D(t)?"length":ut),Reflect.ownKeys(t)}}class ki extends Cr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Bi=new _r,Fi=new ki,Ii=new _r(!0);const Qn=e=>e,an=e=>Reflect.getPrototypeOf(e);function Pt(e,t,n=!1,s=!1){e=e.__v_raw;const r=N(e),i=N(t);n||(ft(t,i)&&Ce(r,"get",t),Ce(r,"get",i));const{has:o}=an(r),l=s?Qn:n?ss:ns;if(o.call(r,t))return l(e.get(t));if(o.call(r,i))return l(e.get(i));e!==r&&e.get(t)}function $t(e,t=!1){const n=this.__v_raw,s=N(n),r=N(e);return t||(ft(e,r)&&Ce(s,"has",e),Ce(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Wt(e,t=!1){return e=e.__v_raw,!t&&Ce(N(e),"iterate",ut),Reflect.get(e,"size",e)}function As(e){e=N(e);const t=N(this);return an(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function bs(e,t){t=N(t);const n=N(this),{has:s,get:r}=an(n);let i=s.call(n,e);i||(e=N(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?ft(t,o)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function Ss(e){const t=N(this),{has:n,get:s}=an(t);let r=n.call(t,e);r||(e=N(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&$e(t,"delete",e,void 0),i}function Rs(){const e=N(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function Vt(e,t){return function(s,r){const i=this,o=i.__v_raw,l=N(o),c=t?Qn:e?ss:ns;return!e&&Ce(l,"iterate",ut),o.forEach((f,d)=>s.call(r,c(f),c(d),i))}}function Nt(e,t,n){return function(...s){const r=this.__v_raw,i=N(r),o=vt(i),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,f=r[e](...s),d=n?Qn:t?ss:ns;return!t&&Ce(i,"iterate",c?Fn:ut),{next(){const{value:v,done:p}=f.next();return p?{value:v,done:p}:{value:l?[d(v[0]),d(v[1])]:d(v),done:p}},[Symbol.iterator](){return this}}}}function Ve(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Oi(){const e={get(i){return Pt(this,i)},get size(){return Wt(this)},has:$t,add:As,set:bs,delete:Ss,clear:Rs,forEach:Vt(!1,!1)},t={get(i){return Pt(this,i,!1,!0)},get size(){return Wt(this)},has:$t,add:As,set:bs,delete:Ss,clear:Rs,forEach:Vt(!1,!0)},n={get(i){return Pt(this,i,!0)},get size(){return Wt(this,!0)},has(i){return $t.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:Vt(!0,!1)},s={get(i){return Pt(this,i,!0,!0)},get size(){return Wt(this,!0)},has(i){return $t.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:Vt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Nt(i,!1,!1),n[i]=Nt(i,!0,!1),t[i]=Nt(i,!1,!0),s[i]=Nt(i,!0,!0)}),[e,n,t,s]}const[Hi,Pi,$i,Wi]=Oi();function es(e,t){const n=t?e?Wi:$i:e?Pi:Hi;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get($(n,r)&&r in s?n:s,r,i)}const Vi={get:es(!1,!1)},Ni={get:es(!1,!0)},Gi={get:es(!0,!1)};const Ar=new WeakMap,br=new WeakMap,Sr=new WeakMap,Ki=new WeakMap;function Ui(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ui(mi(e))}function cn(e){return Zt(e)?e:ts(e,!1,Bi,Vi,Ar)}function zi(e){return ts(e,!1,Ii,Ni,br)}function Rr(e){return ts(e,!0,Fi,Gi,Sr)}function ts(e,t,n,s,r){if(!j(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=qi(e);if(o===0)return e;const l=new Proxy(e,o===2?s:n);return r.set(e,l),l}function Et(e){return Zt(e)?Et(e.__v_raw):!!(e&&e.__v_isReactive)}function Zt(e){return!!(e&&e.__v_isReadonly)}function In(e){return!!(e&&e.__v_isShallow)}function Er(e){return e?!!e.__v_raw:!1}function N(e){const t=e&&e.__v_raw;return t?N(t):e}function ji(e){return Object.isExtensible(e)&&ur(e,"__v_skip",!0),e}const ns=e=>j(e)?cn(e):e,ss=e=>j(e)?Rr(e):e;class wr{constructor(t,n,s,r){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Xn(()=>t(this._value),()=>Cn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=N(this);return(!t._cacheable||t.effect.dirty)&&ft(t._value,t._value=t.effect.run())&&Cn(t,4),Xi(t),t.effect._dirtyLevel>=2&&Cn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ji(e,t,n=!1){let s,r;const i=x(e);return i?(s=e,r=Re):(s=e.get,r=e.set),new wr(s,r,i||!r,n)}function Xi(e){var t;je&&ct&&(e=N(e),gr(ct,(t=e.dep)!=null?t:e.dep=yr(()=>e.dep=void 0,e instanceof wr?e:void 0)))}function Cn(e,t=4,n){e=N(e);const s=e.dep;s&&vr(s,t)}function be(e){return!!(e&&e.__v_isRef===!0)}function Yi(e){return be(e)?e.value:e}const Zi={get:(e,t,n)=>Yi(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return be(r)&&!be(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Lr(e){return Et(e)?e:new Proxy(e,Zi)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Je(e,t,n,s){try{return s?e(...s):e()}catch(r){un(r,t,n)}}function we(e,t,n,s){if(x(e)){const r=Je(e,t,n,s);return r&&lr(r)&&r.catch(i=>{un(i,t,n)}),r}if(D(e)){const r=[];for(let i=0;i<e.length;i++)r.push(we(e[i],t,n,s));return r}}function un(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,o,l)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Ye(),Je(c,null,10,[e,o,l]),Ze();return}}Qi(e,n,r,s)}function Qi(e,t,n,s=!0){console.error(e)}let Mt=!1,On=!1;const he=[];let Oe=0;const yt=[];let Ke=null,ot=0;const Dr=Promise.resolve();let rs=null;function eo(e){const t=rs||Dr;return e?t.then(this?e.bind(this):e):t}function to(e){let t=Oe+1,n=he.length;for(;t<n;){const s=t+n>>>1,r=he[s],i=xt(r);i<e||i===e&&r.pre?t=s+1:n=s}return t}function is(e){(!he.length||!he.includes(e,Mt&&e.allowRecurse?Oe+1:Oe))&&(e.id==null?he.push(e):he.splice(to(e.id),0,e),Mr())}function Mr(){!Mt&&!On&&(On=!0,rs=Dr.then(kr))}function no(e){const t=he.indexOf(e);t>Oe&&he.splice(t,1)}function so(e){D(e)?yt.push(...e):(!Ke||!Ke.includes(e,e.allowRecurse?ot+1:ot))&&yt.push(e),Mr()}function Es(e,t,n=Mt?Oe+1:0){for(;n<he.length;n++){const s=he[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;he.splice(n,1),n--,s()}}}function xr(e){if(yt.length){const t=[...new Set(yt)].sort((n,s)=>xt(n)-xt(s));if(yt.length=0,Ke){Ke.push(...t);return}for(Ke=t,ot=0;ot<Ke.length;ot++)Ke[ot]();Ke=null,ot=0}}const xt=e=>e.id==null?1/0:e.id,ro=(e,t)=>{const n=xt(e)-xt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function kr(e){On=!1,Mt=!0,he.sort(ro);try{for(Oe=0;Oe<he.length;Oe++){const t=he[Oe];t&&t.active!==!1&&Je(t,null,14)}}finally{Oe=0,he.length=0,xr(),Mt=!1,rs=null,(he.length||yt.length)&&kr()}}function io(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||z;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:v,trim:p}=s[d]||z;p&&(r=n.map(R=>se(R)?R.trim():R)),v&&(r=n.map(Mn))}let l,c=s[l=yn(t)]||s[l=yn(He(t))];!c&&i&&(c=s[l=yn(Tt(t))]),c&&we(c,e,6,r);const f=s[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,we(f,e,6,r)}}function Br(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!x(e)){const c=f=>{const d=Br(f,t,!0);d&&(l=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(j(e)&&s.set(e,null),null):(D(i)?i.forEach(c=>o[c]=null):ne(o,i),j(e)&&s.set(e,o),o)}function fn(e,t){return!e||!sn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Tt(t))||$(e,t))}let ve=null,Fr=null;function Qt(e){const t=ve;return ve=e,Fr=e&&e.type.__scopeId||null,t}function Ir(e,t=ve,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Ps(-1);const i=Qt(t);let o;try{o=e(...r)}finally{Qt(i),s._d&&Ps(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function _n(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:f,renderCache:d,props:v,data:p,setupState:R,ctx:k,inheritAttrs:P}=e,re=Qt(e);let X,te;try{if(n.shapeFlag&4){const K=r||s,Q=K;X=Ie(f.call(Q,K,d,v,R,p,k)),te=l}else{const K=t;X=Ie(K.length>1?K(v,{attrs:l,slots:o,emit:c}):K(v,null)),te=t.props?l:oo(l)}}catch(K){Dt.length=0,un(K,e,1),X=V(Ee)}let W=X;if(te&&P!==!1){const K=Object.keys(te),{shapeFlag:Q}=W;K.length&&Q&7&&(i&&K.some(zn)&&(te=lo(te,i)),W=Xe(W,te,!1,!0))}return n.dirs&&(W=Xe(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),X=W,Qt(re),X}const oo=e=>{let t;for(const n in e)(n==="class"||n==="style"||sn(n))&&((t||(t={}))[n]=e[n]);return t},lo=(e,t)=>{const n={};for(const s in e)(!zn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ao(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:c}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ws(s,o,f):!!o;if(c&8){const d=t.dynamicProps;for(let v=0;v<d.length;v++){const p=d[v];if(o[p]!==s[p]&&!fn(f,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ws(s,o,f):!0:!!o;return!1}function ws(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!fn(n,i))return!0}return!1}function co({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const uo="components";function ce(e,t){return ho(uo,e,!0,t)||e}const fo=Symbol.for("v-ndc");function ho(e,t,n=!0,s=!1){const r=ve||fe;if(r){const i=r.type;{const l=fl(i,!1);if(l&&(l===t||l===He(t)||l===ln(He(t))))return i}const o=Ls(r[e]||i[e],t)||Ls(r.appContext[e],t);return!o&&s?i:o}}function Ls(e,t){return e&&(e[t]||e[He(t)]||e[ln(He(t))])}const po=e=>e.__isSuspense;function mo(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):so(e)}const go=Symbol.for("v-scx"),vo=()=>zt(go),Gt={};function An(e,t,n){return Or(e,t,n)}function Or(e,t,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:l}=z){if(t&&i){const I=t;t=(...me)=>{I(...me),Q()}}const c=fe,f=I=>s===!0?I:at(I,s===!1?1:void 0);let d,v=!1,p=!1;if(be(e)?(d=()=>e.value,v=In(e)):Et(e)?(d=()=>f(e),v=!0):D(e)?(p=!0,v=e.some(I=>Et(I)||In(I)),d=()=>e.map(I=>{if(be(I))return I.value;if(Et(I))return f(I);if(x(I))return Je(I,c,2)})):x(e)?t?d=()=>Je(e,c,2):d=()=>(R&&R(),we(e,c,3,[k])):d=Re,t&&s){const I=d;d=()=>at(I())}let R,k=I=>{R=W.onStop=()=>{Je(I,c,4),R=W.onStop=void 0}},P;if(mn)if(k=Re,t?n&&we(t,c,3,[d(),p?[]:void 0,k]):d(),r==="sync"){const I=vo();P=I.__watcherHandles||(I.__watcherHandles=[])}else return Re;let re=p?new Array(e.length).fill(Gt):Gt;const X=()=>{if(!(!W.active||!W.dirty))if(t){const I=W.run();(s||v||(p?I.some((me,B)=>ft(me,re[B])):ft(I,re)))&&(R&&R(),we(t,c,3,[I,re===Gt?void 0:p&&re[0]===Gt?[]:re,k]),re=I)}else W.run()};X.allowRecurse=!!t;let te;r==="sync"?te=X:r==="post"?te=()=>ye(X,c&&c.suspense):(X.pre=!0,c&&(X.id=c.uid),te=()=>is(X));const W=new Xn(d,Re,te),K=wi(),Q=()=>{W.stop(),K&&jn(K.effects,W)};return t?n?X():re=W.run():r==="post"?ye(W.run.bind(W),c&&c.suspense):W.run(),P&&P.push(Q),Q}function yo(e,t,n){const s=this.proxy,r=se(e)?e.includes(".")?Hr(s,e):()=>s[e]:e.bind(s,s);let i;x(t)?i=t:(i=t.handler,n=t);const o=It(this),l=Or(r,i.bind(s),n);return o(),l}function Hr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function at(e,t=1/0,n){if(t<=0||!j(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,be(e))at(e.value,t,n);else if(D(e))for(let s=0;s<e.length;s++)at(e[s],t,n);else if(or(e)||vt(e))e.forEach(s=>{at(s,t,n)});else if(cr(e))for(const s in e)at(e[s],t,n);return e}function To(e,t){if(ve===null)return e;const n=gn(ve)||ve.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,l,c=z]=t[r];i&&(x(i)&&(i={mounted:i,updated:i}),i.deep&&at(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return e}function nt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(Ye(),we(c,n,8,[e.el,l,e,t]),Ze())}}const Ue=Symbol("_leaveCb"),Kt=Symbol("_enterCb");function Co(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nr(()=>{e.isMounted=!0}),Gr(()=>{e.isUnmounting=!0}),e}const Se=[Function,Array],Pr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Se,onEnter:Se,onAfterEnter:Se,onEnterCancelled:Se,onBeforeLeave:Se,onLeave:Se,onAfterLeave:Se,onLeaveCancelled:Se,onBeforeAppear:Se,onAppear:Se,onAfterAppear:Se,onAppearCancelled:Se},_o={name:"BaseTransition",props:Pr,setup(e,{slots:t}){const n=ol(),s=Co();return()=>{const r=t.default&&Wr(t.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const p of r)if(p.type!==Ee){i=p;break}}const o=N(e),{mode:l}=o;if(s.isLeaving)return bn(i);const c=Ds(i);if(!c)return bn(i);const f=Hn(c,o,s,n);Pn(c,f);const d=n.subTree,v=d&&Ds(d);if(v&&v.type!==Ee&&!lt(c,v)){const p=Hn(v,o,s,n);if(Pn(v,p),l==="out-in"&&c.type!==Ee)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},bn(i);l==="in-out"&&c.type!==Ee&&(p.delayLeave=(R,k,P)=>{const re=$r(s,v);re[String(v.key)]=v,R[Ue]=()=>{k(),R[Ue]=void 0,delete f.delayedLeave},f.delayedLeave=P})}return i}}},Ao=_o;function $r(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Hn(e,t,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:v,onLeave:p,onAfterLeave:R,onLeaveCancelled:k,onBeforeAppear:P,onAppear:re,onAfterAppear:X,onAppearCancelled:te}=t,W=String(e.key),K=$r(n,e),Q=(B,ee)=>{B&&we(B,s,9,ee)},I=(B,ee)=>{const q=ee[1];Q(B,ee),D(B)?B.every(de=>de.length<=1)&&q():B.length<=1&&q()},me={mode:i,persisted:o,beforeEnter(B){let ee=l;if(!n.isMounted)if(r)ee=P||l;else return;B[Ue]&&B[Ue](!0);const q=K[W];q&&lt(e,q)&&q.el[Ue]&&q.el[Ue](),Q(ee,[B])},enter(B){let ee=c,q=f,de=d;if(!n.isMounted)if(r)ee=re||c,q=X||f,de=te||d;else return;let E=!1;const Y=B[Kt]=_e=>{E||(E=!0,_e?Q(de,[B]):Q(q,[B]),me.delayedLeave&&me.delayedLeave(),B[Kt]=void 0)};ee?I(ee,[B,Y]):Y()},leave(B,ee){const q=String(e.key);if(B[Kt]&&B[Kt](!0),n.isUnmounting)return ee();Q(v,[B]);let de=!1;const E=B[Ue]=Y=>{de||(de=!0,ee(),Y?Q(k,[B]):Q(R,[B]),B[Ue]=void 0,K[q]===e&&delete K[q])};K[q]=e,p?I(p,[B,E]):E()},clone(B){return Hn(B,t,n,s)}};return me}function bn(e){if(dn(e))return e=Xe(e),e.children=null,e}function Ds(e){if(!dn(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&x(n.default))return n.default()}}function Pn(e,t){e.shapeFlag&6&&e.component?Pn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Wr(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ue?(o.patchFlag&128&&r++,s=s.concat(Wr(o.children,t,l))):(t||o.type!==Ee)&&s.push(l!=null?Xe(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Qe(e,t){return x(e)?ne({name:e.name},t,{setup:e}):e}const qt=e=>!!e.type.__asyncLoader,dn=e=>e.type.__isKeepAlive;function bo(e,t){Vr(e,"a",t)}function So(e,t){Vr(e,"da",t)}function Vr(e,t,n=fe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(hn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)dn(r.parent.vnode)&&Ro(s,t,n,r),r=r.parent}}function Ro(e,t,n,s){const r=hn(t,e,s,!0);Kr(()=>{jn(s[t],r)},n)}function hn(e,t,n=fe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ye();const l=It(n),c=we(t,n,e,o);return l(),Ze(),c});return s?r.unshift(i):r.push(i),i}}const We=e=>(t,n=fe)=>(!mn||e==="sp")&&hn(e,(...s)=>t(...s),n),Eo=We("bm"),Nr=We("m"),wo=We("bu"),Lo=We("u"),Gr=We("bum"),Kr=We("um"),Do=We("sp"),Mo=We("rtg"),xo=We("rtc");function ko(e,t=fe){hn("ec",e,t)}function en(e,t,n,s){let r;const i=n;if(D(e)||se(e)){r=new Array(e.length);for(let o=0,l=e.length;o<l;o++)r[o]=t(e[o],o,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i)}else if(j(e))if(e[Symbol.iterator])r=Array.from(e,(o,l)=>t(o,l,void 0,i));else{const o=Object.keys(e);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const f=o[l];r[l]=t(e[f],f,l,i)}}else r=[];return r}const $n=e=>e?oi(e)?gn(e)||e.proxy:$n(e.parent):null,wt=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$n(e.parent),$root:e=>$n(e.root),$emit:e=>e.emit,$options:e=>os(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,is(e.update)}),$nextTick:e=>e.n||(e.n=eo.bind(e.proxy)),$watch:e=>yo.bind(e)}),Sn=(e,t)=>e!==z&&!e.__isScriptSetup&&$(e,t),Bo={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=e;let f;if(t[0]!=="$"){const R=o[t];if(R!==void 0)switch(R){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Sn(s,t))return o[t]=1,s[t];if(r!==z&&$(r,t))return o[t]=2,r[t];if((f=e.propsOptions[0])&&$(f,t))return o[t]=3,i[t];if(n!==z&&$(n,t))return o[t]=4,n[t];Wn&&(o[t]=0)}}const d=wt[t];let v,p;if(d)return t==="$attrs"&&Ce(e.attrs,"get",""),d(e);if((v=l.__cssModules)&&(v=v[t]))return v;if(n!==z&&$(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,$(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Sn(r,t)?(r[t]=n,!0):s!==z&&$(s,t)?(s[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||e!==z&&$(e,o)||Sn(t,o)||(l=i[0])&&$(l,o)||$(s,o)||$(wt,o)||$(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ms(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Wn=!0;function Fo(e){const t=os(e),n=e.proxy,s=e.ctx;Wn=!1,t.beforeCreate&&xs(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:f,created:d,beforeMount:v,mounted:p,beforeUpdate:R,updated:k,activated:P,deactivated:re,beforeDestroy:X,beforeUnmount:te,destroyed:W,unmounted:K,render:Q,renderTracked:I,renderTriggered:me,errorCaptured:B,serverPrefetch:ee,expose:q,inheritAttrs:de,components:E,directives:Y,filters:_e}=t;if(f&&Io(f,s,null),o)for(const Z in o){const U=o[Z];x(U)&&(s[Z]=U.bind(n))}if(r){const Z=r.call(n,n);j(Z)&&(e.data=cn(Z))}if(Wn=!0,i)for(const Z in i){const U=i[Z],et=x(U)?U.bind(n,n):x(U.get)?U.get.bind(n,n):Re,Ot=!x(U)&&x(U.set)?U.set.bind(n):Re,tt=hl({get:et,set:Ot});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>tt.value,set:xe=>tt.value=xe})}if(l)for(const Z in l)Ur(l[Z],s,n,Z);if(c){const Z=x(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(U=>{Vo(U,Z[U])})}d&&xs(d,e,"c");function oe(Z,U){D(U)?U.forEach(et=>Z(et.bind(n))):U&&Z(U.bind(n))}if(oe(Eo,v),oe(Nr,p),oe(wo,R),oe(Lo,k),oe(bo,P),oe(So,re),oe(ko,B),oe(xo,I),oe(Mo,me),oe(Gr,te),oe(Kr,K),oe(Do,ee),D(q))if(q.length){const Z=e.exposed||(e.exposed={});q.forEach(U=>{Object.defineProperty(Z,U,{get:()=>n[U],set:et=>n[U]=et})})}else e.exposed||(e.exposed={});Q&&e.render===Re&&(e.render=Q),de!=null&&(e.inheritAttrs=de),E&&(e.components=E),Y&&(e.directives=Y)}function Io(e,t,n=Re){D(e)&&(e=Vn(e));for(const s in e){const r=e[s];let i;j(r)?"default"in r?i=zt(r.from||s,r.default,!0):i=zt(r.from||s):i=zt(r),be(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function xs(e,t,n){we(D(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ur(e,t,n,s){const r=s.includes(".")?Hr(n,s):()=>n[s];if(se(e)){const i=t[e];x(i)&&An(r,i)}else if(x(e))An(r,e.bind(n));else if(j(e))if(D(e))e.forEach(i=>Ur(i,t,n,s));else{const i=x(e.handler)?e.handler.bind(n):t[e.handler];x(i)&&An(r,i,e)}}function os(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(f=>tn(c,f,o,!0)),tn(c,t,o)),j(t)&&i.set(t,c),c}function tn(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&tn(e,i,n,!0),r&&r.forEach(o=>tn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Oo[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Oo={data:ks,props:Bs,emits:Bs,methods:St,computed:St,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:St,directives:St,watch:Po,provide:ks,inject:Ho};function ks(e,t){return t?e?function(){return ne(x(e)?e.call(this,this):e,x(t)?t.call(this,this):t)}:t:e}function Ho(e,t){return St(Vn(e),Vn(t))}function Vn(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ge(e,t){return e?[...new Set([].concat(e,t))]:t}function St(e,t){return e?ne(Object.create(null),e,t):t}function Bs(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:ne(Object.create(null),Ms(e),Ms(t??{})):t}function Po(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const s in t)n[s]=ge(e[s],t[s]);return n}function qr(){return{app:null,config:{isNativeTag:hi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $o=0;function Wo(e,t){return function(s,r=null){x(s)||(s=ne({},s)),r!=null&&!j(r)&&(r=null);const i=qr(),o=new WeakSet;let l=!1;const c=i.app={_uid:$o++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ml,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&x(f.install)?(o.add(f),f.install(c,...d)):x(f)&&(o.add(f),f(c,...d))),c},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),c},component(f,d){return d?(i.components[f]=d,c):i.components[f]},directive(f,d){return d?(i.directives[f]=d,c):i.directives[f]},mount(f,d,v){if(!l){const p=V(s,r);return p.appContext=i,v===!0?v="svg":v===!1&&(v=void 0),d&&t?t(p,f):e(p,f,v),l=!0,c._container=f,f.__vue_app__=c,gn(p.component)||p.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,d){return i.provides[f]=d,c},runWithContext(f){const d=Lt;Lt=c;try{return f()}finally{Lt=d}}};return c}}let Lt=null;function Vo(e,t){if(fe){let n=fe.provides;const s=fe.parent&&fe.parent.provides;s===n&&(n=fe.provides=Object.create(s)),n[e]=t}}function zt(e,t,n=!1){const s=fe||ve;if(s||Lt){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Lt._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&x(t)?t.call(s&&s.proxy):t}}const zr={},jr=()=>Object.create(zr),Jr=e=>Object.getPrototypeOf(e)===zr;function No(e,t,n,s=!1){const r={},i=jr();e.propsDefaults=Object.create(null),Xr(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:zi(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Go(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=N(r),[c]=e.propsOptions;let f=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let v=0;v<d.length;v++){let p=d[v];if(fn(e.emitsOptions,p))continue;const R=t[p];if(c)if($(i,p))R!==i[p]&&(i[p]=R,f=!0);else{const k=He(p);r[k]=Nn(c,l,k,R,e,!1)}else R!==i[p]&&(i[p]=R,f=!0)}}}else{Xr(e,t,r,i)&&(f=!0);let d;for(const v in l)(!t||!$(t,v)&&((d=Tt(v))===v||!$(t,d)))&&(c?n&&(n[v]!==void 0||n[d]!==void 0)&&(r[v]=Nn(c,l,v,void 0,e,!0)):delete r[v]);if(i!==l)for(const v in i)(!t||!$(t,v))&&(delete i[v],f=!0)}f&&$e(e.attrs,"set","")}function Xr(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(Rt(c))continue;const f=t[c];let d;r&&$(r,d=He(c))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:fn(e.emitsOptions,c)||(!(c in s)||f!==s[c])&&(s[c]=f,o=!0)}if(i){const c=N(n),f=l||z;for(let d=0;d<i.length;d++){const v=i[d];n[v]=Nn(r,c,v,f[v],e,!$(f,v))}}return o}function Nn(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=$(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&x(c)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const d=It(r);s=f[n]=c.call(null,t),d()}}else s=c}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Tt(n))&&(s=!0))}return s}function Yr(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let c=!1;if(!x(e)){const d=v=>{c=!0;const[p,R]=Yr(v,t,!0);ne(o,p),R&&l.push(...R)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return j(e)&&s.set(e,gt),gt;if(D(i))for(let d=0;d<i.length;d++){const v=He(i[d]);Fs(v)&&(o[v]=z)}else if(i)for(const d in i){const v=He(d);if(Fs(v)){const p=i[d],R=o[v]=D(p)||x(p)?{type:p}:ne({},p);if(R){const k=Hs(Boolean,R.type),P=Hs(String,R.type);R[0]=k>-1,R[1]=P<0||k<P,(k>-1||$(R,"default"))&&l.push(v)}}}const f=[o,l];return j(e)&&s.set(e,f),f}function Fs(e){return e[0]!=="$"&&!Rt(e)}function Is(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Os(e,t){return Is(e)===Is(t)}function Hs(e,t){return D(t)?t.findIndex(n=>Os(n,e)):x(t)&&Os(t,e)?0:-1}const Zr=e=>e[0]==="_"||e==="$stable",ls=e=>D(e)?e.map(Ie):[Ie(e)],Ko=(e,t,n)=>{if(t._n)return t;const s=Ir((...r)=>ls(t(...r)),n);return s._c=!1,s},Qr=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Zr(r))continue;const i=e[r];if(x(i))t[r]=Ko(r,i,s);else if(i!=null){const o=ls(i);t[r]=()=>o}}},ei=(e,t)=>{const n=ls(t);e.slots.default=()=>n},Uo=(e,t)=>{const n=e.slots=jr();if(e.vnode.shapeFlag&32){const s=t._;s?(ne(n,t),ur(n,"_",s,!0)):Qr(t,n)}else t&&ei(e,t)},qo=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=z;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(ne(r,t),!n&&l===1&&delete r._):(i=!t.$stable,Qr(t,r)),o=t}else t&&(ei(e,t),o={default:1});if(i)for(const l in r)!Zr(l)&&o[l]==null&&delete r[l]};function Gn(e,t,n,s,r=!1){if(D(e)){e.forEach((p,R)=>Gn(p,t&&(D(t)?t[R]:t),n,s,r));return}if(qt(s)&&!r)return;const i=s.shapeFlag&4?gn(s.component)||s.component.proxy:s.el,o=r?null:i,{i:l,r:c}=e,f=t&&t.r,d=l.refs===z?l.refs={}:l.refs,v=l.setupState;if(f!=null&&f!==c&&(se(f)?(d[f]=null,$(v,f)&&(v[f]=null)):be(f)&&(f.value=null)),x(c))Je(c,l,12,[o,d]);else{const p=se(c),R=be(c);if(p||R){const k=()=>{if(e.f){const P=p?$(v,c)?v[c]:d[c]:c.value;r?D(P)&&jn(P,i):D(P)?P.includes(i)||P.push(i):p?(d[c]=[i],$(v,c)&&(v[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else p?(d[c]=o,$(v,c)&&(v[c]=o)):R&&(c.value=o,e.k&&(d[e.k]=o))};o?(k.id=-1,ye(k,n)):k()}}}const ye=mo;function zo(e){return jo(e)}function jo(e,t){const n=fr();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:f,setElementText:d,parentNode:v,nextSibling:p,setScopeId:R=Re,insertStaticContent:k}=e,P=(a,u,h,m=null,g=null,C=null,A=void 0,T=null,_=!!u.dynamicChildren)=>{if(a===u)return;a&&!lt(a,u)&&(m=Ht(a),xe(a,g,C,!0),a=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:y,ref:S,shapeFlag:L}=u;switch(y){case pn:re(a,u,h,m);break;case Ee:X(a,u,h,m);break;case jt:a==null&&te(u,h,m,A);break;case ue:E(a,u,h,m,g,C,A,T,_);break;default:L&1?Q(a,u,h,m,g,C,A,T,_):L&6?Y(a,u,h,m,g,C,A,T,_):(L&64||L&128)&&y.process(a,u,h,m,g,C,A,T,_,_t)}S!=null&&g&&Gn(S,a&&a.ref,C,u||a,!u)},re=(a,u,h,m)=>{if(a==null)s(u.el=l(u.children),h,m);else{const g=u.el=a.el;u.children!==a.children&&f(g,u.children)}},X=(a,u,h,m)=>{a==null?s(u.el=c(u.children||""),h,m):u.el=a.el},te=(a,u,h,m)=>{[a.el,a.anchor]=k(a.children,u,h,m,a.el,a.anchor)},W=({el:a,anchor:u},h,m)=>{let g;for(;a&&a!==u;)g=p(a),s(a,h,m),a=g;s(u,h,m)},K=({el:a,anchor:u})=>{let h;for(;a&&a!==u;)h=p(a),r(a),a=h;r(u)},Q=(a,u,h,m,g,C,A,T,_)=>{u.type==="svg"?A="svg":u.type==="math"&&(A="mathml"),a==null?I(u,h,m,g,C,A,T,_):ee(a,u,g,C,A,T,_)},I=(a,u,h,m,g,C,A,T)=>{let _,y;const{props:S,shapeFlag:L,transition:w,dirs:M}=a;if(_=a.el=o(a.type,C,S&&S.is,S),L&8?d(_,a.children):L&16&&B(a.children,_,null,m,g,Rn(a,C),A,T),M&&nt(a,null,m,"created"),me(_,a,a.scopeId,A,m),S){for(const G in S)G!=="value"&&!Rt(G)&&i(_,G,null,S[G],C,a.children,m,g,Pe);"value"in S&&i(_,"value",null,S.value,C),(y=S.onVnodeBeforeMount)&&Be(y,m,a)}M&&nt(a,null,m,"beforeMount");const O=Jo(g,w);O&&w.beforeEnter(_),s(_,u,h),((y=S&&S.onVnodeMounted)||O||M)&&ye(()=>{y&&Be(y,m,a),O&&w.enter(_),M&&nt(a,null,m,"mounted")},g)},me=(a,u,h,m,g)=>{if(h&&R(a,h),m)for(let C=0;C<m.length;C++)R(a,m[C]);if(g){let C=g.subTree;if(u===C){const A=g.vnode;me(a,A,A.scopeId,A.slotScopeIds,g.parent)}}},B=(a,u,h,m,g,C,A,T,_=0)=>{for(let y=_;y<a.length;y++){const S=a[y]=T?qe(a[y]):Ie(a[y]);P(null,S,u,h,m,g,C,A,T)}},ee=(a,u,h,m,g,C,A)=>{const T=u.el=a.el;let{patchFlag:_,dynamicChildren:y,dirs:S}=u;_|=a.patchFlag&16;const L=a.props||z,w=u.props||z;let M;if(h&&st(h,!1),(M=w.onVnodeBeforeUpdate)&&Be(M,h,u,a),S&&nt(u,a,h,"beforeUpdate"),h&&st(h,!0),y?q(a.dynamicChildren,y,T,h,m,Rn(u,g),C):A||U(a,u,T,null,h,m,Rn(u,g),C,!1),_>0){if(_&16)de(T,u,L,w,h,m,g);else if(_&2&&L.class!==w.class&&i(T,"class",null,w.class,g),_&4&&i(T,"style",L.style,w.style,g),_&8){const O=u.dynamicProps;for(let G=0;G<O.length;G++){const J=O[G],le=L[J],Le=w[J];(Le!==le||J==="value")&&i(T,J,le,Le,g,a.children,h,m,Pe)}}_&1&&a.children!==u.children&&d(T,u.children)}else!A&&y==null&&de(T,u,L,w,h,m,g);((M=w.onVnodeUpdated)||S)&&ye(()=>{M&&Be(M,h,u,a),S&&nt(u,a,h,"updated")},m)},q=(a,u,h,m,g,C,A)=>{for(let T=0;T<u.length;T++){const _=a[T],y=u[T],S=_.el&&(_.type===ue||!lt(_,y)||_.shapeFlag&70)?v(_.el):h;P(_,y,S,null,m,g,C,A,!0)}},de=(a,u,h,m,g,C,A)=>{if(h!==m){if(h!==z)for(const T in h)!Rt(T)&&!(T in m)&&i(a,T,h[T],null,A,u.children,g,C,Pe);for(const T in m){if(Rt(T))continue;const _=m[T],y=h[T];_!==y&&T!=="value"&&i(a,T,y,_,A,u.children,g,C,Pe)}"value"in m&&i(a,"value",h.value,m.value,A)}},E=(a,u,h,m,g,C,A,T,_)=>{const y=u.el=a?a.el:l(""),S=u.anchor=a?a.anchor:l("");let{patchFlag:L,dynamicChildren:w,slotScopeIds:M}=u;M&&(T=T?T.concat(M):M),a==null?(s(y,h,m),s(S,h,m),B(u.children||[],h,S,g,C,A,T,_)):L>0&&L&64&&w&&a.dynamicChildren?(q(a.dynamicChildren,w,h,g,C,A,T),(u.key!=null||g&&u===g.subTree)&&ti(a,u,!0)):U(a,u,h,S,g,C,A,T,_)},Y=(a,u,h,m,g,C,A,T,_)=>{u.slotScopeIds=T,a==null?u.shapeFlag&512?g.ctx.activate(u,h,m,A,_):_e(u,h,m,g,C,A,_):Ct(a,u,_)},_e=(a,u,h,m,g,C,A)=>{const T=a.component=il(a,m,g);if(dn(a)&&(T.ctx.renderer=_t),ll(T),T.asyncDep){if(g&&g.registerDep(T,oe),!a.el){const _=T.subTree=V(Ee);X(null,_,u,h)}}else oe(T,a,u,h,g,C,A)},Ct=(a,u,h)=>{const m=u.component=a.component;if(ao(a,u,h))if(m.asyncDep&&!m.asyncResolved){Z(m,u,h);return}else m.next=u,no(m.update),m.effect.dirty=!0,m.update();else u.el=a.el,m.vnode=u},oe=(a,u,h,m,g,C,A)=>{const T=()=>{if(a.isMounted){let{next:S,bu:L,u:w,parent:M,vnode:O}=a;{const pt=ni(a);if(pt){S&&(S.el=O.el,Z(a,S,A)),pt.asyncDep.then(()=>{a.isUnmounted||T()});return}}let G=S,J;st(a,!1),S?(S.el=O.el,Z(a,S,A)):S=O,L&&Ut(L),(J=S.props&&S.props.onVnodeBeforeUpdate)&&Be(J,M,S,O),st(a,!0);const le=_n(a),Le=a.subTree;a.subTree=le,P(Le,le,v(Le.el),Ht(Le),a,g,C),S.el=le.el,G===null&&co(a,le.el),w&&ye(w,g),(J=S.props&&S.props.onVnodeUpdated)&&ye(()=>Be(J,M,S,O),g)}else{let S;const{el:L,props:w}=u,{bm:M,m:O,parent:G}=a,J=qt(u);if(st(a,!1),M&&Ut(M),!J&&(S=w&&w.onVnodeBeforeMount)&&Be(S,G,u),st(a,!0),L&&ps){const le=()=>{a.subTree=_n(a),ps(L,a.subTree,a,g,null)};J?u.type.__asyncLoader().then(()=>!a.isUnmounted&&le()):le()}else{const le=a.subTree=_n(a);P(null,le,h,m,a,g,C),u.el=le.el}if(O&&ye(O,g),!J&&(S=w&&w.onVnodeMounted)){const le=u;ye(()=>Be(S,G,le),g)}(u.shapeFlag&256||G&&qt(G.vnode)&&G.vnode.shapeFlag&256)&&a.a&&ye(a.a,g),a.isMounted=!0,u=h=m=null}},_=a.effect=new Xn(T,Re,()=>is(y),a.scope),y=a.update=()=>{_.dirty&&_.run()};y.id=a.uid,st(a,!0),y()},Z=(a,u,h)=>{u.component=a;const m=a.vnode.props;a.vnode=u,a.next=null,Go(a,u.props,m,h),qo(a,u.children,h),Ye(),Es(a),Ze()},U=(a,u,h,m,g,C,A,T,_=!1)=>{const y=a&&a.children,S=a?a.shapeFlag:0,L=u.children,{patchFlag:w,shapeFlag:M}=u;if(w>0){if(w&128){Ot(y,L,h,m,g,C,A,T,_);return}else if(w&256){et(y,L,h,m,g,C,A,T,_);return}}M&8?(S&16&&Pe(y,g,C),L!==y&&d(h,L)):S&16?M&16?Ot(y,L,h,m,g,C,A,T,_):Pe(y,g,C,!0):(S&8&&d(h,""),M&16&&B(L,h,m,g,C,A,T,_))},et=(a,u,h,m,g,C,A,T,_)=>{a=a||gt,u=u||gt;const y=a.length,S=u.length,L=Math.min(y,S);let w;for(w=0;w<L;w++){const M=u[w]=_?qe(u[w]):Ie(u[w]);P(a[w],M,h,null,g,C,A,T,_)}y>S?Pe(a,g,C,!0,!1,L):B(u,h,m,g,C,A,T,_,L)},Ot=(a,u,h,m,g,C,A,T,_)=>{let y=0;const S=u.length;let L=a.length-1,w=S-1;for(;y<=L&&y<=w;){const M=a[y],O=u[y]=_?qe(u[y]):Ie(u[y]);if(lt(M,O))P(M,O,h,null,g,C,A,T,_);else break;y++}for(;y<=L&&y<=w;){const M=a[L],O=u[w]=_?qe(u[w]):Ie(u[w]);if(lt(M,O))P(M,O,h,null,g,C,A,T,_);else break;L--,w--}if(y>L){if(y<=w){const M=w+1,O=M<S?u[M].el:m;for(;y<=w;)P(null,u[y]=_?qe(u[y]):Ie(u[y]),h,O,g,C,A,T,_),y++}}else if(y>w)for(;y<=L;)xe(a[y],g,C,!0),y++;else{const M=y,O=y,G=new Map;for(y=O;y<=w;y++){const Ae=u[y]=_?qe(u[y]):Ie(u[y]);Ae.key!=null&&G.set(Ae.key,y)}let J,le=0;const Le=w-O+1;let pt=!1,ms=0;const At=new Array(Le);for(y=0;y<Le;y++)At[y]=0;for(y=M;y<=L;y++){const Ae=a[y];if(le>=Le){xe(Ae,g,C,!0);continue}let ke;if(Ae.key!=null)ke=G.get(Ae.key);else for(J=O;J<=w;J++)if(At[J-O]===0&&lt(Ae,u[J])){ke=J;break}ke===void 0?xe(Ae,g,C,!0):(At[ke-O]=y+1,ke>=ms?ms=ke:pt=!0,P(Ae,u[ke],h,null,g,C,A,T,_),le++)}const gs=pt?Xo(At):gt;for(J=gs.length-1,y=Le-1;y>=0;y--){const Ae=O+y,ke=u[Ae],vs=Ae+1<S?u[Ae+1].el:m;At[y]===0?P(null,ke,h,vs,g,C,A,T,_):pt&&(J<0||y!==gs[J]?tt(ke,h,vs,2):J--)}}},tt=(a,u,h,m,g=null)=>{const{el:C,type:A,transition:T,children:_,shapeFlag:y}=a;if(y&6){tt(a.component.subTree,u,h,m);return}if(y&128){a.suspense.move(u,h,m);return}if(y&64){A.move(a,u,h,_t);return}if(A===ue){s(C,u,h);for(let L=0;L<_.length;L++)tt(_[L],u,h,m);s(a.anchor,u,h);return}if(A===jt){W(a,u,h);return}if(m!==2&&y&1&&T)if(m===0)T.beforeEnter(C),s(C,u,h),ye(()=>T.enter(C),g);else{const{leave:L,delayLeave:w,afterLeave:M}=T,O=()=>s(C,u,h),G=()=>{L(C,()=>{O(),M&&M()})};w?w(C,O,G):G()}else s(C,u,h)},xe=(a,u,h,m=!1,g=!1)=>{const{type:C,props:A,ref:T,children:_,dynamicChildren:y,shapeFlag:S,patchFlag:L,dirs:w}=a;if(T!=null&&Gn(T,null,h,a,!0),S&256){u.ctx.deactivate(a);return}const M=S&1&&w,O=!qt(a);let G;if(O&&(G=A&&A.onVnodeBeforeUnmount)&&Be(G,u,a),S&6)di(a.component,h,m);else{if(S&128){a.suspense.unmount(h,m);return}M&&nt(a,null,u,"beforeUnmount"),S&64?a.type.remove(a,u,h,g,_t,m):y&&(C!==ue||L>0&&L&64)?Pe(y,u,h,!1,!0):(C===ue&&L&384||!g&&S&16)&&Pe(_,u,h),m&&fs(a)}(O&&(G=A&&A.onVnodeUnmounted)||M)&&ye(()=>{G&&Be(G,u,a),M&&nt(a,null,u,"unmounted")},h)},fs=a=>{const{type:u,el:h,anchor:m,transition:g}=a;if(u===ue){fi(h,m);return}if(u===jt){K(a);return}const C=()=>{r(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(a.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:T}=g,_=()=>A(h,C);T?T(a.el,C,_):_()}else C()},fi=(a,u)=>{let h;for(;a!==u;)h=p(a),r(a),a=h;r(u)},di=(a,u,h)=>{const{bum:m,scope:g,update:C,subTree:A,um:T}=a;m&&Ut(m),g.stop(),C&&(C.active=!1,xe(A,a,u,h)),T&&ye(T,u),ye(()=>{a.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Pe=(a,u,h,m=!1,g=!1,C=0)=>{for(let A=C;A<a.length;A++)xe(a[A],u,h,m,g)},Ht=a=>a.shapeFlag&6?Ht(a.component.subTree):a.shapeFlag&128?a.suspense.next():p(a.anchor||a.el);let vn=!1;const ds=(a,u,h)=>{a==null?u._vnode&&xe(u._vnode,null,null,!0):P(u._vnode||null,a,u,null,null,null,h),vn||(vn=!0,Es(),xr(),vn=!1),u._vnode=a},_t={p:P,um:xe,m:tt,r:fs,mt:_e,mc:B,pc:U,pbc:q,n:Ht,o:e};let hs,ps;return{render:ds,hydrate:hs,createApp:Wo(ds,hs)}}function Rn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function st({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Jo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ti(e,t,n=!1){const s=e.children,r=t.children;if(D(s)&&D(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=qe(r[i]),l.el=o.el),n||ti(o,l)),l.type===pn&&(l.el=o.el)}}function Xo(e){const t=e.slice(),n=[0];let s,r,i,o,l;const c=e.length;for(s=0;s<c;s++){const f=e[s];if(f!==0){if(r=n[n.length-1],e[r]<f){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<f?i=l+1:o=l;f<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function ni(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ni(t)}const Yo=e=>e.__isTeleport,ue=Symbol.for("v-fgt"),pn=Symbol.for("v-txt"),Ee=Symbol.for("v-cmt"),jt=Symbol.for("v-stc"),Dt=[];let Me=null;function F(e=!1){Dt.push(Me=e?null:[])}function Zo(){Dt.pop(),Me=Dt[Dt.length-1]||null}let kt=1;function Ps(e){kt+=e}function si(e){return e.dynamicChildren=kt>0?Me||gt:null,Zo(),kt>0&&Me&&Me.push(e),e}function H(e,t,n,s,r,i){return si(b(e,t,n,s,r,i,!0))}function ri(e,t,n,s,r){return si(V(e,t,n,s,r,!0))}function Kn(e){return e?e.__v_isVNode===!0:!1}function lt(e,t){return e.type===t.type&&e.key===t.key}const ii=({key:e})=>e??null,Jt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||be(e)||x(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function b(e,t=null,n=null,s=0,r=null,i=e===ue?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ii(t),ref:t&&Jt(t),scopeId:Fr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ve};return l?(as(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=se(n)?8:16),kt>0&&!o&&Me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Me.push(c),c}const V=Qo;function Qo(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===fo)&&(e=Ee),Kn(e)){const l=Xe(e,t,!0);return n&&as(l,n),kt>0&&!i&&Me&&(l.shapeFlag&6?Me[Me.indexOf(e)]=l:Me.push(l)),l.patchFlag|=-2,l}if(dl(e)&&(e=e.__vccOpts),t){t=el(t);let{class:l,style:c}=t;l&&!se(l)&&(t.class=Te(l)),j(c)&&(Er(c)&&!D(c)&&(c=ne({},c)),t.style=Ft(c))}const o=se(e)?1:po(e)?128:Yo(e)?64:j(e)?4:x(e)?2:0;return b(e,t,n,s,r,o,i,!0)}function el(e){return e?Er(e)||Jr(e)?ne({},e):e:null}function Xe(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=e,f=t?nl(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&ii(f),ref:t&&t.ref?n&&i?D(i)?i.concat(Jt(t)):[i,Jt(t)]:Jt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&(d.transition=c.clone(d)),d}function dt(e=" ",t=0){return V(pn,null,e,t)}function tl(e,t){const n=V(jt,null,e);return n.staticCount=t,n}function Fe(e="",t=!1){return t?(F(),ri(Ee,null,e)):V(Ee,null,e)}function Ie(e){return e==null||typeof e=="boolean"?V(Ee):D(e)?V(ue,null,e.slice()):typeof e=="object"?qe(e):V(pn,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xe(e)}function as(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),as(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Jr(t)?t._ctx=ve:r===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else x(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),s&64?(n=16,t=[dt(t)]):n=8);e.children=t,e.shapeFlag|=n}function nl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Te([t.class,s.class]));else if(r==="style")t.style=Ft([t.style,s.style]);else if(sn(r)){const i=t[r],o=s[r];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function Be(e,t,n,s=null){we(e,t,7,[n,s])}const sl=qr();let rl=0;function il(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||sl,i={uid:rl++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ri(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yr(s,r),emitsOptions:Br(s,r),emit:null,emitted:null,propsDefaults:z,inheritAttrs:s.inheritAttrs,ctx:z,data:z,props:z,attrs:z,slots:z,refs:z,setupState:z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=io.bind(null,i),e.ce&&e.ce(i),i}let fe=null;const ol=()=>fe||ve;let nn,Un;{const e=fr(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};nn=t("__VUE_INSTANCE_SETTERS__",n=>fe=n),Un=t("__VUE_SSR_SETTERS__",n=>mn=n)}const It=e=>{const t=fe;return nn(e),e.scope.on(),()=>{e.scope.off(),nn(t)}},$s=()=>{fe&&fe.scope.off(),nn(null)};function oi(e){return e.vnode.shapeFlag&4}let mn=!1;function ll(e,t=!1){t&&Un(t);const{props:n,children:s}=e.vnode,r=oi(e);No(e,n,r,t),Uo(e,s);const i=r?al(e,t):void 0;return t&&Un(!1),i}function al(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Bo);const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?ul(e):null,i=It(e);Ye();const o=Je(s,e,0,[e.props,r]);if(Ze(),i(),lr(o)){if(o.then($s,$s),t)return o.then(l=>{Ws(e,l,t)}).catch(l=>{un(l,e,0)});e.asyncDep=o}else Ws(e,o,t)}else li(e,t)}function Ws(e,t,n){x(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:j(t)&&(e.setupState=Lr(t)),li(e,n)}let Vs;function li(e,t,n){const s=e.type;if(!e.render){if(!t&&Vs&&!s.render){const r=s.template||os(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,f=ne(ne({isCustomElement:i,delimiters:l},o),c);s.render=Vs(r,f)}}e.render=s.render||Re}{const r=It(e);Ye();try{Fo(e)}finally{Ze(),r()}}}const cl={get(e,t){return Ce(e,"get",""),e[t]}};function ul(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,cl),slots:e.slots,emit:e.emit,expose:t}}function gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Lr(ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wt)return wt[n](e)},has(t,n){return n in t||n in wt}}))}function fl(e,t=!0){return x(e)?e.displayName||e.name:e.name||t&&e.__name}function dl(e){return x(e)&&"__vccOpts"in e}const hl=(e,t)=>Ji(e,t,mn);function pl(e,t,n){const s=arguments.length;return s===2?j(t)&&!D(t)?Kn(t)?V(e,null,[t]):V(e,t):V(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Kn(n)&&(n=[n]),V(e,t,n))}const ml="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const gl="http://www.w3.org/2000/svg",vl="http://www.w3.org/1998/Math/MathML",ze=typeof document<"u"?document:null,Ns=ze&&ze.createElement("template"),yl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?ze.createElementNS(gl,e):t==="mathml"?ze.createElementNS(vl,e):ze.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>ze.createTextNode(e),createComment:e=>ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ns.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const l=Ns.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ne="transition",bt="animation",Bt=Symbol("_vtc"),cs=(e,{slots:t})=>pl(Ao,Tl(e),t);cs.displayName="Transition";const ai={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};cs.props=ne({},Pr,ai);const rt=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},Gs=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function Tl(e){const t={};for(const E in e)E in ai||(t[E]=e[E]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:f=o,appearToClass:d=l,leaveFromClass:v=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:R=`${n}-leave-to`}=e,k=Cl(r),P=k&&k[0],re=k&&k[1],{onBeforeEnter:X,onEnter:te,onEnterCancelled:W,onLeave:K,onLeaveCancelled:Q,onBeforeAppear:I=X,onAppear:me=te,onAppearCancelled:B=W}=t,ee=(E,Y,_e)=>{it(E,Y?d:l),it(E,Y?f:o),_e&&_e()},q=(E,Y)=>{E._isLeaving=!1,it(E,v),it(E,R),it(E,p),Y&&Y()},de=E=>(Y,_e)=>{const Ct=E?me:te,oe=()=>ee(Y,E,_e);rt(Ct,[Y,oe]),Ks(()=>{it(Y,E?c:i),Ge(Y,E?d:l),Gs(Ct)||Us(Y,s,P,oe)})};return ne(t,{onBeforeEnter(E){rt(X,[E]),Ge(E,i),Ge(E,o)},onBeforeAppear(E){rt(I,[E]),Ge(E,c),Ge(E,f)},onEnter:de(!1),onAppear:de(!0),onLeave(E,Y){E._isLeaving=!0;const _e=()=>q(E,Y);Ge(E,v),Ge(E,p),bl(),Ks(()=>{E._isLeaving&&(it(E,v),Ge(E,R),Gs(K)||Us(E,s,re,_e))}),rt(K,[E,_e])},onEnterCancelled(E){ee(E,!1),rt(W,[E])},onAppearCancelled(E){ee(E,!0),rt(B,[E])},onLeaveCancelled(E){q(E),rt(Q,[E])}})}function Cl(e){if(e==null)return null;if(j(e))return[En(e.enter),En(e.leave)];{const t=En(e);return[t,t]}}function En(e){return yi(e)}function Ge(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Bt]||(e[Bt]=new Set)).add(t)}function it(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Bt];n&&(n.delete(t),n.size||(e[Bt]=void 0))}function Ks(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let _l=0;function Us(e,t,n,s){const r=e._endId=++_l,i=()=>{r===e._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Al(e,t);if(!o)return s();const f=o+"end";let d=0;const v=()=>{e.removeEventListener(f,p),i()},p=R=>{R.target===e&&++d>=c&&v()};setTimeout(()=>{d<c&&v()},l+1),e.addEventListener(f,p)}function Al(e,t){const n=window.getComputedStyle(e),s=k=>(n[k]||"").split(", "),r=s(`${Ne}Delay`),i=s(`${Ne}Duration`),o=qs(r,i),l=s(`${bt}Delay`),c=s(`${bt}Duration`),f=qs(l,c);let d=null,v=0,p=0;t===Ne?o>0&&(d=Ne,v=o,p=i.length):t===bt?f>0&&(d=bt,v=f,p=c.length):(v=Math.max(o,f),d=v>0?o>f?Ne:bt:null,p=d?d===Ne?i.length:c.length:0);const R=d===Ne&&/\b(transform|all)(,|$)/.test(s(`${Ne}Property`).toString());return{type:d,timeout:v,propCount:p,hasTransform:R}}function qs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>zs(n)+zs(e[s])))}function zs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function bl(){return document.body.offsetHeight}function Sl(e,t,n){const s=e[Bt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const js=Symbol("_vod"),Rl=Symbol("_vsh"),El=Symbol(""),wl=/(^|;)\s*display\s*:/;function Ll(e,t,n){const s=e.style,r=se(n);let i=!1;if(n&&!r){if(t)if(se(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Xt(s,l,"")}else for(const o in t)n[o]==null&&Xt(s,o,"");for(const o in n)o==="display"&&(i=!0),Xt(s,o,n[o])}else if(r){if(t!==n){const o=s[El];o&&(n+=";"+o),s.cssText=n,i=wl.test(n)}}else t&&e.removeAttribute("style");js in e&&(e[js]=i?s.display:"",e[Rl]&&(s.display="none"))}const Js=/\s*!important$/;function Xt(e,t,n){if(D(n))n.forEach(s=>Xt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Dl(e,t);Js.test(n)?e.setProperty(Tt(s),n.replace(Js,""),"important"):e[s]=n}}const Xs=["Webkit","Moz","ms"],wn={};function Dl(e,t){const n=wn[t];if(n)return n;let s=He(t);if(s!=="filter"&&s in e)return wn[t]=s;s=ln(s);for(let r=0;r<Xs.length;r++){const i=Xs[r]+s;if(i in e)return wn[t]=i}return t}const Ys="http://www.w3.org/1999/xlink";function Ml(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ys,t.slice(6,t.length)):e.setAttributeNS(Ys,t,n);else{const i=Si(t);n==null||i&&!dr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xl(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?e.getAttribute("value")||"":e.value,d=n??"";(f!==d||!("_value"in e))&&(e.value=d),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=dr(n):n==null&&f==="string"?(n="",c=!0):f==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function mt(e,t,n,s){e.addEventListener(t,n,s)}function kl(e,t,n,s){e.removeEventListener(t,n,s)}const Zs=Symbol("_vei");function Bl(e,t,n,s,r=null){const i=e[Zs]||(e[Zs]={}),o=i[t];if(s&&o)o.value=s;else{const[l,c]=Fl(t);if(s){const f=i[t]=Hl(s,r);mt(e,l,f,c)}else o&&(kl(e,l,o,c),i[t]=void 0)}}const Qs=/(?:Once|Passive|Capture)$/;function Fl(e){let t;if(Qs.test(e)){t={};let s;for(;s=e.match(Qs);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),t]}let Ln=0;const Il=Promise.resolve(),Ol=()=>Ln||(Il.then(()=>Ln=0),Ln=Date.now());function Hl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;we(Pl(s,n.value),t,5,[s])};return n.value=e,n.attached=Ol(),n}function Pl(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const er=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$l=(e,t,n,s,r,i,o,l,c)=>{const f=r==="svg";t==="class"?Sl(e,s,f):t==="style"?Ll(e,n,s):sn(t)?zn(t)||Bl(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wl(e,t,s,f))?xl(e,t,s,i,o,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ml(e,t,s,f))};function Wl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&er(t)&&x(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return er(t)&&se(n)?!1:t in e}const tr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>Ut(t,n):t};function Vl(e){e.target.composing=!0}function nr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Dn=Symbol("_assign"),Nl={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Dn]=tr(r);const i=s||r.props&&r.props.type==="number";mt(e,t?"change":"input",o=>{if(o.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=Mn(l)),e[Dn](l)}),n&&mt(e,"change",()=>{e.value=e.value.trim()}),t||(mt(e,"compositionstart",Vl),mt(e,"compositionend",nr),mt(e,"change",nr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e[Dn]=tr(i),e.composing)return;const o=(r||e.type==="number")&&!/^0\d/.test(e.value)?Mn(e.value):e.value,l=t??"";o!==l&&(document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===l)||(e.value=l))}},Gl=["ctrl","shift","alt","meta"],Kl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Gl.some(n=>e[`${n}Key`]&&!t.includes(n))},us=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<t.length;o++){const l=Kl[t[o]];if(l&&l(r,t))return}return e(r,...i)})},Ul=ne({patchProp:$l},yl);let sr;function ql(){return sr||(sr=zo(Ul))}const zl=(...e)=>{const t=ql().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Jl(s);if(!r)return;const i=t._component;!x(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,jl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function jl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jl(e){return se(e)?document.querySelector(e):e}const Xl={class:"markdown-body"},Yl=tl('<h2>What is it?</h2><p>The Runewizard lets you check easily what runewords you can make with the runes you have found.</p><p>Click on the runes to mark which ones you have found. The available runewords will be highlighted automatically.</p><p>The table can be sorted : try clicking on the table headings, you may find it useful!</p><h2>Runes</h2><p>The runes are listed in order of rarity, from top to bottom, and left to right. Each vertical group of rune represents roughly <strong>Common</strong>, <strong>Semi-Rare</strong>, and <strong>Extremely Rare</strong> runes. Note that the order is consistent with the <a href="http://classic.battle.net/diablo2exp/items/cube.shtml">rune upgrade formulas</a> for the Horadric Cube. For example: 3 x Tal = 1 x Ral rune.</p><h2>Runewords</h2><p><strong>Ladder-only runewords</strong> have a small <span class="rw-Md-ladder">L</span> icon next to the name.</p><h2>Note about storage</h2><p>Your selection of runes is saved in the browser’s <em>local storage</em>. Keep in mind that manually clearing your browser cache may reset the selected runes.</p>',10),Zl=[Yl],Ql={__name:"HelpText",setup(e,{expose:t}){return t({frontmatter:{}}),(s,r)=>(F(),H("div",Xl,Zl))}},ea=Qe({name:"HelpBox",components:{HelpText:Ql}}),pe=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},ta={class:"rw-Help text-md"};function na(e,t,n,s,r,i){const o=ce("HelpText");return F(),H("div",ta,[V(o,{class:""})])}const sa=pe(ea,[["render",na]]),ra={name:"PhChatsBold"},ia={width:"1em",height:"1em",viewBox:"0 0 256 256"},oa=b("path",{d:"M236 96a20.023 20.023 0 0 0-20-20h-27.999V48a20.023 20.023 0 0 0-20-20h-128a20.023 20.023 0 0 0-20 20v128a12 12 0 0 0 19.544 9.332L68 162.328V184a20.023 20.023 0 0 0 20 20h92.173l36.283 29.332A12 12 0 0 0 236.001 224zM44.001 150.868V52h120v35.981l-.001.02l.001.019V132H71.583a11.999 11.999 0 0 0-7.544 2.668zm147.96 31.8a11.999 11.999 0 0 0-7.543-2.668H92.001v-24h76a20.023 20.023 0 0 0 20-20v-36H212l.001 98.868z",fill:"currentColor"},null,-1),la=[oa];function aa(e,t,n,s,r,i){return F(),H("svg",ia,la)}const ca=pe(ra,[["render",aa]]),ua={name:"FaSolidChevronDown"},fa={width:"0.88em",height:"1em",viewBox:"0 0 448 512"},da=b("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",fill:"currentColor"},null,-1),ha=[da];function pa(e,t,n,s,r,i){return F(),H("svg",fa,ha)}const ma=pe(ua,[["render",pa]]),ga=Qe({name:"AppHeader",components:{HelpBox:sa,IconChat:ca,IconChevronDown:ma},data(){return{isHelpVisible:!1,envGameName:"Diablo II LoD & Resurrected",envGameVersion:"2.6",envGithubRepoUrl:"https://github.com/fabd/diablo2-runewizard",envPatchNotesUrl:"https://news.blizzard.com/en-us/diablo2/23899624/diablo-ii-resurrected-ladder-season-three-now-live"}}}),va="/BTDiablo-runewizard/assets/logo-rune-CI8Fl1wU.png",ya="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAAAgCAMAAABw1N62AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFdQTFRFt6+XAAAAubOWubGWurGXubCXurCXu7GXv6+furGXurCWurGYu6+XurCWubGXurGWurCXubGXurKXuq+Vu7KWurKWu7KYurCXubGXubCWurCWubGWubGW27u9qQAAAB10Uk5TIABQoP/fv38QkO9vQOCAwJ+wYDBwP0/w0K/Pj19U6DckAAAF80lEQVR4nO2a63ajOAyAHTAJoQQKpANN9v2fcyUbX3RxmnTndOfsWf1KAFvyJ1mWDcYc/penxVS13aU5ntp/25w/XCC0zjZK9/YzWvs/rqPnBGhV1l6GYahH5PX+I1qn39XR8NxsqH6TOqDVWzu63y1G2Uxut8MJZeHNru5yMKJ3/7J5XLn/V9LE9+Tk3YbuT7F7438a3r2/3BcUDc2JCVW6N+sUqG0w6O1D3u2zHn+l2zktsBImI0v7QHBUdEFArunJ9mLtOb9tVmuZQ20usSFmTe8LM8HPoAl+rzuhzdotTjhUVGedDpaLRmu0g3I1S0EyYaOiKJ9BP6UF/fJBwl1VVdbIW01TyJiIxAYKLffgHs7tFsAdDsfUX2PXLLTPVJGglRsVZIEVTBsCDO0yjuOKK5woDUDRNu53rT16nIzWVbB5mhZ1qkYr9tOv6bKx9pZUHeOvEEEz1c/cMgzZMNsu4c6lFgmGmoQBfuP3oiJTYQw2rmNGqxfeeZoWNfQhrUM+mc5pKFOwEEIrUIDQyqcJp5VrmHRTwR+rHlzxeeFsqmiBqO9ccqWEZpZ/XqHV5bge08rH36ahmD24+mQFCy055YmlF22JrO1aiQTDTLqIKUwVgUtxpWC0zt+fiRTXY1rcrhBctTfxFuOpbezlwSBygUfVWzA/z0DjqI4hmDTZTlqV9za53EBpQT60LN89TWskuF6gJYIri6eBZ5wyLbijlnEDDmlWmyU9Z2EuUwRGwn9Cy9zo+ozy/JpY5+UHo2VaQovmYh5cKVVBXNDQKtMCR6/aPIQucEirhjKZNNqN3eOKKkSTaLUfd1hTNq7xhQoCl5bQnNHq52KWF8H1KLTKtEa91ApRNYhJc8hoLTJKhCI00tOKIt3zSr2V4eK0mjfYVX14ebuzlDokHRigD0KrSOuql1oxf7eSR6JlGslSqyAXQmtVtl0vVadjxMVpPa4hLzbsTTA/xCAZ5FJWoFUqtTC0fHTWSnB5B/7COSXqMaEIL3hasKuGkkLFUqaVJ4K9byzHPa7XaNHJF+LJKPFSoFUotXDfdImdiSeSQbJ4FYrmSGv0A1UrXlGBOWn1Eht7cccYnNaGWbLfZRAQUnANaZtSK2R0WqVSC2+EQB2t2FsHVpNyJCoUXXNaRVx6Quh1WhHX4ywv+Mfgwim1W6GFlk6rVGqhGTETK5PEOXDL1qZHimpCq4TrIkqRvbOK/t37xsTzLmi1tIKQvgzB5crcJpr39SD2i/qJ2ZJPjIvY/jiTWh2XUASP0fMtFddZzZ9TOl1hfS8O1wvVqZM9uAysgvumTQ0tlVap1GKpfRaD8zp1XFxRix4h1amKK50M0IvEm2QPCriGV2mh64wb3tz6ODuqXtJolUotBJ6XDWJvHc4gNFxc0YRk6M5HxaUYIxIF6Rtxda/Scoc0Pp5cnPVagaTSKpZafC6LgiQmSwUXU1S5pZrtqjVcvTxQrbmBtO+FnfgR00oCTjH78DC4jlrxrdEqllo4ebr8EPrOZ0k0ScFFFUGGQNKMlooLF3Wyw7yLBZsNYv6ClnZ8gjN+twSaf+qhpdBipZZZ8meFkMappcRFFFXdnlb5CaCGCw8f77GvHqbhyrzJBzE/psW3sE7GNBp3KK6+Fxa0eKk1pDN82EKNVFi2zUwSuDJFLbjO+86/IcunlcPFXpQhrub+1wJb7xM25bCeO5c/hlc+N60mcfX+bshsC6Ellypw3Wc22Y7p9lXm25H4gJT3HBcoesNN7emzsXEz5t++krVCwzWvZOMi1tuaJ9CNVhiH4lsMOpbgha1UE0xM0dlyiRHRyT7o+l4RlzhcieWU9xmKfVNhrNjb6UDbQSgRPe0QXxlNYgnv79ggf5/4DheO9MX317RMMr7Xl4RdURrTUspMfd1p4QmDaM6+eXvCoLmnweCwu7u/2b/H/i7jNc4kNTnobl0GlOq730pktht+DrNLnbn2m2ra6Mu+Vja42zqoI35Sfu4TG/Ke58unv/39SpWCxUy8dJye/BKgJP/tD5I4m3862r8BDNFq5mSmfvcAAAAASUVORK5CYII=",Ta={class:"rw-Layout-rowContainer h-[106px] flex"},Ca=b("div",{class:"pr-[20px] pt-[17px]"},[b("img",{src:va,alt:"Rune icon original art (c) BLIZZARD ENTERTAINMENT",class:"w-[69px] h-[67px]"})],-1),_a={class:"flex-1"},Aa=b("h1",{class:"text-black text-[0px] mt-[19px] mb-[5px] w-[301px] h-[32px]"},[b("img",{src:ya,alt:"Runewizard",class:"block w-full h-full"})],-1),ba={class:"flex justify-between items-center"},Sa={class:"text-lg ux-color-gray"},Ra={class:"ux-color-gold"},Ea={class:"ml-2 ux-color-green"},wa={class:"text-xs"},La=["href"],Da={class:"flex items-center text-[#514f4a]"},Ma=b("span",{class:"ml-1"},ie("Help"),-1),xa=["href"],ka=b("span",null,ie("Feedback"),-1),Ba=b("div",{class:"rw-Layout-goldBarSeparator mb-2"},null,-1),Fa={key:0,class:"rw-Layout-rowContainer mb-4"};function Ia(e,t,n,s,r,i){const o=ce("icon-chevron-down"),l=ce("icon-chat"),c=ce("help-box");return F(),H("header",null,[b("div",Ta,[Ca,b("div",_a,[Aa,b("div",ba,[b("div",Sa,[dt(" for "),b("span",Ra,ie(e.envGameName),1),b("span",Ea,"Patch "+ie(e.envGameVersion),1),b("span",wa,[b("a",{class:"ml-2 underline hover:underline ux-color-link-blue",target:"blank",href:e.envPatchNotesUrl},"Update Notes",8,La)])]),b("div",Da,[b("a",{href:"#",class:"rw-HelpLink mr-6",onClick:t[0]||(t[0]=us(f=>e.isHelpVisible=!e.isHelpVisible,["prevent"]))},[V(o,{class:Te(["ux-icon ux-icon--fw",{"transform rotate-180":e.isHelpVisible}])},null,8,["class"]),Ma]),b("a",{href:`${e.envGithubRepoUrl}/discussions`,class:"rw-Header-link"},[V(l,{class:"ux-icon ux-icon--fw ux-icon--lg mr-1"}),ka],8,xa)])])])]),Ba,V(cs,{name:"fadein"},{default:Ir(()=>[e.isHelpVisible?(F(),H("div",Fa,[V(c)])):Fe("",!0)]),_:1})])}const Oa=pe(ga,[["render",Ia]]),Ha={name:"FaGithub"},Pa={width:"1.03em",height:"1em",viewBox:"0 0 1536 1504"},$a=b("path",{d:"M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z",fill:"currentColor"},null,-1),Wa=[$a];function Va(e,t,n,s,r,i){return F(),H("svg",Pa,Wa)}const Na=pe(Ha,[["render",Va]]),Ga=Qe({name:"AppFooter",components:{IconGithub:Na},data(){return{envGithubRepoUrl:"https://github.com/fabd/diablo2-runewizard",envMainSiteUrl:"https://fabd.github.io/diablo2"}}}),Ka={class:"rw-Footer min-h-[200px]"},Ua=b("div",{class:"rw-Layout-goldBarSeparator opacity-50 mb-6"},null,-1),qa={class:"text-center text-lg text-gold leading-1"},za={key:0,class:"mb-2"},ja=["href"],Ja=["href"],Xa=b("span",{class:""},ie("fabd/diablo2-runewizard"),-1);function Ya(e,t,n,s,r,i){const o=ce("icon-github");return F(),H("footer",Ka,[Ua,b("div",qa,[e.envMainSiteUrl?(F(),H("div",za,[dt(" Also check out "),b("a",{href:e.envMainSiteUrl,class:"rw-Footer-link ml-2"},ie("The Tankazon Resource"),8,ja)])):Fe("",!0),b("div",null,[dt(" Development "),b("a",{href:e.envGithubRepoUrl,class:"rw-Footer-link ml-2"},[V(o,{class:"ux-icon ux-icon--fw mr-1 mt-[-0.2em]"}),Xa],8,Ja)])])])}const Za=pe(Ga,[["render",Ya]]);var Yt=(e=>(e[e.COMMON=1]="COMMON",e[e.SEMIRARE=2]="SEMIRARE",e[e.RARE=3]="RARE",e))(Yt||{});const ci=[{name:"El",tier:1},{name:"Eld",tier:1},{name:"Tir",tier:1},{name:"Nef",tier:1},{name:"Eth",tier:1},{name:"Ith",tier:1},{name:"Tal",tier:1},{name:"Ral",tier:1},{name:"Ort",tier:1},{name:"Thul",tier:1},{name:"Amn",tier:1},{name:"Sol",tier:2},{name:"Shael",tier:2},{name:"Dol",tier:2},{name:"Hel",tier:2},{name:"Io",tier:2},{name:"Lum",tier:2},{name:"Ko",tier:2},{name:"Fal",tier:2},{name:"Lem",tier:2},{name:"Pul",tier:2},{name:"Um",tier:2},{name:"Mal",tier:3},{name:"Ist",tier:3},{name:"Gul",tier:3},{name:"Vex",tier:3},{name:"Ohm",tier:3},{name:"Lo",tier:3},{name:"Sur",tier:3},{name:"Ber",tier:3},{name:"Jah",tier:3},{name:"Cham",tier:3},{name:"Zod",tier:3}];function Qa(){return ci.map(e=>e.name)}const rr="runewizard",ae={state:cn({haveRunes:[],pinned:new Set}),storage:null,initialize(){this.storage=window.localStorage,ae.reset()},clearRunes(){this.setRunes(Qa(),!1)},getRunes(){const e=[];for(const t of Object.keys(this.state.haveRunes))this.state.haveRunes[t]&&e.push(t);return e},setRunes(e,t=!0){for(const n of e)this.state.haveRunes[n]=t},hasRune(e){return this.state.haveRunes[e]||!1},reset(){this.clearRunes()},getPinned(){return Array.from(this.state.pinned.values())},isPinned(e){return this.state.pinned.has(e)},setPinned(e,t=!0){const n=t?"add":"delete";e.forEach(s=>{this.state.pinned[n](s)})},loadState(){if(!this.storage)return;const e=this.storage.getItem(rr);if(!e)return;const t=JSON.parse(e);this.setRunes(t.selectedRunes),this.setPinned(t.pinnedRunewords||[])},saveState(){let e="";if(!this.storage)return;const t={selectedRunes:this.getRunes(),pinnedRunewords:this.getPinned()};try{e=JSON.stringify(t)}catch{}this.storage.setItem(rr,e)}},ec={name:"TopcoatCancel"},tc={width:"1em",height:"1em",viewBox:"0 0 42 42"},nc=b("path",{fillRule:"evenodd",d:"M21.002 26.588l10.357 10.604c1.039 1.072 1.715 1.083 2.773 0l2.078-2.128c1.018-1.042 1.087-1.726 0-2.839L25.245 21L36.211 9.775c1.027-1.055 1.047-1.767 0-2.84l-2.078-2.127c-1.078-1.104-1.744-1.053-2.773 0L21.002 15.412L10.645 4.809c-1.029-1.053-1.695-1.104-2.773 0L5.794 6.936c-1.048 1.073-1.029 1.785 0 2.84L16.759 21L5.794 32.225c-1.087 1.113-1.029 1.797 0 2.839l2.077 2.128c1.049 1.083 1.725 1.072 2.773 0l10.358-10.604z",fill:"currentColor"},null,-1),sc=[nc];function rc(e,t,n,s,r,i){return F(),H("svg",tc,sc)}const ui=pe(ec,[["render",rc]]),ic=Qe({name:"Runes",components:{IconCancel:ui},data(){return{haveRunes:ae.state.haveRunes,runes:ci}},computed:{isAnyRuneSelected(){return ae.getRunes().length>0},runesByTier(){return[this.runes.filter(t=>t.tier===Yt.COMMON),this.runes.filter(t=>t.tier===Yt.SEMIRARE),this.runes.filter(t=>t.tier===Yt.RARE)]}},methods:{onClearRunes(){ae.clearRunes(),ae.saveState()},onToggleRune(e){const t=ae.hasRune(e);ae.setRunes([e],!t),ae.saveState()}}}),oc={class:"relative"},lc={class:"flex justify-between items-center mb-2"},ac=b("h2",{class:"rw-Title-h2 mb-0"},"Runes",-1),cc={key:0,class:"-mt-2px"},uc={class:"rw-Runes flex justify-between w-[130px] select-none"},fc=["onClick"],dc={class:"mx-auto my-auto"};function hc(e,t,n,s,r,i){const o=ce("icon-cancel");return F(),H("div",oc,[b("div",lc,[ac,e.isAnyRuneSelected?(F(),H("div",cc,[b("a",{class:"rw-Runes-clear",href:"#",onClick:t[0]||(t[0]=us((...l)=>e.onClearRunes&&e.onClearRunes(...l),["prevent"]))},[V(o,{class:"ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"}),dt("clear ")])])):Fe("",!0)]),b("div",uc,[(F(!0),H(ue,null,en(e.runesByTier,(l,c)=>(F(),H("div",{key:c,class:"w-1/3"},[(F(!0),H(ue,null,en(l,f=>(F(),H("div",{key:f.name,class:Te(["rw-Rune mx-auto",{"is-selected":e.haveRunes[f.name]}]),onClick:d=>e.onToggleRune(f.name)},[b("span",dc,ie(f.name),1)],10,fc))),128))]))),128))])])}const pc=pe(ic,[["render",hc]]),mc=[{title:"Ancient's Pledge",runes:["Ral","Ort","Tal"],level:21,ttypes:["Shields"]},{title:"Black",runes:["Thul","Io","Nef"],level:35,ttypes:["Clubs","Hammers","Maces","Swords"]},{title:"Fury",runes:["Jah","Gul","Eth"],level:65,ttypes:["Weapons"]},{title:"Holy Thunder",runes:["Eth","Ral","Ort","Tal"],level:21,ttypes:["Melee Weapons"]},{title:"Honor",runes:["Amn","El","Ith","Tir","Sol"],level:27,ttypes:["Melee Weapons"]},{title:"King's Grace",runes:["Amn","Ral","Thul"],level:25,ttypes:["Weapons"]},{title:"Leaf",runes:["Tir","Ral"],level:19,ttypes:["Staves"],tinfos:"(Not Orbs/Wands)"},{title:"Lionheart",runes:["Hel","Lum","Fal"],level:41,ttypes:["Body Armors"]},{title:"Lore",runes:["Ort","Sol"],level:27,ttypes:["Helms"]},{title:"Malice",runes:["Ith","El","Eth"],level:15,ttypes:["Melee Weapons"]},{title:"Melody",runes:["Shael","Ko","Nef"],level:39,ttypes:["Missile Weapons"]},{title:"Memory",runes:["Lum","Io","Sol","Eth"],level:37,ttypes:["Staves"],tinfos:"(Not Orbs/Wands)"},{title:"Nadir",runes:["Nef","Tir"],level:13,ttypes:["Helms"]},{title:"Radiance",runes:["Nef","Sol","Ith"],level:27,ttypes:["Helms"]},{title:"Rhyme",runes:["Shael","Eth"],level:29,ttypes:["Shields"]},{title:"Silence",runes:["Shael","Eld","Hel","Ist","Tir","Vex"],level:55,ttypes:["Weapons"]},{title:"Smoke",runes:["Nef","Lum"],level:37,ttypes:["Body Armors"]},{title:"Stealth",runes:["Tal","Eth"],level:17,ttypes:["Body Armors"]},{title:"Steel",runes:["Tir","El"],level:13,ttypes:["Melee Weapons"]},{title:"Strength",runes:["Amn","Tir"],level:25,ttypes:["Melee Weapons"]},{title:"Venom",runes:["Tal","Shael","Mal"],level:49,ttypes:["Weapons"]},{title:"Wealth",runes:["Lem","Ko","Tir"],level:43,ttypes:["Body Armors"]},{title:"White",runes:["Dol","Io"],level:35,ttypes:["Wands"],tinfos:"(Necromancer)"},{title:"Zephyr",runes:["Ort","Eth"],level:21,ttypes:["Missile Weapons"]},{title:"Beast",runes:["Ber","Tir","Um","Mal","Lum"],level:63,ttypes:["Melee Weapons"]},{title:"Bramble",runes:["Ral","Ohm","Sur","Eth"],level:61,ttypes:["Body Armors"]},{title:"Breath of the Dying",runes:["Vex","Hel","El","Eld","Zod","Eth"],level:69,ttypes:["Weapons"]},{title:"Call to Arms",runes:["Amn","Ral","Mal","Ist","Ohm"],level:57,ttypes:["Weapons"]},{title:"Chaos",runes:["Fal","Ohm","Um"],level:57,ttypes:["Claws"],tinfos:"(Assassin)"},{title:"Chains of Honor",runes:["Dol","Um","Ber","Ist"],level:63,ttypes:["Body Armors"]},{title:"Crescent Moon",runes:["Shael","Um","Tir"],level:47,ttypes:["Weapons"]},{title:"Delirium",runes:["Lem","Ist","Io"],level:51,ttypes:["Helms"]},{title:"Doom",runes:["Hel","Ohm","Um","Lo","Cham"],level:67,ttypes:["Melee Weapons"]},{title:"Duress",runes:["Shael","Um","Thul"],level:47,ttypes:["Body Armors"]},{title:"Enigma",runes:["Jah","Ith","Sol"],level:65,ttypes:["Body Armors"]},{title:"Eternity",runes:["Amn","Ber","Ist","Sol","Sur"],level:63,ttypes:["Melee Weapons"]},{title:"Exile",runes:["Vex","Ohm","Ist","Dol"],level:57,ttypes:["Paladin Shields"],tinfos:"(Paladin)"},{title:"Famine",runes:["Fal","Ohm","Ort","Jah"],level:65,ttypes:["Weapons"]},{title:"Gloom",runes:["Fal","Um","Pul"],level:47,ttypes:["Body Armors"]},{title:"Hand of Justice",runes:["Sur","Cham","Amn","Lo"],level:67,ttypes:["Weapons"]},{title:"Heart of the Oak",runes:["Ko","Vex","Pul","Thul"],level:55,ttypes:["Staves","Maces"]},{title:"Kingslayer",runes:["Mal","Um","Gul","Fal"],level:53,ttypes:["Melee Weapons"]},{title:"Passion",runes:["Dol","Ort","Eld","Lem"],level:43,ttypes:["Weapons"]},{title:"Prudence",runes:["Mal","Tir"],level:49,ttypes:["Body Armors"]},{title:"Sanctuary",runes:["Ko","Ko","Mal"],level:49,ttypes:["Shields"]},{title:"Splendor",runes:["Eth","Lum"],level:37,ttypes:["Shields"]},{title:"Stone",runes:["Shael","Um","Pul","Lum"],level:47,ttypes:["Body Armors"]},{title:"Wind",runes:["Sur","Mal"],level:61,ttypes:["Weapons"]},{title:"Brand",runes:["Jah","Lo","Mal","Gul"],level:65,ttypes:["Missile Weapons"]},{title:"Death",runes:["Hel","El","Vex","Ort","Gul"],level:55,ttypes:["Melee Weapons"]},{title:"Destruction",runes:["Vex","Lo","Ber","Jah","Ko"],level:65,ttypes:["Weapons"]},{title:"Dragon",runes:["Sur","Lo","Sol"],level:61,ttypes:["Body Armors","Shields"]},{title:"Dream",runes:["Io","Jah","Pul"],level:65,ttypes:["Helms","Shields"]},{title:"Edge",runes:["Tir","Tal","Amn"],level:25,ttypes:["Missile Weapons"]},{title:"Faith",runes:["Ohm","Jah","Lem","Eld"],level:65,ttypes:["Missile Weapons"]},{title:"Fortitude",runes:["El","Sol","Dol","Lo"],level:59,ttypes:["Weapons","Body Armors"]},{title:"Grief",runes:["Eth","Tir","Gul","Vex","Ral"],level:55,ttypes:["Swords","Axes"]},{title:"Harmony",runes:["Tir","Ith","Sol","Ko"],level:39,ttypes:["Missile Weapons"]},{title:"Ice",runes:["Amn","Shael","Jah","Lo"],level:65,ttypes:["Missile Weapons"]},{title:"Infinity",runes:["Ber","Mal","Ber","Ist"],level:63,ttypes:["Polearms","Spears"]},{title:"Insight",runes:["Ral","Tir","Tal","Sol"],level:27,ttypes:["Missile Weapons","Polearms","Staves","Spears"]},{title:"Last Wish",runes:["Jah","Mal","Jah","Sur","Jah","Ber"],level:65,ttypes:["Swords","Hammers","Axes"]},{title:"Lawbringer",runes:["Amn","Lem","Ko"],level:43,ttypes:["Swords","Hammers","Scepters"]},{title:"Oath",runes:["Shael","Pul","Mal","Lum"],level:49,ttypes:["Swords","Axes","Maces","Hammers"]},{title:"Obedience",runes:["Hel","Ko","Thul","Eth","Fal"],level:41,ttypes:["Polearms","Spears"]},{title:"Phoenix",runes:["Vex","Vex","Lo","Jah"],level:65,ttypes:["Weapons","Shields"]},{title:"Pride",runes:["Cham","Sur","Io","Lo"],level:67,ttypes:["Weapons"]},{title:"Rift",runes:["Hel","Ko","Lem","Gul"],level:53,ttypes:["Weapons"]},{title:"Spirit",runes:["Tal","Thul","Ort","Amn"],level:25,ttypes:["Swords","Shields"]},{title:"Voice of Reason",runes:["Lem","Ko","El","Eld"],level:43,ttypes:["Weapons"]},{title:"Wrath",runes:["Pul","Lum","Ber","Mal"],level:63,ttypes:["Missile Weapons"]},{title:"Bone",runes:["Sol","Amn","Amn"],level:27,ttypes:["Body Armors"],tinfos:"(Necromancer)"},{title:"Enlightenment",runes:["Pul","Ral","Sol"],level:45,ttypes:["Body Armors"],tinfos:"(Sorceress)"},{title:"Myth",runes:["Hel","Amn","Nef"],level:25,ttypes:["Body Armors"],tinfos:"(Barbarian)"},{title:"Peace",runes:["Shael","Thul","Amn"],level:29,ttypes:["Body Armors"],tinfos:"(Amazon)"},{title:"Principle",runes:["Ral","Ko","Eld"],level:39,ttypes:["Body Armors"],tinfos:"(Paladin)"},{title:"Rain",runes:["Ort","Dol","Ith"],level:31,ttypes:["Body Armors"],tinfos:"(Druid)"},{title:"Treachery",runes:["Shael","Thul","Lem"],level:43,ttypes:["Body Armors"],tinfos:"(Assassin)"},{title:"Plague",runes:["Cham","Shael","Um"],level:67,ttypes:["Swords","Claws","Daggers"]},{title:"Pattern",runes:["Tal","Ort","Thul"],level:23,ttypes:["Claws"],tinfos:"(Assassin)"},{title:"Unbending Will",runes:["Fal","Io","Ith","Eld","El","Hel"],level:41,ttypes:["Swords"]},{title:"Wisdom",runes:["Pul","Ith","Eld"],level:45,ttypes:["Helms"]},{title:"Obsession",runes:["Zod","Ist","Lem","Lum","Io","Nef"],level:69,ttypes:["Staves"]},{title:"Flickering Flame",runes:["Nef","Pul","Vex"],level:55,ttypes:["Helms"]},{title:"Mist",runes:["Cham","Shael","Gul","Thul","Ith"],level:67,ttypes:["Missile Weapons"]},{title:"Bulwark",runes:["Shael","Io","Sol"],level:35,ttypes:["Helms"]},{title:"Cure",runes:["Shael","Io","Tal"],level:35,ttypes:["Helms"]},{title:"Ground",runes:["Shael","Io","Ort"],level:35,ttypes:["Helms"]},{title:"Hearth",runes:["Shael","Io","Thul"],level:35,ttypes:["Helms"]},{title:"Temper",runes:["Shael","Io","Ral"],level:35,ttypes:["Helms"]},{title:"Hustle",runes:["Shael","Ko","Eld"],level:39,ttypes:["Weapons","Body Armors"]},{title:"Mosaic",runes:["Mal","Sur","Amn"],level:61,ttypes:["Claws"],tinfos:"(Assassin)"},{title:"Metamorphosis",runes:["Io","Cham","Fal"],level:67,ttypes:["Helms"],tinfos:"(Druid)"},{title:"Fortune (BT only)",runes:["Sol","Tir","Shael"],level:29,ttypes:["Helms"]},{title:"Knowledge (BT only)",runes:["Ith","Tir"],level:15,ttypes:["Helms"]},{title:"Revenge (BT only)",runes:["Thul","Ort","Ral"],level:23,ttypes:["Maces","Clubs","Hammers"]},{title:"Tempest (BT only)",runes:["Ber","Tir"],level:63,ttypes:["Weapons"]},{title:"Temptation (BT only)",runes:["Hel","Shael","Amn","Gul"],level:53,ttypes:["Weapons"]},{title:"Broken Promise (BT only)",runes:["Io","Lum","Fal","Ko"],level:41,ttypes:["Body Armors"]},{title:"Dilemma (BT only)",runes:["Dol","Lem","Mal"],level:49,ttypes:["Body Armors"]},{title:"Red (BT only)",runes:["Io","Eld","Dol"],level:35,ttypes:["Body Armors","Shields"]},{title:"Pestilence (BT only)",runes:["Tal","Cham","Ist"],level:67,ttypes:["Body Armors"]},{title:"Trust (BT only)",runes:["Ith","Eld"],level:15,ttypes:["Shields"]}],ir={Axes:{url:"https://diablo2.diablowiki.net/Axes"},"Body Armors":{url:"https://diablo2.diablowiki.net/Body_Armor"},Claws:{url:"https://diablo2.diablowiki.net/Assassin_Items"},Clubs:{url:"https://diablo2.diablowiki.net/Clubs"},Daggers:{url:"https://diablo2.diablowiki.net/Daggers"},Hammers:{url:"https://diablo2.diablowiki.net/Hammers"},Helms:{url:"https://diablo2.diablowiki.net/Helms"},Maces:{url:"https://diablo2.diablowiki.net/Maces"},"Melee Weapons":{},"Missile Weapons":{},"Paladin Shields":{url:"https://diablo2.diablowiki.net/Paladin_Items"},Polearms:{url:"https://diablo2.diablowiki.net/Polearms"},Scepters:{url:"https://diablo2.diablowiki.net/Scepters"},Shields:{url:"https://diablo2.diablowiki.net/Shields"},Spears:{url:"https://diablo2.diablowiki.net/Spears"},Staves:{url:"https://diablo2.diablowiki.net/Staves"},Swords:{url:"https://diablo2.diablowiki.net/Swords"},Wands:{url:"https://diablo2.diablowiki.net/Wands"},Weapons:{}},gc={name:"FaSolidLongArrowAltUp"},vc={width:"0.5em",height:"1em",viewBox:"0 0 256 512"},yc=b("path",{d:"M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z",fill:"currentColor"},null,-1),Tc=[yc];function Cc(e,t,n,s,r,i){return F(),H("svg",vc,Tc)}const _c=pe(gc,[["render",Cc]]),Ac={name:"FaSolidLongArrowAltDown"},bc={width:"0.5em",height:"1em",viewBox:"0 0 256 512"},Sc=b("path",{d:"M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z",fill:"currentColor"},null,-1),Rc=[Sc];function Ec(e,t,n,s,r,i){return F(),H("svg",bc,Rc)}const wc=pe(Ac,[["render",Ec]]),Lc={name:"PhDiamondFill"},Dc={width:"1em",height:"1em",viewBox:"0 0 256 256"},Mc=b("path",{d:"M236 139.3L139.3 236a15.9 15.9 0 0 1-22.6 0L20 139.3a16.1 16.1 0 0 1 0-22.6L116.7 20a16.1 16.1 0 0 1 22.6 0l96.7 96.7a16.1 16.1 0 0 1 0 22.6z",fill:"currentColor"},null,-1),xc=[Mc];function kc(e,t,n,s,r,i){return F(),H("svg",Dc,xc)}const Bc=pe(Lc,[["render",kc]]),Fc={name:"PhDiamondBold"},Ic={width:"1em",height:"1em",viewBox:"0 0 256 256"},Oc=b("path",{d:"M238.8 113.9l-96.7-96.7a19.8 19.8 0 0 0-28.2 0l-96.7 96.7a19.8 19.8 0 0 0 0 28.2l96.7 96.7a19.8 19.8 0 0 0 28.2 0l96.7-96.7a19.8 19.8 0 0 0 0-28.2zM128 219l-91-91l91-91l91 91z",fill:"currentColor"},null,-1),Hc=[Oc];function Pc(e,t,n,s,r,i){return F(),H("svg",Ic,Hc)}const $c=pe(Fc,[["render",Pc]]),Wc={"Ancient's Pledge":`
  +50% Enhanced Defense
  Cold Resist +43%
  Fire Resist +48%
  Lightning Resist +48%
  Poison Resist +48%
  10% Damage Goes To Mana
  `,Black:`
  +120% Enhanced Damage
  40% Chance Of Crushing Blow
  +200 To Attack Rating
  Adds 3-14 Cold Damage - Cold Duration 3 Seconds
  +10 To Vitality
  15% Increased Attack Speed
  Knockback
  Magic Damage Reduced By 7
  Level 4 Corpse Explosion (12 Charges)
  `,Fury:`
  +280% Enhanced Damage
  40% Increased Attack Speed
  Prevent Monster Heal
  66% Chance Of Open Wounds
  33% Deadly Strike
  Ignore Target's Defense
  -25% Target Defense
  20% Bonus To Attack Rating
  6% Life Stolen Per Hit
  +4% to Experience Gained
  `,"Holy Thunder":`
  Level 5 Holy Shock Aura When Equipped
  +100% Enhanced Damage
  -25% Target Defense
  Adds 5-30 Fire Damage
  Adds 21-110 Lightning Damage
  +75 Poison Damage Over 5 Seconds
  +15 To Maximum Damage
  Lightning Resistance +60%
  +5 To Maximum Lightning Resistance
  Poison Length Reduced by 75%
  `,Honor:`
  +160-190% Enhanced Damage
  +9 To Minimum Damage
  +9 To Maximum Damage
  25% Deadly Strike
	20% Bonus to Attack Rating
	+55% Faster Hit Recovery
	+25% Increased Attack Speed
  7% Life Stolen Per Hit
  +1 To Light Radius
  +2 To Mana After Each Kill
  Repairs 1 durability in 25 seconds
  `,"King's Grace":`
  +1 to All Skills
  +130-180% Enhanced Damage
  +150% Damage To Demons
  +150% Damage To Undead
  +150% Bonus to Attack Rating
  Adds 5-30 Fire Damage
  Adds 3-14 Cold Damage - 3 Second Duration
  7% Life Stolen Per Hit
  `,Leaf:`
  Adds 5-30 Fire Damage
  +3 To Fire Skills
  +3 To Fire Bolt (Sorceress Only)
  +3 To Inferno (Sorceress Only)
  +3 To Warmth (Sorceress Only)
  +2 To Mana After Each Kill
  + (2 Per Character Level) +2-198 To Defense (Based On Character Level)
  Cold Resist +33%
  `,Lionheart:`
  +90-110% Enhanced Damage
  Requirements -15%
  +25 To Strength
  +10 To Energy
  +20 To Vitality
  +15 To Dexterity
  +50 To Life
  All Resistances +30
  `,Lore:`
  +1 To All Skill Levels
  +10 To Energy
  +2 To Mana After Each Kill
  Lightning Resist +30%
  Damage Reduced By 7
  +2 To Light Radius
  `,Malice:`
  +33% Enhanced Damage
  +9 To Maximum Damage
  100% Chance Of Open Wounds
  -25% Target Defense
  -100 To Monster Defense Per Hit
  Prevent Monster Heal
  +50 To Attack Rating
  7% Life stolen per hit
  Drain Life -5
  Repairs 1 durability in 25 seconds
  `,Melody:`
  +50% Enhanced Damage
  +300% Damage To Undead
  +3 To Bow and Crossbow Skills (Amazon Only)
  +3 To Critical Strike (Amazon Only)
  +3 To Dodge (Amazon Only)
  +3 To Slow Missiles (Amazon Only)
  20% Increased Attack Speed
  +10 To Dexterity
  Knockback
  `,Memory:`
  +3 to Sorceress Skill Levels
  33% Faster Cast Rate
  Increase Maximum Mana 20%
  +3 Energy Shield (Sorceress Only)
  +2 Static Field (Sorceress Only)
  +10 To Energy
  +10 To Vitality
  +9 To Minimum Damage
  -25% Target Defense
  Magic Damage Reduced By 7
  +50% Enhanced Defense
  `,Nadir:`
  +50% Enhanced Defense
  +25 Defense
  +30 Defense vs. Missile
  Level 13 Cloak of Shadows (9 Charges)
  +2 To Mana After Each Kill
  +5 To Strength
  -3 To Light Radius
  Magic Damage Reduced by 4
  Damage Reduced by 4
  `,Radiance:`
  +33 to Life
  +30 Defense Vs. Missile
  +10 To Energy
  +10 To Vitality
  15% Damage Goes To Mana
  Magic Damage Reduced By 5
  +33 To Mana
  Damage Reduced By 7
  +5 To Light Radius
  `,Rhyme:`
  20% Increased Chance of Blocking
  40% Faster Block Rate
  All Resistances +25
  Regenerate Mana 15%
  Cannot Be Frozen
  50% Extra Gold From Monsters
  25% Better Chance Of Getting Magic Items
  `,Silence:`
  22% Chance to cast level 25 Amplify Damage on striking
  200% Enhanced Damage
  +75% Damage To Undead
  Requirements -20%
  40% Increased Attack Speed
  +100 To Attack Rating Against Undead
  +2-3 To All Skills
  All Resistances +75
  11% Mana Stolen Per Hit
  +2 To Mana After Each Kill
  30% Better Chance Of Getting Magic Items
  +4% to Experience Gained
  `,Smoke:`
  +75% Enhanced Defense
  +280 Defense Vs. Missile
  All Resistances +50
  20% Faster Hit Recovery
  Level 6 Weaken (18 Charges)
  +10 To Energy
  -1 To Light Radius
  `,Stealth:`
  Magic Damage Reduced By 3
  +6 To Dexterity
  +15 To Maximum Stamina
  Poison Resist +30%
  Regenerate Mana 15%
  25% Faster Run/Walk
  25% Faster Cast Rate
  25% Faster Hit Recovery
  `,Steel:`
  20% Enhanced Damage
  Damage +3
  5% Chance of Crushing Blow
  +50 To Attack Rating
  50% Chance Of Open Wounds
  25% Increased Attack Speed
  +2 To Mana After Each Kill
  +1 To Light Radius
  Repairs 1 durability in 25 seconds
  `,Strength:`
  90-110% Enhanced Damage
  25% Chance Of Crushing Blow
  7% Life Stolen Per Hit
  +2 To Mana After Each Kill
  +20 To Strength
  +10 To Vitality
  Repairs 1 durability in 25 seconds
  `,Venom:`
  +3 to Poison Skills
  +30 to Venom
  +(190-240)% Enhanced Damage
  +(40-55)% Increased Attack Speed
	-(20-30)% to Enemy Poison Resistance
  Prevent Monster Heal
  Ignore Target's Defense
  7% Mana Stolen Per Hit
  `,Wealth:`
  300% Extra Gold From Monsters
  1.0%/lvl Better Chance of Getting Magic Items (Based on Character Level)
  +20% Faster Run/Walk
	+10% Increased Attack Speed
  +2 To Mana After Each Kill
  +10 To Dexterity
  `,White:`
  +10 To Vitality
  +3 To Poison And Bone Skills (Necromancer Only)
  +3 To Bone Armor (Necromancer Only)
  +2 To Bone Spear (Necromancer Only)
  +4 To Skeleton Mastery (Necromancer Only)
  Magic Damage Reduced By 4
  20% Faster Cast Rate
  +13 To Mana
  +2 Life after each Kill
  `,Zephyr:`
  14% Chance To Cast Level 2 Twister On Striking
  +100% Enhanced Damage
  Adds 1-50 Lightning Damage
  -25% Target Defense
  25% Faster Run/Walk
  25% Increased Attack Speed
  20% Bonus to Attack Rating
	Piercing Attack
	+30 to Mana
  
  `,Beast:`
  Level 9 Fanaticism Aura When Equipped
  +40% Increased Attack Speed
  +240-270% Enhanced Damage (varies)
  20% Chance of Crushing Blow
  25% Chance of Open Wounds
  +3 To Werebear
  +3 To Lycanthropy
  +3 to Hunger
  Prevent Monster Heal
  +25-40 To Strength (varies)
  +10 To Energy
  +2 To Mana After Each Kill
  +2% to Experience Gained
  `,Bramble:`
  Level 15-21 Thorns Aura When Equipped (varies)
  +50% Faster Hit Recovery
  +25-50% To Poison Skill Damage (varies)
  +300 Defense
  Increase Maximum Mana 5%
  Regenerate Mana 15%
  +5% To Maximum Cold Resist
  Fire Resist +30%
  Poison Resist +100%
  +13 Life After Each Kill
  Level 13 Spirit of Barbs (33 Charges)
  +4% to Experience Gained
  `,"Breath of the Dying":`
  66% Chance To Cast Level 45 Poison Nova When You Kill An Enemy
  Indestructible
  +1 to All Skills
  +60% Increased Attack Speed
  +350-400% Enhanced Damage (varies)
  +200% Damage To Undead
  +200% Damage to Demons
  -25% Target Defense
  +50 To Attack Rating
  +100 To Attack Rating Against Undead
  7% Mana Stolen Per Hit
  12-15% Life Stolen Per Hit (varies)
<U>+30 To All Attributes</U>
  +1 To Light Radius
  Requirements -20%
  +4% to Experience Gained
  `,"Call to Arms":`
  +1 To All Skills
  +40% Increased Attack Speed
  +250-290% Enhanced Damage (varies)
  Adds 5-30 Fire Damage
  7% Life Stolen Per Hit
  +1 To Battle Command
  +1 To Battle Orders
  +1 To Battle Cry
  Prevent Monster Heal
  Replenish Life +12
  30% Better Chance of Getting Magic Items
  +4% to Experience Gained
  `,Chaos:`
  9% Chance To Cast Level 11 Frozen Orb On Striking
  11% Chance To Cast Level 9 Charged Bolt On Striking
  +35% Increased Attack Speed
  +290-340% Enhanced Damage (varies)
  Adds 216-471 Magic Damage
  25% Chance of Open Wounds
  +1 To Whirlwind
  +10 To Strength
  +15 Life After Each Demon Kill
  +2% to Experience Gained
  `,"Chains of Honor":`
  +2 To All Skills
  +200% Damage To Demons
  +100% Damage To Undead
  8% Life Stolen Per Hit
  +70% Enhanced Defense
  +20 To Strength
  All Resistances +65
  Damage Reduced By 8%
  25% Better Chance of Getting Magic Items
  +2 Life after each Kill
  +4% to Experience Gained
  `,"Crescent Moon":`
  34% Chance To Cast Level 34 Chain Lightning On Striking
  25% Chance To Cast Level 25 Static Field On Striking
  Level (14-16) Holy Shock Aura When Equipped
  +20% Increased Attack Speed
  +180-220% Enhanced Damage (varies)
  Ignore Target's Defense
  -15% To Enemy Lightning Resistance
  25% Chance of Open Wounds
  +12-18 Magic Absorb (varies)
  +2 To Mana After Each Kill
  `,Delirium:`
  6% Chance To Cast Level 14 Mind Blast When Struck
  14% Chance To Cast Level 13 Terror When Struck
  11% Chance To Cast Level 18 Confuse On Striking
  +2 To All Skills
  +261 Defense
  +10 To Vitality
  50% Extra Gold From Monsters
  25% Better Chance of Getting Magic Items
  Level 17 Attract (60 Charges)
  +2% to Experience Gained
  `,Doom:`
  20% Chance To Cast Level 40 Blizzard On Striking
  Level 12 Holy Freeze Aura When Equipped
  +2 To All Skills
  +45% Increased Attack Speed
  +330-370% Enhanced Damage (varies)
  -(50-75)% To Enemy Cold Resistance (varies)
  20% Deadly Strike
  25% Chance of Open Wounds
  Prevent Monster Heal
  Slows Target by 20%
  Requirements -20%
  +6% to Experience Gained
  `,Duress:`
  +40% Faster Hit Recovery
  +80-100% Enhanced Damage (varies)
  15% Chance of Crushing Blow
  33% Chance of Open Wounds
  +150-200% Enhanced Defense (varies)
  Cold Resist +45%
  Lightning Resist +15%
  Fire Resist +15%
  Poison Resist +15%
  +(15-20) to Mana after each Kill
	+(9-15) Life after each Kill
  `,Enigma:`
  +2 To All Skills
  +45% Faster Run/Walk
  +1 To Teleport
  +750-775 Defense (varies)
  Increase Maximum Life 5%
  +14 Life After Each Kill
  15% Damage Taken Goes To Mana
  +0.5%/lvl Better Chance of Getting Magic Items (Based on Character Level)
  Damage Reduced by 7
  +2% to Experience Gained
  `,Eternity:`
  Indestructible
  +260-310% Enhanced Damage (varies)
  30% Increased Attack Speed
  +9 To Minimum Damage
  7% Life Stolen Per Hit
  20% Chance of Crushing Blow
  Hit Blinds Target
  Slows Target By 33%
  Cannot Be Frozen
  30% Better Chance Of Getting Magic Items
  Level 8 Revive (88 Charges)
  +15% to Experience Gained
  `,Exile:`
  15% Chance To Cast Level 5 Life Tap On Striking
  Level 13-16 Defiance Aura When Equipped (varies)
  +2 To Offensive Auras (Paladin Only)
  +30% Faster Block Rate
  Freezes Target
  +220-260% Enhanced Defense (varies)
  +2 Life after each Kill
  +5% To Maximum Cold Resist
  +5% To Maximum Fire Resist
  25% Better Chance Of Getting Magic Items
  Repairs 1 Durability in 4 Seconds
  +6% to Experience Gained
  `,Famine:`
  +30% Increased Attack Speed
  +320-370% Enhanced Damage (varies)
  Ignore Target's Defense
  Adds 200-300 Magic Damage
  Adds 200-210 Fire Damage
  Adds 200-210 Lightning Damage
  Adds 200-210 Cold Damage
  12% Life Stolen Per Hit
  Prevent Monster Heal
  +10 To Strength
  +50% Deadly Strike
  +(10-20) to all Attributes
  +4% to Experience Gained
  `,Gloom:`
  15% Chance To Cast Level 3 Dim Vision When Struck
  +10% Faster Hit Recovery
  +200-260% Enhanced Defense (varies)
  +10 To Strength
  All Resistances +45
  Half Freeze Duration
  5% Damage Taken Goes To Mana
  -3 To Light Radius
  `,"Hand of Justice":`
  100% Chance To Cast Level 36 Blaze When You Level-Up
  100% Chance To Cast Level 48 Meteor When You Die
  Level 16 Holy Fire Aura When Equipped
  +33% Increased Attack Speed
  +280-330% Enhanced Damage (varies)
  Ignore Target's Defense
  7% Life Stolen Per Hit
  -(20-25)% To Enemy Fire Resistance
  20% Deadly Strike
  Hit Blinds Target
  Slows Target by 20%
  +6% to Experience Gained
  `,"Heart of the Oak":`
  +3 To All Skills
  +40% Faster Cast Rate
  +75% Damage To Demons
  +100 To Attack Rating Against Demons
  Adds 3-14 Cold Damage, 3 sec. Duration (Normal)
  7% Mana Stolen Per Hit
  +10 To Dexterity
  Replenish Life +20
  Increase Maximum Mana 15%
  All Resistances +30-40 (varies)
  Level 14 Raven (60 Charges)
  +2% to Experience Gained
  `,Kingslayer:`
  +30% Increased Attack Speed
  +260-300% Enhanced Damage (varies)
  -25% Target Defense
  20% Bonus To Attack Rating
  33% Chance of Crushing Blow
  50% Chance of Open Wounds
  +1 To Berserk
  Prevent Monster Heal
  +10 To Strength
  350% Extra Gold From Monsters
  +4% to Experience Gained
  `,Passion:`
  +25% Increased Attack Speed
  +160-210% Enhanced Damage (varies)
  50-80% Bonus To Attack Rating (varies)
  +75% Damage To Undead
  +100 To Attack Rating Against Undead
  Adds 1-50 Lightning Damage
  +1 To Berserk
  +1 To Zeal
  Hit Blinds Target +10
  75% Extra Gold From Monsters
  +2 Life after each Kill
  Level 3 Heart of Wolverine (12 Charges)
  `,Prudence:`
  +25% Faster Hit Recovery
  +140-170% Enhanced Defense (varies)
  All Resistances +25-35 (varies)
  Damage Reduced by 24
  Magic Damage Reduced by 17
  +2 To Mana After Each Kill
  Cannot Be Frozen
  Repairs Durability 1 In 4 Seconds
  `,Sanctuary:`
  +20% Faster Hit Recovery
  +20% Faster Block Rate
  20% Increased Chance of Blocking
  +130-160% Enhanced Defense (varies)
  +250 Defense vs. Missile
  +20 To Dexterity
  All Resistances +50-70 (varies)
  Magic Damage Reduced By 7
  Level 12 Slow Missiles (60 Charges)
  `,Splendor:`
  +1 To All Skills
  +20% Faster Cast Rate
  +20% Faster Block Rate
  +60-100% Enhanced Defense (varies)
  +10 To Energy
  Regenerate Mana 15%
  50% Extra Gold From Monsters
  20% Better Chance of Getting Magic Items
  +3 To Light Radius
  `,Stone:`
  +60% Faster Hit Recovery
  +250-290% Enhanced Defense (varies)
  +300 Defense Vs. Missile
  +16 To Strength
  +16 To Vitality
  +10 To Energy
  All Resistances +15
  Level 16 Molten Boulder (80 Charges)
  Level 16 Clay Golem (16 Charges)
  `,Wind:`
  33% Chance To Cast Level 30 Tornado On Striking
  25% Chance to Cast Level 35 Twister On Striking
  +40% Faster Run/Walk
  +40% Increased Attack Speed
  +30% Faster Hit Recovery
  +260-280% Enhanced Damage (varies)
  -50% Target Defense
  Hit Blinds Target
  +2% to Experience Gained
	Prevent Monster Heal
  `,Brand:`
  35% Chance To Cast Level 14 Amplify Damage When Struck
  100% Chance To Cast Level 18 Bone Spear On Striking
  +260-340% Enhanced Damage (varies)
  Ignore Target's Defense
  20% Bonus to Attack Rating
  +280-330% Damage To Demons (varies)
  +30% Increased Attack Speed
  20% Deadly Strike
  Knockback
  Fires Explosive Arrows or Bolts (15)
  +6% to Experience Gained
  `,Death:`
  100% Chance To Cast Level 44 Chain Lightning When You Die
  25% Chance To Cast Level 18 Glacial Spike On Attack
  Indestructible
  +300-385% Enhanced Damage (varies)*
  +25% Increased Attack Speed
  20% Bonus To Attack Rating
  +50 To Attack Rating
  Adds 1-50 Lightning Damage
  7% Mana Stolen Per Hit
  50% Chance of Crushing Blow
  +(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)
  +1 To Light Radius
  Requirements -20%
  +4% to Experience Gained
  `,Destruction:`
  23% Chance To Cast Level 35 Volcano On Striking
  100% Chance To Cast level 45 Meteor When You Die
  15% Chance To Cast Level 35 Nova On Attack
  +0.5/lvl to Strength (Based on Character Level)
  +350% Enhanced Damage
  Ignore Target's Defense
  Adds 500 Magic Damage
  7% Mana Stolen Per Hit
  20% Chance Of Crushing Blow
  20% Deadly Strike
  Prevent Monster Heal
  +10 To Dexterity
  +8% to Experience Gained
  `,Dragon:`
  20% Chance to Cast Level 18 Venom When Struck
  12% Chance To Cast Level 15 Hydra On Striking
  Level 16-21 Holy Fire Aura When Equipped
  +360 Defense
  +230 Defense Vs. Missile
  +5-10 To All Attributes (varies)
  +0.375-37.125 To Strength (Based on Character Level)
  Increase Maximum Mana 5% (Armor Only)
  +50 To Mana (Shields Only)
  +5% To Maximum Lightning Resist
  Damage Reduced by 7
  +4% to Experience Gained
  `,Dream:`
  10% Chance To Cast Level 15 Confuse When Struck
  Level 15 Holy Shock Aura When Equipped
  +20-30% Faster Hit Recovery (varies)
  +30% Enhanced Defense
  +150-220 Defense (varies)
  +10 To Vitality
  Increase Maximum Life 5% (Helms Only)
  +50 To Life (Shields Only)
  +0.625-61.875 To Mana (Based On Character Level)
  All Resistances +14-20 (varies)
  20-30% Better Chance of Getting Magic Items (varies)
  +2% to Experience Gained
  `,Edge:`
  Level 15 Thorns Aura When Equipped
  +35% Increased Attack Speed
  +280-320% Enhanced Damage
  Piercing Attack
  +75 Poison Damage Over 5 Seconds
  7% Life Stolen Per Hit
  Prevent Monster Heal
  +5-10 To All Attributes (varies)
  +2 To Mana After Each Kill
  Reduces All Vendor Prices 15%!!!
  `,Faith:`
  Level 12-15 Fanaticism Aura When Equipped (varies)
  +2 To All Skills
  Adds 50-100 Damage
  +330% Enhanced Damage
  Ignore Target's Defense
  300% Bonus To Attack Rating
  +75% Damage To Undead
  +100 To Attack Rating Against Undead
  +120 Fire Damage
  All Resistances +15
  10% Reanimate As: Returned
  75% Extra Gold From Monsters
  +4% to Experience Gained
  `,Fortitude:`
  #### Weapons
  20% Chance To Cast Level 15 Chilling Armor when Struck
  +25% Faster Cast Rate
  +300% Enhanced Damage
  +9 To Minimum Damage
  +50 To Attack Rating
  20% Deadly Strike
  +200% Enhanced Defense
  +X To Life (Based on Character Level)*
  All Resistances +25-30 (varies)
  12% Damage Taken Goes To Mana
  +1 To Light Radius
  +2 Life after each Kill
  +2% to Experience Gained

  #### Body Armor
  20% Chance To Cast Level 15 Chilling Armor when Struck
  +25% Faster Cast Rate
  +300% Enhanced Damage
  +200% Enhanced Defense
  +15 Defense
  +X To Life (Based on Character Level)*
  +5% To Maximum Lightning Resist
  All Resistances +25-30 (varies)
  Damage Reduced By 7
  12% Damage Taken Goes To Mana
  +1 To Light Radius
  +2 Life after each Kill
	+2% to Experience Gained
  `,Grief:`
  +(300-350) to Minimum Damage
	+(300-350) to Maximum Damage
  +30-40% Increased Attack Speed (varies)
  Ignore Target's Defense
  -25% Target Defense
  Adds 5-30 Fire Damage
  -20-25% To Enemy Poison Resistance (varies)
  33% Deadly Strike
  +2 To Mana After Each Kill
  +10-15 Life After Each Kill (varies)
  +20% Bonus to Attack Rating
	+7% Mana stolen per hit
	+4% to Experience Gained
  `,Harmony:`
  Level 10 Vigor Aura When Equipped
  +275-325% Enhanced Damage (varies)
  +9 To Minimum Damage
  +9 To Maximum Damage
  Adds 55-160 Lightning Damage
  Adds 55-160 Fire Damage
  Adds 55-160 Cold Damage
  +2-6 To Valkyrie (varies)
  +10 To Dexterity
  Regenerate Mana 20%
  +2 To Mana After Each Kill
  +2 To Light Radius
  Level 20 Revive (25 Charges)
  `,Ice:`
  100% Chance To Cast Level 40 Blizzard When You Level-up
  25% Chance To Cast Level 35 Frost Nova On Striking
  Level 18 Holy Freeze Aura When Equipped
  +20% Increased Attack Speed
  +140-210% Enhanced Damage (varies)
  Ignore Target's Defense
  +25-30% To Cold Skill Damage (varies)
  -(25-30)% To Enemy Cold Resistance
  7% Life Stolen Per Hit
  20% Deadly Strike
  3.125-309.375 Extra Gold From Monsters (Based on Character Level)
  +4% to Experience Gained
  `,Infinity:`
  50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy
  Level 12 Conviction Aura When Equipped
  +35% Faster Run/Walk
  +255-325% Enhanced Damage (varies)
  -(45-55)% To Enemy Lightning Resistance (varies)
  40% Chance of Crushing Blow
  Prevent Monster Heal
  0.5-49.5 To Vitality (Based on Character Level)
  30% Better Chance of Getting Magic Items
  Level 21 Cyclone Armor (30 Charges)
  +6% to Experience Gained
  `,Insight:`
  Level 12-17 Meditation Aura When Equipped (varies)
  +35% Faster Cast Rate
  +200-260% Enhanced Damage (varies)
  +9 To Minimum Damage
  180-250% Bonus to Attack Rating (varies)
  Adds 5-30 Fire Damage
  +75 Poison Damage Over 5 Seconds
  +1-6 To Critical Strike (varies)
  +5 To All Attributes
  +2 To Mana After Each Kill
  23% Better Chance of Getting Magic Items
  `,"Last Wish":`
  6% Chance To Cast Level 11 Fade When Struck
  10% Chance To Cast Level 18 Life Tap On Striking
  20% Chance To Cast Level 20 Charged Bolt On Attack
  Level 17 Might Aura When Equipped
  +330-375% Enhanced Damage (varies)
  Ignore Target's Defense
  60-70% Chance of Crushing Blow (varies)
  Prevent Monster Heal
  Hit Blinds Target
  +(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level)
  Repairs 1 durability in 25 seconds
  +10% to Experience Gained
  `,Lawbringer:`
  25% Chance To Cast Level 30 Decrepify On Striking
  Level 30-31 Sanctuary Aura When Equipped (varies)
  -50% Target Defense
  Adds 200-210 Fire Damage
  Adds 200-210 Cold Damage
  7% Life Stolen Per Hit
  +200-250 Defense Vs. Missile (varies)
  +200-250 Defense Vs. Melee (varies)
  +10 To Dexterity
  75% Extra Gold From Monsters
  `,Oath:`
  30% Chance To Cast Level 20 Bone Spirit On Striking
  Indestructible
  +50% Increased Attack Speed
  +210-340% Enhanced Damage (varies)
  +75% Damage To Demons
  +100 To Attack Rating Against Demons
  Prevent Monster Heal
  -100 to Monster Defense Per Hit
  +10 To Energy
  +10-15 Magic Absorb (varies)
  Level 16 Heart Of Wolverine (20 Charges)
  `,Obedience:`
  30% Chance To Cast Level 21 Enchant When You Kill An Enemy
  40% Faster Hit Recovery
  +370% Enhanced Damage
  +25% Increased Attack Speed
  -25% Target Defense
  Adds 3-14 Cold Damage 3 Second Duration (Normal)
  -25% To Enemy Fire Resistance
  40% Chance of Crushing Blow
  +10 To Strength
  +10 To Dexterity
  All Resistances +20-30 (varies)
  Requirements -20%
  `,Phoenix:`
  #### Weapons
  100% Chance To Cast level 40 Blaze When You Level-up
  40% Chance To Cast Level 22 Firestorm On Striking
  Level 10-15 Redemption Aura When Equipped (varies)
  +350-400% Enhanced Damage (varies)
  Ignores Target's Defense
  14% Mana Stolen Per Hit
  -(28-30)% To Enemy Fire Resistance
  20% Deadly Strike
  +350-400 Defense Vs. Missile (varies)
  +15-21 Fire Absorb (varies)
  +8% to Experience Gained
  
  #### Shields
  100% Chance To Cast level 40 Blaze When You Level-up
  40% Chance To Cast Level 22 Firestorm On Striking
  Level 10-15 Redemption Aura When Equipped (varies)
  +350-400 Defense Vs. Missile (varies)
  +350-400% Enhanced Damage (varies)
  -28% To Enemy Fire Resistance
  +50 To Life
  +5% To Maximum Lightning Resist
  +10% To Maximum Fire Resist
  +15-21 Fire Absorb (varies)
  `,Pride:`
  25% Chance To Cast Level 50 Fire Wall On Striking
  Level 18-20 Concentration Aura When Equipped (varies)
  +(260-300)% Enhanced Damage
  +20% Increased Attack Speed
  +1-99% Damage To Demons (Based on Character Level)
  20% Deadly Strike
  Hit Blinds Target
  Slows Target by 20%
  +10 To Vitality
  3.75%/lvl Extra Gold from Monsters (Based on Character Level)
  +1.0%/lvl Damage to Undead (Based on Character Level)
  +6% to Experience Gained
  `,Rift:`
  20% Chance To Cast Level 30 Tornado On Striking
  16% Chance To Cast Level 30 Frozen Orb On Attack
  20% Bonus To Attack Rating
  +15% Increased Attack Speed
  Adds 250-400 Magic Damage
  +5-10 To All Stats (varies)
  +10 To Dexterity
  38% Damage Taken Goes To Mana
  75% Extra Gold From Monsters
  Requirements -20%
  +2% to Experience Gained
  `,Spirit:`
  #### Swords
  +1 To All Skills
  +30% Faster Cast Rate
  +25% Faster Hit Recovery
  Adds 1-50 Lightning Damage
  Adds 3-14 Cold Damage 3 Second Duration (Normal)
  +75 Poison Damage Over 5 Seconds
  7% Life Stolen Per Hit
  +250 Defense Vs. Missile
  +22 To Vitality
  +89-112 To Mana (varies)
  +3-8 Magic Absorb (varies)

  #### Shields
  +1 To All Skills
  +30% Faster Cast Rate
  +25% Faster Hit Recovery
  +250 Defense Vs. Missile
  +22 To Vitality
  +89-112 To Mana (varies)
  Cold Resist +35%
  Lightning Resist +35%
  Poison Resist +35%
  +3-8 Magic Absorb (varies)
  Attacker Takes Damage of 14
  `,"Voice of Reason":`
  15% Chance To Cast Level 13 Frozen Orb On Attack
  20% Chance To Cast Level 50 Ice Blast On Striking
  +(1-2) to Cold Skills
  +50 To Attack Rating
  +250-350% Damage To Demons
  +280-300% Damage To Undead (varies)
  +100 To Attack Rating Against Undead
  -(24-36)% To Enemy Cold Resistance
  +10 To Dexterity
  Cannot Be Frozen
  75% Extra Gold From Monsters
  +1 To Light Radius
  `,Wrath:`
  30% Chance To Cast Level 1 Decrepify On Striking
  5% Chance To Cast Level 10 Life Tap On Striking
  +(300-375)% Enhanced Damage
	+30% Increased Attack Speed
  +100 To Attack Rating Against Demons
  Adds 85-120 Magic Damage
  Adds 41-240 Lightning Damage
  20% Chance of Crushing Blow
  Prevent Monster Heal
  +10 To Energy
  Cannot Be Frozen
  +2% to Experience Gained
  `,Bone:`
  15% Chance To Cast level 10 Bone Armor When Struck
  +2 To Necromancer Skill Levels
  +(15-20)% Faster Cast Rate
  +100-150 To Mana (varies)
  All Resistances +15
  Damage Reduced By 7
  Attacker Takes Damage of 28
  `,Enlightenment:`
  5% Chance To Cast Level 15 Blaze When Struck
  +2 To Sorceress Skill Levels
  +1 To Warmth
  +(15-20)% Faster Cast Rate
  +20% Faster Hit Recovery
  +30% Enhanced Defense
  Fire Resist +30%
  Damage Reduced By 7
  `,Myth:`
  10% Chance To Cast Level 1 Taunt On Striking
  +2 To Barbarian Skill Levels
  +30 Defense Vs. Missile
  Replenish Life +10
  +20% Faster Run/Walk
  Attacker Takes Damage of 14
  Requirements -15%
  `,Peace:`
  4% Chance To Cast Level 5 Slow Missiles When Struck
  2% Chance To Cast level 15 Valkyrie On Striking
  +2 To Amazon Skill Levels
  +20% Faster Hit Recovery
  +2 To Critical Strike
  Cold Resist +30%
  Attacker Takes Damage of 14
  `,Principle:`
  100% Chance To Cast Level 5 Holy Bolt On Striking
  +2 To Paladin Skill Levels
  Fire Resist +30%
  +10 to Dexterity
	Replenish Life +5
  `,Rain:`
  5% Chance To Cast Level 15 Cyclone Armor When Struck
  +2 To Druid Skills
  +(15-20)% Faster Cast Rate
  +100-150 To Mana (varies)
  Lightning Resist +30%
  15% Damage Taken Goes to Mana
  +2 Life after each Kill
  `,Treachery:`
  50% Chance To Cast Level 15 Fade When Struck
  25% Chance To Cast level 15 Venom On Striking
  +2 To Assassin Skills
  +45% Increased Attack Speed
  +20% Faster Hit Recovery
  Cold Resist +30%
  50% Extra Gold From Monsters
  `,Plague:`
  20% Chance to Cast level 12 Lower Resist when struck
  25% Chance to Cast level 15 Poison Nova on striking
  Level 13-17 Cleansing Aura When Equipped (varies)
  +2 All Skills
  +20% Increased Attack Speed
  +220-320% Enhanced Damage (varies)
  -(25-30)% To Enemy Poison Resistance
  0.3% (0-29.7) Deadly Strike (Based on Character Level)
  +25% Chance of Open Wounds
  Slows Target by 20%
  +2% to Experience Gained
  `,Pattern:`
  +1 to Martial Arts Skills
  +15% Increased Attack Speed
	Adds 100 Fire/Lightning/Cold Damage
  +80-120% Enhanced Damage (varies)
  Adds 1-50 Lightning Damage
  Adds 3-14 Cold Damage
  +75 Poison Damage Over 5 Seconds
  +15 to Strength
  +15 to Dexterity
  All Resistances +15
  `,"Unbending Will":`
  18% Chance to cast Level 18 Taunt on striking
  +3 To Combat Skills (Barbarian Only)
  +30% Increased Attack Speed
  +300-350% Enhanced Damage (varies)
  +9 To Maximum Damage
  +50 To Attack Rating
  +75% Damage to Undead
  +100 Attack Rating Against Undead
  8-10% Life Stolen Per Hit (varies)
  Prevent Monster Heal
  +10 To Strength
  +10 To Vitality
  Damage Reduced By 8
  +1 Light Radius
  Requirements -20%
  `,Wisdom:`
  +33% Piercing Attack
  +15-25% Bonus to Attack Rating (varies)
  4-8% Mana Stolen Per Hit (varies)
  +30% Enhanced Defense
  +10 Energy
  Replenish Life +5
  Cannot Be Frozen
  +5 Mana After Each Kill
  15% Damage Taken Goes to Mana
  `,Obsession:`
  Indestructible
  24% Chance to cast level 10 Weaken when struck
  +5 To All Skills
  +100% Faster Cast Rate
  +60% Faster Hit Recovery
  Knockback
  +10 To Vitality
  +10 To Energy
  Increase Maximum Life 15-25% (varies)
  Regenerate Mana 15-30% (varies)
  All Resistances +60-70 (varies)
  75% Extra Gold from Monsters
  30% Better Chance of Getting Magic Items
  +4% to Experience Gained
  `,"Flickering Flame":`
  Level 4-8 Resist Fire Aura When Equipped (varies)
  +3 To Fire Skills
  -10-15% to Enemy Fire Resistance (varies)
  +30% Enhanced Defense
  +30 Defense Vs. Missile
  +50-75 To Mana (varies)
  Half Freeze Duration
  +5% To Maximum Fire Resist
  Poison Length Reduced by 50%
  +2% to Experience Gained
  `,Mist:`
  Level 8-12 Concentration Aura When Equipped (varies)
  +3 To All Skills
  20% Increased Attack Speed
  +100% Piercing Attack
  +325-375% Enhanced Damage (varies)
  +9 To Maximum Damage
  20% Bonus to Attack Rating
  Adds 3-14 Cold Damage
  Slows Target by 20%
  +24 Vitality
  All Resistances +40
  +4% to Experience Gained
  `,Bulwark:`
  +20% Faster Hit Recovery
  +4-6% Life stolen per hit
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Replenish Life +30
  Damage Reduced by 7
  Physical Damage Received Reduced by 10%
  `,Cure:`
  Level 1 Cleansing Aura when Equipped
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Poison Resist +40-60%
  Poison Length Reduced by 50%
  `,Ground:`
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Lightning Resist +40-60%
  Lightning Absorb +10-15%
  `,Hearth:`
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Cold Resist +40-60%
  Cold Absorb +10-15%
  Cannot be Frozen
  `,Temper:`
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Fire Resist +40-60%
  Fire Absorb +10-15%
  `,Hustle:`
  #### Weapons
  5% Chance to cast level 1 Burst of Speed on striking
  Level 1 Fanaticism Aura
  +30% Increased Attack Speed
  +180-200% Enhanced Damage
  +75% Damage to Undead
  +100 to Attack Rating against Undead
  +10 to Dexterity

  #### Body Armors
  +65% Faster Run/Walk
  +40% Increased Attack Speed
  +20% Faster Hit Recovery
  +6 to Evade
  +10 to Dexterity
  +All Resistances +10
  Replenish Life +5
  `,Mosaic:`
  +2 to Martial Arts (Assassin only)
  7% Life Steal
  +8-15% to Cold Skill Damage
  +8-15% to Lightning Skill Damage
  +8-15% to Fire Skill Damage
  -(5-12)% to Enemy Cold Resistance
	-(5-12)% to Enemy Lightning Resistance
	-(5-12)% to Enemy Fire Resistance
  Prevent Monster Heal
  Hit Blinds Target +1
	+2% to Experience Gained
  `,Metamorphosis:`
  100% Chance to cast level 1 Mark of the Wolf on striking
  100% Chance to cast level 1 Mark of the Bear on striking
  +5 to Shape Shifting Skills (Druid only)
  +25% Chance of Crushing Blow
  +50-80% Enhanced Defense
  +10 to Strength
  +10 to Vitality
  All Resistances +10
  Curse Duration Reduced by 34%
  +2% to Experience Gained
  `,"Fortune (BT only)":`
  Level 7 Prayer Aura When Equipped
  20% Chance to cast level 20 Blaze when struck
  +77% Enhanced Defense
  20-35% Better Chance of Getting Magic Items (varies)
  +77% Extra Gold from Monsters
  +7 to Mana after each kill
  Damage Reduced by 7
  +20% Faster Hit Recovery
  `,"Knowledge (BT only)":`
  +3 to Warmth
  +20-30 Energy
  +25% Faster Hit Recovery
  +15-25 Faster Run/Walk
  15% Damage Taken Goes To Mana
  +2 to Mana after each Kill
  `,"Revenge (BT only)":`
  +20% Increased Attack Speed 
  +33% Chance to cast level 8 Nova on striking 
  +33% Chance to cast level 8 Fireball on striking 
  +33% Chance to cast level 8 Frost Nova on striking
 	Adds 3-14 Cold Damage 
 	Adds 1-50 Lightning Damage 
  Adds 5-30 Fire Damage 
  `,"Tempest (BT only)":`
  +2 to All Skills
  +25% Faster Cast Rate
  +25% Increased Attack Speed 
  +24% Faster Hit Recovery 
  +50 to Thunderstorm
  +35% to Better Chance of Getting Magic Items
  +20% Chance of Crushing Blow
  +2 to Mana after each Kill 
  +2% to Experience Gained
  `,"Temptation (BT only)":`
  10% Chance to cast level 25 Attract on striking
  +(200-280)% Enhanced Damage 
  +20% Increased Attack Speed 
  +(8-15) to Vitality 
  +(25-40)% Better Chance of Getting Magic Items
  +20% Deadly Strike 
  +20% Increased Attack Speed 
  +20% Bonus to Attack Rating 
  7% Life stolen per hit 
  +2% to Experience Gained 
  Requirements -20% 
  Repairs 1 durability in 4 seconds 
  `,"Broken Promise (BT only)":`
  +20% Faster Hit Recovery 
  +20% Faster Run/Walk 
  +20 to all Attributes 
  +20% Faster Cast Rate 
  +20% Increased Attack Speed 
  20% Better Chance of Getting Magic Items
  Cannot Be Frozen   
  `,"Dilemma (BT only)":`
  +1 to Teleport 
  Drain Life -(20-40)
  -(23-33) Life after each Kill 
  (35-50)% Better Chance of Getting Magic Items
  +2 Life after each Kill 
  50% Extra Gold from Monsters 
  Magic Damage Reduced by 7 
  `,"Pestilence (BT only)":`
  50% Chance to cast level 50 Lower Resist when struck
  Level 15 Cleansing Aura When Equipped 
  +3 to Poison Skills 
  -30% to Enemy Poison Resistance 
  Prevent Monster Heal 
  Slows Target by 50% 
  Magic Resist +50% 
  Poison Resist +30% 
  Curse Duration Reduced by 34% 
  25% Better Chance of Getting Magic Items 
  +4% to Experience Gained 
  `,"Red (BT only)":`
  Increase Maximum Life (15-25)% 
  +(80-100) to Life 
  9% Life stolen per hit 
  +(5-10) Life after each Kill 
  Fire Resist +75% 
  +20 Fire Absorb 
  +(50-80)% Enhanced Defense 
  +10 to Vitality 
  Replenish Life +5 
  +2 Life after each Kill 
  `,"Knight's Vigil (BT only)":`
  Level 10 Defiance Aura When Equipped
  50% Increased Chance of Blocking 
  +15 to Strength 
  +50 to Life 
  Magic Damage Reduced by 7
  Damage Reduced by 7 
  +(5-10)% to Maximum Cold Resist
  All Resistances +15 
  +2 Life after each Kill   
  `,"Trust (BT only)":`
  +20-35 Defense 
  +20% Regenerate Mana 
  +20% Lightning Resist 
  +20% Fire Resist 
  +50 Defense vs Missile 
  +50 Defense vs Melee 
  +15% Damage Taken Goes To Mana
  +10% Increased Chance of Blocking
  `},Vc=Qe({name:"RunewordPopup",data(){return{isVisible:!1,position:{x:0,y:0},runeword:{title:"",ttypes:[],level:0}}},computed:{formatBody(){const e=this.runeword.title;let t=e&&Wc[e]||"---";return t=t.trim(),t=t.replace(/\+?[0-9]+(-[0-9]+)?%?/g,'<span class="is-mod">$&</span>'),t=t.replace(/####\s(.*)\n+/g,'<h4 class="is-title">$1</h4>'),t=t.replace(/\n/g,"<br/>"),t}},methods:{unitPx(e){return`${e}px`},moveTo(e){let{x:n,y:s}=e.getBoundingClientRect();n=n+50,s=s+window.pageYOffset+e.offsetHeight+4;const i=this.$refs.root.offsetHeight,o=s+i,l=document.documentElement.clientHeight;let c=window.scrollY+l;c-=10,o>c&&(s=c-i,s=Math.max(window.scrollY+10,s)),this.position={x:n,y:s}},showRuneword(e,t){this.runeword=e,this.$nextTick(()=>{this.moveTo(t),this.isVisible=!0})},setVisible(e){this.isVisible=e}}}),Nc={class:"rw-RunewordPopup-title"},Gc=["innerHTML"],Kc=["innerHTML"];function Uc(e,t,n,s,r,i){return F(),H("div",{ref:"root",class:"rw-RunewordPopup absolute",style:Ft({visibility:e.isVisible?"visible":"hidden",left:e.unitPx(e.position.x),top:e.unitPx(e.position.y)}),onClick:t[0]||(t[0]=o=>e.setVisible(!1))},[b("h3",Nc,ie(e.runeword.title),1),b("div",{class:"rw-RunewordPopup-type",innerHTML:e.runeword.ttypes},null,8,Gc),b("div",{class:"rw-RunewordPopup-body",innerHTML:e.formatBody},null,8,Kc)],4)}const qc=pe(Vc,[["render",Uc]]),zc=Qe({name:"RunewordsTable",components:{IconArrowDown:wc,IconArrowUp:_c,IconCancel:ui,IconCheckOn:Bc,IconCheckOff:$c,RunewordPopup:qc},props:{items:{type:Array,required:!0}},data(){return{haveRunes:ae.state.haveRunes,pinnedRunewords:ae.state.pinned,sortKey:"level",sortAsc:!0,tableHeads:[{key:"title",label:"Runeword",textLeft:!0},{key:"rune0",label:"Rune"},{key:"rune1",label:"Rune"},{key:"rune2",label:"Rune"},{key:"rune3",label:"Rune"},{key:"rune4",label:"Rune"},{key:"rune5",label:"Rune"},{key:"ttypes",label:"Item Types"},{key:"level",label:"Level"}],envGameVersion:"2.6"}},computed:{runewordIsComplete(){const e=new Map;return this.items.forEach(t=>{e.set(t.title,t.runes.every(n=>this.haveRunes[n]))}),e},itemsBySort(){const e=this.items.slice();let t;if(this.sortKey==="title")t=({title:r},{title:i})=>r===i?0:r>i?1:-1;else if(this.sortKey==="level")t=({level:r},{level:i})=>r===i?0:r>i?1:-1;else if(this.sortKey==="ttypes")t=({ttypes:r},{ttypes:i})=>r[0]===i[0]?0:r[0]>i[0]?1:-1;else if(/rune(\d)/.test(this.sortKey)){const r=parseInt(RegExp.$1);t=({runes:i},{runes:o})=>{const l=i[r],c=o[r];return l===c?0:l>c?1:-1}}t&&e.sort(t),!this.sortAsc&&e.reverse();const n=[...e.filter(r=>this.runewordIsComplete.get(r.title)),...e.filter(r=>!this.runewordIsComplete.get(r.title))];return[...n.filter(r=>this.pinnedRunewords.has(r.title)),...n.filter(r=>!this.pinnedRunewords.has(r.title))]},refPopup(){return this.$refs.popup}},methods:{cssActiveRune(e){return this.haveRunes[e]?"is-active":""},cssCompleteRuneword(e){return this.runewordIsComplete.get(e.title)?"is-complete":""},getTypeCellHtml(e){let t=e.ttypes.map(n=>{const s=n.replace(" ","&nbsp;");return ir[n].url?`<a href="${ir[n].url}" target="_blank">${s}</a>`:s}).join("&nbsp;/&nbsp;");return e.tinfos&&(t+=`<br><span class="rw-Table-tdTypeClass">${e.tinfos}</span>`),t},isSortKey(e){return e===this.sortKey},onEnterRuneword(e,t){e.target&&this.refPopup.showRuneword(t,e.target)},onLeaveRuneword(){this.refPopup.setVisible(!1)},onSortBy(e){this.sortAsc=this.sortKey===e?!this.sortAsc:!0,this.sortKey=e},onTogglePin(e){const t=ae.isPinned(e);ae.setPinned([e],!t),ae.saveState()},unpinAll(){const e=ae.getPinned();ae.setPinned(e,!1),ae.saveState()}}}),jc={class:"rw-Table w-full"},Jc=["onClick"],Xc={key:0,class:"rw-Table-thIcon"},Yc={key:1,class:"rw-Table-thIcon"},Zc={key:0,class:"rw-Table-tr"},Qc={class:"rw-Table-td",colspan:"9"},eu={class:"text-center mt-6 py-2 relative"},tu=b("span",{class:"text-md text-gold tracking-[.2em]"},"PINNED RUNEWORDS",-1),nu={key:1,class:"rw-Table-tr"},su=b("td",{class:"rw-Table-td",colspan:"9"},[b("div",{class:"text-center text-md text-gold tracking-[.2em] mt-6 py-2"},"ALL RUNEWORDS")],-1),ru=[su],iu={class:"rw-Table-td rw-Table-tdTitle p-0 text-left relative min-w-[10em]"},ou=["onMouseenter","onClick"],lu={key:0,class:"rw-Md-ladder",title:"Ladder Only"},au=["onClick"],cu=["onClick"],uu=["innerHTML"],fu={class:"rw-Table-td"};function du(e,t,n,s,r,i){const o=ce("runeword-popup"),l=ce("icon-arrow-down"),c=ce("icon-arrow-up"),f=ce("icon-cancel"),d=ce("icon-check-on"),v=ce("icon-check-off");return F(),H(ue,null,[V(o,{ref:"popup"},null,512),b("table",jc,[b("thead",null,[b("tr",null,[(F(!0),H(ue,null,en(e.tableHeads,p=>(F(),H("th",{key:p.key,class:Te(["rw-Table-th cursor-pointer",{"is-sortCol":e.isSortKey(p.key),"text-left":p.textLeft}]),onClick:R=>e.onSortBy(p.key)},[dt(ie(p.label)+" ",1),e.isSortKey(p.key)&&e.sortAsc?(F(),H("span",Xc,[V(l,{class:"ux-icon ux-icon--fw"})])):Fe("",!0),e.isSortKey(p.key)&&!e.sortAsc?(F(),H("span",Yc,[V(c,{class:"ux-icon ux-icon--fw"})])):Fe("",!0)],10,Jc))),128))])]),b("tbody",null,[(F(!0),H(ue,null,en(e.itemsBySort,(p,R)=>(F(),H(ue,{key:R},[e.pinnedRunewords.size&&R===0?(F(),H("tr",Zc,[b("td",Qc,[b("div",eu,[tu,b("a",{class:"rw-Runes-clear absolute right-0 top-1",href:"#",onClick:t[0]||(t[0]=us((...k)=>e.unpinAll&&e.unpinAll(...k),["prevent"]))},[V(f,{class:"ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"}),dt("unpin all ")])])])])):Fe("",!0),e.pinnedRunewords.size&&R===e.pinnedRunewords.size?(F(),H("tr",nu,ru)):Fe("",!0),b("tr",{class:Te(["rw-Table-tr",e.cssCompleteRuneword(p)]),style:Ft({display:p.filterMatch?"":"none"})},[b("td",iu,[b("span",{class:"rw-Table-tdTitleSpan cursor-pointer",onMouseenter:k=>e.onEnterRuneword(k,p),onMouseleave:t[1]||(t[1]=k=>e.onLeaveRuneword()),onClick:k=>e.onEnterRuneword(k,p)},ie(p.title),41,ou),p.ladder?(F(),H("span",lu,"L")):Fe("",!0),p.version?(F(),H("span",{key:1,class:Te(["rw-Table-tdTitlePatch",{"is-new":p.version===e.envGameVersion}]),title:"Patch version"},ie(p.version),3)):Fe("",!0),e.pinnedRunewords.has(p.title)?(F(),H("div",{key:2,class:"rw-Table-pin is-pinned",onClick:k=>e.onTogglePin(p.title)},[V(d,{class:"rw-Table-pinIcon"})],8,au)):(F(),H("div",{key:3,class:"rw-Table-pin",onClick:k=>e.onTogglePin(p.title)},[V(v,{class:"rw-Table-pinIcon"})],8,cu))]),b("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[0])])},ie(p.runes[0]),3),b("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[1])])},ie(p.runes[1]),3),b("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[2])])},ie(p.runes[2]),3),b("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[3])])},ie(p.runes[3]),3),b("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[4])])},ie(p.runes[4]),3),b("td",{class:Te(["rw-Table-td is-rune",e.cssActiveRune(p.runes[5])])},ie(p.runes[5]),3),b("td",{class:"rw-Table-td rw-Table-tdType min-w-[10em]",innerHTML:e.getTypeCellHtml(p)},null,8,uu),b("td",fu,ie(p.level),1)],6)],64))),128))])])],64)}const hu=pe(zc,[["render",du]]),pu=Qe({name:"Runewords",components:{RunewordsTable:hu},data(){return{isHelpVisible:!1,runewordsList:[],searchText:""}},created(){this.runewordsList=mc.slice(),this.updateFilter(this.searchText)},methods:{onSearchInput(){this.updateFilter(this.searchText)},updateFilter(e){const t=e.toLowerCase(),n=s=>{const r=s.title.toLowerCase().includes(t),i=s.ttypes.some(o=>o.toLowerCase().includes(t));return t===""||r||i};this.runewordsList.forEach(s=>{s.filterMatch=n(s)})}}}),mu={class:"rw-Search flex items-center mb-8"},gu=b("label",{class:"text-gold whitespace-nowrap mr-4"},ie("Search"),-1);function vu(e,t,n,s,r,i){const o=ce("runewords-table");return F(),H("div",null,[b("div",mu,[gu,To(b("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.searchText=l),type:"text",class:"rw-Search-input",onInput:t[1]||(t[1]=(...l)=>e.onSearchInput&&e.onSearchInput(...l))},null,544),[[Nl,e.searchText]])]),b("div",null,[V(o,{items:e.runewordsList},null,8,["items"])])])}const yu=pe(pu,[["render",vu]]),Tu=Qe({name:"App",components:{AppHeader:Oa,AppFooter:Za,Runes:pc,Runewords:yu},computed:{useLayoutHeader(){return!0}}}),Cu={class:"rw-Layout-rowContainer rw-Main py-4 flex mb-24"},_u={class:"mr-16"},Au={class:"overflow-auto flex-1"};function bu(e,t,n,s,r,i){const o=ce("app-header"),l=ce("runes"),c=ce("runewords"),f=ce("app-footer");return F(),H(ue,null,[e.useLayoutHeader?(F(),ri(o,{key:0})):Fe("",!0),b("main",Cu,[b("div",_u,[V(l)]),b("div",Au,[V(c)])]),V(f)],64)}const Su=pe(Tu,[["render",bu]]),Ru=()=>{ae.initialize(),ae.loadState()};Ru();zl(Su).mount("#app");
