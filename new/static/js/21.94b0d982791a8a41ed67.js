webpackJsonp([21],{501:function(t,o,a){function s(t){a(586)}var i=a(16)(a(532),a(618),s,null,null);t.exports=i.exports},532:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=a(33);o.default={methods:{getRoutePath:function(){0===this.$route.path.indexOf("/about")&&this.$route.path.length>7?s.a.commit({type:"setAboutChildrenRouter",data:!1}):s.a.commit({type:"setAboutChildrenRouter",data:!0})}},computed:{globalInfo:function(){return s.a.getters.getGlobalInfo},isShowPanel:function(){return s.a.getters.getAboutChildrenRouter}},watch:{$route:"getRoutePath"},create:function(){return this.$router.path},mounted:function(){this.getRoutePath()}}},586:function(t,o){},618:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"about"},[a("div",{staticClass:"about-content g-content",style:{"overflow-y":t.isShowPanel?"auto":"hidden"}},[a("transition",{attrs:{name:"silde-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPanel,expression:"isShowPanel"}],staticClass:"dw-boot-container"},[a("router-link",{attrs:{tag:"a",to:"/about/news"}},[a("li",{staticClass:"dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6"},[a("i",{staticClass:"icon-edit-paper"}),t._v(" "),a("span",[t._v("新闻头条")])])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/about/joke"}},[a("li",{staticClass:"dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6"},[a("i",{staticClass:"icon-smile"}),t._v(" "),a("span",[t._v("每日一笑")])])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/about/resources"}},[a("li",{staticClass:"dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6"},[a("i",{staticClass:"icon-rank-list"}),t._v(" "),a("span",[t._v("资源搜索")])])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/about/me"}},[a("li",{staticClass:"dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6"},[a("i",{staticClass:"icon-about"}),t._v(" "),a("span",[t._v("个人标签")])])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/about/works"}},[a("li",{staticClass:"dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6"},[a("i",{staticClass:"icon-works"}),t._v(" "),a("span",[t._v("作品信息")])])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/about/suggest"}},[a("li",{staticClass:"dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6"},[a("i",{staticClass:"icon-message"}),t._v(" "),a("span",[t._v("意见建议")])])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/about/contact"}},[a("li",{staticClass:"dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6"},[a("i",{staticClass:"icon-community"}),t._v(" "),a("span",[t._v("联系作者")])])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/about/updateinfo"}},[a("li",{staticClass:"dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6"},[a("i",{staticClass:"icon-up"}),t._v(" "),a("span",[t._v("版本记录")])])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/about/friendship"}},[a("li",{staticClass:"dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6"},[a("i",{staticClass:"icon-friend"}),t._v(" "),a("span",[t._v("友情链接")])])])],1)]),t._v(" "),a("transition",{attrs:{name:"silde-top"}},[a("keep-alive",[a("router-view",{staticClass:"li_about"})],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=21.94b0d982791a8a41ed67.js.map