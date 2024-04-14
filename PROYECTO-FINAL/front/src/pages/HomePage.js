const HomePage = (props) => {
    return(
        <div id="wrapper" className="fade-in">
            <div id="intro">
                <h1>Recetas<br />
                para todos</h1>
                <p>Bienvenido a nuestra web, donde encontrarás recetas de todo tipo y para todos los niveles.</p>
                <ul className="actions">
                    <li><a href="#main" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
                </ul>
            </div>
            <div id="main">
				<article className="post featured">
                    <header className="major">
                        <span className="date">25 de Abril, 2024</span>
                        <h2><a href="#">Bienvenido/a<br />
                        </a></h2>
                        <p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
                        facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
                        amet nullam sed etiam veroeros.</p>
                    </header>
                    <a href="#" className="image main"><img src="images/noquis-de-calabaza-caseros_800.webp" alt="" /></a>
				</article>
				<section className="posts">
                    <article>
                        <header>
                            <h2><a href="#">Sed magna<br />
                            ipsum faucibus</a></h2>
                        </header>
                        <a href="#" className="image fit"><img src="images/carne-asada_400.webp" alt="" /></a>
                        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                        <ul className="actions special">
                            <li><a href="#" className="button">Leer más</a></li>
                        </ul>
                    </article>
                    <article>
                        <header>
                            <h2><a href="#">Primis eget<br />
                            imperdiet lorem</a></h2>
                        </header>
                        <a href="#" className="image fit"><img src="images/carne-guisada-con-patatas_400.webp" alt="" /></a>
                        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                        <ul className="actions special">
                            <li><a href="#" className="button">Leer más</a></li>
                        </ul>
                    </article>
                    <article>
                        <header>
                            <h2><a href="#">Ante mattis<br />
                            interdum dolor</a></h2>
                        </header>
                        <a href="#" className="image fit"><img src="images/hamburguesa-de-carne-de-ternera-casera_400.webp" alt="" /></a>
                        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                        <ul className="actions special">
                            <li><a href="#" className="button">Leer más</a></li>
                        </ul>
                    </article>
                    <article>
                        <header>
                            <h2><a href="#">Tempus sed<br />
                            nulla imperdiet</a></h2>
                        </header>
                        <a href="#" className="image fit"><img src="images/pancakes-de-limon_400.webp" alt="" /></a>
                        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                        <ul className="actions special">
                            <li><a href="#" className="button">Leer más</a></li>
                        </ul>
                    </article>
                    <article>
                        <header>
                            <h2><a href="#">Odio magna<br />
                            sed consectetur</a></h2>
                        </header>
                        <a href="#" className="image fit"><img src="images/paella-de-carne_00000000_240308115530_600x600.jpg" alt="" /></a>
                        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                        <ul className="actions special">
                            <li><a href="#" className="button">Leer más</a></li>
                        </ul>
                    </article>
                    <article>
                        <header>
                            <h2><a href="#">Augue lorem<br />
                            primis vestibulum</a></h2>
                        </header>
                        <a href="#" className="image fit"><img src="images/bizcocho-de-manzana-y-yogur_00000000_240320164601_360x360.jpg" alt="" /></a>
                        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                        <ul className="actions special">
                            <li><a href="#" className="button">Leer más</a></li>
                        </ul>
                    </article>
				</section>
			</div>
            <div>
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/jquery.scrollex.min.js"></script>
                <script src="assets/js/jquery.scrolly.min.js"></script>
                <script src="assets/js/browser.min.js"></script>
                <script src="assets/js/breakpoints.min.js"></script>
                <script src="assets/js/util.js"></script>
                <script src="assets/js/main.js"></script>
            </div>
        </div>
    );
}

export default HomePage;