import { useParams } from "react-router-dom";
import { team } from "../assets/Data";

export default function TeamDetail() {
    const { tid } = useParams()
    const member = team.find((m) => String(m.tid) === tid)

    if (!member) {
        return <h2>Team member not found</h2>
    }

    return (
        <div id="blogger">
            <div className="jumper">
                <img
                    src={member.image}
                    alt={member.name}
                />
            </div>
            <h1 className="jumper">{member.name}</h1>
            <h3 className="jumper">{member.role}</h3>
            <p id="bio" className="jumper">{member.bio}</p>
            <p className="jumper">{member.content}</p>
        </div>
    )
}