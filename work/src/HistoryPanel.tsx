import React from 'react';
export type HistoryEntry={question:string,key:number,completed?:boolean};
export const HISTORY_KEY='xunlei-find-history-v1';
const samples=['找有声书资源合集','帮我找《三体》有声书完整版','找高清《流浪地球2》国语中字','找《漫长的季节》全集未删减','找有声书资源合集','找4K蓝光《奥本海默》','找英文原声+中文字幕美剧资源','找 Python 入门 PDF 和练习题'];
export default function HistoryPanel({entries,onClose,onSelect}:{entries:HistoryEntry[],onClose:()=>void,onSelect:(entry:HistoryEntry)=>void}){
 const [closing,setClosing]=React.useState(false);
 const close=()=>{setClosing(true);window.setTimeout(onClose,180)};
 const [search,setSearch]=React.useState(false),[query,setQuery]=React.useState('');
 const today=entries.length?entries:samples.slice(0,5).map((question,i)=>({question,key:i}));
 const recent=samples.slice(5).map((question,i)=>({question,key:-i-1}));
 return <div className={"history-shade "+(closing?"modal-closing":"")}><button className="history-dismiss" aria-label="关闭历史记录" onClick={close}/><aside className="history-panel" role="dialog" aria-label="历史记录" aria-modal="true"><header><h2>找一找</h2><button aria-label="搜索历史记录" onClick={()=>setSearch(v=>!v)}><img src="./assets/bb2cc836-3013-4e13-836a-d0c51dde7fd3.svg" alt=""/></button></header>{search&&<input autoFocus aria-label="搜索历史" placeholder="搜索历史记录" value={query} onChange={e=>setQuery(e.target.value)}/>}<div className="history-list">{[['今天',today],['近7天',recent]].map(([label,items])=><section key={label as string}><h3>{label as string}</h3>{(items as HistoryEntry[]).filter(e=>e.question.includes(query)).map((entry,i)=><button key={entry.key+'-'+i} onClick={()=>onSelect({...entry,completed:true})}>{entry.question}</button>)}</section>)}<h3>更多</h3></div></aside></div>
}
