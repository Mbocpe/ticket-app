import TicketForm from "@/app/(components)/TicketForm"

const getTicketById = async (id) => {
  const res = await fetch(`/api/Tickets/${id}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to get ticket.")
  }

  return res.json();
}

async function TicketPage({params}) {
  const {id} = await params

  const EDITMODE = id === "new" ? false : true
  let updateTicketData = {}

  if (EDITMODE) {
    updateTicketData = await getTicketById(id)
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new"
    }
  }
  return (
    <TicketForm ticket={updateTicketData}/>
  )
}

export default TicketPage