import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Detay({navigation}) {

 const [fullname, setFullname] = useState("");
 const [tc, setTc] = useState("");
 const [gender, setGender] = useState("");

const handlePress= () => {
if(seat.isAvailable && seat.gender === 'female'){

}
}

const handleBuy = () => {
  navigation.navigate('Odeme')
}

const firstColumn =[1,5,9];
const secondColumn =[2,6,10]
const thirdColumn =['     ','    ','    '];
const fourthColumn =[3,7,11];
const fifthColumn = [4,8,12]

  return (
    <View>
      <View style={styles.genders}>
        <View style= {styles.genderview}>
          <Ionicons name="woman-outline" size={32} color="black" style={styles.kadinicon}/>
          <Text style={styles.seat}>Kadın</Text>
        </View>
        <View style= {styles.genderview}>
          <Ionicons name="man-outline" size={32} color="black" style={styles.erkekicon}/>
          <Text style={styles.seat}>Erkek</Text>
        </View>
        <View style= {styles.genderview}>
        <Ionicons  size={32} color="black" style={styles.bosicon}/>
          <Text style={styles.seat}>Boş Koltuk </Text>
        </View>
      </View>

      <View style={styles.allseats}>
        <View style={styles.columns}>
          {firstColumn.map((index) => 
                <TouchableOpacity onPress={handlePress} style={styles.seatbox}>
                  <Text style={styles.num}>{index}</Text>
                </TouchableOpacity>  )}
        </View>
        <View style={styles.columns}>
          {secondColumn.map((index) => 
            <TouchableOpacity onPress={handlePress} style={styles.seatbox} >
              <Text style={styles.num}>{index}</Text>
            </TouchableOpacity>  )} 
            </View>
            <View style={styles.columns}>
          {thirdColumn.map((index) => 
              <TouchableOpacity onPress={handlePress} style={styles.seatboxthird}>
                <Text style={styles.num}>{index}</Text>
                </TouchableOpacity>  )}  
                </View> 
                <View style={styles.columns}>
          {fourthColumn.map((index) => 
        <TouchableOpacity onPress={handlePress} style={styles.seatbox}>
          <Text style={styles.num}>{index}</Text>
          </TouchableOpacity>  )} 
          </View> 
          <View style={styles.columns}>
          {fifthColumn.map((index) => 
          <TouchableOpacity onPress={handlePress} style={styles.seatbox}>
            <Text style={styles.num}>{index}</Text>
          </TouchableOpacity>  )}  
        </View> 
      </View>    
        <View style={styles.inputs}>
          <TextInput  placeholder=' Ad Soyad' value={fullname} onChangeText={() => setFullname}/>
          <TextInput placeholder=' Cinsiyet' value={gender} onChangeText={() => setGender}/>
          <TextInput placeholder=' TC' value={tc} onChangeText={() => setTc}/>
        </View>
        <TouchableOpacity style={styles.buyview} onPress= {handleBuy}>
          <Text style={styles.buy}>*toplamfiyat*</Text>
          <Text style={styles.buy}>Satın Al</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles={
  genders:{flexDirection:'row',justifyContent:'space-around', marginTop:70, },
  kadinicon:{borderWidth: 1, width:35, height:35, backgroundColor:'pink'},
  erkekicon:{borderWidth: 1, width:35, height:35, backgroundColor:'skyblue'},
  bosicon:{borderWidth: 1, width:35, height:35, },
  genderview:{flexDirection:'row', alignItems:'center'},
  seat:{paddingLeft:7},

  inputs:{flexDirection:'row', justifyContent:'space-around', marginTop:110},
  yolcuinput:{fontWeight:'bold', width:100, borderWidth:1, height:37},
  buyview:{borderWidth:1, width: 100, alignSelf:'flex-end', marginTop:160, marginRight:20, 
            alignItems:'center', height: 50, justifyContent:'center', backgroundColor:'green'},
  buy:{ fontWeight:'bold',},
  num:{fontWeight:'bold'},
  rows:{flexDirection:'column'},
  seatbox:{borderWidth:1, width:35, height:35,},
  allseats:{flexDirection:'row', alignSelf:'center', marginTop:90},
  seatboxthird:{}
     
}