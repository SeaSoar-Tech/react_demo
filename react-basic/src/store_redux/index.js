import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './modules/counterSlice'
import channelReducer from './modules/channelSlice'

 const store = configureStore({
    reducer:{
        counter : counterReducer,
        channel : channelReducer
    }

})
export default store