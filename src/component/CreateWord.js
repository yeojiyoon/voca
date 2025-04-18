import { useRef } from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateWord()
{
    const days = useFetch('http://localhost:3001/days'); //커스텀 훅을 통해 daylist를 받아오는 과정
    const navigate = useNavigate();

    function onSubmit(e)
    {
        e.preventDefault();

        //setIsDone(!isDone);
        fetch(`http://localhost:3001/words/`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                eng : engRef.current.value,
                kor : korRef.current.value,
                day : dayRef.current.value,
                isDone : false
            }),
        })
        .then(res => {
            if(res.ok)
            {
                alert('생성이 완료 되었습니다.');
                navigate(`/day/${dayRef.current.value}`);
            }
        });
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    )
}