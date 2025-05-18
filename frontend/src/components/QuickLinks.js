import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuickLinks.css';

function QuickLinks() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/quick-links`)
      .then(res => {
        console.log('Quick links response:', res.data);
        if (Array.isArray(res.data)) {
          setLinks(res.data.slice(0, 12));
        } else {
          console.warn('Quick links data is not an array:', res.data);
          setLinks([]);
        }
      })
      .catch(err => {
        console.error('Error fetching quick links:', err);
        setLinks([]);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between flex-wrap gap-2">
        {Array.isArray(links) && links.map((link, index) => (
          <div className="quick-link-box text-center" key={index}>
            <a href={link.link || '#'} className="text-white text-decoration-none d-block h-100 w-100">
              {link.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;
