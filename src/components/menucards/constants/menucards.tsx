interface position {
    key?: string;
    x?: string;
    y?: string;
    actualWidth?: string;
    actualHeight?: string;
}

interface item {
    width?: number;//宽度占几个单位
    height?: number;//高度占几个单位
    children?: JSX.Element; // 子集
    postion?: position;//定位
}
//基础属性
export interface baseIprops {
    unitWidth?: string ; // 宽/每格
    unitHeight?: string ; // 高/每格
    direction?: string; // 排布方式  row:横向，column：竖向
    isAdaption?: boolean; // 是否自适应单向个数 true：自适应 false：不自适应
    space?: string ; // 间隙的距离
    unitMax?: number //单向最大数量
    containerLength?: number; // 组件的长度
    items?: Array<item>;//具体的数组
}
export interface IProps extends baseIprops{
    id?:string;
    initProps?:()=>void;//初始化props
    init?:()=>void;
}
