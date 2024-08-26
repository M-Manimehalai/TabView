
import { Login } from "../../../utils/common/dataservices/DataServices";
import Labels from "../../../utils/constants/labels/Labels";
import * as types from "../../constants/ActionType"

export function sampleAction(value) {
    return (dispatch) => {
        Login(value).then((resp) => {
            dispatch({
                type: types.SAMPLE_DETAILS,
                payload: []
            });
            if (resp != undefined) {
                if (resp.status == Labels.success) {
                    dispatch({
                        type: types.SAMPLE_DETAILS,
                        payload: resp.data
                    });
                } else {
                    dispatch({
                        type: types.SAMPLE_DETAILS,
                        payload: []
                    });
                }
            }
        }).catch((error) => {
            dispatch({
                type: types.SAMPLE_DETAILS,
                payload: []
            });
        })
    }
}

export function sampleUserNameAction(userName) {
    return {
        type: types.SAMPLE_USERNAME,
        payload: userName
    }
}