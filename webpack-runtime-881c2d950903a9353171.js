!function(){"use strict";var e,t,n,o,r,c={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return c[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=c,e=[],a.O=function(t,n,o,r){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],r=e[s][2];for(var i=!0,d=0;d<n.length;d++)(!1&r||c>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[d])}))?n.splice(d--,1):(i=!1,r<c&&(c=r));i&&(e.splice(s--,1),t=o())}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[n,o,r]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return({35:"0abf01d3",78:"component---src-pages-guides-code-contributions-definition-of-done-md",90:"component---src-pages-guides-code-contributions-pull-request-tests-md",125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",152:"component---src-pages-guides-maintainers-handbook-md",206:"2dee68d8",216:"component---src-pages-guides-code-contributions-index-md",247:"component---src-pages-guides-doc-contributions-index-md",287:"component---src-pages-guides-maintainers-index-md",305:"5e65052d",351:"commons",380:"component---src-pages-guides-code-contributions-backward-compatibility-policy-md",409:"component---src-pages-guides-code-contributions-processing-workflow-md",450:"component---src-pages-guides-index-md",459:"component---src-pages-guides-contributors-index-md",461:"e82996df",490:"b6f3ea4c",530:"f5cc1685",532:"styles",615:"component---src-pages-guides-code-contributions-phpstorm-code-inspections-md",714:"8b61fb39",861:"component---src-pages-community-index-md",964:"component---src-pages-index-md"}[e]||e)+"-"+{35:"d0d42ed50f7956353b4f",78:"db1e348ade8be40c87ac",90:"e5c863ddcd02c9ba6f29",125:"429081b1584c3e2e2745",152:"b03a3fafc8050aca03a1",188:"9ed668d988a1c39c7144",206:"e5291cdf1d26666f5186",216:"8a970bed30807ba2ca02",247:"eb4d8d59c4e376bcbe7d",287:"9a9ff80efc87278eb70a",305:"b4a8df2b4efa48b73ae1",351:"674d791e20bd17bdaa55",380:"184fcab6598396893644",402:"846389298cdc32a26016",409:"9ae7daf7bb3bbd026536",450:"ec194d7d0be065a4a22e",459:"3d5b34f3aa65c81762ed",461:"a4ba151e995e3adfff1c",490:"16ead17fedea8ae7887f",530:"f916bdf75d1ff329b0e9",532:"8ebd799b1143c6f67bdb",586:"1c444e254b25d784b7bd",615:"233e2397a4b855e1929f",714:"53e7360dd04d3604544c",776:"6dca08a14c4adbd9cdc7",861:"00d481bd765e32a532a4",964:"59e2e58ded46f1ea08b8"}[e]+".js"},a.miniCssF=function(e){return"styles.ea44db9436044ffe5c78.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="dev-site-documentation-template:",a.l=function(e,o,r,c){if(t[e])t[e].push(o);else{var i,d;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+r){i=f;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",n+r),i.src=e),t[e]=[o];var l=function(n,o){i.onerror=i.onload=null,clearTimeout(p);var r=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(o)})),n)return n(o)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),d&&document.head.appendChild(i)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},a.p="/commerce-contributor/",o=function(e){return new Promise((function(t,n){var o=a.miniCssF(e),r=a.p+o;if(function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=(i=n[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){var i;if((r=(i=c[o]).getAttribute("data-href"))===e||r===t)return i}}(o,r))return t();!function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=function(c){if(r.onerror=r.onload=null,"load"===c.type)n();else{var i=c&&("load"===c.type?"missing":c.type),a=c&&c.target&&c.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=a,r.parentNode.removeChild(r),o(d)}},r.href=t,document.head.appendChild(r)}(e,r,t,n)}))},r={658:0},a.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&{532:1}[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))},function(){var e={658:0,532:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var r=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=r);var c=a.p+a.u(t),i=new Error;a.l(c,(function(n){if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",i.name="ChunkLoadError",i.type=r,i.request=c,o[1](i)}}),"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,c=n[0],i=n[1],d=n[2],s=0;for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(d)var u=d(a);for(t&&t(n);s<c.length;s++)r=c[s],a.o(e,r)&&e[r]&&e[r][0](),e[c[s]]=0;return a.O(u)},n=self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-881c2d950903a9353171.js.map