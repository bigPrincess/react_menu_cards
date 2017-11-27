import * as React from 'react';
import { hoc } from '../containers/menucards';
import { IProps } from '../constants/menucards';
import '../styles/menucards.scss';

export class MenuCardsComponent  extends React.Component<IProps, any> {
    render() {
        console.log(this.props.items);
        return (
            <div className="menucards-content" id={this.props.id}>
                {this.props.items.map(item=>{
                    if(!item.position){
                        return;
                    }
                    return  <div className="children" style={{
                        width:item.position.actualWidth,
                        height:item.position.actualHeight,
                        left:item.position.x,
                        top:item.position.y
                    }}>{item.children}</div>
                })}
            </div>
        );
    }
}

export const MenuCardsComponentWithHoc = hoc(MenuCardsComponent);