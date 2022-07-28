import Avatar from '../img/foto.jpg';

import '../styles/components/sidebar.sass';

const SideBar = () => {
    return <aside id="sidebar">
            <img src={Avatar} alt="Fabrício Lopes" />
            <p className="titles">Desenvolvedor Front-End</p>
            <p>redes sociais</p>
            <p>informações de contato</p>
            <a href="" className="btn">Download currículo</a>
        </aside>
};

export default SideBar;