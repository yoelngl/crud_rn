import React from 'react';
import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        margin: 20,
        // flex: 1,
        // display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    content: {
        marginTop : 10,
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 18,
        fontWeight: '900',
        flex: 4,
    },
    button_container: {
        flexDirection: 'row'
    },
    card: {
         marginBottom: 10,
         backgroundColor: '#eee', 
         borderRadius: 5, 
         padding: 10
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },  
    identify:{
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    titleData: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    formGroup: {
        marginBottom: 15
    },  
    inputText:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 15,
    },
    textArea:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlignVertical: 'top',
        paddingHorizontal: 15,
    }
})

export default Style;
