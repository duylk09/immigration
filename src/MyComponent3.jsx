import React, {useState} from "react"

function MyComponent3(){

    const [foods, setFoods] = useState(["Apple","Banana","Orange"]);

    function handleAddFood(){
        const newfood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newfood]);
    };

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i !== index));

    };

    return(
        <div>
            <h1>List Of Food</h1>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() =>handleRemoveFood(index)}>
                                                {food}
                                            </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter the food"/>
            <button onClick={handleAddFood}>Add food</button>
        </div>

    );
};

export default MyComponent3