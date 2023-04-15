import { useEffect, useState } from 'react';

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // // 컴포넌트가 마운트(첫 화면개시)할 때 작동함 아니면 빈배열 반환
  // useEffect(() => {
  //   console.log('mount');
  // }, []);

  // // 디펜던시어레이를 두번째 인자로 안 넣어줄 시 컴포넌트가 리랜더 될 때마다 작동
  // useEffect(() => {
  //   console.log('update!');
  // });

  // // count state가 값이 바뀔 때마다 출력
  // useEffect(() => {
  //   console.log(`count is update: ${count}`);
  //   if (count > 5) {
  //     alert('count가 5를 넘었습니다 따라서 1로 초기화 합니다');
  //     setCount(1);
  //   }
  // }, [count]);

  const UnmountTest = () => {
    useEffect(() => {
      console.log('mount');

      // unmount 시점에 호출됨
      return () => {
        console.log('unmount!!!!!!!!!!!');
      };
    }, []);

    return <div>UnmountTest Testing Component</div>;
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>on/off</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
