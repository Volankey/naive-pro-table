<!--
 * @LastEditors: jiwen.bai
 * @Description: jiwen.bai@tusimple.ai
-->

<script>
import { mergeProps, renderSlot, Fragment } from 'vue'

const getFirstMeaningfulVNode = (vNodes) => {
  const firstNode = vNodes
  if (firstNode.type === Fragment) {
    return getFirstMeaningfulVNode(firstNode.children[0])
  }
  return firstNode
}

export default {
  props: ['value', 'disabled'],
  data() {
    return {
      editing: false,
      shadowValue: this.value
    }
  },
  watch: {
    value() {
      this.shadowValue = this.value
    }
  },
  methods: {
    setEditStatus(value) {
      if (value) {
        this.shadowValue = this.value
      }
      if (!this.disabled) {
        this.editing = value
      }
    },
    updateValue(v) {
      this.shadowValue = v
    },
    ondblclick(e) {
      this.setEditStatus(true)
    }
  },
  render() {
    if (this.editing) {
      return renderSlot(this.$slots, 'input', {
        setEditStatus: this.setEditStatus,
        value: this.shadowValue,
        updateValue: this.updateValue,
        editing: this.editing
      })
    } else {
      const data = renderSlot(this.$slots, 'default', {
        setEditStatus: this.setEditStatus
      })
      const child = getFirstMeaningfulVNode(data)
      child.props = mergeProps(child.props)
      return child
    }
  }
}
</script>
