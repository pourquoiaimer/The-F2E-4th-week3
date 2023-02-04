import { useState, useEffect, useContext } from 'react'
import { all_status } from "../App"
import { TextBlock } from '../assets/js/share';
import { gsap } from 'gsap';

//跑完動畫後切換顯示內容
const SetInfo = () => {
    const [canGo, setCanGo] = useState(false)
    const { setNowShow, setUserInfo } = useContext(all_status)
    const [people_right_down, setPeople_right_down] = useState({ people: "red", text: "? ? ?" })

    console.log(people_right_down);

    let timeline = gsap.timeline()

    useEffect(() => {
        //先取得參數
        // timeline.from(".people_right_down_talk", { y: 1000 }, 0)
        timeline.fromTo(".people_right_down_text", { width: "0px", padding: "0", display: 'none' }, { width: "auto", padding: "3px 28px", display: 'block', duration: .5 }, 0.5)

        timeline.fromTo(".text_block_small", { maxWidth: 0, padding: 0 }, { maxWidth: "350px", padding: "50px 140px", duration: .5 }, 1)

        // timeline.to(".text_block_small", { display: "none", duration: .5 }, 1.5)
        timeline.fromTo(".text_block_small", { maxHeight: 'auto', padding: "50px 140px" }, { maxHeight: 0, maxWidth: 0, padding: 0, display: 'none', duration: .5 }, 2)

        timeline.fromTo(".text_block2", { display: "block", maxWidth: "0px", padding: 0 }, { maxWidth: "888px", padding: "50px 140px", duration: .5 }, 2)

        timeline.to(".people_right_down_talk", { y: 1000, duration: 0.5, onComplete: () => { setPeople_right_down({ people: "", text: "" }) } }, 3)


        // timeline.fromTo(".title", { y: -1200, width: "50%" }, { y: 0, duration: 2 }, 0)
        // timeline.to(".title", { width: "75%", onComplete: () => { setCanGo(true) } }, 2)
        // timeline.to(".press_to_start", { opacity: 1, repeat: "-1", yoyo: true }, 2.3)
        // timeline.from(".people_left_down", { y: 1000 }, 1.5)
        // timeline.from(".people_right_down", { y: 1000 }, 2)
        // timeline.from(".people_left_top", { x: -1000 }, 1.8)
        // timeline.from(".people_right_top", { x: 1000 }, 2.3)
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
    let text1 = `...`
    let text2 = `"菜鳥！恭喜你成為六角學院的正式員工啦！在正式加入專案開發之前，
    需要請你先了解 Scrum 的流程與精神！
    
    成功通過 Scrum 新手村的試煉吧！`

    let buttonOption1 = { title: "", type: 0 }
    let buttonOption2 = { title: "開始試煉", type: 1 }

    function People_right_down_talk(props) {
        // let people_class = `people_right_down_talk people_${props.people}`
        
        let people_class = `people_right_down_talk people_${people_right_down.people}`
        return (
            <div className={people_class}>
                <span className='people_right_down_text'>
                    {people_right_down.text}
                </span>
            </div>
        )
    }

    //

    return (  //分階段，先是跑確認框框的對話，再來才是set info的部份
        <div className='set_info'>

            <People_right_down_talk />

            <div className="text_block_small">
                <span>...</span>
            </div>
            {/* <TextBlock text={text1} buttonOption={buttonOption1} /> */}
            <div className="text_block_big" style={{ display: "none" }}>
                <TextBlock text={text2} buttonOption={buttonOption2} />

            </div>
        </div>
    )
}


export default SetInfo