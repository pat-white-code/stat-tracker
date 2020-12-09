import { take } from 'redux-saga/effects';
import { IMAGES } from '../constants';


function* relatedImagesWatcher() {
  while(true) {
    const { payload } = yield take(IMAGES.SUCCESS);
    console.log('IMAGES', payload);
    for(let i = 0 ; i < payload.length ; i++) {
      let image = payload[i];
      console.log(image.user.id);
    }
  }
}

export default relatedImagesWatcher;