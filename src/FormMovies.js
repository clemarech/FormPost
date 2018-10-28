import React, {Component} from 'react';
import './FormMovies.css';


class FormMovies extends Component{
  constructor(props){
    super(props);
    this.state ={
      name: '',
      poster: '',
      comment: ''
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  };

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  submitForm(e){
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

   const url = "http://92.175.11.66:3001/api/quests/movies/";

   fetch(url, config)
     .then(res => res.json())
     .then(data => {
       if(data.error){
         alert(data.error)
       } else {
         alert(`Movie send with the ${data} ID`)
       }
     })
     .catch(e => {
       console.error("error " + e)
       alert('Error during the sending')
     });
}

  render(){
    return(
      <React.Fragment>
        <div className="FormMovies">
        <h1> What's your favourite movie ?</h1>
        <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className="container">
            <label htmlFor="name">Name of the movie</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            id="name">

          </input>
          </div>
          <div className="container">
            <label htmlFor="poster">Url</label>
          <input
            type="text"
            name="poster"
            value={this.state.poster}
            onChange={this.onChange}
            id="poster"
            placeholder="url of your movie's img">
          </input>
          </div>
          <div className="container">
            <label htmlFor="comment">Why ?</label>
          <textarea
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={this.onChange}
            id="comment"
            placeholder="Why this one ?">
          </textarea>
          </div>
          <input type="submit" value="Send" id="button" />
        </fieldset>
        </form>
        </div>
      </React.Fragment>
    )
  }
}
export default FormMovies;
