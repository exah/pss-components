(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/layout/about.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),o=n.n(t),m=n("./node_modules/@mdx-js/tag/dist/index.js"),r=n("./node_modules/docz/dist/index.m.js"),p=n("./node_modules/react-emotion/dist/index.esm.js"),l=n("./node_modules/pss/esm/prop-styles/flex.js"),s=n("./src/box/index.js"),c=n("./src/flex-box/index.js"),i=Object(p.b)(s.a,{target:"e5bszuh0"})({flexGrow:1,flexShrink:0,flexBasis:"auto"},l.b),d=Object(p.b)(c.a,{target:"e5bszuh1"})({display:"flex",flexGrow:1,flexShrink:0,flexBasis:"auto"},l.b),g=function(e){return o.a.createElement(c.a,Object.assign({column:!0,minHt:!0},e))};function u(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}Object.assign(g,{Content:i,Item:c.b,Body:d,Header:c.b.withComponent("header",{target:"e5bszuh2"}),Footer:c.b.withComponent("footer",{target:"e5bszuh3"}),Main:i.withComponent("main",{target:"e5bszuh4"})});a.default=function(e){var a=e.components,n=u(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:a},o.a.createElement(m.MDXTag,{name:"h1",components:a,props:{id:"layout"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#layout"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Layout"),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"description"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#description"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Description"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Implements ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Holy_grail_(web_design)"}},"Holy Grail Layout")," with ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#/flex-box"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"FlexBox")),"."),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Header is on top of page"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},'Footer is stick to "bottom" of page'),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Content expands to take available space"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Body can be used as container to equal height columns (like navs) and main Content")),o.a.createElement(m.MDXTag,{name:"p",components:a},"Components:"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout")," \u2014 Container that takes space of page (add ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"minHt='100vh'")," prop, default to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"100%"),")"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout.Content")," \u2014 Main component, that expands to take available space"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout.Body")," \u2014 Can be used inside ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout")," as main container of vertical columns and content"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout.Item")," \u2014 Basic component that can be used for horizontal sections inside ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout")," or vertical in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout.Body"))),o.a.createElement(m.MDXTag,{name:"p",components:a},"Additional:"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout.Main")," \u2014 Same as ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout.Content"),", but renders ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"main")," tag"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout.Header")," \u2014 Same as ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout.Item"),", but renders ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"header")," tag"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout.Footer")," \u2014 Same as ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Layout.Item"),", but renders ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"footer")," tag")),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"usage"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#usage"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Usage"),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"import { Layout } from 'pss-components'\n")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"<Layout>\n  <Layout.Item>Top</Layout.Item>\n  <Layout.Body>\n    <Layout.Content>Content</Layout.Content>\n    <Layout.Item>Side Nav</Layout.Item>\n  </Layout.Body>\n  <Layout.Item>Bottom</Layout.Item>\n</Layout>\n")),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"examples"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#examples"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Examples"),o.a.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"basic"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h3",props:{"aria-hidden":!0,href:"#basic"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Basic"),o.a.createElement(r.d,{__position:0,__code:"<Layout>\n  <Layout.Header>Header</Layout.Header>\n  <Layout.Main>Main</Layout.Main>\n  <Layout.Footer>Footer</Layout.Footer>\n</Layout>",__scope:{props:n,Layout:g},style:{height:"500px"}},o.a.createElement(g,null,o.a.createElement(g.Header,null,"Header"),o.a.createElement(g.Main,null,"Main"),o.a.createElement(g.Footer,null,"Footer"))),o.a.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"all-components"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h3",props:{"aria-hidden":!0,href:"#all-components"}},o.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"All components"),o.a.createElement(r.d,{__position:1,__code:'<Layout bg="gray.0" pd>\n  <Layout.Header bg="gray.1" pd mgb>\n    Header\n  </Layout.Header>\n  <Layout.Item bg="gray.1" pd mgb>\n    Some / Breadcrumbs / Path\n  </Layout.Item>\n  <Layout.Body bg="gray.1" pd mgb>\n    <Layout.Content bg="gray.2" pd mgx>\n      Content\n    </Layout.Content>\n    <Layout.Item bg="gray.2" pd wd={1 / 6} order={-1}>\n      Left Nav\n    </Layout.Item>\n    <Layout.Item bg="gray.2" pd wd={1 / 6}>\n      Right Nav\n    </Layout.Item>\n  </Layout.Body>\n  <Layout.Footer bg="gray.1" pd>\n    Footer\n  </Layout.Footer>\n</Layout>',__scope:{props:n,Layout:g},style:{height:"500px"}},o.a.createElement(g,{bg:"gray.0",pd:!0},o.a.createElement(g.Header,{bg:"gray.1",pd:!0,mgb:!0},"Header"),o.a.createElement(g.Item,{bg:"gray.1",pd:!0,mgb:!0},"Some / Breadcrumbs / Path"),o.a.createElement(g.Body,{bg:"gray.1",pd:!0,mgb:!0},o.a.createElement(g.Content,{bg:"gray.2",pd:!0,mgx:!0},"Content"),o.a.createElement(g.Item,{bg:"gray.2",pd:!0,wd:1/6,order:-1},"Left Nav"),o.a.createElement(g.Item,{bg:"gray.2",pd:!0,wd:1/6},"Right Nav")),o.a.createElement(g.Footer,{bg:"gray.1",pd:!0},"Footer"))))}}}]);