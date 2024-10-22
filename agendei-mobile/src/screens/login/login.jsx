import { Image, Text, TextInput, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./login.style";
import Button from "../../components/button/button"
import { TouchableOpacity } from "react-native";

function Login(){
    return (<View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo}/>
        </View>
        <View>
            <TextInput placeholder="Email" style={styles.input}/>
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>
            <Button text="Acessar"/>
        </View>

        <View style={styles.footer}>
            <Text>Não tenho conta.</Text>
            <TouchableOpacity >
                <Text style={styles.footerLink}>Criar uma conta agora!</Text>
            </TouchableOpacity>
        </View>

    </View>)
}

export default Login;