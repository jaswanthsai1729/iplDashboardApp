// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageURL} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card">
        <img
          src={teamImageURL}
          alt={`competing team {competing_team}`}
          className="team-logo"
        />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
