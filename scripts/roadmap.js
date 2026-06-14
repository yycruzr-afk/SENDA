// ROADMAPS
let listaMaps = [
    // --- FRONTEND CORE & FRAMEWORKS ---
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React JS",
    "Vue JS",
    "Angular",
    "Svelte",
    "Next JS",
    "Nuxt JS",
    "Gatsby",
    "Remix JS",
    "Solid JS",
    "Qwik",
    "Alpine JS",

    // --- ESTILOS Y MAQUETACIÓN ---
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
    "Less",
    "Stylus",
    "CSS Modules",
    "Styled Components",
    "Material UI",
    "Chakra UI",

    // --- ENTORNOS DE EJECUCIÓN Y HERRAMIENTAS FRONTEND ---
    "Vite",
    "Webpack",
    "NPM y PNPM",
    "Yarn",
    "Bun",
    "Deno",
    "Babel",

    // --- BACKEND Y LENGUAJES DE PROGRAMACIÓN ---
    "Node JS",
    "Python",
    "Java",
    "C Plus Plus",
    "C Sharp",
    "PHP",
    "Ruby on Rails",
    "Go Lang",
    "Rust",
    "Kotlin",
    "Scala",
    "Elixir",
    "Dart",
    "TypeScript Backend",

    // --- FRAMEWORKS BACKEND ---
    "Laravel",
    "Django",
    "Spring Boot",
    "Express JS",
    "FastAPI",
    "Nest JS",
    "ASP NET Core",
    "Symfony",
    "Flask",
    "Koa JS",
    "Adonis JS",

    // --- DESARROLLO MÓVIL ---
    "Flutter",
    "React Native",
    "Swift",
    "Kotlin Multiplatform",
    "Ionic",
    "Apache Cordova",
    "Xamarin",

    // --- BASES DE DATOS RELACIONALES (SQL) ---
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "Oracle DB",
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
    "Prisma ORM",
    "Sequelize",
    "Mongoose",
    "TypeORM",
    "Hibernate",

    // --- PRUEBAS (TESTING) ---
    "Jest",
    "Cypress",
    "Playwright",
    "Vitest",
    "Selenium",
    "Mocha",
    "Chai",
    "Puppeteer",

    // --- DEVOPS, CI/CD Y SERVIDORES ---
    "Git y GitHub",
    "GitLab CI",
    "GitHub Actions",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Nginx",
    "Apache HTTP Server",

    // --- CLOUD Y PLATAFORMAS (BAAS) ---
    "AWS Amazon Web Services",
    "Google Cloud",
    "Microsoft Azure",
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
    "REST API",
    "gRPC",
    "RxJS",
    "Redux Toolkit",
    "Zustand",
    "Pinia",

    // --- INTELIGENCIA ARTIFICIAL, DATA Y TENDENCIAS ---
    "Data Science",
    "Machine Learning",
    "Cybersecurity",
    "Web3 y Blockchain",
    "PyTorch",
    "TensorFlow",
    "Pandas",
    "NumPy",
    "OpenCV",
    "LangChain"
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

        texto.textContent = road;

        tarjeta.append(texto);
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

            texto.textContent = road;

            tarjeta.append(texto);
            tarjeta.setAttribute("class", "tarjeta__roadmap");

            contenedorTarjetad.append(tarjeta);
        }
    }
}