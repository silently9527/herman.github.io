import{V as f,_ as k,m as x,a as v}from"./chunks/theme.BAn-qDdm.js";import{h as y,o,c as l,j as t,P,t as i,n as j,e as w,_ as C,u as S,b as c,w as p,I as g,a as u,k as a,D as V,M as I,F as $,p as B,l as M}from"./chunks/framework.d_Ke7vMG.js";const D={class:"w-full h-40"},T={class:"p-4 pb-6"},J={class:"flex items-center justify-between"},N={class:"text-lg font-bold"},A={class:"mt-2 text-sm transition-all duration-300 line-clamp-2 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100"},E={__name:"ProjectCard",props:["banner","title","description","link","tag"],setup(e){const s=e,r=y(()=>{switch(s.tag){case"JavaScript":return"bg-yellow-400 text-white";case"Python":return"bg-sky-700 text-white";case"Vue":return"bg-teal-400 text-white";case"TypeScript":return"bg-sky-400 text-white";case"C++":return"bg-red-400 text-white";default:return"border"}});function d(){window.open(s.link,"_blank")}return(m,_)=>(o(),l("div",{onClick:d,class:"overflow-hidden transition-all duration-300 border rounded-lg cursor-pointer hover:border-indigo-800 dark:hover:border-sky-300 bg-slate-50 dark:bg-slate-800 dark:border-transparent group"},[t("div",D,[t("div",{style:P({"background-image":`url(${s.banner})`}),class:"w-full h-full bg-center bg-no-repeat bg-cover"},null,4)]),t("div",T,[t("div",J,[t("h1",N,i(e.title),1),e.tag?(o(),l("p",{key:0,class:j(["text-[12px] px-2 rounded-full py-0.5",r.value])},i(e.tag),3)):w("",!0)]),t("p",A,i(e.description),1)])]))}},O=[{banner:"/project-img/coupons.png",title:"Coupons",description:"淘宝客项目，从前端到后端完全开源的淘宝客项目，目前项目已经支持打包成App、微信小程序、QQ小程序、Web站点",link:"https://github.com/silently9527/coupons",tag:"Java/vue/uniapp"},{banner:"/project-img/smartmvc.png",title:"SmartMvc",description:"理解SpringMVC的原理，在面试或工作中都十分的重要,从手写简易版的SpringMVC框架出发， 理出SpringMVC的主线并深入理解SpringMVC的原理",link:"https://github.com/silently9527/SmartMvc",tag:"Vue"},{banner:"/project-img/toolkit.png",title:"Toolkit",description:"在开发的过程中经常会使用一些在线的工具，比如：时间戳转日期，JSON格式化等等；考虑想把这些常用的功能都做成IDEA插件，在使用的时候就不用去网上寻找工具，在IDEA中就可以快速完成提升开发人员开发效率；",link:"https://github.com/silently9527/Toolkit",tag:"intellij IDEA plugin"},{banner:"/project-img/books.png",title:"Books",description:"Java程序员自我学习的书籍列表，收录书籍尽量都保证同类书籍的豆瓣评分最高，帮助想要入坑Java的同学",link:"https://github.com/silently9527/ProgrammerBooks",tag:"Books"}],n=e=>(B("data-v-eaef25be"),e=e(),M(),e),z={class:"px-6 md:px-12 lg:px-16"},F={class:"ProjectsContent"},L=n(()=>t("br",null,null,-1)),Q=n(()=>t("br",null,null,-1)),U=n(()=>t("br",null,null,-1)),W=n(()=>t("hr",null,null,-1)),q={class:"px-6 md:px-12 lg:px-16",style:{"max-width":"1200px",margin:"0 auto"}},G=n(()=>t("br",null,null,-1)),H={__name:"Projects",setup(e){const{page:s,theme:r,frontmatter:d}=S();return(m,_)=>(o(),c(a(v),null,{default:p(()=>[g(a(f),null,{title:p(()=>[u("🎯 Projects ✨")]),lead:p(()=>[u("My Open Source Projects")]),_:1}),t("div",z,[t("div",F,[(o(!0),l($,null,V(a(O),(h,b)=>(o(),c(E,I({key:b,ref_for:!0},h),null,16))),128))])]),L,Q,U,W,t("div",q,[(o(),c(k,{commentConfig:a(r).commentConfig,key:a(x)(a(s).relativePath)},null,8,["commentConfig"]))]),G]),_:1}))}},K=C(H,[["__scopeId","data-v-eaef25be"]]),Z=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"Projects.md","filePath":"Projects.md","lastUpdated":1723472907000}'),R={name:"Projects.md"},tt=Object.assign(R,{setup(e){return(s,r)=>(o(),l("div",null,[g(K)]))}});export{Z as __pageData,tt as default};
