import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.styles";
import {doctors_services} from '../../constants/data'
import Service from "../../components/service/service";
import icon from '../../constants/icon'


function Services(){
    return (<View style={styles.container}>

        <View style={styles.banner}>
            <Image source={icon.female}/>
            <Text style={styles.name}>Pedro Luiz.</Text>
            <Text style={styles.specialty}>Cardiologista.</Text>
        </View>
        <FlatList data={doctors_services} keyExtractor={(doc_service) =>doc_service.id_service} showsVerticalScrollIndicator={false} renderItem={
            ({item}) => { 
                return ( 
                    <Service description={item.description} price={item.price}/>
                )
            }
        }/>

    </View>)
}

export default Services;