import { Alert, Image, Text, TextInput, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./login.style";
import Button from "../../components/button/button"
import { TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import api from "../../constants/api.js";
import { AuthContext } from "../../contexts/auth.js";

function Login(props){

    const [email, setEmail ]  = useState("");
    const [password, setPassword ] = useState("");
    const {setUser} =useContext(AuthContext);

    async function ExecuteLogin(){
        try {
            const response = await api.post("/users/login", { email, password});

            if(response.data){
                api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
                console.log(response.data);
                setUser(response.data);
            }

        } catch (error) {
            if(error.response?.data.error)
                Alert.alert(error.response.data.error)
            else{
                Alert.alert("Erro inesperado. Tente novamente mais tarde.")
            }
        }
    }

    return (<View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo}/>
        </View>
        <View >
            <TextInput placeholder="Email" style={styles.input} onChangeText={(t) => setEmail(t)}/>
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={(p) => setPassword(p)}/>
            <Button text="Acessar" onPress={ExecuteLogin}/>
        </View>

        <View style={styles.footer}>
            <Text style={styles.text}>Não tenho conta.</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("account")}>
                <Text style={styles.footerLink}>Criar conta agora.</Text>
            </TouchableOpacity>
            
        </View>
        <Text>versão 1.0</Text>

    </View>)
}

export default Login;