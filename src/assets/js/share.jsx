export function TextBlock(props) {
    //props.text=文字內容，直接帶入，方便調適部份異色字
    //props.option ={下方選項的相關格式}
    let buttonType = props.buttonOption.type
    return <>
        <div className="text_block2">
            <div className="text">
                {props.text}
            </div>
            <div>
                {buttonType != 0 && <button className={`text_button${buttonType}`}>
                    <div className="button_text">
                        {props.buttonOption.title}
                    </div>
                    <span className="triangle"></span>

                </button>}
            </div>
        </div>
    </>
}

export function WorkBlock(props) {
    //props.text=文字內容，直接帶入，方便調適部份異色字
    //props.option ={下方選項的相關格式}
}