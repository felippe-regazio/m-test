<template>
	<span class="m-today" data-cy="today">{{today}}</span>
</template>

<script>
	export default {
		name: 'm-today',
		computed: {
			today () {
				// cria um array com [dia, mes, ano], mapeia prefixando
				// com 0 os valores unos e junta tudo separando por /
				const date = new Date();
				return [
					date.getDate(),
					(date.getMonth()+1),
					date.getFullYear(),
				].map(val => String(val).padStart(2, '0')).join('/');
			}
		}
	}
</script>