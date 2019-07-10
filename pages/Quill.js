import React,{useState} from 'react'
import dynamic from 'next/dynamic';
const DynamicReactQuill = dynamic(() => import('react-quill'));
const DynamicrenderHTML = dynamic(() => import('react-render-html'));
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function Quill () {
    const[getText,setText] = useState("") ;
    // const[getmodules,setmodules] = useState(    
    //     toolbar = [
    //     [{ 'header': [1, 2, false] }],
    //     ['bold', 'italic', 'underline','strike', 'blockquote'],
    //     [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    //     ['link', 'image'],
    //     ['clean']
    //   ]
    //   );

    // const[getformats,setformats] = useState(
    // 'header','bold', 'italic', 'underline', 'strike', 
    // 'blockquote','list', 'bullet', 'indent','link', 
    // 'image'
    // );
    function HandleSummit(){
      return(
        <div>
          {/* Add to MonGODB */}
        </div>
      )
    }
    function handleChange(value) {
        setText(value)
        console.log(value)
    }

    

      return (
          <div >
              TestQuill
              <DynamicReactQuill 
                modules={Quill.modules}
                formats={Quill.formats}
                value={getText}
                onChange={handleChange}/>
              <button onClick={HandleSummit}>Post</button>
              <br/>
              Simple Here...
              <div dangerouslySetInnerHTML={{__html: getText}}></div>
          </div>

      )
      

  }

  Quill.modules = {
    toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{'list': 'ordered'}, {'list': 'bullet'}],  
        ['link', 'image','video'],
        ['clean'],
        ['code-block']
        
      ]
  }
  Quill.formats = [
    'bold','italic','underline','strike','size','color','background','list','indent','link','image','video','clean','code-block'
  ]