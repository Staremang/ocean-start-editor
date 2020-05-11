<template>
  <div>
    <v-navigation-drawer
      app
      clipped
    >
      <SlidesPreview />
    </v-navigation-drawer>

    <v-content>
      <Viewer />
    </v-content>

    <!--<v-content class="slides-viewer">-->
    <!--  <Workspace>-->
    <!--    <Viewer :style="{ width: '1920px' }" />-->
    <!--  </Workspace>-->
    <!--</v-content>-->
  </div>
</template>

<script>
import SlidesPreview from '../components/editor/SlidesPreview'
import Workspace from '../components/editor/Workspace'
import Viewer from '../components/Viewer'
// import Preview from '../components/Preview2'

export default {
  name: 'EditorSpace',
  provide: {
    editable: true
  },
  components: {
    SlidesPreview,
    Viewer,
    Workspace
    // Preview
  }
}
</script>

<style scoped lang="scss">
.slides-viewer {
  height: 100vh;
  overflow: hidden;
}
</style>
