export type CloudFolder={id:string,name:string,parent:string|null,createdAt?:string};
export type CloudFile={id:string,name:string,parent:string|null,savedAt:string};
export type CloudData={folders:CloudFolder[],files:CloudFile[]};
export const CLOUD_KEY='xunlei-preview-cloud-v1';
export const CLOUD_EVENT='xunlei-cloud-updated';
export function readCloud():CloudData{
 try{
  const data=JSON.parse(localStorage.getItem(CLOUD_KEY)||'null');
  if(data&&Array.isArray(data.folders)&&Array.isArray(data.files)){
   const valid=(entry:any)=>entry&&typeof entry.id==='string'&&!!entry.id&&typeof entry.name==='string'&&!!entry.name.trim();
   const ids=new Set<string>();
   const folders:CloudFolder[]=data.folders.filter((entry:any)=>{if(!valid(entry)||ids.has(entry.id))return false;ids.add(entry.id);return true}).map((entry:any)=>({id:entry.id,name:entry.name,parent:typeof entry.parent==='string'?entry.parent:null,...(typeof entry.createdAt==='string'&&Number.isFinite(Date.parse(entry.createdAt))?{createdAt:entry.createdAt}:{})}));
   for(const folder of folders){
    const seen=new Set([folder.id]);let parent=folder.parent;
    while(parent){const ancestor=folders.find(item=>item.id===parent);if(!ancestor||seen.has(parent)){folder.parent=null;break}seen.add(parent);parent=ancestor.parent}
   }
   ids.clear();
   const files:CloudFile[]=data.files.filter((entry:any)=>{if(!valid(entry)||ids.has(entry.id))return false;ids.add(entry.id);return true}).map((entry:any)=>({id:entry.id,name:entry.name,parent:folders.some(folder=>folder.id===entry.parent)?entry.parent:null,savedAt:typeof entry.savedAt==='string'?entry.savedAt:''}));
   return {folders,files};
  }
 }catch{}
 return {folders:[{id:'video',name:'影视资源',parent:null},{id:'study',name:'学习资料',parent:null}],files:[]};
}
export function cloudPath(data:CloudData,parent:string|null){const names:string[]=[];const seen=new Set<string>();let folder=data.folders.find(f=>f.id===parent);while(folder&&!seen.has(folder.id)){seen.add(folder.id);names.unshift(folder.name);folder=data.folders.find(f=>f.id===folder!.parent)}return ['我的云盘',...names].join('/')}
export type SaveOutcome={savedCount:number,skippedCount:number};
export function saveFeedback(path:string,outcome:SaveOutcome){if(!outcome.savedCount)return '此文件夹已保存过，无需重复保存';if(outcome.skippedCount)return '新增'+outcome.savedCount+'项，跳过'+outcome.skippedCount+'项已保存内容';return '已保存'+outcome.savedCount+'项到 '+path}
