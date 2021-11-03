import { getTimetable,editTimetable } from "../api"
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