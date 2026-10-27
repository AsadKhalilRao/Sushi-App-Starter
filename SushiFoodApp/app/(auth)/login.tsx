import {useRouter} from "expo-router"
import React, {useState} from "react";
import {
SafeAreaView,
StyleSheet,
Text,
TextInput,
TouchableOpacity,
View,
} from "react-native";
export default function LoginScreen() {
const router=useRouter();
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");   
return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome Back<Text/>
            <Text style={styles.subtitle}>Login to continue ordering delicious sushi<Text/>
            <TextInput
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            />


            <TextInput
            placeholder="Password"
            secureTextEntry=
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            />

            <TouchableOpacity onPress={()=>router.push("/(auth)/forgot-password")}>
                <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity> 


            <TouchableOpacity 
            style={styles.button}
            onPress={()=>router.replace("/(tabs)/home")}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>



            <View style={styles.bottom}>
            </View>   


            


) 
}