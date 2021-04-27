import React from "react";
import { CLOSE_MODAL_BUTTON_SUFFIX } from "utils/helpers";

type Props = {
  id: string;
  popupText: string;
  trigger: JSX.Element;
  size: "" | "modal-lg" | "modal-sm";
  title: string;
  subtitle: JSX.Element;
  content: JSX.Element;
  footer: JSX.Element;
  confirmationAction: Function;
  actionParameters: any[];
  hasCloseButton: boolean;
  backdrop: boolean;
};

export default function CustomModal(props: Props) {
  return (
    <>
      {props.trigger}

      <div
        className="modal fade"
        id={props.id}
        tabIndex={-1}
        role="dialog"
        aria-hidden="false"
        data-backdrop={props.backdrop}
      >
        <div className={`modal-dialog ${props.size}`} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <i className="form icon" /> {props.title}
                {props.subtitle && props.subtitle}
              </h5>

              {props.hasCloseButton && (
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  id={`${props.id}${CLOSE_MODAL_BUTTON_SUFFIX}`}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              )}
            </div>

            {props.content && (
              <div className="modal-body text-dark">{props.content}</div>
            )}

            {props.confirmationAction && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  data-dismiss="modal"
                >
                  <i className="x icon no-margin"></i>
                </button>

                <button
                  className="btn btn-success btn-sm btn-right-margin"
                  data-dismiss="modal"
                  onClick={() => {
                    if (props.confirmationAction && props.actionParameters) {
                      props.confirmationAction(...props.actionParameters);
                    }
                    if (props.confirmationAction && !props.actionParameters) {
                      props.confirmationAction();
                    }
                  }}
                >
                  <i className="check icon no-margin"></i>
                </button>
              </div>
            )}

            {props.footer && <div className="modal-footer">{props.footer}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

CustomModal.defaultProps = {
  popupText: "",
  subtitle: null,
  content: null,
  footer: null,
  size: "",
  confirmationAction: null,
  actionParameters: [],
  hasCloseButton: true,
  backdrop: false
};
