<template>
  <div class="tpl-person">
    <img src="../../assets/slide-10.jpg" alt="" class="tpl-person__bg">
    <div class="container">
      <div class="tpl-person__text">
        Предлагаю не откладывать<br>
        и определить первые шаги<br>
        для начала сотрудничества.
      </div>
      <div class="tpl-person__name">
        Андрей Никонов
      </div>
      <div class="tpl-person__post">
        CEO
      </div>
      <div class="tpl-person__contacts">
        <p><a href="tel:+7 920 251-99-28">+7 920 251-99-28</a></p>
        <p><a href="mailto:nikonov@riverstart.ru">nikonov@riverstart.ru</a></p>
      </div>
      <div class="tpl-person__social">
        <a href="#">FB</a> <a href="#">Telegram</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TplNikonov'
}
</script>

<style lang="scss">
.tpl-person {
  position: relative;
  z-index: 1;
  background: #111;
  color: #fff;
  padding-top: 150px;

  &__bg {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &__text {
    margin-bottom: 100px;
    font-size: 44px;
    line-height: 58px;
    color: #868686;
    letter-spacing: -0.01em;
  }

  &__name {
    font-family: 'Halvar Breit Md', sans-serif;
    font-weight: 500;
    font-size: 43px;
    line-height: 70px;
    letter-spacing: -0.02em;
  }

  &__post {
    font-size: 32px;
    line-height: 44px;
    letter-spacing: -0.01em;
    color: #868686;
  }

  &__contacts {
    margin-top: 66px;
    margin-bottom: 66px;

    p {
      margin-bottom: 10px;
    }

    a {
      color: #FFC700;
      font-size: 46px;
      line-height: 70px;
      font-family: 'Halvar Breitschrift', sans-serif;
      font-weight: bold;
      text-decoration: none;
      border-bottom: 2px dashed #414141;
    }
  }

  &__social {
    a {
      color: inherit;
      font-size: 38px;
      line-height: 70px;
      font-family: 'Halvar Breitschrift', sans-serif;
      font-weight: bold;
      text-decoration: none;
      margin-right: 45px;
      border-bottom: 2px solid #414141;
    }
  }
}
</style>
