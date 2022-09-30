import { useParams } from 'react-router-dom'

export default function Member(props) {

    const { houseId, memberId } = useParams()
    const house = props.houses.find(house => house.id.toString() === houseId)
    const member = house.people.find(person => person.id.toString() === memberId)
    console.log(props.houses)

    return (
        <div className="page">
            <div className="header">
                <h2>Specific Member Name</h2>
            </div>
            <div className="desc">
                <h1>{member.name}</h1>
                <p>{member.description}</p>
            </div>
        </div>
        )
}