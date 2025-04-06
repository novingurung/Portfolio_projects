// List of AI or dev-related quotes
const quotes = [
  "Don't stop when you're tired. Stop when you're done",
  "If you show up there's a chance something could happen.",
  "Stop waiting for things to be Perfect.",
  "Nothing changes if nothing changeS.",
  "Why not you?"
];

// Function to pick and display a random quote
function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}
