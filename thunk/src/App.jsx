import gettheData from "./Components/Actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const unpack = useDispatch();
  const collectdata = useSelector((data) => data);
  console.log(collectdata);

  return (
    <div>
      <div style={{textAlign:"center"}}>
        <button onClick={() => unpack(gettheData())}>Fetch Data</button>
      </div>
      {collectdata.list.map((data,i)=>{
        return(
          <div key={i}>
            <h2 style={{textAlign:"center"}}>{data.name}</h2>
            <h4 style={{textAlign:"center"}}>{data.email}</h4>
            <hr />
          </div>
        )
      })}
    </div>
  );
}
export default App;
