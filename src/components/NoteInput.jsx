import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limitChar: 50,
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.limitChar),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    this.setState(() => {
      return {
        title: '',
        body: '',
      };
    });
  }

  render() {
    return (
      <div className='note-input'>
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className='note-input__title__char-limit'>
            Sisa karakter: {this.state.limitChar - this.state.title.length}
          </p>
          <input
            className='note-input__title'
            type='text'
            value={this.state.title}
            placeholder='Ini adalah judul ...'
            onChange={this.onTitleChangeEventHandler}
            required=''
          />
          <textarea
            className='note-input__body'
            type='text'
            value={this.state.body}
            placeholder='Tuliskan catatanmu di sini ...'
            onChange={this.onBodyChangeEventHandler}
            required=''
          ></textarea>
          <button type='submit'>Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
