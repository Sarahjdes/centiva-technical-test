<template>
	<div>
		<button @click="openModal">
			Ouvrir la modale régulière de base
		</button>
		<Modal
			:active="modalOpen"
			:title="'Modale régulière de base'"
			:state="'normal'"
			:closeOnOutsideClick="true"
			@close="closeModal"
			@confirm="confirmModal"
			@open="modalOpened">
			<p slot="content">Bacon ipsum dolor amet kielbasa porchetta 
				boudin chuck ground round. Cow chuck swine leberkas 
				ground round sirloin porchetta spare ribs salami, 
				kevin pork belly capicola ribeye pork loin corned beef. 
				Capicola picanha tenderloin prosciutto ham hock leberkas 
				salami. T-bone turducken jerky tri-tip picanha buffalo 
				bresaola pork drumstick alcatra rump landjaege.
			</p>
		</Modal>
	</div>
</template>

<script>
import Modal from '../Modal/Modal.vue';
import modal from '../../mixins/modal';

export default {
	name: 'BasicRegularModal',
	components: {
		Modal,
	},
	mixins: [modal],
};
</script>
