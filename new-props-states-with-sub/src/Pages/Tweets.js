// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [data, setData] = useState(dummyTweets); 
  // => let data = dummyTweets.slice();  <--- 새롭게 !!! 생성!! 
    //새로운 주소로 할당된 새로운 Data 배열!! 
    // 외부에서 (서버에서) 들어오는 원본 데이터(dummyTweets)는 
    // 해당 컴포넌트에(Tweets)서 수정해서 UI(화면 인터페이스 구성)을 즉각적으로 표현할때!! 
    // 원본 데이터를 수정하지 않고  (객체나, 배열같은 자료형은 새로운 주소로 할당된) 새로운 데이터를 생성
    // 주의!! 똑같은 데이터를 카피해서 하나 새롭게 만들지만 오나전 새로운!! 아예 메모리에 새로운 주소로 새롭게 할당된 놈을 만듦
    // mutable 자료형 과 deep copy 가 바로 위 내용!! 
  const handleButtonClick = (event) => {
    const tweet = {};
    let newData = data.slice(); // 여기서 dummyTweets라는 원본을 useState()선언을 통해 아예 새롭게 만들어 놓았지만 
    // 이녀석 조차도 다시 변경이 필요할때 
    // 이때 한번더 새롭게 생성해서 변경 해줘야 데이터 consistency 유지되요!!  
    // 어디서도 가르쳐주지 않는 내용일거임 ㅋㅋ (반대로 저만의 생각일 수 있지만,,,, 
    // 은 아니고 네 아닐겁니다 구글과 리액트 형님이 공문에 똬악 ..!! ) 아무튼 .. 네 절대로!! 이룰을 따르는게 좋음 
    if(inputValue !== '' && textAreaValue !==''){

      tweet['id'] = newData.length+1;
      tweet['username'] = inputValue;
      tweet['content'] = textAreaValue; 
      tweet['picture'] = "https://randomuser.me/api/portraits/men/98.jpg";
      tweet['createdAt'] = new Date().toString();
      tweet['updatedAt'] = new Date().toString();
      
      newData.unshift(tweet) // 새롭게 생성한 newData 배열이 수정됨 (새로운 tweet객체가 앞으로 unshift 되면서..)
      setData(newData); // 이렇게 수정된 newData를 setData()함수의 인자로 넘겨줘서 해당 data라는 배열 
      // 전체를 다시한번 새롭게 변경 시켜주고 있음. 이렇게 해야된다고 계속 !! 말하고 있네요 !! 제가 ..ㅋ 
      
      // 아니면 그냥 전역변수인 저놈들을 그냥 dummyTweets.unshift(tweet) 
      // 아니면 data.unshift(tweet)하고 끝나고 말면 됨 (알고리즘 풀때는 이렇게 하면됨, 개발은 정말정말 안됨!! )
      // 리액트 안쓰고 WA(wep application) 만들어 보면 알거에요.. 
      // 전역변수 난발해서 데이터 필요할때 수정하고 수정하게 되면 
      // 얼마나 고통 스러워지는지.,,
      // 그걸 리액트 형님들이 useState 라는 놈을 개발해줘서 아주아주아주 편하게 ... 
      // 그래서 감사하게 쓰면 되는거임 !! 
      // 대신 지킬거 지켜주고 쓰면됨!! <-- 이게 이해하가 안되서 못넘어 가실 필요가 없음!! 이유는 구구절절했지만 
      // 아주 잘 만들어논 라이브러리를 그냥 횽들이 해논대로 쓰겠다 감사해 횽 하고 쓰면 진짜 골치가 아프지 않음!! 
      // 아니면 쌩JS 로만 WAS 구축해서 뭐라도 한개 만들어보세요!! 는 훼이크고 의문은 그만 ㅠ 
      // 쓰세요 그냥 ㅋㅋ 저렇게 ㅠㅠ 
      
      // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
      // 트윗 전송이 가능하게 작성해야 합니다.
      setInputValue("");
      setTextAreaValue("");
  
      document.querySelector(".tweetForm__input--username").value = "";
      document.querySelector(".tweetForm__input--message").value = "";
    }

  };
  
  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setInputValue(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setTextAreaValue(event.target.value)
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                
                <textarea className="tweetForm__input--message"
                onChange={handleChangeMsg}></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total:' + data.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button className="tweetForm__submitButton"
              onClick={handleButtonClick}>Tweet</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {data.map((ele)=>{
          return (
            <div key = {ele.id}>
              <Tweet tweet={ele} />
            </div>
          )
          }
         )}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
