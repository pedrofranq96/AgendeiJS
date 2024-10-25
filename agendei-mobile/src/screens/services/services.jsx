import { Alert, FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.styles";
import Service from "../../components/service/service";
import icon from '../../constants/icon'
import api from "../../constants/api.js";
import { useEffect, useState } from "react";


function Services(props){
    const id_doctor= props.route.params.id_doctor;
    const name= props.route.params.name;
    const specialty= props.route.params.specialty;
    const iconDoctor= props.route.params.icon;
    const [ doctorsServices, setDoctorServices ] = useState([]);

    function ClickServices(id_service){
        props.navigation.navigate("schedule", { id_doctor, id_service})
    }
    async function LoadingServices(){
        try {
            const response = await api.get(`/doctors/${id_doctor}/services`);

            if(response.data){
                setDoctorServices(response.data);
            }

        } catch (error) {
            if(error.response?.data.error)
                Alert.alert(error.response.data.error)
            else{
                Alert.alert("Erro inesperado. Tente novamente mais tarde.")
            }
        }
    }

    useEffect(() => {
        LoadingServices();
    }, [])
    return (<View style={styles.container}>

        <View style={styles.banner}>
            <Image source={iconDoctor == "M" ? icon.male : icon.female }/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.specialty}>{specialty}</Text>
        </View>
        <FlatList data={doctorsServices} keyExtractor={(doc_service) =>doc_service.id_service} showsVerticalScrollIndicator={false} renderItem={
            ({item}) => { 
                return ( 
                    <Service id_service={item.id_service} description={item.description} price={item.price} onPress={ClickServices}/>
                )
            }
        }/>

    </View>)
}

export default Services;