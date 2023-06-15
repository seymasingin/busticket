import { View, Image, TextInput, Text, Pressable, Alert, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/authSlice';
import DropDownPicker from 'react-native-dropdown-picker';


export default function Kayit({navigation}) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [kimlik, setKimlik] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordcheck, setPasswordcheck] = useState();
    const [items, setItems] = useState([{label: 'Kadın', value: 'k'},                  
                                          {label: 'Erkek', value: 'e'},
                                          ]);
    const [gender, setGender] = useState(null);
    const [open, setOpen] = useState(false);
    const [openday, setOpenday] = useState(false); 
    const [gun, setGun] = useState(null);                             

    const dispatch = useDispatch();

    const handleSignup = () => {
      dispatch(setUser({email,password}));
      navigation.navigate('Giris')
    };

    const handlePasswordCheck= () => {
        if(password!=passwordcheck){
          
        }
    }
  
  return (
    <View>
      <Image style={styles.logo} source={require("../assets/logo.png")}/>
      <View style={styles.inputview}>
        <Text style={styles.text}>Ad: </Text>
        <TextInput style={styles.input} value= {name} onChangeText={(text) => setName(text)}/>
      </View>
      <View style={styles.inputview}>
        <Text style={styles.text}>Soyad: </Text>
        <TextInput style={styles.input} value= {lastname} onChangeText={(text) => setLastname(text)}/>
      </View>
      <View style={styles.inputview}>
        <Text style={styles.text}>Kimlik No: </Text>
        <TextInput style={styles.input} value= {kimlik} onChangeText={(text) => setKimlik(text)}/>
      </View>

      <View style={styles.dogum}>
      <Text style={styles.text}>Doğum Tarihi: </Text>
      <DropDownPicker style={styles.gun}
                        openday={openday}
                        valueday={gun}
                        items={items}
                        setOpenday={setOpenday}
                        setValueday={setGun}
                        placeholder="10"/>
      </View>

      <View style={styles.gender}>
        <Text style={styles.text}>Cinsiyet: </Text>
        <DropDownPicker style={styles.dropdown}
                        open={open}
                        value={gender}
                        items={items}
                        setOpen={setOpen}
                        setValue={setGender}
                        setItems={setItems}
                        placeholder="Cinsiyet"
                        
                      />
      </View>
      
      <View style={styles.inputview}>
        <Text style={styles.text}>Email: </Text>
        <TextInput style={styles.input} value= {email} onChangeText={(text) => setEmail(text)}/>
      </View>

      <View style={styles.inputview}>
        <Text style={styles.text}>Şifre: </Text>
        <TextInput style={styles.input} value= {password} onChangeText={(text) => setPassword(text)}/>
        
      </View>

      <View style={styles.inputview}>
        <Text style={styles.text}>Şifre Tekrar: </Text>
        <TextInput style={styles.input} value= {passwordcheck}  onChangeText={handlePasswordCheck}/>
      </View>

      <TouchableOpacity onPress={handleSignup} style={styles.kayit}>
        <Text style={{fontWeight:'bold', fontSize:16}}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
    logo: {height:150, width:150, alignSelf:'center', marginTop:40 },
    text:{fontSize:17, fontWeight:'bold'},
    input: {},
    inputview:{ flexDirection: 'row',borderBottomWidth:2, margin:15, padding:1},
    gender:{flexDirection: 'row', margin:15, alignItems:'center',  },
    kayit:{alignSelf:'flex-end', marginRight:15,borderWidth:1, padding:15, backgroundColor:'green'},
    dropdown:{width:180, height:10, backgroundColor: 'ghostwhite', marginLeft:110,
              borderRadius:0},
    dogum:{flexDirection: 'row', margin:15, alignItems:'center',  },
    gun:{width:70, height:10, backgroundColor: 'ghostwhite', marginLeft:20,
    borderRadius:0}
}