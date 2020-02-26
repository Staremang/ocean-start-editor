<template>
  <div class="tpl-about">
    <editor-menu-bubble :editor="editor" :keep-in-bounds="keepInBounds" v-slot="{ commands, isActive, menu }">
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
          bold
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          italic
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          code
        </button>

      </div>
    </editor-menu-bubble>

    <h1>{{ data.content.title }}</h1>
    <!--<p>{{ content.text }}</p>-->
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBubble } from 'tiptap'
import {
  Blockquote,
  Bold,
  BulletList,
  Code,
  CodeBlock,
  HardBreak,
  Heading,
  History,
  Italic,
  Link,
  ListItem,
  OrderedList,
  Strike,
  TodoItem,
  TodoList,
  Underline
} from 'tiptap-extensions'

export default {
  name: 'TplAbout',
  components: {
    EditorContent,
    EditorMenuBubble
  },
  props: {
    id: {
      type: Number
    },
    data: {
      type: Object
    }
    // text: {
    //   type: String,
    //   default: '<p>5 лет на рынке, 25 сотрудников в офисе в Нижнем Новгороде (головной офис) и Москве.</p>',
    // },
    // content: {
    //   type: Object,
    //   default: () => ({
    //     title: 'Мы - Риверстарт',
    //     text: '<p>5 лет на рынке, 25 сотрудников в офисе в Нижнем Новгороде (головной офис) и Москве.</p>'
    //   })
    // }
  },
  data () {
    return {
      keepInBounds: true,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: this.data.content.text,
        onUpdate: ({ getHTML }) => {
          // get new content on update
          // this.text = getHTML()
          this.data.content.text = getHTML()
          this.$store.dispatch('UPDATE_SLIDE', {
            id: this.id,
            data: this.data
          })
          // this.$emit('update:text', this.text)
          // this.$emit('update:content', this.content)
        }
      })
    }
  },
  // methods: {},
  // watch: {
  //   'data': {
  //     deep: true,
  //     handler(newVal, oldVal) {
  //       if(!newVal) return
  //
  //       // this.$store.dispatch('UPDATE_SLIDE', {
  //       //   id: this.id,
  //       //   data: newVal,
  //       // })
  //     }
  //   }
  // },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>
