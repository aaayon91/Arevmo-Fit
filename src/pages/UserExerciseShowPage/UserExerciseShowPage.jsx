import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as exerciseAPI from "../../utilities/exercises-api"
import * as sessionsApi from "../../utilities/sessions-api"

export default function UserExerciseShowPage({user}) {
    let { exerciseId } = useParams();
    const [exercise, setExercise] = useState(null);

    useEffect(() => {
        async function fetchExercise() {
            const exercise = await exerciseAPI.getOne(exerciseId);
            setExercise(exercise)
            }
            fetchExercise();
    }, []);

    function handleClick() {
        sessionsApi.addSession({weight: 175, reps: 10})
        // setWeight(weight + 10)
    }

    return (
        <>
            { exercise ?
                <>
                    <h2>Exercise Show Page For:</h2>
                    <h2>{exercise._id}</h2>
                    <button onClick={handleClick}>Create Session</button>

                </>
                :
                null
            }
        </>
    )
}