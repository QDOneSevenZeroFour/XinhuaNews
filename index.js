import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
//使用vuex
Vue.use(Vuex);
//使用VueRouter
Vue.use(VueRouter);
import xheard from './resourse/component/xheard.vue';
import './resourse/css/heard.css';
//import './resourse'

let router = new VueRouter({
	routes:[{
		path:"/index",
		component:xheard,
	}]
});
let store = new Vuex.Store({
	state:{
		title:"vue-webpack"
	}
})

new Vue({
	el:'#app',
	router,
	store,
	data:{
		name:'今日头条',
		txt:require('./resourse/txt/data.txt'),
		img:require('./resourse/images/img5.jpg')
	},
//	template:require('./index.html'),
	template:`
	<div>
		<router-view></router-view>
		<xheard></xheard>
		<p>dskan</p>
	</div>
	`,
	components:{
		xheard,
	},
	methods:{
		
	}
})
