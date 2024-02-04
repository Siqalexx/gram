import React, { FC, useContext, useState } from 'react';
import { cn } from '@bem-react/classname';
import avatarProfile from '../../images/avatars/avatarProfile.png';
import './menu.scss';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import MenuBtnMessages from '../MenuBtnMessages/MenuBtnMessages';
import MenuBtnSettings from '../MenuBtnSettings/MenuBtnSettings';
import MenuBtnExpand from '../MenuBtnExpand/MenuBtnExpand';

type ActiveButton = 'Messages' | 'Settings';

const Menu: FC = observer(() => {
    const [activeButton, setActiveButton] = useState<ActiveButton>('Messages');
    const menuClass = cn('Menu');
    const { store } = useContext(Context);
    const wrapperStyles = menuClass('Wrapper', {
        expanded: store.isMenuExpanded,
    });
    const handlerSettings = () => {
        setActiveButton('Settings');
        alert('В разработке');
    };
    const handlerMessages = () => {
        setActiveButton('Messages');
    };

    return (
        <div className={menuClass({ expanded: store.isMenuExpanded })}>
            <div className={menuClass('Shell')}>
                <img
                    src={avatarProfile}
                    alt="Аватар пользователя"
                    className={menuClass('Avatar', {
                        expanded: store.isMenuExpanded,
                    })}
                ></img>
                {store.isMenuExpanded && (
                    <div className={menuClass('Name')}>Ivan Ivanov</div>
                )}
                {store.isMenuExpanded && (
                    <div className={menuClass('Status')}>
                        <span className={menuClass('StatusBar')}></span>Online
                    </div>
                )}

                <MenuBtnMessages
                    handleClick={handlerMessages}
                    menuClass={menuClass}
                    isMenuExpanded={store.isMenuExpanded}
                    unreadMessagesCount={store.unreadMessagesCount}
                    wrapperStyles={wrapperStyles}
                    activeButton={activeButton}
                />

                <MenuBtnSettings
                    handleClick={handlerSettings}
                    menuClass={menuClass}
                    isMenuExpanded={store.isMenuExpanded}
                    wrapperStyles={wrapperStyles}
                    activeButton={activeButton}
                />
            </div>
            <MenuBtnExpand
                handleClick={() => store.changeMenuExpanded()}
                menuClass={menuClass}
                isMenuExpanded={store.isMenuExpanded}
            />
        </div>
    );
});

export default Menu;
