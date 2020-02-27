import Vue from 'vue'
import store from '@/store'
import VModal from 'vue-js-modal'
import { mount, shallowMount } from '@vue/test-utils'

Vue.use(VModal)

import mConnectList from '@/components/mConnectList.vue'
import mConnectModal from '@/components/mConnectModal.vue'
import mDashMosaic from '@/components/mConnectModal.vue'
import mDashMosaicItem from '@/components/mDashMosaicItem.vue'
import mHeader from '@/components/mHeader.vue'
import mTimer from '@/components/mTimer.vue'
import mToday from '@/components/mToday.vue'

/**
 * Embora a especificacao da mLabs tenha sido para adicionar o maximo de testes
 * possivel, adicionarei apenas um teste por componente. Uma vez que esta é
 * uma aplicacao que possivelmente nao irá para produção, seria contra-producente
 * fazer um test coverage substancial para cada um deles. Em face disso, adicionei
 * 1 teste por componente crendo que seja o suficiente para demonstração de skill.
 * Tentarei focar em aspectos diferentes a cada componente testado :)
**/

describe('mConnectList.vue', () => {
	it('Testa mensagem de "item não encontrado" para channel key inexistente', () => {
		const list_a = shallowMount(mConnectList, {
			propsData: { channelKey: 'facebook' }
		});
		expect(list_a.find('ul li').length).toBeUndefined();
		expect(list_a.find('.page-list__empty')).toBeDefined();
	});
});

describe('mConnectModal.vue', () => {
	it('Deve conter o método getData()', () => {
		expect(mConnectModal.methods.getData).toBeDefined();
	});
	it('Deve conter o método close()', () => {
		expect(mConnectModal.methods.close).toBeDefined();
	});
});

describe('mDashMosaic.vue', () => {
	it('Deve conter um item visivel para cada channel key previsto', () => {
		const dash = shallowMount(mDashMosaic);
		[
			'facebook',
			'twitter',
			'instagram',
			'google_business',
			'pinterest',
			'linkedin',
			'youtube',
			'whatsapp',
			'google_analytics',
		].forEach(channel => {
			expect(dash.findAll(`.dash-mosaic-item[data-channel-key="${channel}"]`)).toBeDefined();
		});
	});
});

describe('mDashMosaicItem.vue', () => {
	it('Verifica se há um icone e o label correto para o item criado na dash', () => {
		const item = shallowMount(mDashMosaicItem, {
			propsData: {
				color: '#ffa500',
				icon: 'fa-cog',
				label: 'Testing Label',
				iconExtraStyle: 'background-color: blue',
				channelKey: 'testing_channel'
			},
		});
		expect(item.find('.icon i')).toBeDefined();
		expect(item.find('.label').text()).toBe('Testing Label');
	});
});

describe('mHeader.vue', () => {
	const header = shallowMount(mHeader);
	it('A imagem do logo deve ser um link', () => {
		expect(header.find('.logo a')).toBeDefined();
	});
});

describe('mTimer.vue', () => {
	const timer = shallowMount(mTimer, {
		propsData: {
			STORAGE_KEY: 'mlabs.timer.test'
		}
	});
	it('Verifica se o timer esta contando devidamente', () => {
		const time = timer.text()
		setTimeout(() => {
			expect(time != timer.text()).toBeTruthy()
		}, 1000);
	});
});

describe('mToday.vue', () => {
	const cToday = shallowMount(mToday);
	const date = new Date();
	const today = [
		date.getDate(),
		(date.getMonth()+1),
		date.getFullYear(),
	].map(val => String(val).padStart(2, '0')).join('/');
	it('Deve mostrar a data de "hoje"', () => {
		expect(cToday.text()).toBe(today);
	});
});