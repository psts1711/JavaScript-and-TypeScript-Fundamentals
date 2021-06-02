var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// get, patch, put, post, delete
import _axios from "axios";
export class Api {
    static get(url) {
        return Api.axios.get(url).then(response => {
            if (response) {
                return response.data;
            }
        }).catch(ex => {
            Api.handleError(ex);
            return Promise.reject(ex);
        });
    }
    static post(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Api.axios.post(url, body);
                return response.data;
            }
            catch (e) {
                Api.handleError(e);
            }
        });
    }
    static handleError(error) {
        if (error.response) {
            const msg = error.response.data.message;
        }
        else {
            console.log('something went wrong');
        }
    }
}
Api.axios = _axios.create({
    baseURL: 'https://reqres.in/api/'
});
