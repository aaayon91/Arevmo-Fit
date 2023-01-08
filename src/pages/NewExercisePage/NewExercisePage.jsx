import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as exercisesAPI from '../../utilities/exercises-api';

export default function NewExercisePage({user}) {
    const location = useLocation();
    const qrCode = location.state.qrCode;
    const [content, setContent] = useState({
        name: '',
        muscleGroup: '',
        qrCode: qrCode
    })

    function handleChange(evt) {
        setContent({...content, [evt.target.name]: evt.target.value });  
    }
        
    async function handleSubmit(evt) {
        evt.preventDefault();
        let exercise = null;
        if (Object.values(content).every(e => !!e === true)) {
            exercise = await exercisesAPI.add(content)
        }
        if (exercise) {
            setContent({
                name: '',
                muscleGroup: '',
                qrCode: qrCode
            })
        }
    }

    return (
        <div className="form-container">
            <form>
                <label>Name:</label>
                    <input type="text" name="name" value={content.name} onChange={handleChange} />
                <label>Muscle Group:</label>
                    <input type="text" name="muscleGroup" value={content.muscleGroup} onChange={handleChange} />
                <label>QR Code:</label>
                    <input type="text" name="qrCode" value={qrCode} onChange={handleChange} disabled="disabled"></input>
                <button type="submit" onClick={handleSubmit}>CREATE</button>
            </form>
        </div>
    )
}