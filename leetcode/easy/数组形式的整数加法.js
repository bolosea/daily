/**
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
示例 1：

输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
示例 2：

输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455
示例 3：

输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021
示例 4：

输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
输出：[1,0,0,0,0,0,0,0,0,0,0]
解释：9999999999 + 1 = 10000000000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
如果 A.length > 1，那么 A[0] != 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var addToArrayForm = function(A, K) {
  const klen = String(K).length
  const alen = A.length
  if (alen >= klen + 1) {
    let tmp = A.splice(-(klen + 1))
    let ts = String(Number(tmp.join('')) + K)
      .split('')
      .map(i => +i)
    if (ts.length == klen && tmp[0] === 0) {
      ts.unshift(0)
      return A.concat(ts)
    } else if (ts.length > tmp.length) {
      return addToArrayForm(A, ts[0])?.concat(ts.slice(1))
    } else if (ts.length === tmp.length) {
      return A.concat(ts)
    }
  } else if (klen >= alen) {
    return String(Number(A.join('')) + K)
      .split('')
      .map(i => +i)
  }
  return A
}