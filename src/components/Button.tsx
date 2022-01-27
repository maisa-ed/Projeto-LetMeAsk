import { type } from "os";
import { useState } from "react";

function Button() {
    // let it change - deixe mudar
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter (counter + 1);
        console.log(counter)
    }
    return (
        <button onClick={increment}>{counter}</button>
    )// sempre que usar uma propriedade dentro do HTML, tem que usar {}
}


export default Button;