import {build} from 'esbuild';
await build({entryPoints:['work/src/main.tsx'],outfile:'docs/app.js',bundle:true,minify:true,jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
console.log('Production build passed');
