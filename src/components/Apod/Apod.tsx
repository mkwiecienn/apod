import { APOD } from "../../api";
import './Apod.css';

interface ApodProps {
    apod: APOD
}

const Apod = ({ apod }: ApodProps) => <div className='Apod'>
    <img alt={apod.title} src={apod.url} />
    <table>
        <tbody>
        <tr>
            <td>title</td>
            <td>{apod.title}</td>
        </tr>
        <tr>
            <td>date</td>
            <td>{apod.date}</td>
        </tr>
        <tr>
            <td>explanation</td>
            <td>{apod.explanation}</td>
        </tr>
        
        </tbody>
    </table>
</div>

export default Apod;
