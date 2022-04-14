import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name : 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform{
    transform(list:any, args: any = '') {
        if(args.length < 0){
            return list;
        }else{
            return list.filter((hero:any) => hero.name.toLowerCase().includes(args.toLowerCase()))
        }
    }
}