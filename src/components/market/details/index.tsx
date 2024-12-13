import { View, Text } from 'react-native'
import React from 'react'
import { s } from "./style"
import Info from '../info'
import { IconMapPin, IconPhone, IconTicket } from '@tabler/icons-react-native'

export type DetailsProps = {
    name: string,
    description: string,
    address: string,
    phone: string,
    coupons: number,
    rules: {
        id: string,
        description: string
    }[]
}

type Props = {
    data: DetailsProps
}

const Details = ({ data }: Props) => {
    return (
        <View style={s.container}>
            <Text style={s.name}>{data.name}</Text>
            <Text style={s.description}>{data.description}</Text>
            <View style={s.group}>
                <Text style={s.title}>Informações</Text>
                <Info icon={IconMapPin} description={data.address} />
                <Info icon={IconTicket} description={`${data.coupons} Cupons disponíveis`} />
                <Info icon={IconPhone} description={data.phone} />
            </View>

            <View style={s.group}>
                <Text style={s.title}>
                    Regulamento
                </Text>
                {data.rules.map((item) => {
                    return (
                        <Text
                        key={item.id}
                        style={s.rule}
                        >
                        {`\u2022 ${item.description}`}
                        </Text>
                    )
                })}
            </View>
        </View>


    )
}

export default Details