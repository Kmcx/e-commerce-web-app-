import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuickLinks.css';

function QuickLinks() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/quick-links`)
      .then(res => setLinks(res.data.slice(0, 12))) 
      .catch(err => console.error('Error fetching quick links:', err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between flex-wrap gap-2">
        {links.map((link, index) => (
          <div className="quick-link-box text-center" key={index}>
            <a href={link.url} className="text-white text-decoration-none d-block h-100 w-100">
              {link.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;
