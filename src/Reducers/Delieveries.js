export default (Delieveries=[],action)=>{
    switch(action.type){
        case 'editDel' :
            // console.log(action)
            if(action.payload.date!==Delieveries[Delieveries.length-1].date)
            return [...Delieveries,action.payload]
            else
            return Delieveries
            case 'getDel' :
            // console.log(action)
                // console.log("reduced")
                return action.payload
        default:
            return Delieveries
    }
}
