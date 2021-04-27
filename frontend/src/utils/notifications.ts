import { Notyf } from "notyf";

type Message = {
  errors: string[];
};

export const notyfSuccess = (
  message: string,
  duration: number = 4000,
  ripple: boolean = true,
  dismissible: boolean = true
) => {
  new Notyf().success({
    message: message,
    position: {
      x: "center",
      y: "bottom"
    },
    duration,
    ripple,
    dismissible
  });
};

export const notyfError = (
  message: string,
  duration: number = 4000,
  ripple: boolean = true,
  dismissible: boolean = true
) => {
  let messageText = message;

  new Notyf().error({
    message: messageText
      ? messageText
      : "Houve um erro durante o cadastro ou atualização",
    position: {
      x: "center",
      y: "bottom"
    },
    duration,
    ripple,
    dismissible
  });
};

export const notyfErrors = (messages: any) => {
  if (Object.keys(messages).length > 0) {
    let errorsList = "<ul>";
    console.log(messages);
    for (let field in messages.errors) {
      // eslint-disable-next-line no-loop-func
      messages.errors[field].forEach((error: any) => {
        errorsList += `<li>${error}</li>`;
      });
    }
    errorsList += "</ul>";
    notyfError(errorsList);
  }
};

export const notyfWarn = (
  message: string,
  duration: number = 4000,
  ripple: boolean = true,
  dismissible: boolean = true
) => {
  let messageText = message;

  new Notyf().error({
    message: messageText
      ? messageText
      : "Houve um erro durante o cadastro ou atualização",
    position: {
      x: "center",
      y: "bottom"
    },
    duration,
    ripple,
    dismissible,
    background: "#e6b517"
  });
};
