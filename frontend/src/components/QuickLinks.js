import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuickLinks.css';

function QuickLinks() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quick-links')
      .then(res => setLinks(res.data.slice(0, 8))) // sadece 8 tane
      .catch(err => console.error('Error fetching quick links:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h5>Quick Links</h5>
      <div className="row">
        {links.map(link => (
          <div className="col-6 col-md-3 mb-3" key={link.id}>
            <div className="quick-link-card text-center text-white rounded p-2">
              <a href={link.url} className="text-white text-decoration-none d-block">
                {link.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;
