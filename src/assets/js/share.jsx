export function TextBlock(props) {
    //props.text=文字內容，直接帶入，方便調適部份異色字
    //props.option ={下方選項的相關格式}
    console.log(props.text);
    return <>
        <div className="text_block">
            <div className="text">
                {props.text}
            </div>
            <div className="text_button"><button>te</button></div>
        </div>
    </>
}

export function WorkBlock(props) {
    //props.text=文字內容，直接帶入，方便調適部份異色字
    //props.option ={下方選項的相關格式}
}