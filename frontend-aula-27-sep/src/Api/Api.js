export const Api = {
    baseUrl: "http://localhost:3002",

    readAllUrl: () => fetch(Api.baseUrl + "/product"),
    
    readById: (id)=> fetch(Api.baseUrl + "/product"+id),

}    // buildApiGetRequest: url => fetch(url,{ method: "GET",})