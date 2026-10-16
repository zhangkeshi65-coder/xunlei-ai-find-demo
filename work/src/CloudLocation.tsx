import React from 'react';
import {CLOUD_EVENT,CLOUD_KEY,readCloud} from './cloudStore';
import assets from './filePageAssets';
function icon(name:string){if(/\.(mp4|mkv|rmvb|avi|mov)$/i.test(name))return './assets/44de1c2e-ba2b-47f5-943e-8f8230abab1c.svg';if(/\.(pdf|epub|docx?|pptx?|xlsx?)$/i.test(name))return './assets/resource-pdf.svg';if(/\.(zip|rar|7z)$/i.test(name))return './assets/resource-zip.svg';if(/\.(html?)$/i.test(name)||/^https?:/i.test(name))return './assets/resource-web.svg';if(/\.(mp3|m4a|flac|wav)$/i.test(name))return './assets/resource-link.svg';return './assets/results-folder.svg'}
export default function CloudLocation({parent,highlightId,onBack}:{parent:string|null,highlightId?:string,onBack:()=>void}){
 const[data,setData]=React.useState(readCloud),[current,setCurrent]=React.useState(parent);
 const focusFile=React.useRef<HTMLDivElement>(null);
 React.useEffect(()=>{const refresh=()=>setData(readCloud());const storage=(e:StorageEvent)=>{if(!e.key||e.key===CLOUD_KEY)refresh()};window.addEventListener(CLOUD_EVENT,refresh);window.addEventListener('storage',storage);return()=>{window.removeEventListener(CLOUD_EVENT,refresh);window.removeEventListener('storage',storage)}},[]);
 React.useEffect(()=>{focusFile.current?.scrollIntoView({block:'center'})},[current,highlightId]);
 React.useEffect(()=>{const escape=(e:KeyboardEvent)=>{if(e.key==='Escape')onBack()};window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape)},[onBack]);
 const folder=data.folders.find(f=>f.id===current);
 const folders=data.folders.filter(f=>f.parent===current);
 const files=data.files.filter(f=>f.parent===current).sort((a,b)=>Date.parse(b.savedAt)-Date.parse(a.savedAt));
 const ancestors=[];const seen=new Set<string>();let node=folder;while(node&&!seen.has(node.id)){seen.add(node.id);ancestors.unshift(node);node=data.folders.find(f=>f.id===node!.parent)}
 const formatTime=(time:string)=>{const date=new Date(time);return Number.isNaN(date.getTime())?'已保存':date.toLocaleString('zh-CN',{hour12:false})};
 return <section className="cloud-browser" aria-label="已保存文件夹">
  <div className="cloud-status"><span>9:41</span><img src={assets.imgRightSide} alt="信号、无线网络和电量"/></div>
  <header className="cloud-nav"><button aria-label="返回首页" onClick={onBack}><img src={assets.img2025IcCommonPagerPrevNormal48} alt=""/></button><h1>{folder?.name||'我的云盘'}</h1></header>
  <nav className="cloud-breadcrumb" aria-label="保存位置"><button onClick={()=>setCurrent(null)}>我的云盘</button>{ancestors.map(f=><React.Fragment key={f.id}><span>›</span><button aria-current={f.id===current?'page':undefined} onClick={()=>setCurrent(f.id)}>{f.name}</button></React.Fragment>)}</nav>
  <div className="cloud-list"><p className="cloud-count">{folders.length} 个文件夹 · {files.length} 个已保存资源</p>{folders.map(f=><button className="cloud-folder-row" aria-label={'打开文件夹：'+f.name} key={f.id} onClick={()=>setCurrent(f.id)}><img src="./assets/results-folder.svg" alt="文件夹"/><span>{f.name}<small>{data.files.filter(file=>file.parent===f.id).length} 个已保存资源</small></span><b>›</b></button>)}{files.map(file=><div className={'cloud-file-row '+(file.id===highlightId?'cloud-file-highlight':'')} key={file.id} ref={file.id===highlightId?focusFile:undefined} aria-current={file.id===highlightId?'true':undefined}><img src={icon(file.name)} alt="已保存资源"/><div><p>{file.name}</p><small>{formatTime(file.savedAt)}</small>{file.id===highlightId&&<span className="cloud-located">已定位到此资源</span>}</div></div>)}{!files.length&&!folders.length&&<div className="cloud-empty"><img src="./assets/results-folder.svg" alt=""/><p>这个文件夹还没有保存的资源</p><small>在「找一找」中找到资源后，可以保存到这里</small></div>}</div>
  <div className="cloud-home-indicator"><span/></div>
 </section>
}
