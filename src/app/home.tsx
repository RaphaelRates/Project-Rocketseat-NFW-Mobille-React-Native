import { View, Alert, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { api } from '@services/api'
import Categories, { CategoriesProps } from '@components/categories'
import Places from '@components/places'
import { PlaceProps } from '@components/place'
import MapView, {Callout, Marker} from 'react-native-maps'
import * as Location from 'expo-location';
import {fontFamily, colors} from "@style/theme"
import { router } from 'expo-router'

export type MarketsProps = PlaceProps & {
  latitude: number,
  longitude: number
}
const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494
}

const Home = () => {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  async function fecthCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data)
      setCategory(data[0].id)
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possivel carregar as categorias")
    }
  }

  async function fecthMarkets() {
    try {
      if (!category) {
        return
      }
      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data)
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possivel carregar os locais")
    }
  }

  async function getCurrentLocation(){
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      setLocation(location);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getCurrentLocation()
    fecthCategories()
  }, [])

  useEffect(() => {
    fecthMarkets()
  }, [category])

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} onSelect={setCategory} selected={category} />
      <MapView 
      initialRegion={{
        longitude: location? location.coords.longitude: currentLocation.longitude,
        latitude: location? location.coords.latitude : currentLocation.latitude,
        longitudeDelta: 0.01,
        latitudeDelta:0.01
      }}
      style={{flex: 1}}
      >
        <Marker 
        identifier='current'
        coordinate={{
          longitude: currentLocation.longitude,
          latitude: currentLocation.latitude
        }}
        />
        {markets.map((item) => (
          <Marker
          key={item.id}
          identifier={item.id}
          coordinate={{
            latitude: item.latitude,
            longitude: item.longitude
          }}
          image={require("@/assets/images/pin.png")}
          >
            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
              <View style={{ padding: 10, backgroundColor: 'white', borderRadius: 5 }}>
                <Text style={{
                  fontSize:14,
                  color: colors.gray[600],
                  fontFamily: fontFamily.medium
                  }}>
                  {item.name}
                </Text>
                <Text>
                  {item.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Places data={markets} />
    </View>
  )
}

export default Home