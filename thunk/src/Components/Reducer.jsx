const initialvalue = {
  list: [],
  processing: false,
  errors: null,
};
const Reducer = (state = initialvalue, a) => {
  switch (a.type) {
    case "REQUEST_TO_FETCHDATA":
      return {
        ...state,
        processing: true,
        errors: null,
      };
    case "COMPLETED":
      return {
        ...state,
        processing: false,
        list: a.payload,
        errors:null,
      };

    case "INCOMPLETE":
      return {
        ...state,
        processing: false,
        errors: a.errors,
      };

    default:
      return state;
  }
};
export default Reducer;
