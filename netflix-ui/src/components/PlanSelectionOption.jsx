/* eslint-disable react/prop-types */
import styled from "styled-components";

const Attribute = ({ attribute }) => {
  return (
    <AttributeWrapper>
      <span className="attribute-attribute">{attribute.attribute}</span>
      <span className="attribute-value">{attribute.value}</span>
    </AttributeWrapper>
  );
};

const PlanSelectionOption = ({ plan, checked, onChange }) => {
  return (
    <PlanSelectionOptionWrapper
      $popular={plan.mostPopular ? "true" : "false"}
      $focused={checked ? "focused" : "unfocused"}
      onClick={() => {
        onChange({ target: { value: plan.type } });
      }}
      tabIndex={0}
      className={checked ? "focused" : null}
    >
      <input
        value={plan.type}
        type="radio"
        checked={checked}
        onChange={onChange}
        name="plan-select"
        id={plan.type}
      ></input>
      {plan.mostPopular && <div className="most-popular">Most Popular</div>}
      <h2>
        <label className={`${plan.type.toLowerCase()}`} htmlFor={plan.type}>
          <span className="label-plan-type">{plan.type}</span>
          <span className="label-plan-description">
            {plan.shortDescription}
          </span>
        </label>
      </h2>
      <ul>
        {plan.attributes.map((attribute) => (
          <Attribute key={attribute.attribute} attribute={attribute} />
        ))}
      </ul>
    </PlanSelectionOptionWrapper>
  );
};

const PlanSelectionOptionWrapper = styled.div`
  &.focused {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  }

  &:hover {
    cursor: pointer;
  }

  transition: box-shadow 250ms ease-in-out 0s;

  flex: 1 1 auto;
  box-sizing: border-box;
  border: solid rgb(128, 128, 128, 0.4) 1px;
  ${(props) =>
    props.$popular === "true"
      ? "border-radius: 18px; border-top-left-radius: 0; border-top-right-radius: 0;"
      : "border-radius: 18px;"}

  position: relative;

  input {
    position: absolute;
    height: 10px;
    width: 10px;
    border: none;
    background-color: red;
    clip-path: inset(5px 5px 5px 5px);
  }

  .most-popular {
    position: absolute;
    bottom: 100%;
    left: -1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;

    border: solid 1px transparent;
    background-clip: border-box;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    text-align: center;

    padding-block: 6px;

    font-size: 12px;
    font-weight: 600;

    transition: background-color 250 0 ease-in-out;
  }

  &.focused .most-popular {
    background-color: rgb(109, 59, 227);
  }

  label {
    display: flex;
    flex-direction: column;
    margin: 8px;
    padding: 10px 16px;
    min-height: 83px;

    background: #5603fc;

    color: white;

    border-radius: 12px;
    box-sizing: border-box;
  }

  .label-plan-type {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.5;
  }

  .label-plan-description {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5;
  }

  ul {
    padding-inline: 25px;

    li + li {
      border-top: solid 1px rgba(128, 128, 128, 0.4);
    }
  }

  label.premium {
    background: radial-gradient(
        140.76% 131.96% at 100% 100%,
        rgb(229, 9, 20) 0%,
        rgba(74, 42, 150, 0.5) 73.57%,
        rgba(74, 42, 150, 0) 100%
      ),
      rgb(29, 82, 157);
  }

  label.standard {
      background: radial-gradient(
          140.76% 131.96% at 100% 100%,
          rgb(176, 56, 220) 0%,
          rgba(74, 42, 150, 0.5) 73.57%,
          rgba(74, 42, 150, 0) 100%
        ),
        rgb(29, 82, 157);
    }
  }

  label.basic {
    background: radial-gradient(140.76% 131.96% at 100% 100%, rgb(109, 59, 227) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)
  }

  label.mobile {
    background: radial-gradient(140.76% 131.96% at 100% 100%, rgb(33, 114, 227) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)
  }
`;

const AttributeWrapper = styled.li`
  padding-block: 12.5px;
  list-style: none;

  display: flex;
  flex-direction: column;

  .attribute-attribute {
    font-size: 0.8125rem;
    color: rgb(118, 118, 118);
    font-weight: 600;
    line-height: 1.53846;
  }

  .attribute-value {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export default PlanSelectionOption;
