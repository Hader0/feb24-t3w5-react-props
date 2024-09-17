

export default function FoodCard(props) {
    const {foodName} = props

    return (
        <div className="FoodCardDiv">
            <h3 className="FoodCardHeading">{foodName}</h3>
            <p className="FoodCardDescription">Description of the food for {props.foodName}</p>
        </div>
    )
}