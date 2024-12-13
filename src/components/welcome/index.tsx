
import { View, Image, Text } from 'react-native'
import React from 'react'
import { s } from './style'

const Welcome = () => {
  return (
    <View>
      <Image
        source={require("@/assets/images/logo.png")} 
        style={s.logo}
        />
        <Text style={s.title}>Boas-vindas ao Nearby!</Text>

        <Text style={s.subtitle}>Tenha cupons de vantagem para usar {"\n"}em seus estabelecimentos favoritos!</Text>
        

    </View>
  )
}

export default Welcome