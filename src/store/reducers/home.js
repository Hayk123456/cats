import {
  CATS_REQUEST, CATS_SUCCESS, CATEGORIES_SUCCESS, CATEGORIES_REQUEST,
} from '../actions/home';

const initialState = {
  categories: [],
  cats: [],
  catsRequestStatus: '',
  categoriesStatus: '',
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CATS_REQUEST: {
      return {
        ...state,
        cats: [],
        catsRequestStatus: 'request',
      };
    }

    case CATS_SUCCESS: {
      return {
        ...state,
        cats: payload.data.data,
        catsRequestStatus: 'ok',
      };
    }

    case CATEGORIES_REQUEST: {
      return {
        ...state,
        categoriesStatus: 'request',
      };
    }

    case CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: payload.data.data,
        categoriesStatus: 'ok',
      };
    }

    default:
      return state;
  }
};

export default reducer;
