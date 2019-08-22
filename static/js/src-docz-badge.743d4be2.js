(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/core/Button.tsx":function(e,A,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=o("./node_modules/@material-ui/core/esm/Button/Button.js"),a=o("./node_modules/react/index.js"),d=o.n(a),B=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");function i(){var e=Object(r.a)(["\n    border-style: ",";\n    opacity: ",";\n"]);return i=function(){return e},e}"undefined"!==typeof IProps&&IProps&&IProps===Object(IProps)&&Object.isExtensible(IProps)&&Object.defineProperty(IProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IProps",filename:"src/core/Button.tsx"}});var g=Object(B.a)(function(e){var A=e.children,o=e.margin,r=e.padding,a=e.style,B=void 0===a?{}:a,i=e.variant,g=Object(n.a)(e,["children","margin","padding","style","variant"]);return d.a.createElement(s.a,Object.assign({},g,{variant:"dashed"===i?"outlined":i,style:Object(t.a)({margin:o,padding:r},B)}),A)})(i(),function(e){return"dashed"===e.variant?"dashed !important":"initial"},function(e){return e.selected?.5:1});A.a=g,"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyled",filename:"src/core/Button.tsx"}})},"./src/docz/Badge.mdx":function(e,A,o){"use strict";o.r(A);var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=o("./node_modules/react/index.js"),n=o.n(t),s=o("./node_modules/@mdx-js/react/dist/index.es.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),d=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),B=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),g=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),c=o("./node_modules/@material-ui/core/esm/Badge/Badge.js"),m=function(e){function A(){return Object(d.a)(this,A),Object(i.a)(this,Object(g.a)(A).apply(this,arguments))}return Object(l.a)(A,e),Object(B.a)(A,[{key:"render",value:function(){var e=this.props,A=e.children,o=e.counter,t=e.color,s=e.limit,d=void 0===s?99:s,B=e.padding,i=e.margin,g=e.style,l=void 0===g?{}:g,m=Object(r.a)(e,["children","counter","color","limit","padding","margin","style"]);return o?n.a.createElement(c.a,Object.assign({badgeContent:o>d?"+".concat(d):o,color:t,style:Object(a.a)({padding:B,margin:i},l)},m),A):A}}]),A}(t.Component);m.defaultProps={color:"primary",limit:99};var u=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Badge",filename:"src/core/Badge.tsx"}});var p=o("./src/core/Button.tsx"),b=o("./node_modules/docz/dist/index.esm.js");o.d(A,"default",function(){return h});var C={},j="wrapper";function h(e){var A=e.components,o=Object(r.a)(e,["components"]);return Object(s.b)(j,Object.assign({},C,o,{components:A,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"badge"},"Badge"),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)(b.d,{of:u,mdxType:"Props"}),Object(s.b)("h2",{id:"normal"},"Normal"),Object(s.b)(b.c,{__position:1,__code:'<Badge color="secondary">Secondary color</Badge>',__scope:{props:this?this.props:o,Badge:u,Button:p.a,Playground:b.c,Props:b.d},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsyma8OzSV1jXaD04AEcgAS6SQoPQNI_X5O1IPCCJzCNWV4MkRDkKoVDrzw6gsIg9hgHYAAFKBXESFIhFCDAlgYgc7HkWCiIPAAvGicPYQNJX4k1NXaMFUF0FFjlOQTnAIRIsXYbg6PWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwMgAWMz2AANjMiz1jAYCADFvWgRIDP4ZxDgRB1MEYoR-CWIhqEoOBrIRdzq08mhnAgQTLnYABGezLPkWT5KmABBOYNPYCN6PIGwoHQMN2HkDkNLEMroxkdgUTUmBuGAISVI6uB5C3GtgEq6AauCAAycbxkSeZKGaEbqtq7hlrlMAOMlAZUHadgAH4NlGsMIwaq4FrG1A8urKQZCrN8zBhdVjhgMAwigKYjsa5rLuK5dqwTcSCBwLzMhSK8CEGmta3QmCqCgIU-BAOAtmodBXAERJxGcJGMFR5IYaFKQoZgcHa0kf7AeB0HBqkb6brML8EaQlCYDQ6C_wIOAsEA3QQIMMDsIe-jCZCOw9VCCAhb4wi5QAASiWh-nic0xaZmTUH5-1_qWei12oF1JbdeUzVV9WpnohotSel6pn1uCPUK9BWAyGJEdVvk9AEZ6QoabjKEHbAQPQOxzct0JXq037C1hgQdoMzBntDl92AAHzlft-Rx7aU_aRHdBRtHM7lDIhAEVWIaoDj5auVBQiIQIjhTlFp0KCOoH5F4Y_Yava9Bc78uYuA7CF_26EDh1030RhvZ4rWBvDiGZjeVvyDagholiR749en3B004AVzLygo4MtOdMSRKIYh1uiBeK4AE5b5XC6VwXjwl4nEfIwaveI4P1AFO_i-gD9qLToJZIBF9y7uzAeAmseMBDQJgewK-45NL3wQTA6ynYCjoPATpPSOCgHtVgKVYASh95AJwJQkQmwBDbzgOQiwfFNITFsDgfsvt6H-h_jWLoBA-jmEgfLBhF89pRm4Ygxgotxas2EYgiwHhWaOD0DQLqsi5EHwrhkdgTVkGiHEeomBe1igAGoAAkwBdHyGKGogxF8TptHdjYmBF1bGALgV1SOQo6pOPAUQzq9F6KYNsikKKqN8HsEoTgPxdVvH6PUfRSJ1CMh0LqsTVxdFgFnViekqQUjCZpKAW-dRJ0qpnUfmYJ-zosCiTjlbdghM6ZKAZmRIUzNKI3GoDgdmnNtDc30AwE2GT2n4WFuwPJVFzA2yIrLLICsoBKwgCrW0D1NYZK8vYJYF4YCg0sDNGASw9SDBgGeR2mYplSSNss-0fichS2zqpWA6BzSfHXDQOAxtaJmwtpva2kliL20dsKakrsqmiTQPLT23Qp4cOhFgAOQdvl1IATWFgFRX7ZA7l4Q-4ouEQ0RrASUGKrhYvJLi2BjpdY0A7lsnZeyVxwI7u0WpCcC7tBPhnZOco0A0JeKynOyMM4rnyOlRlcAogJFZUeFgNdWXMV0jAUuNY8BdDAB3RuBQVxrQSAAdS4BMTFwhSUrlYKjCA7gCAx2EVnWgcLFWAKzvsVuzp0B2ovlnbmrg0DZFdRDLOKM4CbBdSuVe8qLVXHVTOFc1B7BL22B3CMMBTkECuIcvIxyk2MAABKWD1AAGWGdQGl-gxANW4E1VglAuAVPytQBSBb9LsHWZPOhTVNLlXpaUsM6C8FoHQUE7BQqHndF3mQiOJqFY0HQYkiYySeIVNLcTSRYt63CISVQmdtCeLZKAeOs1Kj6K7vNRpFaTL_CBu2ntdojqvUuvYFcQ9ZzhF-I8fRHtqBSQ2WwREyh0S-IDVXZk2qLiay5OXRMqsZgCr1Imb1R5pUbkRnrRyaxEcvACCnOaPxVxzHsJ3k1XDcAcAPqmMtTSp6A3euEZe_1gb2AAEITbmp9TWAyaAXhmqgO0eQKoI6-wlC8fy7AcNbrLX2HiUT5xbFoDkPahkcAAFY71ZW42YFDd1qkPWZWHetsHsiNOUKRJmkgAVO2pF0jmXNgL9L5rRVZ9F1lLHsM4Zw29TPwBiXc00iormm3YAonYbEHE5HOfBD0cD3k-cYrMLRdyPQMWiyXSLuzBRsVmHgZIsXJDJcoKlmY6WQX3XtOCjIkLGiIoTnPGsfiO5OZcwONznCy79zgAAOW9DANVqINURzfR3LuddOURubvPT9M4-s1wGw3LrkaI6oHa51puK4uALe65U4rHsJRQpScPDACKQ5h2RRYT4oNw3TeGzWMIEwhSncWxHY7-hdMd0oB4dQUmVyXeGAIR7VxnuvclNWrhUG_F2F3iuNDU4riHYvuDjIuanrJvYMUTKTk4CHy4EJ4A_ntiBY4ugHAedthWPKb3QHtaioO1M4jK4TboV3FbWVKH93J3vfCJ9vto3ZyaRyvSyIoNdMkNHRDD7Qp-cjqneumhdD52NRXIweLsJhH9pnB4pXs5gOALXTgJJm6YX_v0YwbLuX0tOLfdwdomUABMTlLdOUMm5JxquzeuR8JlAAHPbuJVWh0vu_VEodhGYfwN90zgg_O_0FI14WIgoNt2AKkIbzIeXEgR9rAntL6NPcWFN0Za3VuXd5-Y4Ax37RndZXd-ZJxxGzdxBmN2LaTjn0BN98DnAgeliROF19odMS9fxJCKzrx6uL7x5mjlxP6XF2SHlxkCDoLNP7fJ4C52jJUD00M-F8zlnlG8xAIVqYUH2VoxISuAnBkADEhlDLOVvvJ-w58aytxSIQc_14Ldai8lqa89-LCoCFOK8_l-t8zkruruqslSe-hYf8UwWOOOGAx-Ecp-coZ-14n-qB3-SCEAT-CO7QZ-Z4eB-B6Bv-Ag_-SBZ48mZBZBYBskEBQO0AgK8BEMUqEANc5-zkbB7BVBXCNBZOeYNgtApUOBXkQhwhqs3BUBfmzEOwAhF-l-shohGm9oUGqI7gcUqMLoZGZ-whwhl-8hokSh_s0h9kFuRhRhuhD0UGRcXioOCBqM2wL-AA7JlPYE4egY_s_kgV5PZPZEmEmM5IQX_vEOflqEmBbl5KEZwepnoTwSMKjGrDONIUIc4YZPYWYYoTwfSOQAiAPIYfYIVF5PJoZKrGvozORMzNPgIOZj0hQFZqBOBKJPROUaMlIo0SFjMvLBxgsksmrLZpqFrI2vYB5gbF5i-JFl8gvoMbbMZhTkCi7NQQoWOO7KVrTnYDtqPMHD8pVhYHAAAI6hBqEGrYprARySYmp17jbdwCAA6QY8HlHU72DNo8T07tp3adqgKDodQC7s5YIzjdphK9orjTqS5zrnQLqy7NEJYAaAmzq65Pre5N6q6hK6S9rN7d7h4AanRAay6SDgmwiz4QFaZTDlH6bNJGZp5J6VFb48wDKfJWCj5G7JD-BjJixknpYTHTJywZAdHKylEfKiR2b9FskXLebdH1FlbjEhZ2zTHL4grrZLHbZwojx7YbFQ6_7aqJ4HFGpjqmrmqWr6JZx4CZSF6crtB4AW5Gn6lJjmlyh4D2RWkmnyZ2l4B-FWpyj0geAxAECwCGkunZxvAemwBmk-leDoCJDel6lyjBmJCBnhntA15152keATKuoMqIA-mWGJYxncqckjExmH5nw-n8rYz5w-k2oEDcTpzFkxmlmYy5yCoRzxCYGoC6ngJZxZn9A5ktlyiwBgAdlALur6AZB2n9BYF2nqB5AxBgD5kk7XHiEsmCY04tqlTPFlyvHvorhvpfHBLoLRJi7GramZhkaRlmni5a4bpS4gky4RxLoQBzmQkS7QmDhD4QxV4Hr7nWywkdQ-4bl9gc7t4_qompLomrmx4kxSJzl4nzEbx1K3mr5NLxTbCuBpD_io6r69I1E77Ir8BzZHj8BXD8A_DFjVAZDmg_hkiMggDQL8CAr5DUC4XsD8ByaMWRTrD8DlDkD9C16bR0X8CFRtTYTEKkXEKYBkiUCJC5h5AFDvxmjPJFh_CljMXVj8BRBoDcUqDhgaD0IUUsUgDCUfxyQQDwB0VQ6sVKSqWZQ4AW44CGQKUQz8DDFmXOQ4Cu44BJg2U1j8BtGcmKzcmtKqX2RWU4CZRuUWD8A3IyXjxvKqVJg4D-UPxaURx2WaiWiRAOVOUuX8DrAXTyBr5yW4C6CQApDIXUCUnWYgB7wgC0A-hZC4X4Wmi0DmjDHmizAzD8DZXyDtVAA",mdxType:"Playground"},Object(s.b)(u,{color:"secondary",mdxType:"Badge"},"Secondary color")),Object(s.b)("h2",{id:"secondary-color-with-99-items"},"Secondary color with +99 items"),Object(s.b)(b.c,{__position:2,__code:'<Badge counter={150}>\n  <Button variant="outlined">Try changing the counter to Zero</Button>\n</Badge>',__scope:{props:this?this.props:o,Badge:u,Button:p.a,Playground:b.c,Props:b.d},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsyma8OzSV1jXaD04AEcgAS6SQoPQNI_X5O1IPCCJzCNWV4MkRDkKoVDrzw6gsIg9hgHYAAFKBXESFIhFCDAlgYgc7HkWCiIPAAvGicPYQNJX4k1NXaMFUF0FFjlOQTnAIRIsXYbg6PWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwMgAWMz2AANjMiz1jAYCADFvWgRIDP4ZxDgRB1MEYoR-CWIhqEoOBrIRdzq08mhnAgQTLnYABGezLPkWT5KmABBOYNPYCN6PIGwoHQMN2HkDkNLEMroxkdgUTUmBuGAISVI6uB5C3GtgEq6AauCAAycbxkSeZKGaEbqtq7hlrlMAOMlAZUHadgAH4NlGsMIwaq4FrG1A8urKQZCrN8zBhdVjhgMAwigKYjsa5rLuK5dqwTcSCBwLzMhSK8CEGmta3QmCqA42gBC6zKAFZDIGlcIcYSibmZVhXH6dwCD4EB9igNBsnESwBGSSr3D02cJm6GG9COCJ2AALQySgpEx_DwZrLnoJgXmpH-wHgdBwapG-m6zC_EBSJQmA0IFnACDgLBAN0ECDDA7CHvoqHETsPVQggA26sk9oAAEojhiB4nNE2FZk1Bdftf6lnotdqBdPjCKks1nddqZ6IaLUnpeqZfbdYjCvQVgMhiOAYGdvkmeekKGm4yhB2wED0DsUPw9CV6tN-wsoCFHaDMwZ7i5fdgAB85X7flccSbam_aJPdHQNuO7lDIhAEZ2IcZuGrlQUIiECI4m5RadCjLkmiBeKv2En6fQXO_LmLgOwzdzuh84ddN9EYTOeI9gbS4hmY3hJ8g2oIaJYke2vXqzwdNOANGayoCuyzN36DpdulkIYQ2Xi8K4ABOaBK4Lorjvh4B-E4j6Rgaj_Muo9qAKUweA_B-1Fp0DAQQ7BsMMgkNIRYf-QpKFUMgVMTSsC6GkOsp2AoLCCE6T0pw_B7VYClWAEoX--CcBiJEJsAQn84AiPNppCYtgcD9mzjI_0WCaxdAIH0cwY8t5UJrHtKM6j9GMGNqbAWsj9EWA8ALRwegaBdUsVYshTN2BNQYU45x-C9rFAANQABJgAMPkMUTxXiIYnTaEzMJpCLrhPwTQ-GFVKAALqjEgh_DOr0Xomw2yKQoq4x4ewMROBMnmzifEiG9ESkSIyNIuqvNKkVSqmdNJxiqFSDMQbRpBC3zOJOi0sM8CzAIOdFgUSNcI7sANjLJQcskIKzQlRVAKs1Ya2AvoBgQc6LTOWSEI2JtubMijnBa2WQ8ZQAdhAJ2toHrux2V5ewSwLwwFBpYGaMAlh6kGDAM88dMwnKIqaRUtz7SZJyH7LuqlYDoHNJ8dcNA4CB1oiHMO79I4Ww9LHeOwpqQpzGaJNAcN07dAvio6EWA84FzRVMvBNYWAVGQdkNeXgUnijURDJOsBJTMquKy8kHK_6Om9jQNeLy3kfJXIkte7RJl137u0FuICFVoEkS8BV3dqC90piPGs-R0oyrgFEBICqjwsCngq5iulk4rjwF0MAa954FBXGtBIAB1LgEwWXCAFSuHGeNRWIFkZ3WglLdX4M7sTUm6Bw3gM7prVw0bY0Q07r3OAmwY0rmftaggjrUTOrLtQewD9thrwjDAf5BArjfLyL8ytjAAASlg9QABkjmoHFfoMQDVuBNVYJQLgIz8o4NwljfS7BHnn2kU1TS5UpWDOISubhaA6G5I4SuMp39hFl39XbGgdCan0ykTxEZPahZdOWbI6p4ij31Iqfg3d-MursEfZmZamlZX-AzdtPa7Qo3OhjewK4r7I6yMyc--iy7UCkhshw4pYiyl8VRu05pB1gj3trJIC9Y6qxmAKrssdvUYWlXBRGdtHJQlly8AIKc5pMlXECcor-TUmNwBwCBjSK1P3puyMmgxco00ZvYAAQiDvjPjFgDJoBeHbKA7R5AqkLfFF4_l2CMZ4h9VjpT5xbFoDkPahkcCIyA1lBTZhKN3XGQ9OVJd21EbJqgWW8tyKK2xQnakqz1baE1psnWtF7n0UeUsewzhnCf3c_Ac2kLgUvlBcHdgNidhsSiTkQF7oPSJKRXFxiswMiYskAxXLw9svvMFGxWYeBkiQo9KVyg5WZiVfxfde0RKMgksaDSuuN89XQpgGvELYWBwRdUaPXecAABy3o-tXCdTOJdhS0Brw3jPRuT8F6INgzOJbU8Vtz3zXNsuqApt5vW2XLgJ2C2jNawIdrZKc6UqPtSouJc6XUMiKDGb-3F4QzCBMIUn3TvYKIKDeza9KAeHULplcv3hgCFB1ccHkPJRDrUfhzJdhv4rmo1OK4r3wHY4yC2p6Vb2DFEyk5OAKSuBqeAIl7YyWOLoBwNq7YIThnb1RyO9gbncVJyuJOu7cAZ1lTx58UGdCYe0I2-wmcpUcpSve_oezgjt0_fCLD5XW6D03skdI09jUVyMEK7CWRa6ZzPrN7ODDVT4M4Fqce8lyHSGMFq_VyrYSoPcHaJlAATE5X3TlDJuTCZbr3rkfCZQABzB_aZy3rEHbfo5wATgQSwSli6V718pPT8HJOBz7WRUhXeZAa4kHPtZi8VcSB7hbqAvdB4j37xvMfnGh_aOHrK0fzJhJA17uIMxuxbTCeB7JifetsZT2nsRku4dZ6Q-Xm3M-2nO8kJX0vQsCtFdwwS6zz2ipx3c0nWZyhnMpKFGx1W6z7HaxAM1qY-GlVt0ESuFnBkADEhlDLOWgYjewiUIEQApCEDv7Xg-5aheRajXj_41ioBCjGrv6f7QLOSR6R7OyjJ36FioAKR04M4YDP5lyv5yhv7XiQGkHQEWAkxAEk7tBv5nh0H0HkHrxwHxDv5niIxsFsFoGyQYFo7QA4r4EQxmoQBTzv7ORiHiFcFqI8Fc4jA2C0ClQ0FeRKHKHOzSFYFTDIISi7Afof6f56GqFWb2j4aojuBxS4wug6HKHKGf4GGiTGG5wKFv72Q-7OHOG2EPT4aDxCgCH0q4zbAgEADsmU9gwRjBlBwBRBXk9k9kSYSYzkjBsBAg8BRBWoSYPuXk6RkhlmdhMhuMLssulhjymUhkAR7hRhXO9I5ACIe8jh9k9ghUXkyMzsTmCyLmm-sInmV-WsWyKKOWsI-y7AZixueWaWVsNsGQsmVyNyLs_mmoHsE69gUW0cMWyKokqKe-SxcEWKB-vONqUhhhY4acEopK9Sh8GAT26K3WFgcAAAjqEOYd6mymsGXDpjjIPttpvAICjnhlzsMYAgLtOqVHOmXKdGGHQpunRKrjWJbnQlBtrnbreieudGeobkMUVlerbvbnemBvHqPjCewHCWPh1NnhiaCehoblhibH8dvhgTZlMH8cfvMmREKIrGvpVp0d5hsqBOBGsVYDNHViXpVgMWYmyckKMWcrbPbI7C5qsXcnMQ8osaMSsdlusZcaMdsTionHsanMSscY0KcQ9ucR1hsXjrAW6iXo8b6jurjHurmkGu0p3HgJlBJqtu0HgD7i6Y6UmJ6XKHgPZD6W6YjAGXgPEcGnKPSB4DEAQLAM6WGV3G8FGbAB6XGV4OgIkLGQ6XKKmYkMmZme0P3oPgGR4MsrGtKvaaQp3F4cVnmaqhMbFnmY_jqnGZqhgH3HGaGgQNxK3E2XmR2c4FsFqm2WXPEIAagFXHGbWf0PWRWXKLAGANOQQvGvoBkAGf0FQQGeoHkDEGAO3N8XJFzqKfzvYFOjxMLsCaPAutBvNrpCutLnkuCVnlrn6jafjAodmR6fCViUifVAbmXKYibKKRiYerrhptbjWL3vRBxmBdcbiTsoSfiSUohg0qSZecvnzJSRAKKTSQcW_FMoBY5nMvFNsK4GkP-JTo5pydfgwHSvwEdkePwFcPwD8MWNUBkOaD-GSIyCACQvwDivkNQAxewPwIZiJZFOsPwOUOQP0APptIJfwIVG1NhAIhxQIpgGSJQIkLmHkAUKgmaHCkWH8KWGJdWPwFEGgHJSoOGBoDItxeJSAGpWgnJBAPAIJXjhJUpBZZlDgD7jgIZMZRDPwDFp5c5DgJHjgEmP5TWPwBKRMVKdci5hZfZL5TgJlJFRYPwOCvpafIihZUmDgElXArZWXIFZqJaJEMFaFeFfwOsBdPIE5oZbgLoJACkGRdQF0b5iAD_CALQD6FkAxUxaaLQOaDFuaLMDMPwHVfIFNUAA",mdxType:"Playground"},Object(s.b)(u,{counter:150,mdxType:"Badge"},Object(s.b)(p.a,{variant:"outlined",mdxType:"Button"},"Try changing the counter to Zero"))))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docz/Badge.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docz-badge.8a3b231685ee0858b6d2.js.map