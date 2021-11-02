import axios from'axios'

const url='http://localhost:5000/'

export const getTimetable = ()=> axios.get(`${url}timetable/getTime`)

export const editTimetable =(newtime)=> axios.post(`${url}timetable/edit`,newtime)