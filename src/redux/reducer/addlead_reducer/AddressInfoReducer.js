import { isNotEmpty } from "../../../utils/common/common_functions/CommonFunctions";
import * as types from "../../constants/ActionType";

const initialState = {
    addressInfoList:[]
}

export const addressInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADDRESS_INFORMATION:
            return {
                ...state,
                addressInfoList: isNotEmpty(action.payload) ? action.payload : []
            }
        default:
            return state;
    }
}
