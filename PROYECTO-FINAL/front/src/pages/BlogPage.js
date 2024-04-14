const BlogPage = (props) => {
    return(
        <div id="wrapper">
           <div id="main">
                <section className="post">
                    <header className="major">
                        <h1>Bienvenido/a<br />
                        al blog!</h1>
                    </header>								
                    <h3>Unite a la comunidad</h3>
                    <p>Si te interesa unirte a la comunidad y compartir tus recetas este es el lugar indicado para vos!</p>
                    <div className="row">
                        <div className="col-6 col-12-small">
                            <ul className="actions stacked">
                                <li><a href="#registrar" class="button primary fit">Registrate</a></li>
                                <li><a href="#inicioSesion" class="button fit">Iniciar Sesión</a></li> 
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <h2 id="registrar">Completa tus datos</h2>

                    <form method="post" action="#">
                        <div class="row gtr-uniform">
                            <div class="col-6 col-12-xsmall">
                                <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
                            </div>
                            <hr/>
                            <div class="col-6 col-12-xsmall">
                                <input type="text" name="demo-name" id="demo-name" value="" placeholder="Apellido" />
                            </div>
                            <hr/>
                            <div class="col-6 col-12-xsmall">
                                <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                            </div>
                            <hr/>
                            <div class="col-6 col-12-xsmall">
                                <input type="password" name="demo-email" id="demo-email" value="" placeholder="Contraseña" />
                            </div>

                            <div class="col-12">
                                <ul class="actions">
                                    <li><input type="submit" value="Registrarme" class="primary" /></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                    <hr />
                </section>
            </div>
        </div>
    );
}

export default BlogPage;
