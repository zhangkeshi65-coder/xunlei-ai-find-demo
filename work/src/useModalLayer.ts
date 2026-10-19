import React from 'react';
// Keep keyboard interaction inside the active sheet and return focus to its trigger.
export default function useModalLayer(ref:React.RefObject<HTMLElement|null>,onDismiss:()=>void){
 const dismiss=React.useRef(onDismiss);dismiss.current=onDismiss;
 React.useEffect(()=>{
  const previous=document.activeElement as HTMLElement|null;
  const panel=ref.current;if(!panel)return;
  const focusable=()=>Array.from(panel.querySelectorAll<HTMLElement>('button:not(:disabled),input:not(:disabled),[tabindex="0"]')).filter(el=>el.getClientRects().length>0);
  if(!panel.contains(document.activeElement))(focusable()[0]||panel).focus();
  const key=(event:KeyboardEvent)=>{
   if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();dismiss.current();return}
   if(event.key!=='Tab')return;
   const items=focusable(),first=items[0],last=items[items.length-1];
   if(!first){event.preventDefault();panel.focus();return}
   if(event.shiftKey&&(document.activeElement===first||!panel.contains(document.activeElement))){event.preventDefault();last.focus()}
   else if(!event.shiftKey&&(document.activeElement===last||!panel.contains(document.activeElement))){event.preventDefault();first.focus()}
  };
  document.addEventListener('keydown',key,true);
  return()=>{document.removeEventListener('keydown',key,true);if(previous?.isConnected)previous.focus()};
 },[ref]);
}
