import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import buses from '../Buses.js'

export default function Ara({navigation}) {

  const [selectedDest, setSelectedDest] = useState();

  const [kalkis, setKalkis] = useState("");
  const [varis, setVaris] = useState("");
  const [error, setError] = useState(false);
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);

  const handleOneWay = () => {
  
    if(activeOne){
      setActiveOne(false)
      setActiveTwo(true)
    }
     else{
      setActiveOne(true)
      setActiveTwo(false)
     }
  
  };
  
  const handleTwoWay = () => {
    if(activeTwo){
      setActiveOne(true)
      setActiveTwo(false)
    }
     if(!activeTwo){
      setActiveOne(false)
      setActiveTwo(true)
     }
  };

  const handlePress= () => {
    if( varis.length===0 || kalkis.length===0){
      Alert.alert('Uyarı', 'Seçimleri yapınız')
    }
    else if(buses[0].boardingPoints.toString().toLowerCase().includes(kalkis.toLowerCase())=== true  && buses[0].droppingPoints.toString().toLowerCase().includes(varis.toLowerCase())===true){
    navigation.navigate('Seferler')
  }
  else{
    Alert.alert('Uyarı', 'Sefer bulunamadı')
  }
  }

  return (
    <View style={styles.view}>
    <View style={styles.container}>
      <TouchableOpacity style={{borderWidth:1, padding:10,width:150, alignItems:'center', 
                            backgroundColor: activeOne ? "green" : "white"}} 
                        onPress={handleOneWay}>
        <Text style={styles.text}>Gidiş</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth:1, padding:10,width:150, alignItems:'center',
                                backgroundColor: activeTwo ? "green" : "white"}}
                        onPress={handleTwoWay} >
        <Text style={styles.text}>Gidiş Dönüş</Text>
      </TouchableOpacity>
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
view:{marginTop:170},
container:{flexDirection:'row', marginTop: 50, justifyContent: 'space-around', fontSize:20,
            marginBottom:30},
text:{fontSize:17, fontWeight:'bold'},
inputview:{ flexDirection: 'row',borderBottomWidth:2, margin:15, padding:1},
ara:{fontSize:20, alignSelf:'center' },
araview:{borderWidth:2,  backgroundColor: 'indianred', alignItems:'center',
              margin:60, marginLeft:120, marginRight:120, justifyContent: 'center', 
              height:50, }
}