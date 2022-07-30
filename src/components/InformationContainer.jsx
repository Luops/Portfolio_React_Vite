import {AiFillPhone, AiFillEnvironment, AiFillMail, AiOutlineMail} from 'react-icons/ai';


import '../styles/components/informationcontainer.sass';


const InformationContainer = () => {
    return <section id='information'>
            <div className='info-card'>
                <AiFillPhone id='phone-icon'/>
                <div>
                    <h3>Telefone</h3>
                    <p>(51) 98938-6458</p>
                </div>
            </div>
            <div className='info-card'>
                <AiOutlineMail id='email-icon'/>
                <div>
                    <h3>E-mail</h3>
                    <p id='email'>Fabrício.rioslopes@gmail.com</p>
                </div>
            </div>
            <div className='info-card'>
                <AiFillEnvironment id='pin-icon'/>
                <div>
                    <h3>Localização</h3>
                    <p>Gravataí - RS</p>
                </div>
            </div>
    </section>
};

export default InformationContainer;
