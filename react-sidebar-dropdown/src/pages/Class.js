import React,{useState,useEffect} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import "../App.css"
import Modal from 'react-bootstrap/Modal'
import {Button, Table} from 'react-bootstrap'
import Axios from 'axios'
const Class = () => {
  const [classData, setclassData] = useState([{
    id:0,
    class_name_nepali:"",
    short_name_nepali:"",
    class_name_english:"",
    salary_scale:0,
    class_order:0,
    class_status:"",
    created_by:"",
    class_action:""
  }]);
  const getallclassData=async()=>{
    Axios.get('http://localhost:3001/readclass').then((res)=>{
        setclassData(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  }
  
 
  const [show, setShow] = useState(false);
  
  
  
    const mystyle={
        padding:"5px",
        margin:"1rem 3rem"
    }

    const [classFormData, setclassFormData] = useState([{
      class_name_nepali:String,
      short_name_nepali:String,
      class_name_english:String,
      salary_scale:Number,
      created_by:String
    }]);
    const onhandleInputChange=(event)=>{
      event.persist();
      setclassFormData({...classFormData,[event.target.name]:event.target.value});
    }
    
    const onFormSubmit=(event)=>{
      event.persist();
      //console.log(classFormData);
      Axios.post('http://localhost:3001/insertclass',classFormData);
      setShow(false);
      getallclassData();
    }
    const onhandleDelete=async(id)=>{
      await Axios.delete(`http://localhost:3001/deleteclass/${id}`);
      
    }

    useEffect(() => {
      getallclassData();
    
  },[]);
  //third
<<<<<<< HEAD
  //fourth
=======
  //fifth
>>>>>>> 65c099544dac71285f05c776e08812ed79d555a0
    const classheading={
        display:"flex",
        width:"100%",
        height:"15%",
        fontSize:"1.15rem",
        justifyContent:"space-between",
        padding:"0.25rem"
    }
    
    const icons={
        width:"75%",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    }
    const myiconsClose={
      fontSize:"2rem",
      color:"white"
    }
    let ind=1;

    const [editShow, seteditShow] = useState(false);
  // const [editClassDatasave, seteditClassDatasave] = useState([{
  //   id:Number,
  //   class_name_nepali:String,
  //   short_name_nepali:String,
  //   class_name_english:String,
  //   salary_scale:Number,
  //   class_order:Number,
  //   class_status:String,
  //   created_by:String,
  //   class_action:String
  // }]);
  const [editClassDatasave, seteditClassDatasave] = useState({});
  const onEditsetvalue=async(id)=>{
    let res=await Axios.get(`http://localhost:3001/getbyid/${id}`);
    seteditClassDatasave(res.data[0]);
    seteditShow(true);
  }
  const onhandleEditInputChange=(event)=>{
    event.persist();
    seteditClassDatasave({...editClassDatasave,[event.target.name]:event.target.value});
}
const editSubmit=async()=>{
  await Axios.put(`http://localhost:3001/updating`,editClassDatasave);
  seteditShow(false);
  
}
       return(
         <>
           <div style={mystyle}>
               <div >
                   <span style={classheading}>
                       <span><b>Class Details</b></span>
                       <span style={{fontSize:"2rem",marginRight:"1rem",cursor:"pointer"}} onClick={()=>{setShow(true)}}><RiIcons.RiAddCircleFill/></span>
                   </span>
               </div>

               <Table hover responsive>
      <thead>
        <tr>
          <th style={{fontSize:"1.25rem"}}>S.N.</th>
          <th style={{fontSize:"1.25rem"}}>Class Name Nepali</th>
          <th style={{fontSize:"1.25rem"}}>Short Name Nepali</th>
          <th style={{fontSize:"1.25rem"}}>Class Name English</th>
          <th style={{fontSize:"1.25rem"}}>Salary Scale</th>
          <th style={{fontSize:"1.25rem"}}>Created by</th>
          <th style={{fontSize:"1.25rem"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {classData.map((value)=>(
        <tr>
          <td style={{padding:"0.5rem",fontSize:"1.05rem"}} >{ind++}</td>
          <td style={{padding:"0.5rem",fontSize:"1.05rem"}}>{value.class_name_nepali}</td>
          <td style={{padding:"0.5rem",fontSize:"1.05rem"}}>{value.short_name_nepali}</td>
          <td style={{padding:"0.5rem",fontSize:"1.05rem"}}>{value.class_name_english}</td>
          <td style={{padding:"0.5rem",fontSize:"1.05rem"}}>{value.salary_scale}</td>
          <td style={{padding:"0.5rem",fontSize:"1.05rem"}}>{value.created_by}</td>
          <td style={{padding:"0.5rem",fontSize:"1.05rem"}}>

              <div style={icons}>
              <span style={{color:"blue",fontSize:"1.25rem",padding:"0",cursor:"pointer"}} onClick={()=>onEditsetvalue(value.id)}><RiIcons.RiEditCircleFill/></span>
              <span style={{color:"red",fontSize:"1.25rem",padding:"0",cursor:"pointer"}} onClick={()=>onhandleDelete(value.id)}><RiIcons.RiDeleteBinFill/></span>
              </div>
          </td>
        </tr>
        
        ))}
      </tbody>
    </Table>
    </div>  
    
    {/* {
    
      editShow?<FormModal id={editID} type="edit"/>
      :null
    } */}

    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header style={{backgroundColor:"blue",color:"white"}}>
          <Modal.Title >
            Insert Class Data
          </Modal.Title>
          <Link style={myiconsClose} onClick={()=>{setShow(false)}}><RiIcons.RiCloseCircleLine/></Link>
        </Modal.Header>
        <Modal.Body>
        <div className="l-form">
            {/* <form action="" className="form"> */}
            <div className='form'>
  
                <div className="form__div">
                    <input value={classFormData.class_name_nepali} name='class_name_nepali' type="text" className="form__input" placeholder=" " onChange={onhandleInputChange} required/>
                    <label className="form__label">Class Name Nepali</label>
                </div>

                <div className="form__div">
                    <input value={classFormData.short_name_nepali} name='short_name_nepali' type="text" className="form__input" placeholder=" " onChange={onhandleInputChange} required/>
                    <label className="form__label">Short Name Nepali</label>
                </div>
                <div className="form__div">
                    <input value={classFormData.class_name_english} name='class_name_english' type="text" className="form__input" placeholder=" " onChange={onhandleInputChange} required/>
                    <label className="form__label">Class Name English</label>
                </div>
                <div className="form__div">
                    <input value={classFormData.salary_scale} name='salary_scale' type="number" className="form__input" placeholder=" " onChange={onhandleInputChange} required/>
                    <label className="form__label">Salary Scale</label>
                </div>
                <div className="form__div">
                    <input value={classFormData.created_by} name='created_by' type="text" className="form__input" placeholder=" " onChange={onhandleInputChange} required/>
                    <label className="form__label">Created By</label>
                </div>

                {/* <input type="submit" className="form__button" value="Sign In"/> */}
            {/* </form> */}
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
        <Button size='sm' onClick={()=>{setShow(false)}}>Cancel</Button>
        <Button size='sm' onClick={onFormSubmit}>Submit</Button>
      </Modal.Footer>
      </Modal>

      <Modal
        show={editShow}
        onHide={() => seteditShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header style={{backgroundColor:"blue",color:"white"}}>
          <Modal.Title >
            Edit Class Data
          </Modal.Title>
          <Link style={myiconsClose} onClick={()=>{seteditShow(false)}}><RiIcons.RiCloseCircleLine/></Link>
        </Modal.Header>
        <Modal.Body>
        
        <div className="l-form">
           
           <div className='form'>
               
               <div className="form__div">
                   <input value={editClassDatasave.class_name_nepali} name='class_name_nepali' type="text" className="form__input" placeholder=" " onChange={onhandleEditInputChange} required/>
                   <label className="form__label">Class Name Nepali</label>
               </div>
               
               <div className="form__div">
                   <input value={editClassDatasave.short_name_nepali} name='short_name_nepali' type="text" className="form__input" placeholder=" " onChange={onhandleEditInputChange} required/>
                   <label className="form__label">Short Name Nepali</label>
               </div>
               <div className="form__div">
                   <input value={editClassDatasave.class_name_english} name='class_name_english' type="text" className="form__input" placeholder=" " onChange={onhandleEditInputChange} required/>
                   <label className="form__label">Class Name English</label>
               </div>
               <div className="form__div">
                   <input value={editClassDatasave.salary_scale} name='salary_scale' type="number" className="form__input" placeholder=" " onChange={onhandleEditInputChange} required/>
                   <label className="form__label">Salary Scale</label>
               </div>
               <div className="form__div">
                   <input value={editClassDatasave.created_by} name='created_by' type="text" className="form__input" placeholder=" " onChange={onhandleEditInputChange} required/>
                   <label className="form__label">Created By</label>
               </div >
               
               
               
           </div>
       </div>
  
        </Modal.Body>
        <Modal.Footer>
        <Button size='sm' onClick={()=>{seteditShow(false)}}>Cancel</Button>
        <Button size='sm' onClick={editSubmit}>Submit</Button>
      </Modal.Footer>
      </Modal>
    </>         
    );
}

export default Class
