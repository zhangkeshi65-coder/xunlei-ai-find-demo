import React from 'react';
import FolderPicker from './FolderPicker';
import {resourceResult} from './resourceResult';
export default function ResourceList({question}:{question:string}){
 const result=resourceResult(question);
 const rows=Array.from({length:12},(_,i)=>({id:i,title:result.title,tags:result.tags.filter(t=>t!=='最匹配')}));
 const [selected,setSelected]=React.useState<number|null>(null);
 const [saved,setSaved]=React.useState<number[]>([]);
 const [notice,setNotice]=React.useState('');
 return <section className="resource-list" aria-label="全部资源结果">
  <header className="resource-summary"><h2>{result.title}</h2><p>2024-09-23 18:23 <span>73.9MB</span></p></header>
  <div className="resource-list-heading"><h3>全部12个结果</h3><button onClick={()=>setSelected(-1)}>转存全部</button></div>
  <div className="resource-rows">{rows.map(row=><article className="resource-row" key={row.id}><div className="resource-row-icon"><img src="./assets/results-folder.svg" alt="文件夹"/></div><div className="resource-row-copy"><h4>{row.title}</h4><div className="resource-row-tags">{row.id===0&&<span className="resource-best-tag">最匹配</span>}{row.tags.slice(0,row.id===0?1:2).map(tag=><span key={tag}>{tag}</span>)}</div></div><button onClick={()=>setSelected(row.id)}>{saved.includes(row.id)?'已转存':'转存'}</button></article>)}</div>
  {notice&&<p className="resource-notice" role="status">{notice}</p>}
  {selected!==null&&<FolderPicker title={result.title} onClose={()=>setSelected(null)} onSaved={path=>{setSaved(previous=>selected===-1?rows.map(r=>r.id):[...previous,selected]);setNotice('已保存到 '+path+'（本地预览）');setSelected(null)}}/>}
 </section>
}
