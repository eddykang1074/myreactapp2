
import { configureStore} from '@reduxjs/toolkit';

//통합된 리듀서 기능 참조
import reducers  from './reducers';

const store = configureStore({
    reducer:reducers,
    devTools:true,
});

export default store;
