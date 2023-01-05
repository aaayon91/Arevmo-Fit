import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as exerciseAPI from "../../utilities/exercises-api"

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

    return (
        <>
            { exercise ?
                <>
                    <h2>Exercise Show Page For:</h2>
                    <h2>{exercise._id}</h2>
                </>
                :
                null
            }
        </>
    )
}