const propiedades_arriendo = [
	{
		nombre: "Hermosa Cada Estilo Rustico",
		src: "assets/img/cabaña5.avif",
		descripcion: "Con todo lo que necesitas.",
		ubicacion: "Camino del Toro 2345",
		habitaciones: 4,
		bano: 4,
		costo: "400.000",
		smoke: false,
		pets: false,
	},
	{
		nombre: "Casa Punta",
		src: "assets/img/malalcahuello6.jpg",
		descripcion: "Hermoso lugar para vivir",
		ubicacion: "Camino el Alba 1234",
		habitaciones: 8,
		bano: 5,
		costo: "1200.000",
		smoke: true,
		pets: true,
	},
	{
		nombre: "Cabaña sur de Chile",
		src: "assets/img/chillan8.jpg",
		descripcion: "Casa muy acogedora, alejada de la cuidad, con lindo entorno",
		ubicacion: "Region de los lagos 1256",
		habitaciones: 4,
		bano: 2,
		costo: "300.000",
		smoke: false,
		pets: false,
	},
	{
		nombre: "Cabaña Patagonia",
		src: "assets/img/nevados7.jpg",
		descripcion: "Casa muy acogedora, alejada de la cuidad, con lindo entorno",
		ubicacion: "Region de los lagos 1256",
		habitaciones: 4,
		bano: 2,
		costo: "500.000",
		smoke: false,
		pets: false,
	},
]


const cardArriendo = document.querySelector("#cardArriendo")
for (let propiedad of propiedades_arriendo) {
	const templateArriendo = `
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
	cardArriendo.innerHTML += templateArriendo;
}