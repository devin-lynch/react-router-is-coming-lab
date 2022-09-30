import { useParams, Link } from 'react-router-dom'

export default function House(props) {
    let { id } = useParams()
    const house = props.houses.find(house => house.id.toString() === id)
    console.log(props.houses)
    const housePeople = house.people.map((person, i) => {
        return <li key={`li-${i}`}>
                    <Link
                        to={`/houses/:houseId/members/${person.id}`}
                        key={`member-${i}`}
                    >
                        {person.name}
                    </Link>
                </li>
    })
    return (
        <div className="page">
            <div className="header">
                <h2>Members of a GoT House</h2>
            </div>
            <ul className="list">
                <h3>{house.name}</h3>
                {housePeople}
            </ul>
        </div>
    )
}