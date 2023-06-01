import { configureStore } from "@reduxjs/toolkit";
import incdecReducer from "./reducers/index"

export default configureStore({

    reducer:{
        number : incdecReducer
    }
}, window._REDUX_DEVTOOLS_EXTENSIONS_ && window._REDUX_DEVTOOLS_EXTENSIONS_())