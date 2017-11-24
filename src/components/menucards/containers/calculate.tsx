import { baseIprops } from "../constants/menucards";
import { BigNumber } from 'bignumber.js';

export const calculateLength = (props: baseIprops) => {

    /** 计算实际的每个元素的宽高,以及间隙**/
    let unitWidth = props.unitWidth.indexOf("rem") ? Number(props.unitWidth) * 75 : Number(props.unitWidth);
    let unitHeight = props.unitHeight.indexOf("rem") ? Number(props.unitHeight) * 75 : Number(props.unitHeight);
    let space = props.space.indexOf("rem") ? Number(props.space) * 75 : Number(props.space);

    /** 计算实际的一行放置的数量  **/
    let unitLength, unitMax = 1;
    if (props.direction == "row") {
        unitLength = new BigNumber(props.unitWidth)
    } else {
        unitLength = new BigNumber(props.unitHeight)
    }
    for (let i = props.unitMax; i > 0; i++) {
        let containerLength = unitLength.times(i);
        if (containerLength.greaterThanOrEqualTo(props.containerLength)) {
            continue;
        }
        unitMax = i;
        break;
    }

    let value = {
        unitWidth, unitHeight, space, unitMax,
        direction: props.direction, // 排布方式  row:横向，column：竖向
        isAdaption: props.isAdaption, // 是否自适应单向个数 true：自适应 false：不自适应
        containerLength: props.containerLength // 组件的长度
    };
    return value;
}