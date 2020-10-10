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
