import * as React from 'react';
import { hoc } from '../containers/home';
import { IProps } from '../constants/home';
import '../styles/home.scss';
import { MenuCardsComponent } from '../../../components/menucards/index';

const  items = [
    {width:1,height:1,children:<div>1</div>},
    {width:2,height:2,children:<div>2</div>},
    {width:1,height:1,children:<div>3</div>},
    {width:1,height:1,children:<div>4</div>},
    {width:2,height:3,children:<div>5</div>},
]
export class HomeComponent extends React.Component<IProps, any> {
    
    render() {
        return (
            <div className="main-content">
                主页面
                <MenuCardsComponent items={items}/>
            </div>
        );
    }
}

export const HomeComponentWithHoc = hoc(HomeComponent);