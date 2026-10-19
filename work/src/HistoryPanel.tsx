import React from 'react';
import useModalLayer from './useModalLayer';
export type HistoryEntry={question:string,key:number};
export const HISTORY_KEY='xunlei-find-history-v1';
export function normalizeHistory(value:unknown):HistoryEntry[]{
 if(!Array.isArray(value))return [];
 const seen=new Set<string>();
 return value.filter((entry):entry is HistoryEntry=>!!entry&&typeof entry.question==='string'&&!!entry.question.trim()&&Number.isFinite(entry.key)&&entry.key>0)
  .sort((a,b)=>b.key-a.key).flatMap(entry=>{const question=entry.question.trim();if(seen.has(question))return [];seen.add(question);return [{question,key:entry.key}]}).slice(0,100);
}
export default function HistoryPanel({entries,onClose,onSelect}:{entries:HistoryEntry[],onClose:()=>void,onSelect:(entry:HistoryEntry)=>void}){
 const [closing,setClosing]=React.useState(false);
 const panel=React.useRef<HTMLElement>(null);
 const close=()=>{if(closing)return;setClosing(true);window.setTimeout(onClose,180)};
 useModalLayer(panel,close);
 const [search,setSearch]=React.useState(false),[query,setQuery]=React.useState('');
 const today=new Date();today.setHours(0,0,0,0);
 const week=new Date(today);week.setDate(week.getDate()-6);
 const visible=entries.filter(entry=>entry.question.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
 const groups:[string,HistoryEntry[]][]=[['今天',visible.filter(entry=>entry.key>=today.getTime())],['近7天',visible.filter(entry=>entry.key<today.getTime()&&entry.key>=week.getTime())],['更早',visible.filter(entry=>entry.key<week.getTime())]];
 return <div className={"history-shade "+(closing?"modal-closing":"")}><button className="history-dismiss" aria-label="关闭历史记录" onClick={close}/><aside ref={panel} tabIndex={-1} className="history-panel" role="dialog" aria-label="历史记录" aria-modal="true"><header><h2>找一找</h2><button aria-label="搜索历史记录" aria-expanded={search} onClick={()=>{setSearch(v=>!v);setQuery('')}}><img src="./assets/bb2cc836-3013-4e13-836a-d0c51dde7fd3.svg" alt=""/></button></header>{search&&<input autoFocus aria-label="搜索历史" placeholder="搜索历史记录" value={query} onChange={e=>setQuery(e.target.value)}/>}<div className="history-list">{groups.filter(([,items])=>items.length).map(([label,items])=><section key={label}><h3>{label}</h3>{items.map(entry=><button key={entry.key+'-'+entry.question} onClick={()=>onSelect(entry)}>{entry.question}</button>)}</section>)}{!visible.length&&<p className="history-empty" role="status">{entries.length?'没有匹配的历史记录':'还没有查找记录'}</p>}</div></aside></div>
}
