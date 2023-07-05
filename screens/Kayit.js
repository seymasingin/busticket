import { View, Image, TextInput, Text, Alert, TouchableOpacity, } from 'react-native'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/authSlice';
import DropDownPicker from 'react-native-dropdown-picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Ionicons from '@expo/vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Kayit({navigation}) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [kimlik, setKimlik] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordcheck, setPasswordcheck] = useState();
    const [items, setItems] = useState([{label: 'Kadın', value: 'k'},                  
                                          {label: 'Erkek', value: 'e'},]);
    const [gender, setGender] = useState(null);
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000));
    const [error, setError] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(true);

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
      if(!name || !lastname || !kimlik || !email || !password || !passwordcheck){
        setError(true)
        Alert.alert('Eksik Bilgi Girişi', 'Lütfen boş kısımları doldurun!')
      }
      else{
      dispatch(setUser({email, password}));
      navigation.navigate('Giris')
      }
    };

    const handlePasswordCheck= (text) => {
      setPasswordcheck(text)
      setPasswordMatch(text === password);
    }

    const handlePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible)
    }
  
  return (
    
    <KeyboardAwareScrollView>
      <Image style={styles.logo} source={require("../assets/logo.png")}/>
      <View style={styles.inputview}>
        <Text style={styles.text}>Ad: </Text>
        <TextInput value= {name} onChangeText={(text) => setName(text)}/>
        {error && name.length<=0?
               <Text style={styles.error}>Lütfen doldurunuz</Text>:""}
      </View>
      <View style={styles.inputview}>
        <Text style={styles.text}>Soyad: </Text>
        <TextInput value= {lastname} onChangeText={(text) => setLastname(text)}/>
        {error && lastname.length<=0?
               <Text style={styles.error}>Lütfen doldurunuz</Text>:""}      
      </View>
      <View style={styles.inputview}>
        <Text style={styles.text}>Kimlik No: </Text>
        <TextInput style={styles.input} value= {kimlik} onChangeText={(text) => setKimlik(text)} keyboardType='numeric'/>
      </View>

      
      
      <View style={styles.inputview}>
        <Text style={styles.text}>Email: </Text>
        <TextInput value= {email} onChangeText={(text) => setEmail(text)}/>
      </View>

      <View style={styles.inputview}>
        <Text style={styles.text}>Şifre: </Text>
        <TextInput value= {password} onChangeText={(text) => setPassword(text)} 
        secureTextEntry={passwordVisible} />
        <TouchableOpacity onPress={handlePasswordVisibility} style={{marginLeft:330, position:'absolute'}}>
        { passwordVisible ? <Ionicons name="eye-outline" size={25} />
         : <Ionicons name="eye-off-outline" size={25} />}
        </TouchableOpacity>
        
      </View>

      <View style={[styles.inputview,  !passwordMatch && styles.invalidInput ]}>
        <Text style={styles.text}>Şifre Tekrar: </Text>
        <TextInput value= {passwordcheck}  onChangeText={handlePasswordCheck}
        secureTextEntry={passwordVisible} />
        <TouchableOpacity onPress={handlePasswordVisibility} style={{marginLeft:330, position:'absolute'}}>
        { passwordVisible ? <Ionicons name="eye-outline" size={25} />
         : <Ionicons name="eye-off-outline" size={25} />}
        </TouchableOpacity>
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
                        dropDownContainerStyle={{width:115, marginLeft:80, borderRadius:0}}
              
                      />
      </View>
      <View style={styles.dogum}>
      <Text style={styles.text}>Doğum Tarihi: </Text>
      <TouchableOpacity onPress={showDatepicker} style={{ width:115,borderWidth:1, marginLeft:40, padding:5}}>
        <Text style={styles.datetext}>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal:10,paddingVertical:10}}>
      <TouchableOpacity onPress={handleSignup} style={styles.kayit}>
        <Text style={{fontWeight:'bold', fontSize:16}}>Kayıt Ol</Text>
      </TouchableOpacity>
      </View>
     
      </KeyboardAwareScrollView>
      
  )
}

const styles = {
    logo: {height:150, width:150, alignSelf:'center', marginTop:30 },
    text:{fontSize:17, fontWeight:'bold'},
    inputview:{ flexDirection: 'row',borderBottomWidth:2, margin:15, padding:1},
    invalidInput: {borderBottomColor: 'red',},
    gender:{flexDirection: 'row', margin:15, alignItems:'center',  },
    kayit:{borderWidth:2, backgroundColor:'goldenrod', paddingVertical:8, alignItems:'center',
             },
    dropdown:{width:115, height:10, backgroundColor: 'whitesmoke', marginLeft:80, borderWidth:1,
              borderRadius:0},
    dogum:{flexDirection: 'row', margin:15, alignItems:'center', },
    gun:{width:70, height:10, backgroundColor: 'ghostwhite', marginLeft:20,
    borderRadius:0},
    datetext:{fontSize:17, fontWeight:'bold', marginLeft:12},
    error:{color:'red'}
}