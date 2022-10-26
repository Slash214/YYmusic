<template>
  <div class="box">
	<div class="left">
		LOGO
	</div>
	<div class="right">
		内容
	</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.box {
	-webkit-app-region: drag;
	height: 80px;
	line-height: 80px;
	display: flex;
	.left {
		background-color: #f0f0f0;
		width: $menu-width;
	}
	.right {
		flex: 1;
		background-color: #f6f6f6;
	}
}
</style>
