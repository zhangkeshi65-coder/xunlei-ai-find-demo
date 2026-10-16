import type {ResourceResult} from './resourceResult';
// File rows remain preview data; never replace an explicit format or quality
// with the old fixed 1080P/MP4 labels.
export function resourceFiles(question:string,result:ResourceResult){
 const formats:Record<string,string[]>={视频:['MP4','MKV','RMVB','AVI','MOV','WMV'],音频:['MP3','FLAC','WAV','M4A'],文档:['PDF','EPUB','MOBI','AZW3','DOCX','DOC','PPTX','PPT','XLSX','XLS'],资料包:['ZIP','RAR','7Z'],游戏:['ZIP','RAR','7Z'],网址:['HTML']};
 const allowed=formats[result.type]||[];
 const format=allowed.find(f=>new RegExp('\\b'+f+'\\b','i').test(question))||allowed[0]||'';
 const quality=result.type==='视频'?question.match(/4K|2160P|1080P|720P/i)?.[0]?.toUpperCase():undefined;
 const collection=result.type==='视频'&&/全集|合集|电视剧|全\d+集/.test(question+' '+result.title);
 const count=result.type==='音频'?55:result.type==='视频'?(collection?11:1):8;
 let base=result.title.replace(/\.(mp4|mkv|rmvb|avi|mov|wmv|mp3|flac|wav|m4a|pdf|epub|mobi|azw3|docx?|pptx?|xlsx?|zip|rar|7z|html)$/i,'');
 if(format)base=base.replace(new RegExp('\\s+\\b'+format+'\\b$','i'),'');
 if(result.type==='视频')base=base.replace(/\s*(4K|2160P|1080P|720P)/ig,'').replace(/视频$/,'').trim();
 return Array.from({length:count},(_,i)=>{const episode=result.type==='音频'||collection?' 第'+String(i+1).padStart(2,'0')+'集':result.type==='视频'?'':' '+String(i+1).padStart(2,'0');return {name:base+episode+(quality?' '+quality:'')+(format?'.'+format.toLowerCase():''),size:result.type==='视频'?'230.0MB':result.type==='音频'?'12.0MB':'8.0MB'}});
}
