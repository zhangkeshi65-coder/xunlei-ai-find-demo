import React from 'react';
import ResourceList from './ResourceList';
import FileBrowser from './FileBrowser';
import FolderPicker from './FolderPicker';
import {resourceResult} from './resourceResult';
import {saveFeedback} from './cloudStore';
import useCloudData from './useCloudData';
import {hasNoSearchResults} from './searchOutcome';
const resultAssets={"imgArrowChevronRight": "./assets/cb21c4e5-a78d-429d-a91c-f2779e1ccb26.svg", "img2025IcLinkfile32": "./assets/7107dec3-73bf-4ed0-b97c-ef6700dce198.svg"};
const assets={"img2025IcCommonHelpNormal48":"./assets/3e865758-1406-41dc-a0b9-bacbcbc8524f.svg","img2025IcCommonBackNormal48":"./assets/547a40d3-9f43-46e0-8869-8d4879bb8eca.svg","imgRightSide":"./assets/a174c90c-68da-4c39-b555-143a933b9860.svg","imgImage336":"./assets/66db4c93-c0c4-4e17-96f9-450203ffaf99.png","img":"./assets/f7a7e146-8450-46aa-b84e-7db24a16d407.svg","imgMessageVoice":"./assets/dc5cdcf5-610b-4a77-9526-b63fdfe7369f.svg","imgMessageExpression":"./assets/a27c6407-5616-4fd3-aef1-120848399084.svg","imgAddCircle":"./assets/c2668341-039d-4fa4-92d0-a49bcc6dd44b.svg","img2025IcCommonHelpNormal49":"./assets/ec4c3b58-3145-47e4-97fb-a571670835d3.svg","imgTimeCircle":"./assets/c2d6159a-39f9-4cac-995b-342e64b4b0fe.svg","img1":"./assets/4681a104-d76e-4edd-8d76-6ce9152a70b4.svg","imgFrame2119903382":"./assets/ed411ce6-871d-4b04-99e5-d660e8627811.svg","img2":"./assets/8ebd4ca6-30b8-4eb5-9ed3-185e2532c7c2.svg","imgGroup2119903444":"./assets/94aa9a17-97b9-4eb1-8d40-a4950b285e13.svg","imgVector":"./assets/543ec843-019c-4f38-9d0d-e77783892a77.svg","img2025IcCommonPagerNextNormal48":"./assets/411ad633-359b-48e9-8542-8b0a49481ba8.svg","imgVector5896":"./assets/c1b6e2a6-b44b-45d8-9fa5-a9ba594a0323.svg","imgVector5897":"./assets/22265071-c356-41d4-b1c9-2d74908b6689.svg"};
const duration=13026;
function easing(value:any):string{return Array.isArray(value)?'cubic-bezier('+value.join(',')+')':value==='easeOut'?'ease-out':value||'linear'}
export type SearchControl={stop:()=>void};
export default function AskConversation({question,onRestart,onEdit,onRetry,initiallyComplete=false,showAll=false,onShowAll,controlRef,onRunningChange}:{question:string,onRestart:()=>void,onEdit:(question:string)=>void,onRetry:()=>void,initiallyComplete?:boolean,showAll?:boolean,onShowAll:()=>void,controlRef:React.Ref<SearchControl>,onRunningChange:(running:boolean)=>void}){
 const result=resourceResult(question);
 const noResults=hasNoSearchResults(question);
 const resourceTags=result.tags.filter(tag=>tag!=='最匹配');
 const root=React.useRef<HTMLDivElement>(null);
 const cloud=useCloudData();
 const saved=cloud.files.some(file=>file.name===result.title);
 const userMessage=React.useRef<HTMLDivElement>(null);
 const resourceScroll=React.useRef(0);
 const [saveNotice,setSaveNotice]=React.useState('');
 const [picker,setPicker]=React.useState(false);
 const [complete,setComplete]=React.useState(initiallyComplete);
 const [expanded,setExpanded]=React.useState(false);
 const [stopped,setStopped]=React.useState(false);
 const [details,setDetails]=React.useState(false);
 const reduced=initiallyComplete||matchMedia('(prefers-reduced-motion: reduce)').matches;
 const [stage,setStage]=React.useState(reduced?4:0);
 const [resultReady,setResultReady]=React.useState(reduced);
 const running=!complete&&!resultReady&&!stopped;
 React.useImperativeHandle(controlRef,()=>({stop:()=>{
  if(!running)return;
  setStopped(true);setComplete(true);setExpanded(false);setResultReady(false);
 }}),[running]);
 React.useEffect(()=>{onRunningChange(running)},[running,onRunningChange]);
 React.useEffect(()=>()=>onRunningChange(false),[onRunningChange]);
 React.useEffect(()=>{
  if(stopped)return;
  if(reduced){setComplete(true);return}
  const timers=[
   window.setTimeout(()=>setStage(1),700),
   window.setTimeout(()=>setStage(2),2300),
   window.setTimeout(()=>setStage(3),4000),
   window.setTimeout(()=>setStage(4),5600),
   window.setTimeout(()=>setResultReady(true),6100),
   window.setTimeout(()=>setComplete(true),7100)
  ];
  return ()=>timers.forEach(clearTimeout);
 },[question,reduced,stopped]);
 React.useLayoutEffect(()=>{
  const message=userMessage.current,container=root.current;if(!message||!container)return;
  const measure=()=>container.style.setProperty('--ask-message-extra',Math.max(0,message.offsetHeight-38)+'px');
  measure();const observer=new ResizeObserver(measure);observer.observe(message);return()=>observer.disconnect();
 },[question,showAll]);
 React.useEffect(()=>{if(!saveNotice)return;const timer=window.setTimeout(()=>setSaveNotice(''),3000);return()=>clearTimeout(timer)},[saveNotice]);
 if(showAll&&!noResults&&!stopped)return <ResourceList question={question} scrollPosition={resourceScroll}/>;
 return <div ref={root} className={"ask-conversation "+(complete?"ask-complete ":"")+(expanded?"ask-expanded":"")} data-node-id="37:8297">
  <div className="ask-time">13:56</div>
  <div ref={userMessage} className="ask-user"><p data-node-id="37:8303">{question}</p><div className="ask-user-avatar"><img data-node-id="37:8305" src={assets.imgImage336} alt="用户头像"/></div></div>
  <div className="ask-ai-avatar" data-node-id="37:8309"><img src={assets.img} alt="迅雷AI"/></div>
  {complete&&<button className="ask-completed-toggle" aria-expanded={expanded} onClick={()=>setExpanded(e=>!e)}>{stopped?'已停止查找':noResults?'未找到资源':'已完成任务'} <span><img src={resultAssets.imgArrowChevronRight} alt="" style={{rotate:expanded?"90deg":"0deg"}}/></span></button>}
  {running&&<div className="ask-running-status"><span>正在查找</span></div>}
  <div className="ask-flow"><div className="ask-process-collapse"><div className="ask-process" data-node-id="37:8341">
   <div className="ask-progress-heading"><p>{stopped?'查找已停止':stage===0?'准备中':stage===4?(noResults?'查找已结束':'资源信息已整理'):'正在整理资源信息'}</p></div>
   {[{check:'37:8350',text:'37:8354',status:'37:8356',label:'理解需求',image:assets.img1},{check:'37:8360',text:'37:8363',status:'37:8365',label:'整理候选资源',image:assets.imgFrame2119903382},{check:'37:8369',text:'37:8372',status:'37:8374',label:noResults?'整理查找结果':'汇总文件信息',image:assets.img2}].slice(0,Math.min(stage,3)).map((step,index)=><div key={step.text} className={"ask-step "+(stage>index+1?"step-done":stopped?"step-stopped":"step-active")}><div className="ask-step-title"><span data-node-id={step.check}>{stage>index+1?<img src={step.image} alt="完成"/>:stopped?<span className="thinking-stopped">·</span>:<i className="thinking-spinner" aria-label="处理中"/>}</span><p data-node-id={step.text}>{step.label}</p></div><p className="ask-step-status" data-node-id={step.status}>{stage>index+1?'已完成':stopped?'已停止':'处理中…'}</p></div>)}
   {stage===4&&!stopped&&<div className="ask-summary"><p data-node-id="37:8378">{noResults?'暂未找到匹配的资源，可以换个关键词再试试':'资源列表已整理，可查看文件或比较资源'}</p><p className="ask-step-status" data-node-id="37:8380">已完成</p></div>}
  </div>
  </div>
  {stopped&&<section className="ask-empty" aria-label="查找已停止"><h2>已停止本次查找</h2><p>可以修改关键词，或重新开始查找。</p><div><button onClick={()=>onEdit(question)}>修改关键词</button><button onClick={onRetry}>重新查找</button></div></section>}
  {resultReady&&!stopped&&noResults&&<section className="ask-empty" aria-label="没有搜索结果"><h2>暂时没找到相关资源</h2><p>试试更准确的名称，或加上资源类型，例如“片名＋电影”“书名＋有声书”。</p><div><button onClick={()=>onEdit(question)}>修改关键词</button><button onClick={onRetry}>重新搜索</button></div></section>}
  {resultReady&&!stopped&&!noResults&&<div className="ask-results" data-node-id="37:8381">
   <div className="ask-best"><h2>推荐资源</h2><div className="ask-file"><div className="ask-folder"><img src={result.type==='视频'?'./assets/results-folder.svg':'./assets/resource-'+(result.icon||'link')+'.svg'} alt={result.type+"资源"}/></div><div><p>{result.title}</p><div className="ask-meta">{resourceTags.map(tag=><span key={tag}>{tag}</span>)}</div></div></div><div className="ask-actions"><button onClick={()=>setDetails(true)}>查看文件</button><button onClick={()=>setPicker(true)}>{saved?'已保存':'保存云盘'}</button></div></div>
   <button className="ask-all" onClick={onShowAll}><span>查看全部资源<img src={assets.img2025IcCommonPagerNextNormal48} alt=""/></span><small>比较不同版本与来源</small></button>
  </div>}
  </div>
  {saveNotice&&<p className="ask-save-notice" role="status">{saveNotice}</p>}
  {picker&&<FolderPicker title={result.title} onClose={()=>setPicker(false)} onSaved={(path,outcome)=>{setSaveNotice(saveFeedback(path,outcome));setPicker(false)}}/>}
  {details&&<FileBrowser question={question} onBack={()=>setDetails(false)}/>}
 </div>
}

