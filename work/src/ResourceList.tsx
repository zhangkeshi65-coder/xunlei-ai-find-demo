import React from 'react';
import FolderPicker from './FolderPicker';
import {resourceVariantTags} from './resourceVariants';
import {resourceResult} from './resourceResult';
import {saveFeedback} from './cloudStore';
import useCloudData from './useCloudData';
export default function ResourceList({question,scrollPosition}:{question:string,scrollPosition:React.RefObject<number>}){
 const result=resourceResult(question);
 const list=React.useRef<HTMLElement>(null);
 React.useLayoutEffect(()=>{if(list.current)list.current.scrollTop=scrollPosition.current},[scrollPosition]);
 const rows=resourceVariantTags(result).map((tags,id)=>({id,title:result.title,tags,saveName:result.title+'（'+tags.filter(tag=>tag!=='最匹配').join(' · ')+'）'}));
 const [selected,setSelected]=React.useState<number|null>(null);
 const cloud=useCloudData();
 const [notice,setNotice]=React.useState('');
 React.useEffect(()=>{if(!notice)return;const timer=window.setTimeout(()=>setNotice(''),3000);return()=>clearTimeout(timer)},[notice]);
 const selectedResource=selected===null?null:rows.find(row=>row.id===selected);
 const saveTitle=selectedResource?.saveName||'';
 return <section ref={list} onScroll={event=>{scrollPosition.current=event.currentTarget.scrollTop}} className="resource-list" aria-label="全部资源结果">
  <header className="resource-summary"><h2>{result.title}</h2></header>
  <div className="resource-list-heading"><h3>找到{rows.length}份资源</h3></div>
  <div className="resource-rows">{rows.map(row=><article className="resource-row" key={row.id}><div className="resource-row-icon"><img src="./assets/results-folder.svg" alt="文件夹"/></div><div className="resource-row-copy"><h4>{row.title}</h4><div className="resource-row-tags">{row.tags.map(tag=><span className={tag==='最匹配'?'resource-best-tag':undefined} key={tag}>{tag}</span>)}</div></div><button onClick={()=>setSelected(row.id)}>{cloud.files.some(file=>file.name===row.saveName)?'已转存':'转存'}</button></article>)}</div>
  {notice&&<p className="resource-notice" role="status">{notice}</p>}
  {selectedResource&&<FolderPicker title={saveTitle} showResourceName onClose={()=>setSelected(null)} onSaved={(path,outcome)=>{setNotice(saveFeedback(path,outcome));setSelected(null)}}/>}
 </section>
}
