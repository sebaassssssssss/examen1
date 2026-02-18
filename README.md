# examen1

Parte 1 - Teoría

1. ¿Qué es React Native?
Es un framework basado en JavaScript para desarrollo de aplicaciones móviles, creando aplicaciones disponibles para Android y iOS.

2. ¿Qué es una aplicación móvil?
Es software ejecutable en dispositivos móviles tales como celulares o tabletas y diseñado con un en enfoque en el rendimiento eficiente para estos dispositivos.
Tidal y Galería del teléfono son ejemplos de aplicaciones móviles.

3. Tipos de aplicaciones móviles
Existen tres tipos:
-Nativas
Son aplicaciones desarrolladas para un sistema operativo específico. Esto brinda ventajas como personalización o rendimiento, siendo una opción viable si se busca una aplicación que tenga un buen desempeño.
-Híbridas
Son aplicaciones que se pueden ejecutar tanto de forma nativa como en web. 
-Web
Son aplicaciones que se desarrollan para navegadores web y que se ejecutan en ellos, aunque pueden tener comportamientos de aplicaciones nativas.

4. Componentes básicos de React Native
<View> Es un componente utilizado para crear divisiones en la interfaz de la aplicación. Es el equivalente a un <div> de HTML en el aspecto de que permite crear contenedores en los que posteriormente se añadirán otros componentes.
<Text> Es un componente que permite añadir texto en la aplicación.
<Image> Este componente permite la integración de imágenes en diversos formatos, tales como .jpg o .png.
<TextInput> Similar a <Text>, permite la integración de texto; sin embargo, en este caso se trata de texto recibido como entrada por parte del usuario de la aplicación.

5. useState
useState es una propiedad dentro de ReactNative que sirve para definir estados de comportamiento de la aplicación. Por ejemplo, si se tiene un contador, con useState podemos definir una cantidad fija y que esta cambie dependiendo de condiciones que nosotros establezcamos. En código se ve así:

import { useState } from 'react';
const App = () => {

  //SE DEFINE EL USESTATE
  const [numeroSeguidores, setNumeroSeguidores] = useState(0); 
  const [siguiendo, setSiguiendo] = useState(true); 

  //SE CAMBIA EL ESTADO SIGUIENDO CONDICIONES
  const handleNumeroSeguidores = () =>{
    if (siguiendo) {
      setSiguiendo(false)
      setNumeroSeguidores(numeroSeguidores + 1)
    } else {
      setSiguiendo(true)
      setNumeroSeguidores(numeroSeguidores - 1)
    }
  }
};

export default App;

6. Lógica en aplicaciones móviles
Usar estados en un app es importante para dar dinamismo a esta, para permitir que el usuario interactúe y que de esta forma otras funciones, interfaces o comportamientos de la app puedan ejecutarse.
Si una app no tuviese estados dinámicos, en el contexto actual del desarrollo de aplicaciones sería irrelevante, puesto que no permitiría lo mencionado en el párrafo anterior.
Un ejemplo real del uso de estados puede pensarse para muchos casos: aumentar de seguidores, cambiar texto de un botón, cambiar entre modos claro y oscuro, etc.
