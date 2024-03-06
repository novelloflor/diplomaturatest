import React from "react";

import '../styles/components/pages/HomePage.css';


const HomePage = (props) => {
    return (
        <div>   
            <main class="holder">
                <div>
                    <h2>Welcome!</h2>
                    <img className="imagenes" src="\images\img-comidaprincipal.avif" alt="foto de comida" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, tortor in semper aliquam, ligula leo ultricies lacus, ut porta quam diam a nibh. Phasellus orci sem, placerat ut eros eget, lacinia luctus lectus. Ut convallis, velit a elementum tincidunt, erat ligula auctor nulla, in pharetra ligula turpis et ante. Nulla commodo porta molestie. Maecenas et quam ipsum. Duis pharetra eget tellus eget finibus. Nam egestas porttitor porta. Praesent sodales et leo dapibus efficitur. Pellentesque venenatis lacus ante, quis aliquet sem suscipit eget.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, tortor in semper aliquam, ligula leo ultricies lacus, ut porta quam diam a nibh. Phasellus orci sem, placerat ut eros eget, lacinia luctus lectus. Ut convallis, velit a elementum tincidunt, erat ligula auctor nulla, in pharetra ligula turpis et ante. Nulla commodo porta molestie. Maecenas et quam ipsum. Duis pharetra eget tellus eget finibus. Nam egestas porttitor porta. Praesent sodales et leo dapibus efficitur. Pellentesque venenatis lacus ante, quis aliquet sem suscipit eget.</p>
                </div>
            </main>
        </div>
    );
}

export default HomePage;