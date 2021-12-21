import React,{useState} from 'react'
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


export const App = (props) => {
  // console.log(props)
  const heading=props.props
  
  // console.log(heading)
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  // for onchange event
  const [pdfFile, setPdfFile]=useState(null);
  const [pdfFileError, setPdfFileError]=useState('');

  // for submit event
  const [viewPdf, setViewPdf]=useState(null);
  const dispatch = useDispatch()
  // onchange event
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
  const [msg,setMsg] = useState(null)
  return (
    <div className='container'>

    <br></br>
    
      <form className='form-group' onSubmit={handlePdfFileSubmit}>
        <input type="file" className='form-control'
          required onChange={handlePdfFileChange}
        />
        {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
        <br></br>
        <div style={{display:"inline-flex"}}>
        <Button type="submit" variant="outlined" color="primary"
        style={{margin:"10px"}}>
          Preview
        </Button>
        <br></br>
        <br></br>
        {
        pdfFile?<Button variant="outlined" color="primary"
        style={{margin:"10px"}}
        onClick={()=>{
          setMsg("Uploading...")
          dispatch(editnotice(heading,pdfFile,setMsg))}}>Upload</Button>:<></>
      }
      {msg?msg:""}
      </div>
      </form>
      <br></br>
      <h4>Preview PDF</h4>
      <div className='pdf-container' style={{height:viewPdf?"80vh":"5vh"}}>
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

export default App