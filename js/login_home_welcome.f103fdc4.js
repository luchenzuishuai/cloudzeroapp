(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login_home_welcome"],{"0093":function(t,e,s){},"1ddd":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",[t._v(t._s(t.position)+"首页")]),s("el-card",[s("el-row",{attrs:{gutter:20}},[s("div",{staticStyle:{display:"flex","justify-content":"space-around",margin:"20px auto"}},[s("section",[s("div",{directives:[{name:"show",rawName:"v-show",value:"审核员"==t.position,expression:"position=='审核员'"}],staticClass:"transition-box",on:{click:function(e){return t.routeTo("audit")}}},[s("i",{staticClass:"iconfont icon-icon__huoquyuansushuliang"}),t._v("待审核数量: "+t._s(t.detailList.waitingAuditCount))]),s("div",{directives:[{name:"show",rawName:"v-show",value:"经办人"==t.position,expression:"position=='经办人'"}],staticClass:"transition-box",on:{click:function(e){return t.routeTo("/indextext")}}},[s("i",{staticClass:"iconfont icon-icon__huoquyuansushuliang"}),t._v("可用指标文数量: "+t._s(t.detailList.availableZwbCount))])]),s("section",[s("div",{directives:[{name:"show",rawName:"v-show",value:"审核员"==t.position,expression:"position=='审核员'"}],staticClass:"transition-box",staticStyle:{"background-color":"#ff3333"},on:{click:function(e){return t.routeTo("audit","驳回")}}},[s("i",{staticClass:"iconfont icon-jujueshenpi"}),t._v("当前驳回数量: "+t._s(t.detailList.rejectedCountThisMonth))]),s("div",{directives:[{name:"show",rawName:"v-show",value:"经办人"==t.position,expression:"position=='经办人'"}],staticClass:"transition-box",attrs:{state:t.detailList.currentState},on:{click:function(e){return t.routeTo("/find")}}},[s("i",{staticClass:"iconfont icon-jihuozhuangtai"}),t._v("当前补贴状态: "+t._s(t.detailList.currentState))])])])]),s("el-row",{attrs:{gutter:20}},[s("div",{staticStyle:{display:"flex","justify-content":"space-around",margin:"20px auto"}},[[s("div",{directives:[{name:"show",rawName:"v-show",value:"审核员"==t.position,expression:"position=='审核员'"}],staticClass:"transition-box",staticStyle:{"background-color":"#33ff00"},on:{click:function(e){return t.routeTo("audit","通过")}}},[s("i",{staticClass:"iconfont icon-yishenhe"}),t._v("本月审核数: "+t._s(t.detailList.auditCountThisMonth))]),s("div",{directives:[{name:"show",rawName:"v-show",value:"经办人"==t.position,expression:"position=='经办人'"}],staticClass:"transition-box",staticStyle:{"background-color":"#33ff00"},on:{click:function(e){return t.routeTo("/indextext")}}},[s("i",{staticClass:"iconfont icon-quanbuyue"}),t._v("指标文总余额: "+t._s(t.detailList.availableZwbAmount)+"￥")])],[s("div",{directives:[{name:"show",rawName:"v-show",value:"审核员"==t.position,expression:"position=='审核员'"}],staticClass:"transition-box",staticStyle:{"background-color":"#33ff00"},on:{click:function(e){return t.routeTo("audit","通过")}}},[s("i",{staticClass:"iconfont icon-yishenhe"}),t._v("本年审核数: "+t._s(t.detailList.auditCountThisYear))]),s("div",{directives:[{name:"show",rawName:"v-show",value:"经办人"==t.position,expression:"position=='经办人'"}],staticClass:"transition-box",staticStyle:{"background-color":"#33ff00"},on:{click:function(e){return t.routeTo("/find","history")}}},[s("i",{staticClass:"iconfont icon-shuliangtongji"}),t._v("历史申领次数: "+t._s(t.detailList.historyApplicationCount))])]],2)])],1)],1)},n=[],a=(s("96cf"),s("3b8d")),o=(s("cadf"),s("551c"),s("f751"),s("097d"),{data:function(){return{position:"",username:"",gjjzh:"",detailList:"",testPic:""}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.username=window.sessionStorage.getItem("username"),this.position=window.sessionStorage.getItem("position"),this.gjjzh=window.sessionStorage.getItem("gjjzh"),this.getDetailList();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getDetailList:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s,i,n,a,o,r,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("审核员"!=this.position){t.next=13;break}return t.next=3,this.$http.get("/audit/getAuditStatic?auditorUsername="+this.username);case 3:if(e=t.sent,s=e.data,i=s.data,n=s.code,this.detailList=i,200===n){t.next=10;break}return t.abrupt("return",this.$message.error("信息获取失败"));case 10:return t.abrupt("return",this.$message.success("信息获取成功"));case 13:return t.next=15,this.$http.get("/allowance/getAgentStatic?gjjzh="+this.gjjzh);case 15:if(a=t.sent,o=a.data,r=o.data,c=o.code,this.detailList=r,200===c){t.next=22;break}return t.abrupt("return",this.$message.error("信息获取失败"));case 22:return t.abrupt("return",this.$message.success("信息获取成功"));case 23:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),routeTo:function(t,e){this.$router.push({path:t,query:{stateInfo:e}})}}}),r=o,c=(s("eea9"),s("2877")),u=Object(c["a"])(r,i,n,!1,null,"19ef0568",null);e["default"]=u.exports},"27f0":function(t,e,s){"use strict";var i=s("a5c5"),n=s.n(i);n.a},"41d6":function(t,e,s){t.exports=s.p+"img/login_success.3c392808.jpeg"},"578a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background"},[i("ul",{staticClass:"baidu"},[i("li",[i("img",{ref:"test",attrs:{src:s("593c")}})]),t._m(0),t._m(1),t._m(2)]),t._m(3),i("div",{staticClass:"title"},[t._v("\n      住房补贴系统\n    ")]),i("div",{staticClass:"login_box"},[i("h3",{directives:[{name:"show",rawName:"v-show",value:!t.titleIsShow,expression:"!titleIsShow"}]},[t._v("扫描二维码登录")]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.titleIsShow,expression:"titleIsShow"}],staticClass:"title_tip"},[t._v("😅获取二维码失败,请尝试刷新页面!")]),i("img",{staticStyle:{width:"220px",height:"220px","font-size":"20px",color:"red"},attrs:{id:"login_success",src:t.qrcodeInfo.qrcode,alt:"加载失败，刷新重试 !",title:"面签宝二维码"}})])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("img",{attrs:{src:s("98a8")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("img",{attrs:{src:s("6800")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("img",{attrs:{src:s("ffd7")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"avatar_box"},[i("img",{attrs:{src:s("cf05")}})])}],a=(s("96cf"),s("3b8d")),o=(s("cadf"),s("551c"),s("f751"),s("097d"),{data:function(){return{loginForm:{username:"jingbanren1",password:"123"},loginFormRules:{username:[{required:!0,message:"请输入登录名称",trigger:"blur"}],password:[{required:!0,message:"请输入登录密码",trigger:"blur"}]},qrcodeInfo:{qrcode:"",verifyId:""},qrcodeDialogVisible:!1,titleIsShow:!1}},created:function(){this.getQRCode()},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.addClick(),this.qrcodeLogin();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getQRCode:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get("getQRCode");case 3:if(e=t.sent,i=e.data,200===i.code){t.next=11;break}return this.qrcodeInfo.qrcode=s("fa93"),this.titleIsShow=!0,t.abrupt("return",this.$message.error("二维码获取失败"));case 11:i.data.qrcode="data:image/png;base64,".concat(i.data.qrcode),this.qrcodeInfo=i.data;case 13:t.next=20;break;case 15:return t.prev=15,t.t0=t["catch"](0),this.qrcodeInfo.qrcode=s("fa93"),this.titleIsShow=!0,t.abrupt("return",this.$message.error("二维码获取失败"));case 20:case"end":return t.stop()}},t,this,[[0,15]])}));function e(){return t.apply(this,arguments)}return e}(),changeImg:function(){this.$nextTick(Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,document.getElementById("login_success");case 2:e=t.sent,e.src=s("41d6");case 4:case"end":return t.stop()}},t,this)})))},qrcodeLogin:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s,i,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.qrcodeDialogVisible=!0,t.next=3,this.$http.get("/QRLogin",{params:{verifyId:this.qrcodeInfo.verifyId}});case 3:e=t.sent,s=e.data,200===s.code?(this.changeImg(),window.sessionStorage.setItem("memberToken",s.data.memberToken),window.sessionStorage.setItem("username",s.data.username),window.sessionStorage.setItem("position",s.data.position),window.sessionStorage.setItem("gjjzh",s.data.gjjzh),window.sessionStorage.setItem("dwmc",s.data.dwmc),this.$message.success("扫码登录成功"),setTimeout(function(){n.$router.push({path:"/home",query:{menulist:s.data.menuVOList}})},1500)):i=setInterval(Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$http.get("/QRLogin",{params:{verifyId:n.qrcodeInfo.verifyId}});case 2:e=t.sent,s=e.data,200===s.code&&(clearInterval(i),n.changeImg(),n.$message.success("扫码登录成功"),window.sessionStorage.setItem("memberToken",s.data.memberToken),window.sessionStorage.setItem("username",s.data.username),window.sessionStorage.setItem("position",s.data.position),window.sessionStorage.setItem("gjjzh",s.data.gjjzh),window.sessionStorage.setItem("dwmc",s.data.dwmc),n.$message.success("扫码登录成功"),setTimeout(function(){n.$router.push({path:"/home",query:{menulist:s.data.menuVOList}})},1500));case 5:case"end":return t.stop()}},t,this)})),4e3);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addClick:function(){for(var t=document.querySelector(".baidu").querySelectorAll("img"),e=0;e<t.length;e++)t[e].onclick=function(){document.getElementsByClassName("background")[0].style.backgroundImage="url("+this.src+")"}},resetLoginForm:function(){this.$refs.loginFormRef.resetFields()},login:function(){var t=this,e=this;this.$http.post("/login",{username:this.loginForm.username,password:this.loginForm.password},{emulateJSON:!0}).then(function(s){if(200!==s.status)return e.$message.error("登录失败！");-1==s.data.gjjzh?t.$message({message:"请输入正确的用户名和密码",type:"warning"}):(e.$message.success("登录成功"),window.sessionStorage.setItem("memberToken",s.data.memberToken),window.sessionStorage.setItem("username",s.data.username),window.sessionStorage.setItem("position",s.data.position),window.sessionStorage.setItem("gjjzh",s.data.gjjzh),e.$router.push({path:"/home",query:{menulist:s.data.menuVOList}}))})},changeUser:function(){this.loginForm.username="shenheyuan1"}}}),r=o,c=(s("eeb2"),s("2877")),u=Object(c["a"])(r,i,n,!1,null,"4d082dfc",null);e["default"]=u.exports},"57da":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",{staticClass:"home-container"},[i("el-header",[i("div",[i("div",{staticClass:"logo_box"},[i("img",{attrs:{src:s("cf05"),alt:""}})]),i("span",{staticStyle:{"margin-left":"80px"}},[t._v("住房补贴系统")])]),i("div",[i("span",{staticStyle:{position:"absolute","font-style":"italic","font-size":"15px",right:"90px"}},[t._v("单位："+t._s(this.dwmc)+" | 用户名："+t._s(this.username)+",欢迎您！")])]),i("el-button",{attrs:{type:"info"},on:{click:t.logout}},[t._v("退出")])],1),i("el-container",[i("el-aside",{attrs:{width:t.isCollapse?"64px":"200px"}},[i("div",{staticClass:"toggle-button",on:{click:t.toggleCollapse}},[t._v("|||")]),i("el-menu",{attrs:{"background-color":"#333744","text-color":"#fff","active-text-color":"#409EFF","unique-opened":"",collapse:t.isCollapse,"collapse-transition":!1,router:"","default-active":t.activePath}},t._l(t.menulist,function(e){return i("el-submenu",{key:e.id,attrs:{index:e.id+""}},[i("template",{slot:"title"},[i("i",{class:t.iconsObj[e.id]}),i("span",[t._v(t._s(e.authName))])]),t._l(e.children,function(e){return i("el-menu-item",{key:e.id,attrs:{index:"/"+e.path},on:{click:function(s){return t.saveNavState("/"+e.path)}}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-menu"}),i("span",[t._v(t._s(e.authName))])])],2)})],2)}),1)],1),i("el-main",[i("router-view")],1)],1)],1)},n=[],a=(s("cadf"),s("551c"),s("f751"),s("097d"),{data:function(){return{menulist:[],iconsObj:{0:"iconfont icon-user",1:"iconfont icon-tijikongjian",2:"iconfont icon-SQLshenhe",3:"iconfont icon-danju"},isCollapse:!1,activePath:"",username:"",dwmc:""}},created:function(){this.username=window.sessionStorage.getItem("username"),this.dwmc=window.sessionStorage.getItem("dwmc"),this.getMenuList()},methods:{logout:function(){window.sessionStorage.clear(),this.$router.push("/login")},toggleCollapse:function(){this.isCollapse=!this.isCollapse},saveNavState:function(t){window.sessionStorage.setItem("activePath",t),this.activePath=t},getMenuList:function(){var t=this;this.$http.get("/getMenuList",{params:{username:this.username}},{emulateJSON:!0}).then(function(e){if(200!==e.status)return that.$message.error("获取菜单失败！");t.menulist=e.data})}}}),o=a,r=(s("27f0"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,"5ab3601e",null);e["default"]=c.exports},"593c":function(t,e,s){t.exports=s.p+"img/2.40c8e3ff.jpg"},6800:function(t,e,s){t.exports=s.p+"img/3.9450dfbc.jpg"},"98a8":function(t,e,s){t.exports=s.p+"img/1.8a296bd5.jpg"},a5c5:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.6e0e48c8.png"},e1e7:function(t,e,s){},eea9:function(t,e,s){"use strict";var i=s("e1e7"),n=s.n(i);n.a},eeb2:function(t,e,s){"use strict";var i=s("0093"),n=s.n(i);n.a},fa93:function(t,e,s){t.exports=s.p+"img/error.c8c67698.png"},ffd7:function(t,e,s){t.exports=s.p+"img/4.8c60a396.jpg"}}]);
//# sourceMappingURL=login_home_welcome.f103fdc4.js.map