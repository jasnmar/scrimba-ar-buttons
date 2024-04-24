import "./Button.css"

function Button(props) {
    console.log('props:', props)
    return (
        <>
            <button {...props }>{props.children}</button>
        </>
    )
}

export default Button