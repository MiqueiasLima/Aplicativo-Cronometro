import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    tela_fundo_0:{
     flex:1,
     backgroundColor:'#00FF7F',
     borderRadius:10,

    },
    tela_fundo_1:{

        flex:1,
        backgroundColor:'#000000',
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
        fontSize:40,
        borderRadius:10,
        marginHorizontal:4,
        marginVertical:4
    },
    estilo_numero:{
        fontSize:56,
        fontWeight:'200',
        color:'#00FF7F',
    },
    
    estilo_round_button:{
        height:40,
        width:60,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00FF7F',
        marginRight:150
        
    },

    estilo_round_button_2:{
        height:40,
        width:60,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFAFA',
        marginTop:-40,
        marginLeft: 150
       
    },

    round_button_1:{
        fontWeight:'bold',
        fontSize:15
    },

    round_button_2:{
        fontWeight:'bold',
        fontSize:15
    },

});
export default styles;