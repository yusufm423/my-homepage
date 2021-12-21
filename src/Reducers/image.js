export default (image="",action)=>{
    // console.log(action)
    switch(action.type){
        case 'getImage' :
                // console.log("reduced")
                return action.payload
        default:
            return image
    }
}
