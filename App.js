import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { useState } from 'react';

const App = () => {

  //Likes
  const [numberLikes, setNumberLikes] = useState(0);
  const [likeColor, setLikeColor] = useState("gray");
  const [likeShape, setLikeShape] = useState("heart-outline");

  //Save
  const [savedShape, setSavedShape] = useState("bookmark-outline");
  const [savedColour, setSavedColour] = useState("gray");

  //Stories
  const [numeroVistas, setnumeroVistas] = useState(0); 
  const[verHistoria, setVerHistoria] = useState(false);

  const mostrarHistoria = () => {
    setVerHistoria(true)
    setnumeroVistas(numeroVistas + 1)
  }

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.contenedorSuperior}> 
         <Image source={require('./assets/images/menuSuperior.jpg')} style={styles.menuSuperior} />
      </View>
      
      <View style={styles.contenedorHistorias}>
        <TouchableOpacity onPress={mostrarHistoria} >
          <View style={styles.itemHistoria}>
            <View style={styles.bordeHistoria}>
              <Image source={require('./assets/images/jorgeBorges.jpg')} style={styles.fotoPerfilHistoria} />
            </View>
            <Text style={styles.textoHistoria}>luis_Borges</Text>
            <Text style={styles.textoHistoria}>{numeroVistas > 0 ? "Vista" : "No vista"}</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.publicadorContenedor}>
        <View style={styles.publicadorInfo}>
           <Image source={require('./assets/images/fotoPerfil.jpg')} style={styles.fotoPerfil} />
           <Text style={styles.publicadorTexto}>arthur_Schopenhauer1</Text>
        </View>

        <Image source={require('./assets/images/tresPuntos.png')} style={styles.iconoPuntos} /> 
      </View>
      
      <View style={styles.contenedorPublicacion}>
        <Image source={require('./assets/images/publicacion.jpg')} style={styles.imagenPublicacion} />
      </View>
            
    <View style={styles.contenedorIconos}>
      <View style={styles.likeComentarCompartir}>
        <TouchableOpacity>
          <Ionicons name={likeShape} size={25} color={likeColor}></Ionicons>
        </TouchableOpacity>
        <Text style={styles.numberLikes}>{numberLikes}</Text>
        <Ionicons name="chatbubble-outline" size={25} color="gray"></Ionicons>
        <Ionicons name="paper-plane" size={25} color="gray"></Ionicons>
      </View>

      <View style={styles.likeComentarCompartir}>
        <TouchableOpacity>
          <Ionicons name={savedShape} size={25} color={savedColour}></Ionicons>
        </TouchableOpacity>
      </View>
    
    </View>
      <View style={styles.contenedorDescripcion}>
          <Text style={styles.textoNegrita}>arthur_Schopenhauer1</Text>
          <Text style={styles.textoNormal}> me caen mal todos</Text>
      </View>
      
      <View style={styles.contenedorTextoFecha}>
        <Text style={styles.textoFecha}>Hace 2 días</Text>
      </View>
      
      <View style={styles.contenedorMenuInferior}>
        <Image source={require('./assets/images/menuInferior.jpg')} style={styles.menuInferior} />
      </View>

      <Modal style={styles.historia} visible={verHistoria}>
        <View style={styles.viewBoton}>
          <Button style={styles.botonCerrar} onPress={() => setVerHistoria(false)} title="Cerrar"></Button>
        </View>

        <View>
          <Text>Vistas: {numeroVistas}</Text>
        </View>
      </Modal>
      </ScrollView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    //alignItems: 'center'
  },
  contenedorSuperior: {
    width: '100%',
    marginTop: 40
  },
  menuSuperior: {
    width: '100%',
    height: undefined,
    aspectRatio: 275 / 50, //relación de aspecto
    resizeMode: 'contain'
  },
  contenedorHistorias: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 10,
  },
  itemHistoria: {
    alignItems: 'center', //centrar nombre de cuenta
    marginRight: 10, //espacio entre historias
  },
  bordeHistoria:{
    width: 96,  //tamaño del círculo del borde
    height: 96,
    borderRadius: 100,
    borderWidth: 2, 
    borderColor: '#e84999',
    justifyContent: 'center', //centrado vertical
    alignItems: 'center',     //centrado horizontal
    marginBottom: 5 //espacio entre círculo y texto
  },
  fotoPerfilHistoria: {
    width: 88,
    height: 88,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#000000',
  },
  textoHistoria: {
    color: '#ffffff',
    fontSize: 11,
    maxWidth: 74
  },
  publicadorContenedor: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 50,
    justifyContent: 'space-between' //poner info a la izquierda e imagen de puntos a la derecha
  },
  publicadorInfo: {
    flexDirection: 'row', //foto y nombre juntos (lado a lado)
    alignItems: 'center'
  },
  fotoPerfil: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  publicadorTexto: {
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 13
  },
  iconoPuntos: {
    width: 15,  
    height: 15,
    resizeMode: 'contain',
    //tintColor: '#FFFFFF' //para "colorear" la imagen
  },
  contenedorPublicacion: {
    width: '100%',
  },
  imagenPublicacion: {
    width: '100%',
    height: undefined, 
    aspectRatio: 1, 
  },
  contenedorIconos:{
    // backgroundColor: "purple",
    flexDirection: "row", //Dirección principal "horizontal"
    justifyContent: "space-between",
    alignItems: "center", //Alinear verticalmente el contenido
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  likeComentarCompartir:{
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "space-between"
  },
  numberLikes:{
    fontWeight: '500',
    color: '#FFFFFF '
  },
  contenedorDescripcion: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: 5
  },
  textoNegrita: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginRight: 5
  },
  textoNormal: {
    color: '#FFFFFF',
    flex: 1
  },
  contenedorTextoFecha: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 12
  },
  textoFecha: {
    color: '#A8A8A8',
    fontSize: 10
  },
  contenedorMenuInferior: {
    width: '100%',
    bottom: 0,
    position: 'absolute',
  },
  menuInferior: {
    width: '100%',
    height: undefined,
    aspectRatio: 275 / 45,
    resizeMode: 'contain',
    position: 'absolute'
  },
  historia: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  viewBoton: {
    position: 'absolute',
    top: 45,
    right: 20,
  },
  botonCerrar: {
    
  }
});