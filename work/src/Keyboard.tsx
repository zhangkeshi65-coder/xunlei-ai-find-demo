import React from 'react';
export default function Keyboard({onKey,onClose}:{onKey:(key:string)=>void,onClose:()=>void}){
 const [shift,setShift]=React.useState(true);
 const [numeric,setNumeric]=React.useState(false);
 const rows=numeric?['1234567890','-/:;()$&@"','.,?!\'']:['QWERTYUIOP','ASDFGHJKL','ZXCVBNM'];
 const key=(label:string,value=label,cls='')=><button key={label} className={cls} type="button" onPointerDown={e=>e.preventDefault()} onClick={()=>onKey(value)}>{label}</button>;
 return <div className="ios-keyboard" aria-label="屏幕键盘" onPointerDown={e=>e.preventDefault()}>
  {rows.map((row,i)=><div key={i} className={'key-row row-'+i}>{i===2&&<button className={'key-special '+(shift?'key-shift-on':'')} onClick={()=>setShift(s=>!s)} aria-label="切换大小写">⇧</button>}{Array.from(row).map(c=>key(numeric||shift?c:c.toLowerCase()))}{i===2&&key('⌫','Backspace','key-special')}</div>)}
  <div className="key-row key-bottom"><button className="key-special" onClick={()=>setNumeric(n=>!n)}>{numeric?'ABC':'123'}</button>{key('space',' ','key-space')}{key('return','Enter','key-special key-return')}</div>
  <div className="key-tools"><button aria-label="表情键盘" onClick={()=>onKey('😊')}>☻</button><button aria-label="收起键盘" onClick={onClose}><svg width="22" height="30" viewBox="0 0 22 30" fill="none"><rect x="7" y="1" width="8" height="17" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M3 12v3a8 8 0 0016 0v-3M11 23v6M6 29h10" stroke="currentColor" strokeWidth="2"/></svg></button></div>
 </div>
}
