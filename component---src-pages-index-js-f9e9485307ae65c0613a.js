(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{"3Z9Z":function(e,t,a){"use strict";var l=a("wx14"),n=a("zLVn"),r=a("TSYQ"),o=a.n(r),i=a("q1tI"),s=a.n(i),c=a("vUet"),u=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.noGutters,m=e.as,d=void 0===m?"div":m,f=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(c.a)(a,"row"),p=v+"-cols",E=[];return u.forEach((function(e){var t,a=f[e];delete f[e];var l="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&E.push(""+p+l+"-"+t)})),s.a.createElement(d,Object(l.a)({ref:t},f,{className:o.a.apply(void 0,[r,v,i&&"no-gutters"].concat(E))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},"6Gk8":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("9eSz"),i=a.n(o);t.a=function(){var e,t,a,l,o=Object(r.useStaticQuery)("916993862"),s=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,c=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.social,u=null==o||null===(a=o.avatar)||void 0===a||null===(l=a.childImageSharp)||void 0===l?void 0:l.fixed;return n.a.createElement("div",{className:"bio"},u&&n.a.createElement(i.a,{fixed:u,alt:(null==s?void 0:s.name)||"",className:"bio-avatar",imgStyle:{borderRadius:"50%"}}),(null==s?void 0:s.name)&&n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null," ",n.a.createElement("a",{href:"https://twitter.com/"+((null==c?void 0:c.twitter)||"")},"Follow on Twitter")))}},"6Q04":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var l=a("q1tI"),n=a.n(l),r=(a("Wbzz"),a("HF64")),o=a("3Z9Z"),i=a("JI6e"),s=a("Bl7J"),c=a("9eSz"),u=a.n(c),m=a("vrFN");t.default=function(e){var t,a=e.data,l=e.location,c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMdx.nodes;return n.a.createElement(s.a,{location:l,title:c},n.a.createElement(m.a,{title:"Photos"}),n.a.createElement(r.h,null,"Photos"),n.a.createElement(o.a,null,d.map((function(e,t){return n.a.createElement(i.a,{xs:4,key:t},n.a.createElement(r.g,null,n.a.createElement(r.f,{to:"/photos"+e.fields.slug},n.a.createElement(u.a,{fluid:e.frontmatter.thumbnail.childImageSharp.fluid}),n.a.createElement(r.e,null),e.frontmatter.title,n.a.createElement(r.d,null,e.frontmatter.category))))}))))};var d="2764001605"},JI6e:function(e,t,a){"use strict";var l=a("wx14"),n=a("zLVn"),r=a("TSYQ"),o=a.n(r),i=a("q1tI"),s=a.n(i),c=a("vUet"),u=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,m=void 0===i?"div":i,d=Object(n.a)(e,["bsPrefix","className","as"]),f=Object(c.a)(a,"col"),v=[],p=[];return u.forEach((function(e){var t,a,l,n=d[e];if(delete d[e],"object"==typeof n&&null!=n){var r=n.span;t=void 0===r||r,a=n.offset,l=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+f+o:""+f+o+"-"+t),null!=l&&p.push("order"+o+"-"+l),null!=a&&p.push("offset"+o+"-"+a)})),v.length||v.push(f),s.a.createElement(m,Object(l.a)({},d,{ref:t,className:o.a.apply(void 0,[r].concat(v,p))}))}));m.displayName="Col",t.a=m},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("6Gk8"),i=a("Bl7J"),s=a("vrFN"),c=(a("6Q04"),a("3Z9Z")),u=a("JI6e");t.default=function(e){var t,a=e.data,l=e.location,m=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return n.a.createElement(i.a,{location:l,title:m},n.a.createElement(s.a,{title:"Home"}),n.a.createElement("section",null,n.a.createElement(c.a,null,n.a.createElement(u.a,{xs:4},n.a.createElement(r.Link,{to:"/blog"},"Blog"),n.a.createElement("p",null,"I write about various things. More recently about technology and business.")),n.a.createElement(u.a,{xs:4},n.a.createElement(r.Link,{to:"/photos"},"Photos"),n.a.createElement("p",null,"I first learned to code because I couldn't find photo hosting with gallery templates to my liking.")),n.a.createElement(u.a,{xs:4},n.a.createElement(r.Link,{to:"/about"},"About me"),n.a.createElement("p",null,"My past and present projects."),n.a.createElement(o.a,null))),n.a.createElement(c.a,null,n.a.createElement(u.a,{xs:4},n.a.createElement(r.Link,{to:"https://github.com/itsrobli"},"Code"),n.a.createElement("p",null,"I've recently started to open source some stuff.")))))};var m="3159585216"}}]);
//# sourceMappingURL=component---src-pages-index-js-f9e9485307ae65c0613a.js.map