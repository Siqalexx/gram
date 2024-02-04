import { ClassNameFormatter } from '@bem-react/classname';
import { FC } from 'react';

interface MenuBtnMessagesProps {
    handleClick: () => void;
    menuClass: ClassNameFormatter;
    isMenuExpanded: boolean;
    unreadMessagesCount: number;
    wrapperStyles: string;
    activeButton: 'Messages' | 'Settings';
}

const MenuBtnMessages: FC<MenuBtnMessagesProps> = ({
    handleClick,
    menuClass,
    isMenuExpanded,
    unreadMessagesCount,
    wrapperStyles,
    activeButton,
}) => {
    return (
        <button
            onClick={handleClick}
            className={menuClass(
                'MessagesWrapper',
                { active: activeButton === 'Messages' },
                wrapperStyles,
            )}
        >
            <div className={menuClass('Messages')}>
                {!isMenuExpanded && (
                    <div className={menuClass('MessagesCounter')}>
                        {unreadMessagesCount}
                    </div>
                )}
            </div>
            {isMenuExpanded && <div className={menuClass('Text')}>Диалоги</div>}
            {isMenuExpanded && (
                <div
                    className={menuClass('MessagesCounter', {
                        expanded: isMenuExpanded,
                    })}
                >
                    {unreadMessagesCount}
                </div>
            )}
        </button>
    );
};

export default MenuBtnMessages;
