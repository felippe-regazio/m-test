<template>
	<div class="page-list">
		<div v-if="loading" class="page-list__loading">
			Aguarde ...
		</div>
		<div v-if="!loading && !list.length" class="page-list__empty">
			<span>Nenhum item encontrado para este canal</span>
		</div>
		<div v-if="!loading && list.length" class="page-list__content">
			<form id="page-list-form" action="/" @submit.prevent="false">
				<ul>
					<li v-for="(item, index) in list" :key="index" :data-id="item.id" :data-channel-key="item.channel_key">
						<div class="image">
							<img :src="item.picture">
						</div>
						<div class="info">
							<h4>{{item.name}}</h4>
							<a :href="item.url" target="_blank">{{item.url}}</a>
						</div>
						<div class="selector">
							<input type="radio" name="selected_item" :value="item.id" :data-channel-key="item.channel_key" :data-channel-data="JSON.stringify(item)">
						</div>
					</li>
				</ul>
			</form>
		</div>
	</div>
</template>

<script>

	import API from '@/shared/apiClient.js'

	export default {
		name: 'page-list',
		props: {
			channelKey: {
				type: String,
				default: ''
			}
		},
		data () {
			return {
				list: [],
				loading: true
			}
		},
		methods: {
			/**
			 * Pega o array de items vindo da API e filtra por channel key
			 *
			 * @param data {Array} array de items contendo um channel key
			 * @param channel {String} filtro
			 * @return {Array} array filtrado ou null
			 */
			filterByChannel(data, channel) {
				return data.filter(key => key.channel_key && key.channel_key === channel);
			}
		},
		created () {
			this.loading = true
			API.get({
				endpoint: 'pages',
				success: response => {
					const data = response.data.data;
					if (!data) return;

					if (this.channelKey) {
						this.list = this.filterByChannel(data, this.channelKey);
					} else {
						this.list = data;
					}
				},
				error: error => {
					alert('Um erro inesperado ocorreu :(');
					console.error(error);
				},
				finally: () => {
					this.loading = false;
				}
			})
		}
	}
</script>

<style lang="scss">
	.page-list {
		> div {
			margin: 20px 0;
			min-height: 46px;
			max-height: 170px;
			background-color: #eeeeee;
			overflow: auto;
		}
		&__loading,
		&__empty {
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #444;
		}
		ul {
			padding: 0;
			margin: 0;
			list-style: none;
			li {
				min-height: 70px;
				padding: 14px;
				border-bottom: solid 1px #fff;
				display: grid;
				grid-template-columns: 70px minmax(126px, auto) 30px;
				grid-gap: 20px;
				width: 100%;
				overflow: hidden;
				word-break: break-all;
				h4 {
					margin: 0;
					font-size: 20px;
					font-weight: 400;
					margin-bottom: 8px;
				}
				a {
					color: #aaaaaa;
					text-decoration: none;
				}
				img {
					width: 70px;
					height: 70px;
					object-fit: cover;
					border: solid 1px #444444;
				}
				.selector {
					width: 100%;
					display: inline-flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
</style>