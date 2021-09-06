import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menuItems: {
        marginLeft:30,
        marginRight:20,
        marginTop:10
    },
    icon : {
        color: "white",   
    },
    menuText : {
        color:'white',
        fontSize:20,
        marginLeft:20,
        fontWeight: "bold",
        textTransform:'uppercase'
    },
    menuRow : {
        flexDirection: 'row',
        alignItems:"center",
        borderWidth:1,
        borderColor:'gray',
        borderRadius:15,
        padding:10,
        paddingLeft:12,
        marginBottom:20
    },
    menuTextBox : {
        flexGrow:1,
       
    },
    subtitle: {
        color:'gray',
        marginLeft:20,   
    }



})

export default styles