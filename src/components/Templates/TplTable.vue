<template>
  <div class="tpl-table">
    <div class="tpl-table__header">
      <div class="container">
        <h2>Смета проекта</h2>
      </div>
    </div>
    <div class="tpl-table__body">
      <div
        v-if="editable"
        class="container"
      >
        <v-data-table
          :headers="filterHeaders"
          :items="content.table"
          disable-pagination
          disable-filtering
          disable-sort
          hide-default-footer
          group-by="group"
        >
          <!--<template v-slot:item.name="props">-->
          <!--  <v-edit-dialog-->
          <!--    :return-value.sync="props.item.name"-->
          <!--    @save="save"-->
          <!--    @cancel="cancel"-->
          <!--    @open="open"-->
          <!--    @close="close"-->
          <!--  > {{ props.item.name }}-->
          <!--    <template v-slot:input>-->
          <!--      <v-text-field-->
          <!--        v-model="props.item.name"-->
          <!--        :rules="[max25chars]"-->
          <!--        label="Edit"-->
          <!--        single-line-->
          <!--        counter-->
          <!--      ></v-text-field>-->
          <!--    </template>-->
          <!--  </v-edit-dialog>-->
          <!--</template>-->

          <template v-slot:item.action="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editRow(item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteRow(item)"
            >
              delete
            </v-icon>
          </template>

          <!--<template v-slot:group>-->
          <!--  group-->
          <!--</template>-->
          <template v-slot:group.header="{ group: groupId, headers }">
            <!--<td>-->
            <!--  <v-simple-checkbox />-->
            <!--</td>-->
            <td :colspan="headers.length">
              {{ getGroupById(groupId).text }}
              <v-btn
                icon
                @click="editGroup(getGroupById(groupId))"
              >
                <v-icon small>
                  edit
                </v-icon>
              </v-btn>
            </td>
          </template>

          <!--<template v-slot:group.summary="{ group, headers }">-->
          <!--  <td :colspan="headers.length" class="text-center">-->
          <!--    <v-btn text @click="addToGroup(group)">-->
          <!--      <v-icon left>add_circle_outline</v-icon>-->
          <!--      Добавить в группу-->
          <!--    </v-btn>-->
          <!--  </td>-->
          <!--</template>-->

          <template v-slot:no-data>
            <v-btn color="primary">
              Reset
            </v-btn>
          </template>

          <template v-slot:footer>
            <v-toolbar
              flat
              color="white"
            >
              <v-spacer />

              <v-btn
                text
                @click="editorDialog = true"
              >
                <v-icon left>add_circle_outline</v-icon>
                Создать новую строку
              </v-btn>
            </v-toolbar>
          </template>
        </v-data-table>

        <!-- Row editor -->
        <v-dialog
          v-model="editorDialog"
          max-width="600px"
        >
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      v-model="editedItem.name"
                      clearable
                      outlined
                      auto-grow
                      rows="3"
                      label="Наименование работ по основным этапам договора"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="editedItem.note"
                      outlined
                      clearable
                      auto-grow
                      rows="3"
                      label="Примечание"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItem.time"
                      outlined
                      label="Кол-во часов"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItem.price"
                      outlined
                      label="Стоимость, ₽"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-combobox
                      v-model="editedItem.group"
                      outlined
                      :items="content.groups"
                      item-value="id"
                      item-text="text"
                      :search-input.sync="search"
                      label="Группа"
                    >
                      <template v-slot:no-data>
                        Создать новую группу
                      </template>
                    </v-combobox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="red"
                text
                @click.stop="close"
              >
                Отмена
              </v-btn>
              <v-btn
                color="blue"
                text
                @click.stop="saveRow"
              >
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Group editor -->
        <v-dialog
          v-model="editorGroupDialog"
          max-width="600px"
        >
          <v-card>
            <v-card-title>
              <span class="headline">Изменить название</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-text-field
                  v-model="editedGroup.text"
                  label="Название"
                />
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="red darken-1"
                text
                @click.stop="close"
              >
                Отмена
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click.stop="saveGroup"
              >
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <table
        v-else
        class="t-table"
      >
        <thead>
          <tr>
            <th
              v-for="header in filterHeaders"
              :key="header.value"
            >
              {{ header.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="group in content.groups">
            <tr
              :key="`title-${group.id}`"
              class="bg-gray"
            >
              <td
                :colspan="filterHeaders.length"
                class="t-caption"
              >
                {{ group.text }}
              </td>
            </tr>

            <tr
              v-for="(row, index) in getRowsByGroup(group.id)"
              :key="`group-${group.id}-item-${index}`"
            >
              <td class="ttl">
                {{ row.name }}
              </td>
              <td class="num">
                {{ row.time }}
              </td>
              <td class="num">
                {{ row.price }}
              </td>
              <td class="dsc">
                {{ row.note }}
              </td>
            </tr>
          </template>
          <!--<tr class="bg-gray">-->
          <!--  <td class="ttl">Итого базовый сайт со скидкой:</td>-->
          <!--  <td class="num">650 ч.</td>-->
          <!--  <td class="num">834 626 ₽</td>-->
          <!--  <td class="dsc"></td>-->
          <!--</tr>-->
        </tbody>
        <tfoot>
          <tr class="bg-blue t-total">
            <td class="ttl">Итого стоимость работ</td>
            <td class="num"></td>
            <td class="num">834 626 ₽</td>
            <td class="dsc"></td>
          </tr>
          <tr class="bg-gray">
            <td
              :colspan="filterHeaders.length"
              class="t-term"
            >
              <h4>Общие сроки работ:</h4>
              <h5>Не более 16 – 24 недель, в зависимости от выбранных опций.</h5>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="tpl-table__footer">
      <div class="container">
        <TextEditor
          v-model="content.footerText"
          :editable="editable"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextEditor from '../editor/TextEditor'
import myMixin from './mixin'

const content = () => ({
  groups: [
    {
      id: 0,
      text: '1. Подготовительный этап'
    },
    {
      id: 1,
      text: '2. Производство'
    },
    {
      id: 2,
      text: 'Итог'
    }
  ],
  table: [
    {
      name: 'Написание технического задания на сайт.\n' +
        'Прототипирование (создание интерактивных\n' +
        'прототипов при необходимости)',
      time: '50 ч.',
      price: '65 000 ₽',
      note: 'Разработка прототипов и краткое описание фукнционала в виде ТЗ.',
      group: 0
    },
    {
      name: 'Консалтинг и аналитика (при необходимости)',
      time: '10 ч.',
      price: '20 000 ₽',
      note: 'Уточняем задачи проекта и требования заказчика:\n' +
        '- анализ конкурентов Заказчика;\n' +
        '- консультации Заказчика по вопросам работы Битрикс, серверов,\n' +
        '1С, интеграций и т.д.;\n' +
        '- консультации по построению базовых бизнес-процессов;\n' +
        '- консультации, аналитика и помощь с подбором поставщиков сопутствующих сервисов (эквайринг, сервисы доставки);\n' +
        '- работа с поставщиками, партнерами и другими командами разработки (обсуждение интеграций и совместной работы).',
      group: 0
    },
    {
      name: 'Создание структуры сайта (включая формы\n' +
        'обратной связи, карту сайта, базовые разделы типа «Новости и статьи», а также настройку всех почтовых уведомлений на сайте)',
      time: '50 ч.',
      price: '65 000 ₽',
      note: 'Модуль системы управления сайтом, позволяющий публиковать \n' +
        'иуправлять режимом показа информации на сайте. Создание всей структуры сайта, включая т.н. «статические» страницы («О компании», «Контакты» и т.п. – согласно ТЗ). Включает в себя настройку ролевой модели пользователей (групп пользователей) и соответственно прав доступа к разделам и модулям сайта.',
      group: 1
    },
    {
      name: 'Консалтинг и аналитика (при необходимости)',
      time: '10 ч.',
      price: '20 000 ₽',
      note: 'Уточняем задачи проекта и требования заказчика:\n' +
        '- анализ конкурентов Заказчика;\n' +
        '- консультации Заказчика по вопросам работы Битрикс, серверов,\n' +
        '1С, интеграций и т.д.;\n' +
        '- консультации по построению базовых бизнес-процессов;\n' +
        '- консультации, аналитика и помощь с подбором поставщиков сопутствующих сервисов (эквайринг, сервисы доставки);\n' +
        '- работа с поставщиками, партнерами и другими командами разработки (обсуждение интеграций и совместной работы).',
      group: 1
    },
    {
      name: 'SEO-проектирование',
      time: '50 ч.',
      price: '65 000 ₽',
      note: '',
      group: 0
    },
    {
      name: 'Всего',
      time: '650 ч.',
      price: '887 900 ₽',
      note: '',
      group: 2
    }, {
      name: 'Скидка при быстром принятии решения*',
      time: '6%',
      price: '53 274 ₽',
      note: '* - Скидка при быстром принятии решения: если начнем работы в течение двух недель.',
      group: 2
    }, {
      name: 'Итого базовый сайт со скидкой:',
      time: '650 ч.',
      price: '834 626 ₽',
      note: '',
      group: 2
    }
  ],
  footerText:
    '<p>На все наши продукты предоставляется неограниченная гарантия: консультирование<br>' +
    'Заказчика по вопросам работы сайта, исправление ошибок работы Продукта (сроки <br>' +
    'реакции фиксированы и прописаны в договоре).<br>' +
    '<br>' +
    'Цены действительны при поэтапной авансовой оплате работ.<br>' +
    '<br>' +
    'Также мы можем предложить вам хостинг, SEO/Директ-продвижение сайта, фулфилмент <br>' +
    'и пост-гарантийную поддержку сайта с фиксированной стоимостью нормо-часа.</p>'
})

export default {
  name: 'SlideTable',
  components: {
    TextEditor
  },
  mixins: [myMixin],
  // inject: ['editable'],
  props: {
    editable: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: content
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Наименование работ по основным этапам договора',
          value: 'name',
          sortable: false
        },
        {
          text: 'Кол-во часов',
          value: 'time',
          sortable: false
        },
        {
          text: 'Стоимость, ₽',
          value: 'price',
          sortable: false
        },
        {
          text: 'Примечание',
          value: 'note',
          sortable: false
        },
        {
          text: 'Actions',
          value: 'action',
          sortable: false
        }
      ],

      editorDialog: false,
      editedIndex: -1,
      editedItem: {
        name: '',
        time: '',
        price: '',
        note: '',
        group: ''
      },
      defaultItem: {
        name: '',
        time: '',
        price: '',
        note: '',
        group: ''
      },

      editorGroupDialog: false,
      editedGroupIndex: -1,
      editedGroup: {
        text: ''
      },
      defaultGroup: {
        text: ''
      },

      search: null
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Добавить' : 'Редактировать'
    },
    // computedGroups () {
    //   return this.table.reduce((prev, item) => {
    //     if (prev.indexOf(item.group) === -1) {
    //       prev.push(item.group)
    //     }
    //     return prev
    //   }, [])
    // },
    filterHeaders () {
      if (this.editable) {
        return this.headers
      }
      return this.headers.filter(item => item.value !== 'action')
    }
  },
  watch: {
    editorGroupDialog (val) {
      if (!val) this.close()
    },
    editorDialog (val) {
      if (!val) this.close()
    }
  },
  methods: {
    getRowsByGroup (id) {
      return this.content.table.filter(item => item.group === id)
    },

    getGroupById (id) {
      id = parseFloat(id)
      return this.content.groups.find(g => g.id === id)
    },

    // addToGroup (groupId) {
    //   const group = this.getGroupById(groupId)
    //   this.editedItem = {
    //     ...this.defaultItem,
    //     group
    //   }
    //
    //   this.dialog = true
    // },

    editGroup (group) {
      this.editedGroupIndex = this.content.groups.indexOf(group)
      this.editedGroup = {
        ...group
      }

      this.editorGroupDialog = true
    },

    saveGroup () {
      Object.assign(this.content.groups[this.editedGroupIndex], this.editedGroup)

      this.editorGroupDialog = false
    },

    editRow (item) {
      this.editedIndex = this.content.table.indexOf(item)
      this.editedItem = {
        ...item,
        group: this.getGroupById(item.group)
      }

      this.editorDialog = true
    },

    deleteRow (row) {
      const index = this.content.table.indexOf(row)
      confirm('Удалить строку?') && this.content.table.splice(index, 1)
    },

    saveRow () {
      if (typeof this.editedItem.group === 'string') {
        this.editedItem.group = {
          id: this.content.groups.length,
          text: this.editedItem.group
        }

        this.content.groups.push(this.editedItem.group)
      }

      const item = {
        ...this.editedItem,
        group: this.editedItem.group.id
      }

      if (this.editedIndex > -1) {
        Object.assign(this.content.table[this.editedIndex], item)
      } else {
        this.content.table.push(item)
      }

      this.editorDialog = false
    },

    close () {
      this.editorGroupDialog = false
      this.editorDialog = false

      this.$nextTick(function () {
        this.search = null

        this.editedItem = { ...this.defaultItem }
        this.editedIndex = -1

        this.editedGroup = { ...this.defaultGroup }
        this.editedGroupIndex = -1
      })

      // setTimeout(() => {
      //   this.search = null
      //
      //   this.editedItem = { ...this.defaultItem }
      //   this.editedIndex = -1
      //
      //   this.editedGroup = { ...this.defaultGroup }
      //   this.editedGroupIndex = -1
      // }, 300)
    }
  }
}
</script>

