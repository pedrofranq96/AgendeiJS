import { FlatList, Text, View } from "react-native"
import { styles } from "./calendar.style"
import { appointments } from '../../constants/data'
import Appointment from "../../components/appointment/appointment"
import icon from '../../constants/icon'

function Calendar(){
    return (<View style={styles.container}>
        
        <FlatList data={appointments} keyExtractor={(app) =>app.id_appointment} showsVerticalScrollIndicator={false} renderItem={
            ({item}) => { 
                return ( 
                    <Appointment service={item.service} doctor={item.doctor} specialty={item.specialty}/>          
                )
            }
        }/>

    </View>)
}

export default Calendar;