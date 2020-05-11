<template>
  <div class="tpl-about-2">
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
import TextEditor from '../editor/TextEditor'
import SlideFooter from '../SlideFooter'
import myMixin from './mixin'

const content = () => ({
  text: `
    <h3>Пару слов о нас</h3>
    <p>
      Лучше всего мы создаем и поддерживаем сложные веб-проекты:
      <br>
      <span class="selected">e-commerce</span>, <span class="selected">CRM</span> и <span class="selected">ERP</span>-системы, <span class="selected">личные кабинеты</span> и <span class="selected">b2b</span>-порталы.
      <br>
      Пишем <span class="selected">API</span>, разрабатываем микросервисную архитектуру приложений и настраиваем это под высокие нагрузки.
    </p>
    <p>
      В дополнение к браузерным решениям мы создаем мобильные приложения, а также помогаем
      нашим клиентам с юзабилити-аудитом, продвижением и маркетинговой стратегией. Методологии
      разработки: <span class="selected">Waterfall</span>, <span class="selected">Agile</span>.
    </p>`
})
export default {
  name: 'TplAbout2',
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
  },
}
</script>


<style lang="scss">
.tpl-about-2 {
  padding-top: 120px;

  h3 {
    margin-bottom: 100px;
  }

  p {
    margin-bottom: 58px;
    font-size: 42px;
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 58px;
  }
}
</style>
