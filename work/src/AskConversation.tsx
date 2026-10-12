import React from 'react';
import ResourceList from './ResourceList';
import FolderPicker from './FolderPicker';
import {resourceResult} from './resourceResult';
const resultAssets={"imgArrowChevronRight": "./assets/cb21c4e5-a78d-429d-a91c-f2779e1ccb26.svg", "img2025IcLinkfile32": "./assets/7107dec3-73bf-4ed0-b97c-ef6700dce198.svg"};
const assets={"img2025IcCommonHelpNormal48":"./assets/3e865758-1406-41dc-a0b9-bacbcbc8524f.svg","img2025IcCommonBackNormal48":"./assets/547a40d3-9f43-46e0-8869-8d4879bb8eca.svg","imgRightSide":"./assets/a174c90c-68da-4c39-b555-143a933b9860.svg","imgImage336":"./assets/66db4c93-c0c4-4e17-96f9-450203ffaf99.png","img":"./assets/f7a7e146-8450-46aa-b84e-7db24a16d407.svg","imgMessageVoice":"./assets/dc5cdcf5-610b-4a77-9526-b63fdfe7369f.svg","imgMessageExpression":"./assets/a27c6407-5616-4fd3-aef1-120848399084.svg","imgAddCircle":"./assets/c2668341-039d-4fa4-92d0-a49bcc6dd44b.svg","img2025IcCommonHelpNormal49":"./assets/ec4c3b58-3145-47e4-97fb-a571670835d3.svg","imgTimeCircle":"./assets/c2d6159a-39f9-4cac-995b-342e64b4b0fe.svg","img1":"./assets/4681a104-d76e-4edd-8d76-6ce9152a70b4.svg","imgFrame2119903382":"./assets/ed411ce6-871d-4b04-99e5-d660e8627811.svg","img2":"./assets/8ebd4ca6-30b8-4eb5-9ed3-185e2532c7c2.svg","imgGroup2119903444":"./assets/94aa9a17-97b9-4eb1-8d40-a4950b285e13.svg","imgVector":"./assets/543ec843-019c-4f38-9d0d-e77783892a77.svg","img2025IcCommonPagerNextNormal48":"./assets/411ad633-359b-48e9-8542-8b0a49481ba8.svg","imgVector5896":"./assets/c1b6e2a6-b44b-45d8-9fa5-a9ba594a0323.svg","imgVector5897":"./assets/22265071-c356-41d4-b1c9-2d74908b6689.svg"};
const duration=13026;
function easing(value:any):string{return Array.isArray(value)?'cubic-bezier('+value.join(',')+')':value==='easeOut'?'ease-out':value||'linear'}
export default function AskConversation({question,onRestart,initiallyComplete=false,showAll=false,onShowAll}:{question:string,onRestart:()=>void,initiallyComplete?:boolean,showAll?:boolean,onShowAll:()=>void}){
 const result=resourceResult(question);
 const root=React.useRef<HTMLDivElement>(null);
 const [saved,setSaved]=React.useState('');
 const [picker,setPicker]=React.useState(false);
 const [complete,setComplete]=React.useState(initiallyComplete);
 const [expanded,setExpanded]=React.useState(false);
 const [details,setDetails]=React.useState(false);
 const reduced=initiallyComplete||matchMedia('(prefers-reduced-motion: reduce)').matches;
 const [stage,setStage]=React.useState(reduced?4:0);
 const [resultReady,setResultReady]=React.useState(reduced);
 React.useEffect(()=>{
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
 },[question,reduced]);
 if(showAll)return <ResourceList question={question}/>;
 return <div ref={root} className={"ask-conversation "+(complete?"ask-complete ":"")+(expanded?"ask-expanded":"")} data-node-id="37:8297">
  <div className="ask-time">13:56</div>
  <div className="ask-user"><p data-node-id="37:8303">{question}</p><div className="ask-user-avatar"><img data-node-id="37:8305" src={assets.imgImage336} alt="用户头像"/></div></div>
  <div className="ask-ai-avatar" data-node-id="37:8309"><img src={assets.img} alt="迅雷AI"/></div>
  {complete&&<button className="ask-completed-toggle" aria-expanded={expanded} onClick={()=>setExpanded(e=>!e)}>已完成任务 <span><img src={resultAssets.imgArrowChevronRight} alt="" style={{rotate:expanded?"90deg":"0deg"}}/></span></button>}
  <div className="ask-flow"><div className="ask-process-collapse"><div className="ask-process" data-node-id="37:8341">
   <div className="ask-progress-heading"><p>{stage===0?'准备中':stage===4?'资源整理完成':'正在查找相关资源'}</p></div>
   {[{check:'37:8350',text:'37:8354',status:'37:8356',label:'理解需求',image:assets.img1},{check:'37:8360',text:'37:8363',status:'37:8365',label:'检索可保存资源',image:assets.imgFrame2119903382},{check:'37:8369',text:'37:8372',status:'37:8374',label:result.type==='视频'?'校验集数与清晰度':result.type==='音频'?'校验音频与完整性':'校验文件与完整性',image:assets.img2}].slice(0,Math.min(stage,3)).map((step,index)=><div key={step.text} className={"ask-step "+(stage>index+1?"step-done":"step-active")}><div className="ask-step-title"><span data-node-id={step.check}>{stage>index+1?<img src={step.image} alt="完成"/>:<i className="thinking-spinner" aria-label="处理中"/>}</span><p data-node-id={step.text}>{step.label}</p></div><p className="ask-step-status" data-node-id={step.status}>{stage>index+1?'已完成':'处理中…'}</p></div>)}
   {stage===4&&<div className="ask-summary"><p data-node-id="37:8378">找到18个链接，去重剩余<span>12</span>个</p><p className="ask-step-status" data-node-id="37:8380">已完成</p></div>}
  </div>
  </div>
  {resultReady&&<div className="ask-results" data-node-id="37:8381">
   <div className="ask-best"><h2>最佳匹配</h2><div className="ask-file"><div className="ask-folder"><img src={result.type==='视频'?'./assets/results-folder.svg':'./assets/resource-'+(result.icon||'link')+'.svg'} alt={result.type+"资源"}/></div><div><p>{result.title}</p><div className="ask-meta">{result.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></div><div className="ask-actions"><button onClick={()=>setDetails(true)}>查看详情</button><button onClick={()=>setPicker(true)}>{saved?'已保存':'保存云盘'}</button></div></div>
   <button className="ask-all" onClick={onShowAll}><span>查看全部12个结果<img src={assets.img2025IcCommonPagerNextNormal48} alt=""/></span><small>已按匹配度排序</small></button>
  </div>}
  </div>
  {saved&&<p className="ask-save-notice" role="status">已保存到 {saved}（本地预览）</p>}
  {picker&&<FolderPicker title={result.title} onClose={()=>setPicker(false)} onSaved={path=>{setSaved(path);setPicker(false)}}/>}
  {details&&<div className="ask-details" role="dialog" aria-label="资源详情"><h2>{result.title}</h2><p>{result.tags.join(" · ")}</p><p>这是设计原稿的结果演示，尚未连接真实资源检索。</p><button onClick={()=>setDetails(false)}>关闭</button><button onClick={onRestart}>重新询问</button></div>}
 </div>
}

