const productos= [
    {
    "id": 1,
    "title": "Café orgánico",
    "price": 36.99,
    "stock": 17,
    "description": "Suave y afrutado amigable con el medio ambiente.",
    "category": "cafe",
    "image": "https://www.cafequindio.com.co/wp-content/uploads/2020/04/ORGANICO-GRANO-340-2023.png",
    "rating": {
    "rate": 3.9,
    
    }
    },
    {
    "id": 2,
    "title": "Café gourtmet ",
    "price": 42.99,
    "stock": 25,
    "description": "Intenso con notas a chocolate oscuro.",
    "category": "cafe",
    "image": "https://www.cafequindio.com.co/wp-content/uploads/2020/04/CAFE-GOURMET-454-GR-GRANO.png",
    "rating": {
    "rate": 4.1,
    
    }
    },
    {
    "id": 3,
    "title": "Café frutos rojos",
    "price": 34.99,
    "stock": 50,
    "description": "Un café con aroma y sabor afrutado tipo frutos rojos arándanos y fresas.",
    "category": "cafe",
    "image": "https://www.cafequindio.com.co/wp-content/uploads/2020/04/FRUTOS-ROJOS-250-copia.png",
    "rating": {
    "rate": 4.7,
    
    }
    },
    {
    "id": 4,
    "title": "Caramelos masticables de café",
    "price": 17.99,
    "stock": 70,
    "description": "Sentirás magia cada vez que pruebes nuestros caramelos de café 100% de Colombia.",
    "category": "productos",
    "image": "https://www.cafequindio.com.co/wp-content/uploads/2020/04/CARAMELO-BOLSA.png",
    "rating": {
    "rate": 2.1,
    
    }
    },
    {
        "id": 5,
        "title": "Galletas de café cafecitas",
        "price": 15.99,
        "stock": 43,
        "description": "Las originales galletas con café, nuestras favoritas son perfectas para acompañar tu café en cualquier momento.",
        "category": "productos",
        "image": "https://www.cafequindio.com.co/wp-content/uploads/2020/04/CAFECITAS-100.png",
        "rating": {
        "rate": 2.1,
        
    }
    },
    {
        "id": 6,
        "title": " Arequipe con café ",
        "price": 24.99,
        "stock": 30,
        "description": "Un arequipe de café con el sabor perfecto, su receta original con el toque de café 100% de Colombia que sólo Café Quindío le puede dar",
        "category": "productos",
        "image": "https://www.cafequindio.com.co/wp-content/uploads/2020/04/AREQUIPE-300-1.png",
        "rating": {
        "rate": 2.1,
        
    }
    }
    ]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 500)
    })
}

// funcion que compara el id entrado por parametro con el id que hay en el array de objetos

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(pro => pro.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(productos.filter(prod => prod.category === categoryId.toLowerCase()))

        }, 500)

    })

};
    