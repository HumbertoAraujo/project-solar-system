import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const headline = 'Missões';
    return (
      <div data-testid="missions" className='missions'>
        <Title headline={ headline } />
        <div className='missions-list'>
          {
            missions.map((e) => (
              <MissionCard
                key={ e.name }
                name={ e.name }
                year={ e.year }
                country={ e.country }
                destination={ e.destination }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
