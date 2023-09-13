(()=>{"use strict";var n={699:(n,e,t)=>{t.d(e,{Z:()=>b});var r=t(537),a=t.n(r),o=t(645),i=t.n(o),s=t(667),A=t.n(s),c=new URL(t(160),t.b),l=new URL(t(686),t.b),d=new URL(t(375),t.b),f=new URL(t(834),t.b),p=i()(a()),u=A()(c),m=A()(l),g=A()(d),C=A()(f);p.push([n.id,`/* urbanist-latin-ext-400-normal */\n@font-face {\n  font-family: 'Urbanist';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(${u}) format('woff2'), url(${m}) format('woff');\n  unicode-range: U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;\n}\n\n/* urbanist-latin-400-normal */\n@font-face {\n  font-family: 'Urbanist';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(${g}) format('woff2'), url(${C}) format('woff');\n  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;\n}`,"",{version:3,sources:["webpack://./node_modules/@fontsource/urbanist/index.css"],names:[],mappings:"AAAA,kCAAkC;AAClC;EACE,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,oHAAqI;EACrI,qIAAqI;AACvI;;AAEA,8BAA8B;AAC9B;EACE,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,oHAA6H;EAC7H,8KAA8K;AAChL",sourcesContent:["/* urbanist-latin-ext-400-normal */\n@font-face {\n  font-family: 'Urbanist';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(./files/urbanist-latin-ext-400-normal.woff2) format('woff2'), url(./files/urbanist-latin-ext-400-normal.woff) format('woff');\n  unicode-range: U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;\n}\n\n/* urbanist-latin-400-normal */\n@font-face {\n  font-family: 'Urbanist';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(./files/urbanist-latin-400-normal.woff2) format('woff2'), url(./files/urbanist-latin-400-normal.woff) format('woff');\n  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;\n}"],sourceRoot:""}]);const b=p},426:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(537),a=t.n(r),o=t(645),i=t.n(o),s=t(667),A=t.n(s),c=new URL(t(192),t.b),l=i()(a()),d=A()(c);l.push([n.id,`:root {\n    --softBlack: rgba(0,0,0,0.5);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n    color: white;\n    display: grid;\n    grid-template-rows: min-content 2fr 1fr;\n    background-color: black;\n    background-image: url(${d});\n    background-repeat: no-repeat;\n    font-family: 'urbanist';\n    font-size: 1.5em;\n}\n\n/* CLASSES */\n\n.button {\n    cursor: pointer;\n}\n\n.icon {\n    filter: invert(100%) sepia(0%) saturate(18%) hue-rotate(314deg) brightness(106%) contrast(104%);\n}\n\n.scaled {\n    scale: 2.7;\n}\n\n/* #HEADER */\n\n#header, #footer {\n    background-color: var(--softBlack);\n    /* align-content: center; */\n}\n\n#header {\n    display: inline-grid;\n    grid-template-columns: 1fr 2fr 1fr;\n}\n\n#home {\n    position: relative;\n    /* display: grid; */\n}\n\n#home p {\n    margin-left: 60px;\n}\n\n/* #home .button {\n    scale: 2.5;\n    position: absolute;\n    left: 100px;\n    top: -20px;\n    border: 1px solid white;\n} */\n\n#title {\n    justify-self: center;\n}\n\n#navbar {\n    display: flex;\n    justify-content: flex-end;\n}\n\n#navbar :last-child {\n    margin-left: 30px;\n    margin-right: 60px;\n}\n\n/* #CONTENT */\n\n#content {\n    display: grid;\n    justify-items: center;\n}\n\n#modules {\n    display: grid;\n    justify-items: center;\n    width: 85%;\n    height: 80%;\n    background-color: rgba(255, 217, 0, 0.25);\n    padding: 30px;\n    margin: 50px;\n}\n\n#modules p {\n    padding: 0 100px;\n    background-color: var(--softBlack);\n}\n\n/* #FOOTER */\n\n#footer {\n    display: inline-grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding: 20px;\n    justify-items: center;\n}\n\n#socials p {\n    display: flex;\n    gap: 20px;\n}\n\n#map {\n    height: 100%;\n    width: 50%;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,4BAA4B;AAChC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,uCAAuC;IACvC,uBAAuB;IACvB,yDAAqD;IACrD,4BAA4B;IAC5B,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA,YAAY;;AAEZ;IACI,eAAe;AACnB;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,UAAU;AACd;;AAEA,YAAY;;AAEZ;IACI,kCAAkC;IAClC,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;;;;GAMG;;AAEH;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,UAAU;IACV,WAAW;IACX,yCAAyC;IACzC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kCAAkC;AACtC;;AAEA,YAAY;;AAEZ;IACI,oBAAoB;IACpB,kCAAkC;IAClC,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,UAAU;AACd",sourcesContent:[":root {\n    --softBlack: rgba(0,0,0,0.5);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n    color: white;\n    display: grid;\n    grid-template-rows: min-content 2fr 1fr;\n    background-color: black;\n    background-image: url(./assets/pagoda-background.jpg);\n    background-repeat: no-repeat;\n    font-family: 'urbanist';\n    font-size: 1.5em;\n}\n\n/* CLASSES */\n\n.button {\n    cursor: pointer;\n}\n\n.icon {\n    filter: invert(100%) sepia(0%) saturate(18%) hue-rotate(314deg) brightness(106%) contrast(104%);\n}\n\n.scaled {\n    scale: 2.7;\n}\n\n/* #HEADER */\n\n#header, #footer {\n    background-color: var(--softBlack);\n    /* align-content: center; */\n}\n\n#header {\n    display: inline-grid;\n    grid-template-columns: 1fr 2fr 1fr;\n}\n\n#home {\n    position: relative;\n    /* display: grid; */\n}\n\n#home p {\n    margin-left: 60px;\n}\n\n/* #home .button {\n    scale: 2.5;\n    position: absolute;\n    left: 100px;\n    top: -20px;\n    border: 1px solid white;\n} */\n\n#title {\n    justify-self: center;\n}\n\n#navbar {\n    display: flex;\n    justify-content: flex-end;\n}\n\n#navbar :last-child {\n    margin-left: 30px;\n    margin-right: 60px;\n}\n\n/* #CONTENT */\n\n#content {\n    display: grid;\n    justify-items: center;\n}\n\n#modules {\n    display: grid;\n    justify-items: center;\n    width: 85%;\n    height: 80%;\n    background-color: rgba(255, 217, 0, 0.25);\n    padding: 30px;\n    margin: 50px;\n}\n\n#modules p {\n    padding: 0 100px;\n    background-color: var(--softBlack);\n}\n\n/* #FOOTER */\n\n#footer {\n    display: inline-grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding: 20px;\n    justify-items: center;\n}\n\n#socials p {\n    display: flex;\n    gap: 20px;\n}\n\n#map {\n    height: 100%;\n    width: 50%;\n}"],sourceRoot:""}]);const f=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var A=n[s],c=r.base?A[0]+r.base:A[0],l=o[c]||0,d="".concat(c," ").concat(l);o[c]=l+1;var f=t(d),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var u=a(p,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:u,references:1})}i.push(d)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var A=r(n,a),c=0;c<o.length;c++){var l=t(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=A}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},834:(n,e,t)=>{n.exports=t.p+"780c3039154684b840c7.woff"},375:(n,e,t)=>{n.exports=t.p+"29456ffa33d4f710c56e.woff2"},686:(n,e,t)=>{n.exports=t.p+"0bb11634423ce19d490a.woff"},160:(n,e,t)=>{n.exports=t.p+"fbda94a57fe760744c0e.woff2"},192:(n,e,t)=>{n.exports=t.p+"3e4d1ed8af21ba0c376c.jpg"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),A=t.n(s),c=t(216),l=t.n(c),d=t(589),f=t.n(d),p=t(426),u={};u.styleTagTransform=f(),u.setAttributes=A(),u.insert=i().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=l(),e()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals;var m=t(699),g={};g.styleTagTransform=f(),g.setAttributes=A(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;function C(n){console.log("test loadPage.js");let e=document.createElement("h2"),t=document.createElement("p"),r=document.querySelector("#modules");r.hasChildNodes()&&(r.innerHTML="");let a=n.target.textContent;"About Us"===a?(e.innerHTML="About Us",t.innerHTML="Pagoda was established in 1969. It brings together Middle Eastern, Indian and Chinese cuisines for an eclectic palate that evokes images of the Central Asian steppes, along which the Silk Road once laid."):"Menu"===a&&(e.innerHTML="Menu",t.innerHTML="TBD"),r.append(e,t)}const b=t.p+"3604085a6b719889cada.svg",h=t.p+"abac79b314183d90c6b4.svg",B=t.p+"3555b70bb121e9b52047.svg";let y;!async function(){const n={lat:47.9,lng:106.88},{Map:e}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:t}=await google.maps.importLibrary("marker");y=new e(document.getElementById("map"),{zoom:15,center:n,mapId:"DEMO_MAP_ID"}),new t({map:y,position:n,title:"Uluru"})}();let v=new Image(30,30),U=new Image(30,30),I=new Image(30,30);v.src=b,U.src=h,I.src=B,v.classList.add("icon"),U.classList.add("icon"),I.classList.add("icon","scaled"),document.querySelector("#socials p").append(v,U,I);let E=document.querySelector("#navbar :last-child"),w=document.querySelector("#navbar :first-child");E.addEventListener("click",C),w.addEventListener("click",C)})()})();
//# sourceMappingURL=main.js.map