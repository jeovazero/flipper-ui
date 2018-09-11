(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./src/docz/Tree.mdx":function(e,n,r){"use strict";r.r(n);var t=r("./node_modules/react/index.js"),o=r.n(t),a=r("./node_modules/@mdx-js/tag/dist/index.js"),c=r("./src/core/Node.tsx");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var r,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,t["Component"]),r=n,(a=[{key:"renderNode",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=e.id,a=e.name,i=e.nodes;return o.a.createElement(c.a,{id:n,name:a,key:t||n,style:r?{padding:0}:{}},i&&i.map(this.renderNode.bind(this)))}},{key:"render",value:function(){var e=this;return(this.props.nodes||[]).map(function(n,r){return e.renderNode(n,r,!0)})}}])&&p(r.prototype,a),i&&p(r,i),n}(),l=d;try{d.displayName="Tree",d.__docgenInfo={description:"",displayName:"Tree",props:{nodes:{defaultValue:null,description:"",name:"nodes",required:!1,type:{name:"INode[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/Tree.tsx#Tree"]={docgenInfo:d.__docgenInfo,name:"Tree",path:"src/core/Tree.tsx#Tree"})}catch(e){}var u=r("./node_modules/docz/dist/index.m.js");function f(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}n.default=function(e){var n=e.components,r=f(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:n},o.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"tree"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#tree"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Tree"),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),o.a.createElement(u.e,{of:l}),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"demo"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#demo"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Demo"),o.a.createElement(u.d,{__position:1,__code:"<Tree\n  nodes={[\n    {\n      id: 0,\n      name: 'Tree',\n      nodes: [\n        {\n          id: 1,\n          name: 'Branch',\n        },\n        {\n          id: 2,\n          name: 'Branch',\n        },\n        {\n          id: 3,\n          name: 'Branch',\n          nodes: [\n            {\n              id: 5,\n              name: 'Leaf',\n            },\n          ],\n        },\n      ],\n    },\n  ]}\n/>",__scope:{props:r,Tree:l}},o.a.createElement(l,{nodes:[{id:0,name:"Tree",nodes:[{id:1,name:"Branch"},{id:2,name:"Branch"},{id:3,name:"Branch",nodes:[{id:5,name:"Leaf"}]}]}]})))}}}]);