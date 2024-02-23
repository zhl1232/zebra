import React, { useState, useEffect } from "react";

function Technology(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/get_all_movies.php")
      // .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  console.log(data)
  console.log(data.movies)


  return (
    <div>
      <h2>PHP API Example</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Technology;
