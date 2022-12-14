import './style.css';

export function Card({name,time}){
  return (
    <div className='card'>
      <strong className='content'>Nome:  {name}</strong>
     <small> Horario: <br /> {time} </small>
     
      
    </div>
  )

}