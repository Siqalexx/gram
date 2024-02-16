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

const MenuBtnMessages: FC<MenuBtnMessagesProps> = observer((props) => {
    const { store } = useContext(Context);

    return (
        <button
            onClick={props.handleClick}
            className={props.menuClass(
                'MessagesWrapper',
                { active: props.activeButton === 'Messages' },
                props.wrapperStyles,
            )}
        >
            <span className={props.menuClass('Messages')}>
                {!store.isMenuExpanded && (
                    <span className={props.menuClass('MessagesCounter')}>
                        {store.unreadMessagesCount}
                    </span>
                )}
            </span>

            {store.isMenuExpanded && (
                <>
                    <span className={props.menuClass('Text')}>Диалоги</span>
                    <span
                        className={props.menuClass('MessagesCounter', {
                            expanded: store.isMenuExpanded,
                        })}
                    >
                        {store.unreadMessagesCount}
                    </span>
                </>
            )}
        </button>
    );
});

export default MenuBtnMessages;
