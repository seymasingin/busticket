import { View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';


export default function Giris({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const user = useSelector(state=> state.auth)

  const handleUye= () => {
    navigation.navigate('Kayit')
  }
  

const handleGiris = () => {
  if(user.email!=email || user.password!=password){
    Alert.alert('Uyarı:', 'Böyle bir kullanıcı bulunamadı')
    setIsValid(false);
    
    navigation.navigate('Kayit')
  }
  else{
    navigation.navigate('Ara')
  }
};

  return (
    <View>
      <Image style={styles.logo} source={require("../assets/logo.png")}/>
      <View style={styles.inputview}>
        <Text style={styles.text}>Email: </Text>
        <TextInput style={[styles.input, !isValid && styles.errorInput]} value= {email} 
                  onChangeText={(text) => setEmail(text)} />
      </View>
      <View style={styles.inputview}>
        <Text style={styles.text}>Şifre: </Text>
        <TextInput style={[styles.input, !isValid && styles.errorInput]} value= {password} 
                  onChangeText={(text) => setPassword(text)} />
      </View>
      <View style={styles.buttons}>
      <TouchableOpacity onPress={handleGiris} style={styles.girisview}>
        <Text style={styles.giris} >Giriş</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleUye} style={styles.uyeview}>
        <Text style={styles.uye} >Hemen üye ol!</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = {
  logo: {height:150, width:150, alignSelf:'center', marginTop:150 },
  text:{fontSize:17, fontWeight:'bold'},
  inputview:{ flexDirection: 'row',borderBottomWidth:2, margin:15, padding:1},
  giris:{fontSize:20, alignSelf:'center' },
  girisview:{borderWidth:2,  backgroundColor: 'whitesmoke', alignItems:'center', width:100,  
            justifyContent: 'center', height:50,  },
  input:{borderBottomColor: 'black',},
  errorInput: {borderBottomColor: 'red',},
  buttons:{flexDirection: 'column', justifyContent: 'center', alignItems:'center', marginTop:50},
  uyeview:{marginTop:50},
  uye:{fontSize:17, borderBottomWidth:1}
}