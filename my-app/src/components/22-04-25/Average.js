import React, { useState, useMemo, useCallback, useRef } from 'react';

function getAverage(number) {
  console.log('평균 계산 중');
  if (number.length === 0) return 0;
  const sum = number.reduce((a, b) => a + b);
  return sum / number.length;
}

function Average(props) {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  //useCallback 사용이유: 컴포넌트가 리렌더링 될떄마다 새로 만들어진 함수를 사용하게 된다.
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //빈배열은 컴포넌트가 처음 렌더링 될 때만 함수 생성

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    },
    [number, list],
  ); //number 혹은 list가 바뀔때만 함수 생성

  //list가 바뀔때만 해당 연산 실행
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
}

export default Average;
