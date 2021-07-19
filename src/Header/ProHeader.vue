<template>
  <slot>
    <n-grid cols="1 s:1 m:1 l:2 xl:2 2xl:2" :responsive="'screen'">
      <n-gi>
        <render-helper v-if="headerTitle" :render="headerTitle" />
        <n-tooltip v-if="headerTitleToolTip">
          <template #trigger>
            <n-icon style="margin-left: 20px">
              <information-circle />
            </n-icon>
          </template>
          {{ headerTitleToolTip }}
        </n-tooltip>
      </n-gi>
      <n-gi v-if="toolBars && toolBars.length" style="flex: end">
        <render-helper
          v-for="toolBarRender in toolBars"
          :render="toolBarRender"
        />
      </n-gi>
    </n-grid>
  </slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NGrid, NGi, NIcon } from 'naive-ui'
import { InformationCircle } from '@vicons/ionicons5'
import { RenderHelper } from '../utils'
import { headerPropsDefine } from '@/commonProps'

export default defineComponent({
  name: 'ProHeader',
  components: {
    NGrid,
    NGi,
    NIcon,
    InformationCircle,
    RenderHelper
  },
  props: {
    ...headerPropsDefine
  }
})
</script>
