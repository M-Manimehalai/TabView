import ApiUrl from "../../constants/apiurl/ApiUrl";
import Networking from "../api/ApiAccess";

export async function Login(data) {
    return Networking.PostApi(ApiUrl.login, data)
        .then((responseJson) => {
            return responseJson;
        })
        .catch(error => {
        })
}