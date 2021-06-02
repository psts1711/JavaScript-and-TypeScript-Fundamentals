// get, patch, put, post, delete
import _axios from "axios"
export class Api{

    private static axios = _axios.create({
        baseURL:'https://reqres.in/api/'
    })

    static get(url: any)
    {
        return Api.axios.get(url).then(response=>{
            if(response)
            {
                return response.data
            }
        }).catch(ex=>{
            Api.handleError(ex);
            return Promise.reject(ex)
        })
    }

    static async post(url: any, body:object)
    {
        try{
            const response = await Api.axios.post(url, body)
            return response.data;
        }catch(e)
        {
            Api.handleError(e);
        }
    }

    private static handleError(error: any)
    {
        if(error.response)
        {
            const msg = error.response.data.message
        }
        else
        {
            console.log('something went wrong')
        }
    }

}