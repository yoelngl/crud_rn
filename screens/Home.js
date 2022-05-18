import React, { useState, useEffect } from 'react';
import { Text, View, RefreshControl, Button, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content'
import styles from '../resources/styles/Style'
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state'
import Toast from 'react-native-simple-toast'

const Home = ({ navigation }) => {
    const {user} = useSelector(state => state)
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();
    const { allUser, addData, deleteData } = bindActionCreators(actionCreators, dispatch)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false)
            getMahasiswa()
        }, 500)
    };

    
    const getMahasiswa = async () => {
        setLoading(true)
        try{
            await allUser()
            setLoading(false)
        }catch(err){
            console.log(err)
        }
    }
    
    const destroy = (id) => {
        Alert.alert(
            "Hapus Data",
            "Data tidak dapat bisa dikembalikan!",
            [
                {
                text: "Batalkan",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Ya, Hapus!", onPress: async () => {
                    try{
                        let response = await axios.delete(`/users/${id}`)
                        deleteData(response.data)
                    }catch(e){
                        console.log(e)
                    }
                } 
                }
            ]
        )
    }

    const add =  async () => {
        await addData()
        navigation.navigate('Form')
    }
    
    useEffect(() => {
        getMahasiswa()
    }, [0])
    
    return (
        <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text style={styles.titleData}>Data Mahasiswa</Text>
            <Button title="Tambah Data" onPress={add} color="#00C851" style={{ marginRight:30 }} />
        </View>
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        } style={styles.content}>
            {loading ? 
                <View>
                    <Text>Sedang Meload Data....</Text>
                </View>
                : 
                user.user.length > 0 ?
                user.user.map((user, index) => {
                return(
                <Content navigation={navigation} deleteData={destroy} data={user} key={index}/>
                )
                }) : <Text>Tidak Ada Data</Text>
            }
            {/* <Text>{click}</Text> */}
        </ScrollView>
        </View>
    )
};

export default Home;
