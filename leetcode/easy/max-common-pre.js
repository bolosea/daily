/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const min = strs.reduce((p,c)=>p.length<c.length?p:c,strs[0])
  if(!min)return ''
  let len = min.length
  let maxCommon = min[0]
  let res = ''
  for (let i = 1; i < len+1; i++) {
    const every = strs.every(s=>s.startsWith(maxCommon))
    if(every){
      console.log('maxCommon',maxCommon)
      res = maxCommon
      maxCommon += min[i]
      continue
    }else{
      return res
    }
  }
  return res
};
console.log(longestCommonPrefix(["aflower","flow","flowight"]));
