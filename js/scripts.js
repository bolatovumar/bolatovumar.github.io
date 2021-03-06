/*!
 * captionify | semantic image caption generator library in pure JS
 *
 * Copyright 2015, Umar Bolatov
 * Released under the MIT license
 *
 * v0.3.0
 * Date: 2015-07-05
 */
!function(a){"use strict";function b(b){var e={containerSelector:"body",dataCaption:!1,figureClass:"imgFigure",figcaptionClass:"imgFigure__caption",imgClassSelector:"",mode:"overlay",inheritStyles:!0,setFigureWidth:!0},f=d(e,b);"complete"===document.readyState?c(f):a.addEventListener("load",function(b){c(f),a.removeEventListener("load")})}function c(a){var b,c,d=a,k=d.figcaptionClass,l="",m=d.containerSelector,n=d.dataCaption,o="",p=d.figureClass,q=d.imgClassSelector,r=d.inheritStyles,s="",t=d.mode,u=d.setFigureWidth;b=f(m),b.length>0&&(c=g(b,q),c.length>0&&c.forEach(function(a,b,c){if(s="",l=n?e(a,"data-caption"):a.alt,o=e(a,"data-link"),l&&l.length>0){var d=document.createElement("figcaption"),f=document.createElement("figure");if(o&&o.length>0&&(s=document.createElement("a"),s.href=o,s.textContent=l),f.className=p,t&&"bottom"===t){var g=k+" "+k+"--bottom";d.className=g}else d.className=k;if(u&&(f=i(a,f),a.removeAttribute("width")),r){var m=e(a,"style");m&&(a.removeAttribute("style"),f.setAttribute("style",m))}j(f,a),s?d.appendChild(s):d.textContent=l,h(d,a)}}))}function d(a,b){return b&&Object.keys(b).forEach(function(c){a[c]=b[c]}),a}function e(a,b){return a.getAttribute(b)||!1}function f(a){return document.querySelectorAll(a)}function g(a,b){var c=[],d="img";return Array.prototype.forEach.call(a,function(a){b&&(d+="."+b);var e=a.querySelectorAll(d);c.push.apply(c,e)}),c}function h(a,b){b.parentNode.insertBefore(a,b.nextSibling)}function i(a,b){var c=e(a,"width");return c&&"px"===c.substr(c.length-2)&&(b.style.width=c),b}function j(a,b){b.length||(b=[b]);for(var c=b.length-1;c>=0;c--){var d=c>0?a.cloneNode(!0):a,e=b[c],f=e.parentNode,g=e.nextSibling;d.appendChild(e),g?f.insertBefore(d,g):f.appendChild(d)}}a.captionify=b}(window);

captionify({
    container: ".pageContent"
});

