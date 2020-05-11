<template>
  <div class="tpl-advantages-2">
    <div class="container">
      <TextEditor
        v-model="content.text"
        :editable="editable"
      />
    </div>

    <SlideFooter />
  </div>
</template>
<script>
import SlideFooter from '../SlideFooter'
import TextEditor from '../editor/TextEditor'
import myMixin from './mixin'

const content = () => ({
  text: `
          <h3>Коротко о том, почему мы</h3>
          <ul>
            <li>
              <p><strong>Тестировщики</strong> в штате обеспечат качественный продукт.</p>
            </li>
            <li>
              <p>Пожизненная <strong>гарантия</strong> на сайты. Мы пропишем ее в договоре.</p>
            </li>
            <li>
              <p>Вы не останетесь один на один с проблемами сайта.</p>
            </li>
            <li>
              <p>
                <strong>Техподдержка</strong> — треть оборота компании, и отлажена она превосходно.
                Мы будем развивать и поддерживать проект после запуска.
              </p>
            </li>
          </ul>`
})
export default {
  name: 'TplAdvantages2',
  components: {
    TextEditor,
    SlideFooter
  },
  mixins: [myMixin],
  props: {
    editable: {
      type: Boolean,
      default: true
    },
    value: {
      type: Object,
      default: content
    }
  }
}
</script>

<style lang="scss">
.tpl-advantages-2 {
  padding-top: 100px;

  h1, h2 {
    margin-bottom: 90px;
  }

  h3 {
    margin-bottom: 100px;
  }

  p {
    margin-bottom: 48px;
  }

  ul {
    font-size: 42px;
    letter-spacing: -0.01em;
    line-height: 60px;
  }
}
</style>
