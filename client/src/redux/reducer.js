const initialState = {
  data: [],
  loading: false,
  error: null,
};

const blogReducer = (state = initialState, action) => {
  // console.log('action.payload,', action.type, action.payload);
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default blogReducer;
