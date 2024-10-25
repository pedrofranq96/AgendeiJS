import { Alert, Image, Text, TextInput, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import Button from "../../components/button/button"
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import api from "../../constants/api";

//features:
//após realizar cadastro, fazer o login ao apertar o criar conta

function Account(props){

    const [name, setName] = useState("");
    const [email, setEmail ]  = useState("");
    const [password, setPassword ] = useState("");

    async function ExecuteAccount(){
        try {
            const response = await api.post("/users/register", { name,email, password});
            if(response.data){
                console.log(response.data)
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
        
        <View>
            <TextInput placeholder="Nome" style={styles.input}  onChangeText={(n) => setName(n)}/>
            <TextInput placeholder="Email" style={styles.input}  onChangeText={(t) => setEmail(t)}/>
            <TextInput placeholder="Senha" style={styles.input}  secureTextEntry={true} onChangeText={(p) => setPassword(p)}/>
            <Button text="Criar Conta" onPress={ExecuteAccount}/>
        </View>

        <View style={styles.footer}>
            <Text>Já tenho conta.</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text style={styles.footerLink}>Fazer login.</Text>
            </TouchableOpacity>
        </View>

    </View>)
}

export default Account;