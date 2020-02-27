<template>
	<div class="dash-mosaic">
		<div class="container">
			<div class="dash-mosaic__items">
				<div class="dash-mosaic__items__content">
					<m-item
						v-for="(item, index) in items"
						:key="index"
						:label="item.label"
						:icon="item.icon"
						:color="item.color"
						:tooltip="item.tooltip"
						:channelKey="item.channelKey"
						:iconExtraStyle="item.iconExtraStyle ? item.iconExtraStyle : ''"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import Vue from 'vue'
	import mItem from '@/components/mDashMosaicItem.vue'
	import VTooltip from 'v-tooltip'

	Vue.use(VTooltip)

	export default {
		name: 'm-dash-mosaic',
		components: {
			mItem
		},
		mounted () {
			const savedItems = localStorage.getItem('mlabs.dashitems');
			if (savedItems) {
				Vue.set(this.$store.state, 'connectedPages', JSON.parse(savedItems));
			}
		},
		data () {
			return {
				items: [
					{
						label:"facebook",
						tooltip: 'Lorem Ipsum Dolor Sit Amet',
						icon:"fa-facebook-f",
						color:"var(--global-color-facebook",
						channelKey: 'facebook'
					},
					{
						label:"twitter",
						tooltip: 'Lorem Ipsum Dolor Sit Amet',
						icon:"fa-twitter",
						color:"var(--global-color-twitter",
						channelKey: 'twitter'
					},
					{
						label:"instagram",
						icon:"fa-instagram",
						color:"var(--global-color-instagram",
						tooltip: 'Lorem Ipsum Dolor Sit Amet',
						iconExtraStyle:"background: #d6249f;background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);",
						channelKey: 'instagram'
					},
					{
						label:"google meu negócio",
						tooltip: 'Lorem Ipsum Dolor Sit Amet',
						icon:"fa-google",
						color:"var(--global-color-google",
						channelKey: 'google_businness'
					},
					{
						label:"pinterest",
						tooltip: 'Lorem Ipsum Dolor Sit Amet',
						icon:"fa-pinterest",
						color:"var(--global-color-pinterest",
						channelKey: 'pinterest'
					},
					{
						label:"linkedin",
						tooltip: 'Lorem Ipsum Dolor Sit Amet',
						icon:"fa-linkedin",
						color:"var(--global-color-linkedin",
						channelKey: 'linkedin'
					},
					{
						label:"youTube",
						tooltip: 'Lorem Ipsum Dolor Sit Amet',
						icon:"fa-youtube",
						color:"var(--global-color-youtube",
						channelKey: 'youtube'
					},
					{
						label:"whatsApp",
						tooltip: 'Lorem Ipsum Dolor Sit Amet',
						icon:"fa-whatsapp",
						color:"var(--global-color-whatsapp",
						channelKey: 'whatsapp'
					},
					{
						label:"analytics",
						icon:"fa fa-chart-bar",
						tooltip: 'Lorem Ipsum Dolor Sit Amet',
						color:"var(--global-color-analytics",
						channelKey: 'google_analytics'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.dash-mosaic {
		padding-top: 150px;
		padding-bottom: 50px;
		&__items {
			padding: 10px;
			&__content {
				display: flex;
				flex-wrap: wrap;
				display: grid;
				grid-template-rows: auto;
				grid-template-columns: repeat(5, 1fr);
				@media screen and (max-width: 1200px) {
					grid-template-columns: repeat(4, 1fr);
				}
				@media screen and (max-width: 820px) {
					grid-template-columns: repeat(3, 1fr);
				}
				@media screen and (max-width: 660px) {
					grid-template-columns: repeat(2, 1fr);
				}
				@media screen and (max-width: 420px) {
					grid-template-columns: repeat(1, 1fr);
				}
			}
		}
	}
</style>