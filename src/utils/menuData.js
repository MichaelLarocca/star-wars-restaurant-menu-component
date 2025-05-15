import Ackbar from "../images/Ackbar.png"; // Placeholder image for Ackbar's Snackbar
import Anakin from "../images/Anakin.png"; // Placeholder image for all categories
import HanSolo from "../images/HanSolo.jpg"; // Placeholder image for Han Solo
import HanSoloGoodFelling from "../images/HanSoloGoodFeeling.png"; // Placeholder image for Han Solo's good feeling
import Poe from "../images/Poe.png"; // Placeholder image for Poe
import Younglings from "../images/Younglings.png"; // Placeholder image for Youngling

 // Array of meal categories, images, slogans, and items
 export const meals = [
    {
      category: "From the Cantina",
      image: HanSolo, // Placeholder image
      slogan: "Han shots first!",
      items: [
        { price: "$3", name: "han shots" },
        { price: "$8", name: "Jedi Shirley Temple" },
        { price: "$12", name: "Mangolorian Martini" },
        { price: "$10", name: "Qui Gon's Gin" },
        { price: "$11", name: "Mustafar Mojitos" },
        { price: "$9", name: "Tatooine Sunrise" },
      ],
    },
    {
      category: "appetizers",
      image: Anakin, // Placeholder image
      slogan: "this is where the fun begins!",
      items: [
        { price: "$12", name: "obi wan pierogis" },
        { price: "$19", name: "greedo's burritos" },
        { price: "$15", name: "tusken rader taters" },
        { price: "$18", name: "bantha wings" },
        { price: "$17", name: "wookie wontons" },
      ],
    },
    {
      category: `Ackbar's Snackbar`,
      image: Ackbar, // Same placeholder image
      slogan: "it's a wrap!",
      items: [
        { price: "$6", name: "Skywalker Ranch French Fries" },
        { price: "$8", name: "They Fry Now?? (Fried Cauliflower)" },
        { price: "$10", name: "Dark Sliders" },
        { price: "$9", name: "Windu Wings (Not Spicy)" },
      ],
    },
    {
      category: "The Solo Menu",
      image: HanSoloGoodFelling, // Same placeholder image
      slogan: "I got a good feeling about this!",
      items: [
        { price: "$14", name: "Boba Fettaccini" },
        { price: "$13", name: "General Hux Chicken" },
        { price: "$15", name:  `There's Always a Bigger Fish` },
        { price: "$18", name: "R2 Cheese 2 Pizza" },
      ],
    },
    {
      category: "Padawan Treats",
      image: Younglings, // Same placeholder image
      slogan: "there are too many choices! what are we going to choose?",
      items: [
        { price: "$5", name: "Baby Yoda Boba" },
        { price: "$4", name: "Kaminoan Cola" },
        { price: "$4", name: "Mountain Dew It!" },
        { price: "$7", name: "BB-Steak Fries" },
        { price: "$6", name: "Podracing Popsicles" },
      ],
    },
    {
      category: "The Final Order",
      image: Poe, // Same placeholder image
      slogan: "he calls it the final order!",
      items: [
        { price: "$9", name: "Chocolate Mouse-tafar Cake" },
        { price: "$8", name: "Wookie Cookies" },
        { price: "$7", name: "Obi Wan Cannolis" },
        { price: "$6", name: "C-3-Churros" },
        { price: "$5", name: "Leia Buns" },
      ],
    },
  ];
