(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{778:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return i}));n(7),n(8),n(6),n(9),n(13),n(0);var a=n(112),r=n(817);var c={},o={_frontmatter:c},l=r.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.c)(l,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.c)("p",null,Object(a.c)("inlineCode",{parentName:"p"},"Button")," is used for actions, like in forms, while ",Object(a.c)("inlineCode",{parentName:"p"},"Link")," is used for destinations, or moving from one page to another."),Object(a.c)("p",null,"In special cases where you'd like to use a ",Object(a.c)("inlineCode",{parentName:"p"},"<a>")," styled like a Button, use ",Object(a.c)("inlineCode",{parentName:"p"},"<Button as='a'>")," and provide an ",Object(a.c)("inlineCode",{parentName:"p"},"href"),"."),Object(a.c)("p",null,"To create a button group, wrap ",Object(a.c)("inlineCode",{parentName:"p"},"Button")," elements in the ",Object(a.c)("inlineCode",{parentName:"p"},"ButtonGroup")," element. ",Object(a.c)("inlineCode",{parentName:"p"},"ButtonGroup")," gets the same props as ",Object(a.c)("inlineCode",{parentName:"p"},"Box"),"."),Object(a.c)("h2",null,"Default examples"),Object(a.c)("pre",null,Object(a.c)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Button>Button</Button>\n<ButtonDanger>Button Danger</ButtonDanger>\n<ButtonOutline>Button Outline</ButtonOutline>\n<ButtonPrimary>Button Primary</ButtonPrimary>\n\n<ButtonGroup display='block' my={2}>\n  <Button>Button</Button>\n  <Button>Button</Button>\n  <Button>Button</Button>\n</ButtonGroup>\n")),Object(a.c)("h2",null,"System props"),Object(a.c)("p",null,Object(a.c)("inlineCode",{parentName:"p"},"Button")," and ",Object(a.c)("inlineCode",{parentName:"p"},"ButtonGroup")," components get ",Object(a.c)("inlineCode",{parentName:"p"},"COMMON")," system props. Read our ",Object(a.c)("a",Object.assign({parentName:"p"},{href:"/components/system-props"}),"System Props")," doc page for a full list of available props."),Object(a.c)("h2",null,"Component props"),Object(a.c)("p",null,"Native ",Object(a.c)("inlineCode",{parentName:"p"},"<button>")," HTML attributes are forwarded to the underlying React ",Object(a.c)("inlineCode",{parentName:"p"},"button")," component and are not listed below."),Object(a.c)("h3",null,"Button"),Object(a.c)("table",null,Object(a.c)("thead",{parentName:"table"},Object(a.c)("tr",{parentName:"thead"},Object(a.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Prop name"),Object(a.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.c)("th",Object.assign({parentName:"tr"},{align:"center"}),"Default"),Object(a.c)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(a.c)("tbody",{parentName:"table"},Object(a.c)("tr",{parentName:"tbody"},Object(a.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"as"),Object(a.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.c)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.c)("inlineCode",{parentName:"td"},"button")),Object(a.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"sets the HTML tag for the component")),Object(a.c)("tr",{parentName:"tbody"},Object(a.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"fontSize"),Object(a.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"Number or String"),Object(a.c)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(a.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"explicitly sets the font size for the Button text; overrides any value for the ",Object(a.c)("inlineCode",{parentName:"td"},"variant")," prop")),Object(a.c)("tr",{parentName:"tbody"},Object(a.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"variant"),Object(a.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.c)("td",Object.assign({parentName:"tr"},{align:"center"}),"'medium'"),Object(a.c)("td",Object.assign({parentName:"tr"},{align:"left"}),"a value of ",Object(a.c)("inlineCode",{parentName:"td"},"small"),", ",Object(a.c)("inlineCode",{parentName:"td"},"medium"),", or ",Object(a.c)("inlineCode",{parentName:"td"},"large")," results in smaller or larger Button text size; no effect if ",Object(a.c)("inlineCode",{parentName:"td"},"fontSize")," prop is set")))),Object(a.c)("h3",null,"ButtonGroup"),Object(a.c)("p",null,Object(a.c)("inlineCode",{parentName:"p"},"ButtonGroup")," has access to the same props as ",Object(a.c)("inlineCode",{parentName:"p"},"Box")))}i.isMDXComponent=!0},817:function(e,t,n){"use strict";var a=n(112),r=n(2),c=n(0),o=n.n(c),l=n(123),i=n(124),s=n(126),u=n(185),p=n(125),m=n(183),b=n(184);var O=function e(t){var n=t.items,r=o.a.useContext(a.a),c=r.ul,l=void 0===c?"ul":c,i=r.li,s=void 0===i?"li":i,u=r.a,p=void 0===u?"a":u;return o.a.createElement(l,null,n.map((function(t){return o.a.createElement(s,{key:t.url},o.a.createElement(p,{href:t.url},t.title),t.items?o.a.createElement(e,{items:t.items}):null)})))};t.a=function(e){var t=e.children,n=e.pageContext,c=o.a.useContext(a.a).h1,d=void 0===c?"h1":c,j=n.frontmatter,g=j.title,f=j.description,N=j.status,B=j.source,h=j.additionalContributors,C=void 0===h?[]:h;return o.a.createElement(r.Flex,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(i.a,{title:g,description:f}),o.a.createElement(s.a,null),o.a.createElement(r.Flex,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(r.Box,{display:["none",null,null,"block"]},o.a.createElement(p.a,null)),o.a.createElement(l.a,null,o.a.createElement(d,null,g),N||B?o.a.createElement(r.Flex,{mb:4,alignItems:"center"},N?o.a.createElement(b.a,{status:N}):null,o.a.createElement(r.Box,{mx:"auto"}),B?o.a.createElement(m.a,{href:B}):null):null,n.tableOfContents.items?o.a.createElement(O,{items:n.tableOfContents.items}):null,t,o.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(C.map((function(e){return{login:e}})))}))))}}}]);
//# sourceMappingURL=component---content-buttons-md-2780f0b8a91daa4a1ebf.js.map