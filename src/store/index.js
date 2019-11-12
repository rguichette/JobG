import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../Reducers'

import createSagaMiddleware from 'redux-saga'

//import my sagas 
import mainSaga from '../sagas'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();



// mount it on the Store

// window.__REDUX_DEVTOOLS_EXTENSION__
export default function configureStore(initialState){
    const Store = createStore(
      rootReducer,
      compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.devToolsExtension() : f => f
      )
      
    );
    sagaMiddleware.run(mainSaga)
        return Store

  }
 

