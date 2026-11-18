function convertMarkdown() {
  const markdownText = document.getElementById("markdown-input").value;

  const html = markdownText
    // Headings
    .replace(/^###\s+(.*)$/gm, "<h3>$1</h3>")
    .replace(/^##\s+(.*)$/gm, "<h2>$1</h2>")
    .replace(/^#\s+(.*)$/gm, "<h1>$1</h1>")

    // Blockquotes
    .replace(/^>\s+(.*)$/gm, "<blockquote>$1</blockquote>")

    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">')

    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')

    // Bold
    .replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>")

    // Italic
    .replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

  return html;
}

const input = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

// Output
input.addEventListener('input', (event) => {
  // HTML Output
  htmlOutput.textContent = convertMarkdown(event);

  // Preview
  preview.innerHTML = htmlOutput.textContent;
});