// ROADMAPS
let listaMaps = [
    // --- FRONTEND CORE & FRAMEWORKS ---
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue JS",
    "Angular",
    "Svelte",
    "Next JS",
    "Nuxt JS",
    "Gatsby",
    "Remix",
    "Solid JS",
    "Qwik",
    "Alpine JS",

    // --- ESTILOS Y MAQUETACIÓN ---
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
    "Less",
    "Stylus",
    "Styled Components",
    "Material UI",
    "Chakra UI",

    // --- ENTORNOS DE EJECUCIÓN Y HERRAMIENTAS FRONTEND ---
    "Vite",
    "Webpack",
    "NPM",
    "PNPM",
    "Yarn",
    "Bun",
    "Deno JS",
    "Babel",

    // --- BACKEND Y LENGUAJES DE PROGRAMACIÓN ---
    "Node JS",
    "Python",
    "Java",
    "C Plus Plus",
    "C Sharp",
    "PHP",
    "Ruby",
    "Rails",
    "Go",
    "Rust",
    "Kotlin",
    "Scala",
    "Elixir",
    "Dart",

    // --- FRAMEWORKS BACKEND ---
    "Laravel",
    "Django",
    "Spring",
    "Express",
    "FastAPI",
    "Nest JS",
    "DOT NET Core",
    "Symfony",
    "Flask",
    "Adonis JS",

    // --- DESARROLLO MÓVIL ---
    "Flutter",
    "React Native",
    "Swift",
    "Ionic",
    "Apache",
    "Xamarin",

    // --- BASES DE DATOS RELACIONALES (SQL) ---
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "Oracle",
    "Microsoft SQL Server",
    "MariaDB",

    // --- BASES DE DATOS NO RELACIONALES (NoSQL) ---
    "MongoDB",
    "Firebase",
    "Redis",
    "Cassandra",
    "CouchDB",
    "Neo4j",

    // --- ORMS Y QUERY BUILDERS ---
    "Prisma",
    "Sequelize",
    "Mongoose",
    "Hibernate",

    // --- PRUEBAS (TESTING) ---
    "Jest",
    "Cypress IO",
    "Playwright",
    "Vitest",
    "Selenium",
    "Mocha",
    "Puppeteer",

    // --- DEVOPS, CI/CD Y SERVIDORES ---
    "Git",
    "GitHub",
    "GitLab",
    "GitHub Actions",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Nginx",
    "Apache AIR Flow",

    // --- CLOUD Y PLATAFORMAS (BAAS) ---
    "Amazon Web Services",
    "Google Cloud",
    "Azure",
    "Vercel",
    "Netlify",
    "Supabase",
    "Heroku",
    "DigitalOcean",

    // --- MONITOREO Y CONFIGURACIÓN ---
    "Terraform",
    "Ansible",
    "Prometheus",
    "Grafana",

    // --- ARQUITECTURA, APIs Y MANEJO DE ESTADO ---
    "GraphQL",
    "Fast API",
    "gRPC",
    "RxJS",
    "Redux",
    "Zustand",
    "Alpine JS",

    // --- INTELIGENCIA ARTIFICIAL, DATA Y TENDENCIAS ---
    "Data Grip",
    "Web3 JS",
    "PyTorch",
    "TensorFlow",
    "Pandas",
    "NumPy",
    "OpenCV",
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
})


//FUNCION QUE CARGA TODOS LOS DATOS SIN IOMPORTAR EL INPUT
function cargarDatos(){
    contenedorTarjetad.innerHTML = "";

    for(let road of listaMaps){
        let tarjeta = document.createElement("div");
        let texto = document.createElement("span");
        let icono = document.createElement("i");

        
        let nombreLimpio = road.toLowerCase().replace(/\s+/g, '');
        let clase_Icono = `devicon-${nombreLimpio}-plain `;

        if (iconosEspecialesMarker.includes(road)) {
            clase_Icono = `devicon-${nombreLimpio}-plain-wordmark`;
        } else if (iconosEspecialesOriginal.includes(road)) {
            clase_Icono = `devicon-${nombreLimpio}-original `;
        } else {
            clase_Icono = `devicon-${nombreLimpio}-plain `;
        }
        
        icono.setAttribute("class", clase_Icono);

        texto.textContent = road;

        tarjeta.append(texto);
        tarjeta.append(icono);
        tarjeta.setAttribute("class", "tarjeta__roadmap");

        contenedorTarjetad.append(tarjeta);
    }
}

//FUNCIONES DE FILTRADO
function cargarFiltrado(textoFiltrar){
    contenedorTarjetad.innerHTML = "";

    let numCaracteres = textoFiltrar.length;

    for(let road of listaMaps){

        let textoCortado = textoFiltrar.trim().slice(0, numCaracteres).toLowerCase();
        let roadCortado = road.trim().slice(0, numCaracteres).toLowerCase();

        if(textoCortado === roadCortado){
            let tarjeta = document.createElement("div");
            let texto = document.createElement("span");
            let icono = document.createElement("i");

            let nombreLimpio = road.toLowerCase().replace(/\s+/g, '');
            
            let clase_Icono = `devicon-${nombreLimpio}-plain`;

            if (iconosEspecialesMarker.includes(road)) {
                clase_Icono = `devicon-${nombreLimpio}-plain-wordmark`;
            } else if (iconosEspecialesOriginal.includes(road)) {
                clase_Icono = `devicon-${nombreLimpio}-original`;
            } else {
                clase_Icono = `devicon-${nombreLimpio}-plain`;
            }
        
            icono.setAttribute("class", clase_Icono);
            texto.textContent = road;

            tarjeta.append(texto);
            tarjeta.append(icono);
            tarjeta.setAttribute("class", "tarjeta__roadmap");

            contenedorTarjetad.append(tarjeta);
        }
    }
}