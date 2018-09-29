import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    header: {
        marginTop: "15%"
    },
    head: {
        fontSize: 40,
        color: "#000",
        marginBottom: 20
    },
    signup: {
        width:340,
        marginTop: 30,
        backgroundColor: "#876ceb",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        paddingBottom:10,
        paddingTop:10,
    },
    signupText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto'
    },
    signupInput: {
        width:"95%",
        fontSize: 15,
        fontFamily: 'Roboto',
        backgroundColor:"#fff",  
        paddingLeft:"5%", 
        borderColor:"#D3D3D3",
        borderWidth:0.5,
        paddingTop:10,
        paddingBottom:10
    },
    textBoxInput:{
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    background:{
        width: "100%", 
        height: "100%"
    },
    login:{ 
        marginTop: 50, 
        marginLeft: 150
    },
    loginText:{ 
        color: "#fff",
        fontSize:15
    }
});
export default styles;