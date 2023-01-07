import { useState, useEffect, createContext } from 'react'
import './App.scss'
import 'animate.css';
import FirstPage from "./component/firstPage";
import SetInfo from './component/setInfo';
export const all_status = createContext()
function App() {
  const [nowShow, setNowShow] = useState("set_info")
  const [userInfo, setUserInfo] = useState({ name: "", sex: "" })
  const [allPage, setAllPage] = useState([
    { page_name: 'first_page', page_link: <FirstPage /> },
    { page_name: 'set_info', page_link: <SetInfo /> },
  ])




  return (
    <div className="App">
      <all_status.Provider value={{ setNowShow, userInfo, setUserInfo }}>
        {allPage.map(function (data, index) {
          if (data.page_name == nowShow) {
            return data.page_link
          }
        })}
      </all_status.Provider>
    </div>
  )
}

export default App
