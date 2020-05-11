<template>
  <router-view />
</template>

<script>
// import SlidesPreview from './components/SlidesPreview'

export default {
  name: 'App',
  // components: {
  //   SlidesPreview
  // },
  // inject: {
  //   editable: {
  //     default: true
  //   }
  // },

  // provide: {
  //   editable: false
  // },
  data () {
    return {
      drawer: null
    }
  },

  mounted () {
    // this.$store.dispatch('GET_PROJECT')
  },

  beforeDestroy () {
  },

  methods: {}
}
</script>
