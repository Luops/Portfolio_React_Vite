import Avatar from '../img/foto.jpg';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

const SideBar = () => {
    return <aside id="sidebar">
            <img src={Avatar} alt="Fabrício Lopes" />
            <p className="title">Desenvolvedor Front-End</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download currículo</a>
        </aside>
};

export default SideBar;