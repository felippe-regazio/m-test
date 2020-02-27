<template>
	<div class="m-header__middle">
		<div class="container">
			<div class="logo" data-cy="app-logo">
				<a href="/" target="_blank">
					<img src="//wpimages.mlabs.com.br/wp-content/uploads/2020/01/23135108/logo-color.webp">
				</a>
			</div>
			<div class="items">
				<ul>
					<li v-for="(item, index) in items" :key="index" :class="`item active-${item.href === $route.path}`">
						<a :href="item.href">
							<div class="item__content">
								<i :class="`icon fa ${item.icon}`"></i>
								<span class="label">{{item.label}}</span>
								<span v-if="item.badge" class="badge" :style="`background-color:${item.badgeBg || '#ffb300'}`">{{item.badge}}</span>
							</div>
						</a>
					</li>
				</ul>
				<span class="hamburger" @click="$el.classList.toggle('mobo-menu-active')">
					<i class="fa fa-bars"></i>
					<i class="fa fa-times"></i>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'm-header-middle',
		data () {
			return {
				items: [
					{
						label: 'Dashboard',
						icon: 'fa-tachometer-alt',
						href: "/"
					},
					{
						label: 'Agendar post',
						icon: 'fa-calendar-plus',
						href: "/agendar",
						badge: 'Novo'
					},
					{
						label: 'Calendário',
						icon: 'fa-calendar-alt',
						href: "/calendario"
					},
					{
						label: 'Inbox',
						icon: 'fa-inbox',
						href: "/inbox"
					},
					{
						label: 'Feed',
						icon: 'fa-newspaper',
						href: "/feed"
					},
					{
						label: 'Workflow',
						icon: 'fa-edit',
						href: "/fa-edit"
					},
					{
						label: 'Acompanhamento',
						icon: 'fa-chart-line',
						href: "/fa-chart-line"
					},
					{
						label: 'Relatórios',
						icon: 'fa-chart-pie',
						href: "/fa-chart-pie"
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-header__middle {
		background-color: #ffffff;
		border-bottom: solid 2px var(--global-gray-f);
		.container {
			height: 80px;
			display: flex;
			.logo {
				display: flex;
				align-items: center;
				height: 100%;
				max-width: 190px;
				padding: 6px 0;
				padding-right: 16px;
				img {
					display: block;
					max-height: 100%;
				}
			}
			.items {
				flex: 1;
				ul {
					height: 100%;
					padding: 0;
					margin: 0;
					list-style: none;
					display: flex;
					align-items: center;
					justify-content: space-around;
					li {
						flex: 1;
						height: 100%;
						padding: 0 6px;
						font-family: primeregular;
						opacity: .7;
						transition: 100ms;
						&.active-true {
							background-color: var(--global-gray-f);
						}
						&:hover {
							opacity: 1;
							transition: 100ms;
							.label {
								color: var(--global-primary-color);
							}
						}
						.item__content {
							height: 100%;
							color: #777777;
							text-decoration: none;
							position: relative;
							display: flex;
							align-items: center;
							justify-content: center;
							height: 100%;
							flex-wrap: wrap;
							flex-direction: column;
							.icon {
								font-size: 28px;
								margin-bottom: 8px;
							}
							.label {
								font-size: 14px;
								white-space: nowrap;
								text-transform: uppercase;
							}
							.badge {
								position: absolute;
								padding: 2px 6px;
								border-radius: 22px;
								top: 10px;
								right: 4px;
								font-size: 8px;
								display: flex;
								align-items: center;
								width: auto;
								color: #ffffff;
								font-weight: 700;
								text-transform: uppercase;
							}
							> * {
								display: block;
							}
						}
						a {
							text-decoration: none;
						}
					}
				}
			}
		}
		.hamburger {
			display: none;
		}
	}
	// break to hamburger
	@media screen and (max-width: 1023px) {
		.m-header__middle {
			ul {
				position: fixed;
				top: 30px;
				right: 0;
				width: 300px;
				max-height: calc(100vh - 30px);
				flex-direction: column;
				background-color: #fafafa;
				overflow-y: scroll;
				transform: translateX(100%);
				transition: 200ms;
				border-left: solid 1px #cccccc;
				li {
					width: 100%;
					min-height: 100px;
				}
			}
			.hamburger {
				height: 90px;
				position: absolute;
				top: 0;
				right: 20px;
				width: 28px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 20px;
				color: #777777;
				cursor: pointer;
				.fa-times {
					display: none;
				}
			}
			&.mobo-menu-active {
				ul {
					transition: 200ms;
					transform: translateX(0);
				}
				.hamburger {
					.fa-bars {
						display: none;
					}
					.fa-times {
						display: initial;
						opacity: .5;
					}
				}
			}
		}
	}
</style>