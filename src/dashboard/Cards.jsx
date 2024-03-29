import React from 'react';
import Card from '../components/Card';

const Cards = () => {
 
  const cardsData = [
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/128/8520/8520521.png", 
      title: "Earning",
      subtitle: "$198K",
      description: `+27.8 % this month`,
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/128/684/684930.png",
      title: "Orders",
      subtitle: "$2.4K",
      description: "2% this month",
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/128/6494/6494200.png", 
      title: "Balance",
      subtitle: "$2.4K",
      description: "2% this month ",
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png",
      title: "Total Sale",
      subtitle: "$80K",
      description: "+27.8 % this week ",
    },
  ];

  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Cards;
