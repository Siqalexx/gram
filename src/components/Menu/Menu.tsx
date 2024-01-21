import React, { useContext, useState } from 'react';
import { cn } from '@bem-react/classname'
import avatarProfile from '../../images/Avatar_small.svg'
import './menu.scss'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

type ActiveButton = 'Messages' | 'Settings';

interface MenuProps {
    
}

const Menu: React.FC<MenuProps> = observer(() => {

    const menuClass = cn('Menu');
    const [activeButton, setActiveButton] = useState<ActiveButton>('Messages')
    const [isMenuExpanded, setMenuExpanded] = useState<boolean>(false)
    const { store } = useContext(Context)
    const handlerSettings = () => {
        setActiveButton('Settings')
        alert('В разработке')
    }
    return (
        <div className={menuClass({ expanded: isMenuExpanded })}>
           <div className={menuClass('Shell')}> 
                <img src={avatarProfile} alt='Аватар пользователя' className={menuClass('Avatar', { expanded: isMenuExpanded })}></img>
                {isMenuExpanded && <div className={menuClass('Name')}>Ivan Ivanov</div>}
                {isMenuExpanded && <div className={menuClass('Status')}><span className={menuClass('StatusBar')}></span>Online</div>}
                
                <button onClick={()=>{
                    setActiveButton('Messages')
                }} className={menuClass('MessagesWrapper',{active: activeButton === 'Messages'}, menuClass('Wrapper', { expanded: isMenuExpanded }))}> 
                    <div className={menuClass('Messages')}>
                        {!isMenuExpanded && <div className={menuClass('MessagesCounter')}>{store.getUnreadMessagesCount()}</div>}
                    </div>
                    {isMenuExpanded && <div className={menuClass('Text')}>Диалоги</div>}
                    {isMenuExpanded && <div className={menuClass('MessagesCounter', {expanded: isMenuExpanded})}>{store.getUnreadMessagesCount()}</div>}
                </button>

                <button onClick={handlerSettings} className={menuClass('SettingsWrapper', {active: activeButton === 'Settings'}, menuClass('Wrapper', { expanded: isMenuExpanded }))}>
                    <div className={menuClass('Settings')}></div>
                    {isMenuExpanded && <div className={menuClass('Text')}>Настройки</div>}
                    
                </button>
            </div>
            <button onClick={()=>setMenuExpanded(prevState => !prevState)} className={menuClass('ButtonOpenWrapper',{ expanded: isMenuExpanded })}>
                <div className={menuClass('ButtonOpen',{ expanded: isMenuExpanded })}></div>
            </button>
        </div>
    );
});

export default Menu;