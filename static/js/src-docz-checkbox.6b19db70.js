(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/docz/Checkbox.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/@material-ui/core/index.es.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n){return!n||"object"!==l(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,r,l;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,a["Component"]),t=n,(r=[{key:"renderCheckbox",value:function(){return o.a.createElement(c.e,{checked:this.props.checked,value:this.props.name,color:this.props.color,disabled:this.props.disabled,onChange:this.props.onChange})}},{key:"renderSwitch",value:function(){return o.a.createElement(c.C,{checked:this.props.checked,value:this.props.name,color:this.props.color,disabled:this.props.disabled,onChange:this.props.onChange})}},{key:"renderControl",value:function(){return"checkbox"===this.props.type?this.renderCheckbox():this.renderSwitch()}},{key:"render",value:function(){var e=this.props,n=e.label,t=e.style,a=void 0===t?{}:t,r=e.padding,l=e.margin,p=e.className;return n?o.a.createElement(c.i,{style:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){i(e,n,t[n])})}return e}({padding:r,margin:l},a),className:p,label:n,control:this.renderControl()}):this.renderControl()}}])&&p(t.prototype,r),l&&p(t,l),n}();Object.defineProperty(u,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{type:"checkbox"}});var d=u;try{u.displayName="Checkbox",u.__docgenInfo={description:"",displayName:"Checkbox",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"primary" | "secondary" | "default"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"checkbox"},description:"",name:"type",required:!1,type:{name:'"switch" | "checkbox"'}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLElement>) => void"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ReactText"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ReactText"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/Checkbox.tsx#Checkbox"]={docgenInfo:u.__docgenInfo,name:"Checkbox",path:"src/core/Checkbox.tsx#Checkbox"})}catch(e){}var h=t("./node_modules/docz/dist/index.m.js");function b(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components,t=b(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"checkbox"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#checkbox"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Checkbox"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"properties"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),o.a.createElement(h.e,{of:d}),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"normal"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#normal"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Normal"),o.a.createElement(h.d,{__position:1,__code:'<Checkbox\n  label="I agree with the terms"\n  name="terms"\n  onChange={() => alert(\'You clicked on the checkbox!\')}\n/>',__scope:{props:t,Checkbox:d}},o.a.createElement(d,{label:"I agree with the terms",name:"terms",onChange:function(){return alert("You clicked on the checkbox!")}})),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"primary"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#primary"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Primary"),o.a.createElement(h.d,{__position:2,__code:'<Checkbox\n  label="I agree with the terms"\n  name="terms"\n  color="primary"\n  onChange={() => alert(\'You clicked on the checkbox!\')}\n/>',__scope:{props:t,Checkbox:d}},o.a.createElement(d,{label:"I agree with the terms",name:"terms",color:"primary",onChange:function(){return alert("You clicked on the checkbox!")}})),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"without-label"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#without-label"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Without label"),o.a.createElement(h.d,{__position:3,__code:"<Checkbox\n  name=\"terms\"\n  onChange={() => alert('You clicked on the checkbox!')}\n/>",__scope:{props:t,Checkbox:d}},o.a.createElement(d,{name:"terms",onChange:function(){return alert("You clicked on the checkbox!")}})),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"switch"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#switch"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Switch"),o.a.createElement(h.d,{__position:4,__code:'<Checkbox\n  name="bluetooth"\n  type="switch"\n  label="Bluetooth"\n  onChange={() => alert(\'You clicked on the switcher!\')}\n/>',__scope:{props:t,Checkbox:d}},o.a.createElement(d,{name:"bluetooth",type:"switch",label:"Bluetooth",onChange:function(){return alert("You clicked on the switcher!")}})))}}}]);