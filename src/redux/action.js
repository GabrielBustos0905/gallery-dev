const API_KEY = 'AyE7tahK3zAfmG3wxWhjLz52V1gLGJDGfE4yycj8jHw'
let PAGE = 1

export function getPhotos () {
    return async function (dispatch) {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/?page=1&client_id=${API_KEY}&per_page=30`)
            const data = await response.json()

            return dispatch({
                type: "GET_PHOTOS",
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: "Photos couldn't be loaded"
            })
        }
    }
}

export function searchPhoto (value) {
    return async function(dispatch){
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos/?page=${PAGE}&query=${value}&client_id=${API_KEY}&per_page=30`)
            const data = await response.json()

            return dispatch({
                type: "SEARCH_PHOTO",
                payload: data.results
            })
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: "Photon't"
            })
        }
    }
}

export function morePhotos (value) {
    return async function (dispatch){
        PAGE++
        console.log(PAGE)

        if(!value) {
            const response = await fetch(`https://api.unsplash.com/photos/?page=${PAGE}&client_id=${API_KEY}&per_page=30`)
            const data = await response.json()
        
            return dispatch({
                type: "MORE_PHOTOS",
                payload: data
            })
        } else {
            const response = await fetch(`https://api.unsplash.com/search/photos/?page=${PAGE}&query=${value}&client_id=${API_KEY}&per_page=30`)
            const data = await response.json()

            return dispatch({
                type: "MORE_PHOTOS_SEARCHED",
                payload: data.results
            })
        }
    }
}