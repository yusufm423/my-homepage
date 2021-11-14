export default (Notifications=[],action)=>{
    // console.log(action)
    switch(action.type){
        case 'editNotification' :
            // console.log("reduced")
            return [action.payload].concat(Notification)
        case 'getNotification' :
                // console.log("reduced")
                return action.payload.reverse()
        default:
            return Notification
    }
}
