import {resourceResult} from './resourceResult';
// The prototype has no search backend. Preserve the explicit save-failure demo,
// and stop inventing resource lists when the query cannot be classified.
export function hasNoSearchResults(question:string){const q=question.trim();if(['测试搜不到','测试无结果'].includes(q))return true;if(q==='测试保存失败')return false;return resourceResult(q).type==='文件'}
