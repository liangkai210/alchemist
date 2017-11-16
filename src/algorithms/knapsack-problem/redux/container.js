import { connect } from "react-redux";

import Table from "presentational/Table";
import Buttons from "presentational/Buttons";
import Dashboard from "presentational/Dashboard";
import Modal from "presentational/Modal";
import Header from "presentational/Header";

import { buttonClick, closeModal, openModal } from "./actions";

export const createButtons = () => {
  const mapStateToProps = state => ({
    ...state,
    buttons: state.knapsackProblemReducer.buttons
  });
  const mapDispatchToProps = dispatch => ({
    onClick: buttonValue => {
      dispatch(buttonClick(buttonValue));
    }
  });
  return connect(mapStateToProps, mapDispatchToProps)(Buttons);
};

export const createModal = () => {
  const mapStateToProps = state => ({
    ...state,
    showModal: state.knapsackProblemReducer.showModal,
    closeModal: state.knapsackProblemReducer.closeModal,
    modalTitle: state.knapsackProblemReducer.modalTitle,
    modalBody: state.knapsackProblemReducer.modalBody
  });
  const mapDispatchToProps = dispatch => ({
    closeModal: () => {
      dispatch(closeModal());
    }
  });
  return connect(mapStateToProps, mapDispatchToProps)(Modal);
};

export const createHeader = () => {
  const mapStateToProps = state => ({
    ...state,
    title: state.knapsackProblemReducer.title,
    openModal: state.knapsackProblemReducer.openModal
  });
  const mapDispatchToProps = dispatch => ({
    openModal: () => {
      dispatch(openModal());
    }
  });
  return connect(mapStateToProps, mapDispatchToProps)(Header);
};
