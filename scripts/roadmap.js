// ROADMAPS
let listaMaps = [
    // --- FRONTEND CORE & FRAMEWORKS ---
    { nombre: "HTML5", categoria: "frontend" },
    { nombre: "CSS3", categoria: "frontend" },
    { nombre: "JavaScript", categoria: "frontend" },
    { nombre: "TypeScript", categoria: "frontend" },
    { nombre: "React", categoria: "frontend" },
    { nombre: "Vue JS", categoria: "frontend" },
    { nombre: "Angular", categoria: "frontend" },
    { nombre: "Svelte", categoria: "frontend" },
    { nombre: "Next JS", categoria: "frontend" },
    { nombre: "Nuxt JS", categoria: "frontend" },
    { nombre: "Gatsby", categoria: "frontend" },
    { nombre: "Remix", categoria: "frontend" },
    { nombre: "Solid JS", categoria: "frontend" },
    { nombre: "Qwik", categoria: "frontend" },
    { nombre: "Alpine JS", categoria: "frontend" },

    // --- ESTILOS Y MAQUETACIÓN ---
    { nombre: "Tailwind CSS", categoria: "frontend" },
    { nombre: "Bootstrap", categoria: "frontend" },
    { nombre: "Sass", categoria: "frontend" },
    { nombre: "Less", categoria: "frontend" },
    { nombre: "Stylus", categoria: "frontend" },
    { nombre: "Styled Components", categoria: "frontend" },
    { nombre: "Material UI", categoria: "frontend" },
    { nombre: "Chakra UI", categoria: "frontend" },

    // --- ENTORNOS DE EJECUCIÓN Y HERRAMIENTAS FRONTEND ---
    { nombre: "Vite", categoria: "frontend" },
    { nombre: "Webpack", categoria: "frontend" },
    { nombre: "NPM", categoria: "frontend" },
    { nombre: "PNPM", categoria: "frontend" },
    { nombre: "Yarn", categoria: "frontend" },
    { nombre: "Bun", categoria: "frontend" },
    { nombre: "Deno JS", categoria: "backend" },
    { nombre: "Babel", categoria: "frontend" },

    // --- BACKEND Y LENGUAJES DE PROGRAMACIÓN ---
    { nombre: "Node JS", categoria: "backend" },
    { nombre: "Python", categoria: "backend" },
    { nombre: "Java", categoria: "backend" },
    { nombre: "C Plus Plus", categoria: "backend" },
    { nombre: "C Sharp", categoria: "backend" },
    { nombre: "PHP", categoria: "backend" },
    { nombre: "Ruby", categoria: "backend" },
    { nombre: "Rails", categoria: "backend" },
    { nombre: "Go", categoria: "backend" },
    { nombre: "Rust", categoria: "backend" },
    { nombre: "Kotlin", categoria: "mobile" },
    { nombre: "Scala", categoria: "backend" },
    { nombre: "Elixir", categoria: "backend" },
    { nombre: "Dart", categoria: "mobile" },

    // --- FRAMEWORKS BACKEND ---
    { nombre: "Laravel", categoria: "backend" },
    { nombre: "Django", categoria: "backend" },
    { nombre: "Spring", categoria: "backend" },
    { nombre: "Express", categoria: "backend" },
    { nombre: "FastAPI", categoria: "backend" },
    { nombre: "Nest JS", categoria: "backend" },
    { nombre: "DOT NET Core", categoria: "backend" },
    { nombre: "Symfony", categoria: "backend" },
    { nombre: "Flask", categoria: "backend" },
    { nombre: "Adonis JS", categoria: "backend" },

    // --- DESARROLLO MÓVIL ---
    { nombre: "Flutter", categoria: "mobile" },
    { nombre: "React Native", categoria: "mobile" },
    { nombre: "Swift", categoria: "mobile" },
    { nombre: "Ionic", categoria: "mobile" },
    { nombre: "Apache", categoria: "backend" },
    { nombre: "Xamarin", categoria: "mobile" },

    // --- BASES DE DATOS RELACIONALES (SQL) ---
    { nombre: "MySQL", categoria: "bd" },
    { nombre: "PostgreSQL", categoria: "bd" },
    { nombre: "SQLite", categoria: "bd" },
    { nombre: "Oracle", categoria: "bd" },
    { nombre: "Microsoft SQL Server", categoria: "bd" },
    { nombre: "MariaDB", categoria: "bd" },

    // --- BASES DE DATOS NO RELACIONALES (NoSQL) ---
    { nombre: "MongoDB", categoria: "bd" },
    { nombre: "Firebase", categoria: "bd" },
    { nombre: "Redis", categoria: "bd" },
    { nombre: "Cassandra", categoria: "bd" },
    { nombre: "CouchDB", categoria: "bd" },
    { nombre: "Neo4j", categoria: "bd" },

    // --- ORMS Y QUERY BUILDERS ---
    { nombre: "Prisma", categoria: "backend" },
    { nombre: "Sequelize", categoria: "backend" },
    { nombre: "Mongoose", categoria: "backend" },
    { nombre: "Hibernate", categoria: "backend" },

    // --- PRUEBAS (TESTING) ---
    { nombre: "Jest", categoria: "testing" },
    { nombre: "Cypress IO", categoria: "testing" },
    { nombre: "Playwright", categoria: "testing" },
    { nombre: "Vitest", categoria: "testing" },
    { nombre: "Selenium", categoria: "testing" },
    { nombre: "Mocha", categoria: "testing" },
    { nombre: "Puppeteer", categoria: "testing" },

    // --- DEVOPS, CI/CD Y SERVIDORES ---
    { nombre: "Git", categoria: "devops" },
    { nombre: "GitHub", categoria: "devops" },
    { nombre: "GitLab", categoria: "devops" },
    { nombre: "GitHub Actions", categoria: "devops" },
    { nombre: "Jenkins", categoria: "devops" },
    { nombre: "Docker", categoria: "devops" },
    { nombre: "Kubernetes", categoria: "devops" },
    { nombre: "Nginx", categoria: "devops" },
    { nombre: "Apache AIR Flow", categoria: "devops" },

    // --- CLOUD Y PLATAFORMAS (BAAS) ---
    { nombre: "Amazon Web Services", categoria: "cloud" },
    { nombre: "Google Cloud", categoria: "cloud" },
    { nombre: "Azure", categoria: "cloud" },
    { nombre: "Vercel", categoria: "cloud" },
    { nombre: "Netlify", categoria: "cloud" },
    { nombre: "Supabase", categoria: "cloud" },
    { nombre: "Heroku", categoria: "cloud" },
    { nombre: "DigitalOcean", categoria: "cloud" },

    // --- MONITOREO Y CONFIGURACIÓN ---
    { nombre: "Terraform", categoria: "devops" },
    { nombre: "Ansible", categoria: "devops" },
    { nombre: "Prometheus", categoria: "devops" },
    { nombre: "Grafana", categoria: "devops" },

    // --- ARQUITECTURA, APIs Y MANEJO DE ESTADO ---
    { nombre: "GraphQL", categoria: "backend" },
    { nombre: "Fast API", categoria: "backend" },
    { nombre: "gRPC", categoria: "backend" },
    { nombre: "RxJS", categoria: "frontend" },
    { nombre: "Redux", categoria: "frontend" },
    { nombre: "Zustand", categoria: "frontend" },

    // --- INTELIGENCIA ARTIFICIAL, DATA Y TENDENCIAS ---
    { nombre: "Data Grip", categoria: "bd" },
    { nombre: "Web3 JS", categoria: "ia" },
    { nombre: "PyTorch", categoria: "ia" },
    { nombre: "TensorFlow", categoria: "ia" },
    { nombre: "Pandas", categoria: "ia" },
    { nombre: "NumPy", categoria: "ia" },
    { nombre: "OpenCV", categoria: "ia" }
];

