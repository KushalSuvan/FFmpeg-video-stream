/* eslint-disable react/prop-types */
import styled from "styled-components";

const StepHeader = (props) => {
  return (
    <StepHeaderWrapper $align={props.align} role="status">
      <div className="step-indicator">
        Step <b>{props.stepCount}</b> of <b>{props.stepTotal}</b>
      </div>
      <h1 className="step-title">{props.children}</h1>
    </StepHeaderWrapper>
  );
};

const StepHeaderWrapper = styled.div`
  text-align: ${(props) => props.$align || "inherit"};
  color: #333;

  margin-bottom: 0.4em;

  .step-indicator {
    text-align: inherit;
    text-transform: uppercase;
    font-size: 13px;

    line-height: 19px;
  }

  .step-title {
    text-align: inherit;
    font-size: 32px;
  }
`;

export default StepHeader;
