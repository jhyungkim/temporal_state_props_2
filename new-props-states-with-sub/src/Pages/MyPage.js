import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';
// {
//   id: 2,
//   username: 'parkhacker',
//   picture: `https://randomuser.me/api/portraits/men/98.jpg`,
//   content:
//     '형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.',
//   createdAt: '2019-02-25T16:17:47.000Z',
//   updatedAt: '2019-02-25T16:17:47.000Z',
// }
const MyPage = () => {
  const filteredTweets = dummyTweets;
  let newfilter = filteredTweets.filter((ele => {
    if (ele.username==='parkhacker')  {
      return ele
    }
  }))
  // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={newfilter[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {newfilter[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        <Tweet tweet={newfilter[0]}/>
        
        {/* TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다. */}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
