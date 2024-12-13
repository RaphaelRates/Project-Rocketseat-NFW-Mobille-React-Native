import { View, Text, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import {s} from "./style"
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet'
import Place, { PlaceProps } from '@components/place'
import { router } from 'expo-router'

type Props = {
    data: PlaceProps[]
}

const Places = ({data}: Props) => {
    const dimensions = useWindowDimensions();
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoit = {
        min: 230,
        max: dimensions.height - 120
    }

  return <BottomSheet 
            ref={bottomSheetRef} 
            snapPoints={[
                snapPoit.min,
                snapPoit.max
                ]}
                handleIndicatorStyle={s.indicator}
                backgroundStyle={s.container}
                enableOverDrag={false}
                >
        <BottomSheetFlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return (<Place data={item} onPress={() => router.navigate(`/market/${item.id}`)}/>)
            }}
            contentContainerStyle={s.content}
            ListHeaderComponent={() => (
                <Text style={s.title}>Explore Locais perto de você!</Text>
            )}
        />
    </BottomSheet>
  
}

export default Places