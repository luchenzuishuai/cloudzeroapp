(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login_home_welcome"],{"1ddd":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v(t._s(t.position)+"首页")]),i("el-card",[i("el-row",{attrs:{gutter:20}},[i("div",{staticStyle:{display:"flex","justify-content":"space-around",margin:"20px auto"}},[i("section",[i("div",{directives:[{name:"show",rawName:"v-show",value:"审核员"==t.position,expression:"position=='审核员'"}],staticClass:"transition-box",on:{click:function(e){return t.routeTo("audit")}}},[i("i",{staticClass:"iconfont icon-icon__huoquyuansushuliang"}),t._v("待审核数量: "+t._s(t.detailList.waitingAuditCount))]),i("div",{directives:[{name:"show",rawName:"v-show",value:"经办人"==t.position,expression:"position=='经办人'"}],staticClass:"transition-box",on:{click:function(e){return t.routeTo("/indextext")}}},[i("i",{staticClass:"iconfont icon-icon__huoquyuansushuliang"}),t._v("可用指标文数量: "+t._s(t.detailList.availableZwbCount))])]),i("section",[i("div",{directives:[{name:"show",rawName:"v-show",value:"审核员"==t.position,expression:"position=='审核员'"}],staticClass:"transition-box",staticStyle:{"background-color":"#ff3333"},on:{click:function(e){return t.routeTo("audit","驳回")}}},[i("i",{staticClass:"iconfont icon-jujueshenpi"}),t._v("当前驳回数量: "+t._s(t.detailList.rejectedCountThisMonth))]),i("div",{directives:[{name:"show",rawName:"v-show",value:"经办人"==t.position,expression:"position=='经办人'"}],staticClass:"transition-box",attrs:{state:t.detailList.currentState},on:{click:function(e){return t.routeTo("/find")}}},[i("i",{staticClass:"iconfont icon-jihuozhuangtai"}),t._v("当前补贴状态: "+t._s(t.detailList.currentState))])])])]),i("el-row",{attrs:{gutter:20}},[i("div",{staticStyle:{display:"flex","justify-content":"space-around",margin:"20px auto"}},[[i("div",{directives:[{name:"show",rawName:"v-show",value:"审核员"==t.position,expression:"position=='审核员'"}],staticClass:"transition-box",staticStyle:{"background-color":"#33ff00"},on:{click:function(e){return t.routeTo("audit","通过")}}},[i("i",{staticClass:"iconfont icon-yishenhe"}),t._v("本月审核数: "+t._s(t.detailList.auditCountThisMonth))]),i("div",{directives:[{name:"show",rawName:"v-show",value:"经办人"==t.position,expression:"position=='经办人'"}],staticClass:"transition-box",staticStyle:{"background-color":"#33ff00"},on:{click:function(e){return t.routeTo("/indextext")}}},[i("i",{staticClass:"iconfont icon-quanbuyue"}),t._v("指标文总余额: "+t._s(t.detailList.availableZwbAmount)+"￥")])],[i("div",{directives:[{name:"show",rawName:"v-show",value:"审核员"==t.position,expression:"position=='审核员'"}],staticClass:"transition-box",staticStyle:{"background-color":"#33ff00"},on:{click:function(e){return t.routeTo("audit","通过")}}},[i("i",{staticClass:"iconfont icon-yishenhe"}),t._v("本年审核数: "+t._s(t.detailList.auditCountThisYear))]),i("div",{directives:[{name:"show",rawName:"v-show",value:"经办人"==t.position,expression:"position=='经办人'"}],staticClass:"transition-box",staticStyle:{"background-color":"#33ff00"},on:{click:function(e){return t.routeTo("/find","history")}}},[i("i",{staticClass:"iconfont icon-shuliangtongji"}),t._v("历史申领次数: "+t._s(t.detailList.historyApplicationCount))])]],2)])],1)],1)},n=[],o=(i("96cf"),i("3b8d")),a={data:function(){return{position:"",username:"",gjjzh:"",detailList:"",testPic:""}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.username=window.sessionStorage.getItem("username"),this.position=window.sessionStorage.getItem("position"),this.gjjzh=window.sessionStorage.getItem("gjjzh"),this.getDetailList();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getDetailList:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,i,s,n,o,a,r,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("审核员"!=this.position){t.next=13;break}return t.next=3,this.$http.get("/audit/getAuditStatic?auditorUsername="+this.username);case 3:if(e=t.sent,i=e.data,s=i.data,n=i.code,this.detailList=s,200===n){t.next=10;break}return t.abrupt("return",this.$message.error("信息获取失败"));case 10:return t.abrupt("return",this.$message.success("信息获取成功"));case 13:return t.next=15,this.$http.get("/allowance/getAgentStatic?gjjzh="+this.gjjzh);case 15:if(o=t.sent,a=o.data,r=a.data,c=a.code,this.detailList=r,200===c){t.next=22;break}return t.abrupt("return",this.$message.error("信息获取失败"));case 22:return t.abrupt("return",this.$message.success("信息获取成功"));case 23:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),routeTo:function(t,e){this.$router.push({path:t,query:{stateInfo:e}})}}},r=a,c=(i("5e88"),i("2877")),u=Object(c["a"])(r,s,n,!1,null,"31cbc4e4",null);e["default"]=u.exports},"27f0":function(t,e,i){"use strict";var s=i("a5c5"),n=i.n(s);n.a},"2b49":function(t,e,i){},4035:function(t,e,i){},"41d6":function(t,e,i){t.exports=i.p+"img/login_success.3c392808.jpeg"},"4b2b":function(t,e,i){"use strict";var s=i("4035"),n=i.n(s);n.a},"578a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background"},[s("ul",{staticClass:"baidu"},[s("li",[s("img",{ref:"test",attrs:{src:i("593c")}})]),t._m(0),t._m(1),t._m(2)]),t._m(3),s("div",{staticClass:"title"},[t._v("\n      住房补贴系统\n    ")]),s("div",{staticClass:"login_box"},[s("el-form",{ref:"loginFormRef",staticClass:"login_form",attrs:{model:t.loginForm,rules:t.loginFormRules,"label-width":"0px"}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{"prefix-icon":"iconfont icon-user"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),s("el-form-item",{staticStyle:{"margin-top":"30px"},attrs:{prop:"password"}},[s("el-input",{attrs:{"prefix-icon":"iconfont icon-3702mima",type:"password"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),s("el-form-item",{staticClass:"btns",staticStyle:{"margin-top":"60px"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")]),s("el-button",{attrs:{type:"primary"},on:{click:t.qrcodeLogin}},[t._v("扫码")]),s("el-button",{attrs:{type:"info"},on:{click:t.resetLoginForm}},[t._v("重置")]),s("a",{staticStyle:{"text-decoration":"none","margin-left":"15px"},attrs:{href:"javascript:;"},on:{click:t.changeUser}},[t._v("↺")])],1)],1)],1),s("el-dialog",{attrs:{title:"二维码登录",visible:t.qrcodeDialogVisible,width:"240px"},on:{"update:visible":function(e){t.qrcodeDialogVisible=e}}},[s("img",{staticStyle:{width:"180px",height:"180px","font-size":"18px",color:"red"},attrs:{id:"login_success",src:t.qrcodeInfo.qrcode,alt:"加载失败，刷新重试 !",title:"二维码"}})])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("img",{attrs:{src:i("98a8")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("img",{attrs:{src:i("6800")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("img",{attrs:{src:i("ffd7")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"avatar_box"},[s("img",{attrs:{src:i("cf05")}})])}],o=(i("96cf"),i("3b8d")),a=(i("cadf"),i("551c"),i("f751"),i("097d"),{data:function(){return{loginForm:{username:"jingbanren1",password:"123"},loginFormRules:{username:[{required:!0,message:"请输入登录名称",trigger:"blur"}],password:[{required:!0,message:"请输入登录密码",trigger:"blur"}]},qrcodeInfo:{qrcode:"",verifyId:""},qrcodeDialogVisible:!1}},created:function(){this.getQRCode()},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.addClick();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getQRCode:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("getQRCode");case 2:if(e=t.sent,i=e.data,200===i.code){t.next=6;break}return t.abrupt("return",this.$message.error("二维码登录失败"));case 6:i.data.qrcode="data:image/png;base64,".concat(i.data.qrcode),this.qrcodeInfo=i.data;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),changeImg:function(){this.$nextTick(Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,document.getElementById("login_success");case 2:e=t.sent,e.src=i("41d6");case 4:case"end":return t.stop()}},t,this)})))},qrcodeLogin:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,i,s,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.qrcodeDialogVisible=!0,t.next=3,this.$http.get("/QRLogin",{params:{verifyId:this.qrcodeInfo.verifyId}});case 3:e=t.sent,i=e.data,200===i.code?(this.changeImg(),window.sessionStorage.setItem("memberToken",i.data.memberToken),window.sessionStorage.setItem("username",i.data.username),window.sessionStorage.setItem("position",i.data.position),window.sessionStorage.setItem("gjjzh",i.data.gjjzh),window.sessionStorage.setItem("dwmc",i.data.dwmc),this.$message.success("扫码登录成功"),setTimeout(function(){n.$router.push({path:"/home",query:{menulist:i.data.menuVOList}})},1500)):s=setInterval(Object(o["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$http.get("/QRLogin",{params:{verifyId:n.qrcodeInfo.verifyId}});case 2:e=t.sent,i=e.data,200===i.code&&(clearInterval(s),n.changeImg(),n.$message.success("扫码登录成功"),window.sessionStorage.setItem("memberToken",i.data.memberToken),window.sessionStorage.setItem("username",i.data.username),window.sessionStorage.setItem("position",i.data.position),window.sessionStorage.setItem("gjjzh",i.data.gjjzh),window.sessionStorage.setItem("dwmc",i.data.dwmc),n.$message.success("扫码登录成功"),setTimeout(function(){n.$router.push({path:"/home",query:{menulist:i.data.menuVOList}})},1500));case 5:case"end":return t.stop()}},t,this)})),4e3);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addClick:function(){for(var t=document.querySelector(".baidu").querySelectorAll("img"),e=0;e<t.length;e++)t[e].onclick=function(){document.getElementsByClassName("background")[0].style.backgroundImage="url("+this.src+")"}},resetLoginForm:function(){this.$refs.loginFormRef.resetFields()},login:function(){var t=this,e=this;this.$http.post("/login",{username:this.loginForm.username,password:this.loginForm.password},{emulateJSON:!0}).then(function(i){if(200!==i.status)return e.$message.error("登录失败！");-1==i.data.gjjzh?t.$message({message:"请输入正确的用户名和密码",type:"warning"}):(e.$message.success("登录成功"),window.sessionStorage.setItem("memberToken",i.data.memberToken),window.sessionStorage.setItem("username",i.data.username),window.sessionStorage.setItem("position",i.data.position),window.sessionStorage.setItem("gjjzh",i.data.gjjzh),e.$router.push({path:"/home",query:{menulist:i.data.menuVOList}}))})},changeUser:function(){this.loginForm.username="shenheyuan1"}}}),r=a,c=(i("4b2b"),i("2877")),u=Object(c["a"])(r,s,n,!1,null,"18c54aa8",null);e["default"]=u.exports},"57da":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"home-container"},[s("el-header",[s("div",[s("div",{staticClass:"logo_box"},[s("img",{attrs:{src:i("cf05"),alt:""}})]),s("span",{staticStyle:{"margin-left":"80px"}},[t._v("住房补贴系统")])]),s("div",[s("span",{staticStyle:{position:"absolute","font-style":"italic","font-size":"15px",right:"90px"}},[t._v("单位："+t._s(this.dwmc)+" | 用户名："+t._s(this.username)+",欢迎您！")])]),s("el-button",{attrs:{type:"info"},on:{click:t.logout}},[t._v("退出")])],1),s("el-container",[s("el-aside",{attrs:{width:t.isCollapse?"64px":"200px"}},[s("div",{staticClass:"toggle-button",on:{click:t.toggleCollapse}},[t._v("|||")]),s("el-menu",{attrs:{"background-color":"#333744","text-color":"#fff","active-text-color":"#409EFF","unique-opened":"",collapse:t.isCollapse,"collapse-transition":!1,router:"","default-active":t.activePath}},t._l(t.menulist,function(e){return s("el-submenu",{key:e.id,attrs:{index:e.id+""}},[s("template",{slot:"title"},[s("i",{class:t.iconsObj[e.id]}),s("span",[t._v(t._s(e.authName))])]),t._l(e.children,function(e){return s("el-menu-item",{key:e.id,attrs:{index:"/"+e.path},on:{click:function(i){return t.saveNavState("/"+e.path)}}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-menu"}),s("span",[t._v(t._s(e.authName))])])],2)})],2)}),1)],1),s("el-main",[s("router-view")],1)],1)],1)},n=[],o={data:function(){return{menulist:[],iconsObj:{0:"iconfont icon-user",1:"iconfont icon-tijikongjian",2:"iconfont icon-SQLshenhe",3:"iconfont icon-danju"},isCollapse:!1,activePath:"",username:"",dwmc:""}},created:function(){this.username=window.sessionStorage.getItem("username"),this.dwmc=window.sessionStorage.getItem("dwmc"),this.getMenuList()},methods:{logout:function(){window.sessionStorage.clear(),this.$router.push("/login")},toggleCollapse:function(){this.isCollapse=!this.isCollapse},saveNavState:function(t){window.sessionStorage.setItem("activePath",t),this.activePath=t},getMenuList:function(){var t=this;this.$http.get("/getMenuList",{params:{username:this.username}},{emulateJSON:!0}).then(function(e){if(200!==e.status)return that.$message.error("获取菜单失败！");t.menulist=e.data})}}},a=o,r=(i("27f0"),i("2877")),c=Object(r["a"])(a,s,n,!1,null,"5ab3601e",null);e["default"]=c.exports},"593c":function(t,e,i){t.exports=i.p+"img/2.40c8e3ff.jpg"},"5e88":function(t,e,i){"use strict";var s=i("2b49"),n=i.n(s);n.a},6800:function(t,e,i){t.exports=i.p+"img/3.9450dfbc.jpg"},"98a8":function(t,e,i){t.exports=i.p+"img/1.8a296bd5.jpg"},a5c5:function(t,e,i){},cf05:function(t,e,i){t.exports=i.p+"img/logo.6e0e48c8.png"},ffd7:function(t,e,i){t.exports=i.p+"img/4.8c60a396.jpg"}}]);
//# sourceMappingURL=login_home_welcome.53846bcd.js.map