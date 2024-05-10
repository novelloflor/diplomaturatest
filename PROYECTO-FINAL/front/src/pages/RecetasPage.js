import { useState, useEffect } from 'react';
import axios from 'axios';
import RecetaItem from './../components/recetas/RecetaItem';
import '../assets/css/recetas.css';


const RecetasPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        const cargarRecetas = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/recetas');
            setRecetas(response.data);
            setLoading(false);
        };
        cargarRecetas();
    }, []);

    return(
        <section className='holder'>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    recetas.map(item => <RecetaItem key={item.id} title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.cuerpo} />)
                )
            }

        </section>
    );
}

export default RecetasPage;