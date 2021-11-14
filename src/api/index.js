import axios from'axios'

const url='http://localhost:5000/'

export const getTimetable = ()=> axios.get(`${url}timetable/getTime`)

export const editTimetable =(newtime)=> axios.post(`${url}timetable/edit`,newtime)

export const editNotices = (heading,file) =>axios.post(`${url}notices/edit`,{heading,file})

export const getNotices = () =>axios.get(`${url}notices/get`)

export const getrequests = () => axios.get(`${url}api/req/reqorder/get`)