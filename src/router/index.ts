import { createRouter, RouteRecordRaw, createWebHashHistory, Router } from 'vue-router'
import IndexRoutes from './models'

const routes: Array<RouteRecordRaw> = [
	...IndexRoutes
]

const router: Router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router