import React from "react";
import { DeepMap, FieldError } from "react-hook-form";

export default function ValidableField(props: {
  nomeCampo: string;
  nomeExibido: string;
  hasPlaceholder: boolean;
  errors: DeepMap<Record<string, any>, FieldError>;
  register: Function;
  setValue: Function;
  required: boolean;
  disabled: boolean;
  password: boolean;
  appendedContent: JSX.Element;
  number: boolean;
  decimal: boolean;
  min: number;
  max: number;
  showLabel: boolean;
  width: string;
  size: "form-control-lg" | "form-control" | "form-control-sm";
}) {
  const getType = () => {
    if (props.password) return "password";
    else if (props.number) return "number";
    else return "text";
  };

  const renderCssError = () => {
    return !props.errors[props.nomeCampo]
      ? "form-group flex-field"
      : "form-group flex-field has-danger";
  };

  const renderCssErrorField = () => {
    return props.errors[props.nomeCampo]
      ? `form-control is-invalid ${props.width} ${props.size}`
      : `form-control ${props.width} ${props.size}`;
  };

  const renderField = () => (
    <>
      <input
        type={getType()}
        step={props.decimal ? "any" : ""}
        className={renderCssErrorField()}
        name={props.nomeCampo}
        placeholder={props.hasPlaceholder ? props.nomeExibido : ""}
        disabled={props.disabled}
        onChange={e => {
          if (props.setValue) props.setValue(props.nomeCampo, e.target.value);
        }}
        min={props.min}
        max={props.max}
        ref={props.register({
          required: props.required
        })}
      />
    </>
  );

  return (
    <div className={renderCssError()}>
      {props.showLabel ? <label>{props.nomeExibido}</label> : ""}

      {props.appendedContent ? (
        <div className="input-group">
          {renderField()}
          <div className="input-group-append">{props.appendedContent}</div>
        </div>
      ) : (
        <>{renderField()}</>
      )}
    </div>
  );
}

ValidableField.defaultProps = {
  hasPlaceholder: true,
  setValue: null,
  required: true,
  disabled: false,
  password: false,
  number: false,
  decimal: false,
  min: 0,
  max: null,
  showLabel: true,
  width: "",
  size: "form-control",
  appendedContent: null
};
