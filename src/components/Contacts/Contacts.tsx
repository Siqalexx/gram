import React, { ChangeEvent, useContext, useState } from 'react';
import './contacts.scss'
import { cn } from '@bem-react/classname'
import Contact from '../Contact/Contact';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { Iuser } from '../../store/store';

interface ContactsProps {
    
}

const Contacts: React.FC<ContactsProps> = observer(() => {
    const { store } = useContext(Context)
    const [search, setSearch] = useState<string>('');
    const contactsClass=cn('Contacts');
    const [searchResults, setSearchResults] = React.useState<Iuser[]>([]);
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
     };
    React.useEffect(() => {
       const results = store.users.filter(user =>
         user.name.toLowerCase().includes(search.toLowerCase())
       );
       setSearchResults(results);
     }, [search,store.users]);
    return (
        <div className={contactsClass()}>
            <div className={contactsClass('SearchWrapper')}>
                <input onChange={handleChange} value={search} placeholder='Поиск' className={contactsClass('SearchBar')} type="text"></input>
            </div>
            <div className={contactsClass('List')}>
            {searchResults.map((user)=>{
                return <Contact key={user.id} user={user}></Contact>
            })}
            </div>
        </div>
    );
});

export default Contacts;