export default (requests=[],action)=>{
    console.log(action)
    switch(action.type){
        case 'editReq' :
            console.log(requests)
            if(requests[requests.length-1]?.date!==action?.payload?.date)
            {
                requests?.push(action.payload)
                return requests 
            }
            else 
            return requests
            case 'getReq' :
                return action.payload
        default:
            return requests
    }
}
