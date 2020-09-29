const initialState = {
    cars: [{
        id: 0,
        tittle: 'Mersedes'
    }]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CAR':
            return {
                cars: action.payload
            }
        case 'ADD_CAR':
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }
        default:
            return state
    }
}
