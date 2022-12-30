import { useState, useEffect, useContext } from 'react'
import { all_status } from "../App"
import { TextBlock } from '../assets/js/share';
import { gsap } from 'gsap';

//跑完動畫後切換顯示內容
const SetInfo = () => {
    const [canGo, setCanGo] = useState(false)
    const { setNowShow, setUserInfo } = useContext(all_status)

    let timeline = gsap.timeline()

    useEffect(() => {
        //先取得參數
        // timeline.from(".people_red", { y: 500 }, 0)
    }, [])

    function goNext() {
        console.log('goNext');

        // if (canGo) {
        //       gsap.set(".press_to_start", { display:"none",duration: 0.5} )
        //       gsap.to(".title", { y: -1200 ,duration: 0.5 })
        //       gsap.to(".people_left_down", { y: 1000 ,duration: 0.5})
        //       gsap.to(".people_right_down", { y: 1000 ,duration: 0.5})
        //       gsap.to(".people_left_top", { x: -1000 ,duration: 0.5})
        //       gsap.to(".people_right_top", { x: 1000 ,duration: 0.7,onComplete:()=>{setNowShow("second_page")}})
        // }
    }
    let text1 = `"菜鳥！恭喜你成為六角學院的正式員工啦！在正式加入專案開發之前，
    需要請你先了解 Scrum 的流程與精神！
    
    成功通過 Scrum 新手村的試煉吧！`
    // gsap.to('#box', {duration: 2, delay: 1, x: 300 })
    return (
        <div className='set_info'>
            <div className='people_red'></div>
            <TextBlock text={text1} />
        </div>
    )
}


export default SetInfo