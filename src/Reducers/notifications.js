export default (Notifications=[],action)=>{
    switch(action.type){
        case 'editNotifications' :
            console.log(action)
            if(action.payload.date!==Notifications[Notifications.length-1].date)
            return [...Notifications,action.payload]
            else
            return Notifications
            case 'getNotifications' :
            // console.log(action)
                // console.log("reduced")
                return action.payload
        default:
            return Notifications
    }
}
