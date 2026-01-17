async function TicketPage({params}) {
  const {id} = await params
  return (
    <div>TicketPage {id}</div>
  )
}

export default TicketPage