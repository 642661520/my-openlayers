import{M as e,V as o}from"./TileProperty.6da85ab0.js";import{O as t}from"./OSM.2ead155c.js";import{T as a}from"./Tile.28bcaf1f.js";import{i as s,j as i,c as l,b as n,d as m,w as r,u,F as c,o as p,t as d,e as f}from"./vendor.a926ca27.js";import{N as g,a as w}from"./Space.d4bacd30.js";import"./XYZ.473ba1b0.js";import"./BaseTile.190efee2.js";import"./TileLayer.24fccdef.js";import"./light.f92f6943.js";import"./use-rtl.2c9540d8.js";const v=f("放大"),j=f("缩小"),Z=n("p",null,[n("div",null,"知识点："),n("div",null,'设置地图dom元素 map.setTarget("map");'),n("div",null,"获取view map.getView();"),n("div",null,"获取zoom view.getZoom();"),n("div",null,"设置zoom view.setZoom(Number);"),n("div",null,'zoom改变监听事件 map.getView().on("change:resolution",function(e){});')],-1),b={setup(f){const b=s(),V=new e({layers:[new a({source:new t({attributions:'© <a href="/">test</a>'})})],view:new o({center:[0,0],zoom:2,minZoom:2})}),T=s(V.getView().getZoom());i((()=>{V.setTarget(b.value),V.getView().on("change:resolution",(function(e){T.value=V.getView().getZoom()}))}));const h=()=>{const e=V.getView(),o=e.getZoom();e.setZoom(o-1)},z=()=>{const e=V.getView(),o=e.getZoom();e.setZoom(o+1)};return(e,o)=>(p(),l(c,null,[n("div",{class:"map",ref:b},null,512),m(u(g),null,{default:r((()=>[m(u(w),{onClick:z},{default:r((()=>[v])),_:1}),m(u(w),{onClick:h},{default:r((()=>[j])),_:1}),n("span",null,"层级"+d(T.value),1)])),_:1}),Z],64))}};export{b as default};
