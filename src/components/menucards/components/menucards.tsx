import * as React from 'react';
import { hoc } from '../containers/menucards';
import { IProps } from '../constants/menucards';
import '../styles/menucards.scss';

export class MenuCardsComponent  extends React.Component<IProps, any> {
    render() {
        return (
            <div className="menucards-content" id={this.props.id}>
                这个是插件的主要的地方
            </div>
        );
    }
}

export const MenuCardsComponentWithHoc = hoc(MenuCardsComponent);