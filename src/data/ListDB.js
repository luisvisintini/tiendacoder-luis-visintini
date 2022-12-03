const liquidos = [
    {
        id: '1',
        marca: 'Mvh',
        nombre: 'Almond House',
        precio: 1900,
        descripcion: 'Combinacion de vainillas, cremas, almendras tostadas, avellanas y leche'
    },
    {
        id: '2',
        marca: 'Mvh',
        nombre: 'Custard Bomb Lemon',
        precio: 1900,
        descripcion: 'Combinación de cremas de vainilla y limón'
    },
    {
        id: '3',
        marca: 'Mvh',
        nombre: 'Tasty Donuts',
        precio: 1900,
        descripcion: 'Donas con un sutil glaseado de limón.'
    },
    {
        id: '4',
        marca: 'Mvh',
        nombre: 'Bonnie Clyde',
        precio: 1900,
        descripcion: 'Sandía con un toque de melón fresco'
    },
    {
        id: '5',
        marca: 'Shibumi',
        nombre: 'Peach Kaki Candy',
        precio: 2300,
        descripcion: 'Sabores exóticos combinados con maestría por Nachef.mixing. Duraznos dulces y maduros fusionados con Caquis, todo salpicado con gotas de frutas tropicales. Un auténtico Candy!'
    },
    {
        id: '6',
        marca: 'Shibumi',
        nombre: 'Sumuji Shake',
        precio: 2300,
        descripcion: 'No es otro Milkshake más de frutilla.  Esta receta creada por el gran Nachef.mixing emplea esencias especiales y desconocidas hasta el momento en nuestro mercado, logrando un blend de frutillas avainilladas sobre una suave y cremosa base llena de contrastes y un dulzor que no empalaga pero satisface a los amantes de lo dulce que buscan algo para vapear todo el día.'
    },
    {
        id: '7',
        marca: 'Shibumi',
        nombre: 'Cherry Pop',
        precio: 2300,
        descripcion: 'Increíble líquido de Cerezas combinadas y un toque de frescura. El Mixer internacional Nachef haciendo gala de su talento para combinar nuevos aromas europeos. Imperdible.'
    },
    {
        id: '8',
        marca: 'Shibumi',
        nombre: 'Cherry Pop',
        precio: 2300,
        descripcion: 'Receta mágica de Nachef.mixing. Arándanos seleccionados, con el balance justo de dulzor y acidez para lograr mantener el sabor silvestre de la fruta, y una masa digna de un maestro pastelero. Una vez más, aquí el Mixer desplego una cantidad de esencias exóticas, combinación muy compleja, pero con un resultado realmente formidable!'
    },
]

export const getLiquidos = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(liquidos)
        }, 1000);
    });
}

// export const getLiquidosById = (id) => {
//     return new Promise ( (resolve ) => {
//         setTimeout(() => {
//             resolve(liquidos.find((nombre) => nombre.id === id ))
//         }, 1000);
//     })
// }

// export const getLiquidosByMarca = (marcaId) => {
//     return new Promise ( (resolve) => {
//         setTimeout(() => {
//             resolve(liquidos.filter((nombre)=> nombre.marca === marcaId))
//         }, 1000);
//     })
// }