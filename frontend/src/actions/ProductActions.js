import * as ProductConst from '../constants/ProductConstants';
import axios from 'axios';

export const listProducts = () => async dispatch => {
  try {
    dispatch({ type: ProductConst.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({ type: ProductConst.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ProductConst.PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const listProductDetails = id => async dispatch => {
  try {
    dispatch({ type: ProductConst.PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: ProductConst.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ProductConst.PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
