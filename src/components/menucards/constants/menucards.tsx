export interface position {
    x?: number;
    y?: number;
    actualWidth?: number;
    actualHeight?: number;
}

interface item {
    key?: number;
    width?: number;//宽度占几个单位
    height?: number;//高度占几个单位
    children?: JSX.Element; // 子集
    position?: position;//定位
}
//基础属性
export interface baseIprops {
    unit?:string; //"rem","px"
    unitWidth?: number ; // 宽/每格
    unitHeight?: number ; // 高/每格
    direction?: string; // 排布方式  row:横向，column：竖向
    isAdaption?: boolean; // 是否自适应单向个数 true：自适应 false：不自适应
    space?: number ; // 间隙的距离
    unitMax?: number //单向最大数量
    containerLength?: number; // 组件的长度
    items?: Array<item>;//具体的数组
}

//基础属性
export interface calculate {
    unitWidth: number ; // 宽/每格
    unitHeight: number ; // 高/每格
    direction?: string; // 排布方式  row:横向，column：竖向
    isAdaption?: boolean; // 是否自适应单向个数 true：自适应 false：不自适应
    space: number ; // 间隙的距离
    unitMax: number //单向最大数量
    containerLength: number; // 组件的长度
}

export interface IProps extends baseIprops{
    id?:string;
    calculate?:calculate;
    setCalculate?:Function;
    initPosition?:(calculate)=>void; //初始化位置
    calculatePosition?:(any)=>position; // 计算某一项的具体位置
    initProps?:()=>baseIprops;//初始化props
    init?:()=>void;
}
