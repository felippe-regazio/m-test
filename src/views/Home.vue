<template>
	<div class="home">
		<m-header/>
		<m-dash-mosaic/>
	</div>
</template>

<script>

	import mHeader from '@/components/mHeader.vue'
	import mDashMosaic from '@/components/mDashMosaic.vue'

	export default {
		name: 'Home',
		components: {
			mHeader,
			mDashMosaic
		}
	}
</script>
