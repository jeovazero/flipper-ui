(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/core/Typography.tsx":function(e,t,A){"use strict";var o=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),s=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=A("./node_modules/@material-ui/core/esm/Typography/Typography.js"),a=A("./node_modules/react/index.js"),i=A.n(a),n=function(e){var t=e.children,A=e.margin,a=e.padding,n=e.style,l=void 0===n?{}:n,p=e.variant,g=void 0===p?"body2":p,c=Object(s.a)(e,["children","margin","padding","style","variant"]);return i.a.createElement(r.a,Object.assign({},c,{variant:g,style:Object(o.a)({margin:A,padding:a},l)}),t)};t.a=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Typography",filename:"src/core/Typography.tsx"}})},"./src/docz/Dialog.mdx":function(e,t,A){"use strict";A.r(t);var o=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=A("./node_modules/react/index.js"),r=A.n(s),a=A("./node_modules/@mdx-js/react/dist/index.es.js"),i=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),p=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),g=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),c=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),d=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),C=A("./node_modules/@material-ui/core/esm/Dialog/Dialog.js"),u=A("./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js"),B=A("./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js"),E=A("./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js"),y=A("./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js"),D=A("./node_modules/@material-ui/styles/esm/withStyles/withStyles.js"),Y=A("./node_modules/styled-components/dist/styled-components.browser.esm.js");function m(){var e=Object(d.a)(["\n    position: relative;\n    height: inherit;\n    display: flex;\n"]);return m=function(){return e},e}function h(){var e=Object(d.a)(["\n    display: flex;\n"]);return h=function(){return e},e}function U(){var e=Object(d.a)(["\n    padding: 16px 24px;\n    align-items: center;\n    display: flex;\n"]);return U=function(){return e},e}function Q(){var e=Object(d.a)(["\n    display: flex;\n"]);return Q=function(){return e},e}var G=Y.a.div(Q()),b=Y.a.div(U()),O=Y.a.div(h()),M=Y.a.div(m()),w=function(e){function t(){return Object(n.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"renderTitle",value:function(e){return this.props.titleAction?r.a.createElement(G,{style:this.props.titleWrapperStyle},r.a.createElement(y.a,{style:Object(i.a)({flex:1},this.props.titleStyle)},e),r.a.createElement(b,{style:this.props.titleActionStyle},this.props.titleAction)):r.a.createElement(y.a,{style:this.props.titleStyle},e)}},{key:"renderContent",value:function(e){var t=this.props.scroll;return r.a.createElement(B.a,{classes:"unset-paper"===t||"unset-body"===t?{root:this.props.classes.root}:void 0,style:this.props.contentStyle},e)}},{key:"renderText",value:function(e){var t=r.a.createElement(E.a,{style:this.props.contentTextStyle},e);return this.renderContent(t)}},{key:"renderActions",value:function(e){return r.a.createElement(u.a,{style:this.props.actionsStyle},e)}},{key:"renderPaperContent",value:function(){var e=this.props,t=e.actions,A=e.content,o=e.text,s=e.title;return r.a.createElement(r.a.Fragment,null,s&&this.renderTitle(s),o?this.renderText(o):this.renderContent(A),t&&this.renderActions(t))}},{key:"renderSnippet",value:function(){return r.a.createElement(O,{style:this.props.snippetStyle},r.a.createElement("div",null,this.renderPaperContent()),r.a.createElement(M,{style:this.props.snippetContentStyle},this.props.snippet))}},{key:"render",value:function(){var e=this.props,t=e.snippet,A=e.style,o=e.padding,s=e.margin,a=e.scroll,n=e.PaperProps,l=e.open,p=e.fullScreen,g=e.fullWidth,c=e.maxWidth,d=e.classes,u=e.onClose,B="unset-body"===a?"body":"unset-paper"===a?"paper":a;return r.a.createElement(C.a,{open:l,fullScreen:p,fullWidth:g,maxWidth:c,scroll:B,PaperProps:Object(i.a)({classes:"unset-body"===a||"unset-paper"===a?{root:d.root}:void 0},n),style:Object(i.a)({padding:o,margin:s},A),onClose:u},t?this.renderSnippet():this.renderPaperContent())}}]),t}(s.Component),j=Object(D.a)(function(){return{root:{overflowY:"unset"}}})(w),I=A("./src/core/Typography.tsx"),x=A("./node_modules/docz/dist/index.esm.js");A.d(t,"default",function(){return T});var S={},Z="wrapper";function T(e){var t=e.components,A=Object(o.a)(e,["components"]);return Object(a.b)(Z,Object.assign({},S,A,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"dialog"},"Dialog"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)(x.d,{of:j,mdxType:"Props"}),Object(a.b)("h2",{id:"dialog-1"},"Dialog"),Object(a.b)(x.c,{__position:1,__code:'<Dialog open={false} title="My beautiful Dialog" text={"Isn\'t it?"} />',__scope:{props:this?this.props:A,Dialog:j,Typography:I.a,Playground:x.c,Props:x.d},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymLUIHiShZyNWV2g9OABHIAEukkKCYJSP1-TtKZLESQUUkyGY8GSeD3UkZDUKodCCKIkiyJwiD2GAdgAAUoFcRJiLaDAlnYgc7HkV1jXaA8AC9mLw9hA0lUSENNRUwVQXQUWOU4JOcAhEixdhuFY9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBncyABZbPYAA2Wz7PWMBgIAMW9aBEnM_hnEOBEHUwDihH4JYiGoSg4CchE_OrAKaGcCAJMudgAEY3Ic-QVLUqYAEE5n09gIzY8gbCgdAw3YeQOX0sRaujGR2BRXSYG4YBJO0_q4HkLca2ABroGa4IADI5vGQiYEoZppqalruC2uUwFCVTu1Qdp2AAfg2GawwjdqrnW2bUFK6spBkKs3zMGF1WOGAwDCKApkujquoeqrl2rBM5IIHBAsyFIrwICaa1rTCoFgvZ5lQQavqgOAYBEmICFgPgQD1ZJAjCGJdqgdhEdg_hxmwAhBv4Bo4EOscCGO_gRM3FcpDBiGoZhiapCB56zC_EBqLQmAMOgpGUhwAg4CwQDdBAgwwNw969VCCAqbgt12gAASiWh-nic1tcl6WsPaW1Ne13WKslAZUDsCjDeNjIZfNiBLYdp3qDgG3UA1-0tZ1mXYMcPRMzdo2slNqBvd9iOUij1Wg5DqYw91tP9EsOmFLlOOTa9i3aKlnPgLzumM5Y7OU8sF5YEL9349Ln3y6t2XG7xmBa5ksGljYtdqH0JZ7GcZxBMoWEYngJYwYAOUBVqW6Ul9bftNiGi1T7vqmES3Y9Cr0FYDIYix_v3rY_M8BGvTD_14vPbNi2-qxK_7Xf3M3e_9BzU-OuGggcVJoBNl9aKDRp6DjpnQdAdgd571CD9QyIMUZ0CuF4Sg5J_RoPJlAZw5Auh0GOpg4QOCVz4IAOpcAmKQ9gWCKFoNxrAehKJpyzgAD6yU1MvTAK4WEwEdgdNhqICjsG4UvQEK4zTOzgPQqR_C0FRCwDQ9AdDzJYEDtw9ocBrQ6KIOgdoOioDYRXCrfQCjeHSOYXTURHCVzMwgHMUcVizR8O6NwgAUs4AAGjgC8MAYYrnYrMDI0D5FXEoB4dQWxRDMKbjAe-MB6ETyngOc-EB4COODi4ggyTUmT2gZk7JCTe5UJIrCApVw0nFOFFkuAAjEnCOdtUhwRSMn1NKfDWRAc2m1M6XPRpaCLHZR0qwmpHSZ4lOGfDJxeTc5jP6oU9J0yumzJrKMgg-csD5PGSkyZqzZ4NMcUQ7BUB6HtC8OgRIR0dFOVhHcuUe0sYWgeRkJ57QXmjnNNc25K5qD2CRljehf1uCdVYJQLgZh7p8j0AICB3QGjJLsMAcxXE4BY3uKg-G8MhAiCuOwgoK57qwtUgHfCiSKmzFhDVP-OAZDFBXCwVKXEwqGlgFgFUqAmW4PKlYZp_tzAGXpYylcTlOwFCuAVHyPgABMHkuUyKgBAFIqBzQvCCdihE8LuXwxZWSbiVwwCcu5bysw_LnC5PmFMEV-z0AMrYLy_VthDXspNdgM1ZUKXsCtc4m1izbW9XtY61gzqayCnyAdK4XQuIxDPnqmsmxVWECuGgTY_QCCJosAatlxrTVmHNeSl2Uxv52AMmCzqdUVz4oIFcNFaD4aUDPgipGIwACa5lvkvhCHYL5LtRxB3hqSl6qkMV2F1tCXZcC7AjwzAQRgUChLsEWsi_ZcBOoNvhv2NgWQJxwIyD3WAEZBFXCXTPOAABtdogj2gAF12pbtxRYLoBA-jmAmLYHA_YL3y0FQdFcz6LCnSjI2oD8NGBHpgNSlxRxv6DXxF-n9dw_3lMqRkZJrU4bgZw4weuWEoOAZw8R-DbEn3EYo7ij1WBpUOUo_RmsOAmOfrgN-oSqHYDJKIwx4dWHuM8YsGxQRrV-OUakPh7uiTsMCcg_-52omeOkcQ6x5DrHBEtOoJh8aCmGNCYJGx396mhUibAwxqQUGNOoGkxR8zVL0MCGs8-t8lGrigZkxJ2CUHg39QQyxgzKHBFacc_RoTiSTMyckB5lIUHgvw2czWMl27-isD3ZODIgaIxbKuIomAj7-P8rYnAM5CRV4GT86plS4HX3voBmJqLgadO4vIOO-ADNTP0aK0IErW0DL9teead5Ag7ncM6-c_S20-s_L-UOgTQHTpsVrVccr7Hmv-CxaGZ84XZvPquHtTAkBnToEa8O47NYlPLd_VsoLp3BOFmjgfRr4n7Yp0DcF-LFhEsRuS6lg9AgdkEBPXTQlYiZx5fa_yrZNU3M2fq1XGg_2bvefxnppDK24fbLptd9r4GhMF3umJyLz2sKBv-29yrQHqsCA_fptLAgMtbPeyZ8V33aD7vDAISzcAIy9Jdtl6xmAwdVdHDV6HxG8NE9lpzpHA0UcqfYzzuAWOBNsQV1tsXhPw5YU52TtBn2LA7pS6z2noTYQZcF0BgrIQhVwCWFspYtBdn27CyJMr-mKu4KF2-qntWbOxaA6F3uK7Fp-dp1Bk9iT2r4547j3ZJ1lOhl-_9wHuyrrx9p_T9HkfEcq-t0HtPv3Ofc-t1n7HNYpA65Ox7r7u6je_b9Xkv65HcWU_MKL3D9ebXS98279j8ybVK54zGWQsuE_s5N-l9Hf15CPVjIjxgHfRyBq7yP1TOA--L_RwP7bK_e_WtHGr-jUgF8EFe49yQx-K8JfJ_rt4KryBs6nI3_LPqm_gfXwQOjFHv6f-IxKlyKQf8cNjJTJAC39isoBQCgNx8BAIlIDn1plUA4CqNkECEiEghEDGtqFaE8AkD4YVE1EJhcDNkWsbdGtAVgVGR2sXd493dn8S1epwC9QV4RVwDxtetu1fknB_lS9gM5RptGtCVWCetnkB03kwkhtEdTp2hBsZsGNBCusoBr9m9hdvc29wNxdNdZZEcECEMECD9KN8FCFiE0Y2JDC0Dggo8GMsD1E8AENrCCxLD6N8DsCENnCbD9Cv9wCENRsEgmDYpHDKNoCIkENX8eNVtMV4B5CxthDJsLRpsJERshCJsOCZDEdwN5sJxnxroSCNsRAPDttdtwwDtsgiDiMmMcAgihJEcRIAiv99kQi-xnIChEpXATI0Alhyjv5V5ajiNyCUoZc9hUAgV-i-MeDcVCs98phToQ869Ji_olsadftoCzd8jcUntNDYJL8PsYUVI3p7R9t948xcQUUIwy0OQIxdY3wxYJZO56JYJGJEh5ZFZlZ0cGBM5WIrBCJ7jZgyJe12Aw47jiIfjkhH4xJn4E4k5y5P4NQzQh52BAp7BV43Z15oSPjEEvpkED4W5j5T5MlL5QF4VEVGgIkp0QJ4FGhd4MSUEm9UBKAYN6FGFxQq8LAUtTYaBSF-MdE8ACpZDcUuS5VeT4YuSkxBSawuS3JRSLAuSABWSUiROUPALyOUnRekDwQRHkzkuUVUwRAUzUq5LgjU9rHRP5XUo0uUOIGYA6ZUvg8ICIQ6cxbBIUDks09oDIIQCQl09NT2DeF0ndYybg8DFUrYagdAVogMoDHRB3AgQSfkMM60m9THYMjAOM5VVVVAZ0wMuUL0zNeM2AMAH0zM9oHVE2eM_oFIQgeM9QPIMmbgslflQEh4q4BExdCJTqCtJvG6MMQA4A9o8VJomcQArogyYAJQFcVk6CTMXrE0jKeGcokQDNCJGFdqcFbmAEr4oE0iRIfjNiOciYcJZdHo9gcc9wemNiY8zMQ8pTNiHsxAxoyVAc9gTo_Zbo4LeqRqW6A_dYhs4EqsV6LAGSA4zEz4hiYE0WJQcWFCS2E-FtC-P8BWJWbQLZN4liQeD4hE8eKZY5eAJE_WFEzeKYNiDwCUbYXiPbHCsSJjAEJGAQEBYOFiaA7EyQaA1E78zcxi1ipiXY_896MBDIIk9Ew4pvb-FZOpIZdFNbReb0A5YNBxZRVo0yehVAUIIgQII4EbEHQoNBP_AoRS5S1S-UolGcFcVAKS-xYlNBLgMyoyu6Ak8BCUJFEk2BDABBSkwSh0ogGGYHWSnpcIYYMsGS8y-GT4GGNpaJWJSUGRXyoUUKmJOJHYvlH1MtGqJvLwAQKcetfjVKqcAAGU-jrXYGKAKk8jgGwS4HYAABJgAiKdhSKMAGVWjth5Bw1tibKEr6DoK8T8pmzz07g2zaoOzIgYZADSY_LADtKZwapip3KQrnzhzRy0ERrorZrWJ5rZymN5z9yL0lyOpuZoD-NxqUgEMDrVidz1q9yYCDzgtIN1yHjGsbzuB2gCo5VPInrPILJfJGsDqHrZVCoAAOD6sYq8x8pjMtHALKjIDopjYK_QLTUYyjeqQal0Q88zG6n8_ja6kCzcu6-StAB696nwV6gm56uyT6_sw69oH6gqf6kmsY88-mIs2YK0xrIGp80aMGoUKcSGnARagQWG7TMYlXKKo4ZGyQDixIbDKQaA3850bi_YpBFBDq-pLGMC5QG4x0mip4l4-7BgPYqYflP0sM5K5lBq8yAAYgsgsi8gAE5pT7AZyawVVyz8r2hTbrw5UtRAotRrx7aLBaSBAogoAzaLaravJfrfqg4yVda7t1JqqSKhAyLhzjaBBtgzbrwvb06fb2BHbU05RTazx86C7M6_aA6zazxpSy6y6I6uKZJ-V8goAW0jblFsgIBlKzavJ26O6q7cEo7-URgbBWdetTbAph6R6g4e6fUPAuIdgaoXaLa56LIx7Za9afVUR3BUpWiXRB6R6R6LbF6a6V6C5B63IFUT6973p-U3ShRG79UTbc7rwAB2AqewJ-zO7O52oetyNyJMJMJUwA4u-IM2rUJMOVQKEBruv8_e-gkYVo4OCarehEgqCye-s--0Wu0IcgBETFGe02tyewCqQKaUhelWiCmiIUKWaAp4hCigV49WFiNiBi_wf47WBi0EhCcE9uSWVE1CtiBE8ixSTUVE7eVyoC1hyiRW2CoOCBniwk-y4k5dJy8kgSoCoSgAR1CA3oZPISZJXHnBgEN2dl0pUtBFaotR9WgKbPsBbKEj6urRGXfK7McWWpHLGrJu7JxowLQV3IXKqLumXIlrDj2va1OpwA2ouovVWKBoOpaLaNvNZubhqNfLOg2gsO5g1ylurvekApQUCbFjSm2FcDSH_BKtQC1tVgYCfX4BMqPH4CuH4B-GLGqAyHNB_DJEZBAE_34BbXyGoBqfYH4AshwAGYsgSnWH4HKCIWcQAyQD6ZAAql6lwmbhaebkwDJEoESFzDyHEXXgASLD-FLBGerH4CiDQF6f4FUGwCKYOYsDGZgFRkwFUhOWmabzGc0lOZAAKhwDlUGauZrH4HXjeZlRwF-pwCTB-euZAHYdfg7jIbebckGZwAKjBZmb_h2fTH0EaWmf4CTBwDhatqRb-c1EtEiABa8iBZBf4HWFJWuL2dwF0EgDlk0GoFKf0HKf4FoB9CyBqbqdNFoHNG2ZpQ5gUHkHkCAA",mdxType:"Playground"},Object(a.b)(j,{open:!1,title:"My beautiful Dialog",text:"Isn't it?",mdxType:"Dialog"})),Object(a.b)("h2",{id:"dialog-with-typography"},"Dialog with Typography"),Object(a.b)(x.c,{__position:2,__code:'<Dialog\n  open={false}\n  title={<Typography color="primary">Title with Typography</Typography>}\n  text="Simple Text"\n/>',__scope:{props:this?this.props:A,Dialog:j,Typography:I.a,Playground:x.c,Props:x.d},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymLUIHiShZyNWV2g9OABHIAEukkKCYJSP1-TtKZLESQUUkyGY8GSeD3UkZDUKodCCKIkiyJwiD2GAdgAAUoFcRJiLaDAlnYgc7HkV1jXaA8AC9mLw9hA0lUSENNRUwVQXQUWOU4JOcAhEixdhuFY9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBncyABZbPYAA2Wz7PWMBgIAMW9aBEnM_hnEOBEHUwDihH4JYiGoSg4CchE_OrAKaGcCAJMudgAEY3Ic-QVLUqYAEE5n09gIzY8gbCgdAw3YeQOX0sRaujGR2BRXSYG4YBJO0_q4HkLca2ABroGa4IADI5vGQiYEoZppqalruC2uUwFCVTu1Qdp2AAfg2GawwjdqrnW2bUFK6spBkKs3zMGF1WOGAwDCKApkujquoeqrl2rBM5IIHBAsyFIrwICaa1rTCoFgld4coeZUEGr6oDgGB7vh-GYgIWBBsYejYMY5IqCRgQ-BAft-VcAREnESwXlgPNcSsQjydmMipDJ4jecSMQ8fxixaCwAhaZy38rGwUQQBR9hNxXKQwYhqGYYmqQgeeswvxAai0JgDDoKRlIcAIOAsEA3QQIMMDcPevVQggRHYIUuUAAEolofp4nNV3jdNrD2ltZ3XfdlIKslAZUDsCj2h9rJ_agQOIGDqOY4OuAw9QJ37Rdt2zdgxw9EzRPk79s308zkuUjL-284LqYi6jxv9EseXPaT32MhroPaJN9vgM7-Xm5Ytv69ZonukrvvU9roeQ_NmffXD-0waWNi12ofQlnsZxnEEtGMhieAljBgA5QFWp7pSXw3qY2IaLVPu-qYRMTj0KvQVgz-pBPGSbF8x4BGnpL-bpe4pwHhnPqWIgHvXgbmROyD0Dmk-OuGgucVJoD9l9aKDQT6DnlnQdAdhX7v1CD9QyIM9joyuF4Sg5J_R0N2gkZw5Auh0GOow4QLCVzsKgAAdS4BMXh7AmECLoYTWAEiUTTlnAAH1kpqG-mAVyyJgNnOO8jUQFHYCo6-gIVxmjjnACRxiNF0KiFgUR6BxHmSwLnFR7Q4DWlcUQdA7RXFQGwiuO2-hLFqJMTI-WejFErjgPnOYo5glmnUd0FRAApZwAANHAF4YAwxXOxWYGRiEWKuJQDw6gtiiBkWzGA4CYASMPsfAcAD4BRJifMAgNS6lH2IU0uAmiqnCJIrCDpVx6ndOFBAZplTZ46OoMMhwXTGnjMmfDMx1A4BzNGYs8-vS6GBOyjpORIyFmnyWTs-G0SICxIIB3fZ_VOkNJOdsgJo8aBd0lhs45sInl0LgFw5hUAJHtC8OgRIR1XFOVhGCuUe0cYWghRkKF7QYWjnNMC0FK5qD2CRjjCRf1uCdVYJQLgZh7p8j0AIAh3QGg1LsMAAJXE4A43uLQsWFghAiCuAogoK57qktUms_C_TBkZBqmgnAMhigrhYKlLiYVDSwCwCqVAkrWHlSsFUmZ5gDJiolSuJynYChXAKj5HwAAmDyirTFQAgCkVA5oXjZOZQiclSr4bSrJNxK4YAFVKpVWYNVzhWmjlFQc7I4q2AqrdbYD1crvXYF9WVAV7BA2XLaTcqY2rQ3oHDawSNNZBT5AOlcLoXEYj_1dTWTYNrCBXDQJsfoBAK0WHdbKr1PqzB-v5fHKYyC7AGTxZ1OqK52UECuHSuhqN_4UqRiMAAmuZZFL4Qh2CRfHUced4a8peqpBldgo7QklmQuwu8MwEEYEQoS7BFrUtDXATq474b01YFkCcZCMhrxgBGLRVwL1ozgAAbXaFo9oABddqD7WVdAIH0cwExbA4H7H-y2GrY7UCVmLU6UYJ2svhqTIVsxYS9VDYNfE8HEN3GQ7PAZBGMg1NanDHDjHGBTywh-9DjGcPIJIxBjjvH8ZxqwEahyfGRM1hwOJuDcAENCUo7AGp7HRMWBEuNBTim2JaNaqpjjUgWOryqQxxTtYP2aq0yJrj6mCTSaQ1ozVdGVPYcMxYCzZGZM2dQ-YUWjnaySGM-5gzvH-b4diQIfzYs3x8auFhwzzHI7TyqUR_qJHJNWYo1ouzoWRPqfi55kTOnYusf06Z8LNY-WPv6M-2gr7wwCHTRGPZo7VEJMBOB9jaq2K_KEAkO-BlkvkZ2exqDMGAZ8Zi8XLC6bTPw3ILu-Ag1Juso6_8_S21V2wvNPCgQYKVGLa61tAyq2UVoo3V5_Gp02IjquL1mT03_BMtDM-TTDnHNXD2pgSAzp0DzaU19hLxNnNSb6x8F57TQ30Z-_VYHj2RuSF06XYHGXivfdYWVtgL7Jzvvll--WnL9Ezha09tV9WapRYC7DhuwO3kVMM-Z0jAPrsU_lul8H4xu45Zw3lsb5t02U4RypHDg2BCwcs-jmrwO6vA8R49vV5W0dvoEJquAEZVnxyuFYmA-P-ejiGyT7TZOFe_YGv9lLUnlfrNB_ZwzbFTdQ4CzD_L5sFe87oaV_NMvKsi7ybCWrGvWVtZCO5uASx6tLAlgQEP2WapXb_XzyDWvBfDYCxlnDWXZ5XsWslkXH6v1VPamz3j6nu6nQz3LynWPJZXVp6GOXtX6u5-Z9bhaleRcK6VwHuvT3cMqye5Ll3Fgn2y-qymq5f0eP4wF-YHXTGh9tIN0lyzgOLlXKZx31lMZZBG49_k0X5cCB_XkI9WMP3GDT9HOm2fRuF9BuucD5fJ3WKV8v6m4NeftOSBP9fnfSeaxSHf07zdMe-83hrVyAqspwR9Wsk1R9OMr9hNeNkFYCON9UXIUgEDGNjJTJUDOM_kEhMDWVPcCkhJcCxZT5UAiD-NqEoBOFuFSDTMhF7EJgyD4ZbF6C8BGCawbtGUL5TNMVsVGQnsRIet58hIAD8Y1UdsoA9Rb5tVsCoBlt9tF1UUnB0UV8LBTogUlDjsONOUZC5DoU104Ut9NCRM1CNsjCIteoZCRD4Zx8E9dd7dkYVD8YSCSMSCbdRMhEqCggMY2IPCuEvC3CRM6CxE8ASMgiHE8QX80DXA7FgiSNmDgiAi-NxCSNxDJDYpIicN8CBBCluMfspsZtmVxDdCDsLQjtDFtsdC9s9C1tTC8jWUzsJxnxroCj7sRBEiTsXtwx3tsg2CONxMcAsjCkftlMfsac2IkCChEpGYMD2B-jkE74MjWUeCUpDc9hUAsUViwdHD4Z2sr8Tom85d38_pLthc5csjvd2ixYOco4_8SsSUVI3p7Q3sP4OYJgaUIxe0OQIwo43wDYjZl4BYKZLZrZbZgcGAW579AShZl12Ai4oTSJkhIExIq5-4A5B4hQYBEFN5NRt52BAp7A75E4H4sTn5Gg34vpqFP4e4f4_4AEcY84yV8EJQqVCkD0QJyEySqEaFR9UBKBqMZgJEpFxRkcaxn1_YaBeF2NXE8ACozCaxpTTU5SLBpSkwlTDE5Q8A3I1TpSABWbUjUryfUtxN4LRWUqUuUekDwLRRU809QkFM0p7VxNFG0x0uUOIGYA6I0jwcICIQ6Z5amSU109oDIIQTbW0utfuR-IM-mYyZQnDVxHGXQdARmOM1lVxUPQSBmJmI00PZwLYagZM7Mq1G1VAQM-MuUCMhtI02AMAKM8s9oZ1P2I0_oFIQgI09QPIGIMAZQvlNVeEsiK4fE89QpTqftUfG6MMVA9AtAVAiYmcVA-YgyYAJQFcMU6CTMfbZ0jKeGfokQetIYu6dqfFVWOE7mQWBE9jNiXciYAgv9S49gNc9wKWNiR8zMSIsY9gac0gvsZySY2Y8TeY5TDLeqRqW6AIjnfs4WB4rAGSZ4ykrmBiIWfWJQQ2FCYOX-KdGIHGYEm2bQercEliLee_fEg-T5HpQkqBYkp-e_DwCUbYXiV7CisScTAEamHBfOFiLI6kyQLIkkhCnmBE7iyChk50GC96PBDISlTkik7kqJUNe5MZb5fI27K-b0WpHHSJGxaYtACRVAUIIgQII4bbXHQoOhOclIXS_Swy9UrlGcFcVANSiJblOhLgJyuyu6XBclKS39EhQ9DAChckl48cyIGGDS5ylZcIYYMsIjTSqbEK_QOZEpMpSUUxSKoURK0pcpe41VJNXtGqUfLwAQKcMddjQqqcAAGU-ga2KAKk8jgGYS4HYAABJgBaKdgGKMBxVGZth5A80kdeyk0MK6T8ohyfK71idgqiAYZUCwgJghRZzfyZwapipnkpqErQclyVy6FZqoq6NNrUDrz9zhDDyOpVYsj2NzKSNzL7yrzxM9zbzBwLdV9ILTMvzuB2gCpTVPJPrPILJfJTNLr2gTVCoAAOf6xwj8uY29HAMqjIJYfoz4GGOzLYvjCHNat89jfmM8imDLUmbGpCxwt6yyb6r6nwH6uyAGxalId64GgqMGimxw18qWBs2YT00zSGgC6G2GgQeG8THa9K83FG_PEINKo4SIrGxChEhjKQLIqsV6MSp4rkyqWk8ZHGZC5Qf45hIUKTK2UEnfBgR4qYNVGMlM_KqVbq8yAAYgsgsi8gAE4dT7BtyaxrVWyGt2hLbrxTUtRAotRrxnaLBeSBAogoAraba7avIQaQa84-VDbCxu1JE6KOqcglzzaBBtgrbrw_bs6A72BXaa05RLazxi6S7c6g6Q6razwdSq6q6Y7oKZIxDoAp0zabFsgIB9KravIu7u667WE461URgbBKt9tLbAox7x685-6k0PAuIdgaoPabbF6LJJ6Fajak1UR3BUpGYXQR7x7x6baV6G717u4R63JzVz7D73o1UQyhQW63ULbC7rwAB2AqewV-3O_O920etyNyJMJMQ01A8u-IK2rUJMU1QKcB3u-Wo-hOkYRmfOJa3e_EgqCyJ-y--0MQ0IcgBERleey2tyewCqQKHU5e9W1CmiDEnirfHCvW-2Ai4BDiLfGEouLipEhCFExedEroPioitifEpixSTUPil-QK-CthyiIa1WzE-u8Sry5kxoVk0hfy6SoKqJAAR1CG3sFP4WFJXHnBgAq10SuD0oMtBA8pyoTqyMHPsGHKElHNqnHNAsnLkv6nyq2sfSpqnO0poLoUOoep2TalOroVG3Oqe1upwHuuyMvXfOIzYnGM8c_O8d5pwEAqFrFhAvOmCByw51lpkcVpkqmFCYNjSm2FcDSH_HqtQFof0AYAg34AcqPH4CuH4B-GLGqAyHNB_DJEZBAFgP4CnXyDQyQHYH4AshwDGYsgSnWH4HKC4UuQOiaZGZAAql6lwnZi6fZkwDJEoESFzDyAMQfgwSLD-FLCmerH4CiDQEWf4FUGwAqbOYsBmZgHRkwFUgmV6WGdHxmc0muZAAKhwFNXGYeZrH4Afl-eNRwBBpwCTGBceZAA4dgWNl-bcnGZwAKlhaWbQSOfTH0A-eaZACTBwBRbtoxdBc1EtEiHBa8khehf4HWF5T-JOdwF0EgAtk0GoGqdAhADpRAFoB9CyCaZadNFoHNEOYI34HkAUHkHkCAA",mdxType:"Playground"},Object(a.b)(j,{open:!1,title:Object(a.b)(I.a,{color:"primary",mdxType:"Typography"},"Title with Typography"),text:"Simple Text",mdxType:"Dialog"})))}T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docz/Dialog.mdx"}}),T.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docz-dialog.8a3b231685ee0858b6d2.js.map