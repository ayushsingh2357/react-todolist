import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top: "89.4vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light text-center my-4 py-3" style={footerStyle}>
            Copyright &copy; MyTodoList.com
        </footer>


    )
}
