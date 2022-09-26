import React from "react";
import Card from "./Card";
import "../styles/Categories.css";
import CoffeeCard from "./CoffeeCard";
import DetailedCoffeeCard from "./DetailedCoffeeCard";
function Categories() {
  return (
    <Card className="categories">
      <ul className="categories_list">
        <li>Cappuccino</li>
        <li>Espresso</li>
        <li>Latte</li>
        <li>Americano</li>
        <li>Coffee Shake</li>
      </ul>
      <CoffeeCard />
      <DetailedCoffeeCard />
    </Card>
  );
}

export default Categories;
