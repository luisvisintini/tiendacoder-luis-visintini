const liquidos = [
    {
        id: '1',
        marca: 'Mvh',
        imagen: '/Images/liquido1.jpg',
        nombre: 'Almond House',
        precio: 1900,
        descripcion: 'Combinacion de vainillas, cremas, almendras tostadas, avellanas y leche'
    },
    {
        id: '2',
        marca: 'Mvh',
        nombre: 'Custard Bomb Lemon',
        imagen: '/Images/liquido8.jpg',
        precio: 1900,
        descripcion: 'Combinación de cremas de vainilla y limón'
    },
    {
        id: '3',
        marca: 'Mvh',
        nombre: 'Tasty Donuts',
        imagen: '/Images/liquido9.jpg',
        precio: 1900,
        descripcion: 'Donas con un sutil glaseado de limón.'
    },
    {
        id: '4',
        marca: 'Mvh',
        nombre: 'Bonnie Clyde',
        imagen: '/Images/liquido10.jpg',
        precio: 1900,
        descripcion: 'Sandía con un toque de melón fresco'
    },
    {
        id: '5',
        marca: 'Shibumi',
        nombre: 'Peach Kaki Candy',
        imagen: '/Images/shibumi18.jpg',
        precio: 2300,
        descripcion: 'Sabores exóticos combinados con maestría por Nachef.mixing. Duraznos dulces y maduros fusionados con Caquis, todo salpicado con gotas de frutas tropicales. Un auténtico Candy!'
    },
    {
        id: '6',
        marca: 'Shibumi',
        nombre: 'Sumuji Shake',
        imagen: '/Images/shibumi20.jpg',
        precio: 2300,
        descripcion: 'No es otro Milkshake más de frutilla.  Esta receta creada por el gran Nachef.mixing emplea esencias especiales y desconocidas hasta el momento en nuestro mercado, logrando un blend de frutillas avainilladas sobre una suave y cremosa base llena de contrastes y un dulzor que no empalaga pero satisface a los amantes de lo dulce que buscan algo para vapear todo el día.'
    },
    {
        id: '7',
        marca: 'Shibumi',
        nombre: 'Cherry Pop',
        imagen: '/Images/shibumi19.jpg',
        precio: 2300,
        descripcion: 'Increíble líquido de Cerezas combinadas y un toque de frescura. El Mixer internacional Nachef haciendo gala de su talento para combinar nuevos aromas europeos. Imperdible.'
    },
    {
        id: '8',
        marca: 'Shibumi',
        nombre: 'Arándanos Cheesecake',
        imagen: '/Images/shibumi21.jpg',
        precio: 2300,
        descripcion: 'Receta mágica de Nachef.mixing. Arándanos seleccionados, con el balance justo de dulzor y acidez para lograr mantener el sabor silvestre de la fruta, y una masa digna de un maestro pastelero. Una vez más, aquí el Mixer desplego una cantidad de esencias exóticas, combinación muy compleja, pero con un resultado realmente formidable!'
    },
    {
        id: '9',
        marca: 'HSBG',
        nombre: 'Flow',
        imagen: '/Images/liquido25.jpg',
        precio: 2100,
        descripcion: 'Mix tropical de mango, naranja y mandarina.'
    },
    {
        id: '10',
        marca: 'HSBG',
        nombre: 'Milf',
        imagen: '/Images/liquido23.jpg',
        precio: 2100,
        descripcion: 'Milkshake de frutilla. Exquisito!'
    },
    {
        id: '11',
        marca: 'HSBG',
        nombre: 'Moritas',
        imagen: '/Images/liquido26.jpg',
        precio: 2100,
        descripcion: 'Gomitas de mora, esa golosina ideal para vapear todo el día.'
    },
    {
        id: '12',
        marca: 'HSBG',
        nombre: 'Pink Lemonade',
        imagen: '/Images/liquido22.jpg',
        precio: 2100,
        descripcion: 'Limonada de lima y limon con un suave toque jugo de frambuesa.'
    },
    {
        id: '13',
        marca: 'HSBG',
        nombre: 'White Coffee',
        imagen: '/Images/liquido24.jpg',
        precio: 2100,
        descripcion: 'El mas rico café con la mejor crema y chocolate blanco'
    },
    

]

export const getLiquidos = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(liquidos)
        }, 1000);
    });
}

export const getLiquidosByMarca = (marcaId) => {
    return new Promise ( (resolve) => {
        setTimeout(() => {
            resolve(liquidos.filter(liquido => liquido.marca === marcaId))
        }, 1000);
    })
}

export const getLiquidosById = (id) => {
    return new Promise ( (resolve ) => {
        setTimeout(() => {
            resolve(liquidos.find(nombre => nombre.id === id ))
        }, 1000);
    })
}