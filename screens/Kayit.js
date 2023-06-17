import { View, Image, TextInput, Text, Pressable, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/authSlice';
import DropDownPicker from 'react-native-dropdown-picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

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
    
    const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

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
    <KeyboardAvoidingView>
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
      

      <View style={styles.gender} zIndex={1}>
        <Text style={styles.text}>Cinsiyet: </Text>
        <DropDownPicker style={styles.dropdown}
                        open={open}
                        value={gender}
                        items={items}
                        setOpen={setOpen}
                        setValue={setGender}
                        setItems={setItems}
                        placeholder="Kadın"
                        dropDownContainerStyle={{width:105, marginLeft:80,}}
              
                      />
      </View>
      <View style={styles.dogum}>
      <Text style={styles.text}>Doğum Tarihi: </Text>
      <TouchableOpacity onPress={showDatepicker} style={{ width:105,borderWidth:1, marginLeft:40, padding:5}}>
        <Text style={styles.datetext}>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal:10,paddingVertical:10}}>
      <TouchableOpacity onPress={handleSignup} style={styles.kayit}>
        <Text style={{fontWeight:'bold', fontSize:16}}>Kayıt Ol</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
  )
}

const styles = {
    logo: {height:150, width:150, alignSelf:'center', marginTop:30 },
    text:{fontSize:17, fontWeight:'bold'},
    inputview:{ flexDirection: 'row',borderBottomWidth:2, margin:15, padding:1},
    gender:{flexDirection: 'row', margin:15, alignItems:'center',  },
    kayit:{borderWidth:2, backgroundColor:'goldenrod', paddingVertical:8, alignItems:'center',
             },
    dropdown:{width:105, height:10, backgroundColor: 'whitesmoke', marginLeft:80, borderWidth:1,
              borderRadius:0},
    dogum:{flexDirection: 'row', margin:15, alignItems:'center', },
    gun:{width:70, height:10, backgroundColor: 'ghostwhite', marginLeft:20,
    borderRadius:0},
    datetext:{fontSize:17, alignSelf:'flex-end', fontWeight:'bold'}
}