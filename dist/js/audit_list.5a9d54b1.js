(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["audit_list"],{"8bda":function(t,e,a){},ac6a:function(t,e,a){for(var i=a("cadf"),r=a("0d58"),n=a("2aba"),o=a("7726"),s=a("32e9"),l=a("84f2"),c=a("2b4c"),u=c("iterator"),d=c("toStringTag"),h=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=r(p),g=0;g<m.length;g++){var f,b=m[g],w=p[b],y=o[b],j=y&&y.prototype;if(j&&(j[u]||s(j,u,h),j[d]||s(j,d,b),l[b]=h,w))for(f in i)j[f]||n(j,f,i[f],!0)}},b599:function(t,e,a){"use strict";var i=a("8bda"),r=a.n(i);r.a},cc1e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("补贴审核")])],1),a("el-card",[a("div",{staticStyle:{"font-size":"14pt","font-weight":"800"}},[t._v("\n      筛选条件\n    ")]),a("el-row",{staticStyle:{"margin-top":"10px","margin-left":"20px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("div",{staticStyle:{"margin-top":"10px","font-size":"10pt"}},[t._v("单位账号")])]),a("el-col",{attrs:{span:18}},[a("el-input",{attrs:{placeholder:"请输入单位账号"},model:{value:t.organization,callback:function(e){t.organization=e},expression:"organization"}})],1)],1)],1),a("el-col",{attrs:{span:4}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticStyle:{"margin-top":"10px","font-size":"10pt"}},[t._v("补贴状态")])]),a("el-col",{attrs:{span:16}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.auditState,callback:function(e){t.auditState=e},expression:"auditState"}},t._l(t.auditStateOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1),a("el-col",{attrs:{span:9}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticStyle:{"margin-top":"10px","font-size":"10pt"}},[t._v("日期范围")])]),a("el-col",{attrs:{span:20}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"primary"},on:{click:t.getAuditsList}},[t._v("查询结果")]),a("el-button",{attrs:{type:"danger"},on:{click:t.clearSearch}},[t._v("清除筛选")])],1)],1),a("div",{staticStyle:{"font-size":"12pt","margin-top":"25px"}},[a("h3",[t._v("查询结果")])]),a("el-table",{attrs:{data:t.auditsList,border:"",stripe:"","header-cell-style":{background:"#eee",color:"#606266",fontSize:"14px"}}},[a("el-table-column",{attrs:{label:"补贴名称",prop:"allowanceName",width:"210px",align:"center"}}),a("el-table-column",{attrs:{label:"时间",prop:"allowanceTime",width:"220px",align:"center"}}),a("el-table-column",{attrs:{label:"使用标文号",prop:"zbwhStr",width:"200px",align:"center"}}),a("el-table-column",{attrs:{label:"状态",prop:"state",width:"150px",align:"center"}}),a("el-table-column",{attrs:{label:"查看详细信息",align:"center",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.goDetailPage(e.row.allowanceId,e.row.gjjzh)}}},[t._v("查看")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini",disabled:"已提交"!=e.row.state},on:{click:function(a){return t.openConfirmDialog(e.row.allowanceId)}}},[t._v("确认")]),a("el-button",{attrs:{type:"danger",size:"mini",disabled:"已提交"!=e.row.state},on:{click:function(a){return t.openRejectDialog(e.row.allowanceId)}}},[t._v("驳回")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[5,10,15,20],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),a("el-dialog",{attrs:{title:"通过补贴",visible:t.confirmDialogVisible,width:"30%"},on:{"update:visible":function(e){t.confirmDialogVisible=e}}},[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入审核评论内容"},model:{value:t.confirmRemark,callback:function(e){t.confirmRemark=e},expression:"confirmRemark"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.confirmAllowance}},[t._v("确认")]),a("el-button",{on:{click:t.closeConfirmDialog}},[t._v("取消")])],1)],1),a("el-dialog",{attrs:{title:"驳回补贴",visible:t.rejectDialogVisible,width:"30%"},on:{"update:visible":function(e){t.rejectDialogVisible=e}}},[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入审核评论内容"},model:{value:t.rejectRemark,callback:function(e){t.rejectRemark=e},expression:"rejectRemark"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.rejectAllowance}},[t._v("驳回")]),a("el-button",{on:{click:t.closeRejectDialog}},[t._v("取消")])],1)],1)],1)],1)},r=[],n=(a("96cf"),a("3b8d")),o=(a("cadf"),a("551c"),a("f751"),a("097d"),{data:function(){return{confirmDialogVisible:!1,rejectDialogVisible:!1,confirmRemark:"",rejectRemark:"",confirmAllowanceId:"",rejectAllowanceId:"",auditorUsername:"",buttonDisabled:!0,queryInfo:{query:"",pagenum:1,pagesize:10},total:0,auditsList:[],organization:"",auditState:"已提交",auditStateOptions:[{value:"已提交",label:"已提交"},{value:"驳回",label:"驳回"},{value:"通过",label:"通过"}],dateRange:[]}},created:function(){this.auditorUsername=window.sessionStorage.getItem("username"),this.organization=window.sessionStorage.getItem("gjjzh"),this.auditState=this.$route.query.stateInfo?this.$route.query.stateInfo:"已提交",this.getAuditsList()},methods:{clearSearch:function(){this.auditState="",this.organization="",this.dateRange=[],this.getAuditsList()},checkTime:function(t){return t<10&&(t="0"+t),t},getAuditsList:function(){var t=this,e=null,a=null;0!=this.dateRange.length&&(e=this.dateRange[0].getFullYear()+"-"+this.checkTime(this.dateRange[0].getMonth()+1)+"-"+this.checkTime(this.dateRange[0].getDate()),a=this.dateRange[1].getFullYear()+"-"+this.checkTime(this.dateRange[1].getMonth()+1)+"-"+this.checkTime(this.dateRange[1].getDate()));var i=this.$http.get("/audit/getAllowanceByGjjzhAndState",{params:{pageNum:this.queryInfo.pagenum,pageSize:this.queryInfo.pagesize,gjjzh:this.organization,state:this.auditState,startDate:e,endDate:a}},{emulateJSON:!0}).then(function(e){if(200!==e.data.code)return t.$message.error("获取补贴列表失败！");t.total=e.data.data.total,t.auditsList=e.data.data.records;for(var a=0;a<t.auditsList.length;a++){t.auditsList[a].zbwhStr="";for(var i=0;i<t.auditsList[a].zbwhList.length;i++)t.auditsList[a].zbwhStr=t.auditsList[a].zbwhStr+t.auditsList[a].zbwhList[i]+" "}});i.data},handleSizeChange:function(t){this.queryInfo.pagesize=t,this.getAuditsList()},handleCurrentChange:function(t){this.queryInfo.pagenum=t,this.getAuditsList()},confirmAllowance:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:""==this.confirmRemark||null==this.confirmRemark?this.$message({message:"请输入审核员评论",type:"warning"}):this.$http.post("/audit/auditAllowance",{allowanceId:this.confirmAllowanceId,auditorUsername:this.auditorUsername,auditRecordId:"",auditTime:"",operation:0,remark:this.confirmRemark},{emulateJSON:!0}).then(function(t){e.$message.success("确认成功！"),e.getAuditsList(),e.closeConfirmDialog()});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),rejectAllowance:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:""==this.rejectRemark||null==this.rejectRemark?this.$message({message:"请输入审核员评论",type:"warning"}):(e=this.$http.post("/audit/auditAllowance",{allowanceId:this.rejectAllowanceId,auditorUsername:this.auditorUsername,auditRecordId:"",auditTime:"",operation:1,remark:this.rejectRemark},{emulateJSON:!0}).then(function(t){a.$message.success("驳回成功！"),a.getAuditsList(),a.closeRejectDialog()}),e.data);case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goDetailPage:function(t,e){this.$router.push({path:"/audit/detail",query:{id:t,gjjzh:e}})},closeConfirmDialog:function(){this.confirmRemark="",this.confirmDialogVisible=!1,this.confirmAllowanceId=""},closeRejectDialog:function(){this.rejectRemark="",this.rejectDialogVisible=!1,this.rejectAllowanceId=""},openConfirmDialog:function(t){this.confirmRemark="",this.confirmDialogVisible=!0,this.confirmAllowanceId=t},openRejectDialog:function(t){this.rejectRemark="",this.rejectDialogVisible=!0,this.rejectAllowanceId=t}}}),s=o,l=a("2877"),c=Object(l["a"])(s,i,r,!1,null,"1dbfeb93",null);e["default"]=c.exports},f666:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/audit"}}},[t._v("补贴审核")]),a("el-breadcrumb-item",[t._v("补贴详细信息")])],1),a("el-button",{attrs:{icon:"el-icon-arrow-left",size:"mini"},on:{click:t.goListPage}},[t._v("返回")]),a("el-card",[a("div",{staticStyle:{"font-size":"14pt","font-weight":"800"}},[t._v("\n      已选择指标文\n    ")]),a("el-table",{attrs:{data:t.indicatorList,"row-class-name":t.indexTextTableRowClassName,border:"","header-cell-style":{background:"#eee",color:"#606266",fontSize:"14px"}}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"50px",align:"center"}}),a("el-table-column",{attrs:{label:"指标文号",prop:"zbwh",width:"200px",align:"center"}}),a("el-table-column",{attrs:{label:"单位账号",prop:"gjjzh",width:"80px",align:"center"}}),a("el-table-column",{attrs:{label:"合计金额(元)",prop:"hjje",width:"180px",align:"center"}}),a("el-table-column",{attrs:{label:"已使用金额(元)",prop:"hjybje",width:"180px",align:"center"}}),a("el-table-column",{attrs:{label:"剩余金额(元)",prop:"syje",width:"180px",align:"center"}}),a("el-table-column",{attrs:{label:"资金来源",prop:"zjly",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.handleIndexTextError("标红",e.row)}}},[t._v("标记")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleIndexTextError("正常",e.row)}}},[t._v("取消标记")])]}}])})],1),a("div",{staticStyle:{"font-size":"14pt","margin-top":"25px","font-weight":"800"}},[t._v("\n      职工信息\n    ")]),a("el-table",{attrs:{data:t.workerList,"row-class-name":t.employeeTableRowClassName,border:"","header-cell-style":{background:"#eee",color:"#606266",fontSize:"14px"}}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"50px",align:"center"}}),a("el-table-column",{attrs:{label:"姓名",prop:"name",width:"100px",align:"center"}}),a("el-table-column",{attrs:{label:"身份证号",prop:"idNumber",width:"250px",align:"center"}}),a("el-table-column",{attrs:{label:"银行卡号",prop:"cardNumber",width:"250px",align:"center"}}),a("el-table-column",{attrs:{label:"补贴金额(元)",prop:"amount",width:"170px",align:"center"}}),a("el-table-column",{attrs:{label:"继承人信息",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.getInheritorDetail(e.row)}}},[t._v("查看")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.handleWorkerError("标红",e.row)}}},[t._v("标记")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleWorkerError("正常",e.row)}}},[t._v("取消标记")])]}}])})],1),a("div",{staticStyle:{"font-size":"14pt","margin-top":"25px","font-weight":"800"}},[t._v("\n      统计信息\n    ")]),a("el-table",{attrs:{data:t.statisticsList,border:"",stripe:"","header-cell-style":{background:"#eee",color:"#606266",fontSize:"14px"}}},[a("el-table-column",{attrs:{label:"指标文总金额(元)",prop:"zbwzje",align:"center"}}),a("el-table-column",{attrs:{label:"发放总金额(元)",prop:"ffzje",align:"center"}}),a("el-table-column",{attrs:{label:"涉及的职工人数(元)",prop:"sjzgrs",align:"center"}})],1),a("el-dialog",{attrs:{title:"继承人信息查看",visible:t.inheritorDialogVisible,width:"70%"},on:{"update:visible":function(e){t.inheritorDialogVisible=e}}},[a("el-card",[a("div",{staticStyle:{"font-size":"12pt"}},[t._v("\n          职工信息\n        ")]),a("el-row",[a("el-col",{attrs:{span:6}},[a("div",{staticStyle:{"margin-top":"10px","margin-left":"50px","font-size":"10pt"}},[t._v("职工姓名:\n              "),a("span",[t._v(t._s(this.workerName))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticStyle:{"margin-top":"10px","font-size":"10pt"}},[t._v("职工身份证号:\n              "),a("span",[t._v(t._s(this.workerIDCard))])])])],1),a("div",{staticStyle:{"font-size":"12pt","margin-top":"25px"}},[t._v("\n          继承人信息\n        ")]),a("el-table",{attrs:{data:t.inheritorList,border:"",stripe:"","header-cell-style":{background:"#eee",color:"#606266",fontSize:"12px"}}},[a("el-table-column",{attrs:{label:"序号 ",type:"index",width:"70px",align:"center"}}),a("el-table-column",{attrs:{label:"继承人姓名",prop:"name",width:"90px",align:"center"}}),a("el-table-column",{attrs:{label:"身份证号",prop:"idNumber",width:"190px",align:"center"}}),a("el-table-column",{attrs:{label:"联系电话",prop:"phoneNumber",width:"170px",align:"center"}}),a("el-table-column",{attrs:{label:"银行卡号",prop:"cardNumber;",width:"190px",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.getNotarization(e.row.inheritorId)}}},[t._v("查看公证材料")])]}}])})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.closeInheritorDetail}},[t._v("确定")])],1)],1),a("el-dialog",{staticClass:"el_img_dialog",attrs:{title:"公证材料",visible:t.notarizationDialogVisible,width:"50%"},on:{"update:visible":function(e){t.notarizationDialogVisible=e}}},[t._l(t.imageList,function(e,i){return[a("span",{staticStyle:{color:"slategrey","font-size":"18px","font-weight":"bold"}},[t._v("公证人材料"+t._s(i+1)+"如下:")]),a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.src}}),a("br")]})],2)],1)],1)},r=[],n=(a("ac6a"),a("7f7f"),a("96cf"),a("3b8d")),o=(a("cadf"),a("551c"),a("f751"),a("097d"),{data:function(){return{inheritorDialogVisible:!1,notarizationDialogVisible:!1,allowanceId:"",gjjzh:"",imageList:[],indicatorList:[],employeeId:"",workerList:[],statisticsList:[],workerName:"",workerState:"",workerIDCard:"",inheritorList:[],queryInfo:{query:"",pagenum:1,pagesize:3},total:0,indexTextStateList:[],employeeStateList:[]}},created:function(){this.allowanceId=this.$route.query.id,this.gjjzh=this.$route.query.gjjzh,this.getAllLists()},methods:{getAllLists:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$http.get("/allowance/getAllowanceDetail",{params:{allowanceId:this.allowanceId}},{emulateJSON:!0}).then(function(t){var a,i=t.data;if(200!==i.code)return e.$message.error("获取补贴详细信息失败！");(function(){e.indexTextStateList=i.data.zbwhStateList,e.employeeStateList=i.data.employeeStateList;var t=i.data.zbwhList,r=i.data.employeeList,n=i.data.amountList;if(0!=t.length)for(a=0;a<t.length;a++)e.$http.get("zbwmx/findByZbwhAndGjjzh",{params:{gjjzh:e.gjjzh,zbwh:t[a]}},{emulateJSON:!0}).then(function(t){var a=t.data;e.indicatorList.push({czje:a.data.czje,czybje:a.data.czybje,fsje:a.data.fsje,fsybje:a.data.fsybje,gjjzh:a.data.gjjzh,hjje:a.data.hjje,hjybje:a.data.hjybje,tkje:a.data.tkje,ybje:a.data.ybje,zbwh:a.data.zbwh,zfje:a.data.zfje,zfybje:a.data.zfybje,zjly:a.data.zjly,zjyt:a.data.zjyt,syje:a.data.hjje-a.data.hjybje}),e.getSatisticslist()});if(0!=r.length)for(var o=function(t){var a=e.$http.get("/employee/findByIdAndGjjzh",{params:{employeeId:r[t],gjjzh:e.gjjzh}},{emulateJSON:!0}).then(function(a){var i=a.data;e.workerList.push({index:t,employeeId:i.data.employeeId,name:i.data.name,idNumber:i.data.idNumber,amount:n[t],cardNumber:i.data.cardNumber})});a.data},s=0;s<r.length;s++)o(s)})()});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getSatisticslist:function(){var t=0,e=0;this.indicatorList.forEach(function(a){t+=a.hjje,e+=a.hjybje}),this.statisticsList=[],this.statisticsList.push({zbwzje:t,ffzje:e,sjzgrs:this.workerList.length})},getInheritorList:function(){var t=this,e=this.$http.get("/inheritor/employeeId/".concat(this.employeeId),{emulateJSON:!0}).then(function(e){if(200!==e.status)return t.$message.error("获取继承人信息失败！");t.inheritorList=e.data.data,t.total=e.data.total});e.data},handleSizeChange:function(t){this.queryInfo.pagesize=t,this.getInheritorList()},handleCurrentChange:function(t){this.queryInfo.pagenum=t,this.getInheritorList()},goListPage:function(){this.$router.push("/audit")},getInheritorDetail:function(t){this.inheritorDialogVisible=!0,this.queryInfo.pagenum=1,this.queryInfo.pagesize=3,this.workerName=t.name,this.workerIDCard=t.idNumber,this.employeeId=t.employeeId,this.getInheritorList()},closeInheritorDetail:function(){this.inheritorDialogVisible=!1,this.workerName=" ",this.workerIDCard=" ",this.employeeId=" "},getNotarization:function(t){var e=this;this.notarizationDialogVisible=!0,this.$http.get("inheritor/downloadFile/".concat(this.employeeId,"/").concat(t),{emulateJSON:!0}).then(function(t){200!==t.data.code?e.$message.error("获取公证材料失败！"):(e.imageList=t.data.data,e.imageList.forEach(function(t){"jpg"===t.type||"jpeg"===t.type?t.src="data:image/jpeg;base64,".concat(t.file):t.src="data:image/png;base64,".concat(t.file)}))})},handleIndexTextError:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,a){var i,r,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("标红"!==e){t.next=4;break}this.$prompt("请输入错误原因：","错误提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(i){var r,n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=i.value,t.next=3,o.$http.get("/audit/markRedZbwmx",{params:{allowanceId:o.allowanceId,state:e,remark:r,zbwh:a.zbwh}});case 3:if(n=t.sent,s=n.data,200===s.code){t.next=7;break}return t.abrupt("return",o.$message.error("操作失败"));case 7:o.$message.success("操作成功"),o.workerList=[],o.indicatorList=[],o.getAllLists();case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(){o.$message({type:"info",message:"取消本次标记操作"})}),t.next=14;break;case 4:return t.next=6,this.$http.get("/audit/markRedZbwmx",{params:{allowanceId:this.allowanceId,state:e,zbwh:a.zbwh}});case 6:if(i=t.sent,r=i.data,200===r.code){t.next=10;break}return t.abrupt("return",this.$message.error("操作失败"));case 10:this.$message.success("操作成功"),this.workerList=[],this.indicatorList=[],this.getAllLists();case 14:case"end":return t.stop()}},t,this)}));function e(e,a){return t.apply(this,arguments)}return e}(),handleWorkerError:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,a){var i,r,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("标红"!==e){t.next=4;break}this.$prompt("请输入错误原因","错误提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(i){var r,n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=i.value,t.next=3,o.$http.get("/audit/markRedEmployee",{params:{allowanceId:o.allowanceId,state:e,remark:r,employeeId:a.employeeId}});case 3:if(n=t.sent,s=n.data,200===s.code){t.next=7;break}return t.abrupt("return",o.$message.error("操作失败"));case 7:o.$message.success("操作成功"),o.workerList=[],o.indicatorList=[],o.getAllLists();case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(){o.$message({type:"info",message:"已取消本次标记"})}),t.next=14;break;case 4:return t.next=6,this.$http.get("/audit/markRedEmployee",{params:{allowanceId:this.allowanceId,state:e,employeeId:a.employeeId}});case 6:if(i=t.sent,r=i.data,200===r.code){t.next=10;break}return t.abrupt("return",this.$message.error("操作失败"));case 10:this.$message.success("操作成功"),this.workerList=[],this.indicatorList=[],this.getAllLists();case 14:case"end":return t.stop()}},t,this)}));function e(e,a){return t.apply(this,arguments)}return e}(),indexTextTableRowClassName:function(t){for(var e=t.row,a=(t.rowIndex,0);a<this.indexTextStateList.length;a++)if(e.zbwh===this.indexTextStateList[a].zbwh&&"标红"===this.indexTextStateList[a].state)return"warning-row";return""},employeeTableRowClassName:function(t){for(var e=t.row,a=(t.rowIndex,0);a<this.employeeStateList.length;a++)if(e.employeeId===this.employeeStateList[a].employeeId&&"标红"===this.employeeStateList[a].state)return"warning-row";return""},showErrorDialog:function(){this.errorDialogVisible=!0}}}),s=o,l=(a("b599"),a("2877")),c=Object(l["a"])(s,i,r,!1,null,"9f550320",null);e["default"]=c.exports}}]);
//# sourceMappingURL=audit_list.5a9d54b1.js.map