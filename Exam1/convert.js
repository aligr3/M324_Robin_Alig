import fs from "node:fs";
import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTOC from "markdown-it-table-of-contents";

const inputFile = "07_clean_code.md";
const outputFile = "07_clean_code.html";

const md = new MarkdownIt();
md.use(markdownItAnchor);
md.use(markdownItTOC, {
  markerPattern: /^\[TOC\]/im,
  includeLevel: [1, 2, 3],
});

const markdown = fs.readFileSync(inputFile, "utf-8");
const body = md.render(markdown);

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>07 - Clean Code</title>
</head>
<body>
${body}</body>
</html>
`;

fs.writeFileSync(outputFile, html);
console.log(`Converted ${inputFile} to ${outputFile}`);
