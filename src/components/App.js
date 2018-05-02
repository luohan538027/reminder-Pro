import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReminderAction,deleteReminderAction,clearReminderAction} from '../actions/index';
import moment from 'moment';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      text:'',
      dueTime:''
    }
  }

  addReminder(){
    this.props.addReminderAction(this.state)

  }

  renderReminder() {

    const {reminders} = this.props;
    return (
      <ul className='list-group col-sm-8 mt-3'>

      {reminders.map((reminder) => (
        <li key={reminder.id} className='list-group-item'>
          <div className='list-item'>
            <div>{reminder.text}</div>
            <div><em>{moment(new Date(reminder.dueTime)).fromNow()}</em></div>

          </div>
          <div
                  className="list-item delete-button"
                  onClick={ () => this.deleteReminder(reminder.id) }
                >
                  &#x2715;
                </div>
        </li>
      ))}


      </ul>
    )
  }

  deleteReminder(id){
     this.props.deleteReminderAction(id);
  }

  render() {
    return (
      <div className="App">
       <div className='title'>Reminder Pro</div>
       <div className='form-inline'>
          <div className='form-group mr-3'>
            <input 
            type="text" 
            className='form-control' 
            placeholder='i have to...'
            onChange={(e) => {this.setState({text:e.target.value})}}/>
          </div>
          <div className='form-group mr-3'>
            <input 
            type="datetime-local" 
            className='form-control' 
          
            onChange={(e) => {this.setState({dueTime:e.target.value})}}/>
          </div>         
            <button  onClick={this.addReminder.bind(this)} className='btn btn-success'>Add Reminder</button>
          
       </div>
       {this.renderReminder()}
       <button onClick={()=>this.props.clearReminderAction()} className='btn btn-danger'>Clear</button>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return {
    reminders:state
  }

}

export default connect(mapStateToProps,{addReminderAction,deleteReminderAction,clearReminderAction})(App);
