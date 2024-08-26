import * as types from "../../constants/ActionType"

export function AddressInformationEmptyAction(address) {
    return {
        type: types.ADDRESS_INFORMATION,
        payload: address
    }
}