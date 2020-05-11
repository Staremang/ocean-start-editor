import Vue from 'vue'
import VueRouter from 'vue-router'

// import Viewer from '../components/Viewer.vue'
import Preview from '../views/Preview.vue'
import Editor from '../views/Editor.vue'
// import DefaultLayout from '../components/layout/DefaultLayout'
// import Layout from '../components/layout/Layout'
// import EditorSpace from '../views/EditorSpace.vue'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: to => {
        if (store.state.slides.isEditable) {
          return { name: 'editor' }
        }
        return { name: 'preview' }
      }
    },
    {
      path: '/editor',
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "editor" */ '../views/Editor.vue'),
      // component: Editor,
      // redirect: '/editor',
      children: [
        {
          path: '',
          name: 'editor',
          component: () => import(/* webpackChunkName: "editor" */ '../views/EditorSpace.vue')
          // component: Editor
        },
        {
          path: '/preview',
          name: 'editor-preview',
          // meta: { requiresAuth: true },
          component: () => import(/* webpackChunkName: "editor" */ '../views/EditorPreview.vue')
        }
      ]
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // этот путь требует авторизации, проверяем залогинен ли
    // пользователь, и если нет, перенаправляем на страницу логина

    if (!store.state.slides.isEditable) {
      next({ name: 'preview' })
    } else {
      next()
    }
  } else {
    next() // всегда так или иначе нужно вызвать next()!
  }
})

export default router
