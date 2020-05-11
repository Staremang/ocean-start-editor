<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <!--<v-list-item-avatar>-->
          <!--  &lt;!&ndash;<img src="https://randomuser.me/api/portraits/men/81.jpg">&ndash;&gt;-->
          <!--</v-list-item-avatar>-->

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider />

      <v-list nav>
        <v-list-item to="/editor">
          <v-list-item-action>
            <v-icon color="grey darken-1">
              mdi-pencil
            </v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">
            Editor
          </v-list-item-title>
        </v-list-item>

        <v-list-item to="/preview">
          <v-list-item-action>
            <v-icon color="grey darken-1">
              mdi-information
            </v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">
            Preview
          </v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">
              mdi-settings
            </v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">
            Настройки
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      clipped-right
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>КП Liana</v-toolbar-title>
      <v-spacer />
      <v-btn
        class="ma-2"
        icon
        @click="$root.$emit('print')"
      >
        <v-icon>mdi-printer</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
    >
      <SlidesPreview />
    </v-navigation-drawer>

    <v-content class="slides-viewer">
      <Workspace>
        <router-view />
      </Workspace>
    </v-content>

    <v-navigation-drawer
      app
      clipped
      right
    >
      <SlidesPreview />
    </v-navigation-drawer>

    <!--<v-bottom-navigation app>-->
    <!--  1234-->
    <!--</v-bottom-navigation>-->
  </v-app>
</template>

<script>
import SlidesPreview from '../editor/SlidesPreview'
import Workspace from '../editor/Workspace'

export default {
  name: 'DefaultLayout',
  components: {
    SlidesPreview,
    Workspace
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style scoped>

</style>
