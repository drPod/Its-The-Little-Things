import React, { useState } from "react";

export const Team = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverExit = () => {
    setHoveredIndex(null);
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>Our team has the best interest at heart for the children we wish to reach.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-lg-4 col-md-4 col-sm-6"
                  onMouseEnter={() => handleHover(i)}
                  onMouseLeave={handleHoverExit}
                >
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p className="person-job">{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
