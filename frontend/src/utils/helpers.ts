export const CLOSE_MODAL_BUTTON_SUFFIX = "-close-button";

export const generateRandomNumber = (length: number) => {
  let dynamicLength = "1";
  for (let i = 0; i < length; i++) {
    dynamicLength += "0";
  }
  return Math.floor(Math.random() * Number(dynamicLength)).toString();
};
