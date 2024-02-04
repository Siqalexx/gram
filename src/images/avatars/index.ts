import ivanAvatar from './avatarMan.png';
import fedorAvatar from './avatarOK.png';
import mikhailAvatar from './avatarMan.png';
import dmitriyAvatar from './Joyful-man.png';
import vasiliyAvatar from './avatarOK.png';
import nadejdaAvatar from './avatarGirl1.png';
import marinaAvatar from './avatarGirl2.png';
type Avatars = {
    ivanAvatar: string;
    fedorAvatar: string;
    mikhailAvatar: string;
    dmitriyAvatar: string;
    vasiliyAvatar: string;
    nadejdaAvatar: string;
    marinaAvatar: string;

    [key: string]: string; // Сигнатура индекса
};
const avatars: Avatars = {
    ivanAvatar,
    fedorAvatar,
    mikhailAvatar,
    dmitriyAvatar,
    vasiliyAvatar,
    nadejdaAvatar,
    marinaAvatar,
};
export default avatars;
