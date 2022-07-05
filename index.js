const facturas = [
    {numero: 5000, fecha: '15/6/2022', cliente: 'Agustin Guby', importe: 20000},
    {numero: 8000, fecha: '19/6/2022', cliente: 'Matias Lein', importe: 80000},
    {numero: 2000, fecha: '25/6/2022', cliente: 'Sebastian Trece', importe: 131313},
    {numero: 1000, fecha: '2/7/2022', cliente: 'Nicolas Smoke', importe: 10000}
]

class Factura {
    constructor(numero, fecha, cliente, importe) {
        this.numero = numero
        this.fecha = fecha
        this.cliente = cliente
        this.importe = importe
    }
}

let menu = parseInt(prompt(`1. Cargar Factura
                        \n2. Listar Facturas
                        \n3. Ordenar por importe
                        \n4. Ver total a pagar
                        \n5. Ver factura por número
                        \n0. Salir`))

while(menu != 0){  
    switch(menu){
        case 1:
            let numFactura = parseInt(prompt('Ingrese numero de factura'))
            let hoy = new Date()
            let fecFactura = hoy.toLocaleDateString()
            let cliFactura = prompt('Ingrese Nombre del cliente')
            let impFactura = parseFloat(prompt('Ingrese el valor de la factura'))

            let nuevaFactura = new Factura(numFactura, fecFactura, cliFactura, impFactura)
        
            facturas.push(nuevaFactura)
            break
        
        case 2:
            for(i = 0; i < facturas.length; i++) {
                console.log(facturas[i])
            }
            break

        case 3:
            facturas.sort((a, b) => (a.importe > b.importe) ? 1 : -1)
            console.log(facturas)
            break

        case 4:
            let totalFacturas = 0

            facturas.forEach(acumular)

            function acumular(factura) {   
                totalFacturas += factura.importe
            }
            console.log(`Debes un total de: $${totalFacturas}`)
            break
        
        case 5:
            let filtro = parseInt(prompt('Ingrese el numero de factura que desea ver:'))

            const resultado = facturas.find( f => f.numero === filtro )
            console.log(resultado)
            break

        default:

            break
    }
        
    menu = parseInt(prompt(`1. Cargar Factura
                        \n2. Listar Facturas
                        \n3. Ordenar por importe
                        \n4. Ver total a pagar
                        \n5. Ver factura por número
                        \n0. Salir`))
}

