export type Action = { type: string, payload?: number | string };

// Underscores vs. hyphens
export const BUTTON_CLICK: string = "EGG_DROPPING_PROBLEM_BUTTON_CLICK";
export const OPEN_MODAL_CLICK: string = "EGG_DROPPING_PROBLEM_OPEN_MODAL_CLICK";
export const CLOSE_MODAL_CLICK: string =
  "EGG_DROPPING_PROBLEM_CLOSE_MODAL_CLICK";
export const REFRESH_DATA_CLICK: string = "EGG_DROPPING_PROBLEM_REFRESH_CLICK";

export const refreshData = (): Action => ({ type: REFRESH_DATA_CLICK });
export const closeModal = (): Action => ({ type: CLOSE_MODAL_CLICK });
export const openModal = (): Action => ({ type: OPEN_MODAL_CLICK });
export const buttonClick = (value: number | string): Action => ({
  type: BUTTON_CLICK,
  payload: value
});
