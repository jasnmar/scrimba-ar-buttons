import "./Button.css"

function Button(props) {
    return (
        <>
            <button onClick={props.clickHandler}>{props.children}</button>
        </>
    )
}

export default Button