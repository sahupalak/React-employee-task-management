import React from "react";

function Header({ changeUser, data }) {
  const username = data ? data.firstName : "Admin";

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="m-10 flex items-end justify-between text-2xl">
      <h1 className="font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{username} 👋🏻</span>
      </h1>
      <button
        onClick={logOutUser}
        className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-sm font-medium text-lg"
      >
        Log out
      </button>
    </div>
  );
}

export default Header;
