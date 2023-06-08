/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRef, useState } from 'react';

const Sample7 = () => {
  const [text, setText] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);
  const divEl = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    console.log(inputEl.current);
    inputEl.current!.focus();
    inputEl.current!.style.color = 'red';
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setText(e.target.value);
  };

  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const handleAddNum = () => {
    return setCount(count + 1);
  };
  const handleAddRef = () => {
    return countRef.current++;
  };

  const changeInputColor = () => {
    inputEl.current!.style.color = 'green';
  };

  const textBig = () => {
    inputEl.current!.style.fontSize = '20px';
  };

  const changeDivRef = () => {
    divEl.current!.innerText = 'aaaaaaaa';
  };

  return (
    <div className='m-auto mt-20 max-w-3xl'>
      <h1>useRef-2</h1>
      <input ref={inputEl} type='text' value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>フォーカスを当てる</button>
      <button onClick={changeInputColor}>chengeColor</button>
      <button onClick={textBig}>bigger</button>
      <div ref={divEl}>{count}</div>
      <button onClick={handleAddNum}>Count1アップ</button>
      <div>{countRef.current}</div>
      <button onClick={handleAddRef}>Count2アップ</button>
      <button onClick={changeDivRef}>divEl</button>
    </div>
  );
};

export default Sample7;
