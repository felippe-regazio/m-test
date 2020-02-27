<template>
	<span class="m-timer" data-cy="timer" v-if="time">{{time}}</span>
</template>

<script>
	export default {
		name: 'm-timer',
		mounted () {
			this.saveAccessTime();
			this.calcElapsedTime();
			setInterval(() => this.count(), 1000);
		},
		data () {
			return {
				h: 0, m: 0, s: 0,
				time: undefined,
			}
		},
		props: {
			STORAGE_KEY: {
				type: String,
				required: true
			}
		},
		methods: {
			/*
			 * Continua contando o tempo sobre o valor de this[h,m,s]
			 * O retorno trunca o valor pra remover decimais, stringifica
			 * e adiciona um leading 0 em valores com length < 2, depois
			 * da um join nos valores tendo : como clue char
			 *
			 * @params void
			 * @return Time {String} nova hora de 1 em 1 sec
			 */
			count () {
				this.s++;
				if (this.s >= 60) {
					this.s = 0;
					this.m++
				}
				if (this.m >= 60) {
					this.m = 0;
					this.h++;
				}
				this.time = [
					this.h,
					this.m,
					this.s
				].map(val => String(Math.trunc(val)).padStart(2, '0')).join(':');
			},
			/*
			 * Salva na sessionStorage o momento em que o timer foi inicializado
			 *
			 * @params void
			 * @return Data {Date Object} saved time
			 */
			saveAccessTime () {
				if (window.sessionStorage && !window.sessionStorage.getItem(this.STORAGE_KEY)) {
					const DATE = new Date();
					return window.sessionStorage.setItem(this.STORAGE_KEY, DATE);
				}
			},
			/*
			 * Recupera da sessionStorage o momento em que foi inicializado
			 *
			 * @params void
			 * @return Data {Date Object} saved time
			 */
			getAccessTime () {
				let date = undefined;
				if (window.sessionStorage && window.sessionStorage.getItem(this.STORAGE_KEY)) {
					date = window.sessionStorage.getItem(this.STORAGE_KEY);
				} else {
					date = this.saveAccessTime();
				}
				return new Date(date);
			},
			/*
			 * A data do inicio do timer é esta salva na sessionStorage. A partir
			 * dessa data calcula-se quanto tempo se passou desde o 1o acesso,
			 * converte-se pra h:m:s e seta-se como valores pra this[h,m,s]
			 *
			 * @params void
			 * @return Data {Date Object} saved time
			 */
			calcElapsedTime () {

				const date_now = new Date();
				const date_past = this.getAccessTime();

				let delta   = Math.abs(date_now - date_past) / 1000;
				let days    = Math.floor(delta / 86400);

				delta -= days * 86400;
				this.h = Math.floor(delta / 3600) % 24;
				delta -= this.h * 3600;
				this.m = Math.floor(delta / 60) % 60;
				delta -= this.m * 60;
				this.s = delta % 60;
			}
		}
	}
</script>