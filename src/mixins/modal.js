export default {
	data() {
		return {
			modalOpen: false,
		};
	},
	methods: {
		openModal() {
			this.modalOpen = true;
		},
		closeModal() {
			this.modalOpen = false;
		},
		confirmModal() {
			// some confirmation action here
			this.closeModal();
		},
		modalOpened() {
			console.log('modal opened');
		},
	},
};
