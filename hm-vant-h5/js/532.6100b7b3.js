"use strict";(self["webpackChunkhm_vant_h5"]=self["webpackChunkhm_vant_h5"]||[]).push([[532],{9532:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"collect-page"},[e("van-nav-bar",{attrs:{title:"我的收藏"}}),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多数据了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t){return e("ArticleItem",{key:t.id,attrs:{item:t}})})),1)],1)},a=[],r=(n(4114),n(4754)),o={name:"CollectPage",data(){return{list:[],page:1,loading:!1,finished:!1}},methods:{async onLoad(){const{data:t}=await(0,r.AW)({page:this.page});console.log(t),this.list.push(...t.rows),this.page++,this.loading=!1,this.page>t.pageTotal&&(this.finished=!0)}}},s=o,p=n(1656),l=(0,p.A)(s,i,a,!1,null,"132cbdf3",null),u=l.exports},4754:function(t,e,n){n.d(e,{AW:function(){return p},WB:function(){return r},f:function(){return o},f0:function(){return l},km:function(){return s},vO:function(){return a}});var i=n(5067);const a=t=>i.A.get("interview/query",{params:{current:t.current||1,pageSize:t.pageSize||10,sorter:t.sorter}}),r=t=>i.A.get("interview/show",{params:{id:t}}),o=t=>i.A.post("interview/opt",{id:t,optType:1}),s=t=>i.A.post("interview/opt",{id:t,optType:2}),p=t=>i.A.get("interview/opt/list",{params:{page:t.page,pageSize:5,optType:2}}),l=t=>i.A.get("interview/opt/list",{params:{page:t.page,pageSize:5,optType:1}})}}]);
//# sourceMappingURL=532.6100b7b3.js.map