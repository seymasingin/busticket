import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux';

export default function Seferler({navigation}) {

const {allbuses} = useSelector((state) => state.buses);


  return (
    <ScrollView>
      {allbuses.map((bus, index) => {
        return(
      <TouchableOpacity style={styles.bus_container} onPress={() => navigation.navigate('Detay')} >
        <View style={styles.names}>
          <Text style={styles.busname}>{bus.name}</Text>
          <Text style={styles.fiyat}>Fiyat:{bus.price} TL</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.kalkis}>Kalkış: {bus.arrivalTime}</Text>
          <Text style={styles.varis}>Varış: {bus.depatureTime}</Text>
        </View>
      </TouchableOpacity>)}
      )}
    </ScrollView>
  )
}

const styles={
  bus_container:{borderWidth:1, margin:20, marginTop:40, padding:10, backgroundColor:'gainsboro'},
  busname:{fontWeight:'bold', fontSize:16,},
  names:{flexDirection:'row', justifyContent:'space-between'},
  fiyat:{fontSize:16,},
  time:{flexDirection:'row', justifyContent:'space-between', marginTop:30},
  kalkis:{fontSize:16,},
  varis:{fontSize:16,}
}