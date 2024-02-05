import React, { useState, useRef } from "react";
import "./Timer.css";
import Coursetim from "./coursetimers/Coursetim";

//check if data present in stroage if not assign []
if (!localStorage.data) {
  localStorage.data = JSON.stringify([]);
}

// export Timer component
export default function Timer() {
  let data = new Date();
  let [currentdate, setcurrentdate] = useState(data.getDate());
  let [timerboxbg, settimerboxbg] = useState("white");
  let [hour, sethour] = useState(0);
  let [day, setday] = useState(0);
  let [linkofbranch, setlinkofbranch] = useState(
    "src/assets/coding-browser-svgrepo-com.svg"
  );
  let [selected_abili, setselected_abili] = useState("");
  let selected_branch = useRef();
  let selecting_branch = useRef();

  let [metadata, setmetadata] = useState(JSON.parse(localStorage.data));

  //toggling options of branch langs to select
  function togglelist(event) {
    selected_branch.current.style.display = "none";
    selecting_branch.current.style.display = "block";
  }
  function toggle_branch(event) {
    let getlinkonclick = event.target.parentElement.children[0].src;
    setlinkofbranch(getlinkonclick);
  }
  function toggle_branch2(event) {
    selected_branch.current.style.display = "block";
    selecting_branch.current.style.display = "none";
  }

  //increase and decrease value of hour and day
  function increasevalue(event) {
    if (event.target.parentElement.className === "changehour" && hour != 12) {
      hour++;
      sethour(hour);
    }
    if (event.target.parentElement.className === "changeday" && day != 7) {
      day++;
      setday(day);
    }
  }

  function decreasevalue(event) {
    if (event.target.parentElement.className === "changehour" && hour != 0) {
      hour--;
      sethour(hour);
    }
    if (event.target.parentElement.className === "changeday" && day != 0) {
      day--;
      setday(day);
    }
  }

  //fot animate select ability section
  const clickedability = (id) => {
    // Update the selectedAbility state with the clicked div's id
    setselected_abili(id);
  };
  const getBackgroundColor = (id) => {
    // Check if the div is the selected one, update the background color accordingly
    return selected_abili === id ? "rgb(147, 92, 250)" : "white";
  };

  // Load data from local storage
  let getlocalstorage = JSON.parse(localStorage.data);

  //adding data to localstorage

  let addcoursetostorage = () => {
    let whichbranch;
    let whichhour = hour;
    let whichdays = day;

    let whichability =
      selected_abili == "ability-1"
        ? "fast"
        : selected_abili == "ability-2"
        ? "medium"
        : selected_abili == "ability-3"
        ? "slow"
        : "";

    if (linkofbranch.includes("react"))
      whichbranch = { branch_name: "react", branch_link: linkofbranch };
    else if (linkofbranch.includes("node"))
      whichbranch = { branch_name: "node", branch_link: linkofbranch };
    else if (linkofbranch.includes("mongo"))
      whichbranch = { branch_name: "mongoDB", branch_link: linkofbranch };
    else if (linkofbranch.includes("html"))
      whichbranch = { branch_name: "HTML", branch_link: linkofbranch };
    else if (linkofbranch.includes("css"))
      whichbranch = { branch_name: "css", branch_link: linkofbranch };
    else if (linkofbranch.includes("javascript"))
      whichbranch = { branch_name: "javascript", branch_link: linkofbranch };
    else whichbranch = "!branch";

    if (!hour || !day || whichbranch == "!selected" || !selected_abili) {
      settimerboxbg("rgb(243, 75, 75,0.8)");
      console.log("pleae enter");
    } else {
      settimerboxbg("white");

      let days = Math.round((28 / whichdays) * 7);
      let month = days / 28;
      let aftermonth = 0;
      if (month.toString().length > 1) {
        if (month.toString().length <= 3) {
          aftermonth = month.toString().slice(2, 3) + 0;
        } else {
          aftermonth = month.toString().slice(2, 4);
        }
      }

      let date = new Date();

      // Check if the branch_name already exists in the array
      if (
        !getlocalstorage.some(
          (item) => item.branch.branch_name === whichbranch.branch_name
        )
      ) {
        // If it doesn't exist, add the new item to the array
        getlocalstorage.push({
          id: getlocalstorage.length,
          branch: whichbranch,
          hours: whichhour,
          days: whichdays,
          learning_ability: whichability,
          whencreate: {
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
          },
          totaltimetodo: {
            days: days,
            month: date.getMonth() + 1, // Adding 1 because getMonth() returns 0-based month
            remaindays: Math.round((28 / 100) * aftermonth),
          },
          remainingdays: days,
        });

        // Save updated data to local storage
        localStorage.data = JSON.stringify(getlocalstorage);

        setmetadata(JSON.parse(localStorage.data));
      } else {
        // If it already exists, you may want to handle this case
        console.log("Item with the same branch_name already exists");
      }
    }
  };

  return (
    <>
      <div className="timer_box" style={{ backgroundColor: timerboxbg }}>
        <div
          className="select_branch "
          onMouseOver={togglelist}
          onClick={toggle_branch}
          onMouseOut={toggle_branch2}
        >
          <div ref={selected_branch} className="selected_branch">
            <img src={linkofbranch} alt="" />
          </div>

          <div ref={selecting_branch} className="select_options">
            <div className="option">
              <img src="src/assets/css-3-svgrepo-com.svg" alt="" />
            </div>
            <div className="option">
              <img src="src/assets/html-5-svgrepo-com.svg" alt="" />
            </div>
            <div className="option">
              <img src="src/assets/javascript-logo-svgrepo-com.svg" alt="" />
            </div>
            <div className="option">
              <img src="src/assets/mongodb-svgrepo-com.svg" alt="" />
            </div>
            <div className="option">
              <img src="src/assets/node-svgrepo-com.svg" alt="" />
            </div>

            <div className="option">
              <img src="src/assets/react-svgrepo-com.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="selecthour ">
          <div className="hour">{hour}</div>
          <div className="hourheading">Hours</div>
          <div className="changehour">
            <div className="plus" onClick={increasevalue}>
              +
            </div>
            <div className="minus " onClick={decreasevalue}>
              -
            </div>
          </div>
        </div>

        <div className="selecthour selectday">
          <div className="hour">{day}</div>

          <div className="hourheading">Day in Week</div>
          <div className="changeday">
            <div className="plus" onClick={increasevalue}>
              +
            </div>
            <div className="minus" onClick={decreasevalue}>
              -
            </div>
          </div>
        </div>

        <div className="selectability" name="ability">
          <div
            className="optionsofability"
            id="ability-1"
            onClick={(event) => {
              event.target.children[0].checked = true;
              clickedability("ability-1");
            }}
            style={{ backgroundColor: getBackgroundColor("ability-1") }}
          >
            <input type="radio" name="ability" id="" />I am a faster learner 🏃‍♂️
          </div>

          <div
            className="optionsofability"
            id="ability-2"
            onClick={(event) => {
              event.target.children[0].checked = true;
              clickedability("ability-2");
            }}
            style={{ backgroundColor: getBackgroundColor("ability-2") }}
          >
            <input type="radio" name="ability" id="" />I can manage this 🐼
          </div>

          <div
            className="optionsofability"
            id="ability-3"
            onClick={(event) => {
              event.target.children[0].checked = true;
              clickedability("ability-3");
            }}
            style={{ backgroundColor: getBackgroundColor("ability-3") }}
          >
            <input type="radio" name="ability" id="" />I need more time to
            understand 🤯
          </div>
        </div>
        <div onClick={addcoursetostorage} className="addcourse">
          {"\u2192"}
        </div>
      </div>
      <div className="coursebox">
        <Coursetim data={metadata} currentdate={currentdate} />
      </div>
    </>
  );
}
