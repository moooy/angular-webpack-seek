/**
 * 工具类
 */
export class Utils{
    /**
     * 合并两个对象
     * @param dst
     * @param src
     */
    static mixin(dst:Object,src:Object){
        if(!(dst && src))
            return;
        var result = new Object();
        for(var attr in dst){
            result[attr] = src[attr] ? src[attr] :dst[attr];
        }
        return result;
    }

    static firstLetterToUpperCase(s:string):string{
       return  s.charAt(0).toUpperCase()+ s.substr(1);
    }

}