import { NAnchor, NAnchorLink } from 'naive-ui'
import { defineComponent, h } from 'vue'
import { useAnchors, type AnchorItem } from '../hooks/anchors/use-anchors'

function renderAnchorList(options: AnchorItem[]) {
  return options.reduce((prev, cur) => {
    const curAnchorLink = h(
      NAnchorLink,
      { title: cur.label, href: cur.path },
      cur.children ? renderAnchorList(cur.children) : []
    )
    prev.push(curAnchorLink)
    return prev
  }, [] as any)
}

export default defineComponent({
  name: 'SiderAnchor',
  render() {
    const { anchorOptions } = useAnchors()
    const anchorList = renderAnchorList(anchorOptions.value)
    return h(
      NAnchor,
      {
        showRail: false,
        affix: true,
        listenTo: '.n-scrollbar-container',
        triggerTop: 112,
        ignoreGap: true,
        bound: 300
      },
      anchorList
    )
  }
})
