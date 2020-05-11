<template>
  <div class="tpl-8">
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
          <h3>Типовая процедура взаимодействия при разработке или доработке сайта</h3>
          <ul>
            <li>
              <p><strong>Подписываем договор</strong> с приложениями (смета и календарный план-график работ).</p>
            </li>
            <li>
              <p><strong>Оплачивается аванс</strong> первого этапа работ (оплата производится поэтапно).</p>
            </li>
            <li>
              <p><strong>Назначаем менеджера проекта,</strong> который будет решать все вопросы — от
              бухгалтерских до интеграционных и дизайнерских. Его курирует аккаунт-менеджер —
              специалист по клиентскому счастью.</p>
            </li>
            <li>
              <p><strong>Проводим этап аналитики:</strong> мы проводим интервью Клиента, создаем черновики
              идей, делаем небольшой коллаж — «настроение» проекта (moodboard).</p>
            </li>
            <li>
              <p><strong>Пишем техническое задание</strong> на сайт, рисуем прототипы сайта.</p>
            </li>
          </ul>`
})

export default {
  name: 'Tpl8',
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
