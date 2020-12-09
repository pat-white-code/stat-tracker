import { RELATED_IMGS } from '../constants';

const relatedImagesData = (state = {}, action) => {
  switch(action.type){
    case RELATED_IMGS.LOAD:
      return { ...state, 
        [action.payload.imgId]: {
          relatedImages: [],
          isLoading: true,
          error: false,
        }};
    case RELATED_IMGS.LOAD_SUCCESS:
      return { ...state, 
        [action.payload.imgId]: {
          relatedImages: action.payload,
          isLoading: false,
          error: false,
        }};
    case RELATED_IMGS.LOAD_FAIL:
      return { ...state, 
        [action.payload.imgId]: {
          relatedImages: action.payload,
          isLoading: false,
          error: action.payload.err,
        }};
    default: return state;
  }
}

export default relatedImagesData.js