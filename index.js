import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import $ from "jquery";
window.$ = $;
//使用vuex
Vue.use(Vuex);
//使用VueRouter
Vue.use(VueRouter);
window.bus = new Vue();
import xheader from './resourse/component/xheader.vue';
import xpanle from './resourse/component/xpanle.vue';
//导航条
import xnav from './resourse/component/xnav.vue';
//频道
import xchannel from './resourse/component/xchannel.vue';
import xfooter from './resourse/component/xfooter.vue';
import xcarousel from './resourse/component/xcarousel.vue';
import ximages from './resourse/component/ximages.vue';
import xloading from './resourse/component/xloading.vue';
import xsearch from './resourse/component/xsearch.vue';
import xdetail_header from './resourse/component/xdetail_header.vue';
import xlogin from './resourse/component/xlogin.vue';
import xregister from './resourse/component/xregister.vue';
import xdetail_footer from './resourse/component/xdetail_footer.vue';
import xdetail from "./resourse/component/xdetail.vue";
import login from "./resourse/component/login.vue";
import newsDetail from "./resourse/component/newsDetail.vue";
import newsLogin from "./resourse/component/newsLogin.vue";
import newsRegister from "./resourse/component/newsRegister.vue";
let router = new VueRouter({
	routes:[
	{	path:'/',
		component:xpanle,
		redirect: '/index'
	}
	,{
		path:"/index",
		component:xpanle,
	},{
		path:"/channel",
		component:xchannel,
	},{
		path:"/images",
		component:ximages,
	},{
		path:'/newsDetail',
		component:newsDetail,
	},{
		path:'/newsLogin',
		component:newsLogin,
	},{
		path:'/newsRegister',
		component:newsRegister,
	}]
});
let store = new Vuex.Store({
	state:{
		type:'新闻',
		bool:false,
		newslist:[],
		search:'',
		title:'',
		img:'',
		source:'',
		
	}
})
//主页
let index=new Vue({
	el:'#app',
	router,
	store,
	data:{
		
	},
	template:`
	<div>
		<router-view></router-view>
	</div>
	`,
	components:{
		xheader,
		xcarousel,
		xnav,
		xsearch,
		xpanle,
		xchannel,
		xfooter,
		xloading,
		xdetail,
		newsDetail,
		newsLogin,
		
		
	},
});
