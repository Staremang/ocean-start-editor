<template>
  <div class="page-wrapper">
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
import Slide from './Slide.vue'
import { mapState } from 'vuex'

export default {
  name: 'Preview2',
  components: {
    Slide
  },
  computed: {
    ...mapState({
      slides: state => state.slides.items
    })
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
