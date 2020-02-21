<template>
  <div class="wrapper">
    <div class="list" ref="list">
      <div>
        <button @click.prevent="print('print')">Распечатать</button>
        <button @click.prevent="print('save')">Сохранить</button>
        <button @click.prevent="print('new')">Открыть в новом окне</button>
      </div>

      Слайд 2
      <div ref="slide1" class="slide tpl-about">
        <h1>Мы - Риверстарт</h1>
        <p>5 лет на рынке, 25 сотрудников в офисе в Нижнем Новгороде (головной офис) и Москве.</p>
      </div>

      Слайд 3
      <div ref="slide2" class="slide tpl-about-2">
        <div class="container">
          <h3>Пару слов о нас</h3>
          <p>
            Лучше всего мы создаем и поддерживаем сложные веб-проекты: <span>e-commerce</span>,
            <span>CRM</span> и <span>ERP</span>-системы, <span>личные кабинеты</span> и
            <span>b2b</span>-порталы.
            Пишем <span>API</span>, разрабатываем микросервисную архитектуру приложений
            и настраиваем это под высокие нагрузки.
          </p>
          <p>
            В дополнение к браузерным решениям мы создаем мобильные приложения, а также помогаем
            нашим клиентам с юзабилити-аудитом, продвижением и маркетинговой стратегией. Методологии
            разработки: <span>Waterfall</span>, <span>Agile</span>.
          </p>
        </div>
      </div>

      Слайд 4
      <div ref="slide3" class="slide tpl-clients">
        <div class="container">
          <h1>С нами работают</h1>
          <img src="./assets/clients.png" alt="">
        </div>
      </div>

      Слайд 5
      <div class="slide tpl-advantages">
        <div class="container">
          <h1>Коротко о том, почему мы</h1>
          <ul>
            <li>
              <p><strong>Фиксированная</strong> стоимость нормо-часа:</p>
            </li>
          </ul>
          <table>
            <tr>
              <th>1300 ₽/час</th>
              <td>Разработка</td>
            </tr>
            <tr>
              <th>2000 ₽/час</th>
              <td>Консалтинг</td>
            </tr>
          </table>
        </div>
      </div>

      Слайд 6
      <div class="slide tpl-advantages-2">
        <div class="container">
          <h3>Коротко о том, почему мы</h3>
          <ul>
            <li>
              <p><strong>Тестировщики</strong> в штате обеспечат качественный продукт.</p>
            </li>
            <li>
              <p>Пожизненная <strong>гарантия</strong> на сайты. Мы пропишем ее в договоре.</p>
            </li>
            <li>
              <p>Вы не останетесь один на один с проблемами сайта.</p>
            </li>
            <li>
              <p><strong>Техподдержка</strong> — треть оборота компании, и отлажена она превосходно.
                Мы будем развивать и поддерживать проект после запуска.</p>
            </li>
          </ul>
        </div>
      </div>

      <!--Слайд 1:-->
      <!--<Slide ref="slide1" />-->

      <!--Слайд 2:-->
      <!--<SlideTable ref="slide2" :table="table" />-->

      <!--Слайд 3:-->
      <!--<div ref="slide3" class="slide">-->
      <!--  <div class="container">-->
      <!--    <h1>Смета проекта</h1>-->
      <!--    <div class="t-row">-->
      <!--      <div>Наименование работ по основным этапам договора</div>-->
      <!--      <div>Кол-во часов</div>-->
      <!--      <div>Стоимость, ₽</div>-->
      <!--      <div>Примечание</div>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--  <div class="bg-gray">-->
      <!--    <div class="container">-->
      <!--      <div class="t-caption">1. Подготовительный этап</div>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--  <div class="container">-->
      <!--    <div class="t-row">-->
      <!--      <div class="ttl">-->
      <!--        Написание технического задания на сайт.-->
      <!--        Прототипирование (создание интерактивных прототипов при необходимости)-->
      <!--      </div>-->
      <!--      <div class="num">50 ч.</div>-->
      <!--      <div class="num">65 000 ₽</div>-->
      <!--      <div class="dsc">Разработка прототипов и краткое описание фукнционала в виде ТЗ.</div>-->
      <!--    </div>-->

      <!--    <div class="t-row">-->
      <!--      <div class="ttl">Консалтинг и аналитика (при необходимости)</div>-->
      <!--      <div class="num">10 ч.</div>-->
      <!--      <div class="num">20 000 ₽</div>-->
      <!--      <div class="dsc">-->
      <!--        Уточняем задачи проекта и требования заказчика:-->
      <!--        - анализ конкурентов Заказчика;-->
      <!--        - консультации Заказчика по вопросам работы Битрикс, серверов,-->
      <!--        1С, интеграций и т.д.;-->
      <!--        - консультации по построению базовых бизнес-процессов;-->
      <!--        - консультации, аналитика и помощь с подбором поставщиков сопутствующих сервисов-->
      <!--        (эквайринг,-->
      <!--        сервисы доставки);-->
      <!--        - работа с поставщиками, партнерами и другими командами разработки (обсуждение-->
      <!--        интеграций и-->
      <!--        совместной работы).-->
      <!--      </div>-->
      <!--    </div>-->

      <!--    <div class="t-row">-->
      <!--      <div class="ttl">SEO-проектирование</div>-->
      <!--      <div class="num">50 ч.</div>-->
      <!--      <div class="num">65 000 ₽</div>-->
      <!--      <div class="dsc"></div>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--  <div class="bg-gray">-->
      <!--    <div class="container">-->
      <!--      <div class="t-caption">2. Производство</div>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--  <div class="container">-->
      <!--    <div class="t-row">-->
      <!--      <div class="ttl">-->
      <!--        Написание технического задания на сайт.-->
      <!--        Прототипирование (создание интерактивных прототипов при необходимости)-->
      <!--      </div>-->
      <!--      <div class="num">50 ч.</div>-->
      <!--      <div class="num">65 000 ₽</div>-->
      <!--      <div class="dsc">Разработка прототипов и краткое описание фукнционала в виде ТЗ.</div>-->
      <!--    </div>-->

      <!--    <div class="t-row">-->
      <!--      <div class="ttl">Консалтинг и аналитика (при необходимости)</div>-->
      <!--      <div class="num">10 ч.</div>-->
      <!--      <div class="num">20 000 ₽</div>-->
      <!--      <div class="dsc">-->
      <!--        Уточняем задачи проекта и требования заказчика:-->
      <!--        - анализ конкурентов Заказчика;-->
      <!--        - консультации Заказчика по вопросам работы Битрикс, серверов,-->
      <!--        1С, интеграций и т.д.;-->
      <!--        - консультации по построению базовых бизнес-процессов;-->
      <!--        - консультации, аналитика и помощь с подбором поставщиков сопутствующих сервисов-->
      <!--        (эквайринг,-->
      <!--        сервисы доставки);-->
      <!--        - работа с поставщиками, партнерами и другими командами разработки (обсуждение-->
      <!--        интеграций и-->
      <!--        совместной работы).-->
      <!--      </div>-->
      <!--    </div>-->

      <!--    <div class="t-row">-->
      <!--      <div class="ttl">SEO-проектирование</div>-->
      <!--      <div class="num">50 ч.</div>-->
      <!--      <div class="num">65 000 ₽</div>-->
      <!--      <div class="dsc"></div>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--  <div class="bg-gray">-->
      <!--    <div class="container">-->
      <!--      <div class="t-caption">Итог</div>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--  <div class="container">-->
      <!--    <div class="t-row">-->
      <!--      <div>Всего</div>-->
      <!--      <div class="num">650 ч.</div>-->
      <!--      <div class="num">887 900 ₽</div>-->
      <!--      <div></div>-->
      <!--    </div>-->
      <!--    <div class="t-row">-->
      <!--      <div>Скидка при быстром принятии решения*</div>-->
      <!--      <div class="num">6%</div>-->
      <!--      <div class="num">53 274 ₽</div>-->
      <!--      <div class="dsc">* - Скидка при быстром принятии решения:-->
      <!--        если начнем работы в течение двух недель.-->
      <!--      </div>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--  <div class="bg-gray">-->
      <!--    <div class="container">-->
      <!--      <div class="t-row">-->
      <!--        <div>Итого базовый сайт со скидкой:</div>-->
      <!--        <div class="num">650 ч.</div>-->
      <!--        <div class="num">834 626 ₽</div>-->
      <!--        <div></div>-->
      <!--      </div>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--  <div class="bg-blue">-->
      <!--    <div class="container">-->
      <!--      <div class="t-row">-->
      <!--        <div>Итого стоимость работ</div>-->
      <!--        <div class="num"></div>-->
      <!--        <div class="num">834 626 ₽</div>-->
      <!--        <div></div>-->
      <!--      </div>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--</div>-->

      <div v-for="(slide, index) in slides" :key="index">
        <div>Слайд {{ index }}</div>
        <div>
          <Slide v-if="slide.type === 'template1'" v-bind="slide.content" />
          <SlideTable v-else-if="slide.type === 'tableTpl'" v-bind="slide.content" />
        </div>
      </div>

      <div>
        <button @click.prevent="print">Print</button>
      </div>
    </div>
    <!--<iframe class="iframe" ref="iframe" src=""></iframe>-->
  </div>
