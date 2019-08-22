(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/colors.ts":function(e,a,l){"use strict";l.d(a,"b",function(){return t}),l.d(a,"a",function(){return n}),l.d(a,"c",function(){return b});var t={dark:"#00695C",light:"#B2DFDB",normal:"#009688"};"undefined"!==typeof t&&t&&t===Object(t)&&Object.isExtensible(t)&&Object.defineProperty(t,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"primary",filename:"src/colors.ts"}});var n={dark:"#BDBDBD",light:"#EEEEEE",normal:"#E5E5E5"};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"background",filename:"src/colors.ts"}});var r={medium:"#666666"};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"silver",filename:"src/colors.ts"}});var s="#FFFFFF";s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"white",filename:"src/colors.ts"}});var i="#000000";i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"black",filename:"src/colors.ts"}});var b="#FFFFFF00";"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"transparent",filename:"src/colors.ts"}});var o="#424242";o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"text",filename:"src/colors.ts"}});var c={dark:"#B71C1C",light:"#F44336",normal:"#D32F2F"};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"error",filename:"src/colors.ts"}});"#FFC107"===Object("#FFC107")&&Object.isExtensible("#FFC107")&&Object.defineProperty("#FFC107","__filemeta",{enumerable:!0,configurable:!0,value:{name:"warning",filename:"src/colors.ts"}});"#4CAF50"===Object("#4CAF50")&&Object.isExtensible("#4CAF50")&&Object.defineProperty("#4CAF50","__filemeta",{enumerable:!0,configurable:!0,value:{name:"success",filename:"src/colors.ts"}})},"./src/core/ListItem.tsx":function(e,a,l){"use strict";var t=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),s=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),i=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),b=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),o=l("./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js"),c=l("./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js"),d=l("./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js"),m=l("./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js"),u=l("./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js"),p=l("./node_modules/@material-ui/core/esm/ListItem/ListItem.js"),j=l("./node_modules/@material-ui/styles/esm/withStyles/withStyles.js"),T=l("./node_modules/react/index.js"),y=l.n(T),f=l("./src/core/Typography.tsx"),O=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(r.a)(a,[{key:"renderChildren",value:function(){return"string"===typeof this.props.children?y.a.createElement(f.a,null,this.props.children):this.props.children}},{key:"renderCustomItem",value:function(){var e=this.props,a=e.action,l=e.avatar,t=e.icon,n=e.title,r=e.subtitle,s=n||r?"42px":"0px",i=e.classes.default;return y.a.createElement(T.Fragment,null,l&&y.a.createElement(o.a,null,l),t&&y.a.createElement(c.a,{className:i,style:{minWidth:s}},t),(n||r)&&y.a.createElement(d.a,{primaryTypographyProps:{className:i},secondaryTypographyProps:{className:i},primary:n,secondary:r,style:a?{marginRight:"36px"}:{}}),a&&y.a.createElement(m.a,{className:i},a))}},{key:"render",value:function(){var e=this.props,a=e.id,l=e.className,n=e.children,r=e.value,s=e.style,i=void 0===s?{}:s,b=e.padding,o=e.margin,c=e.selected,d=e.disabled,m=e.onClick;return n?y.a.createElement(u.a,{button:!0,id:a,style:Object(t.a)({padding:b,margin:o},i),className:l,selected:c,disabled:d,value:r,onClick:m},this.renderChildren()):y.a.createElement(p.a,{button:!0,id:a,style:Object(t.a)({padding:b,margin:o},i),className:l,selected:c,disabled:d,onClick:m},this.renderCustomItem())}}]),a}(T.Component);a.a=Object(j.a)(function(){return{default:{color:"inherit"}}})(O)},"./src/core/Typography.tsx":function(e,a,l){"use strict";var t=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=l("./node_modules/@material-ui/core/esm/Typography/Typography.js"),s=l("./node_modules/react/index.js"),i=l.n(s),b=function(e){var a=e.children,l=e.margin,s=e.padding,b=e.style,o=void 0===b?{}:b,c=e.variant,d=void 0===c?"body2":c,m=Object(n.a)(e,["children","margin","padding","style","variant"]);return i.a.createElement(r.a,Object.assign({},m,{variant:d,style:Object(t.a)({margin:l,padding:s},o)}),a)};a.a=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Typography",filename:"src/core/Typography.tsx"}})},"./src/docz/Table.mdx":function(e,a,l){"use strict";l.r(a);var t=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=l("./node_modules/react/index.js"),r=l.n(n),s=l("./node_modules/@mdx-js/react/dist/index.es.js"),i=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),b=l("./node_modules/@material-ui/core/esm/Table/Table.js"),o=l("./src/colors.ts"),c=function(e){var a=e.style,l=e.margin,n=e.padding,s=e.spacing,c=e.children,d=Object(t.a)(e,["style","margin","padding","spacing","children"]);return r.a.createElement(b.a,Object.assign({},d,{padding:s,style:Object(i.a)({border:"1px solid ".concat(o.a.light),padding:n,margin:l},a)}),c)},d=c;c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Table",filename:"src/core/Table.tsx"}});var m=l("./node_modules/@material-ui/styles/esm/withStyles/withStyles.js"),u=l("./node_modules/@material-ui/core/esm/TableHead/TableHead.js"),p=Object(m.a)(function(e){return{default:{color:e.palette.background.default},inherit:{color:"inherit"},primary:{color:e.palette.primary.main},secondary:{color:e.palette.secondary.main}}})(function(e){var a=e.style,l=e.margin,n=e.padding,s=e.children,b=e.color,o=e.classes,c=Object(t.a)(e,["style","margin","padding","children","color","classes"]);return r.a.createElement(u.a,Object.assign({},c,{style:Object(i.a)({padding:n,margin:l},a),classes:b?{root:o[b]}:{}}),s)}),j=l("./node_modules/@material-ui/core/esm/TableBody/TableBody.js"),T=function(e){var a=e.style,l=e.margin,n=e.padding,s=e.children,b=Object(t.a)(e,["style","margin","padding","children"]);return r.a.createElement(j.a,Object.assign({},b,{style:Object(i.a)({padding:n,margin:l},a)}),s)},y=T;T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableBody",filename:"src/core/TableBody.tsx"}});var f=l("./node_modules/@material-ui/core/esm/TableRow/TableRow.js"),O=function(e){var a=e.style,l=e.margin,n=e.padding,s=e.children,b=e.background,c=Object(t.a)(e,["style","margin","padding","children","background"]);return r.a.createElement(f.a,Object.assign({},c,{style:Object(i.a)({background:b,borderColor:o.a.light,margin:l,padding:n},a)}),s)},g=O;O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableRow",filename:"src/core/TableRow.tsx"}});var _=l("./node_modules/@material-ui/core/esm/TableCell/TableCell.js"),h=function(e){var a=e.style,l=e.margin,n=e.padding,s=e.children,b=e.spacing,o=Object(t.a)(e,["style","margin","padding","children","spacing"]);return r.a.createElement(_.a,Object.assign({},o,{style:Object(i.a)({padding:n,margin:l},a),padding:b}),s)},C=h;h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableCell",filename:"src/core/TableCell.tsx"}});var x=l("./src/core/ListItem.tsx"),v=l("./node_modules/docz/dist/index.esm.js");l.d(a,"default",function(){return F});var E={},w="wrapper";function F(e){var a=e.components,l=Object(t.a)(e,["components"]);return Object(s.b)(w,Object.assign({},E,l,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"table"},"Table"),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)(v.d,{of:d,mdxType:"Props"}),Object(s.b)("h2",{id:"demo"},"Demo"),Object(s.b)(v.c,{__position:1,__code:"<Table>\n  <TableHead>\n    <TableRow>\n      <TableCell>Name</TableCell>\n      <TableCell>Email</TableCell>\n    </TableRow>\n  </TableHead>\n  <TableBody>\n    <TableRow>\n      <TableCell>Name 1</TableCell>\n      <TableCell>Email 1</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell>Name 2</TableCell>\n      <TableCell>Email 2</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell>Name 3</TableCell>\n      <TableCell>Email 3</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell>Name 4</TableCell>\n      <TableCell>Email 4</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell>Name 5</TableCell>\n      <TableCell>Email 5</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>",__scope:{props:this?this.props:l,Table:d,TableHead:p,TableBody:y,TableRow:g,TableCell:C,ListItem:x.a,Playground:v.c,Props:v.d},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(d,{mdxType:"Table"},Object(s.b)(p,{mdxType:"TableHead"},Object(s.b)(g,{mdxType:"TableRow"},Object(s.b)(C,{mdxType:"TableCell"},"Name"),Object(s.b)(C,{mdxType:"TableCell"},"Email"))),Object(s.b)(y,{mdxType:"TableBody"},Object(s.b)(g,{mdxType:"TableRow"},Object(s.b)(C,{mdxType:"TableCell"},"Name 1"),Object(s.b)(C,{mdxType:"TableCell"},"Email 1")),Object(s.b)(g,{mdxType:"TableRow"},Object(s.b)(C,{mdxType:"TableCell"},"Name 2"),Object(s.b)(C,{mdxType:"TableCell"},"Email 2")),Object(s.b)(g,{mdxType:"TableRow"},Object(s.b)(C,{mdxType:"TableCell"},"Name 3"),Object(s.b)(C,{mdxType:"TableCell"},"Email 3")),Object(s.b)(g,{mdxType:"TableRow"},Object(s.b)(C,{mdxType:"TableCell"},"Name 4"),Object(s.b)(C,{mdxType:"TableCell"},"Email 4")),Object(s.b)(g,{mdxType:"TableRow"},Object(s.b)(C,{mdxType:"TableCell"},"Name 5"),Object(s.b)(C,{mdxType:"TableCell"},"Email 5"))))))}F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docz/Table.mdx"}}),F.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docz-table.8a3b231685ee0858b6d2.js.map