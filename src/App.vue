<template>
	<div id="app">
		<router-view/>
		<m-connect-modal/>
	</div>
</template>

<script>

	import '@/shared/global.js'
	import mConnectModal from '@/components/mConnectModal.vue'

	export default {
		name: 'App',
		components: {
			mConnectModal
		}
	}
</script>

<style lang="scss">
	@import 'shared/Prime-WebFont/style.css';
	@import 'shared/global.scss'
</style>