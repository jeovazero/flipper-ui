(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/docz/RadioGroup.mdx":function(e,n,o){"use strict";o.r(n);var t=o("./node_modules/react/index.js"),r=o.n(t),a=o("./node_modules/@mdx-js/tag/dist/index.js"),l=o("./node_modules/@material-ui/core/index.es.js");function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var c=function(e){var n=e.options,o=void 0===n?[]:n,t=e.className,a=e.padding,c=e.margin,s=e.style,p=void 0===s?{}:s,u=e.title,d=e.value,m=e.onChange;return r.a.createElement(l.h,{className:t,style:function(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(n){i(e,n,o[n])})}return e}({padding:a,margin:c},p)},r.a.createElement(l.j,{component:"legend"},u),r.a.createElement(l.w,{name:name,value:d,onChange:m},o.map(function(e){return r.a.createElement(l.i,{key:e.value,label:e.label,value:e.value,control:r.a.createElement(l.v,null)})})))},s=o("./node_modules/docz/dist/index.m.js");function p(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}n.default=function(e){var n=e.components,o=p(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"radiogroup"}},"RadioGroup"),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),r.a.createElement(s.PropsTable,{of:c}),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"demo"}},"Demo"),r.a.createElement(s.Playground,{__position:1,__codesandbox:"undefined",__code:"<RadioGroup\n  value=\"first\"\n  title=\"My options\"\n  name=\"options\"\n  options={[\n    {\n      label: 'First option',\n      value: 'first',\n    },\n    {\n      label: 'Second Option',\n      value: 'second',\n    },\n  ]}\n  onChange={() => {}}\n/>",__scope:{props:o,RadioGroup:c}},r.a.createElement(c,{value:"first",title:"My options",name:"options",options:[{label:"First option",value:"first"},{label:"Second Option",value:"second"}],onChange:function(){}})))}}}]);