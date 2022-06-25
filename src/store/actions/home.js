export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';

export function getCategoriesRequest() {
  return {
    type: CATEGORIES_REQUEST,
    payload: {},
  };
}

export const CATS_REQUEST = 'CATS_REQUEST';
export const CATS_SUCCESS = 'CATS_SUCCESS';

export function getCatsRequest(data) {
  return {
    type: CATS_REQUEST,
    payload: { data },
  };
}
