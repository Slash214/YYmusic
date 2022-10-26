<template>
  <HeadersVue></HeadersVue>
  <div class="container">
    <div class="left">
      <Menu></Menu>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "./menu/index.vue";
import HeadersVue from "@/components/Headers.vue";
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	overflow: hidden;
	display: flex;
	.left {
		width: $menu-width;
	    background-color: #f0f0f0;
        height: 720px;
		overflow-y: scroll;
		padding: 25px;
	}
}
</style>
