import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import './style/App.css';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
        <h4>WARNING!</h4>
        are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail 
      author="Sam"
       timeAgo="hoy a las 14:30 pm" 
       userComment="que buena app"
       avatar={faker.image.image()} 
       />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail 
      author="pedro" 
      timeAgo="ayer a las 9:00 am" 
      userComment="better call saul esta picante"
      avatar={faker.image.image()}
         />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
       author="Marcos"
        timeAgo="la semana pasada" 
        userComment="breaking bad es la mejor de todas" 
        avatar={faker.image.image()} 
         />  
     </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
