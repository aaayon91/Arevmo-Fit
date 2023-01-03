import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import WorkoutsPage from '../WorkoutsPage/WorkoutsPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import{ getUser } from '../../utilities/users-service'
import QrScanPage from '../QrScanPage/QrScanPage';
import ExerciseShowPage from '../ExerciseShowPage/ExerciseShowPage';
import NewExercisePage from '../NewExercisePage/NewExercisePage';

export default function App() {
  const [user, setUser] = useState(getUser()) 
  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            {
              user.email === 'admin@admin' ?
              <>
                <Route path="/exercises/new" element={<NewExercisePage user={user} />} />
                <Route path="/*" element={<Navigate to="/exercises/new" />} />
              </>
              :
              <>
                <Route path="/workouts" element={<WorkoutsPage />} />
                <Route path="/qr" element={<QrScanPage />} />
                <Route path="/exercises" element={<ExerciseShowPage user={user}/>} />
                <Route path="/*" element={<Navigate to="/qr" />} />
              </>
            }
          </Routes>
          <Footer />
        </>
        :
        <AuthPage setUser={setUser} /> 
      }
    </main>
  );
}

