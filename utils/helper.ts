/**
 * sub page containing specific selectors and methods for a specific page
 */
class Helper {
  public checkIfSameArray(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  public checkIfArrayIsSortedInReverse(arr) {
    if (arr.length < 2) {
      return true;
    }
    for (let i = 0; i < arr.length - 1; ++i) {
      if (Number(arr[i]) < Number(arr[i + 1])) return false;
    }
    return true;
  }
}

export default new Helper();
