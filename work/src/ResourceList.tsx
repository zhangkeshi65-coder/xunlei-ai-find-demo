import React from 'react';
import FolderPicker from './FolderPicker';
import {resourceVariantTags} from './resourceVariants';
import {resourceResult} from './resourceResult';
export default function ResourceList({question}:{question:string}){
 const result=resourceResult(question);
 const rows=resourceVariantTags(result).map((tags,id)=>({id,title:result.title,tags}));
 const [selected,setSelected]=React.useState<number|null>(null);
 const [saved,setSaved]=React.useState<number[]>([]);
 const [notice,setNotice]=React.useState('');
 const selectedResource=selected===null?null:rows.find(row=>row.id===selected);
 const saveTitle=selectedResource?selectedResource.title+'（'+selectedResource.tags.filter(tag=>tag!=='最匹配').join(' · ')+'）':'';
 return <section className="resource-list" aria-label="全部资源结果">
  <header className="resource-summary"><h2>{result.title}</h2></header>
  <div className="resource-list-heading"><h3>找到{rows.length}份资源</h3></div>
  <div className="resource-rows">{rows.map(row=><article className="resource-row" key={row.id}><div className="resource-row-icon"><img src="./assets/results-folder.svg" alt="文件夹"/></div><div className="resource-row-copy"><h4>{row.title}</h4><div className="resource-row-tags">{row.tags.map(tag=><span className={tag==='最匹配'?'resource-best-tag':undefined} key={tag}>{tag}</span>)}</div></div><button onClick={()=>setSelected(row.id)}>{saved.includes(row.id)?'已转存':'转存'}</button></article>)}</div>
  {notice&&<p className="resource-notice" role="status">{notice}</p>}
  {selectedResource&&<FolderPicker title={saveTitle} showResourceName onClose={()=>setSelected(null)} onSaved={path=>{setSaved(previous=>Array.from(new Set([...previous,selectedResource.id])));setNotice('已保存到 '+path+'（本地预览）');setSelected(null)}}/>}
 </section>
}
