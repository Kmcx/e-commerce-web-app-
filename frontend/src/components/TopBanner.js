import React from 'react';
import { Card } from 'react-bootstrap';

function TopBanner() {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src="https://i.hizliresim.com/6zru3sh.jpg" 
        alt="Kampanya Banner"
      />
    </Card>
  );
}

export default TopBanner;
