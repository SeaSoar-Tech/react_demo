

var merge = function(nums1, m, nums2, n) {
    if(n === 0) return

    const tmp = Array(m+n).fill(0)
    let l = 0, r = 0, k = 0
    while(l < m && r < n){
        if(nums1[l] < nums2[r]){
            tmp[k++] = nums1[l++]
        }else{
            tmp[k++] = nums2[r++]
        }
    }

    while(l < m){
        tmp[k++] = nums1[l++]
    }

    while(r < n){
        tmp[k++] = nums2[r++]
    }

    for(let i = 0; i < m+n; i++){
        nums1[i] = tmp[i]
    }
}



//test
// const nums1 = [1,2,3,0,0,0]
// const nums2 = [2,5,6]
// const m = 3, n = 3


// const nums1 = [1]
// const nums2 = []
// const m = 1, n = 0


const nums1 = [0]
const nums2 = [1]
const m = 0, n = 1

merge(nums1, m, nums2, n)
console.log(nums1);