import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    carContainer : {
        width: '100%',
        height: '100%',
        backgroundColor:'orange'
    },
    header : {
        marginTop:50,
        marginLeft:20,
        marginRight:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerTitle : {
        fontWeight: 'bold',
        fontSize: 24,
        color:'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon : {
        color: "white",   
    },
    backgroundImage : {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position:'absolute'
    },
    batterySection : {
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
        marginTop:25
    },
    batteryImage : {
        height: 26,
        width: 75,
    },
    batteryText : {
        color:'white',
        fontWeight:'bold',
        fontSize: 15
    },
    status : {
        alignItems:"center",
        marginTop:125
    },
    statusText : {
        color:'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    controls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        marginTop:35
    },
    controlButton : {
        margin:10,
        borderWidth:1,
        borderColor:"white",
        borderRadius:50,
        padding:15
    },
    


})

export default styles;