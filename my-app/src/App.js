// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }
// class App extends Component {
//   state = {
//     color: '#000000',
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }
// export default App;

import React from 'react';
import InfoREduccer from './components/22-04-25/InfoReducer';

function App(props) {
  return <InfoREduccer />;
  //   const [visible, setvisible] = useState(false);
  //   return;
  //   <div>
  //     <button
  //       onClick={() => {
  //         setvisible(!visible);
  //       }}
  //     >
  //       {visible ? '숨기기' : '보이기'}
  //     </button>
  //     <hr />
  //     {visible && <InfoEffect />}
  //   </div>;
}

export default App;
