webpackJsonp([1],{"28cY":function(t,e,a){t.exports=a.p+"static/img/lunbo1.8ec52df.png"},"3zR1":function(t,e,a){t.exports=a.p+"static/img/call_me.d482df5.jpg"},"5qxR":function(t,e,a){t.exports=a.p+"static/img/home1.be6e015.png"},"6Wb8":function(t,e,a){t.exports=a.p+"static/img/home2.721e38f.png"},"86Gk":function(t,e,a){t.exports=a.p+"static/img/lunbo2.6e589f2.png"},"Ev/r":function(t,e,a){t.exports=a.p+"static/img/logo.dca80f3.png"},LBzq:function(t,e,a){t.exports=a.p+"static/img/base2.adeb9c9.jpg"},LicG:function(t,e){},M28c:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("IvJb"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},o=a("C7Lr")({name:"App"},s,!1,function(t){a("M28c")},null,null).exports,n=a("KGCO"),c=a("aozt"),r=a.n(c),m={website:{userInfo:"http://api.huoxingofficial.com/demand",yhcUserInfo:"/contactus"}};r.a.defaults.withCredentials=!0,r.a.defaults.baseUrl="/api";var l={name:"Home",data:function(){return{btnName:["首页","关于","案例","联系"],homeShow:!0,aboutShow:!1,baseShow:!1,base1Show:!1,base2Show:!1,base3Show:!1,callShow:!1,nameActive:0,form:{name:"",phone:"",demand:""},mapData:{vid:"amap-vue",expandZoomRange:!0,position:[113.941717,22.527875],zoom:17}}},methods:{toICP:function(){window.open("http://www.beian.miit.gov.cn","_blank")},sumitClick:function(){var t=this;(function(t){return r()({method:"post",url:m.website.userInfo,data:t})})({name:t.form.name,phone:t.form.phone,demand:t.form.demand}).then(function(e){console.log(e,"..."),t.$message({message:"提交成功！",type:"success"})})},nameActiveClick:function(t,e){switch(this.nameActive=t,t){case 0:this.homeShow=!0,this.aboutShow=!1,this.baseShow=!1,this.callShow=!1;break;case 1:this.homeShow=!1,this.aboutShow=!0,this.baseShow=!1,this.callShow=!1;break;case 2:if(this.homeShow=!1,this.aboutShow=!1,this.baseShow=!0,this.callShow=!1,e)switch(e){case 1:this.base1Show=!0,this.base2Show=!1,this.base3Show=!1;break;case 2:this.base1Show=!1,this.base2Show=!0,this.base3Show=!1;break;case 3:this.base1Show=!1,this.base2Show=!1,this.base3Show=!0}else this.base1Show=!0,this.base2Show=!1,this.base3Show=!1;break;case 3:this.homeShow=!1,this.aboutShow=!1,this.baseShow=!1,this.callShow=!0}}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"header"},[t._m(0),t._v(" "),i("div",{staticClass:"btn"},t._l(t.btnName,function(e,a){return i("p",{key:a,class:{name_active:t.nameActive==a},on:{click:function(e){t.nameActiveClick(a)}}},[t._v(t._s(e))])}))]),t._v(" "),t.homeShow?i("div",{staticClass:"home"},[i("div",{staticClass:"banner"},[i("el-carousel",{attrs:{height:"960px"}},[i("el-carousel-item",[i("img",{attrs:{src:a("28cY")},on:{click:function(e){t.nameActiveClick(2,3)}}})]),t._v(" "),i("el-carousel-item",[i("img",{attrs:{src:a("86Gk")},on:{click:function(e){t.nameActiveClick(2,3)}}})])],1)],1),t._v(" "),i("div",{staticClass:"content"},[i("img",{attrs:{src:a("5qxR"),alt:""}}),t._v(" "),i("img",{attrs:{src:a("6Wb8"),alt:""}}),t._v(" "),i("img",{attrs:{src:a("duWq")},on:{click:function(e){t.nameActiveClick(2,2)}}}),t._v(" "),i("img",{attrs:{src:a("eRFE")},on:{click:function(e){t.nameActiveClick(2,1)}}})])]):t._e(),t._v(" "),t.aboutShow?i("div",{staticClass:"about"},[t._m(1)]):t._e(),t._v(" "),t.baseShow?i("div",{staticClass:"base"},[t.base1Show?i("div",[i("img",{attrs:{src:a("z5g4"),alt:""}})]):t._e(),t._v(" "),t.base2Show?i("div",[i("img",{attrs:{src:a("LBzq"),alt:""}})]):t._e(),t._v(" "),t.base3Show?i("div",[i("img",{attrs:{src:a("zjET"),alt:""}})]):t._e()]):t._e(),t._v(" "),t.callShow?i("div",{staticClass:"call"},[i("div",[i("img",{attrs:{src:a("3zR1"),alt:""}}),t._v(" "),i("div",{staticClass:"form"},[i("div",{staticClass:"form_top"},[i("div",[t._m(2),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),i("div",{staticStyle:{"margin-left":"300px"}},[t._m(3),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],attrs:{type:"text"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form_bottom"},[i("div",[t._m(4),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.demand,expression:"form.demand"}],attrs:{type:"text"},domProps:{value:t.form.demand},on:{input:function(e){e.target.composing||t.$set(t.form,"demand",e.target.value)}}})])]),t._v(" "),i("el-button",{staticStyle:{"margin-left":"410px",width:"130px","margin-top":"56px",background:"#edebec"},on:{click:t.sumitClick}},[t._v("提交")])],1)]),t._v(" "),i("div",{staticClass:"amap-wrapper"},[i("el-amap",{staticClass:"amap-box",attrs:{vid:t.mapData.vid,expandZoomRange:t.mapData.expandZoomRange,zoom:t.mapData.zoom,center:t.mapData.position}},[i("el-amap-marker",{attrs:{position:t.mapData.position}})],1)],1)]):t._e(),t._v(" "),i("div",{staticClass:"bottom"},[i("img",{staticStyle:{width:"132px","margin-left":"226px","margin-top":"28px"},attrs:{src:a("Ev/r")}}),t._v(" "),i("div",{staticStyle:{width:"800px"}},[i("p",{staticStyle:{color:"#393939","font-weight":"600"}},[t._v("联系我们")]),t._v(" "),i("p",{staticStyle:{color:"#3fb1ed"}},[t._v("电话：0755-86520884")]),t._v(" "),i("p",{staticStyle:{color:"#636363"}},[t._v("网址：www.pd-unixe.com")]),t._v(" "),i("p",{staticStyle:{color:"#636363"}},[t._v("地址：深圳市南山区西北工业大学三航科技大厦1118室")]),t._v(" "),i("p",{staticStyle:{color:"#3fb1ed",cursor:"pointer"},on:{click:t.toICP}},[t._v("备案号：粤ICP备15079084号")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{width:"72px"},attrs:{src:a("Ev/r")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"img_box"},[i("img",{attrs:{src:a("rjhb"),alt:""}}),t._v(" "),i("img",{attrs:{src:a("uKLF"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",[t._v("●")]),t._v("姓名")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",[t._v("●")]),t._v("手机")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",[t._v("●")]),t._v("你的需求")])}]},h=a("C7Lr")(l,p,!1,function(t){a("jBDI")},"data-v-452a7fd8",null).exports;i.default.use(n.a);var u=new n.a({routes:[{path:"/",redirect:"/website/home",name:"Home"},{path:"/website/home",name:"WebsiteHome",component:h,meta:{title:"优逸电子科技"}}]}),v=u;u.beforeEach(function(t,e,a){window.scroll(0,0),t.meta.title&&(document.title=t.meta.title),a()});var d=a("kGj0"),f=a.n(d),b=a("DVuL"),_=a.n(b);a("LicG"),a("Qbok"),i.default.use(_.a),i.default.use(f.a),f.a.initAMapApiLoader({key:"294a392937d9805b4df1524ee4bb0377",plugin:[],v:"1.4.4"}),i.default.config.productionTip=!1,new i.default({el:"#app",router:v,components:{App:o},template:"<App/>"})},Qbok:function(t,e){},duWq:function(t,e,a){t.exports=a.p+"static/img/home3.668942e.jpg"},eRFE:function(t,e,a){t.exports=a.p+"static/img/home4.eadd3dd.jpg"},jBDI:function(t,e){},rjhb:function(t,e,a){t.exports=a.p+"static/img/about1.bee15d9.png"},uKLF:function(t,e,a){t.exports=a.p+"static/img/about2.4789230.jpg"},z5g4:function(t,e,a){t.exports=a.p+"static/img/base1.05c820e.jpg"},zjET:function(t,e,a){t.exports=a.p+"static/img/base3.18ee107.jpg"}},["NHnr"]);