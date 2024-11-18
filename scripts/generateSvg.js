const fs = require('fs');
const path = require('path');

const fileName = "footer"; // can be changed

const svgDir = path.resolve(__dirname, `../src/assets/${fileName}`);
const outputFile = path.resolve(__dirname, `../src/utils/${fileName}.ts`);

const files = fs.readdirSync(svgDir).filter((file) => file.endsWith('.svg'));

function toPascalCase(str) {
  return str
    .replace(/(?:^\w|[^\w]|\b\w)/g, (match) => match.toUpperCase())
    .replace(/\W+/g, '');
}

const imports = files
  .map((file) => {
    const name = toPascalCase(path.basename(file, '.svg'));
    return `import { ReactComponent as ${name} } from '../assets/${fileName}/${file}';`;
  })
  .join('\n');

const mappings = files
  .map((file) => {
    const name = path.basename(file, '.svg');
    return `  '${name}': ${toPascalCase(name)},`;
  })
  .join('\n');

const content = `${imports}\n\nconst ${fileName} = {\n${mappings}\n};\n\nexport default ${fileName};\n`;

fs.writeFileSync(outputFile, content, 'utf8');
console.log(`${fileName}.ts generated successfully!`);


// node scripts/generateSvg.js