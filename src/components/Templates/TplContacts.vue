<template>
  <div class="tpl-contacts">
    <div class="tpl-contacts__address">
      <address>
        <p>
          <small>Офис продаж</small>
        </p>
        <h1>Москва</h1>
        <p>
          Новая пл., 6
          <br>
          <span class="selected">8 (499) 112-46-21</span>
        </p>
      </address>

      <address>
        <p>
          <small>Офис разработки</small>
        </p>
        <h1>Нижний Новгород</h1>
        <p>
          ул. Рождественская, 26
          <br>
          <span class="selected">8 (831) 2-889-354</span>
        </p>
      </address>
    </div>
    <div class="tpl-contacts__mail">
      <a href="#">hello@riverstart.ru</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TplContacts'
}
</script>

<style lang="scss">
.tpl-contacts {
  padding-top: 200px;
  text-align: center;

  &__address {
    margin-bottom: 140px;
  }

  &__mail {
    a {
      font-family: 'Halvar Breitschrift', sans-serif;
      font-weight: bold;
      font-size: 132px;
      letter-spacing: -0.02em;
      color: #1301F0;
      text-decoration: none;
    }
  }

  address {
    display: inline-block;
    font-style: normal;
    text-align: left;
    margin: 0 110px;

    small {
      color: #707070;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    h1 {
      margin-bottom: 37px;

      ~ p {
        font-family: 'Halvar Breitschrift', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 60px;
        letter-spacing: -0.02em;
      }
    }
  }
}
</style>
