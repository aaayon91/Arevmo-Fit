import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ExerciseForm from '../../components/ExerciseForm/ExerciseForm';
import * as exerciseAPI from '../../utilities/exercises-api'

export default function ExerciseShowPage() {
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
        {
            exercise ?
                <ExerciseForm exercise={exercise} setExercise={setExercise}/>
            :
                null
        }
        </>
    )
}