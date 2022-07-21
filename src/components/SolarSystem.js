import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const headline = 'Planetas';
    return (
      <div data-testid="solar-system" className='solar-system'>
        
        <Title headline={ headline }/>
        <div className='planet-list'>
          {
            planets.map((e, i) => (
              <PlanetCard planetName={ e.name } planetImage={ e.image } key={ i } />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
