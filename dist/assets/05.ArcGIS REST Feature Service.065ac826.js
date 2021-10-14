import{I as e,ay as t,q as r,bi as n,ai as a,ao as o,bP as s,aj as i,a9 as u,_ as c,al as l,ak as f,K as p,M as h,V as m,bQ as g}from"./TileProperty.6da85ab0.js";import{T as v}from"./Tile.28bcaf1f.js";import{F as y,V as d,t as w,a as b}from"./Vector.c3321bd0.js";import{J as O}from"./JSONFeature.af6a5d11.js";import{t as I,L as M,b as T,a as N,M as j}from"./Feature.635c9857.js";import{S as _,F as G,a as L}from"./featureloader.82820175.js";import{X as P}from"./XYZ.473ba1b0.js";import{i as F,j as S,c as Z,b as x,t as Y,F as E,o as X}from"./vendor.a926ca27.js";import"./BaseTile.190efee2.js";import"./TileLayer.24fccdef.js";var R,k=(R=function(e,t){return(R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}R(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),A={};A[u.POINT]=function(e){var t;t=void 0!==e.m&&void 0!==e.z?new l([e.x,e.y,e.z,e.m],i.XYZM):void 0!==e.z?new l([e.x,e.y,e.z],i.XYZ):void 0!==e.m?new l([e.x,e.y,e.m],i.XYM):new l([e.x,e.y]);return t},A[u.LINE_STRING]=function(e){var t=C(e);return new M(e.paths[0],t)},A[u.POLYGON]=function(e){var t=C(e);return new f(e.rings,t)},A[u.MULTI_POINT]=function(e){var t=C(e);return new N(e.points,t)},A[u.MULTI_LINE_STRING]=function(e){var t=C(e);return new T(e.paths,t)},A[u.MULTI_POLYGON]=function(e){var t=C(e);return new j(e.rings,t)};var U={};function z(e,t){var i,c,l;if(!e)return null;if("number"==typeof e.x&&"number"==typeof e.y)l=u.POINT;else if(e.points)l=u.MULTI_POINT;else if(e.paths){l=1===e.paths.length?u.LINE_STRING:u.MULTI_LINE_STRING}else if(e.rings){var f=e,p=C(f),h=function(e,t){var r,i,u=[],c=[],l=[];for(r=0,i=e.length;r<i;++r){u.length=0,n(u,0,e[r],t.length),a(u,0,u.length,t.length)?c.push([e[r]]):l.push(e[r])}for(;l.length;){var f=l.shift(),p=!1;for(r=c.length-1;r>=0;r--){var h=c[r][0];if(o(new s(h).getExtent(),new s(f).getExtent())){c[r].push(f),p=!0;break}}p||c.push([f.reverse()])}return c}(f.rings,p);1===h.length?(l=u.POLYGON,e=r({},e,((i={}).rings=h[0],i))):(l=u.MULTI_POLYGON,e=r({},e,((c={}).rings=h,c)))}var m=A[l];return I(m(e),!1,t)}function C(e){var t=i.XY;return!0===e.hasZ&&!0===e.hasM?t=i.XYZM:!0===e.hasZ?t=i.XYZ:!0===e.hasM&&(t=i.XYM),t}function V(e){var t=e.getLayout();return{hasZ:t===i.XYZ||t===i.XYZM,hasM:t===i.XYM||t===i.XYZM}}function q(e,t){return(0,U[e.getType()])(I(e,!0,t),t)}U[u.POINT]=function(e,t){var r,n=e.getCoordinates(),a=e.getLayout();a===i.XYZ?r={x:n[0],y:n[1],z:n[2]}:a===i.XYM?r={x:n[0],y:n[1],m:n[2]}:a===i.XYZM?r={x:n[0],y:n[1],z:n[2],m:n[3]}:a===i.XY?r={x:n[0],y:n[1]}:c(!1,34);return r},U[u.LINE_STRING]=function(e,t){var r=V(e);return{hasZ:r.hasZ,hasM:r.hasM,paths:[e.getCoordinates()]}},U[u.POLYGON]=function(e,t){var r=V(e);return{hasZ:r.hasZ,hasM:r.hasM,rings:e.getCoordinates(!1)}},U[u.MULTI_POINT]=function(e,t){var r=V(e);return{hasZ:r.hasZ,hasM:r.hasM,points:e.getCoordinates()}},U[u.MULTI_LINE_STRING]=function(e,t){var r=V(e);return{hasZ:r.hasZ,hasM:r.hasM,paths:e.getCoordinates()}},U[u.MULTI_POLYGON]=function(e,t){for(var r=V(e),n=e.getCoordinates(!1),a=[],o=0;o<n.length;o++)for(var s=n[o].length-1;s>=0;s--)a.push(n[o][s]);return{hasZ:r.hasZ,hasM:r.hasM,rings:a}};var B=function(r){function n(e){var t=this,n=e||{};return(t=r.call(this)||this).geometryName_=n.geometryName,t}return k(n,r),n.prototype.readFeatureFromObject=function(e,t,r){var n=e,a=z(n.geometry,t),o=new y;if(this.geometryName_&&o.setGeometryName(this.geometryName_),o.setGeometry(a),n.attributes){o.setProperties(n.attributes,!0);var s=n.attributes[r];void 0!==s&&o.setId(s)}return o},n.prototype.readFeaturesFromObject=function(e,t){var r=t||{};if(e.features){for(var n=[],a=e.features,o=0,s=a.length;o<s;++o)n.push(this.readFeatureFromObject(a[o],r,e.objectIdFieldName));return n}return[this.readFeatureFromObject(e,r)]},n.prototype.readGeometryFromObject=function(e,t){return z(e,t)},n.prototype.readProjectionFromObject=function(t){if(t.spatialReference&&void 0!==t.spatialReference.wkid){var r=t.spatialReference.wkid;return e("EPSG:"+r)}return null},n.prototype.writeGeometryObject=function(e,t){return q(e,this.adaptOptions(t))},n.prototype.writeFeatureObject=function(r,n){n=this.adaptOptions(n);var a={};if(!r.hasProperties())return a.attributes={},a;var o=r.getProperties(),s=r.getGeometry();if(s){a.geometry=q(s,n);var i=n&&(n.dataProjection||n.featureProjection);i&&(a.geometry.spatialReference={wkid:Number(e(i).getCode().split(":").pop())}),delete o[r.getGeometryName()]}return t(o)?a.attributes={}:a.attributes=o,a},n.prototype.writeFeaturesObject=function(e,t){t=this.adaptOptions(t);for(var r=[],n=0,a=e.length;n<a;++n)r.push(this.writeFeatureObject(e[n],t));return{features:r}},n}(O);const D=x("div",{id:"map",class:"map"},null,-1),J={setup(e){const t=F(""),r=new B,n={ABANDONED:new _({fill:new G({color:"rgba(225, 225, 225, 255)"}),stroke:new L({color:"rgba(0, 0, 0, 255)",width:.4})}),GAS:new _({fill:new G({color:"rgba(255, 0, 0, 255)"}),stroke:new L({color:"rgba(110, 110, 110, 255)",width:.4})}),OIL:new _({fill:new G({color:"rgba(56, 168, 0, 255)"}),stroke:new L({color:"rgba(110, 110, 110, 255)",width:0})}),OILGAS:new _({fill:new G({color:"rgba(168, 112, 0, 255)"}),stroke:new L({color:"rgba(110, 110, 110, 255)",width:.4})})},a=new d({loader:function(e,t,n,o,s){const i="https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Petroleum/KSFields/FeatureServer/0/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry="+encodeURIComponent('{"xmin":'+e[0]+',"ymin":'+e[1]+',"xmax":'+e[2]+',"ymax":'+e[3]+',"spatialReference":{"wkid":102100}}')+"&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100";$.ajax({url:i,dataType:"jsonp",success:function(e){if(e.error)s();else{const t=r.readFeatures(e,{featureProjection:n});t.length>0&&a.addFeatures(t),o(t)}},error:s})},strategy:w(p({tileSize:512}))}),o=new b({source:a,style:function(e){const t=e.get("activeprod");return n[t]}}),s=new v({source:new P({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),i=function(e){const r=[];if(u.forEachFeatureAtPixel(e,(function(e){r.push(e)})),r.length>0){const e=[];let n,a;for(n=0,a=r.length;n<a;++n)e.push(r[n].get("field_name"));t.value=e.join(",")||"(unknown)",u.getTargetElement().style.cursor="pointer"}else t.value="",u.getTargetElement().style.cursor=""},u=new h({layers:[s,o],view:new m({center:g([-97.6114,38.8403]),zoom:7,minZoom:4})});return S((()=>{u.setTarget("map"),u.on("pointermove",(function(e){if(e.dragging)return;const t=u.getEventPixel(e.originalEvent);i(t)})),u.on("click",(function(e){i(e.pixel)}))})),(e,r)=>(X(),Z(E,null,[D,x("div",null,Y(t.value),1)],64))}};export{J as default};