(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./src/docz/RadioGroup.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),l=t("./node_modules/@material-ui/core/index.es.js");function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=function(e){var n=e.options,t=void 0===n?[]:n,o=e.className,a=e.padding,s=e.margin,p=e.style,u=void 0===p?{}:p,m=e.title,d=e.value,f=e.onChange,b=c(e,["options","className","padding","margin","style","title","value","onChange"]);return r.a.createElement(l.k,Object.assign({className:o,style:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){i(e,n,t[n])})}return e}({padding:a,margin:s},u)},b),r.a.createElement(l.m,{component:"legend"},m),r.a.createElement(l.B,{name:name,value:d,onChange:f},t.map(function(e){return r.a.createElement(l.l,{key:e.value,label:e.label,value:e.value,control:r.a.createElement(l.A,null)})})))},p=t("./node_modules/docz/dist/index.m.js");function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components,t=u(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"radiogroup"}},"RadioGroup"),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),r.a.createElement(p.PropsTable,{of:s}),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"demo"}},"Demo"),r.a.createElement(p.Playground,{__position:1,__codesandbox:"undefined",__code:"<RadioGroup\n  value=\"first\"\n  title=\"My options\"\n  name=\"options\"\n  options={[\n    {\n      label: 'First option',\n      value: 'first',\n    },\n    {\n      label: 'Second Option',\n      value: 'second',\n    },\n  ]}\n  onChange={() => {}}\n/>",__scope:{props:t,RadioGroup:s}},r.a.createElement(s,{value:"first",title:"My options",name:"options",options:[{label:"First option",value:"first"},{label:"Second Option",value:"second"}],onChange:function(){}})))}}}]);