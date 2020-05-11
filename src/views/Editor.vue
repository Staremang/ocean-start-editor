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
          <!--<v-list-item-action>-->
          <!--  <v-icon color="grey darken-1">-->
          <!--    edit-->
          <!--  </v-icon>-->
          <!--</v-list-item-action>-->
          <v-list-item-title class="grey--text text--darken-1">
            Editor
          </v-list-item-title>
        </v-list-item>

        <v-list-item
          to="/preview"
          target="_blank"
        >
          <!--<v-list-item-action>-->
          <!--  <v-icon color="grey darken-1">-->
          <!--    pageview-->
          <!--  </v-icon>-->
          <!--</v-list-item-action>-->
          <v-list-item-title class="grey--text text--darken-1">
            Preview
          </v-list-item-title>
          <v-list-item-icon>
            <v-icon>
              open_in_new
            </v-icon>
          </v-list-item-icon>
        </v-list-item>

        <!--<v-list-item link>-->
        <!--  <v-list-item-action>-->
        <!--    <v-icon color="grey darken-1">-->
        <!--      mdi-settings-->
        <!--    </v-icon>-->
        <!--  </v-list-item-action>-->
        <!--  <v-list-item-title class="grey&#45;&#45;text text&#45;&#45;darken-1">-->
        <!--    Настройки-->
        <!--  </v-list-item-title>-->
        <!--</v-list-item>-->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      clipped-right
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />

      <v-btn
        :to="$route.name === 'editor-preview' ? { name: 'editor' } : { name: 'editor-preview' }"
        icon
      >
        <v-icon>{{ $route.name === 'editor-preview' ? 'fullscreen_exit': 'fullscreen' }}</v-icon>
      </v-btn>
      <!--<v-btn-->
      <!--  icon-->
      <!--  @click.stop="changeViewMode"-->
      <!--&gt;-->
      <!--  <v-icon>{{ preview ? 'fullscreen_exit': 'fullscreen' }}</v-icon>-->
      <!--</v-btn>-->

      <v-btn
        v-show="!isSaved"
        icon
        :loading="saveStatus === 'loading'"
        @click.stop="save"
      >
        <v-icon>save</v-icon>
      </v-btn>

      <v-btn
        icon
        :loading="printStatus === 'loading'"
        @click="print"
      >
        <v-icon>print</v-icon>
      </v-btn>
    </v-app-bar>

    <router-view />

    <!--<template v-if="preview">-->
    <!--  <NewComponent />-->
    <!--</template>-->

    <!--<template v-else>-->
    <!--  <NewComp2 />-->
    <!--</template>-->

    <!--<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">-->
    <!--  <v-card>-->
    <!--    <v-toolbar dark color="primary">-->
    <!--      <v-btn icon dark @click="dialog = false">-->
    <!--        <v-icon>mdi-close</v-icon>-->
    <!--      </v-btn>-->
    <!--      <v-toolbar-title>Settings</v-toolbar-title>-->
    <!--      <v-spacer></v-spacer>-->
    <!--      <v-toolbar-items>-->
    <!--        <v-btn dark text @click="dialog = false">Save</v-btn>-->
    <!--      </v-toolbar-items>-->
    <!--    </v-toolbar>-->

    <!--    <Viewer :editable="false" />-->
    <!--  </v-card>-->
    <!--</v-dialog>-->

    <!--<v-bottom-navigation app>-->
    <!--  1234-->
    <!--</v-bottom-navigation>-->
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Editor',
  provide: {
    editable: true
  },
  data () {
    return {
      drawer: null,
      dialog: false
      // preview: false
    }
  },
  computed: {
    ...mapState({
      isSaved: state => state.slides.isSaved,
      saveStatus: state => state.slides.saveStatus,
      title: state => state.slides.title,
      editable: state => state.slides.isEditable,
      preview: state => state.slides.isPreview,
      printStatus: state => state.app.printStatus
    })
  },
  methods: {
    ...mapActions({
      save: 'SAVE_PROJECT',
      changePreview: 'CHANGE_PREVIEW',
      changeEditable: 'CHANGE_EDITABLE'
    }),
    changeViewMode () {
      this.changePreview(!this.preview)
      // this.changePreview(true)
      // this.changeEditable(false)
    },
    print () {
      // this.preview = true
      // this.$store.commit('SET_PREVIEW', true)

      if (this.$route.name !== 'editor-preview') {
        this.$router.push({ name: 'editor-preview' })
      }

      this.$nextTick(function () {
        this.$root.$emit('print')
      })
    }
  }
}
</script>
