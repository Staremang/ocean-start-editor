export default {
  watch: {
    content: {
      immediate: true,
      deep: true,
      handler (val) {
        // this.$emit('update:content', val)
        this.$emit('input', val)
      }
    }
  },
  data () {
    return {
      content: { ...this.value }
    }
  }
}
