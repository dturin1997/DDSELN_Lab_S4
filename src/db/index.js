const dataClientes = [
    {
        name:"Dario Turin",
        edad:"25",
        direccion:"Av. Peru 202"
    },
    {
        name:"Maria del Carmen",
        edad:"22",
        direccion:"Av. Venezuela 302"
    },
    {
        name:"Carol Diaz",
        edad:"23",
        direccion:"Av. Lima 402"
    }
];

const dataProductos = [
    {
        nombre:"Laptop Gamer",
        precio:"2500.99",
        stock:"2"
    },
    {
        nombre:"Mouse LG",
        precio:"89.99",
        stock:"12"
    },
    {
        nombre:"Parlante Inalambrico",
        precio:"299.99",
        stock:"8"
    }
];

export const findAllClientes = () => {
    return dataClientes;
};

export const findAllProductos = () => {
    return dataProductos;
};

