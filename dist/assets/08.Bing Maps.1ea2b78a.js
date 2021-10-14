import{D as e,I as t,bG as r,L as o,K as i,bT as a,bU as n,bV as s,i as u,M as c,V as l}from"./TileProperty.6da85ab0.js";import{a as p,T as m}from"./Tile.28bcaf1f.js";import{c as d}from"./TileLayer.24fccdef.js";import{N as h}from"./Select.6b465d60.js";import{i as f,A as v,j as y,c as g,d as _,u as b,F as S,b as w,o as j}from"./vendor.a926ca27.js";import"./BaseTile.190efee2.js";import"./light.f92f6943.js";import"./fade-in-scale-up.cssr.85d45d5e.js";import"./use-rtl.2c9540d8.js";var O,T=(O=function(e,t){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}O(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});!function(e){function t(t){var r=this,o="Unexpected response status: "+t.status;return(r=e.call(this,o)||this).name="ResponseError",r.response=t,r}T(t,e)}(Error),function(e){function t(t){var r=e.call(this,"Failed to issue request")||this;return r.name="ClientError",r.client=t,r}T(t,e)}(Error);var x=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();var A=function(c){function l(o){var i=this,a=void 0!==o.hidpi&&o.hidpi;return(i=c.call(this,{cacheSize:o.cacheSize,crossOrigin:"anonymous",imageSmoothing:o.imageSmoothing,opaque:!0,projection:t("EPSG:3857"),reprojectionErrorThreshold:o.reprojectionErrorThreshold,state:r.LOADING,tileLoadFunction:o.tileLoadFunction,tilePixelRatio:a?2:1,wrapX:void 0===o.wrapX||o.wrapX,transition:o.transition,zDirection:o.zDirection})||this).hidpi_=a,i.culture_=void 0!==o.culture?o.culture:"en-us",i.maxZoom_=void 0!==o.maxZoom?o.maxZoom:-1,i.apiKey_=o.key,i.imagerySet_=o.imagerySet,function(t,r,o,i){var a=document.createElement("script"),n="olc_"+e(r);function s(){delete window[n],a.parentNode.removeChild(a)}a.async=!0,a.src=t+(-1==t.indexOf("?")?"?":"&")+(i||"callback")+"="+n;var u=setTimeout((function(){s(),o&&o()}),1e4);window[n]=function(e){clearTimeout(u),s(),r(e)},document.getElementsByTagName("head")[0].appendChild(a)}("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+i.imagerySet_+"?uriScheme=https&include=ImageryProviders&key="+i.apiKey_+"&c="+i.culture_,i.handleImageryMetadataResponse.bind(i),void 0,"jsonp"),i}return x(l,c),l.prototype.getApiKey=function(){return this.apiKey_},l.prototype.getImagerySet=function(){return this.imagerySet_},l.prototype.handleImageryMetadataResponse=function(e){if(200==e.statusCode&&"OK"==e.statusDescription&&"ValidCredentials"==e.authenticationResultCode&&1==e.resourceSets.length&&1==e.resourceSets[0].resources.length){var c=e.resourceSets[0].resources[0],l=-1==this.maxZoom_?c.zoomMax:this.maxZoom_,p=this.getProjection(),m=o(p),h=this.hidpi_?2:1,f=c.imageWidth==c.imageHeight?c.imageWidth/h:[c.imageWidth/h,c.imageHeight/h],v=i({extent:m,minZoom:c.zoomMin,maxZoom:l,tileSize:f});this.tileGrid=v;var y=this.culture_,g=this.hidpi_;if(this.tileUrlFunction=d(c.imageUrlSubdomains.map((function(e){var t=[0,0,0],r=c.imageUrl.replace("{subdomain}",e).replace("{culture}",y);return function(e,o,i){if(e){a(e[0],e[1],e[2],t);var n=r;return g&&(n+="&dpi=d1&device=mobile"),n.replace("{quadkey}",function(e){var t,r,o=e[0],i=new Array(o),a=1<<o-1;for(t=0;t<o;++t)r=48,e[1]&a&&(r+=1),e[2]&a&&(r+=2),i[t]=String.fromCharCode(r),a>>=1;return i.join("")}(t))}}}))),c.imageryProviders){var _=n(t("EPSG:4326"),this.getProjection());this.setAttributions(function(e){var t=[],r=e.viewState,o=this.getTileGrid(),i=o.getZForResolution(r.resolution,this.zDirection),a=o.getTileCoordForCoordAndZ(r.center,i)[0];return c.imageryProviders.map((function(r){for(var o=!1,i=r.coverageAreas,n=0,c=i.length;n<c;++n){var l=i[n];if(a>=l.zoomMin&&a<=l.zoomMax){var p=l.bbox,m=[p[1],p[0],p[3],p[2]],d=s(m,_);if(u(d,e.extent)){o=!0;break}}}o&&t.push(r.attribution)})),t.push('<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html" target="_blank">Terms of Use</a>'),t}.bind(this))}this.setState(r.READY)}else this.setState(r.ERROR)},l}(p);const D=w("div",{id:"map",class:"map"},null,-1),E={setup(e){const t=f(0),r=["RoadOnDemand","Aerial","AerialWithLabelsOnDemand","CanvasDark","OrdnanceSurvey"],o=[],i=[];for(let s=0;s<r.length;++s)i.push(new m({visible:s===t.value,preload:1/0,source:new A({key:"AgHgthGyDcFGMHyPq1KlqB6fvhA_a5XNnAAF6mAuDDrnTmxDBjGBDHpZqrUeU0AZ",imagerySet:r[s]})})),o.push({label:r[s],value:s});const a=new c({layers:i,view:new l({center:[-6655.5402445057125,6709968.258934638],zoom:13})}),n=(e,t)=>{console.log(e,t)};return v(t,((e,t)=>{i[e].setVisible(!0),i[t].setVisible(!1)})),y((()=>{a.setTarget("map")})),(e,r)=>(j(),g(S,null,[D,_(b(h),{value:t.value,"onUpdate:value":[r[0]||(r[0]=e=>t.value=e),n],options:o,"default-value":"RoadOnDemand"},null,8,["value"])],64))}};export{E as default};