import { Id, Location, ResultsEntity } from "../../interfaces/pacient";

interface PacientDetailsProps {
  pacient: ResultsEntity
}

export function PacientDetails ({pacient}: PacientDetailsProps){
  const avatar: string = pacient.picture.large
  const fullName: string = `${pacient.name.title}. ${pacient.name.first} ${pacient.name.last}`
  const email: string =  pacient.email
  const gender: string = pacient.gender
  const phone: string = pacient.phone
  const nat: string = pacient.nat
  const loc: Location = pacient.location
  const id: Id = pacient.id

  const date = new Date(pacient?.dob.date)
  const birth: string = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

  return ( 
    <div className="flex flex-col items-center justify-center">
      <img src={avatar} alt="avatar" className="rounded-full" />
      <span className="font-bold text-2xl my-5">{fullName}</span>
      <div>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Birth:</strong> {birth}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Nationality:</strong> {nat}</p>
        <p><strong>Location:</strong> {`${loc.street.name}, ${loc.street.number} - ${loc.city} - ${loc.state}`}</p>
        <p><strong>Country:</strong> {loc.country}</p>
        <p><strong>PostCode:</strong> {loc.postcode}</p>
        <p>{id.name ? <p><strong>{id.name}</strong>: {id.value}</p> : ``}</p>
      </div>
    </div>
  )
}

/*Devemos exibir os seguintes campos do paciente:

URL para compartilhamento */