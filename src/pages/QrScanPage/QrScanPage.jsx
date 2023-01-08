import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import QrScanner, {QrScannerWithRouter} from '../../components/QrScanner/QrScanner'
import * as exercisesAPI from '../../utilities/exercises-api'

export default function QrScanPage({user}) {
    const [qrCode, setQrCode] = useState(null)
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    useEffect(function () {
        async function fetchAllExercises() {
          const exercises = await exercisesAPI.getAll();
          setExercises(exercises);
        }
        fetchAllExercises();
      }, []);

    function getExercise(qrCode) {
        if (exercises[qrCode]) {
            navigate(`/exercises/${exercises[qrCode]['_id']}`)
        } else {
            if (user.email === 'admin@admin') {
                navigate('/exercises/new', {state:{qrCode: qrCode}})
            }
        }
    }

    return(
        <QrScannerWithRouter 
            user={user}
            setQrCode={setQrCode}
            qrCode={qrCode}
            getExercise={getExercise}
        />
    )
}