import { TestBed, async } from '@angular/core/testing';

import {QuickSort} from './quick-sort';
describe('QuickSort', () => {
    it("fails properly",()=>{
        try{
            let sort:QuickSort = new QuickSort();
            sort.Sort(null,null);
        }
        catch(e){
            let err:Error = e as Error;
            expect(err.message.indexOf("Must")).toEqual(0);
        }
    });

    it("sorts a single number",()=>{
        let sort:QuickSort = new QuickSort();
        let list:Array<number> = [];
        list.push(1);
        let result = sort.Sort(list,sort.compareNumbers);
        expect(result.length).toEqual(1);
    });


    it("sorts two numbers",()=>{
        let sort:QuickSort = new QuickSort();
        let list:Array<number> = [];
        list.push(1);
        list.push(2);
        let result = sort.Sort(list,sort.compareNumbers);
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual(1);
        expect(result[1]).toEqual(2);
    });

    it("sorts ten numbers",()=>{
        let sort:QuickSort = new QuickSort();
        let list:Array<number> = [];
        list.push(1);
        list.push(2);
        list.push(7);
        list.push(8);
        list.push(4);
        list.push(0);
        list.push(5);
        list.push(6);
        list.push(9);
        list.push(3);
        let result = sort.Sort(list,sort.compareNumbers);
        expect(result.length).toEqual(10);
        for(let x:number=0;x<10;x++){
            expect(result[x]).toEqual(x);
        }
        
    });


    it("sorts ten million numbers",()=>{
        let sort:QuickSort = new QuickSort();
        let list:Array<number> = [];
        for(let x:number = 0;x<1000000;x++){
            list.push(Math.random());
        }
        let result = sort.Sort(list,sort.compareNumbers);
        expect(result.length).toEqual(1000000);
        var initial = 0;
        for(let x:number=0;x<10;x++){
            expect(result[x]>= initial).toEqual(true);
            initial = result[x];
        }
        
    });
});