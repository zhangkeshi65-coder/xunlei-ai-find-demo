import React from 'react';
export default function VoiceMode({onClose}:{onClose:()=>void}){
 const [holding,setHolding]=React.useState(false),[cancel,setCancel]=React.useState(false),[hint,setHint]=React.useState('');
 const start=React.useRef(0);
 return <div className={'voice-mode '+(cancel?'voice-cancel':'')} data-node-id="37:13690">
  <img className="voice-art" src="./assets/5cc6c40e-1d45-4236-855a-9d775fa5baeb.svg" alt=""/>
  <button className="voice-touch" aria-label="按住说话，上移取消" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);start.current=e.clientY;setHolding(true);setHint('')}} onPointerMove={e=>{if(holding)setCancel(e.clientY<start.current-60)}} onPointerUp={()=>{setHolding(false);if(cancel){setHint('已取消');setCancel(false)}else setHint('语音模式演示，暂未接入识别')}} onPointerCancel={()=>{setHolding(false);setCancel(false)}}>
   <span className="voice-instruction">{cancel?'松手取消':'松手发送，上移取消'}</span><span className="voice-bars" aria-hidden="true">{Array.from({length:47},(_,i)=><i key={i} style={{opacity:i<3||i>43?.3:i<5||i>41?.6:1}}/>)}</span>
  </button>
  {hint&&<p className="voice-hint" role="status">{hint}</p>}
  
 </div>
}
