if(/^u/.test(typeof define)){var def={};this.define=function(f,l){def[f]=l()};this.require=function(f){return def[f]}}
define("minified",function(){function f(j){return j.substr(0,3)}function l(j){return null!=j?""+j:""}function p(j){return"string"==typeof j}function h(j){return!!j&&"object"==typeof j}function k(j){return"number"==typeof j}function s(j){return h(j)&&!!j.getDay}function n(j){return!0===j||!1===j}function e(j){var a=typeof j;return"object"==a?!(!j||!j.getDay):"string"==a||"number"==a||n(j)}function m(j){return!!j&&null!=j.length&&!p(j)&&!(j&&j.nodeType)&&!N(j)}function t(j){return j}function q(j){return j+
1}function u(j,a,b){return l(j).replace(a,null!=b?b:"")}function w(j){return u(j,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function x(j){return u(j,/^\s+|\s+$/g)}function B(j,a){for(var b in j)j.hasOwnProperty(b)&&a(b,j[b]);return j}function D(j,a){if(j)for(var b=0;b<j.length;b++)a(j[b],b);return j}function O(j,a){var b=[],c=N(a)?a:function(j){return a!=j};D(j,function(j,a){c(j,a)&&b.push(j)});return b}function X(j,a,b){var c=[];j(a,function(j,a){m(j=b(j,a))?D(j,function(j){c.push(j)}):null!=j&&c.push(j)});
return c}function T(j,a){return X(D,j,a)}function Y(j){var a=[];B(j,function(j){a.push(j)});return a}function C(j,a){var b=[];D(j,function(j,c){b.push(a(j,c))});return b}function U(j,a){if(m(j)){var b=R(a);return G(R(j).sub(0,b.length),b)}return null!=a&&j.substr(0,a.length)==a}function Z(j,a){if(m(j)){var b=R(a);return R(j).sub(-b.length).equals(b)||!b.length}return null!=a&&j.substr(j.length-a.length)==a}function z(j){var a=j.length;return C(j,function(){return j[--a]})}function H(a,b,c){if(!a)return[];
var d=a.length,g=0>b?d+b:b,r=null==c?d:0<=c?c:d+c;return O(a,function(a,j){return j>=g&&j<r})}function P(a,b){var c={};D(a,function(a){c[a]=b});return c}function S(a,b,c){B(a,function(a,j){if(null==b[a]||!c)b[a]=j});return b}function A(a,b){for(var c=N(b)?b:function(a,j){if(b===a)return j},d,g=0;g<a.length;g++)if(null!=(d=c(a[g],g)))return d}function y(a){return C(a,t)}function F(){var a=this;return function(){return new V(E(a,arguments))}}function aa(a){var b={};return O(a,function(a){if(b[a])return!1;
b[a]=1;return!0})}function I(a,b){var c=P(b,1);return O(a,function(a){var j=c[a];c[a]=0;return j})}function Q(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1}function G(a,b){var c=N(a)?a():a,d=N(b)?b():b;if(c==d)return!0;if(null==c||null==d)return!1;if(e(c)||e(d))return s(c)&&s(d)&&c.getTime()==d.getTime();if(m(c))return c.length!=d.length?!1:!A(c,function(a,b){if(!G(a,d[b]))return!0});if(m(d))return!1;var g=Y(c),r=g.length,v=0;B(d,function(){v++});return r!=v?!1:!A(g,function(a){if(!G(c[a],
d[a]))return!0})}function W(a,b,c){return a.apply(c&&b,C(c||b,t))}function E(a,b,c){return C(a,function(a){return N(a)?W(a,b,c):ba})}function ca(a,b,c,d){return function(){return W(a,b,T([c,arguments,d],t))}}function a(a,b){return c(b,0,0,0,a)}function c(a,b,c,d,g,r,v){function m(a){var b=a.length;return b>v?m(a.substr(0,b-v))+(r||",")+a.substr(b-v):a}var l=0>a,e=/(\d+)(\.(.*))?/.exec((l?-a:a).toFixed(b));a=e[1];for(d=(d||".")+e[3];a.length<(g||1);)a="0"+a;v&&(a=m(a));return(l?"-":"")+a+(b?c?u(d,
/[.,]?0+$/):d:"")}function b(a,b,c){return null==b||!a?0:60*parseInt(a[b])+parseInt(a[b+1])+c.getTimezoneOffset()}function d(a,b){if(1==arguments.length)return d(null,a);if(/^\?/.test(a)){if(""==x(b))return null;a=a.substr(1)}var c,g=(c=/[0#]([.,])[_9]/.exec(a))?c[1]:(c=/^[.,]$/.exec(a))?c[0]:".";c=parseFloat(u(u(u(b,","==g?/\./g:/,/g),g,"."),/^[^\d-]*(-?\d)/,"$1"));return isNaN(c)?ba:c}function g(a){return new Date(a.getTime())}function r(a,b,c){a["set"+b].call(a,a["get"+b].call(a)+c);return a}function v(a,
b,c){return 3>arguments.length?v(new Date,a,b):r(g(a),b.charAt(0).toUpperCase()+b.substr(1),c)}function M(a,b,c){var d=b.getTime(),g=c.getTime(),v=g-d;if(0>v)return-M(a,c,b);if(b={milliseconds:1,seconds:1E3,minutes:6E4,hours:36E5}[a])return v/b;b=a.charAt(0).toUpperCase()+a.substr(1);a=Math.floor(v/{fullYear:31536E6,month:2628E6,date:864E5}[a]-2);d=r(new Date(d),b,a);for(v=a;v<1.2*a+4;v++)if(r(d,b,1).getTime()>g)return v}function ga(a){return u(a,/['"\t\n\r]/g,function(a){return la[a]})}function da(a,
b){if(ea[a])return ea[a];var c="with(_.isObject(obj)?obj:{}){"+C(a.split(/{{|}}}?/),function(a,b){var c,j=x(a),d=u(j,/^{/),j=j==d?"esc(":"";if(b%2)return(c=/^each\b(\s+([\w_]+(\s*,\s*[\w_]+)?)\s*:)?(.*)/.exec(d))?"each("+(""==x(c[4])?"this":c[4])+", function("+c[2]+"){":(c=/^if\b(.*)/.exec(d))?"if("+c[1]+"){":(c=/^else\b\s*(if\b(.*))?/.exec(d))?"}else "+(c[1]?"if("+c[2]+")":"")+"{":(c=/^\/(if)?/.exec(d))?c[1]?"}\n":"});\n":(c=/^#(.*)/.exec(d))?c[1]:(c=/(.*)::\s*(.*)/.exec(d))?"print("+j+'_.formatValue("'+
ga(c[2])+'",'+(""==x(c[1])?"this":c[1])+(j&&")")+"));\n":"print("+j+(""==x(d)?"this":d)+(j&&")")+");\n";if(""!=a)return'print("'+ga(a)+'");\n'}).join("")+"}",d=new Function("obj","each","esc","print","_",c);return ea[a]=function(a,c){var j=[];d.call(c||a,a,function(a,b){m(a)?D(a,function(a,c){b.call(a,a,c)}):B(a,function(a,c){b.call(c,a,c)})},b||t,function(){W(j.push,j,arguments)},R);return j.join("")}}function ha(a){return u(a,/[<>'"&]/g,function(a){return"&#"+a.charCodeAt(0)+";"})}function L(a){return function(b,
c){return new V(a(this,b,c))}}function J(a){return function(b,c){return a(this,b,c)}}function K(a){return function(b,c,d){return new V(a(b,c,d))}}function N(a){return"function"==typeof a}function V(a,b){for(var c=0,d=0;d<a.length;d++){var g=a[d];if(b&&m(g))for(var r=0;r<g.length;r++)this[c++]=g[r];else this[c++]=g}this.length=c;this._=!0}function R(){return new V(arguments,!0)}var ba,fa="January,February,March,April,May,June,July,August,September,October,November,December".split(/,/),ia=C(fa,f),ja=
"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(/,/),ma=C(ja,f),ka=["am","pm"],la={'"':'\\"',"'":"\\'","\n":"\\n","\t":"\\t","\r":"\\r"},ea={};S({each:J(D),filter:L(O),collect:L(T),map:L(C),toObject:J(P),equals:J(G),sub:L(H),reverse:L(z),find:J(A),startsWith:J(U),endsWith:J(Z),contains:J(Q),call:L(E),array:J(y),unite:J(F),uniq:L(aa),intersection:L(I),join:function(a){return C(this,t).join(a)},sort:function(a){return new V(C(this,t).sort(a))},tap:function(a){a(this);return this}},
V.prototype);R={filter:K(O),collect:K(T),collectObj:K(function(a,b){return X(B,a,b)}),map:K(C),sub:K(H),reverse:K(z),each:D,toObject:P,find:A,contains:Q,startsWith:U,endsWith:Z,equals:G,keys:K(Y),values:K(function(a,b){var c=[];b?D(b,function(b){c.push(a[b])}):B(a,function(a,b){c.push(b)});return c}),call:K(E),array:y,unite:F,uniq:K(aa),intersection:K(I),bind:ca,partial:function(a,b,c){return ca(a,null,b,c)},once:function(a){var b=0;return function(){if(!b++)return W(a,this,arguments)}},nonOp:t,eachObj:B,
mapObj:function(a,b){var c={};B(a,function(a,d){c[a]=b(a,d)});return c},filterObj:function(a,b){var c={},d=N(b)?b:function(a){return b!=a};B(a,function(a,b){d(a,b)&&(c[a]=b)});return c},isList:m,isFunction:N,isObject:h,isNumber:k,isBool:n,isDate:s,isValue:e,isString:p,toString:l,toList:function(a){return m(a)?a:null!=a?[a]:[]},dateClone:g,dateAdd:v,dateDiff:M,dateMidnight:function(a){a=a||new Date;return new Date(a.getFullYear(),a.getMonth(),a.getDate())},formatNumber:c,pad:a,formatValue:function(d,
g){d=u(d,/^\?/);if(s(g)){var r,e,f=d,h=g,M={y:["FullYear",t],M:["Month",q],n:["Month",ia],N:["Month",fa],d:["Date",t],m:["Minutes",t],H:["Hours",t],h:["Hours",function(a){return a%12||12}],K:["Hours",q],k:["Hours",function(a){return a%12+1}],s:["Seconds",t],S:["Milliseconds",t],a:["Hours",function(a,b){return(b||ka)[12>a?0:1]}],w:["Day",ma],W:["Day",ja],z:["TimezoneOffset",function(b){if(r)return r;var c=0<b?b:-b;return(0>b?"+":"-")+a(2,Math.floor(c/60))+a(2,c%60)}]};if(e=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(d))r=
e[1],h=v(g,"minutes",b(e,2,g)),f=e[4];return u(f,/(\w)(\1*)(?:\[([^\]]+)\])?/g,function(b,c,d,g){if(c=M[c])b=h["get"+(m(c)?c[0]:c)].call(h),g=g&&g.split(","),b=m(c[1])?(g||c[1])[b]:c[1](b,g),null!=b&&!p(b)&&(b=a(d.length+1,b));return b})}return A(d.split(/\s*\|\s*/),function(a){var b,d;if(b=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(a)){a=g;var j=parseFloat(b[3]);if(isNaN(j)||!k(a))a=null==a?"null":l(a),j=b[3];if(b[1]){if(!b[2]&&a==j||"<"==b[1]&&a>j||">"==b[1]&&a<j)return null}else if(a!=j)return null;
a=b[4]}if(k(g)&&(b=/(?:(0[0.,]*)|(#[#.,]*))(_*)(9*)/.exec(a))){d=l(b[1])+l(b[2]);var j=l(b[1]).length?u(d,/[.,]/g).length:1,r=u(u(d,/^.*[0#]/),/[^,.]/g),v=l(b[3]).length+l(b[4]).length,m,e;if(d=/([.,])[^.,]+[.,]/.exec(b[0]))m=d[1],e=d[0].length-2;m=c(g,v,l(b[3]).length,r,j,m,e);e=a;a=b.index;b=l(b[0]).length;return e.substr(0,a)+m+e.substr(a+b)}return a})},parseDate:function(a,c){var d={y:0,M:[1,1],n:[1,ia],N:[1,fa],d:2,m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,ka]},g={},r=1,e,l,f;if(/^\?/.test(a)){if(""==
x(c))return null;a=a.substr(1)}if(f=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(a))e=f,a=f[3];if(!(f=RegExp(a.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g,function(a,b,c,d){return/[dmhkyhs]/i.test(b)?(g[r++]=b,a=c.length+1,"(\\d"+(2>a?"+":"{1,"+a+"}")+")"):"z"==b?(l=r,r+=2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(b)?(g[r++]=[b,d&&d.split(",")],"([a-zA-Z\u0080\ufffd\u1fff]+)"):/w/i.test(b)?"[a-zA-Z\u0080\ufffd\u1fff]+":/\s/.test(b)?"\\s+":w(a)})).exec(c)))return ba;for(var h=[0,0,0,0,0,0,0],M=1;M<r;M++){var p=f[M],k=
g[M];if(m(k)){var t=k[0],n=d[t],q=n[0],k=A(k[1]||n[1],function(a,b){return U(p.toLowerCase(),a.toLowerCase())?b:null});if(null==k)return ba;h[q]="a"==t?h[q]+12*k:k}else k&&(t=parseInt(p),n=d[k],m(n)?h[n[0]]+=t-n[1]:h[n]+=t)}d=new Date(h[0],h[1],h[2],h[3],h[4],h[5],h[6]);return v(d,"minutes",-b(e,1,d)-b(f,l,d))},parseNumber:d,copyObj:S,coal:function(){return A(arguments,t)},trim:x,escapeRegExp:w,escapeHtml:ha,format:function(a,b){return da(a)(b)},template:da,htmlTemlplate:function(a){return da(a,ha)}};
return{_:R}});/^u/.test(typeof define)&&(def={},this.define=function(f,l){def[f]=l()},this.require=function(f){return def[f]});
define("minified",function(){function f(a){return null!=a?""+a:""}function l(a){return"string"==typeof a}function p(a){return a&&a.nodeType}function h(a){return a&&null!=a.length&&!l(a)&&!p(a)&&!w(a)}function k(a){return a}function s(a,c){for(var b in a)a.hasOwnProperty(b)&&c(b,a[b]);return a}function n(a,c){for(var b=0;a&&b<a.length;b++)c(a[b],b);return a}function e(a,c){var b=[],d=w(c)?c:function(a){return c!=a};n(a,function(a,c){d(a,c)&&b.push(a)});return b}function m(a,c){var b=[];n(a,function(a,
g){h(a=c(a,g))?n(a,function(a){b.push(a)}):null!=a&&b.push(a)});return b}function t(a,c){var b=[];s(a,function(a,g){h(a=c(a,g))?n(a,function(a){b.push(a)}):null!=a&&b.push(a)});return b}function q(a,c,b){return f(a).replace(c,b||"")}function u(a){return RegExp("\\b"+a+"\\b","i")}function w(a){return"function"==typeof a&&!a.item}function x(a){return parseFloat(q(a,/^[^\d-]+/))}function B(a){return a.minified=a.minified||++aa}function D(a,c){function b(a){if(p(a)&&!g[r=B(a)])d.push(a),g[r]=!0}var d=
[],g={},r;n(a,function(a){a=c(a);h(a)?n(a,b):b(a)});return d}function O(a){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:null},b=a.get(c);a.set(c);c=a.get("$height",!0);a.set(b);return c}function X(a){a()}function T(a,c){n(c,function(a){a.e.detachEvent("on"+a.n,a.h)})}function Y(){n(Q,X);Q=null}function C(a){Q?Q.push(a):y.setTimeout(a,0)}function U(a,c,b,d){return function(){var g=z(F.createElement(a));h(c)||"object"!=typeof c?g.add(c):g.set(c).add(b);d&&d(g);return g}}
function Z(a){return ca[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function z(a,c,b){return w(a)?C(a):new A(H(a,c,b))}function H(a,c,b){function d(a){a=function L(a){return h(a)?m(a,L):a}(a);return g?e(a,function(a){for(;a=a.parentNode;){if(a===g)return!0;if(b)return!1}}):a}var g,r,v,f,k;if(c&&1!=(c=H(c)).length)return D(c,function(c){return H(a,c,b)});g=c&&c[0];if(!l(a))return d(h(a)?a:[a]);if(1<(c=a.split(/\s*,\s*/)).length)return D(c,function(a){return H(a,g,b)});if(c=/(\S+)\s+(.+)$/.exec(a))return H(c[2],
H(c[1],g),b);if(a!=(c=q(a,/^#/)))return d([F.getElementById(c)]);g=g||F;r=(c=/([\w-]*)\.?([\w-]*)/.exec(a))[1];f=c[2];c=(v=g.getElementsByClassName&&f)?g.getElementsByClassName(f):g.getElementsByTagName(r||"*");if(r=v?r:f)k=u(r),c=e(c,function(a){return k.test(a[v?"nodeName":"className"])});return g?d(c):c}function P(a,c){var b;if(w(a))return a;if(!a||l(a)&&("*"==a||(b=/^([\w-]*)\.([\w-]+)$/.exec(a))||(b=/^([\w-]+)$/.exec(a)))){var d=b&&b[1]&&u(b[1]),g=b&&b[2]&&u(b[2]);return function(a){return 1==
p(a)&&(!d||d.test(a.nodeName))&&(!g||g.test(a.className))}}var r={};z(a,c).each(function(a){r[B(a)]=!0});return function(a){return r[B(a)]}}function S(){var a,c=[],b=[],d=function(d,g){null==a&&(a=d,c=g,y.setTimeout(function(){n(b,X)},0))},g=d.then=function(d,g){var m=S(),e=function(){try{var b=a?d:g;if(w(b)){var e=b.apply(null,c);e&&w(e.then)?e.then(function(a){m(!0,[a])},function(a){m(!1,[a])}):m(!0,[e])}else m(a,c)}catch(h){m(!1,[h])}};null!=a?y.setTimeout(e,0):b.push(e);return m};d.always=function(a){return g(a,
a)};d.error=function(a){return g(0,a)};return d}function A(a){for(var c=this.length=a.length,b=0;b<c;b++)this[b]=a[b]}var y=this,F=document,aa=1,I={},Q=[],G=[],W=y.requestAnimationFrame||function(a){y.setTimeout(a,33)},E=!!F.all&&!Q.map,ca={"\t":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};s({each:function(a){return n(this,a)},filter:function(a){return new A(e(this,a))},collect:function(a){return new A(m(this,a))},sub:function(a,c){var b=0>a?this.length+a:a,d=0<=c?c:this.length+(c||0);return this.filter(function(a,
c){return c>=b&&c<d})},find:function(a){for(var c,b=w(a)?a:function(b,c){if(a===b)return c},d=0;d<this.length;d++)if(null!=(c=b(this[d],d)))return c},remove:function(){n(this,function(a){if(E&&1==p(a)){var c=function(a){T(0,I[a.minified]);delete I[a.minified]};n(H("*",a),c);c(a)}a.parentNode.removeChild(a)})},text:function(){function a(c){var b=p(c);return 1==b?m(c.childNodes,a):5>b?c.data:null}return m(this,a).join("")},trav:function(a,c,b){var d=P("number"==typeof c?null:c),g="number"==typeof c?
c:b||1E9;return new A(D(this,function(b){for(var c=[];(b=b[a])&&c.length<g;)d(b)&&c.push(b);return c}))},select:function(a,c){return z(a,this,c)},is:function(a){var c=P(a);return!this.find(function(a){if(!c(a))return!0})},only:function(a){return this.filter(P(a))},get:function(a,c){var b=this,d=b[0];if(d){if(l(a)){var g=q(q(a,/^%/,"data-"),/^[$@]/),e;e="$"==a?d.className:"$$"==a?E?d.style.cssText:d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==
a?isNaN(e=E?x(d.style.filter)/100:x(d.style.opacity))?1:e:"$$slide"==a?b.get("$height"):/^\$/.test(a)?y.getComputedStyle?y.getComputedStyle(d,null).getPropertyValue(q(g,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(d.currentStyle||d.style)[g]:/^[@%]/.test(a)?d.getAttribute(g):d[g];return c?x(e):e}var m={};(h(a)?n:s)(a,function(a){m[a]=b.get(a,c)});return m}},set:function(a,c){var b=this,d;void 0!==c?"$$fade"==a||"$$slide"==a?b.set({$visibility:0<(d=x(c))?"visible":"hidden",$display:"block"}).set("$$fade"==
a?E?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$opacity:d}:{$height:/px$/.test(c)?c:function(a,b,c){return d*(d&&O(z(c)))+"px"},$overflow:"hidden"}):n(b,function(b,d){var e=q(q(a,/^%/,"data-"),/^[@$]/),m=b.className||"",h=/^\$/.test(a)?b.style:b,f=w(c)?c(z(b).get(a),d,b):c;"$"==a?null!=f&&(n(f.split(/\s+/),function(a){var b=q(a,/^[+-]/),c=m;m=q(m,u(b));if(/^\+/.test(a)||b==a&&c==m)m+=" "+b}),b.className=q(m,/^\s+|\s+(?=\s|$)/g)):"$$"==a?E?h.cssText=f:null!=f?b.setAttribute("style",f):b.removeAttribute("style"):
/^[@%]/.test(a)?null!=f?h.setAttribute(e,f):h.removeAttribute(e):h[e]=f}):l(a)||w(a)?b.set("$",a):s(a,function(a,c){b.set(a,c)});return b},add:function(a,c){return n(this,function(b,d){var g;(function v(a){h(a)?n(a,v):w(a)?v(a(b,d)):null!=a&&(a=p(a)?a:F.createTextNode(a),g?g.parentNode.insertBefore(a,g.nextSibling):c?c(a,b,b.parentNode):b.appendChild(a),g=a)})(p(a)&&d?null:a)})},fill:function(a){return n(this,function(a){z(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,
b,d){d.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,d){d.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,d){d.replaceChild(a,b)})},clone:function(a){return new A(m(this,function(c){var b=p(c);if(1==b){var d={$:c.className||null,$$:E?c.style.cssText:c.getAttribute("style")};n(c.attributes,function(a){var b=a.name;"id"!=b&&("style"!=b&&"class"!=b&&c.getAttribute(b))&&
(d["@"+b]=a.value)});return U(c.tagName,d,z(c.childNodes).clone(),a)}return 5>b?c.data:null}))},animate:function(a,c,b,d){var g=this,m=[],e=/-?[\d.]+/,h,l=S(),k=w(b)?b:function(a,c,d){return a+d*(c-a)*(b+(1-b)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){h();l(!1)};c=c||500;b=b||0;n(g,function(b){var c={o:z(b),e:{}};s(c.s=c.o.get(a),function(b,d){var g=a[b];"$$slide"==b&&(g=g*O(c.o)+"px");c.e[b]=/^[+-]=/.test(g)?q(g.substr(2),e,x(d)+x(q(g,/\+?=/))):g});m.push(c)});h=z.loop(function(a){function b(a,
c){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*c,2):(a=a.charAt(1+c))+a,16):parseInt(q(a,/[^\d,]+/g).split(",")[c])}d.time=a;a>=c||0>a?(n(m,function(a){a.o.set(a.e)}),h(),d.time=null,l(!0,[g])):n(m,function(d){s(d.s,function(g,m){var h="rgb(",l=d.e[g],r=a/c;if(/^#|rgb\(/.test(l))for(var n=0;3>n;n++)h+=Math.round(k(b(m,n),b(l,n),r))+(2>n?",":")");else h=q(l,e,f(k(x(m),x(l),r)));d.o.set(g,h)})})});return l},toggle:function(a,c,b,d){var g=this,m={},e=!1,h=/\b(?=\w)/g,f;return c?g.set(a)&&function(h){if(h!==
e)return f=(e=!0===h||!1===h?h:!e)?c:a,w(f)?f(g,b,d):b?g.animate(f,m.stop?m.stop()||m.time:b,d,m):g.set(f)&&void 0}:g.toggle(q(a,h,"-"),q(a,h,"+"))},values:function(a){var c=a||{};this.each(function(a){var d=a.name,g=f(a.value),e=c[d];if(/form/i.test(a.tagName))z(m(a.elements,k)).values(c);else if(d&&(!/kbox|dio/i.test(a.type)||a.checked))h(e)?e.push(g):c[d]=null==e?g:[e,g]});return c},on:function(a,c,b,d){return this.each(function(g,m){n(a.split(/\s/),function(a){var e=q(a,/\|/),h=l(b)&&b,f=h&&d&&
b,k=h&&(d||b),n=e==a,t=h&&P(h,g),h=function(a,b){var d=a||y.event,g,e=d.target;if(!t||t(e))if((g=(!c.apply(f||b||e,k||[d,m])||k)&&n)&&!b)d.stopPropagation&&(d.preventDefault(),d.stopPropagation()),d.returnValue=!1,d.cancelBubble=!0;return g};a={e:g,h:h,n:e};(c.M=c.M||[]).push(a);E?(g.attachEvent("on"+e,h),e=B(g),(I[e]=I[e]||[]).push(a)):(g.addEventListener(e,h,!0),(g.minified2=g.minified2||[]).push(a))})})},onOver:function(a){var c=this,b=[];return c.on("|mouseover |mouseout",function(d,g){var e=
"mouseout"!=d.type,m=d.relatedTarget||d.toElement;if(b[g]!==e&&(e||!m||m!=c[g]&&!z(m).trav("parentNode",c[g]).length))b[g]=e,a.call(this,e,g)})},trigger:function(a,c){return this.each(function(b){for(var d,g=b;g&&!d;)n(E?I[g.minified]:g.minified2,function(g){g.n==a&&(d=d||g.h(c,b))}),g=g.parentNode})}},function(a,c){A.prototype[a]=c});s({request:function(a,c,b,d,g,e){var k,n=b,q=0,u=S();try{k=y.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),null!=b&&(d=d||{},!l(b)&&!p(b)&&
(n=t(b,function J(a,b){return h(b)?m(b,function(b){return J(a,b)}):encodeURIComponent(a)+(null!=b?"="+encodeURIComponent(b):"")}).join("&")),/post/i.test(a)?!p(b)&&(!l(b)&&!d["Content-Type"])&&(d["Content-Type"]="application/x-www-form-urlencoded"):(c+="?"+n,n=null)),k.open(a,c,!0,g,e),s(d,function(a,b){k.setRequestHeader(a,b)}),k.onreadystatechange=function(){4==k.readyState&&!q++&&(200==k.status?u(!0,[k.responseText,k.responseXML]):u(!1,[k.status,k.statusText,k.responseText]))},k.send(n)}catch(x){q||
u(!1,[0,null,f(x)])}return u},toJSON:function c(b){return null==b?""+b:l(b=b.valueOf())?'"'+q(b,/[\\\"\x00-\x1f\x22\x5c]/g,Z)+'"':h(b)?"["+m(b,c).join()+"]":"object"==typeof b?"{"+t(b,function(b,g){return c(b)+":"+c(g)}).join()+"}":f(b)},parseJSON:y.JSON?y.JSON.parse:function(c){c=q(c,/[\x00\xad\u0600-\uffff]/g,Z);if(/^[[\],:{}\s]*$/.test(q(q(c,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+c+")")},ready:C,setCookie:function(c,b,d,g,e,m){F.cookie=c+"="+(m?b:escape(b))+
(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864E5*d)).toUTCString():"")+"; path="+(g?escapeURI(g):"/")+(e?"; domain="+escape(e):"")},getCookie:function(c,b){var d,g=(d=RegExp("(^|;)\\s*"+c+"=([^;]*)").exec(F.cookie))&&d[2];return b?g:g&&unescape(g)},loop:function(c){var b={c:c,t:(new Date).getTime(),s:function(){for(var c=0;c<G.length;c++)G[c]===b&&G.splice(c--,1)}};2>G.push(b)&&function g(){n(G,function(b){b.c(Math.max(0,(new Date).getTime()-b.t),b.s)}).length&&W(g)}();return b.s},
wait:function(c,b){var d=S();y.setTimeout(function(){d(!0,b)},c||0);return d},off:function(c){n(c.M,function(b){E?(b.e.detachEvent("on"+b.n,b.h),I[b.e.minified]=e(I[b.e.minified],b)):(b.e.removeEventListener(b.n,b.h,!0),b.e.minified2=e(b.e.minified2,b))});c.M=null}},function(c,b){z[c]=b});y.onload=Y;F.addEventListener&&F.addEventListener("DOMContentLoaded",Y,!1);y.unload=function(){n(I,T)};return{$:z,$$:function(c){return H(c)[0]},EE:U,M:A}});var _=require("minified")._;
function parseSourceSections(f){function l(){return{id:"anon"+p++,src:[],desc:"",requires:{},requiredBy:{},syntax:[],example:[],params:[]}}f=f.split("\n");var p=100,h=[],k=l(),s=!1;_.each(f,function(f){if(s&&/^.*\*\/\s*$/.test(f))s=!1;else if(s){var e=f.replace(/^\s*(\*\s?)?/,"").replace(/\s*$/,""),m=e.match(/^\s*@([a-z]+)/);m?(m=m[1],e=_.trim(e.replace(/^\s*@[a-z]+\s*/,"")),"syntax"==m||"example"==m?k[m].push(e):"requires"==m?e.length&&_.each(e.split(/\s+/),function(e){k.requires[e]=1}):"param"==
m?k.params.push({name:e.replace(/\s.*$/,""),desc:e.replace(/^\S+\s+/,"")}):"return"==m?k.params.push({name:"@return",desc:e}):"function"==m?k.params[k.params.length-1].funcs.push(e):k[m]=""!=e?e:1):k.params.length?k.params[k.params.length-1].desc+="\n"+_.trim(e):k.example.length?k.example[k.example.length-1]+="\n"+e:k.desc+=e+"\n"}else/^\s*\/\*\$/.test(f)&&!/\*\/\s*$/.test(f)&&(s=!0,h.push(k),k=l());k.src.push(f)});h.push(k);return h}
function createSectionMap(f){var l={};_.each(f,function(f){l[f.id]=f});return l}function completeRequirements(f,l){var p=0;_.each(f,function(h){_.eachObj(h.requires,function(f){var s=l[f];if(!s)throw Error('Unknown id in requirement: "'+f+'"');_.eachObj(s.requires,function(f){h.requires[f]||(p++,h.requires[f]=1)})})});0<p?completeRequirements(f,l):_.each(f,function(h){_.eachObj(h.requires,function(f){l[f].requiredBy[h.id]=1})})}
function calculateDependencies(f,l){var p={};_.eachObj(l,function(h){l[h]&&(p[h]=1,_.eachObj(f[h].requires,function(h){p[h]=1}))});return p}function createDefaultConfigurationMap(f,l){var p={};_.each(f,function(h){if(h.configurable&&("default"==h.configurable||l))p[h.id]=1});return p}
function compile(f,l,p){var h="",k=calculateDependencies(l,p),s=[],n=!0;_.filter(f,function(e){return k[e.id]||!(e.configurable||e.dependency)}).each(function(e){_.each(e.src,function(e){if(/^\s*$/.test(e))n||(h+="\n"),n=!0;else{var f=e.match(/^(\s*)\/\/\s*@(cond|condblock)\s+(\!?)(\w*)\s*(.*)$/);if(f&&"cond"==f[2]&&!!k[f[4]]!=("!"==f[3]))h+=f[1]+f[5]+"\n";else{var l=!1,p=!0;f&&"condblock"==f[2]?s.push(!!k[f[4]]!=("!"==f[3])):/^\s*\/\/\s*@condend\b/.test(e)&&(l=!0);for(f=0;f<s.length;f++)if(!s[f]){p=
!1;break}p&&(h+=e+"\n");l&&s.pop()}n=!1}})});return h}function prepareSections(f){f=parseSourceSections(f);var l=createSectionMap(f);completeRequirements(f,l);var p=createDefaultConfigurationMap(f);return{sections:f,sectionMap:l,enabledSections:p}}var CONFIG_START="minified.js config start --",CONFIG_COMMENT="// - ",CONFIG_ALL="All sections.",CONFIG_ALL_EXCEPT="All sections except ",CONFIG_ONLY="Only sections ";
function serializeEnabledSections(f,l){var p=_.filter(f,function(e){return e.configurable}),h=_.filter(_.keys(l),function(e){return l[e]}),k,s=[];h.length==p.length?(k=CONFIG_COMMENT+CONFIG_ALL,s=[]):h.length/3>p.length/2?(k=CONFIG_COMMENT+CONFIG_ALL_EXCEPT,s=_.filter(p,function(e){return!l[e.id]}).collect(function(e){return e.id})):(k=CONFIG_COMMENT+CONFIG_ONLY,s=h);var n="// "+CONFIG_START+" use this comment to re-create configuration in the Builder\n"+k,e=50;_(s).sort().each(function(f){e<f.length?
(e=70,n+="\n// - "+f+", "):(n+=f+", ",e-=f.length+2)});return n=n.replace(/,\s*$/,".\n")}function fixConfig(f,l){_.eachObj(l,function(p){f[p]?_.copyObj(f[p].requires,l):delete l[p]});return l}
function deserializeEnabledSections(f,l,p){function h(e){return RegExp("^"+e.replace(/ /g,"\\s+"))}var k=h(CONFIG_START+".*"),s=h(CONFIG_ALL.replace(/\./,"\\.")),n=h(CONFIG_ALL_EXCEPT+"\\s*"),e=h(CONFIG_ONLY+"\\s*"),m=h(CONFIG_COMMENT);p=p.split("\n");for(var t=0;t<p.length;t++){var q=p[t];if(/^\s*\/\/s*/.test(q)&&(q=q.replace(/^\s*\/\/\s*/,""),k.test(q)&&t+1<p.length)){for(var q="",u=t+1;u<p.length;u++)if(m.test(p[u])){if(q+=p[u].replace(m,""),/\s*\.\s*$/.test(p[u]))break}else break;if(s.test(q))return createDefaultConfigurationMap(f,
!0);q=q.replace(/\s*\.\s*$/,"");if(n.test(q)){var w=createDefaultConfigurationMap(f,!0);_.each(q.replace(n,"").split(/\s*,\s*/),function(e){delete w[e]});return fixConfig(l,w)}if(e.test(q))return w={},_.each(q.replace(e,"").split(/\s*,\s*/),function(e){l[e]&&(w[e]=1)}),fixConfig(l,w)}}return null};var MINI=require("minified"),$=MINI.$,$$=MINI.$$,EE=MINI.EE,_=require("minifiedUtil")._,MAX_SIZE=4095,SRC="/download/minified-web-src.js",GROUPS="INTERNAL SELECTORS ELEMENT REQUEST JSON EVENTS COOKIE ANIMATION OPTIONS".split(" ");
function closureCompile(f,l,p){$.request("post","http://closure-compiler.appspot.com/compile",{js_code:f,output_format:"json",output_info:["compiled_code","statistics"],output_file_name:"minified-custom.js",compilation_level:l?"ADVANCED_OPTIMIZATIONS":"SIMPLE_OPTIMIZATIONS"}).then(function(f){p&&p($.parseJSON(f))},function(f,l,s){window.console&&console.log("error",f,l,s);p&&p(null)}).error(function(f){window.console&&console.log(f)})}
function setUpConfigurationUI(f){function l(){$(".modCheck").each(function(e){var f=0;$(".secCheck",e.parentNode.parentNode).each(function(e){e.checked&&f++});e.checked=0<f})}function p(e){var h=f.sectionMap[e.id.substr(4)];e.checked?_.eachObj(h.requires,function(e){$("#sec-"+e).set("checked",!0)}):_.eachObj(h.requiredBy,function(e){$("#sec-"+e).set("checked",!1)})}$("#compile").on("click",function(){var e={};$(".secCheck").each(function(f){f.checked&&(e[f.id.substr(4)]=1)});var h=compile(f.sections,
f.sectionMap,e),l=serializeEnabledSections(f.sections,e);if($$("#compressionAdvanced").checked)$$("#compile").disabled=!0,closureCompile(h,!0,function(e){$$("#compile").disabled=!1;$("#resultDiv").animate({$$slide:1});e?($("#gzipRow, #downloadRow").set({$display:"table-row"}),$$("#resultSrc").value=l+"\n"+e.compiledCode,$("#resultPlain").fill((e.statistics.compressedSize/1024).toFixed(2)+"kb ("+e.statistics.compressedSize+" bytes)"),$("#resultGzippedSize").fill((e.statistics.compressedGzipSize/1024).toFixed(2)+
"kb ("+e.statistics.compressedGzipSize+" bytes)"),$$("#resultLink").setAttribute("href","http://closure-compiler.appspot.com"+e.outputFilePath),$("#resultGzippedComment").set({$$fade:e.statistics.compressedGzipSize>MAX_SIZE?1:0})):alert("Google Closure Service not availble. Try again later.")});else try{$("#resultDiv").animate({$$slide:1}),$$("#resultSrc").value=l+h,$("#resultPlain").fill((h.length/1024).toFixed(2)+"kb"),$("#gzipRow, #downloadRow").set({$display:"none"})}catch(k){console.log(k)}return!1});
var h=$("#configSrcDiv").toggle({$$slide:0},{$$slide:1});$("#fromScratch").on("|click",h,[!1]);$("#loadConfig").on("|click",h,[!0]);$("#recreate").on("click",function(){try{var e=$$("#configSrc").value,h=deserializeEnabledSections(f.sections,f.sectionMap,e);h?(_.eachObj(f.sectionMap,function(e){var f=$$("#sec-"+e);f&&(f.checked=!!h[e])}),l()):alert("Can not find configuration in source.")}catch(k){console.log(k)}});$("#sectionCheckboxes").fill();for(var k=1;k<GROUPS.length;k++){var s;$("#sectionCheckboxes").add(s=
EE("div",{"@id":"divMod-"+k},EE("div",{className:"groupDescriptor"},[h=EE("input",{"@id":"mod-"+k,className:"modCheck","@type":"checkbox",checked:"checked"})(),EE("label",{"@for":"mod-"+k},GROUPS[k])]))());$(h).on("change",function(){var e=this.checked;$(".secCheck",this.parentNode.parentNode).each(function(f){f.checked=e;p(f)});l();return!0});var n;_.filter(f.sections,function(e){return e.group==GROUPS[k]&&e.configurable}).sort(function(e,f){var h=e.name||e.id,l=f.name||f.id;return h==l?0:h>l?1:
-1}).each(function(e){function h(e,l){var k=_.filter(_.keys(l),function(e){return!!l[e].name});if(!k.length)return null;var m=0,n=e;_.each(k,function(e){m++<Math.min(k.length,8)&&(1<m&&(n=m==Math.min(k.length,8)?n+" and ":n+", "),n=8==m&&8<k.length?n+"more":n+(f.sectionMap[e].name||f.sectionMap[e].id))});return n+="."}var k=h("Required by ",e.requiredBy),q=h("Requires ",e.requires);s.add(EE("div",{className:"sectionDescriptor"},[n=EE("input",{className:"secCheck","@type":"checkbox","@id":"sec-"+e.id,
checked:"default"==e.configurable?"checked":null})(),EE("label",{"@for":"sec-"+e.id},e.name||e.id),EE("div",{className:"requirements"},[k?[k,EE("br")]:null,q])]));$(n).on("change",function(){p(this);l();return!0})})}}
$(function(){var f=/MSIE\s([\d.]+)/i.exec(navigator.userAgent);f&&10>parseInt(f[1])?$("#builderDiv").fill("Sorry, the Builder tool requires at least Internet Explorer 10 (or, alternatively, Chrome or Firefox). Earlier versions lack CORS support required to use Google Closure's web service."):$.request("get",SRC,null).then(function(f){setUpConfigurationUI(prepareSections(f))}).error(function(f){window.console&&console.log(f)})});
