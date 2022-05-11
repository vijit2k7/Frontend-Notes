//Quick-Sort
[1,2,3,4,5,6]--->[],[2,3,4,5,6],[],[3,4,5,6]=>n^2 
let a=[4,6,2,5,7,8,1,3];
function partitioning(a,l,h)
{
    let p=a[l],i=l+1,j=h-1;
    while(i<j)
    {
       while(p>a[i])i++; 
       while(p<a[j])j--;
       if(i<j)
        swap(a,i,j);
    }
    swap(a,l,j);
    return j;
}

function quickSort(a,l,h)
{
    if(l<=h)
        return;
    let pivot=partitioning(a,l,h);
    quickSort(a,l,pivot-1); --->O(n)
    quickSort(a,pivot+1,h);
}

Time and space complexity analysis
1.For quicksort---> best case time complexity--->O(nlogn);
2.Worst case Time Complexity--->O(n^2);
3.Space Complexity--->O(n)
How to choose a pivot---> Either choose a random element
Choose pivot as the median--->dont guarantee O(nlogn)--->reduces the probablity of O(n^2);


i=1,j=7 pivot=4
[4,6,2,5,7,8,1,3]


i=5,j=4
[4,3,2,1,7,8,5,6]


i=5,j=4
[1,3,2,4,7,8,5,6]===> partitioning algo

[1,3,2] [7,8,5,6]

[1,3,2]===>[7,8,5,6]

[1,3,2]===>[] [3,2]

[1,3,2,4,7,8,5,6]---->[1,3,2]---[]
    |                   |
                        |
                        [3,2]
    |
    |
    [7,8,5,6]--->[8]
        [5,6]
        






//algo--->paritioning
merge sort
2parts---> Divide and conquer---> sort both arrays---> merge them--->recursively

quick sort algo
1. choose a pivot element
2. sort the pivot element using partitioning algo
3.once pivot is sorted ---> use divide and conquer----> split left and right
4. now array---> left array and right array
5.Apply partioning again----> 2 elements---> 1 left and 1 right
6. do it recursively----> till you get the final element---> leaf Node(1 element)





