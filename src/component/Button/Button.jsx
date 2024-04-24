import "./Button.css"

function Button({size, children, className, ...rest}) {
    console.log(rest)
        /**
     * Challenge: accept the `size` prop and set the `className` of the
     * <button> to:
     * 
     * "button-small" if `size` is "sm"
     * "button-large" if `size` is "lg"
     * 
     * Note: don't try to manually add a `className` to the Button
     * instance in index.js yet. (DO add `className` to this file
     * as part of the challenge, though.)
     */
    const btnClass = getBtnClass()
    function getBtnClass() {
      let cName
      if(size === "lg") {
        cName = "button-large" + " " + className
      } else if(size === "sm") {
        cName = "button-small" + " " + className
      }
      return cName
    }



    return (
        <>
            <button className={btnClass} {...rest }>{children}</button>
        </>
    )
}

export default Button