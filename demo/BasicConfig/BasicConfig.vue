<template>
  <section>
    <ConfigLineWrapper :title="'边框'">
      <template #right>
        <n-switch v-model:value="basicConfig.bordered" />
      </template>
    </ConfigLineWrapper>
    <ConfigLineWrapper :title="'尺寸'">
      <template #right>
        <n-radio-group
          v-model:value="basicConfig.size"
          name="radiobuttongroup1"
        >
          <n-radio-button
            v-for="sizeOps in ['small', 'medium', 'large']"
            :key="sizeOps"
            :value="sizeOps"
          >
            {{ basicConfig.size }}
          </n-radio-button>
        </n-radio-group>
      </template>
    </ConfigLineWrapper>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NSwitch, NInput, NRadio, NRadioGroup } from 'naive-ui'
import ConfigLineWrapper from './ConfigLineWrapper.vue'
import useBasicConfig from './useBasicConfig'

export default defineComponent({
  components: {
    ConfigLineWrapper,
    NSwitch,
    NInput,
    NRadio,
    NRadioGroup
  },
  setup() {
    const basicConfigRef = useBasicConfig()

    return {
      basicConfig: basicConfigRef
    }
  }
})
</script>

<style></style>
