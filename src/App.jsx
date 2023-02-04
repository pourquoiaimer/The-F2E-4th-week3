import { useState, useEffect, createContext } from 'react'
import './App.scss'
import 'animate.css';
import { TextBlock } from './assets/js/share';
import FirstPage from "./component/firstPage";
import SetInfo from './component/setInfo';
export const all_status = createContext()
function App() {
  // const [nowShow, setNowShow] = useState("first_page")
  const [nowShow, setNowShow] = useState("set_info")

  const [userInfo, setUserInfo] = useState({ name: "", sex: "" })
  const [allPage, setAllPage] = useState([
    { page_name: 'first_page', page_link: <FirstPage /> },
    { page_name: 'set_info', page_link: <SetInfo /> },
  ])


  // let caution_text = "建議使用 1024 x 768 以上螢幕解析度，以獲得最佳體驗>"

  return (
    <div className="App">
      <div className='caution_small'>
        <div className="caution_text">
          <div className="text">
          "建議使用 1024 x 768 以上螢幕解析度
          <br/>
          以獲得最佳體驗"
          </div>
        </div>
      </div>
      <div className='simple'>
        <all_status.Provider value={{ setNowShow, userInfo, setUserInfo }}>
          {allPage.map(function (data, index) {
            if (data.page_name == nowShow) {
              return data.page_link
            }
          })}
        </all_status.Provider>
      </div>
    </div>
  )
}

export default App
