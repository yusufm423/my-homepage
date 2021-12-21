export default (close=[],action)=>{
    switch(action.type){
        
            case 'getClose' :
            // console.log(action)
                // console.log("reduced")
                return action.payload
        default:
            return close
    }
}
