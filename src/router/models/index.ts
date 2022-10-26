import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'

const IndexRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Layout,
		redirect: '/home',
		meta: { title: '首页', icon: '', activeMenu: true },
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('views/home/index.vue')
			}
		]
	}
]

export default IndexRoutes