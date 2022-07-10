import { CopyOutline, Checkmark } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { defineComponent, ref, h } from 'vue'

const copyToClipBoard = async (
  clipBoardContent: string | undefined | number
) => {
  if (clipBoardContent === undefined) {
    return
  }
  clipBoardContent = '' + clipBoardContent
  await navigator.clipboard.writeText(clipBoardContent)
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
            onClick: handleClick
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
