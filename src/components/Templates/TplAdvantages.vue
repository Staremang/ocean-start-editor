<template>
  <div class="tpl-advantages">
    <div class="container">
      <TextEditor
        v-model="content.text"
        :editable="editable"
      />
    </div>
    <SlideFooter />
  </div>
</template>

<style lang="scss">
.tpl-advantages {
  padding-top: 110px;

  h1, h2, h3 {
    margin-bottom: 153px;
  }

  ul {
    font-size: 42px;
    letter-spacing: -0.01em;
    line-height: 60px;

    p {
      margin-bottom: 48px;
    }
  }

  table {
    p {
      margin-bottom: 0;
      font-size: 80px;
      letter-spacing: -0.02em;
    }

    h1 {
      margin-bottom: 0;
      font-size: 120px;
      font-weight: bold;
      letter-spacing: -0.05em;
    }

    td {
      vertical-align: baseline;
    }

    th {
      vertical-align: baseline;
    }
  }
}
</style>

<script>
import SlideFooter from '../SlideFooter'
import TextEditor from '../editor/TextEditor'
import myMixin from './mixin'

const content = () => ({
  text: `
          <h1>Коротко о том, почему мы</h1>
          <ul>
            <li>
              <p><strong>Фиксированная</strong> стоимость нормо-часа:</p>
            </li>
          </ul>
          <table>
            <tr>
              <th><h1><strong><span class="selected">1300 ₽/час</span></strong></h1></th>
              <td><strong>Разработка</strong></td>
            </tr>
            <tr>
              <th><h1><strong><span class="selected">2000 ₽/час</span></strong></h1></th>
              <td><strong>Консалтинг</strong></td>
            </tr>
          </table>`
})

export default {
  name: 'TplAdvantages',
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
.tpl-advantages {
  position: relative;

  &::before {
    content: url("../../assets/horizontal-line.png");
    position: absolute;
    left: 0;
    right: 0;
    top: 470px;
  }
}
</style>
