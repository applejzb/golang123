webpackJsonp([33],{"7EVb":function(e,t,a){"use strict";t.a={STATUS_IN_ACTIVE:1,STATUS_ACTIVE:2,STATUS_FROZEN:3}},"e+sQ":function(e,t,a){var n=a("nZVU");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("44665f08",n,!0)},ez30:function(e,t,a){"use strict";function n(e){a("e+sQ")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("xPNt"),s=a("g38C"),l=a("VU/8"),o=n,u=l(r.a,s.a,!1,o,null,null);t.default=u.exports},g38C:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Row",[a("h1",{staticClass:"crawler-title"},[e._v("爬虫账号")]),a("Row",[a("Table",{staticClass:"admin-common-line",attrs:{columns:e.columns,data:e.userList}})],1),a("Row",[e.hasUser?e._e():a("Button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("创建爬虫账号")])],1)],1)},r=[],s={render:n,staticRenderFns:r};t.a=s},nZVU:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".crawler-title{font-size:22px;margin:12px 0}",""])},xPNt:function(e,t,a){"use strict";var n=a("y8ae"),r=a("V8bM"),s=a("7EVb"),l=a("FhoZ"),o=a.n(l);t.a={data:function(){var e=this;return{columns:[{title:"id",key:"id"},{title:"用户名",key:"name"},{title:"邮箱",key:"email"},{title:"角色",key:"role",render:function(t,a){var n="";return e.role.map(function(e){a.row.role===e.value&&(n=e.label)}),n}},{title:"状态",key:"status",render:function(e,t){switch(t.row.status){case s.a.STATUS_IN_ACTIVE:return"未激活";case s.a.STATUS_ACTIVE:return"已激活";case s.a.STATUS_FROZEN:return"已冻结";default:return""}}}],role:[{label:"普通用户",value:1},{label:"网站编辑",value:2},{label:"管理员",value:3},{label:"超级管理员",value:4},{label:"爬虫管理员",value:5}]}},asyncData:function(e){return r.a.getCrawlAccount({client:e.req}).then(function(e){return{userList:e.data,hasUser:e.data&&e.data.length>0}})},methods:{onSubmit:function(){var e=this;r.a.createCrawlAccount().then(function(t){console.log(t,n.a,n.a.SUCCESS),t.errNo===n.a.SUCCESS?(e.userList=t.data,e.hasUser=t.data&&t.data.length>0,e.$Message.error({duration:o.a.messageDuration,closable:!0,content:"爬虫账号创建成功"})):e.$Message.error({duration:o.a.messageDuration,closable:!0,content:t.msg})})}},head:function(){return{title:"爬虫列表"}},mounted:function(){},layout:"admin",middleware:"adminRequired"}}});
//# sourceMappingURL=account.1298fd0d54e43dd45132.js.map