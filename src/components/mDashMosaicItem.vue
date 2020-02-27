<template>
	<div v-if="!connected" class="dash-mosaic-item" :data-channel-key="channelKey" data-cy="dash-item">
		<div class="dash-mosaic-item__content">
			<div class="icon">
				<i :class="`fab ${icon}`" :style="`background-color: ${color}; ${iconExtraStyle}`"></i>
			</div>
			<div class="label">
				<span>{{label}}</span>
			</div>
			<div class="action">
				<button @click="$modal.show('connect-modal', $props)" data-cy="add-channel">Adicionar</button>
			</div>
		</div>
		<div class="help" v-if="tooltip">
			<span class="fa fa-question" v-tooltip.auto="{content: tooltip, container: '.dash-mosaic'}"></span>
		</div>
	</div>
	<div v-else class="dash-mosaic-item connected" :data-channel-key="channelKey" :style="`background-color: ${color}; ${iconExtraStyle}`" data-cy="dash-connected-item">
		<!-- caso alguma pagina tenha sido conectada,
		os dados dela estarao disponiveis em connected -->
		<section class="connected__content">
			<header :title="label">
				<span class="label">{{label}}</span>
				<span class="close" @click="unlink(channelKey)"><i class="fa fa-times"></i></span>
			</header>
			<div class="holder">
				<i :class="`fab ${icon}`"></i>
				<div class="info">
					{{connected.name}}
				</div>
			</div>
		</section>
	</div>
</template>

<script>

	import Vue from 'vue'

	export default {
		name: 'm-dash-mosaic-item',
		props: {
			color: {
				type: String,
				default: '#000000'
			},
			icon: {
				type: String,
				default: 'icon-none'
			},
			label: {
				type: String,
				default: 'Label'
			},
			iconExtraStyle: {
				type: String,
				default: ''
			},
			tooltip: {
				type: String,
				default: ''
			},
			channelKey: {
				type: String,
				default: ''
			}
		},
		computed: {
			connected () {
				return this.items[this.channelKey]
			},
			items () {
				return this.$store ? this.$store.state.connectedPages : []
			}
		},
		methods: {
			unlink (channelKey) {
				Vue.delete(this.items, channelKey)
			}
		},
		watch: {
			items: {
				handler() {
					localStorage.setItem('mlabs.dashitems', JSON.stringify(this.items));
				},
				deep: true,
			},
		}
	}
</script>

<style lang="scss" scoped>
	.dash-mosaic-item {
		position: relative;
		outline: dotted 2px #cbcccd;
		min-height: 260px;
		outline-offset: -1px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		background-color: #F0F0F0;
		&__content {
			text-align: center;
			.icon {
				position: relative;
				i {
					width: 56px;
					height: 56px;
					border-radius: 100%;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 12px;
					color: #ffffff;
					font-size: 28px;
					box-shadow: 0px 3px 10px rgba(0,0,0,.25);
				}
			}
			.label {
				font-family: primeregular;
				font-size: 20px;
				text-transform: uppercase;
				color: #535353;
				margin-bottom: 18px;
			}
		}
		.help {
			position: absolute;
			top: 60px;
			right: 36px;
			.fa-question {
				color: #aaaaaa;
				border: solid 2px #aaaaaa;
				padding: 4px;
				border-radius: 100%;
				width: 24px;
				height: 24px;
				font-size: 14px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		&.connected {
			display: block;
			padding: 0px;
			.connected__content {
				display: block;
				header {
					height: 46px;
					display: flex;
					align-items: center;
					padding: 0 14px;
					color: #ffffff;
					text-transform: capitalize;
					background-color: rgba(0,0,0,.1);
					width: 100%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					justify-content: space-between;
					.close {
						cursor: pointer;
						opacity: .7;
						&:hover {
							opacity: 1;
						}
					}
				}
				.holder {
					padding: 14px;
					i {
						color: #ffffff;
						font-size: 46px;
					}
					.info {
						color: #ffffff;
						padding-top: 20px;
					}
				}
			}
		}
	}
</style>

<style lang="scss">
.tooltip {
  display: block !important;
  z-index: 10000;
  .tooltip-inner {
    background: #ffffff;
    color: #444444;
    border-radius: 4px;
    padding: 5px 10px 4px;
    border: solid 2px #aaaaaa;
  }
  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: #aaaaaa;
    z-index: 1;
  }
  &[x-placement^="top"] {
    margin-bottom: 5px;
    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  &[x-placement^="bottom"] {
    margin-top: 5px;
    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  &[x-placement^="right"] {
    margin-left: 5px;
    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
  &[x-placement^="left"] {
    margin-right: 5px;
    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
  &.popover {
    $color: #f9f9f9;
    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }
    .popover-arrow {
      border-color: $color;
    }
  }
  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }
  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>