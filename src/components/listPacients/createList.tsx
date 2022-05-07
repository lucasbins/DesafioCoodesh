import { ArrowClockwise } from "phosphor-react";
import { useState } from "react";
import { ResultsEntity } from "../../interfaces/pacient";
import { ButtonTable } from "./buttonTable";

interface resultProps {
  results?: ResultsEntity[]
}

export const CreateList = ({ results }: resultProps) => {
  const [itemEnd, setItemEnd] = useState(8)
  
  function getRows() {
    const rows = results?.slice(0, itemEnd)

    if (rows)
      return rows.map((pacient, i) => {
        var birth = new Date(pacient?.dob.date)
        var day = birth.getDay()
        var month = birth.getMonth()
        var year = birth.getFullYear()

        return (
          <tr key={pacient.login.uuid}>
            <td className="border-2 bg-zinc-100 border-slate-900  p-4 text-slate-900 " >
              {pacient.name.last + ', ' + pacient.name.first}
            </td>
            <td className="border-2 bg-zinc-100 border-slate-900 p-4 text-slate-900">
              {pacient.gender}
            </td>
            <td className="border-2 bg-zinc-100 border-slate-900 p-4 text-slate-900 ">
              {`${day}/${month}/${year}`}
            </td>
            <td className="border-2 bg-zinc-100 border-slate-900 p-4 text-slate-900">
              <ButtonTable pacient={pacient}/>
            </td>
          </tr>
        )
      })
  }

  
  if (results) {
    return <>
      <table className="border-collapse w-3/5 min-w-[600px] border bg-zinc-200 text-sm shadow-sm ">
        <thead >
          <tr >
            <th className="w-full border-2 border-slate-900 font-semibold p-4 text-slate-900 text-left">
              Name
            </th>
            <th className="w-1/2 border-2 border-slate-900 font-semibold p-4 text-slate-900 text-left">
              Gender
            </th>
            <th className="w-1/2 border-2 border-slate-900 font-semibold p-4 text-slate-900 text-left">
              Birth
            </th>
            <th className="w-1/2 border-2 border-slate-900 font-semibold p-4 text-slate-900 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {getRows()}
        </tbody>
      </table>
      <div className="mb-24">
        {itemEnd <= 50 && <button
          type="button"
          className="flex items-center justify-center font-bold text-slate-900 p-4"
          onClick={() => {
            getRows()
            setItemEnd(itemEnd + 8)
          }}
        >
          <ArrowClockwise size={32}/>
          Loading more...
        </button>}
      </div>
    </>
  }

  return (
    <>
      <div className="flex items-center p-3 font-bold" >
        <ArrowClockwise size={32} className="animate-spin"/>
        <span className="ml-2">Loading...</span>
      </div>
    </>
  );
}