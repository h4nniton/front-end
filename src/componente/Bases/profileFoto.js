import img from '../img/avatar.png';
import style from '../Css/profileFoto.module.css'

function ProfilePhoto({ freelancer }) {
    const defaultPhoto = img;

    return (
        <img
            src={freelancer?.foto_perfil || defaultPhoto}
            alt={freelancer?.nome_freelancer || "Usuário Padrão"}
            className={style.profilePhoto}
        />
    );
}

export default ProfilePhoto;
