<template>
	<div
		v-if="showModal"
		class="container"
		id="modal">
		<div class="modal__wrapper" @click="onBgClick">
			<div class="modal" :class="state" @click="onModalClick">
				<div class="modal__header" :class="isHeaderSpecial">
					<span>
						<button v-if="closeable"
							class="modal__close"
							@click="onClose">✕</button>
					</span>
					<span>
						<span v-if="state == 'normal'" class="modal__title">{{ title }}</span>
					</span>
				</div>
				<div class="modal__content">
					<slot v-if="isNormal" class="modal__content-text" name="content"></slot>
					<div v-else class="modal__content-container">
						<span class="modal__content-left" :class="state">
							<i :class="stateIconClass" />
						</span>
						<div class="modal__content-right">
							<div class="modal__content-title">{{ title }}</div>
							<slot name="content"></slot>
						</div>
					</div>
				</div>
				<div class="modal__footer">
					<slot name="footer">
						<button
							class="modal__button"
							@click="onClose">
							Fermer
						</button>
						<button
							class="modal__button modal__button--primary"
							:class="state"
							@click="onConfirm">
							Confirmer
						</button>
					</slot>
				</div>
			</div>
		</div>
		<div class="background" />
	</div>
</template>

<script>
import '../../styles/components/_modal.scss';

export default {
	data() {
		return {
			showModal: false,
		};
	},
	props: {
		active: {
			type: Boolean,
			required: true,
			default: false,
		},
		title: {
			type: String,
			required: true,
		},
		closeOnOutsideClick: {
			type: Boolean,
			required: false,
			default: false,
		},
		state: {
			type: String,
			required: true,
			default: 'normal',
		},
		closeable: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
	computed: {
		stateIconClass() {
			let icon;

			if (this.state === 'info') {
				icon = 'fas fa-info-circle';
			} else if (this.state === 'success') {
				icon = 'fas fa-check-circle';
			} else if (this.state === 'alert') {
				icon = 'fas fa-exclamation-triangle';
			} else if (this.state === 'danger') {
				icon = 'fas fa-exclamation-circle';
			}
			return icon;
		},
		isNormal() {
			return this.state === 'normal';
		},
		isHeaderSpecial() {
			if (this.state !== 'normal') {
				return 'modal__header--special';
			}
			return '';
		},
	},
	watch: {
		active(val) {
			if (val) {
				this.showModal = true;
				this.onOpen();
			} else {
				this.showModal = false;
			}
		},
	},
	methods: {
		onClose() {
			this.$emit('close');
		},
		onConfirm() {
			this.$emit('confirm');
		},
		onBgClick() {
			if (this.closeOnOutsideClick) {
				this.onClose();
			}
		},
		onModalClick(e) {
			e.stopPropagation();
		},
		onOpen() {
			this.$emit('open');
		},
	},
	beforeUpdate() {
		if (!this.$slots.content) {
			console.warn('this modal has no content!');
			this.showModal = false;
		}
	},
};
</script>