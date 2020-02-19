<template>
  <div class="slide">
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

    <div class="slide-header">
      <div class="container" v-html="title"></div>
    </div>

    <div class="slide-body">
      <div class="container">
        <editor-content :editor="editor" />
      </div>
    </div>

    <SlideFooter />
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
import SlideFooter from './SlideFooter'

export default {
  name: 'Slide',
  components: {
    SlideFooter,
    EditorContent,
    EditorMenuBubble
    // Icon,
  },
  props: {
    title: {
      type: String,
      default: '<h2>Title</h2>'
    },
    body: {
      type: String,
      default: ''
    }
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
        content: this.body
      })
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>