let iconosEspecialesMarker = [
    "Less"
];

let iconosEspecialesOriginal = [
    "Stylus",
    "Express",
    "React Native",
    "Ionic",
    "Mongoose",
    "TensorFlow"
];

//CONDICIONES DE ACTIVACION

let input_filtrado = document.querySelector("#busqueda__roadmap");
let contenedorTarjetad = document.querySelector(".contenedor__tarjetas");
let contador_elemento = document.querySelector("#numTecnologias");
let select_filtro = document.querySelector("#select_filtro");

//CARGAMOS TODO AL INICIAR LA PAGINA
cargarDatos();


//ESPECIFICAMOS EL EVENTO POR EL CUAL SE CARGARAN DIFERENTES DATOS.
input_filtrado.addEventListener("input", () =>{
    let textoFiltrado = input_filtrado.value.trim();
    if(textoFiltrado === null || textoFiltrado === ""){
        cargarDatos();
    } else{
        cargarFiltrado(textoFiltrado);
    }

    select_filtro.value = "todos";
})


//FUNCION QUE CARGA TODOS LOS DATOS SIN IOMPORTAR EL INPUT
function cargarDatos(){
    contenedorTarjetad.innerHTML = "";

    for(let road of listaMaps){
        let tarjeta = document.createElement("div");
        let texto = document.createElement("span");
        let icono = document.createElement("i");

        
        let nombreLimpio = road.nombre.toLowerCase().replace(/\s+/g, '');
        let clase_Icono = `devicon-${nombreLimpio}-plain `;

        if (iconosEspecialesMarker.includes(road.nombre)) {
            clase_Icono = `devicon-${nombreLimpio}-plain-wordmark`;
        } else if (iconosEspecialesOriginal.includes(road.nombre)) {
            clase_Icono = `devicon-${nombreLimpio}-original `;
        } else {
            clase_Icono = `devicon-${nombreLimpio}-plain `;
        }
        
        icono.setAttribute("class", clase_Icono);

        texto.textContent = road.nombre;

        tarjeta.append(texto);
        tarjeta.append(icono);
        tarjeta.setAttribute("class", "tarjeta__roadmap");

        contenedorTarjetad.append(tarjeta);
    }

    contador_elemento.textContent = listaMaps.length;
}

