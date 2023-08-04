import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../slices/taskSlice'; 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import toast from 'react-hot-toast';
import { v4 as uuid } from 'uuid';



const EditTask = ({task, modal, toggle}) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const dispatch = useDispatch()


    // useEffect(() => {
    //     setTask(taskObj.Name)
    //     setDescription(taskObj.Description)
    // },[])

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(name === 'title') {
            setTitle(value);
        } else {
            setDescription(value);
        }

    }

    // const handleEdit = (e) => {
    //     e.preventDefault()
    //     let tempObj = {}
    //     tempObj['Name'] = task
    //     tempObj['Description'] = description
    //     updateListArray(tempObj)
    // }

    const handleEdit = () => {
        if(title && description) {
            if(task.task !== title || task.description !== description) {
                dispatch(editTask({
                    ...task,
                    title, 
                    description,
                }))
                toast.success('Task Edited')
                toggle()
            } else {
                toast.error('No Changes Made')
            }          
        } else {
            toast.error('Title & Description Needed')
        }
        toggle()
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className = 'form-group'>
                        <label>Task Name</label>
                        <input type='text' className='form-control mt-2 mb-3' value={title} onChange={handleChange} name='title'/>
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows='5' className='form-control mt-2 mb-3' value={description} onChange={handleChange} name='description'></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleEdit}>
                    Edit
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTask;