import img from './1488.gif';

const Loader = () => {
    return (
        <img style={{ 
                display: 'block', 
                width: "60px", 
                height: "60px",
                objectFit: 'contain',
                margin: "0 auto"}} 
            src={img} 
            alt = "Загрузка" />
    )
}

export default Loader;