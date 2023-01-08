import { useState } from "react"
import * as exerciseAPI from '../../utilities/exercises-api'

export default function ExerciseForm({exercise, setExercise}) {
    const [editBtn, setEditBtn] = useState(true)
    const [saveBtn, setSaveBtn] = useState(false)
    const [content, setContent] = useState({
        name: exercise.name,
        muscleGroup: exercise.muscleGroup,
        qrCode: exercise.qrCode
    })

    function handleChange(evt) {
        setContent({...content, [evt.target.name]: evt.target.value });
        if (Object.entries({...content, [evt.target.name]: evt.target.value }).every(el => el[1] === exercise[el[0]]) === false) {
            setSaveBtn(true);
        } else setSaveBtn(false);
    }

    async function handleUpdate(evt) {
        evt.preventDefault();
        const updatedExercise = await exerciseAPI.updateExercise(exercise._id, content)
        setExercise(updatedExercise);
        setSaveBtn(!saveBtn)
        setEditBtn(!editBtn)
    }

    return(
        <div className="form-container">
            <form>
                <label>Name:</label>
                    <input type="text" name="name" value={content.name} onChange={handleChange} disabled={editBtn}/>
                <label>Muscle Group:</label>
                    <input type="text" name="muscleGroup" value={content.muscleGroup} onChange={handleChange} disabled={editBtn}/>
                <label>QR Code:</label>
                    <input type="text" name="qrCode" value={content.qrCode} disabled="disabled" ></input>
                {
                saveBtn ? 
                    <>
                        <button type="submit" onClick={handleUpdate}>Save</button>
                        <button onClick={() => setEditBtn(!editBtn)}>Cancel</button>
                    </>
                :
                    null
                }
            </form>
            {
                saveBtn ?
                    null
                :
                    <>
                        {
                            editBtn ? 
                                <button onClick={() => setEditBtn(!editBtn)}>Edit</button>
                            :
                                <button onClick={() => setEditBtn(!editBtn)}>Cancel</button>
                        }
                    </>
            }
        </div>
    )
}