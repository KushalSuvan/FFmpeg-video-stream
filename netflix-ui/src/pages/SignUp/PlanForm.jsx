import styled from "styled-components";
import StepHeader from "../../components/StepHeader";
import PlanSelectionOption from "../../components/PlanSelectionOption";

import { useState } from "react";

function Attribute(attribute, value) {
  this.attribute = attribute;
  this.value = value;
}

const plans = [
  {
    type: "Mobile",
    shortDescription: "480p",
    attributes: [
      new Attribute("Monthly Price", "₹149"),
      new Attribute("Video and sound quality", "Fair"),
      new Attribute("Resolution", "480p"),
      new Attribute("Supported devices", "Mobile phone, tablet"),
      new Attribute("Devices your household can watch at the same time", 1),
      new Attribute("Download devices", 1),
    ],
  },
  {
    type: "Basic",
    shortDescription: "720p",
    attributes: [
      new Attribute("Monthly Price", "₹199"),
      new Attribute("Video and sound quality", "Good"),
      new Attribute("Resolution", "720p (HD)"),
      new Attribute("Supported devices", "TV, computer, mobile phone, tablet"),
      new Attribute("Devices your household can watch at the same time", 1),
      new Attribute("Download devices", 1),
    ],
  },
  {
    type: "Standard",
    shortDescription: "1080p",
    attributes: [
      new Attribute("Monthly Price", "₹499"),
      new Attribute("Video and sound quality", "Great"),
      new Attribute("Resolution", "1080p (Full HD)"),
      new Attribute("Supported devices", "TV, computer, mobile phone, tablet"),
      new Attribute("Devices your household can watch at the same time", 2),
      new Attribute("Download devices", 2),
    ],
  },
  {
    type: "Premium",
    shortDescription: "4K + HDR",
    attributes: [
      new Attribute("Monthly Price", "₹649"),
      new Attribute("Video and sound quality", "Best"),
      new Attribute("Resolution", "4K (Ultra HD) + HDR"),
      new Attribute("Spatial audio (immersive sound)", "Included"),
      new Attribute("Supported devices", "TV, computer, mobile phone, tablet"),
      new Attribute("Devices your household can watch at the same time", 4),
      new Attribute("Download devices", 6),
    ],
    mostPopular: true,
  },
];

const PlanForm = () => {
  const [activePlan, setActivePlan] = useState(
    plans.filter((item) => item.mostPopular)[0].type
  );
  return (
    <PlanFormWrapper>
      <StepHeader
        align="left"
        stepCount={3}
        stepTotal={4}
        className="step-header"
      >
        Choose the plan that&apos;s right for you
      </StepHeader>
      <form action="http://localhost:8000/stripe" method="POST">
        <div className="form-plan-selection">
          {plans.reverse().map((plan) => (
            <PlanSelectionOption
              key={plan.type}
              checked={activePlan === plan.type}
              plan={plan}
              onChange={(e) => setActivePlan(e.target.value)}
            />
          ))}
        </div>{" "}
        <div className="footnotes">
          <small>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our Terms of Use for
            more details.
          </small>
          <small>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </small>
        </div>
        <div className="button-wrapper">
          <button type="submit">Next</button>
        </div>
      </form>
    </PlanFormWrapper>
  );
};

const PlanFormWrapper = styled.div`
  padding: 24px 38px;

  .step-header {
    margin-bottom: 0.5rem;
  }
  .form-plan-selection {
    display: flex;
    justify-content: space-around;

    gap: 12px;

    margin-top: 38px;
  }

  .footnotes {
    margin-block: 24px;
  }

  .footnotes small {
    padding-inline: 16px;

    color: #737373;
    font-size: 13px;

    display: block;
  }

  .footnotes small + small {
    margin-top: 10px;
  }

  .button-wrapper {
    margin-inline: auto;
    max-width: 440px;
  }

  button {
    display: block;

    box-sizing: border-box;

    background-color: rgb(229, 9, 20);
    color: white;

    text-decoration: none;
    font-size: 24px;
    font-weight: 600;

    border-radius: 0.25rem;

    padding: 0.75rem 1.5rem;
    min-width: 100px;
    width: 100%;

    text-align: center;
    letter-spacing: 0.025rem;

    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: hsl(from rgb(229, 9, 20) h s 40);
  }
`;

export default PlanForm;