<style lang="scss">
.tpl-table {
  &__header {
    padding-top: 82px;
  }

  &__footer {
    margin-top: 150px;
    padding-bottom: 150px;
    font-size: 22px;
    line-height: 32px;
    color: #7c7c7c;
  }

  h4 {
    font-size: 33px;
    line-height: 41px;
    font-weight: 500;
    letter-spacing: -0.01em;
  }

  h5 {
    font-size: 25px;
    line-height: 31px;
    font-weight: 500;
    letter-spacing: -0.01em;
  }
}

.v-data-table {
  font-family: "Roboto", sans-serif;
}

.bg-gray {
  background: #eee;
}

.bg-blue {
  background: #1301f0;
  color: #fff;
}

.t-caption {
  padding: 13px 0;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1;
  grid-column: 1/5;
}

.t-row {
  display: grid;
  grid-template-columns: 500px auto auto 500px;
  padding: 0 calc(50vw - 750px);
  border-bottom: 2px solid #e9e9e9;

  &:last-child {
    border-bottom: 0;
  }

  .ttl {
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 28px;
    /*padding: 28px 0;*/
  }

  .num {
    font-size: 42px;
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1;
    /*padding: 28px 0;*/
  }

  .dsc {
    color: #707070;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: -0.01em;
    line-height: 18px;
    /*padding: 28px 0;*/
  }
}

