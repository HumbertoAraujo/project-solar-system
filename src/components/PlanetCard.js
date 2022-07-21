import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const planets = this.props;
    const { planetName, planetImage } = planets;
    const altText = `Planeta ${planetName}`;
    return (      
      <div data-testid="planet-card" className='planet-card'>
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ altText } className={`${planetName} planets`}/>
      </div>      
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
