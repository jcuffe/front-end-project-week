import React, { Component } from 'react'
import { withRouter } from 'react-router'
import ActionButton from '../buttons/ActionButton'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = props.note
  }

  promptText = () => this.props.editingNote
    ? 'Edit Note'
    : 'Create New Note'

  buttonText = () => this.props.editingNote
    ? 'Update'
    : 'Create Note'

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value})
  handleSubmit = () => {
    this.props.handleSubmit(this.state)
    this.props.history.push('/')
  }
  
  render() {
    return (
      <div className="note-form">
        <h1>{this.promptText()}</h1>
        <input 
          name='title'
          placeholder='Title'
          value = {this.state.title}
          onChange={this.handleChange} />
        <textarea
          rows='20'
          name='content'
          placeholder='Note content'
          value = {this.state.content}
          onChange={this.handleChange} />
        <div className="control">
          <ActionButton 
            onClick={this.handleSubmit}
            text={this.buttonText()} />
        </div>
      </div>
    )
  }
}

export default withRouter(NoteForm)