.t-table {
  border-spacing: 0;

  td,
  th {
    padding-right: 10px;
  }

  tr {
    &.bg-blue,
    &.bg-gray {
      > td,
      + tr > td {
        border-top: 0;
      }
    }

    &::before {
      content: '';
      display: table-cell;
      /*width: calc(50vw - 750px);*/
      width: 210px;
      border-top: 0;
    }

    &::after {
      content: '';
      display: table-cell;
      /*width: calc(50vw - 750px);*/
      width: 210px;
      border-top: 0;
    }

    /*@media print {*/
    /*  &::before,*/
    /*  &::after {*/
    /*    width: 210px;*/
    /*  }*/
    /*}*/
  }

  tbody {
    &::before {
      content: '';
      display: table-row;
      height: 31px;
    }

    &::after {
      content: '';
      display: table-row;
      height: 81px;
    }
  }

  thead {
    th {
      border-bottom: 2px solid #e9e9e9;
      text-align: left;
      color: #7c7c7c;
      font-weight: 500;
      font-size: 18px;
      padding-top: 18px;
      padding-bottom: 18px;
    }
  }

  td {
    /*padding: 28px 20px 28px 0;*/
    border-top: 2px solid #e9e9e9;
  }

  .ttl {
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 28px;
    padding-top: 28px;
    padding-bottom: 28px;
  }

  .num {
    font-size: 42px;
    font-weight: 500;
    /*line-height: 54px;*/
    line-height: 1;
    white-space: nowrap;
    padding-top: 28px;
    padding-bottom: 28px;
  }

  .dsc {
    color: #707070;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: -0.01em;
    line-height: 18px;
    padding-top: 28px;
    padding-bottom: 28px;
  }
}

.t-total {
  align-items: center;

  .ttl {
    font-size: 41px;
    line-height: 1;
    padding-top: 44px;
    padding-bottom: 44px;
  }

  .num {
    font-size: 56px;
    line-height: 1;
    padding-top: 44px;
    padding-bottom: 44px;
  }
}

.t-term {
  padding-top: 50px;
  padding-bottom: 50px;
  grid-column: 1/5;

  h4 {
    margin-bottom: 23px;
  }
}
</style>
