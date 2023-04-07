import {useState} from "react";
import '../App.css'
import Modal from "../components/Modal";
import {useRef} from "react";

const ListPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [newTasks, setNewTasks] = useState('');
    const [list, setList] = useState([
        {
            id: 1,
            name:'read book'
        },
        {
            id: 2,
            name:'wash up'
        }

    ])

    const  inputRef = useRef(null)

    const handleEvent = () => {
        setNewTasks(inputRef.current.value)
    }
    const handleAdd = () => {
        setList((prev) => {
            return[ ...prev, {id: list.length +1, name: newTasks} ]
        })
        handleShow()
    }
    const handleShow = () => setShowModal(!showModal);
    return (
        <div className='wrapperList'>
            <h1> List to do</h1>
            <button onClick={handleShow} >Open modal</button>

            <div className='todoList'>
                {list.map((item) =>
                    <ul className='ulItem' key={item.id}>
                        <li>{item.name}</li>
                    </ul>)}
            </div>
            {showModal && <Modal>
                <input
                    placeholder='write here...'
                    ref={inputRef}
                    onChange={handleEvent}
                />
                    <button onClick={handleAdd}>add</button>
                    <button onClick={handleShow} className='closeButton'>Close</button>
            </Modal>}
        </div>
    )
}

export default ListPage;