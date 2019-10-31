<template>
	<div>
		<button @click="openModal">
			Ouvrir un modal avec footer personnalisé
		</button>
		<Modal
			v-if="!doNotShow"
			:active="modalOpen"
			:title="'Modal avec footer personnalisé'"
			:state="'normal'"
			:closeable="false"
			@close="closeModal"
			@confirm="confirmModal">
			<p slot="content">Ce modal a un footer personnalisé que l'on peut "ne plus afficher"</p>
			<div
				class="footer"
				slot="footer">
				<div class="footer__checkbox">
					<input
						class="footer__checkbox"
						type="checkbox"
						v-model="neverShowAgain">
					<span class="footer__label">
						Ne plus afficher
					</span>
				</div>
				<div class="footer__buttons">
					<button
						@click="closeModal"
						class="modal__button">
						Fermer
					</button>
					<button
						@click="confirmModal"
						class="modal__button modal__button--primary">
						Confirmer
					</button>
				</div>
			</div>
		</Modal>
	</div>
</template>

<script>
import Modal from '../Modal/Modal.vue';
import modal from '../../mixins/modal';
// inclure un fichier de style en adéquation avec le footer utilisé
import '../../styles/components/examples/_modalWithFooter.scss';

export default {
	name: 'ModalWithFooter',
	components: {
		Modal,
	},
	data() {
		return {
			doNotShow: false,
			neverShowAgain: false,
		};
	},
	mixins: [modal],
	methods: {
		confirmModal() {
			this.doNotShow = this.neverShowAgain;
			// garder en cache du navigateur ou utiliser une requête backend selon le besoin
			this.closeModal();
		},
	},
};
</script>
