import React, { useState, useEffect } from 'react';

function RandomGreeting() {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/random_greeting')
      .then((response) => response.json())
      .then((data) => setRandomGreeting(data.greeting))
      .catch((error) => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{randomGreeting}</p>
    </div>
  );
}

export default RandomGreeting;
