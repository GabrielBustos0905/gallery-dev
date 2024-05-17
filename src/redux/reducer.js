const initialState = {
    photos: [],
    allPhotos: [],
    searchedPhotos: []
}

const rootReducer = (state = initialState, action) => {
    const allPhotos = state.allPhotos

    switch(action.type) {
        case "GET_PHOTOS": {
            return {
                ...state,
                photos: action.payload,
                allPhotos: action.payload
            }
        }

        case "SEARCH_PHOTO": {
            return {
                ...state,
                searchedPhotos: action.payload
            }
        }

        case "MORE_PHOTOS": {
            return {
                ...state,
                photos: allPhotos.concat(action.payload)
            }
        }
        
        default:
            return {
                ...state
            }
    }
}

export default rootReducer