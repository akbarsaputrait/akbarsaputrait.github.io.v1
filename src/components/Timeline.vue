<template>
  <div class="relative w-1/2 m-8">
    <div
      class="border-r-2 border-black absolute h-full top-0"
      style="left: 15px"
    ></div>
    <ul class="list-none m-0 p-0">
      <li class="mb-10" v-for="item in list" :key="item">
        <div class="flex items-center mb-1">
          <div class="bg-black rounded-full h-8 w-8"></div>
          <div class="flex-1 ml-4 font-bold">
            {{ item.date }} - {{ item.title }}
          </div>
        </div>
        <div
          v-if="item.description"
          class="ml-12"
          v-html="item.description"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
type TimelineList = {
  date: String
  title: String
  description: String
}

import { PropType, defineComponent } from 'vue'
export default defineComponent({
  name: 'Timeline',
  props: {
    list: {
      type: Array as PropType<TimelineList[]>,
      required: true,
    },
  },
})
</script>