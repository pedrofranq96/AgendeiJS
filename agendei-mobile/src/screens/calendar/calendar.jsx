import { Alert, FlatList, View } from "react-native"
import { styles } from "./calendar.style"
import { useEffect, useState } from "react";
import api from "../../constants/api";
import Appointment from "../../components/appointment/appointment.jsx";


function Calendar(){

    const [ appointments, setAppointments] = useState([])


    async function LoadingAppointments(){
 
        try {
            const response = await api.get("/appointments");
            
            if(response.data){
                setAppointments(response.data);
            }

        } catch (error) {
            if(error.response?.data.error)
                Alert.alert(error.response.data.error)
            else{
                Alert.alert("Erro inesperado. Tente novamente mais tarde.")
            }
        }
    }

    async function DeleteAppointment(id_appointment){
 
        try {
            const response = await api.delete(`/appointments/${id_appointment}`);
            console.log(response.data.id_appointment)
            if(response.data?.id_appointment){
                LoadingAppointments();
            }

        } catch (error) {
            if(error.response.data.error)
                Alert.alert(error.response.data.error)
            else{
                Alert.alert("Erro inesperado. Tente novamente mais tarde.")
            }
        }
    }

    useEffect(() => {
        LoadingAppointments();
    }, [])

    return (<View style={styles.container}>
        
        <FlatList data={appointments} keyExtractor={(app) => app.id_appointment } showsVerticalScrollIndicator={false} renderItem={
            ({item}) => { 
                return ( 
                    <Appointment id_appointment={item.id_appointment} service={item.service} bookingDate={item.booking_date} bookingHour={item.booking_hour} doctor={item.name} specialty={item.specialty} onPress={DeleteAppointment}/>     
                         
                )
            }
        }/>

    </View>)
}

export default Calendar;