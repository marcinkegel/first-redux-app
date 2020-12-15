//ACTION CREATOR
export const selectBook = book => {
    //RETURN AN ACTION
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
};

