import { useParams, Link } from "react-router-dom";
import { activities } from "../data/activities";

function ActivityDetailPage() {
    const { id } = useParams();
    const activity = activities.find(a => a.id === Number(id));

    if (!activity) {
        return (
            <div className="detail-page">
                <p>Activity not found.</p>
                <Link to="/">Back home</Link>
            </div>
        );
    }

    return (
        <div className="detail-page">
            <Link to="/">← Back</Link>
            <img src={activity.image} alt={activity.title} />
            <h1>{activity.title}</h1>
            <p>{activity.description}</p>
            <div className="detail-meta">
                <span>{activity.type}</span>
                <span>{activity.price}</span>
                <span>{activity.distance}</span>
                <span>{activity.duration}</span>
                <span>★ {activity.rating}</span>
            </div>
        </div>
    );
}

export default ActivityDetailPage;