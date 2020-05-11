<template>
  <v-content>
    <Viewer />
  </v-content>
</template>

<script>
import Viewer from '../components/Viewer'

export default {
  name: 'EditorPreview',
  provide: {
    editable: false
  },
  components: {
    Viewer
  }
}
</script>

<style scoped>

</style>
