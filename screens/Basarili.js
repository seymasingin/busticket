import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Basarili() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Ödeme Başarılı!</Text>
    </View>
  )
}

const styles = {
    view:{alignSelf:'center', marginTop: 300},
    text:{fontSize:50, alignSelf:'center' }
}