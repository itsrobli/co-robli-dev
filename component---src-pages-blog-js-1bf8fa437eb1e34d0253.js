(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6Gk8":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("9eSz"),o=a.n(i);t.a=function(){var e,t,a,l,i=Object(r.useStaticQuery)("916993862"),s=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author,c=null===(t=i.site.siteMetadata)||void 0===t?void 0:t.social,m=null==i||null===(a=i.avatar)||void 0===a||null===(l=a.childImageSharp)||void 0===l?void 0:l.fixed;return n.a.createElement("div",{className:"bio"},m&&n.a.createElement(o.a,{fixed:m,alt:(null==s?void 0:s.name)||"",className:"bio-avatar",imgStyle:{borderRadius:"50%"}}),(null==s?void 0:s.name)&&n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null," ",n.a.createElement("a",{href:"https://twitter.com/"+((null==c?void 0:c.twitter)||"")},"Follow on Twitter")))}},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("6Gk8"),o=a("Bl7J"),s=a("vrFN");t.default=function(e){var t,a=e.data,l=e.location,c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?n.a.createElement(o.a,{location:l,title:c},n.a.createElement(s.a,{title:"All posts"}),n.a.createElement(i.a,null),n.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.a.createElement(o.a,{location:l,title:c},n.a.createElement(s.a,{title:"All blog posts"}),n.a.createElement(i.a,null),n.a.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.a.createElement("li",{key:e.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(r.Link,{to:"/blog"+e.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},t))),n.a.createElement("small",null,e.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};var c="3663572689"}}]);
//# sourceMappingURL=component---src-pages-blog-js-1bf8fa437eb1e34d0253.js.map