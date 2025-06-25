import { Block, HighlightedCodeBlock, parseRoot } from "codehike/blocks";
import { z } from "zod";
import { AbsoluteFill, Composition, Sequence } from "remotion";
import React from "react";
import { ProgressBar } from "./progress-bar";
import { Code } from "./code";
import "./index.css";

export function Video({ steps = [], videoTitle }) {
  let stepEnd = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#0D1117" }}>
      <ProgressBar steps={steps} />
      {Array.isArray(steps) &&
        steps.map((step, index) => {
          stepEnd += step.duration;
          return (
            <Sequence
              key={index}
              from={stepEnd - step.duration}
              durationInFrames={step.duration}
              name={step.title}
              style={{ padding: "16px 42px", display: "block" }}
            >
              <div className="header">
                <div className="watermark">
                  <div className="wm-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 224 216"
                      fill="none"
                    >
                      <ellipse cx="112" cy="108" rx="112" ry="108" fill="black" />
                      <circle cx="112.5" cy="108.5" r="87.5" fill="white" />
                      <circle cx="112" cy="108" r="72" fill="black" />
                      <circle cx="112" cy="108" r="63" fill="white" />
                      <line x1="112" y1="15" x2="112" y2="39" stroke="black" strokeWidth="8" />
                      <line x1="112" y1="180" x2="112" y2="204" stroke="black" strokeWidth="8" />
                      <line x1="180" y1="104" x2="204" y2="104" stroke="black" strokeWidth="8" />
                      <line x1="19" y1="104" x2="43" y2="104" stroke="black" strokeWidth="8" />
                    </svg>
                  </div>
                  <div className="wm-brandname">Think Throo</div>
                </div>
                <div className="wm-brandname">https://thinkthroo.com</div>
              </div>
              <div className="step-container">
                <div className="title-container">
                  <div className="concept-title">{videoTitle}</div>
                  <div className="step-title">{step.title}</div>
                </div>
                <Code
                  oldCode={steps[index - 1]?.code}
                  newCode={step.code}
                  durationInFrames={90}
                />
              </div>
            </Sequence>
          );
        })}
    </AbsoluteFill>
  );
}
