import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";

/* 
  // 컴포넌트 외부를 클릭했을 때 callback();
  useOutsideClick(() => {
      setState(false)
    }, [langOptionRef1, langOptionRef2])
*/
export const useOutsideClick = (callback, refs) => {

    const [isInside, setIsInside] = useState(false);
  
    const clickOutsideCheck = useCallback((e) => {
      const clickCheck = refs.some(ref => {
        return ref.current && ref.current.contains(e.target) // 하나라도 true면 인사이드 클릭
      })

      setIsInside(clickCheck)
    }, [refs, setIsInside])
  
    useEffect(() => {
  
      const clickOutside = () => {
        if (!isInside) {
          callback()
        }
      }
  
      document.addEventListener('mousedown', clickOutsideCheck) // 클릭해서 갑자기 사라지는 요소가 있으면 문제생김 mousedown할때 미리 검사하기
      document.addEventListener('mouseup', clickOutside)
  
      return () => {
        document.removeEventListener('mousedown', clickOutsideCheck)
        document.removeEventListener('mouseup', clickOutside)
      }
  
    }, [callback, clickOutsideCheck, isInside])
  
  }


/* 
  // boolean값 토글하는 훅 (요소 보였다 안보였다 할때 쓸만함)
  const [isVisible, toggleVisibility] = useToggle();
  return (
    { isVisible && <div> hello world </div> }
  )
*/
export const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
  
    const toggleValue = () => {
      setValue((prevValue) => !prevValue);
    };
  
    return [value, toggleValue];
  };
  

/*
  // 요소가 스크롤 밖에 나갔다 들어왔다 추적
  <ObservalbeDiv callback={(ratio) => setSomething(ratio == 0)}>
    <div>추적할 div</div>
  </ObservalbeDiv>
*/

export const ObservableDiv = ({callback, ...props}) => {
    const targetRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio == 0) {
            // console.log('화면 밖으로 나감 : ' + entry.intersectionRatio)
            // callback();
          } else if (entry.intersectionRatio == 1) {
            // console.log('화면 안으로 드감 : ' + entry.intersectionRatio)
            // callback();
          }
        })
      }, {threshold: [0, 1]});
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    }, [callback]);
  
    return (
      <div className='intersection-observer' ref={targetRef} {...props}>
          {props.children}
      </div>
  )
};

/* 
  // 로컬 스토리지 읽기, 쓰기
  const [timestamp, setTimestamp] = useLocalStorage('datetime', new Date().toISOString());
           
*/
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue]; // 아이템, set아이템 함수
};

/* 
  // state 변수 이전값 저장하는 곳
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
*/

export const usePrevious = (value) => {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
};

/* 
  // 요소에 focus주는 훅
  const [inputRef, setInputFocus] = useFocus();

  return (
    <input ref={inputRef} />
    <button onClick={() => setInputFocus()}></button>
  )

*/

export const useFocus = () => {
  const ref = useRef(null);

  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return [ref, setFocus];
};


/* 
  // 인풋같은 요소에서 아래로 띄우는 선택창 (select, datepicker) 위아래 중 공간 많은 쪽으로 띄우기
  useModalPosition(selectBoxRef, selectBoxModalRef, isFocus)
*/

export const useModalPosition = (ref, modalRef, isOpen) => {

  const margin = 5;

  useEffect(() => {

      if (ref.current && modalRef.current && isOpen) {

          const viewport = window.innerHeight
          const topToBottom = ref.current.getBoundingClientRect().bottom // absolute된 요소는 제외돼서 찾아짐

          const modal = modalRef.current
          
          if ((viewport - modal.clientHeight - topToBottom) > 0) { // 뷰포트 - 모달길이 - top부터요소바닥길이
              modal.style.top = `calc(100% + ${margin}px`
              modal.style.transform = 'translateY(0)'
          } else {
              modal.style.top = `-${margin}px`
              modal.style.transform = 'translateY(-100%)'
          }
      }

  }, [isOpen])

}

/* 
  현재 기기 사이즈가 모바일인지 pc인지 (기준 780으로 해놓음)
*/
export const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    window.addEventListener('resize', handleResize);

    // 초기 로드 시 한 번 실행
    handleResize();

    // cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

/* 
  같은 링크 요청하면 새로고침
*/

export default function UrlRefresh() {
  const location = useLocation();

  let currentUrl = useRef("");

  useEffect(() => {
      if (currentUrl.current === location.pathname) {
          window.location.reload();
          window.scrollTo(0, 0);
      } else {
          currentUrl.current = location.pathname;
      };
      
  }, [location]);

  return null;
}