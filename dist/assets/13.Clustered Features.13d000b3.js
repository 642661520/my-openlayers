import{_ as t,a9 as e,E as s,D as r,aa as n,an as o,c9 as a,ca as i,v as u,al as c,k as l,M as p,V as f,h}from"./TileProperty.6da85ab0.js";import{O as d}from"./OSM.2ead155c.js";import{T as m}from"./Tile.28bcaf1f.js";import{F as v,V as y,a as g}from"./Vector.c3321bd0.js";import{S as w,f as D,a as b,F as j}from"./featureloader.82820175.js";import{T as C}from"./Text.72762bb9.js";import{N as _}from"./Slider.3666b5ec.js";import{i as F,j as T,A as M,c as O,d as S,u as x,F as E,b as R,e as I,o as A}from"./vendor.a926ca27.js";import"./XYZ.473ba1b0.js";import"./BaseTile.190efee2.js";import"./TileLayer.24fccdef.js";import"./light.f92f6943.js";import"./fade-in-scale-up.cssr.85d45d5e.js";var G,N=(G=function(t,e){return(G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function s(){this.constructor=t}G(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}),P=function(p){function f(s){var r=p.call(this,{attributions:s.attributions,wrapX:s.wrapX})||this;return r.resolution=void 0,r.distance=void 0!==s.distance?s.distance:20,r.minDistance=s.minDistance||0,r.interpolationRatio=0,r.features=[],r.geometryFunction=s.geometryFunction||function(s){var r=s.getGeometry();return t(r.getType()==e.POINT,10),r},r.createCustomCluster_=s.createCluster,r.source=null,r.boundRefresh_=r.refresh.bind(r),r.updateDistance(r.distance,r.minDistance),r.setSource(s.source||null),r}return N(f,p),f.prototype.clear=function(t){this.features.length=0,p.prototype.clear.call(this,t)},f.prototype.getDistance=function(){return this.distance},f.prototype.getSource=function(){return this.source},f.prototype.loadFeatures=function(t,e,s){this.source.loadFeatures(t,e,s),e!==this.resolution&&(this.resolution=e,this.refresh())},f.prototype.setDistance=function(t){this.updateDistance(t,this.minDistance)},f.prototype.setMinDistance=function(t){this.updateDistance(this.distance,t)},f.prototype.getMinDistance=function(){return this.minDistance},f.prototype.setSource=function(t){this.source&&this.source.removeEventListener(s.CHANGE,this.boundRefresh_),this.source=t,t&&t.addEventListener(s.CHANGE,this.boundRefresh_),this.refresh()},f.prototype.refresh=function(){this.clear(),this.cluster(),this.addFeatures(this.features)},f.prototype.updateDistance=function(t,e){var s=0===t?0:Math.min(e,t)/t,r=t!==this.distance||this.interpolationRatio!==s;this.distance=t,this.minDistance=e,this.interpolationRatio=s,r&&this.refresh()},f.prototype.cluster=function(){if(void 0!==this.resolution&&this.source)for(var t=l(),e=this.distance*this.resolution,s=this.source.getFeatures(),a={},i=0,u=s.length;i<u;i++){var c=s[i];if(!(r(c)in a)){var p=this.geometryFunction(c);if(p){var f=p.getCoordinates();n(f,t),o(t,e,t);var h=this.source.getFeaturesInExtent(t).filter((function(t){var e=r(t);return!(e in a)&&(a[e]=!0,!0)}));this.features.push(this.createCluster(h,t))}}}},f.prototype.createCluster=function(t,e){for(var s=[0,0],r=t.length-1;r>=0;--r){var n=this.geometryFunction(t[r]);n?a(s,n.getCoordinates()):t.splice(r,1)}i(s,1/t.length);var o=u(e),l=this.interpolationRatio,p=new c([s[0]*(1-l)+o[0]*l,s[1]*(1-l)+o[1]*l]);return this.createCustomCluster_?this.createCustomCluster_(p,t):new v({geometry:p,features:t})},f}(y);const V=R("div",{id:"map",class:"map"},null,-1),k=I(" distance "),L=I(" minDistance "),X={setup(t){const e=F(40),s=F(20),r=new Array(2e4),n=45e5;for(let p=0;p<2e4;p++){const t=[2*n*Math.random()-n,2*n*Math.random()-n];r[p]=new v(new c(t))}const o=new y({features:r}),a=new P({distance:parseInt(e.value,10),minDistance:parseInt(s.value,10),source:o}),i={},u=new g({source:a,style:function(t){const e=t.get("features").length;let s=i[e];return s||(s=new w({image:new D({radius:10,stroke:new b({color:"#fff"}),fill:new j({color:"#3399cc"})}),text:new C({text:e.toString(),fill:new j({color:"#fff"})})}),i[e]=s),s}}),l=new m({source:new d}),R=new p({layers:[l,u],view:new f({center:[0,0],zoom:2,minZoom:2})});return R.on("click",(t=>{u.getFeatures(t.pixel).then((t=>{if(t.length){const e=t[0].get("features");if(e.length>1){const t=h(e.map((t=>t.getGeometry().getCoordinates())));R.getView().fit(t,{duration:1e3,padding:[50,50,50,50]})}}}))})),T((()=>{R.setTarget("map")})),M(e,(t=>{a.setDistance(parseInt(e.value,10))})),M(s,(t=>{a.setMinDistance(parseInt(s.value,10))})),(t,r)=>(A(),O(E,null,[V,k,S(x(_),{value:e.value,"onUpdate:value":r[0]||(r[0]=t=>e.value=t)},null,8,["value"]),L,S(x(_),{value:s.value,"onUpdate:value":r[1]||(r[1]=t=>s.value=t)},null,8,["value"])],64))}};export{X as default};