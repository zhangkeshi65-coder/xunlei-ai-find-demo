import React from 'react';
import AskConversation from './AskConversation';
import Keyboard from './Keyboard';
import VoiceMode from './VoiceMode';
import HistoryPanel,{HISTORY_KEY,HistoryEntry} from './HistoryPanel';
const assets={"img2025IcCommonHelpNormal48":"./assets/640bc40a-6306-44e7-9fde-092b0453a3b5.svg","img2025IcCommonSearchNormal48":"./assets/bb2cc836-3013-4e13-836a-d0c51dde7fd3.svg","img2025IcCommonBackNormal48":"./assets/d7e21780-a492-42c0-bdf6-229a141fe51e.svg","imgFrame2085662804":"./assets/457ae75d-e46d-45a4-8875-900f1fd28cc3.svg","imgRightSide":"./assets/82bf0733-93bc-42de-9376-50d2c03d088b.svg","imgImage347":"./assets/ddbeb7f3-c3f8-45bf-a1bc-b7d8144a35f7.png","imgImage348":"./assets/08c053ad-74c7-451e-b2cf-a28f05683b04.png","imgImage349":"./assets/83dabaf7-b37f-43f4-b654-122689809fcc.png","imgImage345":"./assets/603fc9b8-fcd7-406d-8941-1cda017a4cae.png","imgMessageVoice":"./assets/bc41cd6e-4194-4256-8e35-8cbab43ddf6f.svg","imgMessageExpression":"./assets/a406d635-e7d4-4b0e-99d3-c40db938581d.svg","imgAddCircle":"./assets/38b402ac-9fe2-4545-ba5b-4a7f3d0f46a4.svg","img04SparkGradient1":"./assets/593f9ab1-5cae-4a79-9a73-95562f25c4b1.svg"};
const GREETING='想看的、想学的，说一句就能找';
const choices=[
 {id:'37:7939',image:assets.imgImage347,label:'追剧不等更，找高清全集',query:'帮我找《甄嬛传》高清全集',start:.568,end:.668},
 {id:'37:7943',image:assets.imgImage348,label:'今晚看什么？找部高清电影',query:'找一部高清电影',start:.616,end:.716},
 {id:'37:7947',image:assets.imgImage349,label:'学习少走弯路，找资料和好书',query:'找一套学习资料和电子书',start:.664,end:.764},
 {id:'37:7951',image:assets.imgImage345,label:'想玩的游戏，帮我找一找',query:'找刺客信条游戏',start:.712,end:.812}
];
export default function FindPage({onBack}:{onBack:()=>void}){
 const root=React.useRef<HTMLDivElement>(null);
 const input=React.useRef<HTMLInputElement>(null);
 const introPlayed=React.useRef(false);
 const [allResults,setAllResults]=React.useState(false);
 const [historyOpen,setHistoryOpen]=React.useState(false);
 const [history,setHistory]=React.useState<HistoryEntry[]>(()=>{try{return JSON.parse(localStorage.getItem(HISTORY_KEY)||'[]')}catch{return []}});
 const [message,setMessage]=React.useState('');
 const [voice,setVoice]=React.useState(false);
 const [keyboard,setKeyboard]=React.useState(false);
 const nativeKeyboard=typeof navigator!=='undefined'&&/iPhone|iPad|Android/i.test(navigator.userAgent);
 const closeKeyboard=()=>{setKeyboard(false);input.current?.blur()};
 const openVoice=()=>{closeKeyboard();setVoice(true)};
 const pressKey=(key:string)=>{if(key==='Enter'){if(message.trim())submit(message);else closeKeyboard()}else if(key==='Backspace')setMessage(m=>Array.from(m).slice(0,-1).join(''));else setMessage(m=>m+key)};
 const [ask,setAsk]=React.useState<HistoryEntry|null>(null);
 const submit=(question:string)=>{if(!question.trim())return;const entry={question:question.trim(),key:Date.now()};setAllResults(false);setAsk(entry);setHistory(previous=>{const next=[entry,...previous].slice(0,100);try{localStorage.setItem(HISTORY_KEY,JSON.stringify(next))}catch{}return next});setMessage('');setKeyboard(false);input.current?.blur()};
 React.useLayoutEffect(()=>{
  if(ask||introPlayed.current)return;
  introPlayed.current=true;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const animations:Animation[]=[];
  root.current!.querySelectorAll<HTMLElement>('.find-char').forEach((el,i)=>{
   const start=(100+i*70.58824920654297)/2500,end=(100+i*70.58824920654297+70.588)/2500;
   animations.push(el.animate([{opacity:0,offset:0},{opacity:0,offset:start,easing:'cubic-bezier(0,0,.58,1)'},{opacity:1,offset:end},{opacity:1,offset:1}],{duration:2500,iterations:1,fill:'both'}));
  });
  root.current!.querySelectorAll<HTMLElement>('.find-choice').forEach((el,i)=>{
   const {start,end}=choices[i];
   animations.push(el.animate([{opacity:0,transform:'translateY(8px)',offset:0},{opacity:0,transform:'translateY(8px)',offset:start,easing:'ease-out'},{opacity:1,transform:'translateY(0)',offset:end},{opacity:1,transform:'translateY(0)',offset:1}],{duration:2500,iterations:1,fill:'both'}));
  });
  return ()=>animations.forEach(a=>a.cancel());
 },[ask]);
 return <div ref={root} className={"find-screen "+(allResults?"viewing-all-results ":"")+(keyboard?"keyboard-open ":"")+(voice?"voice-open":"")} data-node-id="37:7721">
  <div className="find-status"><span>9:41</span><img src={assets.imgRightSide} alt="信号、无线网络和电量"/></div>
  <nav className="find-nav"><button aria-label="返回首页" onClick={()=>voice?setVoice(false):keyboard?closeKeyboard():allResults?setAllResults(false):ask?setAsk(null):onBack()}><img src={assets.img2025IcCommonBackNormal48} alt=""/></button><h1>找一找</h1><button aria-label="历史记录" onClick={()=>{closeKeyboard();setHistoryOpen(true)}}><img src="./assets/c2d6159a-39f9-4cac-995b-342e64b4b0fe.svg" alt=""/></button></nav>
  {!voice&&(!ask?<section className="find-welcome">
   <div className="find-greeting"><div className="find-avatar"><img src={assets.img04SparkGradient1} alt="迅雷AI"/></div><p data-node-id="37:7936" aria-label={GREETING}>{Array.from(GREETING).map((c,i)=><span key={i} className="find-char" aria-hidden="true">{c}</span>)}</p></div>
   <div className="find-choices">{choices.map(c=><button key={c.id} className="find-choice" data-node-id={c.id} onClick={()=>submit(c.query)}><img src={c.image} alt=""/><span>{c.label}</span></button>)}</div>
  </section>:<AskConversation key={ask.key} question={ask.question} initiallyComplete={ask.completed} onRestart={()=>setAsk(null)} showAll={allResults} onShowAll={()=>setAllResults(true)}/>)}
  {!voice&&!allResults&&<form className="find-composer" onSubmit={e=>{e.preventDefault();submit(message)}}>
   <div className="find-input"><button type="button" aria-label="语音输入" onPointerDown={e=>e.preventDefault()} onClick={openVoice}><img src={assets.imgMessageVoice} alt=""/></button><input ref={input} aria-label="发消息" onFocus={()=>{if(!nativeKeyboard)setKeyboard(true)}} onKeyDown={e=>{if(e.key==='Escape')closeKeyboard()}} placeholder="发消息…" value={message} onChange={e=>setMessage(e.target.value)}/><button type="button" aria-label="表情" onClick={()=>setMessage(m=>m+'😊')}><img src={assets.imgMessageExpression} alt=""/></button><button type={message.trim()?"submit":"button"} aria-label={message.trim()?"发送询问":"添加"} onClick={()=>{if(!message.trim())input.current?.focus()}}><img src={assets.imgAddCircle} alt=""/></button></div>
  </form>}
  {keyboard&&!voice&&<Keyboard onKey={pressKey} onClose={closeKeyboard}/>}
  {voice&&<VoiceMode onClose={()=>setVoice(false)}/>}
  {historyOpen&&<HistoryPanel entries={history} onClose={()=>setHistoryOpen(false)} onSelect={entry=>{setAllResults(false);setAsk({...entry,key:Date.now()});setHistoryOpen(false);setVoice(false)}}/>}
  <div className="find-home-indicator"><span/></div>
 </div>
}

