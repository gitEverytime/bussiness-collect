import Vue from 'vue'
import Router from 'vue-router'
import store from './vuex/index.js'
const storage = window.localStorage;
Vue.use(Router);

const vm = new Vue({
	store
});

const router = new Router({
	routes: [
		{
			path: '/',
			redirect: '/collect/page',
		},
		/**
		 * 选择页面
		 */
		{
			path: '/select/pages',
			component:(resolve) => require(['@/entries/index/views/SelectPages.vue'],resolve),
			meta:{
				title:"选择模版"
			},
		},
		/**
		 * 制作页面
		 */
		{
			path: '/make/page/:type/:status',
			component:(resolve) => require(['@/entries/index/views/MakePage.vue'],resolve),
			meta:{
				title:"制作页面"
			},
		},
		/**
		 * banner编辑页面
		 */
		{
			path: '/make/banner/:type/',
			component:(resolve) => require(['@/entries/index/views/BannerPage.vue'],resolve),
			meta:{
				title:"制作Banner页面"
			},
		},
		/**
		 * title编辑页面
		 */
		{
			path: '/title/banner/:type/:index',
			component:(resolve) => require(['@/entries/index/views/TitlePage.vue'],resolve),
			meta:{
				title:"制作title页面"
			},
		},
		/**
		 * 选择组件
		 */
		{
			path: '/choose/comp/:type/:index/:status',
			component:(resolve) => require(['@/entries/index/views/ChooseComp.vue'],resolve),
			meta:{
				title:"选择组件"
			},
		},
		/**
		 * 预览页面
		 */
		{
			path: '/preview/page/:type/:index/:status',
			component:(resolve) => require(['@/entries/index/views/PreviewPage.vue'],resolve),
			meta:{
				title:"预览页面"
			},
		},
		/**
		 * 高级配置
		 */
		{
			path: '/highconfig/page/:type/:index/:status',
			component:(resolve) => require(['@/entries/index/views/HighConfigPage.vue'],resolve),
			meta:{
				title:"高级配置"
			},
		},
		/**
		 * 生成海报
		 */
		{
			path: '/poster/page/:type/:index/:status',
			component:(resolve) => require(['@/entries/index/views/PosterPage.vue'],resolve),
			meta:{
				title:"生成海报"
			},
		},
		/**
		 * 商机揽收
		 */
		{
			path: '/collect/page',
			component:(resolve) => require(['@/entries/index/views/BusinessCollectPage.vue'],resolve),
			meta:{
				title:"商机揽收"
			},
		},
		/**
		 * 新建收集表
		 */
		{
			path: '/build/page/:type/:index/:status',
			component:(resolve) => require(['@/entries/index/views/PageList.vue'],resolve),
			meta:{
				title:"新建收集表"
			},
		},
		/**
		 * 高级设置
		 */
		{
			path: '/hignset/page/:type/:index/:f_type',
			component:(resolve) => require(['@/entries/index/views/HignSetPage.vue'],resolve),
			meta:{
				title:"新建收集表"
			},
		},
	]
});
/**
 * 当路由开始跳转时
 *
 */
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
});
/**
 * 当路由跳转结束后
 */
router.afterEach(() => {
});
export default router;