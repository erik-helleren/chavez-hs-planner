import * as React from "react";
import FieldProps from "./field-props";
import FieldValidationState from "./field-validation-state";
import FieldContainer from "./field-container";
import createFieldChangeHandler from "./create-field-change-handler";

const DropdownField: React.SFC<FieldProps> = (props) => {

  const validation = props.validator ? props.validator(props.value) 
                                     : FieldValidationState.NEUTRAL;

  const createFieldChangeHandler = (props: FieldProps): React.ChangeEventHandler<any> => {
    return (ev): void => {
      const newValue = ev.currentTarget.value;
      const shouldUpdate = props.restrictor ? props.restrictor(newValue)
                                             : true;

      if (shouldUpdate) {
        props.onChange(newValue);
      }
    }
  };

  return (
    <FieldContainer className={props.className} label={props.label} validation={validation}>
      <select className="field-input-element" onChange={createFieldChangeHandler(props)}>
        {props.children}
      </select>
    </FieldContainer>
  );
};

export default DropdownField;

