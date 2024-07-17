import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch the initial visitor count from the backend
    axios.get('https://developer.brandclever.in/brand/admin/form/visitor_count.php')
      .then(response => {
        setCount(response.data.count);
      })
      .catch(error => {
        console.error('There was an error fetching the visitor count!', error);
      });

    // Increment the visitor count only if it has not been incremented yet

  }, []);

  return (
    <div>
      <h1>Visitor Count: {count}</h1>
    </div>
  );
};

export default VisitorCounter;
