<template>
  <div>
    <editor-menu-bubble
      v-if="editor.options.editable"
      v-slot="{ commands, isActive, menu, getMarkAttrs }"
      :editor="editor"
      :keep-in-bounds="keepInBounds"
    >
      <div
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >
        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <!--<v-icon color="white">mdi-format-bold</v-icon>-->
          <v-icon color="white">
            format_bold
          </v-icon>
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <v-icon dark>
            format_italic
          </v-icon>
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <v-icon dark>
            format_underlined
          </v-icon>
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.selected() }"
          @click="commands.selected"
        >
          <!--<v-icon color="white">mdi-format-color-fill</v-icon>-->

          <v-row
            no-gutters
            align="center"
            class="flex-column"
            justify="center"
          >
            <v-icon color="white cols 12">
              text_format
            </v-icon>
            <v-sheet
              tile
              style="margin-top: -4px;"
              height="4"
              width="26"
              color="#1301f0"
            />
          </v-row>
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          P
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <v-icon dark>
            format_list_bulleted
          </v-icon>
        </button>

        <button
          class="menububble__button"
          @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
        >
          <v-icon dark>
            border_all
          </v-icon>
        </button>

        <button
          class="menububble__button"
          @click="showImagePrompt(commands.image)"
        >
          image
        </button>

        <!--<span v-if="isActive.table()">-->
        <!--  <button-->
        <!--    class="menububble__button"-->
        <!--    @click="commands.deleteTable"-->
        <!--  >-->
        <!--    <icon name="delete_table" />-->
        <!--  </button>-->
        <!--  <button-->
        <!--    class="menububble__button"-->
        <!--    @click="commands.addColumnBefore"-->
        <!--  >-->
        <!--    <icon name="add_col_before" />-->
        <!--  </button>-->
        <!--  <button-->
        <!--    class="menububble__button"-->
        <!--    @click="commands.addColumnAfter"-->
        <!--  >-->
        <!--    <icon name="add_col_after" />-->
        <!--  </button>-->
        <!--  <button-->
        <!--    class="menububble__button"-->
        <!--    @click="commands.deleteColumn"-->
        <!--  >-->
        <!--    <icon name="delete_col" />-->
        <!--  </button>-->
        <!--  <button-->
        <!--    class="menububble__button"-->
        <!--    @click="commands.addRowBefore"-->
        <!--  >-->
        <!--    <icon name="add_row_before" />-->
        <!--  </button>-->
        <!--  <button-->
        <!--    class="menububble__button"-->
        <!--    @click="commands.addRowAfter"-->
        <!--  >-->
        <!--    <icon name="add_row_after" />-->
        <!--  </button>-->
        <!--  <button-->
        <!--    class="menububble__button"-->
        <!--    @click="commands.deleteRow"-->
        <!--  >-->
        <!--    <icon name="delete_row" />-->
        <!--  </button>-->
        <!--  <button-->
        <!--    class="menububble__button"-->
        <!--    @click="commands.toggleCellMerge"-->
        <!--  >-->
        <!--    <icon name="combine_cells" />-->
        <!--  </button>-->
        <!--</span>-->

        <!--<v-item-group-->
        <!--  dense-->
        <!--  dark-->
        <!--  multiple-->
        <!--&gt;-->
        <!--  <v-btn-->
        <!--    :class="{ 'v-btn&#45;&#45;active': isActive.bold() }"-->
        <!--    @click="commands.bold"-->
        <!--  >-->
        <!--    <v-icon>-->
        <!--      mdi-format-bold-->
        <!--    </v-icon>-->
        <!--  </v-btn>-->

        <!--  <v-btn-->
        <!--    @click="commands.italic"-->
        <!--  >-->
        <!--    <v-icon>mdi-format-italic</v-icon>-->
        <!--  </v-btn>-->

        <!--  <v-btn-->
        <!--    @click="commands.underline"-->
        <!--  >-->
        <!--    <v-icon>mdi-format-underline</v-icon>-->
        <!--  </v-btn>-->

        <!--  <v-btn-->
        <!--    @click="commands.selected"-->
        <!--  >-->
        <!--    <v-icon>mdi-format-color-fill</v-icon>-->
        <!--  </v-btn>-->

        <!--</v-item-group>-->

        <!--<button-->
        <!--  class="menububble__button"-->
        <!--  :class="{ 'is-active': getMarkAttrs('color').color }"-->
        <!--  @click="commands.color({ color: getMarkAttrs('color').color ? '' : '#1301f0' })"-->
        <!--&gt;-->
        <!--  blue-->
        <!--</button>-->
      </div>
    </editor-menu-bubble>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex'

import {
  Editor,
  EditorContent,
  EditorMenuBubble
} from 'tiptap'

import {
  // Blockquote,
  Bold,
  BulletList,
  // Code,
  // CodeBlock,
  HardBreak,
  Heading,
  History,
  Italic,
  Link,
  ListItem,
  OrderedList,
  Strike,
  // TodoItem,
  // TodoList,
  Underline,
  Image,

  Table,
  TableHeader,
  TableCell,
  TableRow
} from 'tiptap-extensions'

import {
  Selected
} from '../../plugins/tiptap-extensions'

// const getChildrenTextContent = (children) => {
//   return children.map((node) => {
//     return node.children
//       ? getChildrenTextContent(node.children)
//       : node.text
//   }).join('')
// }

export default {
  name: 'TextEditor',
  // provide: {
  //   editable
  // },
  // inject: {
  //   editable: {
  //     default: false
  //   }
  // },
  components: {
    EditorContent,
    EditorMenuBubble
  },
  // created () {
  //   console.log(this.$slots)
  //   console.log(getChildrenTextContent(this.$slots.default))
  // },
  props: {
    value: {
      type: String,
      default: ''
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      // ...mapState({
      //   editable: state => state.slides.isEditable,
      //   preview: state => state.slides.isPreview,
      // }),
      keepInBounds: true,
      editor: new Editor({
        editable: this.editable,
        content: this.value,
        extensions: [
          // new Blockquote(),
          new BulletList(),
          // new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          // new TodoItem(),
          // new TodoList(),
          new Link(),
          new Bold(),
          // new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Image(),

          new Table({
            resizable: true
          }),
          new TableHeader(),
          new TableCell(),
          new TableRow(),

          new Selected()
        ],
        onUpdate: ({ getHTML }) => {
          // this.$emit('update:content', getHTML())
          this.$emit('input', getHTML())
        }
        // onInit: () => {
        //   this.$emit('')
        // },
      })
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    showImagePrompt (command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    }
  }
}
</script>

<style lang="scss">
.menububble {
  display: flex;
  visibility: hidden;
  position: absolute;
  z-index: 20;
  margin-bottom: .5rem;
  padding: .3rem;
  transform: translateX(-50%);
  transition: opacity .2s, visibility .2s;
  border-radius: 5px;
  opacity: 0;
  background: #000;
}

.menububble.is-active {
  visibility: visible;
  opacity: 1;
}

.menububble__button {
  display: inline-flex;
  margin-right: .2rem;
  padding: .2rem .5rem;
  border: 0;
  border-radius: 3px;
  background: transparent;
  color: #fff;
  cursor: pointer
}

.menububble__button:last-child {
  margin-right: 0
}

.menububble__button:hover {
  background-color: hsla(0, 0%, 100%, .1)
}

.menububble__button.is-active {
  background-color: hsla(0, 0%, 100%, .2)
}

</style>
