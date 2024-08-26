import { isNotEmpty } from "../../../utils/common/common_functions/CommonFunctions";
import * as types from "../../constants/ActionType";

const initialState = {
    sampleListDetails: [],
    sampleUserName: []
}

export const sampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAMPLE_DETAILS:
            return {
                ...state,
                sampleListDetails: isNotEmpty(action.payload) ? action.payload : []
            }
        case types.SAMPLE_USERNAME:
            return {
                ...state,
                sampleUserName: isNotEmpty(action.payload) ? action.payload : [],
            }
        default:
            return state;
    }
}
