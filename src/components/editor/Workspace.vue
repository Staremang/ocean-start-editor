<template>
  <div class="workspace-container">
    <div class="zoom-control">
      <v-btn
        icon
        @click="zoomIn"
      >
        <v-icon>zoom_in</v-icon>
      </v-btn>
      <v-chip
        outlined
        class="mx-2"
      >
        {{ `${zoom}%` }}
      </v-chip>
      <v-btn
        icon
        @click="zoomOut"
      >
        <v-icon>zoom_out</v-icon>
      </v-btn>
    </div>
    <div
      class="workspace"
      :style="{ zoom: zoom / 100 }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
const MAX_ZOOM = 200
const MIN_ZOOM = 10

export default {
  name: 'Workspace',
  data () {
    return {
      zoom: 100
    }
  },
  methods: {
    zoomIn () {
      // Math.round((this.zoom + 0.1) * 10) / 10)
      if (this.zoom < MAX_ZOOM) {
        this.zoom += 10
      }
    },
    zoomOut () {
      // Math.round((this.zoom - 0.1) * 10) / 10)
      if (this.zoom > MIN_ZOOM) {
        this.zoom -= 10
      }
    }
  }
}
</script>

<style scoped lang="scss">
.workspace-container {
  width: 100%;
  height: 100%;
  padding: 15px;
  overflow: auto;
  text-align: center;
  background: #e5e5e5;
}

.workspace {
  display: inline-block;
  text-align: left;
}

.zoom-control {
  position: absolute;
  left: 30px;
  bottom: 30px;
  z-index: 1000;
}
</style>
