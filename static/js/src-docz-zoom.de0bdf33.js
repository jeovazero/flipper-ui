(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"./src/docz/Zoom.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/@material-ui/core/index.es.js");function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=function(e){var n=e.children,t=e.padding,o=e.margin,a=e.style,c=void 0===a?{}:a,m=s(e,["children","padding","margin","style"]);return r.a.createElement(i.Q,Object.assign({style:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){l(e,n,t[n])})}return e}({padding:t,margin:o},c)},m),n)},m=c;try{c.displayName="Zoom",c.__docgenInfo={description:"",displayName:"Zoom",props:{in:{defaultValue:null,description:"",name:"in",required:!0,type:{name:"boolean"}},timeout:{defaultValue:null,description:"",name:"timeout",required:!1,type:{name:"number | { enter?: number; exit?: number; }"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ReactText"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ReactText"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/Zoom.tsx#Zoom"]={docgenInfo:c.__docgenInfo,name:"Zoom",path:"src/core/Zoom.tsx#Zoom"})}catch(u){}var d=t("./node_modules/docz/dist/index.m.js");function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components,t=p(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"zoom"}},"Zoom"),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),r.a.createElement(d.PropsTable,{of:m}),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"open"}},"Open"),r.a.createElement(d.Playground,{__position:1,__codesandbox:"undefined",__code:"<Zoom in>\n  <span>I am open for discussions</span>\n</Zoom>",__scope:{props:t,Zoom:m}},r.a.createElement(m,{in:!0},r.a.createElement("span",null,"I am open for discussions"))),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"closed"}},"Closed"),r.a.createElement(d.Playground,{__position:2,__codesandbox:"undefined",__code:"<Zoom in={false}>\n  <span>I'm not. Please don't insist.</span>\n</Zoom>",__scope:{props:t,Zoom:m}},r.a.createElement(m,{in:!1},r.a.createElement("span",null,"I'm not. Please don't insist."))))}}}]);