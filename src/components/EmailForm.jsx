import React, { Component } from 'react';
import emailjs from "emailjs-com"
import Swal from 'sweetalert2'

export default class EmailForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
		};
    }

    sendMessage(event) {
        event.preventDefault();
 
    const templateParams = {
          from_name: this.state.name + " (" + this.state.email + ")",
          to_name: "aguswagner008@gmail.com",
          message: this.state.message
        };
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(this.state.name.length < 3 || !pattern.test(this.state.email)  || this.state.message.length < 10){
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'Algunos de los datos ingresados son incorrectos.',

              })
        }
        else{
        emailjs
        .send("service_3eo6nzn", "template_46boxyp", templateParams, "user_btDFhPeq09Qva1Zz0Zk2j")
        .then(
          function(response) {
            Swal.fire({
                icon: 'success',
                title: 'Mensaje enviado',
                text: ' En breve me pondré en contacto con usted.',
              })
          },
          function(err) {
              console.log(err)
              Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'Algo salió mal. Intente de nuevo en unos minutos.',
                footer: 'Podés escribirme directamente a aguswagner008@gmail.com'

              })
          }
        );   
        this.setState({
            name: "",
            email: "",
            message: "",
          }); 
        }
        }

	handleInputChange(event) {
		event.preventDefault();
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({ [name]: value });
    }
    
	render() {
		return (
			<div>
				<form className="form-group d-flex"
                    style={{backgroundColor: "white", width: "80%"}}
                    className="mx-auto mt-4 p-4 shadow rounded"
				>
					<input
						id="name"
                        name="name"
                        className="form-control"
						onChange={this.handleInputChange.bind(this)}
						placeholder="Your name..."
                        value={this.state.name}
                        minLength={3}
                        required
					/>
					<br />
					<input
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
						onChange={this.handleInputChange.bind(this)}
						placeholder="Your email..."
                        value={this.state.email}
                        required
					/>
					<br />
					<textarea
						id="message"
                        name="message"
                        className="form-control"
						onChange={this.handleInputChange.bind(this)}
						placeholder="Your message..."
                        value={this.state.message}
                        style={{height: "300px"}}
                        required
					/>
					<br />
					<input
						type="button"
						value="Send"
						className="btn btn-primary"
						onClick={this.sendMessage.bind(this)}
					/>
				</form>
			</div>
		);
	}
}