//FUNCIONES DE FILTRADO
function cargarFiltrado(textoFiltrar){
    contenedorTarjetad.innerHTML = "";

    let numCaracteres = textoFiltrar.length;

    let contador = 0;

    for(let road of listaMaps){

        let textoCortado = textoFiltrar.trim().slice(0, numCaracteres).toLowerCase();
        let roadCortado = road.nombre.trim().slice(0, numCaracteres).toLowerCase();

        if(textoCortado === roadCortado){
            let tarjeta = document.createElement("div");
            let texto = document.createElement("span");
            let icono = document.createElement("i");

            let nombreLimpio = road.nombre.toLowerCase().replace(/\s+/g, '');
            
            let clase_Icono = `devicon-${nombreLimpio}-plain`;

            if (iconosEspecialesMarker.includes(road.nombre)) {
                clase_Icono = `devicon-${nombreLimpio}-plain-wordmark`;
            } else if (iconosEspecialesOriginal.includes(road.nombre)) {
                clase_Icono = `devicon-${nombreLimpio}-original`;
            } else {
                clase_Icono = `devicon-${nombreLimpio}-plain`;
            }
        
            icono.setAttribute("class", clase_Icono);
            texto.textContent = road.nombre;

            tarjeta.append(texto);
            tarjeta.append(icono);
            tarjeta.setAttribute("class", "tarjeta__roadmap");

            contenedorTarjetad.append(tarjeta);

            contador++;
        }
    }

    contador_elemento.textContent = contador;
}

// FILTRADO POR CATEGORIA

select_filtro.addEventListener("change", () =>{
    filtradoCategoria();
});

function filtradoCategoria(){

    let categoria_seleccionada = select_filtro.value;

    if(categoria_seleccionada === "todos"){
        cargarDatos();
        return;
    }

    let listaFiltrada = listaMaps.filter(s => s.categoria === categoria_seleccionada);

    contenedorTarjetad.innerHTML = "";

    let contador = 0;

    for(let road of listaFiltrada){
        let tarjeta = document.createElement("div");
        let texto = document.createElement("span");
        let icono = document.createElement("i");

        
        let nombreLimpio = road.nombre.toLowerCase().replace(/\s+/g, '');
        let clase_Icono = `devicon-${nombreLimpio}-plain `;

        if (iconosEspecialesMarker.includes(road.nombre)) {
            clase_Icono = `devicon-${nombreLimpio}-plain-wordmark`;
        } else if (iconosEspecialesOriginal.includes(road.nombre)) {
            clase_Icono = `devicon-${nombreLimpio}-original `;
        } else {
            clase_Icono = `devicon-${nombreLimpio}-plain `;
        }
        
        icono.setAttribute("class", clase_Icono);

        texto.textContent = road.nombre;

        tarjeta.append(texto);
        tarjeta.append(icono);
        tarjeta.setAttribute("class", "tarjeta__roadmap");

        contenedorTarjetad.append(tarjeta);
        contador++;
    }

    contador_elemento.textContent = contador;

}