<template>
  <div class="slide">
    <div class="slide-header">
      <div class="container" v-html="title">
        <h2>Title H2</h2>
        <p>paragraph</p>
      </div>
    </div>

    <div class="container">
      <div class="t-row" v-for="(row, index) in table" :key="index">
        <div class="ttl">{{ row[0] }}</div>
        <div class="num">{{ row[1] }}</div>
        <div class="num">{{ row[2] }}</div>
        <div class="dsc">{{ row[3] }}</div>
      </div>
    </div>
    <form class="container" @submit.prevent="addRow">
      <div class="t-row pb-0">
        <div class="form-group">
          <label for="input1">Заголовок*</label>
          <input type="text" class="form-control" id="input1" placeholder="Заголовок" v-model="data.input1" required>
        </div>
        <div class="form-group">
          <label for="input2">Часы</label>
          <input type="text" class="form-control" id="input2" placeholder="40" v-model="data.input2">
        </div>
        <div class="form-group">
          <label for="input3">Цена*</label>
          <input type="text" class="form-control" id="input3" placeholder="140000" v-model="data.input3" required>
        </div>
        <div class="form-group">
          <label for="input4">Описание</label>
          <input type="text" class="form-control" id="input4" placeholder="Описание" v-model="data.input4">
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block">Добавить строку</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SlideTable',
  props: {
    title: {
      type: String,
      default: '<h1>Title</h1>'
    },
    table: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      data: {
        input1: '',
        input2: '',
        input3: '',
        input4: ''
      }
    }
  },
  methods: {
    addRow () {
      this.table.push([
        this.data.input1,
        this.data.input2,
        this.data.input3,
        this.data.input4
      ])

      this.data.input1 = ''
      this.data.input2 = ''
      this.data.input3 = ''
      this.data.input4 = ''
    }
  }
}
</script>
