import img from '../img/avatar.avif';

function ProfilePhoto({ freelancer }) {
    const defaultPhoto = img;

    return (
        <div>
            {freelancer?.foto_perfil ? (
                <img
                    src={freelancer.foto_perfil}
                    alt={`${freelancer?.nome_freelancer || "Usuário Padrão"}`}
                />
            ) : (
                <img 
                    src={defaultPhoto} 
                    alt="Foto padrão do usuário"
                />
            )}
        </div>
    );
}

export default ProfilePhoto;
