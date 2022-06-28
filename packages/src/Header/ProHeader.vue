<template>
  <slot>
    <n-grid
      cols="2 s:2 m:2 l:2 xl:2 2xl:2"
      :responsive="'screen'"
      style="padding: 16px 0; align-items: center"
    >
      <n-gi>
        <slot name="header-title">
          <n-h4 style="margin: 0">
            <render-helper v-if="headerTitle" :render="headerTitle" />
          </n-h4>
        </slot>
        <n-tooltip v-if="headerTitleToolTip">
          <template #trigger>
            <n-icon style="margin-left: 20px">
              <information-circle />
            </n-icon>
          </template>
          {{ headerTitleToolTip }}
        </n-tooltip>
      </n-gi>
      <n-gi
        v-if="toolBars && toolBars.length"
        style="display: flex; justify-content: flex-end"
      >
        <slot name="header-toolbars">
          <!-- eslint-disable-next-line vue/valid-v-for -->
          <render-helper
            v-for="toolBarRender in toolBars"
            :render="toolBarRender"
          />
        </slot>
      </n-gi>
    </n-grid>
  </slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NGrid, NGi, NIcon, NTooltip, NH4 } from 'naive-ui'
import { InformationCircle } from '@vicons/ionicons5'
import { RenderHelper } from '../utils'
import { headerPropsDefine } from '../commonProps'

export default defineComponent({
  name: 'ProHeader',
  components: {
    NGrid,
    NGi,
    NIcon,
    InformationCircle,
    RenderHelper,
    NTooltip,
    NH4,
  },
  props: {
    ...headerPropsDefine,
  },
})
</script>
