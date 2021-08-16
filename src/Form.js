import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
    }

    handleSumit = (e) => {
        e.preventDefault()

        let { nome } = this.state
        nome = nome 

        console.log('funcionou', nome)
    }

    handleInputChange = (e) => {

        this.setState({
            nome: e.target.value
        })
    }
    render() {

        const { nome } = this.state

        return (
            <section>
                <form onSubmit={this.handleSumit}>
                    <label>
                        Nome:
                        <input onChange={this.handleInputChange} type='text' placeholder='Nome'/>
                    </label>
                    <button type='submit'>Enviar</button>
                </form>

                <h3>{nome}</h3>
            </section>
        )
    }
}

export default Form;