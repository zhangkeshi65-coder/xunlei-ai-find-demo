import {build} from 'esbuild';
await build({entryPoints:['work/src/main.tsx'],outfile:'docs/app.js',bundle:true,minify:true,jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
console.log('Production build passed');

// Version each resource by its content so deployed updates bypass stale browser caches.
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const destination='docs';
let html=await readFile(destination+'/index.html','utf8');
for(const file of ['app.js','style.css','page.css','find.css','ask.css','input-modes.css']){
 const hash=createHash('sha256').update(await readFile(destination+'/'+file)).digest('hex').slice(0,12);
 html=html.replace(new RegExp('\\./'+file.replace('.', '\\.')+'(?:\\?v=[a-z0-9-]+)?','g'),'./'+file+'?v='+hash);
}
await writeFile(destination+'/index.html',html);
