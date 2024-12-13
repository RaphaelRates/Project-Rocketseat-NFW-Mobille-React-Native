import { View, Text } from 'react-native'
import React from 'react'
import { s } from './style'
import Step from "@components/step"
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native'

const Steps = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona</Text>
      <Step 
      iconTabler={IconMapPin}
      
      title='Encontre estabelecimentos'
      description='Veja locais perto de você que são parceiros Nearby'/>

      <Step
        iconTabler={IconQrcode}
        title='Ative o cupom com QrCode'
        description='Escaneie o código no estabeleicmento para o uso do benefício'
      />
      <Step 
      iconTabler={IconTicket}
        title='Garanta vamtagens perto de você'
        description='Ative cupons onde estoiver, em diferentes tipos de estabelecimento'
      />
    </View>
  )
}

export default Steps