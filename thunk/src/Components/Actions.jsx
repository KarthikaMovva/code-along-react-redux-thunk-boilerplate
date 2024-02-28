import axios from "axios";

const gettheData = () => async (dispatch) => {
  dispatch({ type: "REQUEST_TO_FETCHDATA" });
  try {
    const api = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: "COMPLETED", payload: api.data });
  } catch (error) {
    dispatch({ type: "INCOMPLETE", error });
  }
};
export default gettheData;
