import {useContext } from 'react';
import {FruitsContext} from './App.js'; //不是default export, 所以要用{}包裹

// 这个是用来测试useContext hook

function Child(params) {

    let fruits = useContext(FruitsContext);
    console.log(fruits);
    return (<div>

            {fruits.map( (item, index)=>
                 <p key={index}>{item}</p>
            ) }
        
        </div>)

}



function HooksTest3() {
    

    return (<div>   
        <h2>useContext example</h2>
        <Child />
    </div>)

}


export default HooksTest3;