const propiedades_venta = [
	{
		nombre: "Hermosa Casa de lujo",
		src: "assets/img/casaLujo1.jpg",
		descripcion: "Casa lujo, con todo lo que necesitas.",
		ubicacion: "Av Concha y Toro 2345",
		habitaciones: 4,
		bano: 4,
		costo: "800.000",
		smoke: false,
		pets: false,
	},
	{
		nombre: "Casa Penthouse",
		src: "assets/img/penthouse2.webp",
		descripcion: "Hermoso PentHouse para vivir",
		ubicacion: "Calle Los Conquistadores 1234",
		habitaciones: 8,
		bano: 5,
		costo: "1200.000",
		smoke: true,
		pets: true,
	},
	{
		nombre: "Casa al aire libre",
		src: "assets/img/motorHome3.jpg",
		descripcion: "Hermoso MotorHome para poder recorrer todo lo que quieras y sin perder comodidad",
		ubicacion: "En todo el pais, recorriendo",
		habitaciones: 2,
		bano: 1,
		costo: "200.000",
		smoke: false,
		pets: true,
	},
	{
		nombre: "Cabaña sur de Chile",
		src: "assets/img/cabaña4.avif",
		descripcion: "Casa muy acogedora, alejada de la cuidad, con lindo entorno",
		ubicacion: "Region de los lagos 1256",
		habitaciones: 4,
		bano: 2,
		costo: "300.000",
		smoke: false,
		pets: false,
	},
]

const cardVenta = document.querySelector("#cardVenta")
for (let propiedad of propiedades_venta) {
	const templateVenta = `
        <div class="col-md-4 mb-4">
            <div class="card">
            	<img src="${propiedad.src}" class="card-img-top" alt="Imagen de la propiedad"/>
              	<div class="card-body">
                	<h5 class="card-title">${propiedad.nombre}</h5>
                	<p class="card-text">
                  		${propiedad.descripcion}
                	</p>

                	<p>
                  		<i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                	</p>

                	<p>
                  		<i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones
                	</p>

                	<p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>

                	<p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                		<i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                		${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                	</p>

                	<p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                		<i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i>
                		${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                	</p>
					
            	</div>
          	</div>
        </div>
    `;
	cardVenta.innerHTML += templateVenta;
}