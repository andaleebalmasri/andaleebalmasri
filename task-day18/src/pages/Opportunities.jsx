import { useEffect, useState } from "react";
import "../styles/Opportunities.css";

function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    // API تجريبي بيانات نصية
    fetch("https://dummyjson.com/posts?limit=12")
      .then(res => res.json())
      .then(data => {
        setOpportunities(data.posts);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="page">
      <h1>Volunteer Opportunities</h1>
      <div className="cards">
        {opportunities.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn-primary">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opportunities;