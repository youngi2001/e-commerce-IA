import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, } from 'react-native'



const signup = () => {

    const navigation = useNavigation()

    return (
       <KeyboardAvoidingView
       style={styles.container}
    // behavior="padding"
       >

            <View style={styles.loginHeader}>
                <Text style={styles.loginText}>
                    Sign Up for an Account
                </Text>
            </View>

            <View style={styles.inputContainer}>

            <TextInput placeholder='Username'
                // value={email}
                // onChangeText ={text => setEmail(text)}
                style={styles.input}/>

                <TextInput placeholder='Email'
                // value={email}
                // onChangeText ={text => setEmail(text)}
                style={styles.input}/>

                <TextInput placeholder='Password'
                // value={password}
                // onChangeText ={text => setPassword(text)}
                style={styles.input}
                secureTextEntry/>

                <TextInput placeholder='Confirm Password'
                // value={password}
                // onChangeText ={text => setPassword(text)}
                style={styles.input}
                secureTextEntry/>
            </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=> {navigation.navigate("Home")}}
                style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.signupAlt}>
                    <TouchableOpacity onPress={()=> {navigation.navigate("Log in")}}>
                        <Text style={styles.signupAltText}>Already have an Account?</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
       </KeyboardAvoidingView>
    )
}

export default signup

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1a535c"
    },

    inputContainer: {
        width: "80%",
        // height: "10%",
    },

    input: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 13,
        marginBottom: 10,
        borderRadius: 10,
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#4ECDC4',
        width: "100%",
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonOutline: {
        backgroundColor: "#fff",
        // borderColor: "#4ECDC4",
        // borderWidth: 2,
    },
    buttonOutlineText: {
        color: "#1a535c",
        fontWeight: 'bold',
    },

    loginHeader: {
        width: '100%',
        height: '5%',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    loginText: {
        color: "#4d9c4b",
        // fontWeight: "bold",
        fontSize: 16,
        
    },

    signupAlt:{
        marginTop: 10,
        
    },
    signupAltText:{
        color: "#4ECDC4"
    },
})


