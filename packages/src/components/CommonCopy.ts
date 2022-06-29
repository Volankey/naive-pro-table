import { CopyOutline, Checkmark } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { defineComponent, ref, h } from 'vue'

const copyToClipBoard = (clipBoardContent: string | undefined | number) => {
  if (clipBoardContent === undefined) {
    return
  }
  clipBoardContent = '' + clipBoardContent
  const tmpDiv = document.createElement('div')
  tmpDiv.innerText = clipBoardContent // 修改文本框的内容
  document.body.appendChild(tmpDiv)
  tmpDiv.style.opacity = '0'
  tmpDiv.style.height = '0'
  tmpDiv.style.width = '0'

  const selection = window.getSelection()
  const range = document.createRange()
  range.selectNodeContents(tmpDiv)
  if (selection) {
    selection.removeAllRanges()
    selection.addRange(range)
  }
  document.execCommand('Copy')
  tmpDiv.remove()
}

export default defineComponent({
  name: 'CommonCopy',
  props: {
    text: [String, Number]
  },
  setup(props) {
    const copied = ref(false)

    const handleClick = () => {
      copyToClipBoard(props.text)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 5000)
    }
    const commonIconProps = {
      size: 16,
      style: {
        verticalAlign: 'middle',
        marginLeft: '4px',
        cursor: 'pointer'
      }
    }

    return () => {
      if (!copied.value) {
        return h(
          NIcon,
          {
            ...commonIconProps,
            color: '#1890ff',
            onClick: { handleClick }
          },
          {
            default: () => h(CopyOutline)
          }
        )
      }
      return h(
        NIcon,
        {
          ...commonIconProps,
          color: '#18A058'
        },
        {
          default: () => h(Checkmark)
        }
      )
    }
  }
})
