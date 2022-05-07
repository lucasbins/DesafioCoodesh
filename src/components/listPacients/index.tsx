import { useEffect, useState } from "react";
import { Pacient } from '../../interfaces/pacient'
import { CreateList } from "./createList";

export function ListPacients() {
  const [pacients, setPacients] = useState<Pacient>()
  const url = "https://randomuser.me/api/?results=50"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((pacients) => {
        setPacients(pacients)
      });
  }, []);

  return <CreateList results={pacients?.results} />;
}