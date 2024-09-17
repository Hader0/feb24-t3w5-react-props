import FoodCard from "./FoodCard";

let foods = [
    "Gnocchi",
    "Toasted Sandwhich",
    "Tinned Spaghetti",
    "Takoyaki",
    "KFC",
    "Sushi",
    "Bananas"
];

export default function FoodList() {
    return (
        <section>
            {
                foods.map((food, index) => {
                    return <FoodCard key={"food-" + index} foodName={food}/>
                })
            }
        </section>
    )
}