# AngularQuickSort

## Usage: 
 1. Create a new instance of the QuickSort (sort). They can be injected using Angular's DI, or created manually if necessary. 
 1. Choose a type of object to sort. (T)
 1. Choose a comparison algorithm for your array's type. It will be called in this way: compare(a,b). If the result is less than 0, a shall be sorted to be "before" b. anything else will be after. A and B must be of type T (or a subclass / implementing class)
 1. Create an array of objects of type T to be sorted (list).
 1. Call result = sort.sort(list);
  
  
## Notes: 
* This sort will not maintain the order of items that compare as Equal. A 0 result from the comparison method is equivalent to a result of 1. 
* This is not an in place sort. Approximate time to sort ten million results of Math.random was under two seconds, so the performance improvements were not deemed worth it. 
* Because it is not an in place sort, the initial list passed in will not be disturbed.
* The algorithm is recurisve. Limitations to the stack may be relevant. 
* It does not have any significant error handling. If one of the items in the array is null, unless the sort algorithm can handle that, the algorithm will blow up. Try/Catch would slow it down.
* Performance will be worst if the list is already sorted. Big O of N Squared. This is true of most quicksorts. If there is a string chance the list will already be in order, checking before calling quicksort would be prudent. 
