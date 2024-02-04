import { ClassNameFormatter } from '@bem-react/classname';
import { FC } from 'react';

interface MenuBtnMessagesProps {
    handleClick: () => void;
    menuClass: ClassNameFormatter;
    isMenuExpanded: boolean;
    wrapperStyles: string;
    activeButton: 'Messages' | 'Settings';
}

const MenuBtnSettings: FC<MenuBtnMessagesProps> = ({
    handleClick,
    menuClass,
    isMenuExpanded,
    wrapperStyles,
    activeButton,
}) => {
    return (
        <button
            onClick={handleClick}
            className={menuClass(
                'SettingsWrapper',
                { active: activeButton === 'Settings' },
                wrapperStyles,
            )}
        >
            <div className={menuClass('Settings')}></div>
            {isMenuExpanded && (
                <div className={menuClass('Text')}>Настройки</div>
            )}
        </button>
    );
};

export default MenuBtnSettings;
