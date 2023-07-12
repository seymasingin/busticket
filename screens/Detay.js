import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import seats from '../Seats';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Detay({navigation}) {

 const [tickets, setTickets] = useState([]);

 function findSeatByNumber(seats, number) {
  for (let i = 0; i < seats.length; i++) {
    const row = seats[i];
    for (let j = 0; j < row.length; j++) {
      const seat = row[j];
      if (seat && seat.number === number) {
        return seat;
      }
    }
  }

  return null;
}

 const handlePress =(number,gender) =>{
  if(findSeatByNumber(seats, number).isReserved=== true || findSeatByNumber(seats, number).reserve === true){
    Alert.alert('Uyarı', 'Seçilen koltuk dolu')
  }
  else{
    findSeatByNumber(seats, number).reserve = true;
    setTickets([...tickets, {number:number, gender:gender}])
  }
 }

 const handlePressTrash = (number) => {
  const removed = tickets?.filter(item => item.number !== number);
  setTickets(removed)
  findSeatByNumber(seats, number).reserve = false;
 }

const handleBuy = () => {
  navigation.navigate('Odeme')
}

  return ( 
    <SafeAreaView>
    <KeyboardAwareScrollView>
      <View  style={styles.genders}>
        <View style= {styles.genderview}>
        <Image source={require('../assets/seat.png')} style={[styles.seat_sample ,{tintColor: 'hotpink'}]} />
          <Text style={styles.genderText}>Kadın</Text>
        </View>
        <View style= {styles.genderview}>
        <Image source={require('../assets/seat.png')} style={[styles.seat_sample ,{tintColor: 'lightskyblue'}]} />
          <Text style={styles.genderText}>Erkek</Text>
        </View>
        <View style= {styles.genderview}>
        <Image source={require('../assets/seat.png')} style={[styles.seat_sample ,{tintColor: 'gainsboro'}]} />
          <Text style={styles.empty}>Boş Koltuk </Text>
        </View>
      </View>

      <View style={styles.allseats}>
      <Image style={styles.direc} source={require('../assets/direc.png')}/>
        {seats.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.twoseat}>
            {row.map((seat, seatIndex) => (
              <View key={seatIndex} >
                {seat ? (
                  <TouchableOpacity style={styles.container} onPress={() => handlePress(seat.number, seat.gender)}>
                    <Image source={require('../assets/seat.png')} style={[styles.image , {tintColor: seat.gender=='male'? 'lightskyblue' : seat.gender=='female' ? 'hotpink' : seat.reserve=== true ? 'green' :'gainsboro'}]} />
                    <View style={styles.overlay}>
                      <Text style={styles.number}>
                      {seat.number<10 ? seat.number.toString().padStart(2, '0') : seat.number}
                      </Text>
                    </View>
                    
                  </TouchableOpacity>
                ) : (
                  <View><Text>    </Text></View>
                )}
                
              </View>
            ))}
            
          </View>
          
      ))
      }
      </View>  
      <View style={styles.allTickets}>
        {tickets.map((ticket) => (
          <View style={styles.ticketView}>
           <View style={styles.container}>
            <Image source={require('../assets/seat.png')} style={[styles.image ,{tintColor: ticket.gender=='male'? 'lightskyblue' : ticket.gender=='female' ? 'hotpink' :'gainsboro'}]} />
            <View style={styles.overlay}>
              <Text style={styles.number}>
                {ticket.number<10 ? ticket.toString().padStart(2, '0') : ticket.number}
              </Text>
            </View>
            </View>
            <TextInput placeholder='Ad Soyad' style={styles.ticketName}></TextInput>
            <Text>1000 TL</Text>
            <TouchableOpacity onPress={() => handlePressTrash(ticket.number)}>
            <Ionicons style={styles.trash} name="trash-outline" size={23}  />
            </TouchableOpacity>
          </View>
          
        ))}
         
      </View>  
        
        <View style={styles.buyview} >
          <Text style={styles.total}>Toplam  </Text>
          <Text>{tickets.length*1000} TL</Text>
          
        </View>
        <View style={{paddingHorizontal:10,paddingVertical:10}}>
        <TouchableOpacity style={styles.buy} onPress= {handleBuy}>
        <Text >Satın Al</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
const styles={
  genders: {flexDirection:'row',justifyContent:'center', marginTop:30, },
  genderText: {paddingLeft:5},
  genderview: {flexDirection:'row', alignItems:'center', paddingLeft:25},
  empty:{paddingLeft:7},
  container: {position: 'relative', margin:3},
  overlay: {position: 'absolute',top: 0,left: 0,right: 0,bottom: 0,justifyContent: 'center',alignItems: 'center',},
  image:{ width:35, height:35},
  seat_sample:{width:30, height:30},
  buyview:{alignSelf:'flex-end', marginTop:10, marginRight:45, flexDirection:'row',
            alignItems:'center',  justifyContent:'center', },
  total:{ fontWeight:'bold', },
  buy:{ fontWeight:'bold', alignItems:'center', marginTop:20, borderWidth:1, 
  backgroundColor:'indianred', paddingVertical:8, },
  number:{fontWeight:'bold', color: 'white', paddingBottom:6, fontSize:14},
  direc:{width:35,height:35, tintColor:'gray',marginBottom:10},
  allseats:{ alignSelf:'center', marginTop:30, borderWidth:1, padding:10, borderColor: 'silver'},
  twoseat:{flexDirection: 'row',},
  ticketView:{flexDirection: 'row', alignItems:'flex-end'},
  allTickets:{marginTop:20, alignSelf:'center' },
  ticketName:{borderBottomWidth:1, padding:0, marginLeft:20, marginRight:20, width:200, 
            alignSelf:'flex-start'},
  trash:{paddingLeft:10}
}