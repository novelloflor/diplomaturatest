const ContactoPage = (props) => {
    return(
        <div id="wrapper">				
            <div id="main">	
                <section className="post">
                    <header className="major">
                        <h1>Contactanos<br />
                        </h1>
                    </header>								
                    <form method="post" action="#">
                        <div className="fields">
                            <div className="field">
                                <label for="name">Nombre</label>
                                <input type="text" name="name" id="name"/>
                            </div>
                            <div className="field">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email"/>
                            </div>
                            <div className="field">
                                <label for="message">Mensaje</label>
                                <textarea name="message" id="message" rows="3"></textarea>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Mandar mensaje"/></li>
                        </ul>
                    </form>
                </section>
            </div>

        </div>
    );
}

export default ContactoPage;