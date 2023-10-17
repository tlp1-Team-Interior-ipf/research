// Importando funciones necesarias para manejar rutas de archivos y URLs
import { fileURLToPath } from 'url'; // Importa la función para convertir una URL en una ruta de archivo
import { dirname } from 'path'; // Importa la función para obtener el nombre del directorio de una ruta de archivo

// Definiendo una función llamada fileDirName que toma un objeto meta como parámetro
export default function fileDirName(meta) {
  // Obtiene el nombre del archivo actual a partir de la URL del objeto meta
  const __filename = fileURLToPath(meta.url);

  // Obtiene el nombre del directorio del archivo actual a partir del nombre del archivo
  const __dirname = dirname(__filename);

  // Retorna un objeto que contiene el nombre del directorio y el nombre del archivo
  return { __dirname, __filename };
}