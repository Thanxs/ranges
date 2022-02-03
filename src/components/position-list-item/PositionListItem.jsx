import React, { useState } from 'react';
import './PositionListItem.css';

const PositionListItem = ({ position, setRange }) => {

  const [details, showDetails] = useState(false);

  const toggleDetails = () => {
    showDetails(!details);
  }

  const showRange = (e, src) => {
    e.stopPropagation();
    setRange(src);
  }

  return (
    <li
      onClick={toggleDetails}
      className="position-list-item">
        <span className="position-list-item__opp">
          opponent <span className="position-list-item__name">{position.name}</span>
        </span>
        {
          details &&
          <span className="position-list-item__opponents">
            {
              position.opponents.map(({ name, src}) =>
                 (
                  <span
                    onClick={(e) => showRange(e, src)}
                    key={src} className="position-list-item__hero"
                  >
                    {name}
                  </span>
                 )
              )
            }
          </span>
        }
    </li>
  );
};

export default PositionListItem;
