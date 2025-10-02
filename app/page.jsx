import DieButton from "./die-button";

const text = 'Learn. Dev. Improve. Enjoy🔥.'

const myArray = ["hola", "adios", "chaho", "buenos dias"];

function Header({title}) {
    return <h1>{title? title : 'default title mf ☠️'}</h1>
}

export default function HomePage() {
    return  (<div>
                <Header title={text}/>
                <Header />
                    <ul>
                    {myArray.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <DieButton/>
            </div>);
}