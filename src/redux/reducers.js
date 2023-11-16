//각종 리듀서파일을 통합해주는 combineReducers함수를 참조한다.
import { combineReducers } from 'redux';

//auth/reducer 해당 업무용 리듀서 파일에서 정의된 리듀서함수를 참조한다.
import Login from './auth/reducer';

//import Sample from './sample/reducer';

export default combineReducers({Login});