export default (Notices=[],action)=>{
    // console.log(action)
    switch(action.type){
        case 'editNotice' :
            // console.log("reduced")
            return [action.payload].concat(Notices)
        case 'getNotice' :
                // console.log("reduced")
                return action.payload.reverse()
        default:
            return Notices
    }
}
