import { combineReducers } from "redux";
import { sampleReducer } from "./reducer/sample_reducer/SampleReducer";
import { addressInfoReducer } from "./reducer/addlead_reducer/AddressInfoReducer";

export default combineReducers({
    sampleReducer: sampleReducer,
    addressInfoReducer: addressInfoReducer,
})