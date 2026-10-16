export type ResourceResult={title:string,type:string,tags:string[],icon?:'link'|'pdf'|'zip'|'web'};
function classifyResource(question:string):ResourceResult{
 const q=question.trim();
 const quoted=q.match(/[《「“"]([^》」”"]+)[》」”"]/);
 const subject=quoted?.[1]||q.replace(/^(?:请|麻烦)?(?:帮我|给我|我要|我想)?(?:找一下|找一找|查找|搜索|找|搜)/,'').replace(/^(一部|一套|一个|一些)/,'').trim()||'相关资源';
 const title=quoted?`《${subject}》`:subject;
 if(/\.(?:rmvb|mp4|mkv|avi|mov|wmv)\b|视频/i.test(q))return {title,type:'视频',tags:[]};
 if(/https?:\/\/|www\.|网址|网站|网页|链接|HTML/i.test(q))return {title:subject,type:'网址',tags:['网页链接','可保存'],icon:'web'};
 if(/资料包|压缩包|资源包|合集包|ZIP|RAR|7z/i.test(q))return {title,type:'资料包',tags:['资料包','压缩文件'],icon:'zip'};
 if(/有声|音频|听书|播客|mp3|flac|wav|m4a/i.test(q))return {title:/有声|听书/.test(q)?title.replace(/有声书$/,'')+'有声书':title,type:'音频',icon:'link',tags:/被讨厌的勇气/.test(q)?['全55集','内存小']:['有声书','音频资源']};
 if(/PDF|EPUB|MOBI|AZW3|DOCX?|PPTX?|XLSX?|电子书|学习|资料|练习|文档|书籍/i.test(q))return {title:/PDF/i.test(q)?title:title.replace(/电子书$/,'')+'电子书与资料',type:'文档',icon:'pdf',tags:[/PDF/i.test(q)?'PDF':'学习资料','文档资源']};
 if(/游戏|刺客信条|安装包/i.test(q))return {title:/游戏/.test(title)?title:title+'游戏资源',type:'游戏',tags:['安装包','游戏资源']};
 if(/电影|蓝光|4K|奥本海默|流浪地球/i.test(q))return {title,type:'视频',tags:[/4K/i.test(q)?'4K':'高清','电影资源']};
 if(/电视剧|全集|甄嬛传|漫长的季节/i.test(q))return {title:title.replace(/高清全集|全集$/,'')+'全集',type:'视频',tags:['全集','视频资源']};
 return {title,type:'文件',tags:['相关资源','可保存']};
}

// 标签描述资源类型；清晰度、格式等只使用输入中明确给出的信息。
export function resourceResult(question:string):ResourceResult{
 const result=classifyResource(question);
 const q=question.trim();
 const tags=['最匹配'];
 const format=q.match(/\b(PDF|EPUB|MOBI|AZW3|DOCX?|PPTX?|XLSX?|ZIP|RAR|7Z|MP3|FLAC|WAV|M4A|RMVB|MP4|MKV|AVI|MOV|WMV)\b/i)?.[1]?.toUpperCase();
 const kind=result.type==='音频'?(/有声|听书/.test(q)?'有声书':'音频'):result.type==='文档'?(/电子书|EPUB|MOBI|AZW3/i.test(q)?'电子书':'文档'):result.type==='资料包'?'资料包':result.type==='网址'?'网址':result.type==='视频'?'视频':result.type==='游戏'?'游戏':'文件';
 tags.push(kind);
 if(format)tags.push(format);
 if(result.type==='视频'){
  const quality=q.match(/4K|2160[Pp]|1080[Pp]|720[Pp]/i)?.[0]?.toUpperCase();
  if(quality)tags.push(quality);
  if(/中文字幕/.test(q))tags.push('中文字幕');
  if(/全集/.test(q))tags.push('全集');
 }
 const resourceTitle=result.type==='视频'&&/全集/.test(q)&&!result.title.endsWith('全集')?result.title+'全集':result.title;
 return {...result,title:resourceTitle,tags};
}
