import { Text, View } from "react-native";
import { styles } from "./profile.style";

function Profile(){
    return (
    <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>Pedro Luiz </Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.title}>Email</Text>
            <Text style={styles.text}>email@teste.com</Text>
        </View>
    </View>
    )
}

export default Profile;