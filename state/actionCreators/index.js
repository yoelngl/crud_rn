import axios from 'axios'
import Toast from 'react-native-simple-toast'

export const allUser = () => {
    return async (dispatch) => {
        let response = await axios.get('/users');
        dispatch({
            type: 'ALL_USER',
            data: response.data
        })
    }
}

export const addData = () => {
    return async (dispatch) => {
        dispatch({
            type: 'ADD_DATA',
        })
    }
}

export const storeData = (data) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: 'STORE_DATA',
                data: data.data
            })
            Toast.show(data.message,Toast.LONG);
        }catch(e){
            console.log(e);
        }
    }
}

export const deleteData = (data) => {
    return async (dispatch) => {
        console.log(data);
        try{
            dispatch({
                type: 'DELETE_DATA',
                data: data.data
            })
            Toast.show(data.message,Toast.LONG);
        }catch(e){
            console.log(e);
        }
    }
}

export const updateData = (data) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: 'UPDATE_DATA',
                data: data.data
            })
            Toast.show(data.message,Toast.LONG);
        }catch(e){
            console.log(e);
        }
    }
}

export const editUser = (data) => {
    return async (dispatch) => {
        try{
            let response = await axios.get(`/users/${data.id}`);
            dispatch({
                type: 'EDIT_DATA',
                form: response.data.data
            })
        }catch(err){
            console.log(err);
        }
    }
}