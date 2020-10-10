import * as ProductConst from '../constants/ProductConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ProductConst.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case ProductConst.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case ProductConst.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ProductConst.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case ProductConst.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case ProductConst.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
