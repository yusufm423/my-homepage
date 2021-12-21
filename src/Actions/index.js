import { getrequests,getTimetable,editTimetable, editNotices,getNotices } from "../api"
export const gettimetable = () => async (dispatch) => {
    try {
        const { data } = await getTimetable()
        // console.log(data)
        dispatch({ type: 'getTimetable', payload: data })
    }
    catch (error) {
        console.log(error.message)
    }
}
export const edittimetable = (newtime) => async (dispatch) => {
    try {
        const { data } = await editTimetable(newtime)
        // console.log(data)
        dispatch({ type: 'getTimetable', payload: data })
    }
    catch (error) {
        console.log(error.message)
    }
}
export const editnotice = (heading,file,setMsg) => async (dispatch) => {
    try {
        // console.log("reached")
        const { data } = await editNotices(heading,file)
        console.log("jaa")
        setMsg("Uploaded")
        dispatch({ type: 'editNotice', payload: data })
    }
    catch (error) {
        console.log(error.message)
    }
}
export const getnotice = (heading,file) => async (dispatch) => {
    try {
        // console.log("reached")
        const { data } = await getNotices()
        // console.log(data)
        dispatch({ type: 'getNotice', payload: data })
    }
    catch (error) {
        console.log(error.message)
    }
}

export const getreq = () => async (dispatch) => {
    try {
        // console.log("reached")
        const { data } = await getrequests()
        // console.log(data)
        dispatch({ type: 'getReq', payload: data.requests })
        dispatch({type:'getDel',payload:data.delieveries})
        dispatch({type:'getClose',payload:data.reqClose})
    }
    catch (error) {
        console.log(error.message)
    }
}