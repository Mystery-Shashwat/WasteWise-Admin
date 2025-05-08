import ThemeContext from './ThemeContext'

const ThemeState = (props) => {
    const COLOURS = {
        primary: "#1594D4",
        white: "#fff",
        darkGrey: "#808191",
        lightGrey: "#A4A5A6"
    }
    return (
        <ThemeContext.Provider value={COLOURS}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState