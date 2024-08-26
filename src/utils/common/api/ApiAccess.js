import Labels from "../../constants/labels/Labels";

export default class Networking {
    static async PostApi(url, data = '') {
        const apiurl = url;
        return fetch(apiurl, {
            redirect: 'follow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Authorization': 'L]ak;YzY!47FqLUbhcC:4b8Zaw'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(function (response) {
                return response;
            })
            .catch(error => {
                return { status: Labels.failed, message: Labels.pleaseTryAgainSomeTime }
            })
    }

    static async GetApi(url) {
        const apiurl = url;
        return fetch(apiurl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(function (response) {
                return response;
            })
            .catch(error => {
                return { status: Labels.failed, message: Labels.pleaseTryAgainSomeTime }
            })
    }

}