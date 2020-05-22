(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{809:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n(7),n(8),n(6),n(9),n(13),n(0);var a=n(112),o=n(813);var r={},l={_frontmatter:r},i=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.c)(i,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.c)("h2",null,"Presentational Components"),Object(a.c)("p",null," We are focusing primarily on presentational components that help standardize common design patterns. Primer Components don't handle fetching and submitting data to/from APIs. If you would like to handle data in a Primer Component, feel free to create a wrapper around the Primer Component to do so."),Object(a.c)("h2",null,"Assume that people will break the rules, provide safe ways for them to do so"),Object(a.c)("p",null,"While we aim to standardize design in Primer Components, we also provide some flexibility with constraint-based props. We offer system props via ",Object(a.c)("a",Object.assign({parentName:"p"},{href:"https://github.com/styled-system/styled-system"}),"styled-system")," to allow users of the components to make small customizations, such as color and spacing, using values from the theme. Users also have the option to override the theme with a theme of their own."),Object(a.c)("h2",null,"Pattern Components vs Helper Components"),Object(a.c)("p",null,"Our components can roughly be categorized into two different component types:"),Object(a.c)("ul",null,Object(a.c)("li",{parentName:"ul"},"Pattern Components")),Object(a.c)("p",null,"Pattern components help us repeat commonly used UI patterns and interactions in order to maintain our brand and provide a great user experience. Some examples of pattern components are ",Object(a.c)("inlineCode",{parentName:"p"},"Button"),", ",Object(a.c)("inlineCode",{parentName:"p"},"Avatar"),", or ",Object(a.c)("inlineCode",{parentName:"p"},"Label"),"."),Object(a.c)("ul",null,Object(a.c)("li",{parentName:"ul"},"Helper Components")),Object(a.c)("p",null,"Helper components are components that help the user achieve common CSS patterns while maintaining some control over values used. Some examples of helper components are ",Object(a.c)("inlineCode",{parentName:"p"},"Flex"),", ",Object(a.c)("inlineCode",{parentName:"p"},"Text"),", ",Object(a.c)("inlineCode",{parentName:"p"},"Grid"),", and the ",Object(a.c)("inlineCode",{parentName:"p"},"Position")," components."))}c.isMDXComponent=!0},813:function(e,t,n){"use strict";var a=n(112),o=n(2),r=n(0),l=n.n(r),i=n(123),c=n(124),s=n(126),m=n(184),p=n(125),u=n(182),d=n(183);var h=function e(t){var n=t.items,o=l.a.useContext(a.a),r=o.ul,i=void 0===r?"ul":r,c=o.li,s=void 0===c?"li":c,m=o.a,p=void 0===m?"a":m;return l.a.createElement(i,null,n.map((function(t){return l.a.createElement(s,{key:t.url},l.a.createElement(p,{href:t.url},t.title),t.items?l.a.createElement(e,{items:t.items}):null)})))};t.a=function(e){var t=e.children,n=e.pageContext,r=l.a.useContext(a.a).h1,f=void 0===r?"h1":r,b=n.frontmatter,O=b.title,v=b.description,j=b.status,C=b.source,x=b.additionalContributors,g=void 0===x?[]:x;return l.a.createElement(o.Flex,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(c.a,{title:O,description:v}),l.a.createElement(s.a,null),l.a.createElement(o.Flex,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.Box,{display:["none",null,null,"block"]},l.a.createElement(p.a,null)),l.a.createElement(i.a,null,l.a.createElement(f,null,O),j||C?l.a.createElement(o.Flex,{mb:4,alignItems:"center"},j?l.a.createElement(d.a,{status:j}):null,l.a.createElement(o.Box,{mx:"auto"}),C?l.a.createElement(u.a,{href:C}):null):null,n.tableOfContents.items?l.a.createElement(h,{items:n.tableOfContents.items}):null,t,l.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(g.map((function(e){return{login:e}})))}))))}}}]);
//# sourceMappingURL=component---content-philosophy-md-e551d671861317249ae4.js.map