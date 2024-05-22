const initialState = {
    photo: {},
    photos: [],
    allPhotos: [],
    searchedPhotos: []
}

const rootReducer = (state = initialState, action) => {
    const allPhotos = state.allPhotos
    const allSearchedPhotos = state.searchedPhotos

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

        case "MORE_PHOTOS_SEARCHED": {
            return {
                ...state,
                searchedPhotos: allSearchedPhotos.concat(action.payload)
            }
        }

        case "GET_PHOTO": {
            return {
                ...state,
                photo: action.payload
            }
        }
        
        default:
            return {
                ...state
            }
    }
}

export default rootReducer