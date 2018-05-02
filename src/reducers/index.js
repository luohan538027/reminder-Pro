 import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDER} from '../contants/index'
 import { bake_cookie, read_cookie} from 'sfcookies'



 const reminder = (action) => {
     return {
         text:action.info.text,
         id:Math.random(),
         dueTime:action.info.dueTime
     }
 }
 
 const reminders = (state=  read_cookie('reminders')|| [],action={}) =>{
     let reminders;
    switch(action.type){
            
        case ADD_REMINDER:

        reminders = [
            ...state,
            reminder(action)
        ]
        bake_cookie('reminders',reminders)
        return reminders

        case DELETE_REMINDER:
            reminders = state.filter((reminder)=> reminder.id !== action.id)
            bake_cookie('reminders',reminders)
        return reminders


        case CLEAR_REMINDER:
        reminders = []
        bake_cookie('reminders',reminders)
        return reminders

        default:return state
    }
 }



 export default reminders;