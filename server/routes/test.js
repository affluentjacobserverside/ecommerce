function find_max(nums){
    let max_num = Number.NEGATIVE_INFINITY;
    for (let num of nums){
        if(num > max_num){
            // missing line here
            max_num += num;
        }
    }
    return max_num;
}
find_max(6);