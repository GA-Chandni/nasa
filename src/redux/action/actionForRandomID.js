import {getAllRandomAsteroidID} from '../../services/getAllRandomAsteroidID';

export const ActionForRandomID = () => {

    return async (dispatch) => {
      const details = await getAllRandomAsteroidID();
      return details.data
    };
  };
  