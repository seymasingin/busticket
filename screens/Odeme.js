import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function Odeme({navigation}) {

  const [kartname, setKartname] = useState("");
  const [kartno, setKartno] = useState("");
  const [cvv, setCvv] = useState("");
  const [skt, setSkt] = useState("");

  const handlePress= () => {
    navigation.navigate('Basarili')
  }

  return (
    <View style={styles.kartinputs}>
      <TextInput style={styles.input}
                placeholder='Kart Numarası' 
                value={kartno} 
                onChangeText={(text)=>setKartno(text)} 
                keyboardType='numeric'/>
      <TextInput style={styles.input}
                placeholder='Kart Üzerindeki İsim' 
                value={kartname} 
                onChangeText={(text)=>setKartname(text)}/>
      <View style={styles.cvvskt}>
        <TextInput style={styles.inputcvv}
                    placeholder='CVV' 
                    value={cvv} 
                    onChangeText={(text)=>setCvv(text)}
                    keyboardType='numeric' />
        <TextInput style={styles.inputskt}
                  placeholder='Son Kullanma Tarihi' 
                  value={skt} 
                  onChangeText={(text)=>setSkt(text)}
                  />
      </View>
      <TouchableOpacity style={styles.ödeview} onPress={handlePress}>
        <Text>Öde</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = {
  kartinputs:{marginTop:100},
  input:{borderWidth:1, marginLeft:30,marginRight:30, marginTop:10, height:40},
  inputskt:{borderWidth:1, width:200},
  inputcvv:{borderWidth:1, width:100},
  cvvskt:{flexDirection:'row', height:40, marginLeft:30,marginRight:30, 
          justifyContent:'space-between', marginTop:10,},
  ödeview:{ marginRight:30, alignSelf:'flex-end', marginTop:200, borderWidth:1, padding:15, 
            backgroundColor:'green'  }
}