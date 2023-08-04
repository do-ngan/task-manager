import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../slices/taskSlice'; 
import EditTask from '../modals/EditTask';
import {format} from 'date-fns';
import toast from 'react-hot-toast';
import CheckButton from './CheckButton';


//const Card = ({task, index, deleteTask, updateListArray}) => {

const Card = ({task}) => {
    const [modal, setModal] = useState(false)
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()

    // const handleDelete =  () => {
    //     deleteTask(index);
    // }
    useEffect(() => {
        if (task.status === 'done') {
          setChecked(true)
        } else {
          setChecked(false)
        }
      }, [task.status])

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
        toast.success('Task Deleted')
    }

    const handleCheck = () => {
        setChecked(!checked)
        dispatch(editTask({
            ...task,
            status: checked ? 'pending' : 'done'
        }))
        console.log(task.status)
    }

    const toggle = () => setModal(!modal);

    // const editTask = (obj) => {
    //     updateListArray(obj, index)
    // }

    return (
        <div class="card m-3 shadow p-3 mb-5 bg-white rounded" style={{"width": "18rem", "height": "300px"}}>
            <div class="card-body">
                <div class="card-header">
                    <CheckButton checked={checked} setChecked={handleCheck}/>
                    <h5 class="card-title text-info">{task.title}</h5>
                </div>
                <p>{format(new Date(task.time), 'p, MM/dd/yyyy')}</p>
                <p class="card-text mt-3">{task.description}</p>
                <div style={{'position': 'absolute', 'right': '20px', 'bottom': '20px'}}>
                    <i class='far fa-edit' style={{'marginRight': '20px', 'cursor': 'pointer'}} onClick={() => setModal(true)}></i>
                    <i class='fas fa-trash-alt' style={{'cursor': 'pointer'}} onClick={handleDelete}></i>
                </div>
            </div>
            <EditTask task={task} toggle={toggle} modal={modal}/>
        </div>
    );
};

export default Card;