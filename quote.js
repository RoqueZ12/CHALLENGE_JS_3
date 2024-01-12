const authorName = document.getElementById('author-name');
const quote = document.getElementById('quote');
const btnRandom = document.getElementById('random');
const btnCopy = document.getElementById('copy')
//El arreglo de quotes con sus autores.
const quotes = [
  {
    quote: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    author: "John Lennon"
  },
  {
    quote: "No hay hombre lo suficientemente rico para comprar su pasado.",
    author: "Oscar Wilde"
  },
  {
    quote: "El único modo de hacer un gran trabajo es amar lo que haces.",
    author: "Steve Jobs"
  },
  {
    quote: "No cuentes los días, haz que los días cuenten.",
    author: "Muhammad Ali"
  },
  {
    quote: "La mejor venganza es un éxito aplastante.",
    author: "Frank Sinatra"
  },
  {
    quote: "La vida es 10% lo que nos pasa y 90% cómo reaccionamos a ello.",
    author: "Charles R. Swindoll"
  },
  {
    quote: "El éxito no es definitivo, el fracaso no es fatal: es el coraje de continuar lo que cuenta.",
    author: "Winston Churchill"
  },
  {
    quote: "El futuro pertenece a quienes creen en la belleza de sus sueños.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "La verdadera medida de un hombre no se ve en cómo se comporta en momentos de comodidad, sino en cómo se mantiene en tiempos de desafío.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
    author: "Nelson Mandela"
  }
];

//funcion generar aleatorio quote
function quoteRandom(){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quote.textContent = randomQuote.quote
  authorName.textContent = randomQuote.author
}
//Inicializar con la primera quote random
quoteRandom()

//btnRandom evenlistener
btnRandom.addEventListener('click', quoteRandom)

//btn para copiar
btnCopy.addEventListener('click', function() {
    // Seleccionar el texto de la cita
    const range = document.createRange();
    range.selectNode(quote);  // 'quote' es tu elemento que contiene la cita
    
    // Seleccionar el texto dentro del rango
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    // Intentar copiar el texto seleccionado al portapapeles
    try {
        document.execCommand('copy');
        alert('Cita copiada al portapapeles');
    } catch (err) {
        console.error('No se pudo copiar la cita al portapapeles', err);
        alert('Ocurrió un error al copiar la cita');
    }

    // Limpiar la selección
    window.getSelection().removeAllRanges();
});