import { Image, Text, View } from "react-native";
import { styles } from "./appointment.style";
import icon from "../../constants/icon";
import Button from "../button/button";
import moment from 'moment';

function Appointment(props){

    const dateFormated = moment(props.bookingDate).format('DD/MM/YYYY');
    return (
    <View style={styles.appointment}>
        <Text style={styles.name}>{props.service} - {props.doctor}</Text>
        <Text style={styles.specialty}>{props.specialty}</Text>

        <View style={styles.container}>
            <View style={styles.containerBooking}>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.calendar}/>
                    <Text style={styles.bookingDateFull}>{dateFormated}</Text>
                </View>
                <View style={styles.booking}>  
                    <Image style={styles.icon} source={icon.clock}/>
                    <Text style={styles.bookingDateFull}>{props.bookingHour}h</Text>         
                </View>
            </View>
            <View style={styles.containerButton}>
                <Button text="Cancelar Reserva" theme="danger" onPress={() => props.onPress(props.id_appointment)}/>
            </View>
        </View>
    </View>
    )
}


export default Appointment;