import {Injectable} from '@angular/core'

@Injectable()
export class QuickSort {
    public compareNumbers:(x:number,y:number)=>number;
    public compareStrings:(x:string,y:string)=>number;

    constructor(){
        function compNums(num1:number,num2:number){return num2-num1;}
        function compStrs(num1:string,num2:string){return num1.localeCompare(num2);}

        this.compareNumbers = compNums;
        this.compareStrings = compStrs;
    }

    public NumericSort(items:Array<number>){
        return this.Sort(items,this.compareNumbers);
    }
    public AlphaSort(items:Array<string>){
        return this.Sort(items,this.compareStrings);
    }

    public Sort<T>(items :Array<T>,compare :(x:T,y:T) => number) : Array<T>{
        if(!items || !compare){
            throw new Error("Must have both an array to sort and a method for comparison.")
        }
        if(items.length <= 1){
            return items;
        }
        var pivotIx = items.length-1;
        var pivot = items[pivotIx];
        var lower:Array<T> = [];
        var higher:Array<T> = [];
        for(var x:number = 0;x<pivotIx;x++){
            if(compare(pivot,items[x])<0){
                lower.push(items[x]);
            }
            else{
                higher.push(items[x]);
            }
        }
        lower=this.Sort(lower,compare);
        higher=this.Sort(higher,compare);
        lower.push(pivot);
        for(var x:number=0;x<higher.length;x++){
            lower.push(higher[x]);
        }
        return lower;
    }
}
