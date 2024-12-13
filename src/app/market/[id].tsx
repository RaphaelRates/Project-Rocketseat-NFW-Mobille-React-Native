import { View, Text, Alert, Modal, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { router, useLocalSearchParams, Redirect } from 'expo-router'
import { api } from '@/src/services/api'
import Loading from '@/src/components/loading'
import Cover from '@/src/components/market/cover'
import Details, { DetailsProps } from '@/src/components/market/details'
import Coupon from '@/src/components/market/coupon'
import { Button } from '@/src/components/button'
import { useCameraPermissions, CameraView } from 'expo-camera'


type DataProps = DetailsProps & {
  cover: string
}

const Market = () => {
  const [data, setData] = useState<DataProps>()
  const [coupon, setCoupon] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState<boolean>(false);
  const [couponIsFetching, setCouponIsFetching] = useState<boolean>();

  const [permission, requestPermission] = useCameraPermissions();
  const params = useLocalSearchParams<{ id: string }>()
  const qrLock = useRef(false);

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`)
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro,", "Não foi possivel carregar os dados", [
        { text: "OK", onPress: () => router.back() }
      ])
    }
  }

  async function handleOpenCamere() {
    try {
      const { status } = await requestPermission();

      if (status !== "granted") {
        return Alert.alert("Camera", " Voce precisa habilitar o uso da camera")
      }
      setIsVisibleCameraModal(true)
      qrLock.current = false
    } catch (error) {
      console.log(error);
      Alert.alert("Camera", "Nao foi possivel utilizar a camera")
    }
  }

  async function getCoupon(id: string) {
    try {
      const { data } = await api.get("/coupons/" + id)
      Alert.alert("Cupom", data.coupon);
      setCoupon(data.coupon)
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", 'não foi possivel utilizar o cupon')

    } finally {
      setCouponIsFetching(false)
    }
  }

  function handleUseCoupon(id: string) {
    setIsVisibleCameraModal(false);
    Alert.alert("Cupom", " Cupom já resgatado, ele é inutil", [
      { style: 'cancel', text: "ok" },
      { text: 'mim dê', onPress: () => getCoupon(id) }
    ])
  }

  useEffect(() => {
    fetchMarket()
  }, [params.id, coupon])

  if (isLoading) {
    return <Loading size='large' />
  }

  if (!data) {
    return <Redirect href={"/home"} />
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"} hidden={isVisibleCameraModal}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Cover uri={data.cover} />
        <Details data={data} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>

      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamere}>
          <Button.Title>
            Ler QR Code
          </Button.Title>
        </Button>
      </View>

      <Modal
        style={{
          flex: 1
        }}
        visible={isVisibleCameraModal}
      >
        <CameraView
          style={{ flex: 1 }}
          facing='back'
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true
              setTimeout(() => {
                handleUseCoupon(data)

              }, 1000)
            }
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 32,
            left: 32,
            right: 32
          }}
        >

        </View>
        <Button onPress={() => setIsVisibleCameraModal(false)}
          isLoading={couponIsFetching}>
          <Button.Title>
            Voltar
          </Button.Title>
        </Button>
      </Modal>

    </View>
  )
}

export default Market