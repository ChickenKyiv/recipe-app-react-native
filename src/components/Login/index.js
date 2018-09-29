import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, BackHandler, ImageBackground, CheckBox } from 'react-native';
// import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import styles from './styles';

export default class AuthComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    async componentDidMount() {
        BackHandler.addEventListener('hadrwareBackPress', this.handleBackHandler);
    }
    handleBackHandler() {
        BackHandler.exitApp();
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hadrwareBackPress', this.handleBackHandler);

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
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor='#000' style={styles.loginInput} placeholder='Username' name="username" onChangeText={this.onChange} />
                        </View>
                        <View style={styles.textBoxInput}>
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor='#000' style={styles.loginInput} placeholder='Password' name="password" onChangeText={this.onChange} onSubmitEditing={this.onSubmit} secureTextEntry={true} />
                        </View>
                        <View>
                            <TouchableOpacity style={styles.login} onPress={this.onSubmit}><Text style={styles.loginText}>Log in</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.register} onPress={() => navigate('Signup')}><Text style={styles.registerText}>Create a new account</Text></TouchableOpacity>
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