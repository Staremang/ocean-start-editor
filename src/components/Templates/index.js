const templates = {
  'tpl-hero': {
    alias: '1) Главная',
    type: 'tpl-hero',
    component: () => import(/* webpackChunkName: "tpl-hero" */'./TplHero.vue')
  },
  'tpl-about': {
    alias: '2) Пару слов о нас',
    type: 'tpl-about',
    component: () => import(/* webpackChunkName: "tpl-about" */'./TplAbout.vue')
  },
  'tpl-about-2': {
    alias: '3) Пару слов о нас (продолжение)',
    type: 'tpl-about-2',
    component: () => import(/* webpackChunkName: "tpl-about" */'./TplAbout2.vue')
  },
  'tpl-clients': {
    alias: '4) С нами работают',
    type: 'tpl-clients',
    component: () => import(/* webpackChunkName: "tpl-clients" */'./TplClients.vue')
  },
  'tpl-advantages': {
    alias: '5) Коротко о том, почему мы',
    type: 'tpl-advantages',
    component: () => import(/* webpackChunkName: "tpl-advantages" */'./TplAdvantages.vue')
  },
  'tpl-advantages-2': {
    alias: '6) Коротко о том, почему мы (продолжение)',
    type: 'tpl-advantages-2',
    component: () => import(/* webpackChunkName: "tpl-advantages" */'./TplAdvantages2.vue')
  },
  'tpl-table': {
    alias: '7) Смета проекта',
    type: 'tpl-table',
    component: () => import(/* webpackChunkName: "tpl-table" */'./TplTable.vue')
  },
  'tpl-8': {
    alias: '8) Процедура взаимодействия',
    type: 'tpl-8',
    component: () => import(/* webpackChunkName: "tpl" */'./Tpl8.vue')
  },
  'tpl-9': {
    alias: '9) Процедура взаимодействия (продолжение)',
    type: 'tpl-9',
    component: () => import(/* webpackChunkName: "tpl" */'./Tpl9.vue')
  },
  'tpl-nikonov': {
    alias: '10) Никонов',
    type: 'tpl-nikonov',
    component: () => import(/* webpackChunkName: "tpl-person" */'./TplNikonov.vue')
  },
  'tpl-contacts': {
    alias: '11) Контакты',
    type: 'tpl-contacts',
    component: () => import(/* webpackChunkName: "tpl-contacts" */'./TplContacts.vue')
  },
}

export default templates
