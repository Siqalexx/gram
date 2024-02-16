import { ClassNameFormatter } from '@bem-react/classname';
import { FC, useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

interface MenuBtnMessagesProps {
    handleClick: () => void;
    menuClass: ClassNameFormatter;
    wrapperStyles: string;
    activeButton: 'Messages' | 'Settings';
}

const MenuBtnSettings: FC<MenuBtnMessagesProps> = observer((props) => {
    const { store } = useContext(Context);

    return (
        <button
            onClick={props.handleClick}
            className={props.menuClass(
                'SettingsWrapper',
                { active: props.activeButton === 'Settings' },
                props.wrapperStyles,
            )}
        >
            <span className={props.menuClass('Settings')}></span>
            {store.isMenuExpanded && (
                <span className={props.menuClass('Text')}>Настройки</span>
            )}
        </button>
    );
});

export default MenuBtnSettings;
