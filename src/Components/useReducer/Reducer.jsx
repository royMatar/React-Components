import {useReducer} from 'react'

const reducer = (state,action)=>{
    if(action.type ==='buy') return {money: state.money - 10};
    if(action.type ==='sell') return {money: state.money + 10};
    return state;
}

function Reducer() {
    const initialState={money: 100};
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>Wallet: {state.money}</h1>
        <div>
            <button onClick={()=>dispatch({type: 'buy'})}>Shopping</button>
            <button onClick={()=>dispatch({type: 'sell'})}>Sell a meal</button>
        </div>
    </div>
   
  )
}

export default Reducer