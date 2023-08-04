/*
Extra Credit:
1. Create a function called searchTermReducer that can handle the following action types:
    * 'searchTerm/setSearchTerm'
    * 'searchTerm/clearSearchTerm'
    * Don't forget to set the initial state and return state by default!

2. Create a function called setSearchTerm
    * It has one parameter, term
    * It returns an action object whose payload is the term value
    * See SearchTerm.js for how this will be used.

3. Create a function called clearSearchTerm
    * It returns an action object with no payload
    * See SearchTerm.js for how this will be used.

*/

const initialSearchTerm = '';

export const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm': {
            return action.payload;
        }
        case 'searchTerm/clearSearchTerm': {
            return '';
        }
        default: {
            return searchTerm;
        }
    }
}

export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm',
    }
}



