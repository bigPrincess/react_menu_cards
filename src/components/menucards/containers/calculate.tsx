import { baseIprops } from "../constants/menucards";
import { BigNumber } from 'bignumber.js';

/**
 *  根据属性计算每一项的值
 * @param baseiprops 
 */
export const calculateLength = (baseiprops: baseIprops) => {

    /** 计算实际的每个元素的宽高,以及间隙**/
    let unitWidth = (baseiprops.unit === "rem") ? (baseiprops.unitWidth * 75) : baseiprops.unitWidth;
    let unitHeight = (baseiprops.unit === "rem")  ? baseiprops.unitHeight * 75 : baseiprops.unitHeight;
    let space = (baseiprops.unit === "rem")  ? baseiprops.space * 75 : baseiprops.space;

    /** 计算实际的一行放置的数量  **/
    let unitLength, unitMax = 1;
    if (baseiprops.direction == "row") {
        unitLength = new BigNumber(unitWidth)
    } else {
        unitLength = new BigNumber(unitHeight)
    }
    for (let i = baseiprops.unitMax; i > 0; i++) {
        let containerLength = unitLength.times(i);
        if (containerLength.greaterThanOrEqualTo(baseiprops.containerLength)) {
            continue;
        }
        unitMax = i;
        break;
    }

    let value = {
        unitWidth, unitHeight, space, unitMax,
        direction: baseiprops.direction, // 排布方式  row:横向，column：竖向
        isAdaption: baseiprops.isAdaption, // 是否自适应单向个数 true：自适应 false：不自适应
        containerLength: baseiprops.containerLength // 组件的长度
    };
    return value;
}

/**
 * 根据值计算某一项的位置
 */
