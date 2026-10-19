// Collections have no extension; individual files use their actual format icon.
export function savedResourceIcon(name:string){
 if(/\.(mp4|mkv|rmvb|avi|mov|wmv)$/i.test(name))return './assets/44de1c2e-ba2b-47f5-943e-8f8230abab1c.svg';
 if(/\.(pdf|epub|mobi|azw3|docx?|pptx?|xlsx?)$/i.test(name))return './assets/resource-pdf.svg';
 if(/\.(zip|rar|7z)$/i.test(name))return './assets/resource-zip.svg';
 if(/\.html?$/i.test(name)||/^https?:/i.test(name))return './assets/resource-web.svg';
 if(/\.(mp3|m4a|flac|wav)$/i.test(name))return './assets/resource-link.svg';
 return './assets/results-folder.svg';
}
