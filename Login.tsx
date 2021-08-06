import {Button, StyleSheet, Text, TextInput, View, Alert} from "react-native";
import React from "react";
import {NavigationStackProp} from 'react-navigation-stack';

interface Props {
    navigation: NavigationStackProp
}

const Login: React.FC<Props> = ({navigation}) => {
    const [email, onEmailChange] = React.useState("");
    const [password, onPasswordChange] = React.useState("");

    const onLogin = () => {
        if (email === 'Tester@bitvavo.com' && password === 'BitcoinMiner1905') {
            navigation.navigate('Dashboard')
        } else {
            Alert.alert('Invalid email or password');
        }
    }

    return (
        <View style={styles.container}>
            <Text testID="welcomeText">Welcome to your bitvavo assignment!</Text>
            <View>
                <Text> Please test the login form below:</Text>
            </View>
            <View>
                <TextInput testID="emailInput"
                    style={styles.input}
                    onChangeText={onEmailChange}
                    value={email}
                    placeholder={'Email Address'}
                />
                <TextInput testID="passwordInput"
                    style={styles.input}
                    onChangeText={onPasswordChange}
                    value={password}
                    secureTextEntry={true}
                    placeholder={'Password'}
                />
                <Button testID="loginButton" title={'Login'} onPress={onLogin}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Login