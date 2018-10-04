import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Maschio', value: 'Maschio' },
    { key: 'f', text: 'Femmina', value: 'Femmina' },
]

class SingUp extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Nome' placeholder='Nome' />
                    <Form.Input fluid label='Cognome' placeholder=' Cognome' />
                    <Form.Select fluid label='Sesso' options={options} placeholder='Sesso' />
                    <Form.Input fluid label='Email' placeholder=' abc@mail.com' />
                </Form.Group>
                <Form.Input fluid label='Nome Utente' placeholder='Nome Utente' />
                <Form.Input fluid type='password' label='Password' placeholder='password' />

                <Form.TextArea label='About' placeholder='Tell us more about you...' />
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Form.Button>Submit</Form.Button>
            </Form>
        )
    }
}

export default SingUp
