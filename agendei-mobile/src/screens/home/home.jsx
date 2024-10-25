import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./home.style";
import Doctor from "../../components/doctor/doctor"
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function Home(props){

    const [doctors, setDoctors] = useState([]);

    function ClickDoctor(id_doctor, name, specialty, icon){
        props.navigation.navigate("services", { id_doctor, name, specialty, icon});
    }

    async function LoadingDoctors(){
       try {
            const response = await api.get("/doctors");

            if(response.data)
                setDoctors(response.data);
       } catch (error) {
            if(error.response.data.error){
                Alert.alert(error.response.data.error)
            } else {
                Alert.alert("Ocorreu um erro, tente novamente mais tarde.")
            }
       }
    }

    useEffect(()=> {
        LoadingDoctors();
    },[])
    return (<View style={styles.container}>
        <Text style={styles.text}>Agende seus serviços médicos.</Text>
        <FlatList data={doctors} keyExtractor={(doc) =>doc.id_doctor} showsVerticalScrollIndicator={false} renderItem={
            ({item}) => { 
                return ( 
                    <Doctor id_doctor={item.id_doctor} icon={item.icon}  name={item.name} specialty={item.specialty}  onPress={ClickDoctor}/>           
                )
            }
        }/>

    </View>)
}

export default Home;