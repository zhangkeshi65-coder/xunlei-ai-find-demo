import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from './Part0';
import Content from './Part1';
import Footer from './Part2';
import FindPage from './FindPage';
import CloudLocation from './CloudLocation';
function App(){const [find,setFind]=React.useState(false);const[cloudLocation,setCloudLocation]=React.useState<{parent:string|null,highlightId?:string}|null>(null);React.useEffect(()=>bindUI(()=>setFind(true),()=>setFind(false)),[]);return <main className={'phone '+(find?'find-tab-active':'')}><header><Header/></header><section className="scroll-content"><Content onOpenSaved={(parent,highlightId)=>setCloudLocation({parent,highlightId})} onFind={()=>setFind(true)}/></section><footer><Footer/></footer><dialog id="action"><form method="dialog"><h3 id="action-title"/><input aria-label="输入内容" placeholder="请输入链接或内容"/><button>完成</button><button>关闭</button></form></dialog>{find&&<FindPage onBack={()=>setFind(false)}/>}{cloudLocation&&<CloudLocation key={cloudLocation.highlightId||'root'} {...cloudLocation} onBack={()=>setCloudLocation(null)}/>}</main>}
createRoot(document.getElementById('root')!).render(<App/>);
function bindUI(openFind:()=>void,openSearch:()=>void){
 const byId=(id:string)=>document.querySelector(`[data-node-id="${id}"]`) as HTMLElement;
 const find=byId('37:8258');find.setAttribute('role','button');find.setAttribute('aria-label','找一找');find.tabIndex=0;find.onclick=openFind;find.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openFind()}};
 const searchTab=byId('37:8254');searchTab.setAttribute('role','button');searchTab.setAttribute('aria-label','搜索标签');searchTab.tabIndex=0;searchTab.onclick=openSearch;searchTab.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openSearch()}};
 const search=byId('37:8272');search.contentEditable='true';search.setAttribute('role','textbox');search.setAttribute('aria-label','搜索');search.setAttribute('data-placeholder','常用站点');
 const modal=document.getElementById('action') as HTMLDialogElement;
 for(const id of ['37:8283','37:8284','37:8285','37:8286']){const el=byId(id);if(!el)continue;el.setAttribute('role','button');el.tabIndex=0;const open=()=>{document.getElementById('action-title')!.textContent=el.textContent?.trim()||'';modal.showModal()};el.onclick=open;el.onkeydown=e=>{if(e.key==='Enter')open()}}
}
