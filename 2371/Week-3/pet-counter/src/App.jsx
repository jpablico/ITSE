import { useState } from "react";
import "./App.css";

function App() {
    const [dogCount, setDogCount] = useState(0);
    const [catCount, setCatCount] = useState(0);
    const [rabbitCount, setRabbitCount] = useState(0);

    const handleClick = (pet) => {
        if (pet === "dog") setDogCount(dogCount + 1);
        else if (pet === "cat") setCatCount(catCount + 1);
        else if (pet === "rabbit") setRabbitCount(rabbitCount + 1);
    };

    return (
        <div className="container">
            <header>
                <h1>Pet Rescue Counter</h1>
                <h2>Click the buttons to rescue our furry friends!</h2>
            </header>
            <div className="counter-container">
                <button onClick={() => handleClick("dog")}>Dogs: {dogCount}</button>
                <button onClick={() => handleClick("cat")}>Cats: {catCount}</button>
                <button onClick={() => handleClick("rabbit")}>Rabbits: {rabbitCount}</button>
            </div>
        </div>
    );
}

export default App;