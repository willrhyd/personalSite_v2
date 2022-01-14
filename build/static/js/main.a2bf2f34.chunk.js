(this["webpackJsonpsanity-react"]=this["webpackJsonpsanity-react"]||[]).push([[0],{114:function(e,t,c){"use strict";c.r(t);var s=c(1),l=c.n(s),n=c(31),r=c.n(n),a=(c(38),c(39),c(6)),i=c(2),j=c(4),o=c(32),d=c.n(o)()({projectId:"zqcgnagf",dataset:"production",useCdn:!0}),b=c(0);function u(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){d.fetch('*[_type == "post"]{\n        title,\n        slug,\n        mainImage{\n        asset->{\n          _id,\n          url\n        }\n      }\n    }').then((function(e){return l(e)})).catch(console.error)}),[]),Object(b.jsx)("div",{className:"bg-slate-400 min-h-screen p-12",children:Object(b.jsxs)("div",{className:"container mx-auto",children:[Object(b.jsx)("h2",{className:"text-5xl flex justify-center cursive",children:"Blog Posts"}),Object(b.jsx)("h3",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to my blog posts page!"}),Object(b.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:c&&c.map((function(e,t){return Object(b.jsx)(a.b,{to:"/blog/"+e.slug.current,children:Object(b.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white\r border-l-8 border-slate-700",children:[Object(b.jsx)("img",{className:"w-full h-full rounded-r object-cover absolute",src:e.mainImage.asset.url,alt:""}),Object(b.jsx)("span",{className:"block relative h-full flex justify-end items-end pr\r -4 pb-4",children:Object(b.jsx)("h2",{className:"text-gray-800 text-lg font-bold px-3 py-4 bg-red-700\r text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)}))})]})})}var x=c(11),h=c.n(x),m=c(33),g=c.n(m)()(d);function O(e){return g.image(e)}function f(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),c=t[0],l=t[1],n=Object(i.g)().slug,r={types:{block:function(e){return"br"===e.node.style?Object(b.jsx)("br",{}):Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("p",{className:"w-full",children:e.children}),Object(b.jsx)("br",{})," "]})},image:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{className:"",src:O(e.node).url(),alt:"",style:{height:"400px",display:"inline-block",margin:"10px"}}),Object(b.jsx)("br",{})]})}}};return Object(s.useEffect)((function(){d.fetch('*[slug.current == "'.concat(n,'"]{\n           title,\n           slug,\n           mainImage{\n           asset->{\n              _id,\n              url\n            }\n          },\n          body,\n          "name": author->name,\n          "authorImage": author->image\n       }')).then((function(e){return l(e[0])})).catch(console.error)}),[n]),c?Object(b.jsx)("div",{className:"bg-gray-200 min-h-screen p-12",children:Object(b.jsxs)("div",{className:"container shadow-lg mx-auto bg-slate-400 rounded-lg",children:[Object(b.jsxs)("div",{className:"relative",children:[Object(b.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(b.jsxs)("div",{className:"bg-slate-400 bg-opacity-80 rounded p-12",children:[Object(b.jsx)("h2",{className:"cursive text-3xl lg:text-6xl mb-4",children:c.title}),Object(b.jsxs)("div",{className:"flex justify-center text-gray-800",children:[Object(b.jsx)("img",{src:O(c.authorImage).url(),className:"w-10 h-10 rounded-full",alt:"Author is Kap"}),Object(b.jsx)("h4",{className:"cursive flex items-center pl-2 text-2xl",children:c.name})]})]})}),Object(b.jsx)("img",{className:"w-full object-cover rounded-t",src:O(c.mainImage).url(),alt:"",style:{height:"400px"}})]}),Object(b.jsx)("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full",children:Object(b.jsx)(h.a,{className:"flex flex-wrap justify-center",blocks:c.body,serializers:r,projectId:d.clientConfig.projectId,dataset:d.clientConfig.dataset})})]})}):Object(b.jsx)("div",{children:"Loading..."})}function p(){return Object(b.jsx)("div",{className:"bg-slate-200 sticky top-0 z-10",children:Object(b.jsxs)("ul",{className:"flex w-96  ",children:[Object(b.jsx)("li",{className:"w-24 text-center hover:bg-slate-700 hover:text-white ",children:Object(b.jsx)(a.c,{exact:!0,to:"/",className:"inline-block min-w-full py-5",children:"Home"})}),Object(b.jsx)("li",{className:"w-24 text-center hover:bg-slate-700 hover:text-white",children:Object(b.jsx)(a.c,{exact:!0,className:"inline-block min-w-full py-5",to:"/blog",children:"Blog"})}),Object(b.jsx)("li",{className:"w-24 text-center hover:bg-slate-700 hover:text-white",children:Object(b.jsx)(a.c,{exact:!0,className:"inline-block min-w-full py-5",to:"/projects",children:"Projects"})})]})})}function v(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),c=t[0],l=t[1],n={types:{block:function(e){return"br"===e.node.style?Object(b.jsx)("br",{}):Object(b.jsx)("p",{children:e.children})}}};return Object(s.useEffect)((function(){d.fetch('*[_type == "author" && name == "Will Haynes"]{\n          name,\n          bio\n        }').then((function(e){console.log(e[0]),l(e[0])})).catch(console.error)}),[]),c?Object(b.jsxs)("div",{className:"bg-slate-400 min-w-screen overflow-hidden grid md:grid-cols-1 lg:grid-cols-2",children:[Object(b.jsx)("img",{src:"profile.jpg",className:"rounded-full mx-auto mt-16 max-h-128"}),Object(b.jsx)("div",{className:"px-16 lg:pr-48 py-12  min-h-screen lg:py-20 prose prose-2xl overflow-hidden",children:Object(b.jsx)(h.a,{className:"overflow-hidden",blocks:c.bio,serializers:n,projectId:d.clientConfig.projectId,dataset:d.clientConfig.dataset})})]}):Object(b.jsx)("div",{children:"Loading..."})}function y(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){d.fetch('*[_type == "project"]{\n        title,\n        slug,\n        mainImage{\n        asset->{\n          _id,\n          url\n        }\n      }\n    }').then((function(e){return l(e)})).catch(console.error)}),[]),Object(b.jsx)("div",{className:"bg-slate-400 min-h-screen p-12",children:Object(b.jsxs)("div",{className:"container mx-auto",children:[Object(b.jsx)("h2",{className:"text-5xl flex justify-center cursive",children:"Projects"}),Object(b.jsx)("h3",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to my projects page!"}),Object(b.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:c&&c.map((function(e,t){return Object(b.jsx)(a.b,{to:"/projects/"+e.slug.current,children:Object(b.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white\r border-l-8 border-slate-700",children:[Object(b.jsx)("img",{className:"w-full h-full rounded-r object-cover absolute",src:e.mainImage.asset.url,alt:""}),Object(b.jsx)("span",{className:"block relative h-full flex justify-end items-end pr\r -4 pb-4",children:Object(b.jsx)("h2",{className:"text-gray-800 text-lg font-bold px-3 py-4 bg-red-700\r text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)}))})]})})}var N=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(a.a,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",exact:!0,element:Object(b.jsx)(v,{})}),Object(b.jsx)(i.a,{path:"/blog",exact:!0,element:Object(b.jsx)(u,{})}),Object(b.jsx)(i.a,{path:"/blog/:slug",element:Object(b.jsx)(f,{})}),Object(b.jsx)(i.a,{path:"/projects",exact:!0,element:Object(b.jsx)(y,{})}),Object(b.jsx)(i.a,{path:"/projects/:slug",element:Object(b.jsx)(f,{})})]})]})})};r.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))},38:function(e,t,c){},39:function(e,t,c){}},[[114,1,2]]]);
//# sourceMappingURL=main.a2bf2f34.chunk.js.map