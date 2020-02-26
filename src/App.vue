<template>
  <v-app>
    <!--Слайд 2-->
    <!--<TplAbout class="slide" />-->

    <!--Слайд 3-->
    <!--<TplAbout2 class="slide" />-->

    <!--Слайд 4-->
    <!--<TplClients class="slide" />-->

    <!--Слайд 5-->
    <!--<TplAdvantages class="slide" />-->

    <!--Слайд 6-->
    <!--<TplAdvantages2 class="slide" />-->

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


    <v-navigation-drawer app clipped>
      <!--<template v-slot:prepend>-->
      <!--  <v-toolbar>-->
      <!--    <v-toolbar-title>Slides</v-toolbar-title>-->
      <!--    <v-spacer></v-spacer>-->
      <!--    <v-btn icon @click="editor=!editor">-->
      <!--      <v-icon>mdi-pencil</v-icon>-->
      <!--    </v-btn>-->
      <!--  </v-toolbar>-->
      <!--</template>-->

      <SlidesPreview />
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-toolbar-title>КП Liana</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" icon @click="print('print')">
        <v-icon>mdi-printer</v-icon>
      </v-btn>
      <!--<v-btn class="ma-2" rounded @click.prevent="print('save')">-->
      <!--  Сохранить-->
      <!--</v-btn>-->
      <!--<v-btn class="ma-2" rounded @click="print('new')">-->
      <!--  Открыть в новом окне-->
      <!--</v-btn>-->
    </v-app-bar>

    <v-content app>

      <SlidesPreview />
      <div
        ref="slides"
        v-for="slide in slides"
        :key="slide.id"
        class="my-4"
      >
        <div class="slide">
          <component
            :is="templates[slide.type].component"
            :id="slide.id"
            :data="slide.data"
          ></component>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import jsPDF from 'jspdf/dist/jspdf.debug'
// import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import templates from './components/Templates'
import SlidesPreview from './components/SlidesPreview'
// import Render from './components/Render.vue'

// import halvarBreitschrift from './assets/fonts/halvar-breitschrift/halvar-breitschrift-bold'
// import ceraPro from './assets/fonts/cera-pro/CeraPro-Regular'

// window.html2canvas = html2canvas
// window.jsPDF = jsPDF

export default {
  name: 'App',
  components: {
    SlidesPreview,
  },
  data () {
    return {
      templates: templates,
      slideWidth: 1920,
    }
  },

  mounted () {
  },

  beforeDestroy () {
  },

  computed: {
    ...mapState({
      slides: state => state.slides.items,
    }),
  },

  methods: {
    async print (type) {
      const doc = new jsPDF({
        // orientation: 'l',
        unit: 'pt',
        compress: true,
        format: [0, 0],
        putOnlyUsedFonts: true,
        // floatPrecision: 'smart', // or "smart", default is 16
      })

      // doc.addFileToVFS('Halvar-Breitschrift-Bold-Web.ttf', halvarBreitschrift)
      // doc.addFont('Halvar-Breitschrift-Bold-Web.ttf', 'halvar breitschrift', 'normal')

      // doc.addFileToVFS('CeraPro-Regular-normal.ttf', ceraPro)
      // doc.addFont('CeraPro-Regular-normal.ttf', 'cera pro', 'normal')

      doc.addFont(require('./assets/fonts/halvar-breitschrift/Halvar-Breitschrift-Bold-Web.ttf'), 'halvar breitschrift', 'normal')
      doc.addFont(require('./assets/fonts/cera-pro/CeraPro-Regular.ttf'), 'cera pro', 'normal')

      console.log('getFontList', doc.getFontList())
      console.log('getCurrentPageInfo', doc.internal.getCurrentPageInfo())
      console.log(doc, doc.internal)

      for (const slide of this.$refs.slides) {
        doc.context2d.restore()
        doc.addPage(
          [slide.offsetHeight, this.slideWidth],
          slide.offsetHeight < this.slideWidth ? 'l' : 'p',
        )
        doc.context2d.save()

        await html2canvas(slide, {
          async: true,
          allowTaint: true,
          backgroundColor: 'transparent',
          removeContainer: true,
          foreignObjectRendering: false,
          useCORS: false,
          scale: 1,
          canvas: doc.canvas,
          // width: this.slideWidth,
          // width: 'auto',
          windowWidth: this.slideWidth,
          // x: 0,
          // y: 0,
          // scrollX: 0,
          // scrollY: 0,
          onclone: (e) => {
            console.log(arguments)
            debugger;
          },
        })
      }

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

            this.printIframe.src = doc.output('bloburl')
          }
      }
    },
  },
}
</script>
