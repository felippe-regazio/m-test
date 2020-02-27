<template>
	<div class="dropdown-holder">
		<span class="trigger">
			{{label}}
			<i class="fa fa-chevron-down"></i>
		</span>
		<div class="dropdown" data-cy="my-account-dropdown">
			<slot/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'm-dropdown',
		props: {
			label: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dropdown-holder {
		z-index: 10;
		height: 100%;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		width: 100%;
		position: relative;
		.trigger {
			i {
				margin-left: 4px;
				&.fa-user {
					display: none;
				}
			}
		}
		.dropdown {
			opacity: 0;
			visibility: hidden;
			position: absolute;
			top: 46px;
			left: 50%;
			transform: translateX(-50%);
			background-color: var(--global-gray-a);
			min-width: 230px;
			min-height: 100px;
			border-radius: 4px;
			transition: 200ms;
			transition-delay: 200ms;
		}
		&:hover, &:active {
			.dropdown {
				top: 32px;
				opacity: 1;
				transition: 200ms;
				visibility: visible;
			}
		}
	}
</style>