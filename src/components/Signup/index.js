import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput,ImageBackground} from 'react-native';
import { Bubbles } from 'react-native-loader';
import styles from './styles';

export default class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    onChange = (value) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            (this.state.load == 0 ?
                <ImageBackground source={require('../../assets/images/Background.jpg')} style={styles.background}>
                    <View style={styles.container}>
                        <View style={styles.textBoxInput}>
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' name="username" placeholderTextColor='#000' style={styles.signupInput} placeholder='Username' onChangeText={this.onChange} />
                        </View>
                        <View style={styles.textBoxInput}>
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' name="password" placeholderTextColor='#000' style={styles.signupInput} placeholder='Password' onChangeText={this.onChange} onSubmitEditing={this.onSubmit} secureTextEntry={true} />
                        </View>
                        <View>
                            <TouchableOpacity style={styles.signup} onPress={this.onSubmit}><Text style={styles.signupText}>Sign up</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.login} onPress={() => navigate('Login')}><Text style={styles.loginText}>Log in</Text></TouchableOpacity>
                        </View>
                    </View></ImageBackground>
                :
                <ImageBackground source={require('../../assets/images/Background.jpg')} style={style.background}>
                    <View style={styles.container}>
                        <Bubbles size={10} color="#0061b0" />
                    </View>
                </ImageBackground>)
        );
    }
}