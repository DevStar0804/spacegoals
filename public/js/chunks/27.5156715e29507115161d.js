(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"2PuX":function(e,t,r){"use strict";r.r(t);var i=r("QBvj"),s=(r("7emp"),r("Snq/")),a=r.n(s),l=r("RZZ2"),n={name:"CellRendererLink",computed:{url:function(){return"/apps/user/user-view/268"}}},o=r("KHd+"),c=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center"},[r("vs-avatar",{staticClass:"flex-shrink-0 mr-2",attrs:{src:e.params.data.avatar,size:"30px"},on:{click:function(t){return e.$router.push(e.url)}}}),e._v(" "),r("router-link",{staticClass:"text-inherit hover:text-primary",attrs:{to:e.url},on:{click:function(e){e.stopPropagation(),e.preventDefault()}}},[e._v(e._s(e.params.value))])],1)}),[],!1,null,null,null).exports,u={name:"CellRendererStatus",computed:{chipColor:function(){return function(e){return"active"===e?"success":"blocked"===e?"danger":"deactivated"===e?"warning":"primary"}}}},d=(r("FK7P"),Object(o.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("vs-chip",{staticClass:"ag-grid-cell-chip",attrs:{color:this.chipColor(this.params.value)}},[t("span",[this._v(this._s(this.params.value))])])}),[],!1,null,null,null).exports),p={name:"CellRendererVerified",computed:{textColor:function(){return this.params.value?"text-primary":"text-grey"}}},v=Object(o.a)(p,(function(){var e=this.$createElement;return(this._self._c||e)("feather-icon",{attrs:{icon:"CircleIcon",svgClasses:["fill-current h-4 w-4",this.textColor]}})}),[],!1,null,null,null).exports,f={name:"CellRendererActions",methods:{editRecord:function(){this.$router.push("/apps/user/user-edit/".concat(268)).catch((function(){}))},confirmDeleteRecord:function(){this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm Delete",text:'You are about to delete "'.concat(this.params.data.username,'"'),accept:this.deleteRecord,acceptText:"Delete"})},deleteRecord:function(){this.showDeleteSuccess()},showDeleteSuccess:function(){this.$vs.notify({color:"success",title:"User Deleted",text:"The selected user was successfully deleted"})}}},m=Object(o.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{style:{direction:this.$vs.rtl?"rtl":"ltr"}},[t("feather-icon",{attrs:{icon:"Edit3Icon",svgClasses:"h-5 w-5 mr-4 hover:text-primary cursor-pointer"},on:{click:this.editRecord}}),this._v(" "),t("feather-icon",{attrs:{icon:"Trash2Icon",svgClasses:"h-5 w-5 hover:text-danger cursor-pointer"},on:{click:this.confirmDeleteRecord}})],1)}),[],!1,null,null,null).exports,h={components:{AgGridVue:i.AgGridVue,vSelect:a.a,CellRendererLink:c,CellRendererStatus:d,CellRendererVerified:v,CellRendererActions:m},data:function(){return{roleFilter:{label:"All",value:"all"},roleOptions:[{label:"All",value:"all"},{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Staff",value:"staff"}],statusFilter:{label:"All",value:"all"},statusOptions:[{label:"All",value:"all"},{label:"Active",value:"active"},{label:"Deactivated",value:"deactivated"},{label:"Blocked",value:"blocked"}],isVerifiedFilter:{label:"All",value:"all"},isVerifiedOptions:[{label:"All",value:"all"},{label:"Yes",value:"yes"},{label:"No",value:"no"}],departmentFilter:{label:"All",value:"all"},departmentOptions:[{label:"All",value:"all"},{label:"Sales",value:"sales"},{label:"Development",value:"development"},{label:"Management",value:"management"}],searchQuery:"",gridApi:null,gridOptions:{},defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"ID",field:"id",width:125,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Username",field:"username",filter:!0,width:210,cellRendererFramework:"CellRendererLink"},{headerName:"Email",field:"email",filter:!0,width:225},{headerName:"Name",field:"name",filter:!0,width:200},{headerName:"Country",field:"country",filter:!0,width:150},{headerName:"Role",field:"role",filter:!0,width:150},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:"CellRendererStatus"},{headerName:"Verified",field:"is_verified",filter:!0,width:125,cellRendererFramework:"CellRendererVerified",cellClass:"text-center"},{headerName:"Department",field:"department",filter:!0,width:150},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:"CellRendererActions"}],components:{CellRendererLink:c,CellRendererStatus:d,CellRendererVerified:v,CellRendererActions:m}}},watch:{roleFilter:function(e){this.setColumnFilter("role",e.value)},statusFilter:function(e){this.setColumnFilter("status",e.value)},isVerifiedFilter:function(e){var t="all"===e.value?"all":"yes"===e.value?"true":"false";this.setColumnFilter("is_verified",t)},departmentFilter:function(e){this.setColumnFilter("department",e.value)}},computed:{usersData:function(){return this.$store.state.userManagement.users},paginationPageSize:function(){return this.gridApi?this.gridApi.paginationGetPageSize():10},totalPages:function(){return this.gridApi?this.gridApi.paginationGetTotalPages():0},currentPage:{get:function(){return this.gridApi?this.gridApi.paginationGetCurrentPage()+1:1},set:function(e){this.gridApi.paginationGoToPage(e-1)}}},methods:{setColumnFilter:function(e,t){var r=null;"all"!==t&&(r={type:"equals",filter:t}),this.gridApi.getFilterInstance(e).setModel(r),this.gridApi.onFilterChanged()},resetColFilters:function(){this.gridApi.setFilterModel(null),this.gridApi.onFilterChanged(),this.roleFilter=this.statusFilter=this.isVerifiedFilter=this.departmentFilter={label:"All",value:"all"},this.$refs.filterCard.removeRefreshAnimation()},updateSearchQuery:function(e){this.gridApi.setQuickFilter(e)}},mounted:function(){if(this.gridApi=this.gridOptions.api,this.$vs.rtl){var e=this.$refs.agGridTable.$el.querySelector(".ag-header-container");e.style.left="-".concat(String(Number(e.style.transform.slice(11,-3))+9),"px")}},created:function(){l.a.isRegistered||(this.$store.registerModule("userManagement",l.a),l.a.isRegistered=!0),this.$store.dispatch("userManagement/fetchUsers").catch((function(e){console.error(e)}))}},g=(r("p1Eu"),Object(o.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"page-user-list"}},[r("vx-card",{ref:"filterCard",staticClass:"user-list-filters mb-8",attrs:{title:"Filters",actionButtons:""},on:{refresh:e.resetColFilters,remove:e.resetColFilters}},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[r("label",{staticClass:"text-sm opacity-75"},[e._v("Role")]),e._v(" "),r("v-select",{staticClass:"mb-4 md:mb-0",attrs:{options:e.roleOptions,clearable:!1,dir:e.$vs.rtl?"rtl":"ltr"},model:{value:e.roleFilter,callback:function(t){e.roleFilter=t},expression:"roleFilter"}})],1),e._v(" "),r("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[r("label",{staticClass:"text-sm opacity-75"},[e._v("Status")]),e._v(" "),r("v-select",{staticClass:"mb-4 md:mb-0",attrs:{options:e.statusOptions,clearable:!1,dir:e.$vs.rtl?"rtl":"ltr"},model:{value:e.statusFilter,callback:function(t){e.statusFilter=t},expression:"statusFilter"}})],1),e._v(" "),r("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[r("label",{staticClass:"text-sm opacity-75"},[e._v("Verified")]),e._v(" "),r("v-select",{staticClass:"mb-4 sm:mb-0",attrs:{options:e.isVerifiedOptions,clearable:!1,dir:e.$vs.rtl?"rtl":"ltr"},model:{value:e.isVerifiedFilter,callback:function(t){e.isVerifiedFilter=t},expression:"isVerifiedFilter"}})],1),e._v(" "),r("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[r("label",{staticClass:"text-sm opacity-75"},[e._v("Department")]),e._v(" "),r("v-select",{attrs:{options:e.departmentOptions,clearable:!1,dir:e.$vs.rtl?"rtl":"ltr"},model:{value:e.departmentFilter,callback:function(t){e.departmentFilter=t},expression:"departmentFilter"}})],1)])]),e._v(" "),r("div",{staticClass:"vx-card p-6"},[r("div",{staticClass:"flex flex-wrap items-center"},[r("div",{staticClass:"flex-grow"},[r("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[r("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[r("span",{staticClass:"mr-2"},[e._v(e._s(e.currentPage*e.paginationPageSize-(e.paginationPageSize-1))+" - "+e._s(e.usersData.length-e.currentPage*e.paginationPageSize>0?e.currentPage*e.paginationPageSize:e.usersData.length)+" of "+e._s(e.usersData.length))]),e._v(" "),r("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),e._v(" "),r("vs-dropdown-menu",[r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(10)}}},[r("span",[e._v("10")])]),e._v(" "),r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(20)}}},[r("span",[e._v("20")])]),e._v(" "),r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(25)}}},[r("span",[e._v("25")])]),e._v(" "),r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(30)}}},[r("span",[e._v("30")])])],1)],1)],1),e._v(" "),r("vs-input",{staticClass:"sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4",attrs:{placeholder:"Search..."},on:{input:e.updateSearchQuery},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),e._v(" "),r("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[r("div",{staticClass:"p-3 shadow-drop rounded-lg d-theme-dark-light-bg cursor-pointer flex items-end justify-center text-lg font-medium w-32"},[r("span",{staticClass:"mr-2 leading-none"},[e._v("Actions")]),e._v(" "),r("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),e._v(" "),r("vs-dropdown-menu",[r("vs-dropdown-item",[r("span",{staticClass:"flex items-center"},[r("feather-icon",{staticClass:"mr-2",attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),e._v(" "),r("span",[e._v("Delete")])],1)]),e._v(" "),r("vs-dropdown-item",[r("span",{staticClass:"flex items-center"},[r("feather-icon",{staticClass:"mr-2",attrs:{icon:"ArchiveIcon",svgClasses:"h-4 w-4"}}),e._v(" "),r("span",[e._v("Archive")])],1)]),e._v(" "),r("vs-dropdown-item",[r("span",{staticClass:"flex items-center"},[r("feather-icon",{staticClass:"mr-2",attrs:{icon:"FileIcon",svgClasses:"h-4 w-4"}}),e._v(" "),r("span",[e._v("Print")])],1)]),e._v(" "),r("vs-dropdown-item",[r("span",{staticClass:"flex items-center"},[r("feather-icon",{staticClass:"mr-2",attrs:{icon:"SaveIcon",svgClasses:"h-4 w-4"}}),e._v(" "),r("span",[e._v("CSV")])],1)])],1)],1)],1),e._v(" "),r("ag-grid-vue",{ref:"agGridTable",staticClass:"ag-theme-material w-100 my-4 ag-grid-table",attrs:{components:e.components,gridOptions:e.gridOptions,columnDefs:e.columnDefs,defaultColDef:e.defaultColDef,rowData:e.usersData,rowSelection:"multiple",colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.paginationPageSize,suppressPaginationPanel:!0,enableRtl:e.$vs.rtl}}),e._v(" "),r("vs-pagination",{attrs:{total:e.totalPages,max:7},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null));t.default=g.exports},FK7P:function(e,t,r){"use strict";var i=r("QBx1");r.n(i).a},QBx1:function(e,t,r){var i=r("ZAI4");"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(i,s);i.locals&&(e.exports=i.locals)},RZZ2:function(e,t,r){"use strict";var i=r("bJaO"),s={fetchUsers:function(e){var t=e.commit;return new Promise((function(e,r){i.a.get("/api/user-management/users").then((function(r){t("SET_USERS",r.data),e(r)})).catch((function(e){r(e)}))}))},fetchUser:function(e,t){return new Promise((function(e,r){i.a.get("/api/user-management/users/".concat(t)).then((function(t){e(t)})).catch((function(e){r(e)}))}))},removeRecord:function(e,t){var r=e.commit;return new Promise((function(e,s){i.a.delete("/api/user-management/users/".concat(t)).then((function(i){r("REMOVE_RECORD",t),e(i)})).catch((function(e){s(e)}))}))}};t.a={isRegistered:!1,namespaced:!0,state:{users:[]},mutations:{SET_USERS:function(e,t){e.users=t},REMOVE_RECORD:function(e,t){var r=e.users.findIndex((function(e){return e.id===t}));e.users.splice(r,1)}},actions:s,getters:{}}},Wxeo:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,"#page-user-list .user-list-filters .vs__actions {\n  position: absolute;\n  top: 50%;\n}[dir] #page-user-list .user-list-filters .vs__actions {\n  transform: translateY(-58%);\n}[dir=ltr] #page-user-list .user-list-filters .vs__actions {\n  right: 0;\n}[dir=rtl] #page-user-list .user-list-filters .vs__actions {\n  left: 0;\n}",""])},ZAI4:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,".ag-grid-cell-chip.vs-chip-success {\n  color: rgba(var(--vs-success), 1) !important;\n  font-weight: 500;\n}[dir] .ag-grid-cell-chip.vs-chip-success {\n  background: rgba(var(--vs-success), 0.15);\n}\n.ag-grid-cell-chip.vs-chip-warning {\n  color: rgba(var(--vs-warning), 1) !important;\n  font-weight: 500;\n}\n[dir] .ag-grid-cell-chip.vs-chip-warning {\n  background: rgba(var(--vs-warning), 0.15);\n}\n.ag-grid-cell-chip.vs-chip-danger {\n  color: rgba(var(--vs-danger), 1) !important;\n  font-weight: 500;\n}\n[dir] .ag-grid-cell-chip.vs-chip-danger {\n  background: rgba(var(--vs-danger), 0.15);\n}",""])},fbpq:function(e,t,r){var i=r("Wxeo");"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(i,s);i.locals&&(e.exports=i.locals)},p1Eu:function(e,t,r){"use strict";var i=r("fbpq");r.n(i).a}}]);