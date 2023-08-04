import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/taskSlice'; 
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

const CreateTask = ({modal, toggle}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(name === 'title') {
            setTitle(value);
        } else {
            setDescription(value);
        }

    }

    const handleSave = (e) => {
        e.preventDefault()
        if(title && description) {
            dispatch(addTask({
                id: uuid(),
                title, 
                description,
                time: new Date().toLocaleString()
            }))
            toast.success('Task Added Successfully')
        } else {
            toast.error('Title & Description Needed')
        }
        toggle() 
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;