import { getTimetable,editTimetable, editNotices,getNotices } from "../api"
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
export const editnotice = (heading,file) => async (dispatch) => {
    try {
        console.log("reached")
        const { data } = await editNotices(heading,file)
        console.log("jaa")
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