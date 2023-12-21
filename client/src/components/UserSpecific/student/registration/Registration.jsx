import React from "react"
import NewRegistrationSection from "./NewRegistrationSection"
import OldRegistrations from "./OldRegistrationsSection"
import NewRegistration from "./newRegistration/NewRegistration"

const Registration = () => {
  const [newRegistration, setNewRegistration] = React.useState(false)
  return (
    <div>
        {!newRegistration && 
          (<div><NewRegistrationSection setNewRegistration = {setNewRegistration}/>
        <OldRegistrations/></div>)}
        {newRegistration &&
        <NewRegistration/>
        }
    </div>
  )
}

export default Registration