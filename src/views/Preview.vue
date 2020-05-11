<template>
  <div
    v-resize="onResize"
    :style="{ zoom: width / 1920 }"
    class="page-wrapper"
  >
    <div
      v-for="slide in slides"
      :key="slide.id"
      class="page"
    >
      <Slide :slide="slide" />
    </div>
  </div>
</template>

<script>
import Slide from '../components/Slide.vue'
import { mapState } from 'vuex'

export default {
  name: 'Preview',
  components: {
    Slide
  },
  data () {
    return {
      width: 1920
    }
  },
  computed: {
    ...mapState({
      slides: state => state.slides.items
    })
  },
  methods: {
    onResize () {
      this.width = document.documentElement.clientWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  overflow: hidden;
}

.page {
  margin-bottom: 20px;
}
</style>
