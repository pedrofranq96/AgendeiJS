import { Image, Text, TextInput, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import Button from "../../components/button/button"
import { TouchableOpacity } from "react-native";

function Account(){
    return (<View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo}/>
        </View>
        
        <View>
            <TextInput placeholder="Nome" style={styles.input}/>
            <TextInput placeholder="Email" style={styles.input}/>
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>
            <Button text="Criar Conta"/>
        </View>

        <View style={styles.footer}>
            <Text>Já tenho conta.</Text>
            <TouchableOpacity >
                <Text style={styles.footerLink}>Fazer login.</Text>
            </TouchableOpacity>
        </View>

    </View>)
}

export default Account;