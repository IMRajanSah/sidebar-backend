import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import { Button } from 'react-bootstrap'
import "../App.css"
const EditForm = (props) => {
    //Edit class operation
    const history=useHistory();
    const [editclassdata, seteditclassdata] = useState(props.data)
    const onhandleEditInputChange=(event)=>{
        event.persist();
        seteditclassdata({...editclassdata,[event.target.name]:event.target.value});
    }
    const editSubmit=async()=>{
        //await Axios.post(`http://localhost:3001/postbyid`,editclassdata);
        history.push('/setting/class');
        console.log(editclassdata);
    }
    // const arr=Object.keys(editclassdata);
    return (
        <div>
            

            <div className="l-form">
           
            <div className='form'>
                
                <div className="form__div">
                    <input value={editclassdata.class_name_nepali} name='class_name_nepali' type="text" className="form__input" placeholder=" " onChange={onhandleEditInputChange}/>
                    <label className="form__label">Class Name Nepali</label>
                </div>
                
                <div className="form__div">
                    <input value={editclassdata.short_name_nepali} name='short_name_nepali' type="text" className="form__input" placeholder=" " onChange={onhandleEditInputChange}/>
                    <label className="form__label">Short Name Nepali</label>
                </div>
                <div className="form__div">
                    <input value={editclassdata.class_name_english} name='class_name_english' type="text" className="form__input" placeholder=" " onChange={onhandleEditInputChange}/>
                    <label className="form__label">Class Name English</label>
                </div>
                <div className="form__div">
                    <input value={editclassdata.salary_scale} name='salary_scale' type="number" className="form__input" placeholder=" " onChange={onhandleEditInputChange}/>
                    <label className="form__label">Salary Scale</label>
                </div>
                <div className="form__div">
                    <input value={editclassdata.created_by} name='created_by' type="text" className="form__input" placeholder=" " onChange={onhandleEditInputChange}/>
                    <label className="form__label">Created By</label>
                </div >
                
                <Button style={{marginLeft:"82%"}} onClick={editSubmit}>Submit</Button>
                
            </div>
        </div>
        
        </div>
    )
}

export default EditForm
