
import { combineReducers } from 'redux';

const initUploadsReducer = () => {

  const items = (state = { fileInfos : []}, action) => {
    switch (action.type) {
      case "FILE_UPLOADED":
        return {fileInfos:action.data};
      default:
        return state;
    }
  };

 

  return combineReducers({
    items,
  })
}

const uploads = initUploadsReducer();
export default uploads;