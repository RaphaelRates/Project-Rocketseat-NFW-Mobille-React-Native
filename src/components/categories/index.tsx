import { View, FlatList } from 'react-native'
import React from 'react'
import {s} from "./style"
import {Category} from '@components/category'

export type CategoriesProps = {
  id: string,
  name:string
}[]

type Props = {
  data: CategoriesProps
  selected: string,
  onSelect: (id: string) => void
}

const Categories = ({data, selected,onSelect}: Props) => {
  return (

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return <Category 
                    name={item.name} 
                    iconId={item.id}
                    onPress={() => onSelect(item.id)}
                    isSelected={item.id === selected}
                    />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.content}
        style={s.container}
      />
  )
}

export default Categories