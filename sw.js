if(!self.define){let e,n={};const r=(r,s)=>(r=new URL(r+".js",s).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let u={};const o=e=>r(e,l),t={module:{uri:l},exports:u,require:o};n[l]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(i(...e),u)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/blank.371283f2.js",revision:null},{url:"_nuxt/default.b164705b.js",revision:null},{url:"_nuxt/entry.02b70826.js",revision:null},{url:"_nuxt/entry.3d28fcd3.css",revision:null},{url:"_nuxt/error-404.367ddfc2.js",revision:null},{url:"_nuxt/error-404.7fc72018.css",revision:null},{url:"_nuxt/error-500.5902ccba.js",revision:null},{url:"_nuxt/error-500.c5df6088.css",revision:null},{url:"_nuxt/index.06ea8491.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"200",revision:"1f93e11b9d11789187df41752eb2eadb"},{url:"404",revision:"1f93e11b9d11789187df41752eb2eadb"},{url:"/songbook/",revision:"1f93e11b9d11789187df41752eb2eadb"},{url:"manifest.webmanifest",revision:"bb2c2b3cdd19291c94205e8be25e3f16"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
