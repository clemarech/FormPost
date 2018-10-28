import React, {Component} from 'react';
import './FormEmployee.css';

class FormEmployee extends Component{
  constructor(props){
    super(props);
    this.state = {
      lastname: '',
      firstaname: '',
      email: ''
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  submitForm(e) {
    e.preventDefault();
  const config = {
     method: "POST",
     headers: {
         "Content-Type": "application/json",
     },
     body: JSON.stringify(this.state),
   };
  const url = "http://92.175.11.66:3001/api/quests/employees/";

  fetch(url, config)
  .then(res => res.json())
  .then(data => {
     if(data.error) {
       alert(data.error);
     } else {
       alert(`Employé ajouté avec l'ID ${data}!`);
     }
   })
   .catch(e => {
     console.error(e);
     alert('Erreur lors de l\'ajout d\'un employé');
   });
 }
  render(){
    return(
      <div>
        <div className="FormEmployee">
 <h1>Saisi d'un employé</h1>

 <form onSubmit={this.submitForm}>
   <fieldset>
     <legend>Informations</legend>
     <div className="form-data">
       <label htmlFor="lastname">Nom</label>
       <input
         type="text"
         id="lastname"
         name="lastname"
         onChange={this.onChange}
         value={this.state.lastname}
       />
     </div>

     <div className="form-data">
       <label htmlFor="firstname">Prénom</label>
       <input
         type="text"
         id="firstname"
         name="firstname"
         onChange={this.onChange}
         value={this.state.firstname}
       />
     </div>

     <div className="form-data">
       <label htmlFor="email">E-mail</label>
       <input
         type="email"
         id="email"
         name="email"
         onChange={this.onChange}
         value={this.state.email}
       />
     </div>
     <hr />
     <div className="form-data">
       <input type="submit" value="Envoyer" />
     </div>
   </fieldset>
 </form>
</div>
      </div>
    )
  }
}

export default FormEmployee;
