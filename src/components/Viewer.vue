<template>
  <div
    ref="wrapper"
    class="page-wrapper"
    :style="{ zoom: zoom }"
  >
    <div
      v-for="slide in slides"
      :key="slide.id"
      ref="slides"
      class="page"
    >
      <Slide :slide="slide" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import jsPDF from 'jspdf'
// import jsPDF from 'jspdf/dist/jspdf.debug'
import html2canvas from 'html2canvas'

import Slide from './Slide.vue'

// import halvarBreitschrift from './assets/fonts/halvar-breitschrift/halvar-breitschrift-bold'
// import ceraPro from './assets/fonts/cera-pro/CeraPro-Regular'

// window.html2canvas = html2canvas
// window.jsPDF = jsPDF

export default {
  name: 'Viewer',
  components: {
    Slide
  },
  // props: {
  //   editable: {
  //     type: Boolean,
  //     default: true
  //   }
  // },
  // provide: {
  //   editable: true
  // },
  //
  data () {
    return {
      zoom: 1
    }
  },

  computed: {
    ...mapState({
      slides: state => state.slides.items,
      editable: state => state.slides.isEditable,
      preview: state => state.slides.isPreview
    })
    // zoom () {
    //   console.log(this.$refs.wrapper)
    //   if (this.$refs.wrapper) {
    //     return this.$refs.wrapper.clientWidth / 1920
    //   }
    //   return 1
    // }
  },

  mounted () {
    this.$root.$on('print', this.handlePrint)
    this.$nextTick(function () {
      console.log('width', this.$el.clientWidth)
      this.zoom = this.$el.clientWidth / 1920
    })
  },

  // updated () {
  //   this.zoom = this.$el.clientWidth / 1920
  // },

  beforeDestroy () {
    this.$root.$off('print', this.handlePrint)

    if (this.printIframe) {
      this.printIframe.remove()
    }
  },

  methods: {
    // ...mapActions({
    //   changePreview: 'CHANGE_PREVIEW',
    //   changeEditable: 'CHANGE_EDITABLE'
    // }),
    handlePrint () {
      if (!this.$refs.slides || !this.$refs.slides.length) {
        return
      }

      this.$nextTick(async function () {
        this.$store.commit('SET_PRINT_STATUS', 'loading')

        try {
          await this.print()
        } catch (e) {
          alert('Ошибка печати')
        }

        this.$store.commit('SET_PRINT_STATUS', null)
      })
    },

    async print (type) {
      const doc = new jsPDF({
        orientation: 'l',
        unit: 'pt',
        // compress: true,
        format: [1080, 1920],
        putOnlyUsedFonts: true,
        floatPrecision: 'smart' // or "smart", default is 16
      })

      // doc.addFileToVFS('Halvar-Breitschrift-Bold-Web.ttf', halvarBreitschrift)
      // doc.addFont('Halvar-Breitschrift-Bold-Web.ttf', 'halvar breitschrift', 'normal')

      // doc.addFileToVFS('CeraPro-Regular-normal.ttf', ceraPro)
      // doc.addFont('CeraPro-Regular-normal.ttf', 'cera pro', 'normal')

      doc.addFont(require('../assets/fonts/halvar-breitschrift/HalvarBreit-Md.ttf'), 'halvar breit md', 'normal')
      doc.addFont(require('../assets/fonts/halvar-breitschrift/Halvar-Breitschrift-Bold-Web.ttf'), 'halvar breitschrift', 'bold')

      doc.addFont(require('../assets/fonts/cera-pro/CeraPro-Medium.ttf'), 'cera pro', 'normal')
      doc.addFont(require('../assets/fonts/cera-pro/CeraPro-Bold.ttf'), 'cera pro', 'bold')

      console.log('getFontList', doc.getFontList())
      console.log('getCurrentPageInfo', doc.internal.getCurrentPageInfo())
      console.log(doc, doc.internal)

      for (const slide of this.$refs.slides) {
        doc.context2d.restore()
        doc.addPage(
          [slide.offsetHeight, 1920],
          slide.offsetHeight < 1920 ? 'l' : 'p'
        )
        doc.context2d.save()

        await html2canvas(slide, {
          // async: true,
          allowTaint: false,
          backgroundColor: '#f0f05f',
          removeContainer: true,
          foreignObjectRendering: false,
          useCORS: true,
          scale: 1,
          canvas: doc.canvas,
          // width: 500,
          // width: 'auto',
          windowWidth: 1920,
          x: 0,
          // y: 0,
          scrollX: 0,
          scrollY: -window.pageYOffset
          // ignoreElements: (el) => {
          //   console.log(el)
          // },
          // onclone: (d) => {
          //   console.log(d)
          //   debugger
          // }
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
          // doc.autoPrint()
          // doc.autoPrint({ variant: 'javascript' })

          if (!this.printIframe) {
            this.printIframe = document.createElement('iframe')
            this.printIframe.style.display = 'none'
            this.printIframe.setAttribute('data-html2canvas-ignore', 'true')

            this.printIframe.onafterprint = () => {
              console.log('onafterprint')
            }
            this.printIframe.onbeforeprint = () => {
              console.log('onbeforeprint')
            }
            this.printIframe.onload = () => {
              this.printIframe.contentWindow.onafterprint = () => {
                console.log('contentWindow.onafterprint')
              }
              this.printIframe.contentWindow.onbeforeprint = () => {
                console.log('contentWindow.onbeforeprint')
              }
              this.printIframe.contentWindow.print()
            }
            document.body.appendChild(this.printIframe)
          }

          this.printIframe.src = doc.output('bloburl')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  overflow: hidden;
}

.page {
  margin-bottom: 20px;
  width: 1920px;
}

</style>
