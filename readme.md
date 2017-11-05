# **Scaffolding NodeJS Appications** 

***Sistema de scaffolding para la construcción de aplicaciones basadas en Node.js.***

La estructura modular de archivos que aquí se propone está pensada en el *workflow* (flujo de trabajo) del desarrollo de proyectos simples y básicos cimentados en NodeJS.  
Asímismo cabe señalar que este *scaffolding* se fundamenta primordialmente en la manipulación y procesamiento de archivos JavaScript en torno al uso del transpilador ***BABEL*** para la traducción y transformación de la sintaxis ECMAScript empleada en los mismos y que aún no sea soportada por los navegadores.  
En este caso, particularmente se explica como transpilar dichos documentos cuya sintaxis sea basada en el estándar de ECMAScript 6. No obstante, lo anterior no limita la posibilidad de emplear esta arquitectura para trabajar con otro tipos de archivos cuya sintaxis también puede ser manipulada y procesada por algún tipo de meta-lenguaje y/o pre-procesador, tal y como es el caso de las hojas de estilo CSS.  
Ahora bien, si se está generando archivos CSS a través de SASS y/o LESS, entonces lo que procedería es la instalación del módulo o módulos NPM que permitan trabajar con dichas tecnologías, para posteriormente declarar y configurar un *script* que permita ejecutar dichas tareas de procesamiento. De igual modo se tendría que configurar las rutas de entrada y salida de dichos documentos tanto en el ámbito de desarrolo como en el de producción.

## **Arquitectura y despliegue de directorios y ficheros:**

- **Carpeta** ***node_modules***  
Almacena los módulos NPM que son instalados y requeridos para un proyecto en NodeJS.

- **Carpeta** ***src***  
En esta se incluyen las carpetas y/o archivos que se estarán manipulando sólo en el ámbito de desarrollo, es decir, aquí se deberán almacenar los *scripts* cuya sintaxis se esté trabajando en ECMAScript 6, u otra versión del mismo.
Asimismo en la carpeta *src* es posible crear otras carpetas con el fin de guardar otro tipos de recursos que serán empleados y requeridos en la aplicación, tal y como lo pueden ser hojas de estilo CSS, imágenes, etc.

- **Carpeta** ***dist***  
En ella se incluyen las carpetas y/o archivos que serán empleados en producción, es decir, aquí serán dirigidos los archivos ya transpilados (traducidos) y procesados con la sintaxis requerida para que sean leídos y soportados por los navegadores.

- **Carpeta** ***bin***
Contendrá los archivos de configuración del entorno de trabajo de desarrollo y de producción sin extensión, es decir, los documentos deberán ser nombrados como **dev** y **production** respectivamente.  
En los dos archivos antes mencionados, se especificará concretamente las rutas de los archivos a invocar y ejecutar cuando sólo se esté en fase de desarrollo, o bien, cuando ya sea llevado a producción un proyecto.  
Las rutas a especificar en cada archivoson las siguientes:

* archivo ***dev***: Importación del módulo babel-register para conectarlo con Babel y Ruta del directorio donde se ubican los archivos a transpilar. Ejemplo:
~~~
require('babel-register');
require('../src/js/');
~~~

* archivo ***production***: Ruta del directorio donde se ubican los archivos traducidos (transpilados) y procesados. Ejemplo:
~~~
require('../dist/js/');
~~~

- **Archivo** ***.babelrc***  
Este debe ser ubicado en la raíz de la carpeta del proyecto, y como contenido debe tener un objeto JSON con las opciones de configuración de *Babel* que serán posibles a emplear en consola.  
Una de las opciones a especificar son los **presets** que se utilizarán para transpilar (o traducir) la sintaxis de los archivos JavaScript basados en ECMAScript 6.

- **Archivo** ***packege.json***  
Archivo de configuración del proyecto en NodeJS. En este se han de establecer los módulos NPM y los *scripts* a emplear para la ejecución de cada uno de ellos.

## **Módulos NPM a instalar como dependencias de desarrollo**

***babel-cli***  
Herramienta de trabajo de BABEL que permitirá utilizar y accesar a opciones de este transpilador.

***babel-register***  
Módulo que conectará a Babel con un directorio en específico, de tal modo que sobre este nodo (ubicación) todos los archivos subsiguientes dentro de él, y que posean las extensiones .es6, .es, .jsx y .js sean compilados automáticamente sobre la marcha.

***babel-preset-env***  
Este módulo permitirá transpilar (traducir) archivos con sintaxis de JavaScript que aún no sea soportada por los navegadores. Este *preset* se comporta igual a babel-preset-latest (o babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 juntos).

***babel-preset-stage-2***  
Plugin que permitirá probar y utilizar funcionalidades experimentales de JavaScript que no se encuentran estandarizadas y que no cuentan con un soporte fijo por los navegadores, esto debido a que aún son funciones catalogadas como simples propuestas de las futuras versiones de sintaxis de JS.

## **Descripción de scripts declarados en el archivo package.json**

***"dev" : "node src/js/"***  
Ejecución de los archivos y/o scripts bajo el entorno de desarrollo, es decir, indica que sólo se ejecutarán los scripts en los cuales se está trabajando y que aún no han sido traducidos y/o procesados por algún transpildor o pre-procesador.

***"clean" : "rm -rf dist"***  
Eliminación de directorio y los archivos que se encuentran almacenados dentro de la carpeta *dist*.

***"build" : "npm run clean && babel src/js -s -d dist/js"***  
Primero se borran todos los scripts que hayan sido traducidos y procesados. Posteriormente se especifica que nuevamente sean transpilados con Babel indicando tanto la ruta origen donde se ubican los *scripts* a traducir, así como también la ruta final en la cual serán almacenados una vez que sean procesados.

***"production" : "npm run build && node bin/production"***  
Primero se invoca el script *build* y luego se indica que sea leído el archivo *production* para que finalmente se ejecuten los archivos y/o scripts que ya están transpilados y procesados.