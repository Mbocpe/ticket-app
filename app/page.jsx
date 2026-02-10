export const dynamic = "force-dynamic"
import TicketCard from "./(components)/TicketCard"

const getTickets = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/api/Tickets`, {
      cache: "no-store"
    })
    return res.json()
  } catch (err) {
    console.log("Failed to get tickets", err);
  }
}

const Dashboard = async () => {
  const {tickets} = await getTickets();
  const uniqueCategories = [
    ... new Set(tickets?.map(({category}) => category))
  ]

  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div className="mb-4" key={categoryIndex}>
            <h2>{uniqueCategory}</h2>

            <div className="lg:grid grid-cols-2 xl:grid-cols-4">

              {/* Tickets are filtered based on category and only shown if there are tickets in that category */}
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard id={_index} key={_index} ticket={filteredTicket}/>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard