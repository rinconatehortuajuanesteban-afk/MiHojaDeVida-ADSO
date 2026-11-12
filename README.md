
# Mi Hoja de Vida

Aplicación móvil desarrollada como proyecto de formación del programa Tecnólogo en Análisis y Desarrollo de Software del SENA.

## Información del proyecto

- **Aprendiz:** Juan Esteban Rincon Atehortua
- **Programa:** Tecnólogo en Análisis y Desarrollo de Software
- **Ficha:** 3407187
- **Estado:** En desarrollo

## Tecnologías utilizadas

- React Native
- Expo SDK 58
- TypeScript
- Expo Router
- Git y GitHub

## Funcionalidades

La aplicación cuenta con cuatro secciones principales:

1. **Inicio:** presenta el perfil personal, tecnologías, habilidades y datos de contacto.
2. **Estudios:** muestra la formación académica y las competencias en desarrollo.
3. **Experiencia:** presenta proyectos personales y de aprendizaje.
4. **Hobbies:** organiza los intereses y actividades personales.

## Requisitos

- Node.js
- npm
- Expo Go para probar la aplicación en un dispositivo móvil.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/rinconatehortuajuanesteban-afk/MiHojaDeVida-ADSO.git
```

Ingresar a la carpeta:

```bash
cd MiHojaDeVida-ADSO
```

Instalar dependencias:

```bash
npm install
```

Iniciar el proyecto:

```bash
npx expo start
```

## Comandos útiles

Verificar las dependencias compatibles con Expo:

```bash
npx expo install --check
```

Iniciar el proyecto limpiando la caché:

```bash
npx expo start --clear
```

Revisar los problemas de configuración:

```bash
npx expo-doctor
```

Consultar el estado de Git:

```bash
git status
```


## Ejecución

Escanear el código QR con Expo Go para abrir la aplicación en el dispositivo móvil.

## Repositorio

https://github.com/rinconatehortuajuanesteban-afk/MiHojaDeVida-ADSO

## Solución de problemas: error al abrir la aplicación en Android

### Descripción del problema

Después de actualizar las dependencias de Expo de la versión `58.0.24` a `58.0.25`, la aplicación dejó de abrir correctamente en Expo Go para Android.

Al intentar ingresar mediante el código QR, apareció un error HTTP 404 relacionado con la resolución del punto de entrada de Expo Router:

`Unable to resolve module ./node_modules/expo-router/entry`

### Diagnóstico realizado

Se realizaron las siguientes comprobaciones:

1. Se verificó que `react-native-worklets@0.13.0` estuviera instalado.
2. Se comprobó que Expo Router estuviera instalado correctamente (`58.0.31`).
3. Se verificó el campo `main` de `package.json`, que contenía `expo-router/entry`.
4. Se comprobó que el archivo `entry.js` existiera dentro de `node_modules/expo-router`.
5. Se ejecutó `npx expo-doctor`, obteniendo 20 de 20 comprobaciones satisfactorias.
6. Se ejecutó `npx expo export --platform android`, que generó correctamente el bundle de Android.

### Solución aplicada

Se reinició el servidor de desarrollo de Expo utilizando el siguiente comando:

```bash
npx expo start --lan --clear
```

Después se cerró Expo Go en el dispositivo Android, se abrió nuevamente y se escaneó el nuevo código QR.

La aplicación volvió a cargar correctamente.

### Resultado

- Aplicación abierta correctamente en Android mediante Expo Go.
- Bundle de Android generado sin errores.
- Dependencias verificadas.
- Expo Doctor: 20/20 comprobaciones satisfactorias.

### Aprendizaje técnico

Cuando una aplicación Expo presenta errores al cargar después de actualizar dependencias, es importante comprobar la instalación de los paquetes, la configuración de Expo Router y la compilación del bundle antes de modificar versiones o reinstalar dependencias.

La opción `--clear` permite iniciar Metro sin reutilizar su caché anterior, lo que ayuda a resolver problemas relacionados con información de compilación almacenada.
