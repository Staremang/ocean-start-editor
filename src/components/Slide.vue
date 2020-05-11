<template>
  <component
    :is="templates[slide.type].component"
    v-model="content"
    :editable="editable"
    class="slide"
  />
</template>

<script>
// import { mapActions, mapState } from 'vuex'
import templates from './Templates'
import { cloneDeep } from 'lodash'

export default {
  name: 'Slide',
  inject: {
    editable: {
      default: false
    }
  },
  props: {
    slide: {
      type: Object,
      default: null
    }
    // editable: {
    //   type: Boolean,
    //   default: true
    // }
  },
  data () {
    return {
      templates: templates,
      // content:
      editable: this.editable
      // ...mapState({
      //   // editable: state => state.slides.isEditable,
      //   preview: state => state.slides.isPreview
      // })
    }
  },
  computed: {
    content: {
      get () {
        return this.slide.content
      },
      set (val) {
        if (this.editable) {
          console.log('onChange')
          this.$store.dispatch('UPDATE_SLIDE', {
            id: this.slide.id,
            content: cloneDeep(val)
          })
        }
      }
    }
  }
  // methods: {
  //   onChange (content) {
  //     // const data = this.data
  //     // data.content.text = content
  //     if (this.editable) {
  //       console.log('onChange')
  //
  //       this.$store.dispatch('UPDATE_SLIDE', {
  //         id: this.slide.id,
  //         // data: {
  //         //   ...this.slide.data,
  //         //   content
  //         // },
  //         content: cloneDeep(content)
  //         // content,
  //       })
  //     }
  //   }
  // }
}
</script>
