import { createSlice } from '@reduxjs/toolkit'

const getInitialTaskList = () => {
    const localTaskList = window.localStorage.getItem('taskItem');
    if (localTaskList) {
        return JSON.parse(localTaskList)
    }
    window.localStorage.setItem('taskItem', JSON.stringify([]))
    return []
}

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        filterStatus: 'all',
        taskItem: getInitialTaskList ()
    },
    reducers: {
        addTask: (state, action) => {
            state.taskItem.push(action.payload);
            const taskList = window.localStorage.getItem('taskItem');
            if(taskList) {
                const taskListArr = JSON.parse(taskList);
                taskListArr.push({
                    ...action.payload,
                })
                window.localStorage.setItem('taskItem', JSON.stringify(taskListArr))
            } else {
                window.localStorage.setItem('taskItem', JSON.stringify([{...action.payload}]))
            }
        },
        deleteTask: (state, action) => {
            const taskList = window.localStorage.getItem('taskItem');
            if(taskList) {
                const taskListArr = JSON.parse(taskList);
                taskListArr.forEach((task, index) => {
                    if(task.id === action.payload) {
                        taskListArr.splice(index, 1)
                    }
                })
                window.localStorage.setItem('taskItem', JSON.stringify(taskListArr))
                state.taskItem =  taskListArr
            }
        }, 
        editTask: (state, action) => {
            const taskList = window.localStorage.getItem('taskItem');
            if(taskList) {
                const taskListArr = JSON.parse(taskList);
                taskListArr.forEach((task) => {
                    if(task.id === action.payload.id) {    
                        task.description = action.payload.description
                        task.status = action.payload.status    
                        task.title = action.payload.title           
                    }
                })
                window.localStorage.setItem('taskItem', JSON.stringify(taskListArr))
                state.taskItem =  [...taskListArr]
            }
        },
        updateFilterStatus: (state, action) => {          
            state.filterStatus = action.payload;
        }
    }
})
// const updateListArray = (obj, index) => {
    //     let tempList = taskList
    //     tempList[index] = obj       
    //     localStorage.setItem('taskItem', JSON.stringify(tempList));
    //     setTaskList(tempList)
    //     window.location.reload();
    // }
export const { addTask, deleteTask, editTask, updateFilterStatus } = taskSlice.actions
export default taskSlice.reducer