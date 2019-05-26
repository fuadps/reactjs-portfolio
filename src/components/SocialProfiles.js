import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = (props) => {
    const {link,image} = props.socialprofiles;
    return (
        <span>
            <a href={link} ><img src={image} alt='connect_icon' style={{width:35,height:35,margin:10}} /></a>
        </span>
    )
}

const SocialProfiles = () => ( 
    <div>
        <h3>Connect with me!</h3>
        {
            SOCIAL_PROFILES.map(socialProfile => {
                return (
                <SocialProfile key={socialProfile.id} socialprofiles={socialProfile}/>
                )
            })
        }
    </div>
)
export default SocialProfiles;
