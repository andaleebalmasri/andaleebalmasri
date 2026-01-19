import Card from "./Card";

function CardsList() {
  const cardsData = [
    { title: "Card One", description: "This is the first card" },
    { title: "Card Two", description: "This is the second card" },
    { title: "Card Three", description: "This is the third card" },
    { title: "Card Four", description: "This is the fourth card" },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default CardsList;
