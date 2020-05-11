import { Mark } from 'tiptap'
import { toggleMark, markInputRule, markPasteRule } from 'tiptap-commands'

export default class Selected extends Mark {
  get name () {
    return 'selected'
  }

  get schema () {
    return {
      parseDOM: [
        {
          tag: 'span.selected'
        }
      ],
      toDOM: () => ['span', { class: 'selected' }, 0]
    }
  }

  // keys ({ type }) {
  //   return {
  //     'Mod-j': toggleMark(type)
  //   }
  // }

  commands ({ type }) {
    return () => toggleMark(type)
  }

  inputRules ({ type }) {
    return [
      markInputRule(/(?:^|[^=])(==([^=]+)==)$/, type)
    ]
  }

  pasteRules ({ type }) {
    return [
      markPasteRule(/==([^=]+)==/g, type)
    ]
  }
}
