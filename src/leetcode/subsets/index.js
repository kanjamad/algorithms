/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const dfs = (nums, start, length, selected = [], output = []) => {
  if (selected.length >= length || start >= nums.length) {
    if (selected.length === length) {
      output.push([...selected]);
    }
    return output;
  }
  for (let i = start; i < nums.length; i++) {
    selected.push(nums[i]);
    dfs(nums, i + 1, length, selected, output);
    selected.pop();
  }
  return output;
};

var subsets = function(nums) {
  const output = [];
  for (let length = 0; length <= nums.length; length++) {
    output.push(...dfs(nums, 0, length));
  }
  return output;
};
