import { React } from 'react';

const RecetaItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className='recetas'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{__html: body }}/>
            <hr/>
        </div>
    );
}

export default RecetaItem;
