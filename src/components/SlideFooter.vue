<template>
  <div class="slide-footer">
    <a href="#">nikonov@riverstart.ru</a>
    <a
      href="#"
      class="ml-3"
    >+7 920 251-99-28</a>
    <a
      href="#"
      class="ml-auto"
    >oceanstart.dev</a>
  </div>
</template>

<script>
export default {
  name: 'SlideFooter'
}
</script>

<style lang="scss">
.slide-footer {
  display: flex;
  margin-top: auto;
  padding: 52px 66px;
  color: #717171;
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 25px;
  text-transform: uppercase;

  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
