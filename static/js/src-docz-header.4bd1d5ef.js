(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/docz/Header.mdx":function(e,n,r){"use strict";r.r(n);var t=r("./node_modules/react/index.js"),a=r.n(t),o=r("./node_modules/@mdx-js/tag/dist/index.js"),i=r("./node_modules/@material-ui/core/index.es.js");function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function d(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=function(e){var n=e.children,r=e.padding,t=e.margin,o=e.style,c=void 0===o?{}:o,u=e.elevation,p=void 0===u?0:u,s=d(e,["children","padding","margin","style","elevation"]);return a.a.createElement(i.a,Object.assign({},s,{elevation:p,style:function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){l(e,n,r[n])})}return e}({padding:r,margin:t},c)}),a.a.createElement(i.N,null,n))},u=c;try{c.displayName="Header",c.__docgenInfo={description:"",displayName:"Header",props:{position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"absolute" | "fixed" | "static" | "sticky"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"default" | "inherit" | "primary" | "secondary"'}},square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean"}},elevation:{defaultValue:null,description:"",name:"elevation",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ReactText"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ReactText"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<any>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/Header.tsx#Header"]={docgenInfo:c.__docgenInfo,name:"Header",path:"src/core/Header.tsx#Header"})}catch(m){}var p=r("./node_modules/docz/dist/index.m.js");function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}n.default=function(e){var n=e.components,r=s(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:n},a.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"header"}},"Header"),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),a.a.createElement(p.PropsTable,{of:u}),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"demo"}},"Demo"),a.a.createElement(p.Playground,{__position:1,__codesandbox:"undefined",__code:'<Header style={{ marginBottom: \'12px\' }} position="relative">\n  Flipper UI\n</Header>\n<Header position="relative" color="secondary">\n  Flipper UI\n</Header>',__scope:{props:r,Header:u}},a.a.createElement(u,{style:{marginBottom:"12px"},position:"relative"},"Flipper UI"),a.a.createElement(u,{position:"relative",color:"secondary"},"Flipper UI")))}}}]);