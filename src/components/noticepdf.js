import React,{useEffect, useState} from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

import { editnotice } from '../Actions';

import { useDispatch } from "react-redux";
import { Button } from '@material-ui/core';

import { useSelector } from 'react-redux';

import { getnotice } from '../Actions';
import { relativeTimeRounding } from 'moment';

export const Apple = (props) => {
  const notice = String(window.location.href)
  const index=(notice[notice.length-1])-1
  
  const dispatch = useDispatch()
  useEffect(()=>dispatch(getnotice()),[dispatch])

  const file = useSelector(state=>state?.notice[index]?.file)
  // console.log(file)
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // for onchange event
  const [pdfFile, setPdfFile]=useState(file);
  const [pdfFileError, setPdfFileError]=useState('');
  if(!pdfFile && file)
  setPdfFile(file)

  console.log(pdfFile)

  // for submit event
  const [viewPdf, setViewPdf]=useState(file);
  // onchange event
  if(!viewPdf && pdfFile)
  setViewPdf(pdfFile)
  const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
    
    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              setPdfFileError('');
            }
          }
          else{
            setPdfFile(null);
            setPdfFileError('Please select valid pdf file');
          }
        }
        else{
          console.log('select your file');
        }
      }
      

  // form submit
  const handlePdfFileSubmit=(e)=>{
    e.preventDefault();
    if(pdfFile!==null){
      setViewPdf(pdfFile);
      


    }
    else{
      setViewPdf(null);
    }
  }

  return (
    <div className='container' style={{padding:"10px"}}>

    <br></br>
    
      
      <div className='pdf-container' style={{height:"100vh",width:"80vw"}}>
        {/* show pdf conditionally (if we have one)  */}
        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      {/* if we dont have pdf or viewPdf state is null */}
      {!viewPdf&&<>No pdf file selected</>}
      </div>
      

    </div>
  )
}

export default Apple