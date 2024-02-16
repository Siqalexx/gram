import { ClassNameFormatter } from '@bem-react/classname';
import { FC, useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

interface MenuBtnMessagesProps {
    handleClick: () => void;
    menuClass: ClassNameFormatter;
}

const MenuBtnExpand: FC<MenuBtnMessagesProps> = observer((props) => {
    const { store } = useContext(Context);

    return (
        <button
            onClick={props.handleClick}
            className={props.menuClass('ButtonOpenWrapper', {
                expanded: store.isMenuExpanded,
            })}
        >
            <span
                className={props.menuClass('ButtonOpen', {
                    expanded: store.isMenuExpanded,
                })}
            ></span>
        </button>
    );
});

export default MenuBtnExpand;
