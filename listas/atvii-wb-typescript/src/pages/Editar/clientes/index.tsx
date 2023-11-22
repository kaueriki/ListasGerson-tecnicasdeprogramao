/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

export class EditarCliente extends Component {
    render(){

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Editar Cliente:</h1>
                <Button  variant="outline-dark" href='/clientes'>Voltar</Button>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Nome" >Nome:</label>
                            <input type="text" defaultValue="Luis"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input type="text" defaultValue="Silva"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Social">Nome social:</label>
                            <input type="text" defaultValue="Cnpjoto"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Genero">Gênero:</label>
                            <select name="genero" id="genero">
                                <option>"gênero"</option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text" defaultValue="324.424.234.X"/>
                        </div>
                        <div className="field">
                            <label htmlFor="rg">RG:</label>
                            <input type="text" defaultValue="12.234.345/06"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Telefone">Telefone:</label>
                            <input type="text" defaultValue="4002-8922"/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit'>Editar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}
}

