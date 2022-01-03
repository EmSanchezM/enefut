import Axios from '../../config/axios'; 

import {
  SELECTED_LICENSES,
  SEARCH_LICENSES,
  UPDATE_LICENSE,
  DELETE_LICENSE,
  ADD_LICENSE,
  FETCH_LICENSES_SUCCESS,
} from '../constants';

export const fetchLicenses = () => {
    return async(dispatch) => {
        try {
          const response = await Axios.get('licenses');
          
          dispatch( {
            type: FETCH_LICENSES_SUCCESS,
            licenses: response.data.data 
          });
          
        } catch (error) {
          console.log('ERROR', error);
        }
    }
}

export const selectLicense = (license) => ({
  type: SELECTED_LICENSES,
  payload: license,
});

export const licenseSearch = (searchTerm) => ({
  type: SEARCH_LICENSES,
  searchTerm,
});

export const deleteLicense = (licenseId) => (dispatch) => {
  Axios
    .delete(`licenses/${licenseId}`)
    .then((response) => {
      dispatch({
        type: DELETE_LICENSE,
        payload: response.data.id
      });
    })
    .catch((err) => err);
};

export const updateLicense = (license, licenseId) => (dispatch) => {
    Axios
    .put(`licenses/${licenseId}`, license)
    .then((response) => {
      dispatch({
        type: UPDATE_LICENSE,
        payload: response.data
      });
    })
    .catch((err) => err);
};

export const addLicense = (license) => (dispatch)=> {
  Axios
    .post('licenses', license)
    .then((response) => {
      dispatch({
        type: ADD_LICENSE,
        payload: response.data,
      });
    })
    .catch((err) => err); 
};
