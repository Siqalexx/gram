import { ClassNameFormatter } from '@bem-react/classname';
import { FC } from 'react';

interface MenuBtnMessagesProps {
    handleClick: () => void;
    menuClass: ClassNameFormatter;
    isMenuExpanded: boolean;
}

const MenuBtnExpand: FC<MenuBtnMessagesProps> = ({
    handleClick,
    menuClass,
    isMenuExpanded,
}) => {
    return (
        <button
            onClick={handleClick}
            className={menuClass('ButtonOpenWrapper', {
                expanded: isMenuExpanded,
            })}
        >
            <div
                className={menuClass('ButtonOpen', {
                    expanded: isMenuExpanded,
                })}
            ></div>
        </button>
    );
};

export default MenuBtnExpand;
