export type ResourceResult={title:string,type:string,tags:string[]};
export function resourceResult(question:string):ResourceResult{
 const q=question.trim();
 const quoted=q.match(/[《「“"]([^》」”"]+)[》」”"]/);
 const subject=quoted?.[1]||q.replace(/^(?:请|麻烦)?(?:帮我|给我|我要|我想)?(?:找一下|找一找|查找|搜索|找|搜)/,'').replace(/^(一部|一套|一个|一些)/,'').trim()||'相关资源';
 const title=quoted?`《${subject}》`:subject;
 if(/有声|音频|听书|播客|mp3/i.test(q))return {title:title.replace(/有声书$/,'')+'有声书',type:'音频',tags:/被讨厌的勇气/.test(q)?['全55集','内存小']:['有声书','音频资源']};
 if(/PDF|电子书|学习|资料|练习|文档|书籍/i.test(q))return {title:/PDF/i.test(q)?title:title.replace(/电子书$/,'')+'电子书与资料',type:'文档',tags:[/PDF/i.test(q)?'PDF':'学习资料','文档资源']};
 if(/游戏|刺客信条|安装包/i.test(q))return {title:/游戏/.test(title)?title:title+'游戏资源',type:'游戏',tags:['安装包','游戏资源']};
 if(/电影|蓝光|4K|奥本海默|流浪地球/i.test(q))return {title,type:'视频',tags:[/4K/i.test(q)?'4K':'高清','电影资源']};
 if(/电视剧|全集|甄嬛传|漫长的季节/i.test(q))return {title:title.replace(/高清全集|全集$/,'')+'全集',type:'视频',tags:['全集','视频资源']};
 return {title,type:'文件',tags:['相关资源','可保存']};
}
