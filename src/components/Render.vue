<template>
  <div
    ref="slides"
    v-for="slide in slides"
    :key="slide.id"
    class="my-4"
  >
    <div class="slide">
      <component
        :is="templates[slide.type].component"
        :id="slide.id"
        :data="slide.data"
      ></component>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import templates from './Templates'

export default {
  name: 'Render',
  data () {
    return {
      templates
    }
  },
  computed: {
    ...mapState({
      slides: state => state.slides.items
    })
  }
}
</script>
