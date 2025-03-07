import Modal from "./components/Modal.vue";

export const openModal = () => {
  const modal = new Modal();
  modal.$mount();
  document.body.appendChild(modal.$el);
};
