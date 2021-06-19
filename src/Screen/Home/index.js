import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {
  Card,
  Icon,
} from '../../Component'
import { DataBarang } from '../../DataBarang'

const index = () => {
  return (
    <ScrollView>
      <View>
        <Text>Home</Text>
        <Card
          data={ DataBarang } />
      </View>
    </ScrollView>
  )
}

export default index
