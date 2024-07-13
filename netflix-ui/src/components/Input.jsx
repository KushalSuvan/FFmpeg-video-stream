import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Input = ({ type, label, id, value = "" }) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputFocus, setInputFocus] = useState(false);
  const [labelClass, setLabelClass] = useState("focused");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputFocus == false && inputRef.current.value == "") {
      setLabelClass("unfocused");
    } else {
      setLabelClass("focused");
    }
  }, [inputFocus]);

  return (
    <InputBlock className="input-block">
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <div className="input-container">
        <input
          ref={inputRef}
          autoComplete="email"
          type={type}
          minLength="5"
          maxLength="50"
          id={id}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
      </div>
    </InputBlock>
  );
};

const InputBlock = styled.div`
  position: relative;

  width: 100%;
  color: black;

  flex: 1 1 auto;
  border: solid #444 1px;
  border-radius: 3px;

  label {
    position: absolute;
    left: 1rem;
    right: 1rem;
    font-weight: 400;
    line-height: 1.5;

    cursor: text;
    color: rgba(0, 0, 0, 0.7);

    transition-property: top, font-size;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
  }

  label.focused {
    top: 0.5rem;
    font-size: 0.75rem;
  }

  label.unfocused {
    top: 1rem;
    font-size: 1rem;
  }

  .input-container {
    width: 100%;

    display: flex;
  }

  input {
    background-color: transparent;
    border: none;
    width: 100%;

    font-size: 1rem;
    line-height: 1.5;
    padding: 1.5rem 1rem 0.5rem;

    color: inherit;
  }
`;

export default Input;
