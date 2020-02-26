<template>
  <div>
    <v-list two-line>
      <v-subheader>Slides</v-subheader>
      <draggable
        v-model="slides"
        animation="200"
        ghost-class="slide-preview_active"
      >
        <v-list-item
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="slide-preview"
          @click="changeActiveSlide(slide)"
        >
          <!--<v-list-item-avatar>-->
          <!--  <v-icon class="grey lighten-1 white&#45;&#45;text">{{ index }}</v-icon>-->
          <!--  &lt;!&ndash;<v-icon>mdi-drag-horizontal-variant</v-icon>&ndash;&gt;-->
          <!--</v-list-item-avatar>-->
          <v-list-item-content>
            <v-list-item-title v-text="slide.id" />
            <v-list-item-subtitle v-text="slide.type" />
          </v-list-item-content>

          <v-list-item-action>
            <!--<v-list-item-action-text>{{ index < 10 ? `0${index}` : index }}</v-list-item-action-text>-->
            <v-btn
              icon
              @click="remove(slide)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </draggable>
      <!--<template v-else v-for="(slide, index) in slides">-->
      <!--  <v-list-item :key="slide.id">-->
      <!--    <v-list-item-content>-->
      <!--      <v-list-item-title v-text="slide.id"></v-list-item-title>-->
      <!--      <v-list-item-subtitle v-text="slide.type"></v-list-item-subtitle>-->
      <!--    </v-list-item-content>-->

      <!--    <v-list-item-action>-->
      <!--      <v-btn icon @click="remove(slide)">-->
      <!--        <v-icon>mdi-delete</v-icon>-->
      <!--      </v-btn>-->
      <!--    </v-list-item-action>-->
      <!--  </v-list-item>-->
      <!--  &lt;!&ndash;<v-divider v-if="index + 1 < slides.length" :key="index" draggable="false" />&ndash;&gt;-->
      <!--</template>-->
    </v-list>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          fab
          absolute
          right
          style="bottom: 16px"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Добавить новый слайд</span>
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="activeTemplate"
            :items="templates"
            :item-text="'alias'"
            :return-object="true"
            outlined
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">Отмена</v-btn>
          <v-btn color="blue darken-1" text @click="addSlide">Добавить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import Draggable from 'vuedraggable'
import { mapActions } from 'vuex'
import templates from './Templates'

export default {
  name: 'SlidesPreview',
  components: {
    Draggable,
  },
  data () {
    const templatesArr = Object.values(templates)

    return {
      dialog: false,
      templates: templatesArr,
      activeTemplate: templatesArr[0],
    }
  },
  computed: {
    slides: {
      get () {
        return this.$store.state.slides.items
      },
      set (value) {
        // this.$store.commit('SET_SLIDES', value.filter(item => !!item))
        this.$store.commit('SET_SLIDES', value)
      },
    },
  },
  methods: {
    ...mapActions({
      // addSlide: 'NEW_SLIDE',
      // changeActiveTpl: 'CHANGE_ACTIVE_TPL',
      remove: 'REMOVE_SLIDE',
      changeActiveSlide: 'CHANGE_ACTIVE_SLIDE',
      // moveSlide: 'MOVE_SLIDE',
    }),
    addSlide () {
      this.dialog = false
      this.$store.dispatch('NEW_SLIDE', this.activeTemplate)
    },
    // getComponentData () {
    //   return {
    //     on: {
    //       change: this.changeActiveSlide,
    //       // input: this.inputChanged
    //     },
    //     // attrs:{
    //     //   wrap: true
    //     // },
    //     props: {
    //       value: this.$store.state.slides.activeSlide,
    //     },
    //   }
    // },
  },
}
</script>
