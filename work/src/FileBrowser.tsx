import React from 'react';
import {createPortal} from 'react-dom';
import FolderPicker from './FolderPicker';
import {resourceResult} from './resourceResult';
import {resourceFiles} from './resourceFiles';
import assets from './filePageAssets';
import selectionAssets from './selectionAssets';
import {saveFeedback} from './cloudStore';
export default function FileBrowser({question,onBack}:{question:string,onBack:()=>void}){
 const result=resourceResult(question);
 const kind=result.type==='视频'?'视频':result.type==='音频'?'音频':result.type==='文档'?'文档':'文件';
 const[tab,setTab]=React.useState('全部'),[selecting,setSelecting]=React.useState(false),[selected,setSelected]=React.useState<number[]>([]),[saving,setSaving]=React.useState<string[]|null>(null),[notice,setNotice]=React.useState('');
 const files=resourceFiles(question,result);
 const exitSelection=()=>{setSelecting(false);setSelected([])};
 const toggle=(i:number)=>setSelected(s=>s.includes(i)?s.filter(x=>x!==i):[...s,i]);
 React.useEffect(()=>{const handler=(e:KeyboardEvent)=>{if(e.key==='Escape'&&!saving){if(selecting)exitSelection();else onBack()}};window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler)},[onBack,saving,selecting]);
 React.useEffect(()=>{if(!notice)return;const timer=window.setTimeout(()=>setNotice(''),2600);return()=>clearTimeout(timer)},[notice]);
 return createPortal(<section className={"file-browser "+(selecting?"file-browser-selecting":"")} aria-label="查看文件页面">
  <div className="file-browser-status"><span>9:41</span><img src={assets.imgRightSide} alt="信号、无线网络和电量"/></div>
  <header className="file-browser-nav"><button aria-label={selecting?'取消多选':'返回搜索结果'} onClick={selecting?exitSelection:onBack}><img src={selecting?selectionAssets.img2025IcNavBarCloseBold24:assets.img2025IcCommonPagerPrevNormal48} alt=""/></button><h1>{selecting?'已选 '+selected.length+' 项':'查看文件'}</h1>{selecting?<button className="file-select-all" aria-label={selected.length===files.length?'取消全选':'全选'} aria-pressed={selected.length===files.length} onClick={()=>setSelected(selected.length===files.length?[]:files.map((_,i)=>i))}><span>全选</span><img src={selected.length===files.length?selectionAssets.img2025IcSelectorChecked24:selectionAssets.img2025IcSelectorUnchecked24} alt=""/></button>:<button aria-label="多选文件" onClick={()=>setSelecting(true)}><img src={assets.img2025IcCommonMultiselectNormal48} alt=""/></button>}</header>
  <div className="file-browser-tabs" role="tablist" aria-label="文件类型">{['全部',kind].map(t=><button key={t} role="tab" aria-selected={tab===t} onClick={()=>setTab(t)}>{t}</button>)}</div>
  <div className="file-browser-list" style={{bottom:100}}>{files.map((file,i)=><div className="file-browser-row" key={i} onClick={selecting?()=>toggle(i):undefined}>

   <div className="file-browser-icon">{result.type==='视频'?<img className="file-video-icon" src={selecting?selectionAssets.img40:"./assets/44de1c2e-ba2b-47f5-943e-8f8230abab1c.svg"} alt="视频文件"/>:<img className="file-other-icon" src={'./assets/resource-'+(result.icon||'link')+'.svg'} alt={kind+'文件'}/>}</div>
   <div className="file-browser-copy"><p>{file.name}</p><div><span>2024/09/23 18:23</span>{selecting&&<img className="file-meta-divider" src={selectionAssets.imgVector1918} alt=""/>}<span>{file.size}</span>{!selecting&&<button onClick={()=>setSaving([file.name])}>转存</button>}</div></div>
   {selecting&&<button className="file-row-selector" role="checkbox" aria-checked={selected.includes(i)} aria-label={'选择'+file.name+'第'+(i+1)+'项'} onClick={e=>{e.stopPropagation();toggle(i)}}><img src={selected.includes(i)?selectionAssets.img2025IcSelectorChecked24:selectionAssets.img2025IcSelectorUnchecked24} alt=""/></button>}
  </div>)}</div>

  <footer className="file-browser-savebar"><button disabled={selecting&&!selected.length} onClick={()=>setSaving((selecting?selected.map(i=>files[i]):files).map(file=>file.name))}>{selecting?'保存所选（'+selected.length+'）':'保存全部文件'}</button></footer>
  {notice&&<p className="file-browser-notice" role="status">{notice}</p>}
  <div className="file-browser-indicator"><img src={assets.imgBarHomeIndicatorLight} alt=""/><span/></div>
  {saving&&<FolderPicker title={saving.length===1?saving[0]:'已选'+saving.length+'个文件'} fileNames={saving} onClose={()=>setSaving(null)} onSaved={(path,outcome)=>{setNotice(saveFeedback(path,outcome));setSaving(null)}}/>}
 </section>,document.querySelector('.find-screen')!);
}
