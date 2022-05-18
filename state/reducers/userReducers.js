const initialState = {
    user: [],
    form: [],
    error: []
}

const userReducers = (state = initialState, action) => {
    switch (action.type){
        case 'ALL_USER': {
            const allUser = {
                ...state,
                user: action.data.data
            }
            return allUser
        }
        case 'ADD_DATA': {
            const addData = {
                ...state,
                form: []
            }
            return addData
        }
        case 'STORE_DATA': {
            const storeData = {
                ...state,
                user: state.user.concat(action.data)
            }
            return storeData
        }
        case 'UPDATE_DATA': {
            const updateData = {
                ...state,
                user: state.user.map(item => {
                    return item.id === action.data.id ? action.data : item
                })
            }
            return updateData
        }
        case 'DELETE_DATA': {
            const deletedData = {
                ...state,
                user: state.user.filter((item) => {
                    return item.id !== action.data.id
                })
            }
            return deletedData
        }
        case 'EDIT_DATA': {
            const editData = {
                ...state,
                form: action.form
            }
            return editData
        }
        default:
            return state;
    }
}

export default userReducers