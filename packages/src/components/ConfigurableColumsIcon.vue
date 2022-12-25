<!-- <script lang="ts" setup>
import Draggable from 'vuedraggable'
import {
  computed,
  defineProps,
  withDefaults,
  defineEmits,
  ref,
  onUpdated
} from 'vue'

import MenuIcon from '../assets/menu-manage.svg'
import LockedIcon from '../assets/locked.svg'
import SelectedIcon from '../assets/selected.svg'
import UnSelectedIcon from '../assets/unselected.svg'
import DragIcon from '../assets/drag.svg'
import NoDragIcon from '../assets/no-drag.svg'
import { ItemStatus } from '@/types'

interface Item {
  label: string
  type: ItemStatus
  key: string
  fixed: boolean
}

const props = withDefaults(defineProps<{ items: Item[] }>(), {
  items: [] as Item[]
})
const popoverRef = ref<any>(null)
onUpdated(() => {
  if (popoverRef.value) {
    popoverRef.value.syncPosition()
  }
})

const emit = defineEmits(['update:items'])

const popoverShow = ref(false)
const lockedData = computed(() =>
  props.items.filter((value) => value.type === ItemStatus.Locked)
)
const unlockedData = computed({
  get: () => props.items.filter((value) => value.type !== ItemStatus.Locked),
  set: (val) => {
    emit('update:items', [...lockedData.value, ...val])
  }
})

const handleItemClk = (key: string) => {
  const newUnSelectedData = [...unlockedData.value]
  const itemIndex = newUnSelectedData.findIndex((item) => item.key === key)
  if (itemIndex === -1) return
  const item = newUnSelectedData[itemIndex]

  item.type =
    item.type === ItemStatus.Selected
      ? ItemStatus.UnSelected
      : ItemStatus.Selected

  unlockedData.value = newUnSelectedData
}
</script>

<template>
  <n-popover
    ref="popoverRef"
    v-model:show="popoverShow"
    class="drag-sort"
    placement="bottom-end"
    trigger="click"
    style="
      left: 30px;
      margin-top: 10px;
      margin-left: 10px;
      padding: 0 0 15px 0;
      width: 320px;
    "
  >
    <template #trigger>
      <n-tooltip
        trigger="hover"
        :style="{ padding: '10px 16px 10px 16px', marginBottom: '13px' }"
      >
        <template #trigger>
          <n-icon
            size="24"
            class="drag-sort__menu"
            :class="[{ 'drag-sort__menu--clicked': popoverShow }]"
          >
            <MenuIcon />
          </n-icon>
        </template>
        管理字段
      </n-tooltip>
    </template>
    <div
      v-for="element in lockedData"
      :key="element.key"
      class="drag-sort__item drag-sort__item--locked"
    >
      <div class="drag-sort__item__left">
        <div class="drag-sort__icon drag-sort__icon__left is-disabled">
          <n-icon size="24">
            <LockedIcon />
          </n-icon>
        </div>
        <span>{{ element.label }}</span>
      </div>
      <n-icon size="24">
        <NoDragIcon />
      </n-icon>
    </div>
    <Draggable v-model="unlockedData" item-key="label" handle=".draggable">
      <template #item="{ element }">
        <div v-if="!element.fixed" :class="['drag-sort__item']">
          <div class="drag-sort__item__left">
            <div
              class="drag-sort__icon drag-sort__icon__left"
              @click="handleItemClk(element.key)"
            >
              <n-icon size="24">
                <component
                  :is="
                    element.type === ItemStatus.Selected
                      ? SelectedIcon
                      : UnSelectedIcon
                  "
                />
              </n-icon>
            </div>
            <span>{{ element.label }}</span>
          </div>
          <n-icon
            size="24"
            :class="{
              'icon-drag': true,
              draggable: element.type === ItemStatus.Selected
            }"
            :color="
              element.type === ItemStatus.Selected ? '#CCCCCC' : '#E8E8E8'
            "
          >
            <DragIcon />
          </n-icon>
        </div>
      </template>
    </Draggable>
    <div
      v-for="element in unlockedData.filter((item) => item.fixed)"
      :key="element.key"
      :class="['drag-sort__item']"
    >
      <div class="drag-sort__item__left">
        <div
          class="drag-sort__icon drag-sort__icon__left"
          @click="handleItemClk(element.key)"
        >
          <n-icon size="24">
            <component
              :is="
                element.type === ItemStatus.Selected
                  ? SelectedIcon
                  : UnSelectedIcon
              "
            />
          </n-icon>
        </div>
        <span>{{ element.label }}</span>
      </div>
      <n-icon
        size="24"
        :class="{ draggable: element.type === ItemStatus.Selected }"
        :color="element.type === ItemStatus.Selected ? '#CCCCCC' : '#E8E8E8'"
      >
        <NoDragIcon />
      </n-icon>
    </div>
  </n-popover>
</template>

<style lang="scss" scoped>
.drag-sort__menu {
  margin-bottom: -3px;
  cursor: pointer;
  :deep(path) {
    fill: #999;
  }
  &:hover {
    :deep(path) {
      fill: #3d88eb;
    }
  }

  &.drag-sort__menu--clicked {
    :deep(path) {
      fill: #1c74e8;
    }
  }
}

.drag-sort {
  .drag-sort__item {
    user-select: none;
    display: flex;
    align-items: center;
    padding: 0 24px 0 12px;
    height: 34px;

    &:hover {
      background: #f5f9fd;
    }

    &:first-of-type {
      padding-top: 4px;
      border-radius: 16px 16px 0 0;
    }
    .icon-drag {
      cursor: not-allowed;
    }
    &:deep(.icon-drag.draggable) {
      cursor: move;
    }
  }

  .drag-sort__item--locked {
    cursor: default;
  }

  .drag-sort__icon {
    width: 24px;
    height: 24px;
  }

  .drag-sort__icon__left {
    margin-right: 8px;
    cursor: pointer;
    &.is-disabled {
      cursor: not-allowed;
    }
  }

  .drag-sort__item__left {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
}
</style> -->
