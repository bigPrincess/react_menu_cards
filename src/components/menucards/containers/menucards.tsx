import { compose, withHandlers, lifecycle, withState } from "recompose";
import { IProps, baseIprops } from '../constants/menucards';
import { calculateLength } from "./calculate";

let defaultProps:baseIprops;
export const hoc = compose<IProps, any>(
    withState("id","setId",Math.random().toString(36).substr(2)),
    withHandlers({
        initProps:(props:IProps)=>{
            return ()=>{
                let content = document.getElementById(props.id);
                defaultProps = {
                    unitWidth : props.unitWidth ? props.unitWidth : "100px",
                    unitHeight : props.unitHeight ? props.unitHeight : "100px",
                    direction :props.direction ? props.direction : "row",
                    isAdaption:props.isAdaption ? props.isAdaption:true,
                    space:props.space ? props.space:"20px",
                    unitMax:props.unitMax ? props.unitMax:5,
                    containerLength: props.direction == "column" ?  content.offsetHeight : content.offsetWidth
                }
                return defaultProps;
            }
        },
        initPosition:(props:IProps)=>{
            return ()=>{
                
            }
        }
    }),
    withHandlers({
        init:(props:IProps)=>{
            return ()=>{
                calculateLength(props.initProps());
            }
        }
        
    }),
    lifecycle({
        componentDidMount:function(){
           this.props.init();
        }
    })
);