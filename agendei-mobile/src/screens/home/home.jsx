import { FlatList, Text, View } from "react-native";
import { styles } from "./home.style";
import {doctors} from '../../constants/data'
import Doctor from "../../components/doctor/doctor"
import icon from '../../constants/icon'
function Home(){
    return (<View style={styles.container}>
        <Text style={styles.text}>Agende seus serviços médicos.</Text>
        <FlatList data={doctors} keyExtractor={(doc) =>doc.id_doctor} showsVerticalScrollIndicator={false} renderItem={
            ({item}) => { 
                return ( 
                    <Doctor name={item.name} icon={item.icon == "M" ? icon.male : icon.female} speciality={item.specialty}/>           
                )
            }
        }/>

    </View>)
}

export default Home;