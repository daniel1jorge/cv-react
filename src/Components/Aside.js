import { allData as data } from '../datos'
import { IoLogoWhatsapp,IoIosPin,IoIosAt } from 'react-icons/io';
import imagen from '../images/perfil.jpg'

function Aside() {
    return (
      <div className='w3-third'>
        <AsideImage/>
        <AsideInfo/>
      </div>
    ); 
}
export default Aside;

function AsideImage() {
    return (
      <div className='w3-white w3-text-grey w3-card-4 w3-center' >
        <div className='w3-display-container'>
          <img src={imagen} style={{width:'90%'}} alt="imagen"/>
          <div className="w3-display-bottomleft w3-container w3-text-black w3-center">
            <h2 style={{color:'#fff',padding:10}}>{data.firstName} {data.lastName}</h2>
          </div>
        </div>
        <br/>
      </div>
      
    ); 
}

function AsideInfo() {
  return (
    <div className="w3-container">
          <h2><i className="w3-margin-right w3-large w3-text-teal"></i>{data.profession}</h2>
          <p><i className="w3-margin-right w3-large w3-text-teal"></i><IoIosAt style={{fontSize:32}}/>{data.email}</p>
          <p><i className="w3-margin-right w3-large w3-text-teal"></i><IoIosPin style={{fontSize:32}}/>{data.address.city} - {data.address.street}</p>
          <TelCelular/>
          <br/>
         
          <p className="w3-large w3-text-theme"><b><i className="w3-margin-right w3-text-teal"></i>Idioma</b></p>
          <Languages/>
          <br/>
          <br/>
          <br/>
          <br/>
          <SocialMedia/>

          
    </div>
  ); 
}

export function TelCelular(){
let filterNumbers = data.phone.filter(tel => tel.type === 'celular');
    return (
      <div>
      {filterNumbers.map((tel, index) => (
        <div key={index}><p><i className="w3-margin-right w3-large w3-text-teal"></i><IoLogoWhatsapp style={{color:'green', fontSize:32}}/> {tel.area}{tel.numero}</p>
        </div>))}
      </div>

    );
}

export function Languages(){
      return (
        <div>
        {data.languages.map((lang, index) => (
          <div key={index}><p><i className="w3-margin-right w3-large w3-text-teal"></i>{lang.language.toUpperCase()} - Nivel: {lang.level}</p>
          </div>))}
        </div>
      );
  }

  export function SocialMedia(){
    return (
      <div className='w3-center'>
      {data.socialNetworks.map((social, index) => (
        <div key={index} className="w3-display-container"><p><i ></i><a target='_blank' rel="noreferrer" href={social.link}><img src={social.icon} style={{width:'40%'}} alt={social.icon}/></a></p>
        </div>
        ))}
      </div>
    );
}
