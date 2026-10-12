import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from './Part0';
import Content from './Part1';
import Footer from './Part2';
import FindPage from './FindPage';
function App(){const [find,setFind]=React.useState(false);React.useEffect(()=>bindUI(()=>setFind(true),()=>setFind(false)),[]);return <main className={'phone '+(find?'find-tab-active':'')}><header><Header/></header><section className="scroll-content"><Content/></section><footer><Footer/></footer><dialog id="action"><form method="dialog"><h3 id="action-title"/><input aria-label="输入内容" placeholder="请输入链接或内容"/><button>完成</button><button>关闭</button></form></dialog>{find&&<FindPage onBack={()=>setFind(false)}/>}</main>}
createRoot(document.getElementById('root')!).render(<App/>);
function bindUI(openFind:()=>void,openSearch:()=>void){
 const byId=(id:string)=>document.querySelector(`[data-node-id="${id}"]`) as HTMLElement;
 const find=byId('37:8258');find.setAttribute('role','button');find.setAttribute('aria-label','找一找');find.tabIndex=0;find.onclick=openFind;find.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openFind()}};
 const searchTab=byId('37:8254');searchTab.setAttribute('role','button');searchTab.setAttribute('aria-label','搜索标签');searchTab.tabIndex=0;searchTab.onclick=openSearch;searchTab.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openSearch()}};
 const search=byId('37:8272');search.contentEditable='true';search.setAttribute('role','textbox');search.setAttribute('aria-label','搜索');search.setAttribute('data-placeholder','常用站点');
 const enable=byId('I37:8288;60:12215');enable.setAttribute('role','button');enable.tabIndex=0;enable.onclick=()=>{byId('I37:8288;60:12208').querySelector('p')!.textContent='相册备份已开启';enable.querySelector('p')!.textContent='已开启'};
 for(const id of ['I37:8288;70:11788','37:6281']){const el=byId(id);if(el){el.setAttribute('role','button');el.setAttribute('aria-label','关闭');el.tabIndex=0;el.onclick=()=>{const card=el.closest('[data-node-id="37:8288"], [data-node-id="37:6271"]');if(card)(card as HTMLElement).style.display='none'}}}
 for(const n of document.querySelectorAll('[data-name="首页内容卡片"]')){(n as HTMLElement).style.overflowX='auto';n.querySelectorAll(':scope > [data-name="显示区域"]').forEach(e=>(e as HTMLElement).style.overflow='visible')}
 const modal=document.getElementById('action') as HTMLDialogElement;
 for(const id of ['37:5883','37:8283','37:8284','37:8285','37:8286']){const el=byId(id);el.setAttribute('role','button');el.tabIndex=0;const open=()=>{document.getElementById('action-title')!.textContent=el.textContent?.trim()||'';modal.showModal()};el.onclick=open;el.onkeydown=e=>{if(e.key==='Enter')open()}}
}
