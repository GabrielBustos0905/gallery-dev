const initialState = {
    photos: [],
    allPhotos: []
}

const rootReducer = (state = initialState, action) => {
    // const allPhotos = state.allPhotos
    // const actualPhotos = state.photos

    switch(action.type) {
        case "GET_PHOTOS": {
            // console.log(action.payload)
            return {
                ...state,
                photos: action.payload,
                allPhotos: action.payload
            }
        }

        case "SEARCH_PHOTO": {
            // console.log(action.payload)
            return {
                ...state,
                photos: action.payload
            }
        }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer