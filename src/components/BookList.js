import React from 'react';
import { connect } from "react-redux";
import {selectBook} from "../actions";

const BookList = (props) => {

    const renderList = ()=>{
        return props.books.map((book)=>{
            return(
                <div className="item" key={book.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=>props.selectBook(book)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{book.title}</div>
                </div>

            );
            }
        );
    }

    return (

        <div className="ui divided list">
            {renderList()}
        </div>
    );

}

const mapStateToProps = (state) => {
    return {books: state.books};
}

export default connect(mapStateToProps, { selectBook })(BookList);