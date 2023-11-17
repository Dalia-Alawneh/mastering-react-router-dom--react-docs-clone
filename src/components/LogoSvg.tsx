const LogoSvg = ({w}:{w:number;}) => {
    return (<svg viewBox="-10.5 -9.45 21 18.9" fill="rgb(20, 158, 202)" xmlns="http://www.w3.org/2000/svg"
        className={`w-${w}`}>
        <circle cx="0" cy="0" r="2" fill="rgb(20, 158, 202)"></circle><g stroke="rgb(20, 158, 202)" stroke-width="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
    )
}

export default LogoSvg
