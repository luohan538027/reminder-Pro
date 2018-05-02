import * as type from '../contants/index'

export const addReminderAction = (info) =>{
    return {
        type:type.ADD_REMINDER,
        info
    }
}


export const deleteReminderAction = (id) =>{
    return {
        type:type.DELETE_REMINDER,
        id
    }
}


export const clearReminderAction = () =>{
    return {
        type:type.CLEAR_REMINDER,
        
    }
}