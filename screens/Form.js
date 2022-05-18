import React, {useState} from 'react';
import { View,Text, TextInput, Button,ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import styles from '../resources/styles/Style';
import Toast from 'react-native-simple-toast'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';


const Form = ({navigation}) => {
    const {user} = useSelector(state => state)
    const form = user.form
    const dispatch = useDispatch()
    const { storeData,updateData } = bindActionCreators(actionCreators, dispatch)

    const currentState = {
      nim: form ? form.nim : '' , name: form ? form.name : '' , address: form ? form.address : '' , major: form ? form.major : '',id:  form ? form.id : '' 
    }

    const [state, setState] = useState(currentState)
    const [error, setError] = useState([]);

    const changeHandler = (value,input) => {
      setState({...state, [input]: value})
      if(input == 'nim'){
        setState({...state, [input]: value.replace(/[^0-9]/g, '')})
      }
    }

    const submit = async () => {
      Toast.show('Tunggu Sebentar...', 200);
        try{
          let response = await axios.post('store/users',state,{
            headers: {
                  "Accept": "application/json",
              }
          });

          if(form.id != null){
            try{
              await updateData(response.data)
              navigation.navigate('Home')
            }catch(e){
              console.log(e)
            }
          }else{
            try{
              storeData(response.data)
              navigation.navigate('Home')
            }catch(e){
              console.log(e)
            }
          }

        }catch({response}){
          setError([])
          setError(response.data.errors)
        }
    }

    return(
    <ScrollView style={styles.container}>
        <View style={styles.formGroup}>  
          <Text style={styles.title}>Isi data anda dibawah ini</Text>
        </View>
        <View style={styles.formGroup}>  
          <TextInput placeholder='Masukkan NIM Anda' keyboardType='numeric' value={state.nim} onChangeText={(value) => changeHandler(value, 'nim') } style={styles.inputText}></TextInput> 
          {error.nim && <Text style={{ color:'red' }}>{error.nim}</Text>  }
        </View>
        <View style={styles.formGroup}>  
          <TextInput placeholder='Masukkan Nama Anda' value={state.name} onChangeText={(value) => changeHandler(value, 'name')} style={styles.inputText}></TextInput>  
          {error.name && <Text style={{ color:'red' }}>{error.name}</Text>  }
        </View>
        
        <View style={styles.formGroup}>
          <Picker selectedValue={state.major} onValueChange={(value) => changeHandler(value, 'major')}>
            <Picker.Item label="Pilih Jurusan Kamu" enabled={false} value="" />
            <Picker.Item label="Akuntansi" value="Akuntansi" />
            <Picker.Item label="Computer Science" value="Computer Science" />
            <Picker.Item label="Multimedia" value="Multimedia" />
            <Picker.Item label="Tehnik Komputer Jaringan" value="Tehnik Komputer Jaringan" />
            <Picker.Item label="Kedokteran" value="Kedokteran" />
          </Picker>
          {error.major && <Text style={{ color:'red' }}>{error.major}</Text>  }
        </View>  
        <View style={styles.formGroup}>
          <TextInput multiline={true} numberOfLines={3} placeholder='Masukkan Alamat Anda' value={state.address} onChangeText={(value) => changeHandler(value, 'address')} style={styles.textArea}></TextInput>
          {error.address && <Text style={{ color:'red' }}>{error.address}</Text>  }
        </View>  
        <Button title="Submit" onPress={submit} style={{ color: 'green' }}></Button>
      </ScrollView>
    )
}

export default Form;
