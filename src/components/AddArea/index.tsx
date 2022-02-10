import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}


export const AddArea = ({onEnter}:Props) => {

    const [inputText, setInputText] = useState('');
    
    const handleKeyUp = (e: KeyboardEvent) => {
        console.log(e.code);
        if ((e.code === "Enter" || e.code === "NumpadEnter") && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className='image'>✛</div>
            <input
                type="text"
                placeholder='Adicionar uma tarefa'
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}