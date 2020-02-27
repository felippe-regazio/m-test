<template>
	<modal name="connect-modal" @before-open="getData" data-cy="dash-item-modal">
		<section class="connect-modal__content">
			<header>
				<span class="close" @click="close()"><i class="fa fa-times"></i></span>
				<h4>
					<i :class="`fab ${data.icon}`" :style="`color: ${data.color};`"></i>
					Vincular página do <span class="network-label" :style="`color: ${data.color};`">{{data.label}}</span>
				</h4>
			</header>
			<div class="holder">
				<ul class="connect-steps">
					<li data-label="Verificação" class="done"></li>
					<li data-label="Páginas" class="active"></li>
					<li data-label="Segmento"></li>
					<li data-label="Concorrentes"></li>
				</ul>
				<div class="connect-pages">
					<label>Selecione a página que você deseja vincular a este perfil</label>
					<m-page-list :channelKey="data.channelKey"/>
				</div>
				<div class="help">
					<p>Não encontrou sua página?</p>
					<a href="/">Clique aqui para atualizar suas permissões do {{data.label}}</a>
				</div>
			</div>
		</section>
		<footer>
			<span class="prev" @click="close()">VOLTAR</span>
			<span class="next" @click="addItem">
				PRÓXIMO
				<i class="fa fa-arrow-right"></i>
			</span>
		</footer>
	</modal>
</template>

<script>

	import Vue from 'vue'
	import mPageList from '@/components/mConnectList.vue'

	export default {
		name: 'connect-modal',
		components: {
			mPageList
		},
		data () {
			return {
				data: {}
			}
		},
		methods: {
			close () {
				this.$modal.hide('connect-modal');
			},
			getData (e) {
				// as props do mDashMosaicItem (item da dash)
				// sao passadas para o modal. assim o modal
				// sabe exatamente os dados do item clicado
				this.data = e.params
			},
			addItem () {

				const form = document.getElementById('page-list-form');
				const selected = form.querySelector('input:checked');

				if (selected) {
					const channel = selected.dataset.channelKey;
					const data = JSON.parse(selected.dataset.channelData);

					Vue.set(this.$store.state.connectedPages, channel, data);
					this.close();
				}
			}
		}
	}
</script>

<style lang="scss">
		[data-modal="connect-modal"] {
		z-index: 100000;
		.v--modal-background-click {
			display: flex !important;
			padding-top: 120px !important;
			justify-content: center !important;
		}
		.v--modal-box {
			width: 95% !important;
			max-width: 600px;
			position: initial !important;
			height: 100% !important;
			max-height: 80vh;
		}
	}
</style>

<style lang="scss" scoped>
	[data-modal="connect-modal"] {
		z-index: 100000;
		.connect-modal__content {
			padding: 10px 30px;
			header {
				position: relative;
				.close {
					position: absolute;
					right: 0;
					cursor: pointer;
					color: #888888;
				}
				h4 {
					margin: 20px 0;
					font-size: 24px;
					font-weight: 400;
					i {
						width: 40px;
						height: 40px;
						display: inline-flex;
						align-items: center;
						font-size: 20px;
						margin-right: 8px;
						justify-content: center;
						border-radius: 100%;
						border: solid 2px #cccccc;
					}
					.network-label {
						text-transform: capitalize;
					}
				}
			}
			.holder {
				/*ul*/.connect-steps {
					display: flex;
					list-style: none;
					align-items: center;
					padding: 0 20px;
					justify-content: space-between;
					li {
						display: flex;
						color: #cccccc;
						position: relative;
						justify-content: space-between;
						&:not(:last-child) {
							width: 100%;
							border-bottom: solid 2px currentColor;
						}
						&::before {
							content: "";
							width: 14px;
							height: 14px;
							border-radius: 100%;
							background-color: currentColor;
							transform: translateY(51%);
							border: solid 2px #ffffff;
						}
						&::after {
							content: attr(data-label);
							position: absolute;
							bottom: -26px;
							font-size: 12px;
							left: 0;
							right: 0;
							text-align: center;
							transform: translateX(-38%);
							display: table;
						}
						&.done {
							color: #ffa500;
						}
						&.active {
							&::before {
								background-color: #ffa500;
							}
						}
					}
				}
				.connect-pages {
					padding-top: 40px;
					> label {
						display: block;
						font-weight: 700;
						text-align: center;
						margin-bottom: 14px;
					}
				}
				.help {
					margin-bottom: 46px;
					p {
						text-align: center;
						color: #cccccc;
						font-size: 14px;
					}
					a {
						width: 100%;
						display: block;
						text-align: center;
						color: #00a9f1;
					}
				}
			}
		}
		footer {
			font-family: primeregular;
			background-color: #f1f1f1;
			display: flex;
			justify-content: space-between;
			padding: 20px;
			align-items: center;
			.prev {
				cursor: pointer;
				color: #999999;
			}
			.next {
				background-color: #00a9f1;
				padding: 14px;
				color: #ffffff;
				border-radius: 8px;
				opacity: .8;
				cursor: pointer;
				&:hover {
					opacity: 1;
				}
			}
		}
	}
</style>