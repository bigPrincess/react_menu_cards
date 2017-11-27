import { compose, withHandlers, lifecycle, withState } from "recompose";
import { IProps, baseIprops, calculate, position } from '../constants/menucards';
import { calculateLength } from "./calculate";

let defaultProps: baseIprops;
let chessboard = new Array(), calculate: calculate;
export const hoc = compose<IProps, any>(
    withState("id", "setId", Math.random().toString(36).substr(2)),
    withState("dataSource","setDataSource",[]),
    withHandlers({
        calculatePosition: (props: IProps) => {
            return (item) => {
                let position:position = {};
                let primaryLen = ((calculate.direction == "row") ? item.width : item.height);
                let secondaryLen = ((calculate.direction == "row") ?  item.height :item.width);
                const valid = (primary , secondary)=>{
                    for(let i = primary ; i < primary + primaryLen ; i ++ ){
                        for(let j = secondary ;j < secondary + secondaryLen ; j ++ ){
                            if(chessboard[i] && chessboard[i][j] && chessboard[i][j]){
                                return false;
                            }
                        }
                    }
                    return true;
                }
                // 次方向上的循环
                for (let j = 0; ; j++) {
                    // 主方向上的循环
                    for (let i = 0; i < calculate.unitMax; i++) {
                        if(!valid(i,j)){
                            continue;
                        };
                        for(let primary = i ; primary < i + primaryLen ; primary ++ ){
                            for(let secondary = j ;secondary < j + secondaryLen ; secondary ++ ){
                                if(!chessboard[primary]){
                                    chessboard[primary] = new Array();
                                }
                                chessboard[primary][secondary]= item.key;
                            }
                        }
                        position.x = (calculate.direction == "row") ? calculate.unitWidth * i :  calculate.unitHeight * i;
                        position.y = (calculate.direction == "row") ? calculate.unitHeight * j : calculate.unitWidth * j ;
                        position.actualWidth  = item.width * calculate.unitWidth;
                        position.actualHeight = item.height * calculate.unitHeight;
                        return position;
                    }
                }
            }
        }
    }),
    withHandlers({
        initProps: (props: IProps) => {
            return () => {
                let content = document.getElementById(props.id);
                defaultProps = {
                    unit:props.unit ? props.unit : "px",
                    unitWidth: props.unitWidth ? props.unitWidth : 100,
                    unitHeight: props.unitHeight ? props.unitHeight : 100,
                    direction: props.direction ? props.direction : "row",
                    isAdaption: props.isAdaption ? props.isAdaption : true,
                    space: props.space ? props.space : 20,
                    unitMax: props.unitMax ? props.unitMax : 5,
                    containerLength: props.direction == "column" ? content.offsetHeight : content.offsetWidth
                }
                return defaultProps;
            }
        },
        initPosition: (props: IProps) => {
            return () => {
                let key = 1 ;
                let items =  props.items;
                items.map(item => {
                    //计算该项的位置
                    item.key = key ++ ;
                    item.position = props.calculatePosition(item);
                })
                props.setDataSource(items);
            }
        }
    }),
    withHandlers({
        init: (props: IProps) => {
            return () => {
                calculate = calculateLength(props.initProps());
                props.initPosition(calculate);
                for( let i = 0 ; i < calculate.unitMax ; i ++){
                    chessboard[i] = new Array();
                }
            }
        }

    }),
    lifecycle({
        componentDidMount: function () {
            this.props.init();
        }
    })
);