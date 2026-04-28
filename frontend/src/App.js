import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [stats, setStats] = useState(null);


  const loadStats = () => {

    fetch("http://localhost:3001/api/stats")
      .then(r => r.json())
      .then(setStats);

  };


  useEffect(() => {
    loadStats();
  }, []);


  const handleUpdate = async () => {

    const res = await fetch(
      "http://localhost:3001/api/update",
      {
        method: "POST"
      }
    );

    const data = await res.json();

    loadStats();


    if (
      data.unfollows &&
      data.unfollows.length > 0
    ) {

      alert(
        `Te dejaron de seguir:\n${data.unfollows.join("\n")}`
      );

    } else {

      alert(
        "No hubo unfollows nuevos"
      );

    }

  }


  if (!stats) {
    return <h1>Cargando...</h1>
  }


  return (

    <div className="app">

      <h1>IG Insights Tracker</h1>

      <div className="card">
        <h2>Followers</h2>
        <p>{stats.followers}</p>
      </div>

      <div className="card">
        <h2>Unfollows</h2>
        <p>{stats.unfollows}</p>
      </div>

      <div className="card">
        <h2>Nuevos</h2>
        <p>{stats.newFollowers}</p>
      </div>

      <button onClick={handleUpdate}>
        Actualizar seguidores
      </button>


    </div>

  )

}

export default App;