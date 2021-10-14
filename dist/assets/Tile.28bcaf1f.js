import{g as t,a as e,b as i,c as r,d as o,e as n,l as s,f as a,h as c,i as h,m as l,j as u,k as d,t as p,n as f,o as g,p as _,q as v,r as T,s as y,u as E,v as j,w as m,T as P,x as F,y as x,z as C,E as b,A as O,B as I,C as W,D as G,F as w,G as S,H as M,I as R,J as L}from"./TileProperty.6da85ab0.js";import{I as D,B as A}from"./BaseTile.190efee2.js";import{U as X,C as k}from"./TileLayer.24fccdef.js";var K,Y=.5,U=!0,q=function(){function p(c,h,l,u,d,p){this.sourceProj_=c,this.targetProj_=h;var f={},g=t(this.targetProj_,this.sourceProj_);this.transformInv_=function(t){var e=t[0]+"/"+t[1];return f[e]||(f[e]=g(t)),f[e]},this.maxSourceExtent_=u,this.errorThresholdSquared_=d*d,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!u&&!!this.sourceProj_.getExtent()&&e(u)==e(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?e(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?e(this.targetProj_.getExtent()):null;var _=i(l),v=r(l),T=o(l),y=n(l),E=this.transformInv_(_),j=this.transformInv_(v),m=this.transformInv_(T),P=this.transformInv_(y),F=10+(p?Math.max(0,Math.ceil(s(a(l)/(p*p*256*256)))):0);if(this.addQuad_(_,v,T,y,E,j,m,P,F),this.wrapsXInSource_){var x=1/0;this.triangles_.forEach((function(t,e,i){x=Math.min(x,t.source[0][0],t.source[1][0],t.source[2][0])})),this.triangles_.forEach(function(t){if(Math.max(t.source[0][0],t.source[1][0],t.source[2][0])-x>this.sourceWorldWidth_/2){var e=[[t.source[0][0],t.source[0][1]],[t.source[1][0],t.source[1][1]],[t.source[2][0],t.source[2][1]]];e[0][0]-x>this.sourceWorldWidth_/2&&(e[0][0]-=this.sourceWorldWidth_),e[1][0]-x>this.sourceWorldWidth_/2&&(e[1][0]-=this.sourceWorldWidth_),e[2][0]-x>this.sourceWorldWidth_/2&&(e[2][0]-=this.sourceWorldWidth_);var i=Math.min(e[0][0],e[1][0],e[2][0]);Math.max(e[0][0],e[1][0],e[2][0])-i<this.sourceWorldWidth_/2&&(t.source=e)}}.bind(this))}f={}}return p.prototype.addTriangle_=function(t,e,i,r,o,n){this.triangles_.push({source:[r,o,n],target:[t,e,i]})},p.prototype.addQuad_=function(t,i,r,o,n,s,a,u,d){var p=c([n,s,a,u]),f=this.sourceWorldWidth_?e(p)/this.sourceWorldWidth_:null,g=this.sourceWorldWidth_,_=this.sourceProj_.canWrapX()&&f>.5&&f<1,v=!1;if(d>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){var T=c([t,i,r,o]);v=e(T)/this.targetWorldWidth_>.25||v}!_&&this.sourceProj_.isGlobal()&&f&&(v=f>.25||v)}if(!(!v&&this.maxSourceExtent_&&isFinite(p[0])&&isFinite(p[1])&&isFinite(p[2])&&isFinite(p[3]))||h(p,this.maxSourceExtent_)){var y=0;if(!(v||isFinite(n[0])&&isFinite(n[1])&&isFinite(s[0])&&isFinite(s[1])&&isFinite(a[0])&&isFinite(a[1])&&isFinite(u[0])&&isFinite(u[1])))if(d>0)v=!0;else if(1!=(y=(isFinite(n[0])&&isFinite(n[1])?0:8)+(isFinite(s[0])&&isFinite(s[1])?0:4)+(isFinite(a[0])&&isFinite(a[1])?0:2)+(isFinite(u[0])&&isFinite(u[1])?0:1))&&2!=y&&4!=y&&8!=y)return;if(d>0){if(!v){var E=[(t[0]+r[0])/2,(t[1]+r[1])/2],j=this.transformInv_(E),m=void 0;if(_)m=(l(n[0],g)+l(a[0],g))/2-l(j[0],g);else m=(n[0]+a[0])/2-j[0];var P=(n[1]+a[1])/2-j[1];v=m*m+P*P>this.errorThresholdSquared_}if(v){if(Math.abs(t[0]-r[0])<=Math.abs(t[1]-r[1])){var F=[(i[0]+r[0])/2,(i[1]+r[1])/2],x=this.transformInv_(F),C=[(o[0]+t[0])/2,(o[1]+t[1])/2],b=this.transformInv_(C);this.addQuad_(t,i,F,C,n,s,x,b,d-1),this.addQuad_(C,F,r,o,b,x,a,u,d-1)}else{var O=[(t[0]+i[0])/2,(t[1]+i[1])/2],I=this.transformInv_(O),W=[(r[0]+o[0])/2,(r[1]+o[1])/2],G=this.transformInv_(W);this.addQuad_(t,O,W,o,n,I,G,u,d-1),this.addQuad_(O,i,r,W,I,s,a,G,d-1)}return}}if(_){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}0==(11&y)&&this.addTriangle_(t,r,o,n,a,u),0==(14&y)&&this.addTriangle_(t,r,i,n,a,s),y&&(0==(13&y)&&this.addTriangle_(i,o,t,s,u,n),0==(7&y)&&this.addTriangle_(i,o,r,s,u,a))}},p.prototype.calculateSourceExtent=function(){var t=d();return this.triangles_.forEach((function(e,i,r){var o=e.source;u(t,o[0]),u(t,o[1]),u(t,o[2])})),t},p.prototype.getTriangles=function(){return this.triangles_},p}(),Z={imageSmoothingEnabled:!1,msImageSmoothingEnabled:!1};function z(t,e,i,r,o){t.beginPath(),t.moveTo(0,0),t.lineTo(e,i),t.lineTo(r,o),t.closePath(),t.save(),t.clip(),t.fillRect(0,0,Math.max(e,r)+1,Math.max(i,o)),t.restore()}function Q(t,e){return Math.abs(t[4*e]-210)>2||Math.abs(t[4*e+3]-191.25)>2}function N(t,e,i,r){var o=p(i,e,t),n=f(e,r,i),s=e.getMetersPerUnit();void 0!==s&&(n*=s);var a=t.getMetersPerUnit();void 0!==a&&(n/=a);var c=t.getExtent();if(!c||g(c,o)){var h=f(t,n,o)/n;isFinite(h)&&h>0&&(n/=h)}return n}function B(t,r,o,n,s,a,c,h,l,u,p,f){var g=_(Math.round(o*t),Math.round(o*r));if(v(g,f),0===l.length)return g.canvas;function j(t){return Math.round(t*o)/o}g.scale(o,o),g.globalCompositeOperation="lighter";var m=d();l.forEach((function(t,e,i){T(m,t.extent)}));var P=e(m),F=y(m),x=_(Math.round(o*P/n),Math.round(o*F/n));v(x,f);var C=o/n;l.forEach((function(t,i,r){var o=t.extent[0]-m[0],n=-(t.extent[3]-m[3]),s=e(t.extent),a=y(t.extent);t.image.width>0&&t.image.height>0&&x.drawImage(t.image,u,u,t.image.width-2*u,t.image.height-2*u,o*C,n*C,s*C,a*C)}));var b=i(c);return h.getTriangles().forEach((function(t,e,i){var r=t.source,s=t.target,c=r[0][0],h=r[0][1],l=r[1][0],u=r[1][1],d=r[2][0],p=r[2][1],_=j((s[0][0]-b[0])/a),v=j(-(s[0][1]-b[1])/a),T=j((s[1][0]-b[0])/a),y=j(-(s[1][1]-b[1])/a),P=j((s[2][0]-b[0])/a),F=j(-(s[2][1]-b[1])/a),C=c,O=h;c=0,h=0;var I=E([[l-=C,u-=O,0,0,T-_],[d-=C,p-=O,0,0,P-_],[0,0,l,u,y-v],[0,0,d,p,F-v]]);if(I){if(g.save(),g.beginPath(),function(){if(void 0===K){var t=document.createElement("canvas").getContext("2d");t.globalCompositeOperation="lighter",t.fillStyle="rgba(210, 0, 0, 0.75)",z(t,4,5,4,0),z(t,4,5,0,5);var e=t.getImageData(0,0,3,3).data;K=Q(e,0)||Q(e,4)||Q(e,8)}return K}()||f===Z){g.moveTo(T,y);for(var W=_-T,G=v-y,w=0;w<4;w++)g.lineTo(T+j((w+1)*W/4),y+j(w*G/3)),3!=w&&g.lineTo(T+j((w+1)*W/4),y+j((w+1)*G/3));g.lineTo(P,F)}else g.moveTo(T,y),g.lineTo(_,v),g.lineTo(P,F);g.clip(),g.transform(I[0],I[2],I[1],I[3],_,v),g.translate(m[0]-C,m[3]-O),g.scale(n/o,-n/o),g.drawImage(x.canvas,0,0),g.restore()}})),p&&(g.save(),g.globalCompositeOperation="source-over",g.strokeStyle="black",g.lineWidth=1,h.getTriangles().forEach((function(t,e,i){var r=t.target,o=(r[0][0]-b[0])/a,n=-(r[0][1]-b[1])/a,s=(r[1][0]-b[0])/a,c=-(r[1][1]-b[1])/a,h=(r[2][0]-b[0])/a,l=-(r[2][1]-b[1])/a;g.beginPath(),g.moveTo(s,c),g.lineTo(o,n),g.lineTo(h,l),g.closePath(),g.stroke()})),g.restore()),g.canvas}var H,J=(H=function(t,e){return(H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}H(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),V=function(t){function e(e,i,r,o,n,s,c,h,l,u,d,p){var f=t.call(this,n,P.IDLE)||this;f.renderEdges_=void 0!==d&&d,f.contextOptions_=p,f.pixelRatio_=c,f.gutter_=h,f.canvas_=null,f.sourceTileGrid_=i,f.targetTileGrid_=o,f.wrappedTileCoord_=s||n,f.sourceTiles_=[],f.sourcesListenerKeys_=null,f.sourceZ_=0;var g=o.getTileCoordExtent(f.wrappedTileCoord_),_=f.targetTileGrid_.getExtent(),v=f.sourceTileGrid_.getExtent(),T=_?F(g,_):g;if(0===a(T))return f.state=P.EMPTY,f;var y=e.getExtent();y&&(v=v?F(v,y):y);var E=o.getResolution(f.wrappedTileCoord_[0]),x=function(t,e,i,r){var o=j(i),n=N(t,e,o,r);return(!isFinite(n)||n<=0)&&m(i,(function(i){return n=N(t,e,i,r),isFinite(n)&&n>0})),n}(e,r,T,E);if(!isFinite(x)||x<=0)return f.state=P.EMPTY,f;var C=void 0!==u?u:.5;if(f.triangulation_=new q(e,r,T,v,x*C,E),0===f.triangulation_.getTriangles().length)return f.state=P.EMPTY,f;f.sourceZ_=i.getZForResolution(x);var b=f.triangulation_.calculateSourceExtent();if(v&&(e.canWrapX()?(b[1]=I(b[1],v[1],v[3]),b[3]=I(b[3],v[1],v[3])):b=F(b,v)),a(b)){for(var O=i.getTileRangeForExtentAndZ(b,f.sourceZ_),W=O.minX;W<=O.maxX;W++)for(var G=O.minY;G<=O.maxY;G++){var w=l(f.sourceZ_,W,G,c);w&&f.sourceTiles_.push(w)}0===f.sourceTiles_.length&&(f.state=P.EMPTY)}else f.state=P.EMPTY;return f}return J(e,t),e.prototype.getImage=function(){return this.canvas_},e.prototype.reproject_=function(){var t=[];if(this.sourceTiles_.forEach(function(e,i,r){e&&e.getState()==P.LOADED&&t.push({extent:this.sourceTileGrid_.getTileCoordExtent(e.tileCoord),image:e.getImage()})}.bind(this)),this.sourceTiles_.length=0,0===t.length)this.state=P.ERROR;else{var e=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(e),r="number"==typeof i?i:i[0],o="number"==typeof i?i:i[1],n=this.targetTileGrid_.getResolution(e),s=this.sourceTileGrid_.getResolution(this.sourceZ_),a=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=B(r,o,this.pixelRatio_,s,this.sourceTileGrid_.getExtent(),n,a,this.triangulation_,t,this.gutter_,this.renderEdges_,this.contextOptions_),this.state=P.LOADED}this.changed()},e.prototype.load=function(){if(this.state==P.IDLE){this.state=P.LOADING,this.changed();var t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(function(e,i,r){var o=e.getState();if(o==P.IDLE||o==P.LOADING){t++;var n=x(e,b.CHANGE,(function(i){var r=e.getState();r!=P.LOADED&&r!=P.ERROR&&r!=P.EMPTY||(C(n),0===--t&&(this.unlistenSources_(),this.reproject_()))}),this);this.sourcesListenerKeys_.push(n)}}.bind(this)),0===t?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach((function(t,e,i){t.getState()==P.IDLE&&t.load()}))}},e.prototype.unlistenSources_=function(){this.sourcesListenerKeys_.forEach(C),this.sourcesListenerKeys_=null},e}(O),$=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();function tt(t,e){t.getImage().src=e}var et=function(t){function e(e){var i=t.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:tt,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection})||this;return i.crossOrigin=void 0!==e.crossOrigin?e.crossOrigin:null,i.tileClass=void 0!==e.tileClass?e.tileClass:D,i.tileCacheForProjection={},i.tileGridForProjection={},i.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,i.contextOptions_=!1===e.imageSmoothing?Z:void 0,i.renderReprojectionEdges_=!1,i}return $(e,t),e.prototype.canExpireCache=function(){if(this.tileCache.canExpireCache())return!0;for(var t in this.tileCacheForProjection)if(this.tileCacheForProjection[t].canExpireCache())return!0;return!1},e.prototype.expireCache=function(t,e){var i=this.getTileCacheForProjection(t);for(var r in this.tileCache.expireCache(this.tileCache==i?e:{}),this.tileCacheForProjection){var o=this.tileCacheForProjection[r];o.expireCache(o==i?e:{})}},e.prototype.getContextOptions=function(){return this.contextOptions_},e.prototype.getGutterForProjection=function(t){return this.getProjection()&&t&&!W(this.getProjection(),t)?0:this.getGutter()},e.prototype.getGutter=function(){return 0},e.prototype.getKey=function(){return t.prototype.getKey.call(this)+(this.contextOptions_?"\n"+JSON.stringify(this.contextOptions_):"")},e.prototype.getOpaque=function(e){return!(this.getProjection()&&e&&!W(this.getProjection(),e))&&t.prototype.getOpaque.call(this,e)},e.prototype.getTileGridForProjection=function(t){var e=this.getProjection();if(!this.tileGrid||e&&!W(e,t)){var i=G(t);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=w(t)),this.tileGridForProjection[i]}return this.tileGrid},e.prototype.getTileCacheForProjection=function(t){var e=this.getProjection();if(!e||W(e,t))return this.tileCache;var i=G(t);return i in this.tileCacheForProjection||(this.tileCacheForProjection[i]=new S(this.tileCache.highWaterMark)),this.tileCacheForProjection[i]},e.prototype.createTile_=function(t,e,i,r,o,n){var s=[t,e,i],a=this.getTileCoordForTileUrlFunction(s,o),c=a?this.tileUrlFunction(a,r,o):void 0,h=new this.tileClass(s,void 0!==c?P.IDLE:P.EMPTY,void 0!==c?c:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return h.key=n,h.addEventListener(b.CHANGE,this.handleTileChange.bind(this)),h},e.prototype.getTile=function(t,e,i,r,o){var n=this.getProjection();if(n&&o&&!W(n,o)){var s=this.getTileCacheForProjection(o),a=[t,e,i],c=void 0,h=M(a);s.containsKey(h)&&(c=s.get(h));var l=this.getKey();if(c&&c.key==l)return c;var u=this.getTileGridForProjection(n),d=this.getTileGridForProjection(o),p=this.getTileCoordForTileUrlFunction(a,o),f=new V(n,u,o,d,a,p,this.getTilePixelRatio(r),this.getGutter(),function(t,e,i,r){return this.getTileInternal(t,e,i,r,n)}.bind(this),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.contextOptions_);return f.key=l,c?(f.interimTile=c,f.refreshInterimChain(),s.replace(h,f)):s.set(h,f),f}return this.getTileInternal(t,e,i,r,n||o)},e.prototype.getTileInternal=function(t,e,i,r,o){var n=null,s=L(t,e,i),a=this.getKey();if(this.tileCache.containsKey(s)){if((n=this.tileCache.get(s)).key!=a){var c=n;n=this.createTile_(t,e,i,r,o,a),c.getState()==P.IDLE?n.interimTile=c.interimTile:n.interimTile=c,n.refreshInterimChain(),this.tileCache.replace(s,n)}}else n=this.createTile_(t,e,i,r,o,a),this.tileCache.set(s,n);return n},e.prototype.setRenderReprojectionEdges=function(t){if(this.renderReprojectionEdges_!=t){for(var e in this.renderReprojectionEdges_=t,this.tileCacheForProjection)this.tileCacheForProjection[e].clear();this.changed()}},e.prototype.setTileGridForProjection=function(t,e){var i=R(t);if(i){var r=G(i);r in this.tileGridForProjection||(this.tileGridForProjection[r]=e)}},e}(X),it=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),rt=function(t){function e(e){return t.call(this,e)||this}return it(e,t),e.prototype.createRenderer=function(){return new k(this)},e}(A);export{U as E,Z as I,rt as T,et as a,q as b,N as c,Y as d,B as r};
