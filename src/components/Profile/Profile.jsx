import './Profile.css'

const Profile = ({ host, image }) => {

    return (
        <div className='profile'>
            <div className='profile__container'>
                <div className='profile__container__name'>
                    <h1 className='profile__container__h1'>{host ? host.name : null}</h1>
                </div>
                <div className='profile__container__image' style={host?{ backgroundImage: `url(${host.picture})` }:null} />
            </div>
        </div>
    )
}

export default Profile