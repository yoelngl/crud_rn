import React from 'react';
import { View,Text, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import styles from '../resources/styles/Style';

const componentName = ({setState, state, error, submit}) => {
    return(
    <View style={styles.form}>
        <View style={styles.formGroup}>  
          <Text style={styles.title}>Isi data anda dibawah ini</Text>
        </View>
        <View style={styles.formGroup}>  
          <TextInput placeholder='Masukkan NIM Anda' keyboardType='numeric' value={state.nim} onChangeText={(value) => setState({...state,nim: value.replace(/[^0-9]/g, '')}) } style={styles.inputText}></TextInput> 
          {error.nim && <Text style={{ color:'red' }}>{error.nim}</Text>  }
        </View>
        <View style={styles.formGroup}>  
          <TextInput placeholder='Masukkan Nama Anda' value={state.name} onChangeText={(value) => setState({...state,name: value}) } style={styles.inputText}></TextInput>  
          {error.name && <Text style={{ color:'red' }}>{error.name}</Text>  }
        </View>
        
        <View style={styles.formGroup}>
          <Picker selectedValue={state.major} onValueChange={(value,index) => setState({...state,major: value})}>
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
          <TextInput multiline={true} numberOfLines={3} placeholder='Masukkan Alamat Anda' value={state.address} onChangeText={(value) => setState({...state,address: value}) } style={styles.textArea}></TextInput>
          {error.address && <Text style={{ color:'red' }}>{error.address}</Text>  }
        </View>  
        <Button title="Masukkan Data Anda" onPress={submit} style={{ color: 'green' }}></Button>
      </View>
    )
}

export default componentName;
