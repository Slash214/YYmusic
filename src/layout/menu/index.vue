<template>
  <ul class="list">
    <li
      v-for="(item, key) of 20"
      :key="item"
      class="item"
      :class="currentkey === key ? 'active' : ''"
      @click="handleClick(key)"
    >
      菜单{{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentkey = ref(0);

const handleClick = (e: number) => {
  currentkey.value = e;
};
</script>

<style scoped lang="scss">
.list {
  .item {
    padding: 5px 10px;
    border-radius: 6px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .active {
    background-color: #1ecf9d;
    color: #fff;
  }
}
</style>
