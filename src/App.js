
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Inc, Dec} from "./store/reducers/index"

function App() {

  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Simple React Redux APP</h1>
      
      <div style={{ width:"100%", height:"100vh",display:"flex",flexDirection:"column", justifyContent:"center", alignItems: "center"}}>
      <h1>{curState}</h1>
      <div>
      <button onClick={()=>dispatch(Inc())}>Increment Number</button>
        <button onClick={()=>dispatch(Dec())}>Decrement Number</button>
      </div>
       
      </div>  
    </div>
  );
}

export default App;