</template>

<script>
// import jsPDF from 'jspdf/dist/jspdf.debug'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

// import halvarBreitschrift from './assets/fonts/halvar-breitschrift/halvar-breitschrift-bold'
// import ceraPro from './assets/fonts/cera-pro/CeraPro-Regular'

import Slide from './components/Slide.vue'
import SlideTable from './components/SlideTable.vue'

window.html2canvas = html2canvas
window.jsPDF = jsPDF

export default {
  name: 'App',
  components: {
    SlideTable,
    Slide
  },

  data () {
    return {
      slides: [
        {
          type: 'template1',
          footer: true,
          content: {
            title: '<h2>Типовая процедура взаимодействия при разработке или доработке сайта</h2>',
            body: `
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
              </ul>
            `
          }
        },
        {
          type: 'tableTpl',
          footer: true,
          content: {
            title: '<h1>Второй слайд</h1>',
            table: [
              ['Каталог товарных позиций', '120 ч.', '156 000 ₽', 'Каталог товаров:\n' +
              '- разделы и подразделы, включая хлебокрошки;\n' +
              '- карточка товара (фото, видео, свойства, цены, наличие);\n' +
              '- список товаров (отображение, фильтры и сортировки).'],
              ['Интеграция с учетной системой Заказчика (1С)', '80 ч.', '104 000 ₽', 'Настройка двустороннего обмена данными по номенклатуре (включая\n' +
              'свойства, цены и наличие), заказам, статусам заказов.\n' +
              'Не включая доработку самой учетной системы, не включая обучение\n' +
              'работе с учетной системой.']
            ]
          }
        }
      ]
    }
  },

  mounted () {
  },

  beforeDestroy () {
  },

  methods: {
    async print (type) {
      const slideWidth = 1920

      // eslint-disable-next-line new-cap
      const doc = new jsPDF({
        // orientation: 'l',
        unit: 'pt',
        compress: true,
        format: [0, 0],
        putOnlyUsedFonts: true,
        // precision: 0,
        floatPrecision: 'smart' // or "smart", default is 16
      })

      // doc.addFileToVFS('Halvar-Breitschrift-Bold-Web.ttf', halvarBreitschrift)
      // doc.addFont('Halvar-Breitschrift-Bold-Web.ttf', 'halvar breitschrift', 'normal')

      // doc.addFileToVFS('CeraPro-Regular-normal.ttf', ceraPro)
      // doc.addFont('CeraPro-Regular-normal.ttf', 'cera pro', 'normal')

      doc.addFont(require('./assets/fonts/halvar-breitschrift/Halvar-Breitschrift-Bold-Web.ttf'), 'halvar breitschrift', 'normal')
      doc.addFont(require('./assets/fonts/cera-pro/CeraPro-Regular.ttf'), 'cera pro', 'normal')

      console.log('getFontList', doc.getFontList())

      const def = {
        async: true,
        allowTaint: true,
        backgroundColor: 'transparent',
        imageTimeout: 15000,
        logging: true,
        proxy: null,
        removeContainer: true,
        foreignObjectRendering: false,
        useCORS: false,
        scale: 1,
        canvas: doc.canvas,
        // width: slideWidth,
        windowWidth: slideWidth
        // x: 0,
        // y: 0,
        // scrollX: 0,
        // scrollY: 0,
      }

      const slides = [
        this.$refs.slide1,
        this.$refs.slide2,
        this.$refs.slide3
      ]

      console.log('getCurrentPageInfo', doc.internal.getCurrentPageInfo())

      console.log(doc, doc.internal)

      doc.context2d.save()

      for (const slide of slides) {
        doc.context2d.restore()

        const size = {
          height: slide.offsetHeight,
          width: slideWidth
          // width: slide.offsetWidth,
        }

        doc.addPage(
          [size.height, size.width],
          size.height < size.width ? 'l' : 'p'
        )

        console.log('getCurrentPageInfo', doc.internal.getCurrentPageInfo())

        doc.context2d.save()

        await html2canvas(slide, def)
      }

      // doc.addImage(canvas, 'CANVAS', 0, 0, this.$refs.slide3.offsetWidth, this.$refs.slide3.offsetHeight)

      // doc.context2d.restore()

      doc.deletePage(1)
      doc.setLanguage('ru')

      switch (type) {
        case 'new':
          doc.output('dataurlnewwindow')
          break
        case 'save':
          doc.save()
          break
        case 'print':
        default:
          doc.autoPrint()
          // doc.autoPrint({ variant: 'javascript' })

          if (!this.printIframe) {
            this.printIframe = document.createElement('iframe')
            this.printIframe.style.display = 'none'
            document.body.appendChild(this.printIframe)

            this.printIframe.contentWindow.onafterprint = (event) => {
              console.log('afterprint', event)
            }

            // this.printIframe.contentWindow.addEventListener('afterprint', (event) => {
            //   console.log('afterprint', event)
            //   // this.printIframe.remove()
            //   // this.printIframe = null
            // })

            this.printIframe.src = doc.output('bloburl')
          }
      }
      // g.src = doc.output('dataurlstring')
      // g.document.close()
      // g.contentWindow.print()

      // if (this.$refs.iframe) {
      //   this.$refs.iframe.src = doc.output('bloburl')
      // }
    }
    // print (g) {
    //   const printWindow = window.open('', '', 'width=1920,height=1080')
    //   printWindow.document.write('<html><head><title>Print Me</title></head>')
    //   printWindow.document.write('<body>')
    //   printWindow.document.write(g.innerHTML)
    //   printWindow.document.write('</body></html>')
    //   printWindow.document.close()
    //   printWindow.print()
    // },
  }
}
</script>

<style lang="scss">

.wrapper {
  display: flex;
  height: 100%;
}

.iframe {
  flex: 0 0 30%;
  /*width: 100%;*/
  height: 100%;
}

.list {
  /*display: flex;*/
  flex-direction: column;
  /*padding: 50px 60px;*/
  overflow: auto;
  /*max-width: 1500px;*/
  /*margin: 0 auto;*/
  flex: 1 0;
}

/*.slide {*/
/*  position: relative;*/
/*  !*background: white;*!*/
/*  padding: 40px 0;*/
/*  !*box-shadow: 0 0 5px rgba(0, 0, 0, .1);*!*/
/*  margin-bottom: 20px;*/
/*  width: 100%;*/
/*  !*margin: 0 auto 20px;*!*/
/*  !*border: 1px solid red;*!*/
/*  !*flex: 0 0 auto;*!*/
/*}*/
</style>
