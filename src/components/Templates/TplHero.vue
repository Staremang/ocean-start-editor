<template>
  <div class="tpl-hero">
    <img
      class="tpl-hero__bg"
      src="../../assets/slide-1.jpg"
      alt=""
    >
    <div class="container">
      <div class="tpl-hero__header">
        <img
          class="tpl-hero__logo"
          src="@/assets/river-logo.png"
          alt="Риверстарт"
        >
      </div>
      <TextEditor
        v-model="content.text"
        :editable="editable"
      />
    </div>
  </div>
</template>

<script>
import TextEditor from '../editor/TextEditor'
import myMixin from './mixin'

const content = () => ({
  text: `<h1>Коммерческое <br> <span class="selected">предложение</span></h1>
      <p>Разработке e-commerce<br> решения для компании Jolie <br><br></p>
      <p>
        <img src="${require('@/assets/jolie-logo.png')}" alt="">
      </p>`
})

export default {
  name: 'TplHero',
  components: {
    TextEditor
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
.tpl-hero {
  position: relative;
  z-index: 1;

  h1 {
    margin-bottom: 64px;
  }

  p {
    font-size: 42px;
    line-height: 60px;
  }

  &__bg {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &__header {
    height: 296px;
    padding-top: 125px;
  }

  &__logo {
    width: 218px;
  }
}
</style>
