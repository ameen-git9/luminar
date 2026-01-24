import { createContext, useState } from 'react'

export const addlikeContext = createContext()
export const addCommentContext = createContext()
export const addProfileContext = createContext()
export const followContext = createContext()
export const unfollowContext = createContext()

function ContextApi({ children }) {
    
    const [addlikeContextData, setaddlikeContextData] = useState("")
    const [addCommentContextData, setaddCommentContextData] = useState("")
    const [addProfileContextData, setaddProfileContextData] = useState("")
    const [followContextData, setfollowContextData] = useState("")
    const [unfollowContextData, setunfollowContextData] = useState("")
    return (
        <div>
            <addlikeContext.Provider value={{ addlikeContextData, setaddlikeContextData }}>
                <addCommentContext.Provider value={{ addCommentContextData, setaddCommentContextData }}>
                    <addProfileContext.Provider value={{ addProfileContextData, setaddProfileContextData }}>
                        <followContext.Provider value={{ followContextData, setfollowContextData }}>
                            <unfollowContext.Provider value={{ unfollowContextData, setunfollowContextData }}>
                                {children}
                            </unfollowContext.Provider>
                        </followContext.Provider>
                    </addProfileContext.Provider>
                </addCommentContext.Provider>.
            </addlikeContext.Provider >
        </div>
    )
}
export default ContextApi
