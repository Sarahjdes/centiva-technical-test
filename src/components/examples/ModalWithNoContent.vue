<template>
	<div>
		<button @click="openModal">
			Ouvrir la modale sans contenu
		</button>
		<Modal
			:active="modalOpen"
			:title="'Modale sans contenu'"
			:state="'normal'"
			:closeOnOutsideClick="true"
			@close="closeModal"
			@confirm="confirmModal"
			@open="modalOpened">
		</Modal>
	</div>
</template>

<script>
import Modal from '../Modal/Modal.vue';
import modal from '../../mixins/modal';

export default {
	name: 'ModalWithNoContent',
	components: {
		Modal,
	},
	mixins: [modal],
};
</script>