import Vue from 'vue';
import Modal from "./Modal.vue";

export const openModal = () => {
  const ModalConstructor = Vue.extend(Modal);

  const modalInstance = new ModalConstructor();

  modalInstance.$mount();

  document.body.appendChild(modalInstance.$el);
};
