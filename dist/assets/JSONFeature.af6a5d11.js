import{F as t}from"./Feature.635c9857.js";import{b as r}from"./featureloader.82820175.js";import{az as e}from"./TileProperty.6da85ab0.js";var o,n=(o=function(t,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}o(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)});function i(t){if("string"==typeof t){var r=JSON.parse(t);return r||null}return null!==t?t:null}var u=function(t){function o(){return t.call(this)||this}return n(o,t),o.prototype.getType=function(){return r.JSON},o.prototype.readFeature=function(t,r){return this.readFeatureFromObject(i(t),this.getReadOptions(t,r))},o.prototype.readFeatures=function(t,r){return this.readFeaturesFromObject(i(t),this.getReadOptions(t,r))},o.prototype.readFeatureFromObject=function(t,r){return e()},o.prototype.readFeaturesFromObject=function(t,r){return e()},o.prototype.readGeometry=function(t,r){return this.readGeometryFromObject(i(t),this.getReadOptions(t,r))},o.prototype.readGeometryFromObject=function(t,r){return e()},o.prototype.readProjection=function(t){return this.readProjectionFromObject(i(t))},o.prototype.readProjectionFromObject=function(t){return e()},o.prototype.writeFeature=function(t,r){return JSON.stringify(this.writeFeatureObject(t,r))},o.prototype.writeFeatureObject=function(t,r){return e()},o.prototype.writeFeatures=function(t,r){return JSON.stringify(this.writeFeaturesObject(t,r))},o.prototype.writeFeaturesObject=function(t,r){return e()},o.prototype.writeGeometry=function(t,r){return JSON.stringify(this.writeGeometryObject(t,r))},o.prototype.writeGeometryObject=function(t,r){return e()},o}(t);export{u as J};
