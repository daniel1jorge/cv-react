import { allData as data } from '../datos'

console.log(data)
function Main() {
  if( Object.keys(data).length === 0){
      return 'sin Datos Obtenidos...'
  }
  //return 'CON Usuarios...'
    return (
      <div className='w3-twothird'>
        <AboutMe/>
        <MainWork/>
        <MainEducation/>
      </div>
    );
  
}
export default Main;

function AboutMe() {
  return (
    <div className='w3-container w3-card w3-white w3-margin-bottom'>
      <h2 className="w3-text-grey w3-padding-16">Sobre Mi</h2>
        <div className="w3-container">
          <p>{data.descripcion}</p>
          
        </div>
    </div>
  ); 
}

function MainWork() {
  return (
    <div className='w3-container w3-card w3-white w3-margin-bottom'>
      <h2 className="w3-text-grey w3-padding-16"><i className="w3-margin-right w3-xxlarge w3-text-blue"></i>Experiencia Laboral</h2>
        <AllJobs/>
        <hr/>
    </div>
  ); 
}

export function AllJobs(){
      return (
        <>
        {data.experiences.map((jobs, index) => (
          <div className="w3-container" key={index}>
            <h5 className="w3-opacity"><b>{jobs.description}</b></h5>
            <h6 className="w3-text-blue"><i className="w3-margin-right"></i>{jobs.date_start} - {IsActual(jobs.date_end)}</h6>
            <p>{jobs.tasks}</p>
          </div>
          ))}
        </>
      );
  }

function IsActual(date){
  if(date ==='Actual'){ 
    return  <span className="w3-tag w3-blue w3-round">Actual</span> 
  }else{ 
    return date
  }
}

function MainEducation() {
  return (
    <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey w3-padding-16"><i className="w3-margin-right w3-xxlarge w3-text-blue"></i>educación</h2>
        <AllEstudie/>
    </div>
  ); 
}

function AllEstudie(){
  return (
    <>
    {data.studies.map((estudi, index) => (
      <div className="w3-container" key={index}>
        <h5 className="w3-opacity"><b>{estudi.description}</b></h5>
        <h6 className="w3-text-blue"><i className="w3-margin-right"></i>{estudi.date_start} - {IsActual(estudi.date_end)}</h6>
        <p>{estudi.tasks}</p>
      </div>
      ))}
      <br/>
    </>
  );
}