import React from 'react';
import {CLOUD_EVENT,CLOUD_KEY,readCloud} from './cloudStore';
// Saved labels follow the same persistent records as the home cloud list.
export default function useCloudData(){
 const [data,setData]=React.useState(readCloud);
 React.useEffect(()=>{
  const refresh=()=>setData(readCloud());
  const onStorage=(event:StorageEvent)=>{if(!event.key||event.key===CLOUD_KEY)refresh()};
  window.addEventListener(CLOUD_EVENT,refresh);window.addEventListener('storage',onStorage);
  refresh();
  return ()=>{window.removeEventListener(CLOUD_EVENT,refresh);window.removeEventListener('storage',onStorage)};
 },[]);
 return data;
}
