import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button, ScrollView, Alert } from 'react-native'
import Toast from 'react-native-simple-toast'
import styles from './resources/styles/Style'
import axios from 'axios'
import Content from './screens/Content'
import Form from './screens/Form'

const App = () => {
  const currentState = {
    nim: '',name: '', address: '', major: ''
  }
  const [state, setState] = useState(currentState)
  const [error, setError] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMahasiswa = async () => {
    try{
      let response = await axios.get('/users')
      setUsers(response.data.data)
      setLoading(false)
    }catch(err){
      console.log(err)
    }
  }

  const edit = async (id) => {
    try{
      let response = await axios.get(`/users/${id}`)
      let data = response.data.data
      setState(data)
      
    }catch(e){
      console.log(e)
    }
  }

  const deleteData = (id) => {
    console.log(id)
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
            Toast.show(response.data.message)
            getMahasiswa()
          }catch(e){
            console.log(e)
          }
        } 
      }
      ]
    )
  }
  
  const submit = async () => {
    Toast.show('Tunggu Sebentar...',200);
    try{
      let response = await axios.post('store/users',state,{
        headers: {
          "Accept": "application/json",
        }
      });
      setError([])
      setState(currentState)
      Toast.show(response.data.message,Toast.LONG);
      getMahasiswa();
    }catch({response}){
      setError([])
      setError(response.data.errors)
    }
  }

  useEffect(() => {
    getMahasiswa()
  }, [0])
  
  return (
    <View style={styles.container}>
      <Form error={error} setState={setState} state={state} submit={submit} />
      <Text style={styles.titleData}>Tampil Semua Data</Text>
      <ScrollView style={styles.content}>
        {loading ? 
            <View>
                <Text>Sedang Meload Data....</Text>
            </View>
            : 
            users.length > 0 ?
            users.map((user, index) => {
            return(
              <Content edit={edit} deleteData={deleteData} data={user} key={index}/>
            )
          }) : <Text>Tidak Ada Data</Text>
        }
      </ScrollView>
    </View>
  )
}

export default App
