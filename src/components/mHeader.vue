<template>
	<nav class="m-header" data-cy="app-header">
		<m-header-upper/>
		<m-header-middle/>
	</nav>
</template>

<script>

	import mHeaderUpper from '@/components/mHeaderUpper.vue'
	import mHeaderMiddle from '@/components/mHeaderMiddle.vue'

	export default {
		name: 'm-header',
		components: {
			mHeaderUpper,
			mHeaderMiddle
		}
	}
</script>

<style lang="scss" scoped>
	.m-header {
		z-index: 1000;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
</style>