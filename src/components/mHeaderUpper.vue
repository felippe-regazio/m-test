<template>
	<div class="m-header__upper">
		<div class="container">
			<div class="left">
				<m-today/>
				<m-timer STORAGE_KEY="mlabs.sessionStartedAt"/>
			</div>
			<div class="center">
				<m-dropdown label="MINHA CONTA"/>
			</div>
			<div class="right">
				<a href="/">
					<i class="fa fa-cog"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>

	import mTimer from '@/components/mTimer.vue'
	import mToday from '@/components/mToday.vue'
	import mDropdown from '@/components/mDropdown.vue'

	export default {
		name: 'm-header',
		components: {
			mTimer,
			mToday,
			mDropdown
		}
	}
</script>

<style lang="scss" scoped>
	.m-header__upper {
		color: var(--global-gray-b);
		height: 30px;
		background-color: var(--global-gray-a);
		a {
			color: var(--global-gray-b);
		}
		.container {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			> div {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1;
				font-size: 14px;
				&:first-of-type {
					justify-content: flex-start;
					> *:not(:last-child) {
						margin-right: 8px;
					}
				}
				&:last-of-type {
					justify-content: flex-end;
					a {
						height: 100%;
						min-width: 30px;
						display: flex;
						align-items: center;
						justify-content: center;
						text-decoration: none;
						.fa-cog {
							transition: 200ms;
						}
						&:hover .fa-cog {
							transform: rotate(180deg);
						}
					}
				}
			}
		}
		@media screen and (max-width: 768px) {
			.container {
				width: 100%;
				> div {
					font-size: 12px;
					&:first-of-type span:first-of-type {
						display: none;
					}
				}
			}
		}
	}
</style>