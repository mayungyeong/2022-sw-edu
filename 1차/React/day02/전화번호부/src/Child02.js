import { useDispatch } from 'react-redux';

function Child02() {
    let dispatch = useDispatch();
    return (<div>
        <h2>Child 02</h2>
        <button onClick={(e) => { dispatch({ type: '증가' }) }}>체중 증가</button>
        <button onClick={(e) => { dispatch({ type: '키증가' }) }}>키 증가</button>
    </div>);
}

export default Child02;