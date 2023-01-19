import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/userSlice";
import "./App.css";
const App = () => {
  const dispatch = useDispatch();
  const { title, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {error && "error!!!!!!!!!!!"}
      {loading ? (
        "Loadingggg"
      ) : (
        <div>
          {title.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.title}</p>
                <p>{user.price}</p>
                <img src={user.image} alt="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
