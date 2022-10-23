import * as React from 'react';
import { View, Text, Button, Image, FlatList, ViewComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import stylesApp from '../src/styles/StylesApp';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


//Se crea array que guarda la informacion de las peliculas 
//Se crea esta opcion alterna para no utilizar base de datos por el momento 
const DATA = [
  {
    id: '1',
    title: 'Free Guy',
    Año: '2022',
    Tiempo: '115 min',
    src:require('../src/img/img1.png'),
  },
  
  {
    id: '2',
    title: 'Halo',
    Año: '2021',
    Tiempo: '120 min',
    src:require('../src/img/img2.png'),
  },

 
];
function MostrarPelicula() 
{
  //Se instancia el array de la data 
  //Se le pasa como parametro para que tome el id
  //de la pelicula y segun el id muestra la informacion guardada en el array.
  Datos = DATA
  DATA = DataTransfer();
  <View>
    if (DATA.id ='@id') 
    {
        ViewComponent.Select("1")
        .DATA.MostrarPelicula(1)
    }
  </View>
  
}
  
const Item = ({ id, title, Año,Tiempo, img, }) => 
( 
  <View style={stylesApp.Subcontainer}>
    <View style={stylesApp.ImageContainer}>    
      <Image style={stylesApp.Imgs} source={img} />
    </View>

    <View style={stylesApp.TextContaner}>
      <Text style={stylesApp.titulo}>{title}</Text>
      <Text>{cantidad}</Text>
      <Text style={stylesApp.ofertas}>{precio}</Text>
      <Text>{oferta}</Text>
    </View>

     <View style={stylesApp.ImageContainer}>    
      <AntDesign name="pluscircle" size={24} color="black" /> 
      <Ionicons name="ios-trash-outline" size={30} color="blue" />
    </View>

  </View>
 
);




export default Carrito
