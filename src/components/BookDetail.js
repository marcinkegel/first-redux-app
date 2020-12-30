import React from 'react';
import {connect} from "react-redux";
const BookDetail = ({book}) => {
    if (!book) {
        return <div> Select a book</div>
    }

    return (


        <div>
            <h3>Details for: </h3>
            <p>
                Author: {book.author}
                <br/>
                Title: {book.title}
            </p>

        </div>
    );

}

const mapStateToProp = (state) =>{
    return {book: state.selectedBook }
}

export default connect(mapStateToProp)(BookDetail);