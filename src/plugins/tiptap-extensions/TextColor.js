import { Mark } from 'tiptap'
import { markInputRule, removeMark, updateMark } from 'tiptap-commands'

export default class TextColor extends Mark {
  get name () {
    return 'color'
  }

  get schema () {
    return {
      attrs: {
        color: {
          default: '#f00'
        }
      },
      parseDOM: [{
        tag: 'span',
        style: 'color',
        getAttrs: value => ({
          color: value.style.color
        })
      }],
      toDOM: node => {
        return ['span', { style: `color: ${node.attrs.color}` }, 0]
      }
    }
  }

  commands ({ type }) {
    return attrs => {
      if (attrs.color) {
        return updateMark(type, attrs)
      }

      return removeMark(type)
    }
  }

  inputRules ({ type }) {
    return [markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, type)]
  }
}
