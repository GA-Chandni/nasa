import {getAll_InfoAsteroidID} from '../../services/getAll_InfoAsteroidID';
import {ASTEROID_ID} from './actionType';

export const ActionForConfirmedID = (id) => {
  return async (dispatch) => {
    const details = await getAll_InfoAsteroidID(id);
    dispatch({
      type: ASTEROID_ID,
      payload: details.data,
    });
    console.log('detailsss',details.data);
  };

};
