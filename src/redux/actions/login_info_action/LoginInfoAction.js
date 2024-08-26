import * as types from "../../constants/ActionType"

export const sampleDetailsEmptyAction = (params) => {
    return (dispatch) => {
        if (params != "report") {
            dispatch({
                type: types.SAMPLE_DETAILS,
                payload: []
            });

            dispatch({
                type: types.SAMPLE_USERNAME,
                payload: []
            });
        }
    }
}