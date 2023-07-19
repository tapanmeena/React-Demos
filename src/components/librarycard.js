// create library cards like spotify
import React from 'react';
import './librarycard.css';

function LibraryCard(props) {
    const { image } = props;
    return (
        <div className="card">
            <img src={image} alt="Card Image" />
            <div className="content">
                <h2 className="title" >Card Title {props.index}</h2>
                <p className="sublabel">Sublabel 1 * Sublabel 2</p>
            </div>
        </div>
    );
}

export default LibraryCard;