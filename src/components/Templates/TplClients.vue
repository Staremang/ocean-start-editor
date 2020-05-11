<template>
  <div class="tpl-clients">
    <div class="container">
      <h1>С нами работают</h1>
      <img
        src="@/assets/clients.png"
        alt=""
      >
    </div>

    <SlideFooter />
  </div>
</template>
<script>
import SlideFooter from '../SlideFooter'

export default {
  name: 'TplClients',
  components: {
    SlideFooter
  }
}
</script>

<style lang="scss">
.tpl-clients {
  padding-top: 160px;
  text-align: center;

  h1 {
    margin-bottom: 165px;
  }
}
</style>
