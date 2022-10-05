import React from "react";
import Card from "./Card";
import "../styles/Categories.css";
import CoffeeCard from "./CoffeeCard";
import DetailedCoffeeCard from "./DetailedCoffeeCard";

function Categories() {
  const items = [
    {
      id: 1,
      category: "cappuccino",
      "sub-category": "with oat milk",
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1&w=740&t=st=1664490885~exp=1664491485~hmac=0095c7baabb1776a518d3bee9b5978b49eae63e665fdd9add94b75cbba9a7b1c",
      price: 4.99,
      rating: 4.5,
      ingredient: "coffee",
      "ingredient-image": "",
      "ingredient-creamer-image": "",
      "ingredient-creamer": "milk",
      roast: "medium-roast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint a architecto laboriosam dolores error, quia natus tempora accusantium obcaecati expedita vel nostrum porro voluptatem aut molestiae minus nemo. Esse.",
    },
    {
      id: 2,
      category: "cappuccino",
      "sub-category": "with chocolate",
      image:
        "https://img.freepik.com/free-photo/beautiful-fresh-relax-morning-coffee-cup-set_1150-7052.jpg?w=740&t=st=1664491473~exp=1664492073~hmac=3e19f5afb2e49e60ce3173706f017d5e8cb5671918f75048ea394c3a7ee668c8",
      price: 4.99,
      rating: 4.5,
      ingredient: "coffee",
      "ingredient-image": "",
      "ingredient-creamer-image": "",
      "ingredient-creamer": "milk",
      roast: "medium-roast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint a architecto laboriosam dolores error, quia natus tempora accusantium obcaecati expedita vel nostrum porro voluptatem aut molestiae minus nemo. Esse.",
    },
    {
      id: 3,
      category: "expresso",
      "sub-category": "with oat milk",
      image:
        "https://img.freepik.com/free-photo/double-espresso-side-view_141793-2814.jpg?size=626&ext=jpg&ga=GA1.2.980346599.1664490866",
      price: 4.99,
      rating: 4.5,
      ingredient: "coffee",
      "ingredient-image": "",
      "ingredient-creamer-image": "",
      "ingredient-creamer": "milk",
      roast: "medium-roast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint a architecto laboriosam dolores error, quia natus tempora accusantium obcaecati expedita vel nostrum porro voluptatem aut molestiae minus nemo. Esse.",
    },
    {
      id: 4,
      category: "expresso",
      "sub-category": "with oat",
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-foam-smile-face-desk-isolated_1303-18307.jpg?size=626&ext=jpg&ga=GA1.2.980346599.1664490866",
      price: 4.99,
      rating: 4.5,
      ingredient: "coffee",
      "ingredient-image": "",
      "ingredient-creamer-image": "",
      "ingredient-creamer": "milk",
      roast: "medium-roast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint a architecto laboriosam dolores error, quia natus tempora accusantium obcaecati expedita vel nostrum porro voluptatem aut molestiae minus nemo. Esse.",
    },
    {
      id: 5,
      category: "americano",
      "sub-category": "with oat",
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-foam-white-saucer_114579-16881.jpg?size=626&ext=jpg&ga=GA1.2.980346599.1664490866",
      price: 4.99,
      rating: 4.5,
      ingredient: "coffee",
      "ingredient-image": "",
      "ingredient-creamer-image": "",
      "ingredient-creamer": "milk",
      roast: "medium-roast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint a architecto laboriosam dolores error, quia natus tempora accusantium obcaecati expedita vel nostrum porro voluptatem aut molestiae minus nemo. Esse.",
    },
    {
      id: 6,
      category: "americano",
      "sub-category": "with oat",
      image:
        "https://img.freepik.com/free-photo/cup-americano-coffee-placed-newspaper_140725-6007.jpg?size=626&ext=jpg&ga=GA1.2.980346599.1664490866",
      price: 4.99,
      rating: 4.5,
      ingredient: "coffee",
      "ingredient-image": "",
      "ingredient-creamer-image": "",
      "ingredient-creamer": "milk",
      roast: "medium-roast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint a architecto laboriosam dolores error, quia natus tempora accusantium obcaecati expedita vel nostrum porro voluptatem aut molestiae minus nemo. Esse.",
    },
    {
      id: 7,
      category: "latte",
      "sub-category": "with oat",
      image:
        "https://img.freepik.com/premium-photo/coffee-cup-coffee-beans-old-wooden-background_126277-173.jpg?size=626&ext=jpg&ga=GA1.2.980346599.1664490866",
      price: 4.99,
      rating: 4.5,
      ingredient: "coffee",
      "ingredient-image": "",
      "ingredient-creamer-image": "",
      "ingredient-creamer": "milk",
      roast: "medium-roast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint a architecto laboriosam dolores error, quia natus tempora accusantium obcaecati expedita vel nostrum porro voluptatem aut molestiae minus nemo. Esse.",
    },
    {
      id: 8,
      category: "latte",
      "sub-category": "with oat",
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?size=626&ext=jpg&ga=GA1.2.980346599.1664490866",
      price: 4.99,
      rating: 4.5,
      ingredient: "coffee",
      "ingredient-image": "",
      "ingredient-creamer-image": "",
      "ingredient-creamer": "milk",
      roast: "medium-roast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint a architecto laboriosam dolores error, quia natus tempora accusantium obcaecati expedita vel nostrum porro voluptatem aut molestiae minus nemo. Esse.",
    },
    {
      id: 9,
      category: "coffee shake",
      "sub-category": "with oat",
      image:
        "https://img.freepik.com/free-photo/front-view-milkshake-with-whipped-cream-chocolate-icing-coffee-beans-table_141793-2835.jpg?size=338&ext=jpg&ga=GA1.2.980346599.1664490866",
      price: 4.99,
      rating: 4.5,
      ingredient: "coffee",
      "ingredient-image": "",
      "ingredient-creamer-image": "",
      "ingredient-creamer": "milk",
      roast: "medium-roast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint a architecto laboriosam dolores error, quia natus tempora accusantium obcaecati expedita vel nostrum porro voluptatem aut molestiae minus nemo. Esse.",
    },
    {
      id: 10,
      category: "coffee shake",
      "sub-category": "with oat",
      image:
        "https://img.freepik.com/free-photo/chocolate-smoothie_1339-2862.jpg?size=626&ext=jpg&ga=GA1.2.980346599.1664490866",
      price: 4.99,
      rating: 4.5,
      ingredient: "coffee",
      "ingredient-image": "",
      "ingredient-creamer-image": "",
      "ingredient-creamer": "milk",
      roast: "medium-roast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint a architecto laboriosam dolores error, quia natus tempora accusantium obcaecati expedita vel nostrum porro voluptatem aut molestiae minus nemo. Esse.",
    },
  ];
  return (
    <Card className="categories">
      <div className="categories_list">
        <div className="category">Cappuccino</div>
        <div className="category">Espresso</div>
        <div className="category">Latte</div>
        <div className="category">Americano</div>
        <div className="category">Coffee Shake</div>
      </div>
      <CoffeeCard
        category={items[0].category}
        subcategory={items[0]["sub-category"]}
        rating={items[0].rating}
        price={items[0].price}
        image={items[0].image}
      />

      <DetailedCoffeeCard />
    </Card>
  );
}

export default Categories;
