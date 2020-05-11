import { Mark } from 'tiptap'
import { updateMark } from 'tiptap-commands'

export default class FontSize extends Mark {
  get name () {
    return 'fontSize'
  }

  get schema () {
    return {
      attrs: {
        level: {
          default: '1em'
        }
      },
      parseDOM: [
        {
          tag: 'span.font-size',
          getAttrs (dom) {
            return { 'font-size': dom.classList[0] }
          }
        }
      ],
      toDOM: (mark) => {
        return ['span', { style: `font-size: ${mark.attrs.level}` }, 0]
      }
    }
  }

  commands ({ type }) {
    return attrs => updateMark(type, attrs)
  }
}
