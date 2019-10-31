<template>
	<div id="app">
		<BasicRegularModal />
		<ModalWithFooter />
		<SpecialModal />
		<ModalWithNoContent />
	</div>
</template>

<script>
import './styles/_app.scss';
import BasicRegularModal from './components/examples/BasicRegularModal.vue';
import ModalWithFooter from './components/examples/ModalWithFooter.vue';
import SpecialModal from './components/examples/SpecialModal.vue';
import ModalWithNoContent from './components/examples/ModalWithNoContent.vue';

export default {
	name: 'App',
	components: {
		BasicRegularModal,
		ModalWithFooter,
		SpecialModal,
		ModalWithNoContent,
	},
};
</script>
