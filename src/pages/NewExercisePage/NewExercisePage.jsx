import { useState } from 'react';
import QrScannerWithRouter from '../../components/QrScanner/QrScanner';

export default function NewExercisePage({user}) {
    const [content, setContent] = useState({
        name: '',
        muscleGroup: '',
        qrCode: ''
    })
    const [scanner, setScanner] = useState(false);

    function handleChange(evt) {
        setContent({...content, [evt.target.name]: evt.target.value });  
    }

    function handleScanQR() {
        setScanner(!scanner)
    }
        
    async function handleSubmit(evt) {
        // evt.preventDefault();
        // let ok = true;
        // for (const key in content) {
        //     if (content[key] === '') {
        //     ok = false;
        //     } 
        // }
        // if (ok) {
        //     // await handleAddBoard(content)
        //     // navigate('/boards')
        // }
    }

    return (
        <>
        {
            scanner ?
            // <QrScanner user={user}/>
            <QrScannerWithRouter user={user} content={content} setContent={setContent} scanner={scanner} setScanner={setScanner}/>
            :
            <div className="form-container">
            <form>
                <label>Name:</label>
                    <input type="text" name="name" value={content.name} onChange={handleChange} />
                <label>Muscle Group:</label>
                    <input type="text" name="muscleGroup" value={content.muscleGroup} onChange={handleChange} />
                <label>QR Code:</label>
                    {
                        content.qrCode ?
                            <input type="text" name="qrCode" value={content.qrCode} onChange={handleChange} />
                        :
                            <button onClick={handleScanQR}>SCAN</button>
                    }
                <button type="submit" onClick={handleSubmit}>CREATE</button>
            </form>
        </div>
        }
        </>
    )
}