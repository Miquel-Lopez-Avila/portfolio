import React    from 'react';
import { Card } from "./ClientCard.styled";

const ClientsCard = ({ image, title }) => {
  return (
    <Card>
      <img src={image} alt={title} />
    </Card>
  );
};

export default ClientsCard;
