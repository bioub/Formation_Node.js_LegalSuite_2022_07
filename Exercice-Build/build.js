const fs = require("fs/promises");
const path = require("path");
const md5 = require("md5");
const { minify } = require("terser");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function rmAndMkdirDist() {
  await fs.rm(distPath, { recursive: true, force: true });
  await fs.mkdir(distPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  let content = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });

  content = content
    .replace(
      '<script src="./js/horloge.js"></script>',
      '<script src="./app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', "");

  await fs.writeFile(indexHtmlDistPath, content);
}

async function main() {
  await rmAndMkdirDist();
  await buildJs();
  await buildHtml();
}

main();
