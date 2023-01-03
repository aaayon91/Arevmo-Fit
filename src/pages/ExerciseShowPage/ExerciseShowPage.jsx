import {useLocation} from 'react-router-dom';

export default function ExerciseShowPage({user}) {
    const location = useLocation();

    return (
        <h1>Exercise: {location.state.exerciseUrl}</h1>
    )
}