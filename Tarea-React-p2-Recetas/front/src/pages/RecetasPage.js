import React from "react";
import '../styles/components/pages/RecetasPage.css';

const RecetasPage = (props) => {
    return (
        <div>
            <main className="holder">
                <div className="recipes-page">
                    <h3>Search your favorite recipes!</h3>  
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Type the name of you recipe here..." name="search" list="search-suggestions" autocomplete="off"/>
                    <datalist id="search-suggestion">
                        <option value="Mac and Cheese"/>
                        <option value="Spicy Ribs"/>
                        <option value="Sushi"/>
                        <option value="Empanadas"/>
                    </datalist>
                </div>
                <div>
                    <img className="imagenes"/>
                    <p class="parrafos">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, tortor in semper aliquam, ligula leo ultricies lacus, ut porta quam diam a nibh. Phasellus orci sem, placerat ut eros eget, lacinia luctus lectus. Ut convallis, velit a elementum tincidunt, erat ligula auctor nulla, in pharetra ligula turpis et ante. Nulla commodo porta molestie. Maecenas et quam ipsum. Duis pharetra eget tellus eget finibus. Nam egestas porttitor porta. Praesent sodales et leo dapibus efficitur. Pellentesque venenatis lacus ante, quis aliquet sem suscipit eget.</p> 
                </div>
                <div>
                    <img className="imagenes"/>
                    <p class="parrafos">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, tortor in semper aliquam, ligula leo ultricies lacus, ut porta quam diam a nibh. Phasellus orci sem, placerat ut eros eget, lacinia luctus lectus. Ut convallis, velit a elementum tincidunt, erat ligula auctor nulla, in pharetra ligula turpis et ante. Nulla commodo porta molestie. Maecenas et quam ipsum. Duis pharetra eget tellus eget finibus. Nam egestas porttitor porta. Praesent sodales et leo dapibus efficitur. Pellentesque venenatis lacus ante, quis aliquet sem suscipit eget.</p> 
                </div>
                <div>
                    <img className="imagenes1"/>
                    <p class="parrafos">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, tortor in semper aliquam, ligula leo ultricies lacus, ut porta quam diam a nibh. Phasellus orci sem, placerat ut eros eget, lacinia luctus lectus. Ut convallis, velit a elementum tincidunt, erat ligula auctor nulla, in pharetra ligula turpis et ante. Nulla commodo porta molestie. Maecenas et quam ipsum. Duis pharetra eget tellus eget finibus. Nam egestas porttitor porta. Praesent sodales et leo dapibus efficitur. Pellentesque venenatis lacus ante, quis aliquet sem suscipit eget.</p> 
                </div>
            </main>
        </div>
    );
}
export default RecetasPage;