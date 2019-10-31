<template>
	<div>
		<button @click="openModal">
			Ouvrir un modal de succès
		</button>
		<Modal
			:active="modalOpen"
			:title="'Modale spéciale!'"
			:state="'danger'"
			@close="closeModal"
			@confirm="confirmModal">
			<p slot="content">Vous pouvez changer son état manuellement dans le code</p>
		</Modal>
	</div>
</template>

<script>
import Modal from '../Modal/Modal.vue';
import modal from '../../mixins/modal';

export default {
	name: 'SpecialModal',
	components: {
		Modal,
	},
	mixins: [modal],
};
</script>