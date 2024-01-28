import React, { useState, useEffect } from 'react';

const JokesComponent = () => {
  // Define state to store the joke
  const [joke, setJoke] = useState(''); // State variable to store the joke

  // Use useEffect to fetch data from the Chuck Norris API
  useEffect(() => {
    // Define a function to fetch a joke from the Chuck Norris API
    const fetchJoke = async () => {
      try {
        // Make a GET request to the Chuck Norris API
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        
        // Parse the response body as JSON
        const data = await response.json();
        
        // Update the joke state with the retrieved joke
        setJoke(data.value);
      } catch (error) {
        // Log an error message if there's an error fetching the joke
        console.error('Error fetching joke:', error);
      }
    };

    // Call the fetchJoke function when the component mounts
    fetchJoke(); 
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  // Render the fetched joke inside the component's JSX
  return (
    <div>
      <h2>Chuck Norris Joke</h2>
      <p>{joke}</p>
    </div>
  );
};

export default JokesComponent;
