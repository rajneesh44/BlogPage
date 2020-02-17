import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '@/components/blog.vue'
import Content from '@/components/Content.vue'
import Add from '@/components/add.vue'
import Single from '@/components/single.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/content',
    name: 'Content',
    component: Content
  },
  {
    path: '/',
    name: 'content',
    component: Content
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/:id',
    component: Single
  }
]

const router = new VueRouter({
  routes
})

export default router
