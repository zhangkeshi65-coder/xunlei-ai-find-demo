// Without a live search backend, an unclassified name is not evidence of zero
// results. Only explicit demo commands enter the empty-result state.
export function hasNoSearchResults(question:string){return ['测试搜不到','测试无结果'].includes(question.trim())}
