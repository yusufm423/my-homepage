export default (TimeTable={},action)=>{
    switch(action.type){
        case 'getTimetable' :
            return action.payload
        default:
            return TimeTable
    }
}
