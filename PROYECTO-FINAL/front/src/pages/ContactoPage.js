import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return(
        <div id="wrapper">				
            <div id="main">	
                <section className="post">
                    <header className="major">
                        <h1>Contactanos<br />
                        </h1>
                    </header>								
                    <form action="/contacto" method="post" onSubmit={handleSubmit}>
                        <div className="fields">
                            <div className="field">
                                <label for="name">Nombre</label>
                                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                            </div>
                            <div className="field">
                                <label for="email">Email</label>
                                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="field">
                                <label for="telefono">Telefono</label>
                                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                            </div>
                            <div className="field">
                                <label for="mensaje">Mensaje</label>
                                <textarea name="mensaje" rows="3" value={formData.mensaje} onChange={handleChange} ></textarea>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Mandar mensaje"/></li>
                        </ul>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                    </form>
                </section>
            </div>

        </div>
    );
}

export default ContactoPage;