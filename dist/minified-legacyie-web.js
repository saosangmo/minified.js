/^u/.test(typeof define)&&function(a){var b=this.require=function(b){return a[b]};this.define=function(c,d){a[c]=a[c]||d(b)}}({}),define("minified",function(){function x(a){return a!=g?""+a:""}function y(a){return"string"==typeof a}function t(a){return a&&a.nodeType}function M(a){return a}function U(a){a()}function v(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function F(a,b){var c=[];return k(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function u(a,b,c){var d=[];return a(b,function(a,e){k(c.call(b,a,e),function(a){d.push(a)})}),d}function m(a,b,c){return x(a).replace(b,c||"")}function k(a,b){if(E(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=g&&b(a,0);return a}function V(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function r(a){return"function"==typeof a&&!a.item}function E(a){return a&&a.length!=g&&!y(a)&&!t(a)&&!r(a)&&a!==s}function N(a,b){var c=RegExp("(^|\\s)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):p}}function W(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function H(a){return a.Mid=a.Mid||++X}function O(a,b){var c,d=[],e={};return k(a,function(a){k(b(a),function(a){t(a)&&!e[c=H(a)]&&(d.push(a),e[c]=p)})}),d}function Y(a,b){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:g},d=a.get(c),c=a.set(c).get("clientHeight");return a.set(d),c*b+"px"}function ba(a,b,c,d,e,f){return function(g,h){var i,j=g||s.event,k=!f,l=h||j.target;if(f)for(;l&&l!=b&&!(k=f(l));)l=l.parentNode;return k&&(i=(!a.apply(q(f?l:b),c||[j,d])||""==e)&&"|"!=e)&&!h&&(j.stopPropagation&&(j.preventDefault(),j.stopPropagation()),j.cancelBubble=p),!i}}function P(a,b){k(b,function(a){a.e.detachEvent("on"+a.n,a.h)})}function Q(){k(J,U),J=g}function Z(a){J?J.push(a):setTimeout(a,0)}function R(a){return u(k,a,function(a){return y(a)?a:E(a)?R(a):t(a)?(a=a.cloneNode(p),a.removeAttribute("id"),a):g})}function q(a,b,c){return r(a)?Z(a):new z(C(a,b,c))}function C(a,b,c){function d(a){return a=u(k,a,function b(a){return E(a)?u(k,a,b):a}),e?F(a,function(a){for(;a=a.parentNode;)if(a==e||c)return a==e}):a}var e,f,g,h;return b&&1!=(b=C(b)).length?O(b,function(b){return C(a,b,c)}):(e=b&&b[0],y(a)?1<(b=a.split(/\s*,\s*/)).length?O(b,function(a){return C(a,e,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?C(b[2],C(b[1],e),c):a!=(b=m(a,/^#/))?d(n.getElementById(b)):(f=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],h=b[2],b=(g=n.getElementsByClassName&&h)?(e||n).getElementsByClassName(h):(e||n).getElementsByTagName(f||"*"),(f=g?f:h)&&(b=F(b,N(f,g?"nodeName":"className"))),c?d(b):b):d(a))}function K(a,b){var c,d,e={},f=e;return r(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||y(a)&&(f=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(c=N(f[1],"nodeName"),d=N(f[2],"className"),function(a){return 1==t(a)&&c(a)&&d(a)}):b?function(c){return q(a,b).find(c)!=g}:(q(a).each(function(a){e[H(a)]=p}),function(a){return e[H(a)]})}function $(a){var b=K(a);return function(a){return b(a)?g:p}}function S(){function a(a,e){b==g&&(b=a,c=e,setTimeout(function(){k(d,U)},0))}var b,c=[],d=[],e=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,r(d)?(f=d.apply(aa,c),f&&r(f.then)?f.then(function(a){h(p,[a])},function(a){h(w,[a])}):h(p,[f])):h(b,c)}catch(g){h(w,[g])}}var h=S();return b!=g?setTimeout(f,0):d.push(f),h};return a.error=function(a){return e(0,a)},a}function z(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var g=null,p=!0,w=!1,aa,s=this,n=document,X=1,D={},J=/^[ic]/.test(n.readyState)?g:[],L={},T=0,A=!!n.all&&!n.addEventListener;return v({each:function(a){return k(this,a)},filter:function(a){return new z(F(this,a))},collect:function(a){return new z(u(k,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return new z(F(this,function(a,b){return b>=c&&d>b}))},find:function(a,b){for(var c,d=r(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=g)return c},remove:function(){k(this,function(a){A&&1==t(a)&&(k(C("*",a),function(a){P(0,D[a.Mid]),delete D[a.Mid]}),P(0,D[a.Mid]),delete D[a.Mid]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=t(b);return 1==c?u(k,b.childNodes,a):5>c?b.data:g}return u(k,this,a).join("")},trav:function(a,b,c){var d="number"==typeof b,e=K(d?g:b),f=d?b:c;return new z(O(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},up:function(a){return this.trav("parentNode",a,1)},next:function(a,b){return this.trav("nextSibling",a,b||1)},select:function(a,b){return q(a,this,b)},is:function(a){return!this.find($(a))},only:function(a){return new z(F(this,K(a)))},not:function(a){return new z(F(this,$(a)))},get:function(a,b){var c,d,e=this,f=e[0];return f?y(a)?(c=/^([$@]*)(.*)/.exec(m(m(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),f="$"==a?f.className:"$$"==a?A?f.style.cssText:f.getAttribute("style"):"$$fade"==a||"$$show"==a?"hidden"==e.get("$visibility")||"none"==e.get("$display")?0:"$$fade"==a?A?isNaN(e.get("$filter",p))?1:e.get("$filter",p)/100:isNaN(e.get("$opacity",p))?1:e.get("$opacity",p):1:"$$slide"==a?e.get("$height"):"$$scrollX"==a?s.pageXOffset!=g?s.pageXOffset:(n.documentElement||n.body.parentNode||n.body).scrollLeft:"$$scrollY"==a?s.pageXOffset!=g?s.pageYOffset:(n.documentElement||n.body.parentNode||n.body).scrollTop:"$"==c[1]?s.getComputedStyle?s.getComputedStyle(f,g).getPropertyValue(m(c[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(f.currentStyle||f.style)[m(c[2],/^float$/,"cssFloat")]:"@"==c[1]?f.getAttribute(c[2]):f[c[2]],b?parseFloat(m(f,/^[^\d-]+/)):f):(d={},(E(a)?k:v)(a,function(a){d[a]=e.get(a,b)}),d):void 0},set:function(a,b){var c,d=this;return b!==aa?(c=/^([$@]*)(.*)/.exec(m(m(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),"$$fade"==a?this.set({$visibility:b?"visible":"hidden"}).set(A?1>b?{$filter:"alpha(opacity = "+100*b+")",$zoom:1}:{$filter:""}:{$opacity:b}):"$$slide"==a?this.set({$visibility:b?"visible":"hidden",$height:/px/.test(b)?b:function(a,c,d){return Y(q(d),b)},$overflow:"hidden"}):"$$show"==a?b?this.set({$visibility:b?"visible":"hidden",$display:""}).set({$display:function(a){return"none"==a?"block":a}}):this.set({$display:"none"}):"$$"==a?A?this.set("$cssText",b):this.set("@style",b):k(d,function(d,e){var f=r(b)?b(q(d).get(a),e,d):b;"$"==a?k(f&&f.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=d.className||"",e=m(c,RegExp("(^|\\s)"+b+"(?=$|\\s)"));(/^\+/.test(a)||b==a&&c==e)&&(e+=" "+b),d.className=m(e,/^\s+|\s+(?=\s|$)/g)}):"$$scrollX"==a?d.scroll(f,q(d).get("$$scrollY")):"$$scrollY"==a?d.scroll(q(d).get("$$scrollX"),f):"@"==c[1]?f!=g?d.setAttribute(c[2],f):d.removeAttribute(c[2]):"$"==c[1]?d.style[c[2]]=f:d[c[2]]=f})):y(a)||r(a)?this.set("$",a):v(a,function(a,b){d.set(a,b)}),d},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(a,b){return this.each(function(c,d){var e;!function f(a){E(a)?k(a,f):r(a)?f(a(c,d)):a!=g&&(a=t(a)?a:n.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)}(d&&!r(a)?R(a):a)})},fill:function(a){return this.each(function(a){q(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new z(R(this))},animate:function(a,b,c){var d,e=S(),f=this,g=u(k,this,function(b,d){var e,f=q(b),g={};return v(e=f.get(a),function(c,e){var h=a[c];g[c]=r(h)?h(e,d,b):"$$slide"==c?Y(f,h):h}),f.dial(e,g,c)}),h=b||500;return e.stop=function(){return e(w),d()},d=q.loop(function(a){(a>=h||0>a)&&(a=h,d(),e(p,[f])),k(g,function(b){b(a/h)})}),e},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}var e=this,f=c||0,g=r(f)?f:function(a,b,c){return a+c*(b-a)*(f+(1-f)*c*(3-2*c))};return function(c){v(a,function(a,f){var h=b[a],i=0;e.set(a,0>=c?f:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+")":m(h,/-?[\d.]+/,x(g(parseFloat(m(f,/^[^\d-]+/)),parseFloat(m(h,/^[^\d-]+/)),c))))})}},toggle:function(a,b,c,d){var e,f,h=this,i=w;return b?(h.set(a),function(j){j!==i&&(f=(i=j===p||j===w?j:!i)?b:a,c?(e=h.animate(f,e?e.stop():c,d)).then(function(){e=g}):h.set(f))}):h.toggle(m(a,/\b(?=\w)/g,"-"),m(a,/\b(?=\w)/g,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name,d=x(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)q(a.elements[c]).values(b);else!c||/kbox|dio/i.test(a.type)&&!a.checked||(b[c]=b[c]==g?d:u(k,[b[c],d],M))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d,e){return r(b)?this.on(g,a,b,c,e):y(d)?this.on(a,b,c,g,d):this.each(function(f,g){k(a?C(a,f):f,function(a){k(x(b).split(/\s/),function(b){var f=m(b,/[?|]/),h=ba(c,a,d,g,m(b,/[^?|]/g),e&&K(e,a));b={e:a,h:h,n:f},(c.M=c.M||[]).push(b),A?(a.attachEvent("on"+f,h),f=H(a),(D[f]=D[f]||[]).push(b)):(a.addEventListener(f,h,w),(a.M=a.M||[]).push(b))})})})},onOver:function(a,b){var c=this,d=[];return b?this.on(a,"|mouseover |mouseout",function(a,e){var f="mouseout"!=a.type,g=a.relatedTarget||a.toElement;d[e]===f||!f&&g&&(g==c[e]||q(g).up(c[e]).length)||(d[e]=f,b.call(this,f,a))}):this.onOver(g,a)},onFocus:function(a,b){return b?this.on(a,"|focus",b,[p]).on(a,"|blur",b,[w]):this.onFocus(g,a)},onChange:function(a,b){var c=[];return b?this.each(function(d,e){function f(f,g){c[e]=d[g],q(d).on(a,f,function(){var a=d[g];a!=c[e]&&(b.call(this,a,e),c[e]=a)})}/kbox|dio/i.test(d.type)?f("|click","checked"):f(A?"|propertychange":"|input |change |keyup","value")}):this.onChange(g,a)},onClick:function(a,b,c){return r(a)?this.on("click",a,b):this.on(a,"click",b,c)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)k(A?D[e.Mid]:e.M,function(e){e.n==a&&(d=d||!e.h(b,c))}),e=e.parentNode})}},function(a,b){z.prototype[a]=b}),v({request:function(a,b,c,d){d=d||{};var e,f=0,h=S(),i=c&&c.constructor==d.constructor;try{e=s.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),i&&(c=u(v,c,function(a,b){return u(k,b,function(b){return encodeURIComponent(a)+(b!=g?"="+encodeURIComponent(b):"")})}).join("&")),c==g||/post/i.test(a)||(b+="?"+c,c=g),e.open(a,b,p,d.user,d.pass),i&&/post/i.test(a)&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),v(d.headers,function(a,b){e.setRequestHeader(a,b)}),v(d.xhr,function(a,b){e[a]=b}),e.onreadystatechange=function(){4!=e.readyState||f++||(200==e.status?h(p,[e.responseText,e.responseXML]):h(w,[e.status,e.statusText,e.responseText]))},e.send(c)}catch(j){f||h(w,[0,g,x(j)])}return h},toJSON:function a(b){return b==g?""+b:y(b=b.valueOf())?'"'+m(b,/[\\\"\x00-\x1f\x22\x5c\u2028\u2029]/g,V)+'"':E(b)?"["+u(k,b,a).join()+"]":"object"==typeof b?"{"+u(v,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":x(b)},parseJSON:s.JSON?s.JSON.parse:function(b){return b=m(b,/[\x00\xad\u0600-\uffff]/g,V),/^[[\],:{}\s]*$/.test(m(m(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+b+")"):void 0},ready:Z,loop:function(a){function b(a){v(L,function(b,c){c(a)}),T&&g(b)}function c(){return L[f]&&(delete L[f],T--),e}var d,e=0,f=X++,g=s.requestAnimationFrame||function(a){setTimeout(function(){a(+new Date)},33)};return L[f]=function(b){a(e=b-(d=d||b),c)},T++||g(b),c},off:function(a){k(a.M,function(a){A?(a.e.detachEvent("on"+a.n,a.h),W(D[a.e.Mid],a)):(a.e.removeEventListener(a.n,a.h,w),W(a.e.M,a))}),a.M=g}},function(a,b){q[a]=b}),A?(n.attachEvent("onreadystatechange",function(){/^[ic]/.test(n.readyState)&&Q()}),s.attachEvent("onload",Q)):n.addEventListener("DOMContentLoaded",Q,w),s.a=function(){k(D,P)},{$:q,$$:function(a){return C(a)[0]},EE:function(a,b,c){return a=q(n.createElement(a)),E(b)||"object"!=typeof b?a.add(b):a.set(b).add(c)},M:z}});