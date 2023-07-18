import react from "react"
import {View, Text} from 'react-native'

export default function Variables(){
    let x = 10
    let y = 19.88645
    let z = -125
    const name = 'Sealion' //ประกาศตัวแปล let ใช้กับตัวเลข const ใช้กับข้อความ
    const tel = '08028536951'

return(
    <View>
        <Text>แสดงค่าจากตัวแปร</Text>
        <Text>X = {x}</Text>
        <Text>Y = {y}</Text>
        <Text>Z = {z}</Text>
        <Text>Name = {name}</Text>
        <Text>Tel = {tel}</Text>

    </View>


)

}
