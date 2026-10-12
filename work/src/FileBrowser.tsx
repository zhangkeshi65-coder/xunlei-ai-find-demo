import React from 'react';
import {createPortal} from 'react-dom';
import FolderPicker from './FolderPicker';
import {resourceResult} from './resourceResult';
import assets from './filePageAssets';
export default function FileBrowser({question,onBack}:{question:string,onBack:()=>void}){
 const result=resourceResult(question);
 const kind=result.type==='视频'?'视频':result.type==='音频'?'音频':result.type==='文档'?'文档':'文件';
 const[tab,setTab]=React.useState('全部'),[selecting,setSelecting]=React.useState(false),[selected,setSelected]=React.useState<number[]>([]),[saving,setSaving]=React.useState(''),[notice,setNotice]=React.useState('');
 const count=result.type==='音频'?55:result.type==='视频'?11:8;
 const files=Array.from({length:count},(_,i)=>{
  const base=result.title.replace(/\.(mp4|rmvb|mkv|mp3|pdf|zip)$/i,'').replace(/视频$/,'');
  const name=result.type==='视频'?base.replace(/\s*1080P/ig,'')+' 1080P.mp4':result.type==='音频'?base+' 第'+String(i+1).padStart(2,'0')+'集.mp3':base+' '+String(i+1).padStart(2,'0')+(result.type==='文档'?'.pdf':result.type==='资料包'||result.type==='游戏'?'.zip':result.type==='网址'?'.html':'');
  return {name,size:result.type==='视频'?'230.0MB':result.type==='音频'?'12.0MB':'8.0MB'};
 });
 const toggle=(i:number)=>setSelected(s=>s.includes(i)?s.filter(x=>x!==i):[...s,i]);
 React.useEffect(()=>{const handler=(e:KeyboardEvent)=>{if(e.key==='Escape'&&!saving)onBack()};window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler)},[onBack,saving]);
 React.useEffect(()=>{if(!notice)return;const timer=window.setTimeout(()=>setNotice(''),2600);return()=>clearTimeout(timer)},[notice]);
 return createPortal(<section className="file-browser" aria-label="查看文件页面">
  <div className="file-browser-status"><span>9:41</span><img src={assets.imgRightSide} alt="信号、无线网络和电量"/></div>
  <header className="file-browser-nav"><button aria-label="返回搜索结果" onClick={onBack}><img src={assets.img2025IcCommonPagerPrevNormal48} alt=""/></button><h1>{selecting?'已选'+selected.length+'项':'查看文件'}</h1><button aria-label={selecting?'取消多选':'多选文件'} onClick={()=>{setSelecting(v=>!v);setSelected([])}}>{selecting?<span>取消</span>:<img src={assets.img2025IcCommonMultiselectNormal48} alt=""/>}</button></header>
  <div className="file-browser-tabs" role="tablist" aria-label="文件类型">{['全部',kind].map(t=><button key={t} role="tab" aria-selected={tab===t} onClick={()=>setTab(t)}>{t}</button>)}</div>
  <div className="file-browser-list" style={{bottom:selecting?82:24}}>{files.map((file,i)=><div className="file-browser-row" key={i}>
   {selecting&&<input type="checkbox" aria-label={'选择'+file.name+'第'+(i+1)+'项'} checked={selected.includes(i)} onChange={()=>toggle(i)}/>}
   <div className="file-browser-icon">{result.type==='视频'?<img className="file-video-icon" src="./assets/44de1c2e-ba2b-47f5-943e-8f8230abab1c.svg" alt="视频文件"/>:<img className="file-other-icon" src={'./assets/resource-'+(result.icon||'link')+'.svg'} alt={kind+'文件'}/>}</div>
   <div className="file-browser-copy"><p>{file.name}</p><div><span>2024/09/23 18:23</span><span>{file.size}</span><button onClick={()=>setSaving(file.name)}>转存</button></div></div>
  </div>)}</div>
  {selecting&&<footer className="file-browser-selection"><button onClick={()=>setSelected(selected.length===files.length?[]:files.map((_,i)=>i))}>{selected.length===files.length?'取消全选':'全选'}</button><button disabled={!selected.length} onClick={()=>setSaving(selected.length===1?files[selected[0]].name:result.title+'（'+selected.length+'个文件）')}>转存{selected.length?'（'+selected.length+'）':''}</button></footer>}
  {notice&&<p className="file-browser-notice" role="status">{notice}</p>}
  <div className="file-browser-indicator"><img src={assets.imgBarHomeIndicatorLight} alt=""/><span/></div>
  {saving&&<FolderPicker title={saving} onClose={()=>setSaving('')} onSaved={path=>{setNotice('已保存到'+path);setSaving('')}}/>}
 </section>,document.querySelector('.find-screen')!);
}
