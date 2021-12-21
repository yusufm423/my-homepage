import axios from'axios'

const url='http://localhost:5000/'

export const getTimetable = ()=> axios.get(`${url}timetable/getTime`)

export const editTimetable =(newtime)=> axios.post(`${url}timetable/edit`,newtime)

export const editNotices = (heading,file) =>axios.post(`${url}notices/edit`,{heading,file})

export const getNotices = () =>axios.get(`${url}notices/get`)

export const getrequests = () => axios.get(`${url}api/req/reqorder/get`)

export const getAll = () => axios.get(`${url}AllStud/get`)

export const getImage =(email)=> axios.post(`${url}images/get`,{email})

export const closeDin = (email)=>axios.post(`${url}close/acc`,{email})

// export const editImage =(email,image)=> axios.post(`${url}images/post`,{email,image})