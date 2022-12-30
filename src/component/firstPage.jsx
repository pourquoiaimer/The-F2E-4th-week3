import { useState, useEffect, useContext } from 'react'
import { all_status } from "../App"

import { gsap } from 'gsap';

//跑完動畫後切換顯示內容
const FirstPage = () => {
      const [canGo, setCanGo] = useState(false)
      const { setNowShow } = useContext(all_status)
      

      let timeline = gsap.timeline()

      useEffect(() => {
            //先取得參數
            timeline.fromTo(".title", { y: -1200, width: "50%" }, { y: 0, duration: 2 }, 0)
            timeline.to(".title", { width: "75%", onComplete: () => { setCanGo(true) } }, 2)
            timeline.to(".press_to_start", { opacity: 1, repeat: "-1", yoyo: true }, 2.3)
            timeline.from(".people_left_down", { y: 1000 }, 1.5)
            timeline.from(".people_right_down", { y: 1000 }, 2)
            timeline.from(".people_left_top", { x: -1000 }, 1.8)
            timeline.from(".people_right_top", { x: 1000 }, 2.3)
      }, [])

      function goNext() {
            if (canGo) {
                  gsap.set(".press_to_start", { display:"none",duration: 0.5} )
                  gsap.to(".title", { y: -1200 ,duration: 0.5 })
                  gsap.to(".people_left_down", { y: 1000 ,duration: 0.5})
                  gsap.to(".people_right_down", { y: 1000 ,duration: 0.5})
                  gsap.to(".people_left_top", { x: -1000 ,duration: 0.5})
                  gsap.to(".people_right_top", { x: 1000 ,duration: 0.7,onComplete:()=>{setNowShow("set_info")}})
                  console.log('go to set_info');
            }
      }

      // gsap.to('#box', { duration: 2, delay: 1, x: 300 })
      return (
            <div className='first_page' onClick={goNext}>
                  <div className='title'>
                  </div>
                  <h2 className='press_to_start'>點擊任意位置開始吧</h2>
                  <div className='people_left_top'></div>
                  <div className='people_left_down'></div>
                  <div className='people_right_top'></div>
                  <div className='people_right_down'></div>
            </div>
      )
}


export default FirstPage