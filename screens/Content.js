import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../resources/styles/Style';
import { actionCreators } from '../state';

const Content = ({data, deleteData, navigation}) => {
    const dispatch = useDispatch()
    const { editUser } = bindActionCreators(actionCreators, dispatch)
     
    const editData = async () => {
        await editUser(data)
        navigation.navigate('Form')
    }
    

    return(
        <View style={styles.card}>
            <View style={styles.identify}>
                <Text style={styles.name}>{data.name}</Text>
                <Text >{data.major}</Text>
            </View>
            <Text style={styles.nim}>{data.nim}</Text>
            <View
                style={{
                borderBottomColor: '#2e2e2e',
                borderBottomWidth: 1,
                marginVertical : 10,
                }}
            />
            <View style={styles.button_container}>
                <View style={{ marginRight: 10,}}>
                <Button title="Edit Data" onPress={editData} color="#ff5733" style={{ marginRight:30 }} />
                </View>
                <Button title="Delete Data" onPress={() => deleteData(data.id)} style={{ marginRight: 50 }} color="#D11A2A" />
            </View>
        </View>
    )
   
};

export default Content;
