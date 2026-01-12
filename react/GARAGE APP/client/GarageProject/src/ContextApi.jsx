import { createContext, useState } from "react"


export const customerAddContext = createContext()
export const customerDeleteContext = createContext()
export const serviceaddContext = createContext()

function ContextApi({ children }) {
  const [customerContextData, setCustomerContextData] = useState("")
  const [customerDeleteContextData,setCustomerDeleteContextData]=useState("")
  const [serviceaddContextData,setServiceaddContextData]=useState("")
  return (
    <div>
      <customerAddContext.Provider value={{ customerContextData, setCustomerContextData }}>
      <customerDeleteContext.Provider value={{ customerDeleteContextData, setCustomerDeleteContextData }}>
      <serviceaddContext.Provider value={{ serviceaddContextData, setServiceaddContextData }}>
          {children}
      </serviceaddContext.Provider>
      </customerDeleteContext.Provider>
      </customerAddContext.Provider>
    </div>
  )
}

export default ContextApi