import * as React from 'react';
import {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View,Text} from 'react-native';
import styles from './src/Estilos';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      timer : null,
      number : 0,
      iniciarParar : 'Iniciar',
    }

    this.iniciar = this.iniciar.bind(this);
    this.zerar = this.zerar.bind(this);
  }
iniciar(){
  
  if(this.state.timer == null){
      
      let novoEstado = this.state;
      novoEstado.iniciarParar = 'Parar';
      this.setState(novoEstado);
      
      this.state.timer = setInterval(()=>{
         let estado_Atual = this.state;
         estado_Atual.number +=0.1;
         this.setState(estado_Atual);
      },84)
  }
  else{
    clearInterval(this.state.timer);
    let novo_Estado = this.state;
    novo_Estado.iniciarParar = 'Iniciar';
    novo_Estado.timer = null;
    this.setState(novo_Estado);
  }
}

zerar(){

  clearInterval(this.state.timer);
  let novo_estado = this.state;
  novo_estado.iniciarParar = 'Iniciar';
  novo_estado.timer = null;
  novo_estado.number = 0;
  this.setState(novo_estado);

}

render(){
    return(
      <View style={styles.tela_fundo_0}>
          <View style = {styles.tela_fundo_1}>
              <Text style = {styles.estilo_numero}>{this.state.number.toFixed(1)}</Text>
              <View style = {styles.estilo_round_button}>
                <TouchableOpacity onPress = {this.iniciar}>
                    <Text style = {styles.round_button_1}>
                         {this.state.iniciarParar}
                    </Text>
                </TouchableOpacity>
              </View>
            <View style = {styles.estilo_round_button_2}>
               <TouchableOpacity onPress = {this.zerar}>
                  <Text style = {styles.round_button_2}>Zerar</Text>
                </TouchableOpacity>
            </View>
          </View>
      </View>    
    );
  }
}
