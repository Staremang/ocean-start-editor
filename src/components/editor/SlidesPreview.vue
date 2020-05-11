<template>
  <v-list subheader>
    <v-subheader>Слайды</v-subheader>
    <draggable
      v-model="slides"
      animation="200"
      ghost-class="slide-preview_active"
    >
      <v-list-item
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="slide-preview"
        two-line
        @click="changeActiveSlide(slide)"
      >
        <v-list-item-avatar color="primary">
          <span class="white--text headline">{{ index + 1 }}</span>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="slide.id" />
          <v-list-item-subtitle v-text="slide.type" />
        </v-list-item-content>

        <v-list-item-action>
          <v-btn
            icon
            @click="remove(slide)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </draggable>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on }">
        <v-list-item v-on="on">
          <v-list-item-avatar>
            <v-icon color="grey darken-1">
              add_circle_outline
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="grey--text text--darken-1">
            Новый слайд
          </v-list-item-title>
        </v-list-item>
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
          <v-spacer />
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Отмена
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addSlide"
          >
            Добавить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-list>
</template>
<script>
import Draggable from 'vuedraggable'
import { mapActions } from 'vuex'
import templates from '../Templates'

export default {
  name: 'SlidesPreview',
  components: {
    Draggable
  },
  data () {
    const templatesArr = Object.values(templates)

    return {
      dialog: false,
      templates: templatesArr,
      activeTemplate: templatesArr[0]
    }
  },
  computed: {
    slides: {
      get () {
        return this.$store.state.slides.items
      },
      set (value) {
        this.$store.commit('SET_SLIDES', value)
      }
    }
  },
  methods: {
    ...mapActions({
      // addSlide: 'NEW_SLIDE',
      // changeActiveTpl: 'CHANGE_ACTIVE_TPL',
      remove: 'REMOVE_SLIDE',
      changeActiveSlide: 'CHANGE_ACTIVE_SLIDE'
      // moveSlide: 'MOVE_SLIDE',
    }),
    addSlide () {
      this.dialog = false
      this.$store.dispatch('NEW_SLIDE', this.activeTemplate)
    }
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
  }
}
</script>

<style lang="scss">
.slide-preview {
  //cursor: pointer;
  //&:hover {
  //  &::before {
  //    opacity: .04;
  //  }
  //}
  &_active {
    opacity: 0.5;
    background: #c8ebfb;
  }
}
</style>
