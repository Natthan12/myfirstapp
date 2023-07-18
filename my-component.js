import react from "react"
import {View, Text, StyleSheet} from 'react-native'


export default function MyComponent(){
    return(
        <View style ={styles.container}>
            <Text style ={styles.textTitle}>Hello My Component</Text>
            <Text style ={styles.textPara}>React Native JavaScript framework...</Text>
            <Text style ={{color:'red', fontWeight:'bold'}}>Contact React Native</Text>


        </View>
        

    )
}
const Styles = StyleSheet.create({
    container: {
        paddingTop:30,
        padding:20,
        backgroundColor: 'lightpurple' //เพิ่มสีถ้าเป้นตัวเลขใส่ได้เลย แต่ถ้าข้อความใส 'aaa'

    },
    textTitle:{
        color:'blue',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15


    },
    textPara:{
        fontSize:16,
        fontWeight:20,
        color:'pink'


    }
})