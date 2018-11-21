(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/docz/Card.mdx":function(A,a,o){"use strict";o.r(a);var e=o("./node_modules/react/index.js"),i=o.n(e),r=o("./node_modules/@mdx-js/tag/dist/index.js"),s=o("./node_modules/ramda/es/index.js"),n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),g=o("./src/colors.ts");function d(A,a,o){return a in A?Object.defineProperty(A,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):A[a]=o,A}function t(A,a){if(null==A)return{};var o,e,i=function(A,a){if(null==A)return{};var o,e,i={},r=Object.keys(A);for(e=0;e<r.length;e++)o=r[e],a.indexOf(o)>=0||(i[o]=A[o]);return i}(A,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(e=0;e<r.length;e++)o=r[e],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(i[o]=A[o])}return i}function B(){var A=c(["\n    background: ",";\n    border-radius: 12px;\n    min-height: 52px;\n    padding: 12px;\n    border: 1px solid ",";\n"]);return B=function(){return A},A}function u(){var A=c(["\n    border-radius: 12px;\n    color: ",";\n    padding: 0.75em;\n"]);return u=function(){return A},A}function Y(){var A=c(["\n    width: calc(","% - 24px);\n    background: ",";\n    font-family: 'Roboto', sans-serif;\n    display: block;\n    border-radius: 12px;\n    margin: 12px;\n"]);return Y=function(){return A},A}function c(A,a){return a||(a=A.slice(0)),Object.freeze(Object.defineProperties(A,{raw:{value:Object.freeze(a)}}))}var E=Object(s.j)(Object(s.k)("xs"),Object(s.h)(100),function(A){return Object(s.b)(A,12)}),I=n.a.div(Y(),E,g.b.normal),l=n.a.div(u(),g.d),m=n.a.div(B(),g.d,g.b.normal),p=function(A){var a=A.children,o=A.padding,e=A.margin,r=A.style,s=void 0===r?{}:r,n=A.title,g=A.xs,B=void 0===g?12:g,u=t(A,["children","padding","margin","style","title","xs"]);return i.a.createElement(I,Object.assign({xs:B,style:function(A){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{},e=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(A){return Object.getOwnPropertyDescriptor(o,A).enumerable}))),e.forEach(function(a){d(A,a,o[a])})}return A}({padding:o,margin:e},s)},u),i.a.createElement(l,null,n),i.a.createElement(m,null,a))},C=o("./node_modules/docz/dist/index.m.js");function Q(A,a){if(null==A)return{};var o,e,i=function(A,a){if(null==A)return{};var o,e,i={},r=Object.keys(A);for(e=0;e<r.length;e++)o=r[e],a.indexOf(o)>=0||(i[o]=A[o]);return i}(A,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(e=0;e<r.length;e++)o=r[e],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(i[o]=A[o])}return i}a.default=function(A){var a=A.components,o=Q(A,["components"]);return i.a.createElement(r.MDXTag,{name:"wrapper",components:a},i.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"card"}},"Card"),i.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"properties"}},"Properties"),i.a.createElement(C.PropsTable,{of:p}),i.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"normal"}},"Normal"),i.a.createElement(C.Playground,{__position:1,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpnsVwBByY05XaT04AEchAWFGBJBguDAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnbiABZBPYAA2QThPWMBQIAMR9aBEm4_hnEORFHUwdgAAUhH4JYiGoSg4DExElLrFSaGcCBqMudgAEYpJE-RVSDVAKKmABBOYmPYaNgA2aB0Ejdh5E5JixFCuMZHYVEGJgbhgGPWj6OxeRd3rYByBsKAouCAAyMrxkSeZKGaIrIui7gmvlMBQj8vtUHadgAH4IpKyNoziq56v6uh5DjfdZDMT8zFhDVjhgMAwigKZBvixK60YIK1zrZNsJyGICFgPgQF1Y4IFcGE5QAR0ZEJxgyTJB1gtpxHXCxVMoCAQjgfIiGVdgADkxxYS6YBuu6InQfwfsHeA4EofwAe1MdyXcCdLrQWgICEAHxQRqBWAyH13vYW7ulQApQgAS7lC6UtcHGFtWCoAczMdyZS7oVN-7pPg8NBuzHcHRxOAGzrRl0CFcHz63rQHXHJ2BztcJZKfnGm5QqCBoUMuIKjVqnafYdWUk18WrqHGAUiFk2AGOx216Eh0oUm4BgaE0VcDx4mGAGjK-olvfpznUeiAQHfGH0PGN1BI-l1hLqgABD5H-2Z_XLrj13dvrJ3Byez4h1gwcHf9wOGYFy7Q-ezAcbHaWiBjuVs6jxP2BTgHLz2Umzdg6H7cdxnndgy6rajARy9sSuQ7uscoG7CPKCWRvm8Htuk9T9hL1J-fF8j1v87Ep6hDeWCp6Dquybu1v6doI5qEMm3UXPoGQYu0mRc5y7LEeseXuhNGAAV0A78b8VZXWvkiKwf9nqn1CgAF4QWA4GECv53VcKTX-AgnrHxWNGJBKD35gwhtA7BuCAFdxNjDBoKQujqBhi6OUoQtZoDHJg3OFgfbQwXpPYyFcKhV1IXsOwkBqbT1XrHeOrhE5yk7tvERRoIDiLsIfVwABbzIRBSbF2nDAair8A7T0ERdYRYdSpRyblIhuMjN5UPYVANqY41E6x0aPGEqJQjQz4UYy-9NUZCDAPDYUli16twTnYhRATarBKONnN2w8C5Jy2AMVAhiBHB2rjfeOaA_DsCiNPNJA9dF0HyGkvhqDQZXVJt_GBOD_7wIIcggGlT6boLIbAvBgDCEtOIZA7-WDOkAPYL0tBwif5DNPhbT4lR3C0HXkfdxOc5YWFurBWgUAL4zyyd0R2lASq20kS3aR7d5Hdz2Qck4Czh46KekzXRZs_5bJMTsvYnBKZEAgCkGxVjjk2NOVvc5z1yAQH0EyTh1ydZJK5uMTI0sfEZKvjXE44QQlHPXhEjugKe4QpRREOJkcj5PVPCwOICLjGZKgRi3Jl0Cl2BOHQAA52PQufRYLrikPtfKUhtq1k5L-EAKE0JUC6FhfuOACBwCwGQHQoF9AMDwvNcKMguAwHMqEFaEBySJDJFqtVBdKAzBikRRCWjobtDtPNEMUoTWmi1Baj5-EUo5QLAheUqVYDoAtEXag-g4AOsVQ6cKQ4BSwR1YWGw8z5C2qQp6KgUBhT-stUGxo2pFrLSmNGt1SFJABXQETEUNIHX8j0AIJa-kGgmUNXYbAYF0B2AaGmpaGqpisVzlgOA3UrioBYYEAQ65DqwC7c6uchRc4jVKqgYd1qCA4BncDTAZhxq-Sxhkct3QGiOBoIzF0Rw21yw7d23tYJc4epgMOygHh1BbFEKgZdZhHjsAAPpPttWay6IxGEiD0VQFIlMXI5A8MkSwzhyLUEoheIyGREQ5mYjMPV0YXYzBfB2j86rNXaujG5HiPFORqxYetFVmBow9qIEsNyAAmTkM0_LgegqBHdGQQpnvQDgGQjBN0MbQBkMQxR1y4nQBMYa8RyDRgACTAEg9B_Q8gACk7ALTsAozJLA351w-x2HQtoGArgSZDexRIOAfgCCiFAby64HKWiWp8pI3FRSXpEJQYSDNUBwAtO7foYBZb1hYNZBeWl2AeATTsbzXDhSzgtJkFgeQriUcEqF_JsFOKxYo_FswfHfL-XYAACQlLOZjLrWMyAy3LLwcEMiRe7Dre47lUtYAS_G4UungAjEjTAczucxI9gKFcHiOAADsABWcGPkMtgdc_RvQsHnVpSK2wEr9YNPbC021dAzXWsvHawlsrEWovVZS2l3OnzUAWk2F8wgVxBt1YS11iSKQDv1fU-FjIsXZIEy4OwPT_QDNGeFKZjrY3aMTYcP3K4M6cDOFUvYDjVa7gJWYmFPqk6yTiQKOZJLaAlhnpCsAJQ4wXiwCWB2kKlGljkAXr9BWp4YpxW4PlPaXHd2kwsB2jK7BifLpWXnF1bPg2o_nOjjimP2A4FF9j6NnOuc9Ap3AKn6Vwrk_8LLn03Q8rM4bLl7sPHwqDtV1ITXs56crMYFusCBAxAK-KpOmKnK5U0CN7b7d3GBC1lmlgJ1mBm0rRB3BMwAqhXoQTQIOAErgKyqmwYCCc0HRZf02GnH65vHbG4gAYhw3JAAnIN-wdk5ZQHOwQVPd4KPalUtqO8uf6zGdM6nnDGe5IAA4G8OvvS6d380stLZWxgBPuck9F_L4PyvFh88pAu_KFPl4p_T-HybP78RU-XkG0vpfLfwRt6dVl_IhMmPMX3fWElOsiCp7kqfs_a_fLR6mFljb8zmLtBT6pJ_z-HVX5LMDoLkpdj37Tzhv_r_28Y86NYV3BrJYJXQf9n9n8cMADN9gDaAsApgf8pJlNUDYCO9gDHoQk99E9YJk8J87x-s3J7BiDZ9R9x8H9VIpIpJUxUw5JZ9q8F8J9tRUwKNVI2CL83c4DgdP0BBTYQpKCodsN-t0CgDgcGRyBERfoBCU8pJ7AApVJBseIHV_dUJ0JRU80C0Yh3ZQ9pVtBdAzcFUoJ2AZ0Y0zQlRk1W1Asv9u8cgs13RY1A9E0A1jCjJZgmNs1PQ3C4QXCnVLBqpKA6FZg8BkhPDJB_ChQgiZgQji0N95pV0y1JQN0m0M0WJ1wz0L0r0b11xFdKcVdh1URR11x2JOJh1SM-12AAAfEdAodcW7AoMo49I4aowo2ou9dfBI9dRoWHGtRAugetVNdNFtNI8dSIW8QvGo-cdcMICYJrSYsdOWT4cYuiNKTI69KUaY8IYYAQFYodK4S9dY29VvLfF1OwHA3OHbF7EYqXQLZ7AQAAGUWgmOKDcje32Q-wky71PgwDYzwPkAWwsGXWOOAM0IyG0NcnB0h2h0rWHDgHh1Cn3wsCWP0BEjlhmO2NRPrHqPnBCk8hyLGP0F2O6D3yUE2NmJ2JdRx1JNzlFxwBEE2AEB6KXVpwd28JPRuOxJSDZ05JinV3ClpPpIyB6JiiNzlkYAiMCMyGiMSHVzlhKLQG4HaDix8GVPYB4kUllKxP5y5PaAUhVIbw1IhS5zPV5xFzF1OJwEuIECWFpORMckpIl1FKlwVwJJzEly5ykAlKiJCKdOTC9KlJCM1IsHlNQEVPVJVLq1q0NJuLlk5MVL1PcgNKEiDPYETn6DmUVLiBmA6gdRjO5zSlNNpLPRDytJtNF3ROFCJONTVyNJWXCgrKOHdON3CICO9MSAd0kDZJd3Xzf091SNBMLXdj9yUEFTUJFUwi7N0JlQMPlQgkDSsK7Nhn1FCAgEXPsOIgAAEoh74LooALQVz1CYBfCrUtQzD7VLCWJBivdM0Y1PQBzwTYi39OikjujYSYQ-iMAG0UjhjESkdIxp0tQ50tQF1wU5Y4A1kuhh0vB9kJRfI5YlwYBE4OpGim4T1gTgcuywdAKoSYdYT4TEcJ1IwsdKSSSUdusBdEshdUAyy6SJghS3zYp4oOVlzVz3D-1az-TRdBTGSGL1cTTwo-dyKUhBdOIaLxcRS-S_zggmypAWKuzXc4iHQ-zhiuzhzlAA9xyWzIiAzDNJU9CQII8jCnVwp_TgjkgYYWLTLpTjVs0tysh0y9yDzxzjyHRTDs1zD3wLzwpG0hjvd1zEI7z80wSi0OjS0uiYTq13y60vzfLW11wfgAB1KUqC4QCkOC-sQiugAC80IC80EC9cNMi6GgLtdXao9oXzNGRIKSXMqXMqiq_zVMGqrnOq2wSqijJqlZFqvzVwRINyDquWMqzYbsfPF0fq-sMq3XMaiwMqhkDwIau7Kaqo-ULwdARIdq0q5apwXqxasqrMnMja9oDwcICITqfEoPEq2suq2Kna-ULAgQG69oXJDIF4B6uPAQRIB692XQbxD6g6hAggEyUNd6h6_65wLYR-MNDq-IL5KdRAA6p6_oTyy6-UWAMAJGm43asFe6g6_oMfdG2q-UdQPIGIMAX63ydCyiKykIrCnKnCiKuHEKAiq3Iiyi0S2uO7YitKKkmi7i4UxiunZilcqmlEHnAS1m4XTksSh03kjis02ihkvm30y8zK8wGSyQSy1snShS3s2KqwTWsytSkAGybYVwNIICagacu3SPEAfffgNJU8fgK4fgIEYkKobwCrf8ckJkEATE_gAtfIagR29gfgPrUOsydYfgcocgfobM1JIO_gAKFKPCZWT25WTAckSgRIAsPIAoPRc0b1UsV20EftH2iOkAApIMJAYOlQKMDQOAcOusSOmAeYKMPyUFeuqu38_gDy-OkANyOSHAQbHACjBuuWbun0aGXuvrCjIeniUe-sfgFjAurMP1Xu1MHAKSHADPeeiwfgOync-IfciAQ8tenANyYene6ujyq0SIXu_uwei-kAdYIE_3EEbwD4agSAFIc21AS2wyiCViEAWgX0LIR252s0WgSLLUC0WYGYfgeQBQeQeQIAA",__code:'<Card title="O dia em que a terra parou">\n  Foi assim; No dia em que todas as pessoas; Do planeta inteiro; Resolveram\n  que ningu\xe9m ia sair de casa; Como que se fosse combinado em todo; O planeta;\n  Naquele dia, ningu\xe9m saiu de casa, ningu\xe9m ningu\xe9m; O empregado n\xe3o saiu pro\n  seu trabalho; Pois sabia que o patr\xe3o tamb\xe9m n\xe3o tava l\xe1; Dona de casa n\xe3o\n  saiu pra comprar p\xe3o; Pois sabia que o padeiro tamb\xe9m n\xe3o tava l\xe1; E o\n  guarda n\xe3o saiu para prender; Pois sabia que o ladr\xe3o, tamb\xe9m n\xe3o tava l\xe1; E\n  o ladr\xe3o n\xe3o saiu para roubar; Pois sabia que n\xe3o ia ter onde gastar; No dia\n  em que a Terra parou (\xea\xea); No dia em que a Terra parou (\xf4\xf4); No dia em que a\n  Terra parou (\xf4\xf4); No dia em que a Terra parou; E nas Igrejas nem um sino a\n  badalar; Pois sabiam que os fi\xe9is tamb\xe9m n\xe3o tavam l\xe1; E os fi\xe9is n\xe3o sa\xedram\n  pra rezar; Pois sabiam que o padre tamb\xe9m n\xe3o tava l\xe1; E o aluno n\xe3o saiu\n  para estudar; Pois sabia o professor tamb\xe9m n\xe3o tava l\xe1; E o professor n\xe3o\n  saiu pra lecionar; Pois sabia que n\xe3o tinha mais nada pra ensinar; No dia em\n  que a Terra parou (\xf4\xf4); No dia em que a Terra parou (\xf4\xf4); No dia em que a\n  Terra parou ; No dia em que a Terra parou; O comandante n\xe3o saiu para o\n  quartel; Pois sabia que o soldado tamb\xe9m n\xe3o tava l\xe1; E o soldado n\xe3o saiu\n  pra ir pra guerra; Pois sabia que o inimigo tamb\xe9m n\xe3o tava l\xe1; E o paciente\n  n\xe3o saiu pra se tratar; Pois sabia que o doutor tamb\xe9m n\xe3o tava l\xe1; E o\n  doutor n\xe3o saiu pra medicar; Pois sabia que n\xe3o tinha mais doen\xe7a pra curar\n</Card>',__scope:{props:o,Card:p}},i.a.createElement(p,{title:"O dia em que a terra parou"},"Foi assim; No dia em que todas as pessoas; Do planeta inteiro; Resolveram que ningu\xe9m ia sair de casa; Como que se fosse combinado em todo; O planeta; Naquele dia, ningu\xe9m saiu de casa, ningu\xe9m ningu\xe9m; O empregado n\xe3o saiu pro seu trabalho; Pois sabia que o patr\xe3o tamb\xe9m n\xe3o tava l\xe1; Dona de casa n\xe3o saiu pra comprar p\xe3o; Pois sabia que o padeiro tamb\xe9m n\xe3o tava l\xe1; E o guarda n\xe3o saiu para prender; Pois sabia que o ladr\xe3o, tamb\xe9m n\xe3o tava l\xe1; E o ladr\xe3o n\xe3o saiu para roubar; Pois sabia que n\xe3o ia ter onde gastar; No dia em que a Terra parou (\xea\xea); No dia em que a Terra parou (\xf4\xf4); No dia em que a Terra parou (\xf4\xf4); No dia em que a Terra parou; E nas Igrejas nem um sino a badalar; Pois sabiam que os fi\xe9is tamb\xe9m n\xe3o tavam l\xe1; E os fi\xe9is n\xe3o sa\xedram pra rezar; Pois sabiam que o padre tamb\xe9m n\xe3o tava l\xe1; E o aluno n\xe3o saiu para estudar; Pois sabia o professor tamb\xe9m n\xe3o tava l\xe1; E o professor n\xe3o saiu pra lecionar; Pois sabia que n\xe3o tinha mais nada pra ensinar; No dia em que a Terra parou (\xf4\xf4); No dia em que a Terra parou (\xf4\xf4); No dia em que a Terra parou ; No dia em que a Terra parou; O comandante n\xe3o saiu para o quartel; Pois sabia que o soldado tamb\xe9m n\xe3o tava l\xe1; E o soldado n\xe3o saiu pra ir pra guerra; Pois sabia que o inimigo tamb\xe9m n\xe3o tava l\xe1; E o paciente n\xe3o saiu pra se tratar; Pois sabia que o doutor tamb\xe9m n\xe3o tava l\xe1; E o doutor n\xe3o saiu pra medicar; Pois sabia que n\xe3o tinha mais doen\xe7a pra curar")),i.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"normal-without-children"}},"Normal without children"),i.a.createElement(C.Playground,{__position:2,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpnsVwBByY05XaT04AEchAWFGBJBguDAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnbiABZBPYAA2QThPWMBQIAMR9aBEm4_hnEORFHUwdgAAUhH4JYiGoSg4DExElLrFSaGcCBqMudgAEYpJE-RVSDVAKKmABBOYmPYaNgA2aB0Ejdh5E5JixFCuMZHYVEGJgbhgGPWj6OxeRd3rYByBsKAouCAAyMrxkSeZKGaIrIui7gmvlMBQj8vtUHadgAH4IpKyNoziq56v6uh5DjfdZDMT8zFhDVjhgMAwigKZBvixK60YIK1zrZNsJyGICFgPgQHsABDmFUTafh2B3CbttrTlfxAFC0KoLosNg9AcAIOAsDIHRQP0Bg8Pm8KZC4GBzNCFaIHJRIyThqHB2HGKiMQzIiHQVx2jteaQyldHTS1XHUFBh1UtgeD3XaSnsgtT4txoOBSfJqZwqHAVYIRwsbFoNGEI9T0qCgYUWbxh1woabVFuWqZ5CJpDJAC9BWAyGI4BgUn-T0AQlv0hoTMoEdsDA9A7Gl2WYfZ9csDgbqrlQUIiECAR10O2AHZStECnXEbStQL2CYIHBg4AOVLMxxt8tBaD1yVugaRwaFcNAMhY237nYJ2XbBXbvbSr3KA8dQtlEVBo7MR52AAfRronMexwt_GzkRpy2SgUjJlycg8ZJLGccjqEoi8jIyREc2YmYkejIdjZfO2P2h2H4ejNyeJ4zklhz9aIcwaMc6WNyACZORmvzh-g0DU5dI5mLp76ZEYJPr7TgQxGKddcXQCZhvichowABJgCj3HvoeQABSdgFp2DHxklgb864PCSm2CkIQbV0BXGAZzdiiQcA_AEFEKA3l1wOUtEtIgmluKimLiISgwkUruDgBaTW_QwA-XrMcWw5JXBaXYB4UWOwOH1i8HBDIFpMgsDyFcE-glhEWHYpxGRx85FmE_r5fy7AAASEpZwhQfjgGQ6jOGiNnBI7sEBpHuRUVgeRJZRaVnYMAkYfMYAkPzmJHsBQrg8RwAAdgAKwwCID5dRQ9UCUWTmBKY98crZEMWwYxIiUFoLaBgLBwAXEvDcXY0x4jJGWKzrI2x65KGoAtJsCAKRCBXACTYuxniJIpGUao_OeTHFuVknASgUAuBOOADg7m-DhREPcWEi-EToJfSuMHHAzhVL2GfkbO4CVmJhT6gHMk4kCjmVgpxJYdMQrACUOMF4sAlh2xCifJY5AoD-DgGHH03RYrxXXIwKJN886cM4XbDK7BLnR2-fWOmfyObbPnLsjiaAlg4FhYchWgKgU9DuXAB5Ty_m3PuY808MV8pAsYDo7sGQxDhQ9s8qQhLZx4u-e8oGNASUbOivIKQUT9DUpZa_W-tZZpYHwgtJa1sHBfTMM9V66EHFwB-sBQGehwIgDmg6TRgyBDJGYqxfO2MBDbG4gAYg3nJAAnAE-wdlOG9OqQQXVd5j7alUtqO8pr6wEKIbqjeBq5IAA4PWk0ri6Xl81NHIJ2KkjBRz1yau1fKHVd57WxsdRYc1NSo2XhTam-NrdCHxF1ZeAJOac0-vBH6vlmj8hQDVnfDO-dTxSKILquS9aG0Ft8gqqYmisn82Yu0HVqke29tJi2kskz-F3J2CFLtG8J08X7f6xVl9xiZAiWJSMMSo29t7Rvadxa520CwCurtUk4GHs3QGudGQhAVvVZwiNVq_FuXsHe9NibLWrqklJVMqY5LpudVmqN2pUzH1UgBptPKt1DpGLBMm84x3doWevPxx7Z1DoZOQREqLoNSXsAFVSASp0iqUC9VC6EPoq3LRrQCv1_raF0NEkGUF2DB0VmaJUEt2b8JSegjAAsaawvFWLVmdGjKzHToLJWgm4T8b5ZYaqndMgzDwMkETnopNCjQbMeT2si3zVjhkfWicZYCpWpWzhdMi4lzLn7FFaLTxe1RHOQoVa9loC9jnV27AAA-3s7PrkaQUZzztXMeds77CuhbtPxwNssuwps6Dm0aPpuWRn6yfFvM-oL851xhAmMKK4aX7OcOS_oOihcrjF1LlKDL4RhgCCK57ErZnyshY0XOumdg1VIOFLOK4l6kXtIADKLWfcUTpPhum9JyMAoNqCOOP1gtseQSSLDR19Zokj6saQzK1HMhZSzhxwFWaFbrFgCs0BEpwzLVXTv1h81B5ink_aRBSzV7oaqlAVay9VuJRzXv51hTgEQmwBCRajnFbg7KxNfKRddlIfyocxXXJw8Kv3_sZEi7i-H9ZGDKZk2pxI6OgWKLQNwdoxTrGyR4opPH3yodE4Uj4NyHqKf5yRQXY64VEdwriZK9pMLYXHYIE9tGeVKcI5LEQFLcOmcY8kFj1TcnEjUs4Zj6Tsv5PC_rAT1ARPyd05saToSauLDU_aLT9yDP9eS6BawWCEB3AECJ3EGYHVSbM-M3E0F7BfstZwNzj3sLzvCgFwihXSLwr-6OIi_F0vleyfk-yyQ4P36FoHZgAzgVVZrc1nh5QYr3qYQT1KyjIFZUGAgmzFixkhNHBbvqUIEAE9ceIgAASiHHG3UALS16I1rFj9GtSMZJj3qW8XBUK0U8rdPIoaQaYHWF3TjRUfRYwBbYfhnDuMroEHTb4dI75zgAAR1CLBGAXsvA9IlL5ThS4YBW46n53ObtGvhMognjb5otuLMNrt_b6z_aRgOZ9l7LZLxCFdgDXHnP7CYFHXbGKEHdlGvOvSvSndnCAgHVHCPb5EFNnQccFFISFfZX3HAeFNHC3cvX_YIdAqQeAhPblTTB0FPBLBPLPAjN6DCKPFTGPPBCjAGajYGUvOjcKGXDgkIOweAwQnHBvRCZvLIfoeIDvCALvCTfGPvETJjd8QfOLK2QzUfbjcfUjKfULXWOfT_Y2KLXdGLZfTQm2fOH4AAdVkxP2EApAvyS2KgDk3zf230wHXCtxkJoAdkpw83aBYGsjuUSCkmdyRUCOCJ4USFTAiKBSiO4VCOPniO-USJCN4TclSM4UCM2G7F6RdGyPrECLJSKIsECIZA8DyKaTKPc3lC8HQESBSICPqKcESCyJaPaAdyd06I8HCAiE6nuwcX8JIKiMsNqMCLPWFAmPlDQABxeBmPaGVUSEWM1l0E1RWM6J3QIBMi5hVUWO2OcA7gwG5lSPiCqUDkQE6LmIyAWM6NgDADUNGPlAnjjkWP6AtUWPUDyBiDAE2N8mWznTELl1fylHfx2xMO_3CjINQDwOhWwOANwJZ2exYhOSR0gMB2gJeVBzeVEOj3EMwPLzAIRKaXAKIPQJF3RNQKxODwsGhNcKZTeUkDxPYJxxoOT0sKsHxLlyYJsm2FcDSCAmoG4LpRLxAG634FQCeX4CuH4CBGJCqG8HEX_HJCZBAEu34HLXyGoBlPYH4F8QNLMnWH4HKHIH6EdwGCDCQD1JAAChSjwlgBhCwB9FVIWnJEoESALDyAKHbnNAZlLAVNBDdnVONJACiDQF1P4FUGwCAiNLrBNJgHmCjD8ggHgF1LX34FUMjJADcjkhwACRwGPjjM4UzJ9GxmzN8WPgLJ4mLPrH4Afn9KzH0DgGzNTBwCkhwANVrIsH4CkNb1kM71z1bJwDckLO7JtNUKtEiGzNzPzLHJAHWCW1FRBG8A-GoEgBSCFNQBFOLwYFYhAFoF9CyBlLlLNFoAkS1AtFmBmH4HkAUHkHkCAA",__code:'<Card title="C\xe1 estou" />',__scope:{props:o,Card:p}},i.a.createElement(p,{title:"C\xe1 estou"})),i.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"normal-using-50-of-the-available-screen"}},"Normal using 50% of the available screen"),i.a.createElement(C.Playground,{__position:3,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpnsVwBByY05XaT04AEchAWFGBJBguDAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnbiABZBPYAA2QThPWMBQIAMR9aBEm4_hnEORFHUwdgAAUhH4JYiGoSg4DExElLrFSaGcCBqMudgAEYpJE-RVSDVAKKmABBOYmPYaNgA2aB0Ejdh5E5JixFCuMZHYVEGJgbhgGPWj6OxeRd3rYByBsKAouCAAyMrxkSeZKGaIrIui7gmvlMBQj8vtUHadgAH4IpKyNoziq56v6uh5DjfdZDMT8zFhDVjhgMAwigKZBvixK60YIK1zrZNsJyLA4AyuT5HGF5YAy3heHaAAJeJmlxdBiziOCrvaPL1wsAAZVwfp-9cpH2_KpG22tOV_EAULQqguiw2D0BwAg4CwMgdFA_QGDw-bwpkLgYHM0IVogclEjJYn8cHYcYqIxDMiIdBXHaO15pDKUadNLUmdQLGHVS2B4Pddo-eyC1Pi3Gg4C5nmpnCocBVg0nCxsWhqYQj1PSoKBhUl5mHXChptUW5aplOtWkMkAL0FYDIYjgGAuf5PQBCW_SGhMygR2wMD0DsA2jcJmX10O7qrlQUIiECAR1xiAhYBDlK0QKdcRtK1B49ZggcAzgA5UszHG3y0FoZ3JW6BpHBoVw0AyFig_udgw4jsFdoTtL48oDx1C2URUALsxHnYAB9Qf2bphnC38BuRGnLZKBSbmXJyDxkksZxyOoSiLyMjJERzZiZnJ6Mhw9l9Do_AmiZJ6M3J4njOSWRv1txzBo0bpY3IAJk5Ga_I36DQKri6I4zFhYIxkIwcuADq4CDEMUdcj0JjDXiOQaMAASYAW8d76HkAAUnYBadgH8ZJYG_OuDwkptgpCEG1dAVx0Fy3YokHAPwBBRCgN5dcDlLRLSIJpbiooO4iEoMJFK7g4AWjtv0MAPl6zHFsOSVwWl2AeC1jsGR9YvBwQyBaTILA8hXE_oJdRFh2KcQMR_IxZg4G-X8uwG6EpZwhVATgGQ1jZGaNnDo7sEB9HuQsVgYxJYtaVnYOgkYysYAcJbmJHsBQrg8RwAAdgAKwwCID5ax69UCUQrmBKYICcrZBcWwNxGiKFULaBgOhwBwkvEiYEjx2jdE-ProYgJ65eGoAtJsCAKRCBXGSf4wJMSJIpHMZYlujSQluVknASgUAuChOAAwhWzDhRsKiZk3-2ToLwyuBnHAzhVL2Age7O4CVmJhT6qnMk4kCjmVgpxJYwsQrACUGdWOFNDohU_kscgUB_BwGzj6bosV4oA1yYA5usjZGHQyuwb5BcYX1mFvC2Wdz5wPI4mgJYOA8UvNOki5FPQAVwCBSC-F_zAXAtPDFfKyLGD2O7BkMQ4UY6wBilIJls56UwsYLk_QrLrnRXkIDdGNBeVisrtA2ss0sD4QWktAODh4ZmAhlDdCwS4CI2AmjPQ4EQBzQdLYlZAhkjMVYi3BmAhtjcQAMS3zkgATmSfYOysiFl9IIPau8H9tSqW1Hed19YWFsPtbfJ1ckAAcUauZ9xdPK-atjyE7AqTQ1565rW2vlHau8gb83BosJ6_pObLxlvLYWqerD4j2svMkutda43ggTQq2x-QoDW2AbXFup49FEHtXJQdQ6m2-SNVMWxtSVbMXaHa1Sc751czHSWHZyiAU7BCjO2-W6eKLsTcav-4xMjZLEpGfJOb53ztvru1tB7aBYDPTOqSRDn3XqTQejIQgu2WtkVmn1iS3L2AA5W4t3rz1SSkqmVMclK2hprTm7UqYP6qSQyOuVN6V0jFgtzecG7Z3HJvok19-6V0MnIIiMluGpL2ACqpZJO61VKEhqhdCsNLadttoBJGKNtC6DyZjKC7AM7sxIkqXWMtlHlOoRgVWgs8Wau1lLATRlZg1zNp6ZTcJFMKssNVOemQZh4GSGpyQOmhRUNmIZh2Lb5pFwyC7MuhslUrW7bI4W7dO7d2TqS8lp546ojnIUHtjy0Dx0bpHdgAAfBOAX1wjIKKF8O4Wov-aTr3ZttmS6uzOXYL2dAfaNEc8bFz9ZPi3lAyl-c64wgTGFFcCrgXZGlf0HRNuVwO5dylFV8IwwBAtbjm1jznW0s2IPcLOwFqyHClnFcb9xKplfUWqB4oMyfBzIWTkdBKbKFSbAbBbY8hSkWALvG2xbGbY0n2VqQ5xzTnDjgBc0Ks2LBNZoCJWR1WetvfrHFnDzFPLJ0iGVvr3QLVKC6zV3rhTXlg5bninAIhNgCGy_nOK3BJUaehcSn7KR4XY5ip9Aq7A4cI4yNlulBPkymb0xZxIFOYWmLQNwdobS_GyR4opOnsjsdM4Uj4NyUaOct2Ja3C64Vwpw7GzgKZuK8UvYIMD6mH0hfEvCnL_Hyu9xU_MwZxIvLZGMC1_pwznP6wM9QEz9nfP_Gs6Eibiw3P2i8_cgL23GuYWsFghAdwBAmdxBmB1LmwvXOFLRUT_FhTtXS7DzgD7woFeEr1yrkI3XhTq-F1IQ3NPJWSAxzA5tS7MBOcClbc7dsGPKA1TDTCuedXcZAvqgwEFpYsWMipo4k99ShAgLnmTxEAACURi5e6gBaLvLH7ZicE1qYTZpRPcwE_rQryrTayYtiXkUNIrNLoy_ZxoZPcsYF9kv5zT3hV0HTldnOecW5wAAI6hFgjAeOXh5kSl8rIpcMAPcdQS03KOw2slKJc9LtzRrsTk3Y7sHsrkU5IxnkodQdblYlMV2AzcZd4cJhSc7sYpUdJVO9u8286dxc8USckcsCiVkVUUxdBwMUUgsUnlo8CVyc3dVdipU4096wpA8Dc9ZVrMHRC8itc9y8mNoYMITNdNtdDNa9UZeMMYm8F8rBxCjdkgO8u9M8dde9EIB8sh-h4hR8IBx8tMWZp8zZZ93xJ9F9_ZnMV9iJPQzsN87YrMd9S498sCD98s_Yi9isLAfgAB1fTZ_YQCkd_ErVgyMC_UAq_TAdcD3HQmgEOOnKLdoFgayAFRIKSQPYlRI5IhRRIVMDI5FLI-RVIj-fImFQolIxRNyUo2RRIzYbsBZF0ao-sRI9lCfN3RIhkDwOo0ZJoiwRIrwdARIEohI-UAYxIKokY9oP3APSYjwcICITqAHYJeI9o-UfggOXoyLeUD9YUTYxItARHF4PY-UU1RIY4oWWeDABWc4u9AgEyeWM1G4r2ZwS461M4qrT1NORASYg4jII4yY2AMAMw1YqY_QDIc4_oL1c49QPIGIMAd43yE7A9NQwzEAqUMA27D2e7EKaA0IugOgnFagpA2gkXEHFid5YnDA0grE7A8FFuRgPAlElEEPKg1Aok0ZNAxg8gmFIg9AxHMnJXYXFghqYIbkzg1QxQrPfPPdKYdY5zJkoQmybYVwNIICagaQ8VRvEAWbfgVAEFfgK4fgIEYkKobwbRf8ckJkEAL7fgTtfIagA09gfgBJF0sydYfgcocgfof3AYIMJAJ0kAAKFKPCDlC0jlTAckSgRIAsPIAoGec0UWUsE00EKOa090kAKINAR0_gVQbAICN0usD0mAeYKMPyCAeAR00_fgUw7MkANyOSHAZJHAD-As2Rasn0BmWshJD-JsniVs-sfgUBRMrMfQOAWs1MHAKSHAJ1fsiwfgLQofXQsfKvccnANyZs2cgM0wq0SIWs-sxsjckAdYY7dVEEbwD4agSAFINU1ADUhvBgViEAWgX0LIA0o0s0WgHRLUC0WYGYfgeQBQeQeQIAA",__code:"<Card xs={6} title={'Half width card'}>\n  LaLaLa\n</Card>",__scope:{props:o,Card:p}},i.a.createElement(p,{xs:6,title:"Half width card"},"LaLaLa")),i.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"normal-without-children-using-50-of-the-available-screen"}},"Normal without children using 50% of the available screen"),i.a.createElement(C.Playground,{__position:4,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpnsVwBByY05XaT04AEchAWFGBJBguDAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnbiABZBPYAA2QThPWMBQIAMR9aBEm4_hnEORFHUwdgAAUhH4JYiGoSg4DExElLrFSaGcCBqMudgAEYpJE-RVSDVAKKmABBOYmPYaNgA2aB0Ejdh5E5JixFCuMZHYVEGJgbhgGPWj6OxeRd3rYByBsKAouCAAyMrxkSeZKGaIrIui7gmvlMBQj8vtUHadgAH4IpKyNoziq56v6uh5DjfdZDMT8zFhDVjhgMAwigKZBvixK60YIK1zrZNsJyLA4AyuT5HGF5YAy3heHaAAJeJmlxdBiziOCrvaU6dwm7ba05X8QBQtCqC6LDYPQHACDgLAyB0UD9AYPD5vCmQuBgczQhWiByUSMlMdRwdhxiojEMyIh0Fcdo7XmkMpSJ00tQp1AEYdVLYHg912hZ7ILU-LcaDgBmmamcKhwFWDscLGxaEJhCPU9KgoGFfnKYdcKGm1RblqmU6ZaQyQAvQVgMhiOAYAZ_k9AEJb9IaEzKBHbAwPQOw1Y19GhfXQ7uquVBQiIQIBHXGICFgL2UrRAp1xG0rUFD6mCBwOOADlSzMcbfLQWhLclboGkcGhXDQDIWI9-52B9v2wV2sO0tDygPHULZRFQNOzEedgAH129pkmycLfwy5EactkoFJGZcnIPGSSxnHI6hKIvIyMkRHNmJmXHoyHO2X0Oj80YxrHozcnieM5JZy_W5HMGjculjcgAmTkZr8ufoNAguXSOZjObBmRGFzt_C4CDEMUdcj0JjDXiOQaMAASYAC8l76HkAAUnYBadgd8ZJYG_OuDwkptgpCEG1dAVxYEi3YokHAPwBBRCgN5dcDlLRLSIJpbioo64iEoMJFK7g4AWhNv0MAPl6zHFsOSVwWl2AeAVjsIR9YvBwQyBaTILA8hXHvoJWRFh2KcTUXfDRZgQG-X8uwG6EpZwhW_jgGQhjhHyNnEo7sEBVHuT0VgTRJYFaVnYLAkYksYB0KrmJHsBQrg8RwAAdgAKwwCID5Qxs9UCUTzmBKYX8crZCsWwGxci8EELaBgEhwBfEvH8e4uxijlFONLuotx65mGoAtJsCAKRCBXEia49xQSJIpF0foqu5SvFuVknASgUAuDeOAGQsWlDhQ0ICfE5-iToKgyuHHHAzhVL2D_rbO4CVmJhT6tHMk4kCjmVgpxJYnMQrACUGdYOeNDohXvkscgUB_BwETj6bosV4rrkYMk9-ldhHCMOhldgjy07AvrJzMFwsTnzjORxNASwcCoquadSFUKehvLgB8r5YLXnvM-aeGK-UoWMFMd2DIYhwpB1gDFKQlLZxkuBf82GNAaWHOivIKQyT9Ast5QAj-tZZpYHwgtJabsHCgzMH9AG6FPFwHBsBGGehwIgDmg6YxUyBDJGYqxKuZMBDbG4gAYmPnJAAnJE-wdlhFjJaQQM1d477alUtqO8dr6xUJoWa4-lq5IAA5A0Mxbi6MV81jG4J2Hkoh1z1xGpNfKU1d4PVpq9RYB1rTk2XlzXmjNA9qHxDNZeSJpbS2hvBOG8Vxj8hQENp_YuVdTwqKIGauSHbO2Vt8pqqYxjilS2Yu0U1qlR1joZr2ksSzJFvJ2CFYdx9F08QnRGrVL9xiZESWJSMqTk1jrHcfFdNb120CwLu4dUkMFXqPZG9dGQhCNoNcIxNzrwluXsO-gtWanV7qklJVMqY5IFp9cW5N2pUx31UpB7torj3TpGLBRm8550js2UfcJN613ToZOQREuKUNSXsAFVSkTl2yqUP9VC6Fgb6wbcbQCEMobaF0Ck-GUF2Bx1piRJUyshaSNyYQjA0t2aooVYrAW7GjKzCLjrT0Um4QSfFZYaqI9MgzDwMkWTkhlNCgIbMDTZtq3zQzhkK2Od1aSpWk24RnNa710bpHHFeLTyh1RHOQozbzloFDuXf27AAA-Yd3Pri6QUHzvs_OBbcxHZuVaTNZ2tjsuwDs6BO0aBZzW1n6yfFvD-6L851xhAmMKK4-WPPCJy_oOiNcrh1wblKQr4RhgCGqyHWr9mGuxaMeuzmdh9U4OFLOK4T6sUDIADKLR_cUIZPgRljJyLA6N-DBM_1gtseQ2SLBpzDcY2jRsaSrK1OszZ2zhxwD2aFEbFhKs0BEsIorzW7v1lC8h5inlI6RFy617o-qlCNeKy19J1y_tV1RTgEQmwBBJdTnFbgAr5NAqxS9lIYLkcxXXMI8KYOIcZCS6SjH9ZGA6dU_pxIBOoXaLQNwdoNSXGyR4opcnwLkfU4Uj4NygbGdVyxdXC64UsdovSUqgZKLUU3YIN9wmeUmeY5LEQXL6PueE-0ypvT6nEgsuEUT1XamNMy_rJT1A1OGfs9cXToS-uLAs_aGz9ynOLdK6hawWCEB3AEGp3EGYHUGY85s-k2F7Awe9ZwCLwPqKHvCklxizXWLwoR6OJi8lKvdO64138yQCOgFVsnZgSzgUDb7ZNuR5Q8qgaYUz8qpjIE1UGAgoLFixlpNHH7vqUIEBM_CeIgAASiJnV3UALRt-o6bXjHGtRcbNDxxm7HVYZaldrETesC8ihpIZyd8WzONDxyljAzs59Wau1yugscjtJxTlXOAABHUIsEYChy8KMiUvlhFLhgM7jq4WK4By6wkyimfDvmjHZbI2xnYXYHJRyRiXJA6_bHLBIIrsCG6i7g4TC45nYxSw4Cqt7t5N5M4C7IGQ546J7Aowr86DjwopCIoXJh44Dor46O4N4QHBBEFSBYGZ4ipGYOi56ZaZ7F6UaAwYTJ4k7q6V7QwsZwx14z5WA66k4hB2BYHE5q4aad6IQ95ZD9DxCD4QDD6KZUzj46yT7vij6z6uxWYL7ESeh7Yr4myGYb7Zxb5oE75pYux55ZYWA_AADqam9-wgFIz-2WxU0cJ-gBZ-mA64zu6hNAXsTOgW7QLA1kbyiQUkPuWKMRcRYiiQqYyRUKqRoiCRd8WRwKOR8R4ibkBRwiMRmw3YYyLoZR9YMRdKI-9BMRDIHglR3StRFgMRXg6AiQ-R0R8o3RiQpR_R7Qnu3uIxHg4QEQnUH2niURTR8oXBbsHRAW8o96woKxMRaAkOLwmx8oOqiQexHMw8GAYsRxp6BAJkosuq5xDszgJxRqhxhWDqMciAIx2xGQuxIxsAYAhhCxox-gGQRx_QjqRx6geQMQYATxvkO266ChqeABUoQBp2ds52IU4BARkBCBXmqAsB3SUBaUwOSBOOUOaBPycOfy8h0h6uvO6UpBiBZBcBFB1BtBRBsu2OKBpJqJdBPO4UjB5gzBkgVJKepO7BOeJhUw8JpOvBNk2wrgaQQE1Aoh7KteIAI2_AqAXy_AVw_AQIxIVQ3gii_45ITIIAT2_ADa-Q1A2p7A_AYS9pZk6w_A5Q5A_QXuAwQYSAtpIAAUKUeE9Kxp9KmA5IlAiQBYeQBQQ85o3MpY-poIAcZpTpIAUQaANp_Aqg2AQEjpdYzpMA8wUYfkEA8ANph-_ABhaZIAbkckOAkSOAd82ZwiZZPoZMFZYSd8tZPEDZ9Y_A38MZWY-gcAFZqYOAUkOAlqXZFg_AqhfeGhQ-ZeQ5OAbkdZE53pBhVokQFZVZNZy5IA6w22cqII3gHw1AkAKQipqAypNeDArEIAtAvoWQ2pupZotASiWoFoswMw_A8gCg8g8gQAA",__code:"<Card xs={6} title={'Half width card'} />",__scope:{props:o,Card:p}},i.a.createElement(p,{xs:6,title:"Half width card"})))}}}]);