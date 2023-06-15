import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'


export default function Ara({navigation}) {

  const [selectedDest, setSelectedDest] = useState();

  const [kalkis, setKalkis] = useState("");
  const [varis, setVaris] = useState("");
  const [error, setError] = useState(false);
  
  

  const handlePress= () => {
    if( varis.length===0 || kalkis.length===0){
      Alert.alert('Uyarı', 'Seçimleri yapınız')
    }
    else{
    navigation.navigate('Seferler')
  }
  }

  return (
    <View style={styles.view}>
    <View style={styles.container}>
      <Text style={styles.text}>Gidiş</Text>
      <Text style={styles.text}>Gidiş Dönüş</Text>
    </View>
    <View style={styles.inputview}>
        <Text style={styles.text}>Nereden: </Text>
        <TextInput style={styles.input} value= {kalkis} 
                  onChangeText={(text) => setKalkis(text)}/>
      </View>
      <View style={styles.inputview}>
        <Text style={styles.text}>Nereye: </Text>
        <TextInput style={styles.input} value= {varis} 
                  onChangeText={(text) => setVaris(text)}/>
      </View>
      <View>
      <TouchableOpacity onPress={handlePress} style={styles.araview}>
        <Text style={styles.ara} >Ara</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
view:{marginTop:120},
container:{flexDirection:'row', marginTop: 50, justifyContent: 'space-around', fontSize:20, 
            marginBottom:30},
text:{fontSize:17, fontWeight:'bold'},
inputview:{ flexDirection: 'row',borderBottomWidth:2, margin:15, padding:1},
ara:{fontSize:20, alignSelf:'center' },
araview:{borderWidth:2,  backgroundColor: 'whitesmoke', alignItems:'center',
              margin:60, marginLeft:120, marginRight:120, justifyContent: 'center', 
              height:50, }
}