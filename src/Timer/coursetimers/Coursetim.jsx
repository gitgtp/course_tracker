import React, { useState} from "react";
//importing circularprogresbar component
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./coursetim.css";
import coursedata from "./Coursedata"; // importing data for course topics


//localStorage.clear()

//exporting Coursetim component
export default function Coursetim({ data, currentdate }) {
   
  //makeing array from coursedata obj 
  let arrofcoursedata = [];
  for (const key in coursedata) {
    arrofcoursedata.push(coursedata[key]);
  }


  // Here states are defined for percetage of how much course completed
  let [percentofnode, setpercentofnode] = useState(
    localStorage.node_completition
      ? () => {
          let totaltopics = 0;
          let completedtopics = 0;

          arrofcoursedata[3].map((v) => {
            totaltopics += v.topics.length;
          });

          JSON.parse(localStorage.node_completition).map((v) => {
            for (const key in v) {
              if (v[key] == "rgb(171, 239, 0)") completedtopics++;
            }
          });

          return Math.round((100 / totaltopics) * completedtopics);
        }
      : 0
  );
  let [percentofcss, setpercentofcss] = useState(
    localStorage.css_completition
      ? () => {
          let totaltopics = 0;
          let completedtopics = 0;

          arrofcoursedata[2].map((v) => {
            totaltopics += v.topics.length;
          });

          JSON.parse(localStorage.css_completition).map((v) => {
            for (const key in v) {
              if (v[key] == "rgb(171, 239, 0)") completedtopics++;
            }
          });

          return Math.round((100 / totaltopics) * completedtopics);
        }
      : 0
  );
  let [percentofHTML, setpercentofHTML] = useState(
    localStorage.HTML_completition
      ? () => {
          let totaltopics = 0;
          let completedtopics = 0;

          arrofcoursedata[1].map((v) => {
            totaltopics += v.topics.length;
          });

          JSON.parse(localStorage.HTML_completition).map((v) => {
            for (const key in v) {
              if (v[key] == "rgb(171, 239, 0)") completedtopics++;
            }
          });

          return Math.round((100 / totaltopics) * completedtopics);
        }
      : 0
  );
  let [percentofreact, setpercentofreact] = useState(
    localStorage.react_completition
      ? () => {
          let totaltopics = 0;
          let completedtopics = 0;

          arrofcoursedata[5].map((v) => {
            totaltopics += v.topics.length;
          });

          JSON.parse(localStorage.react_completition).map((v) => {
            for (const key in v) {
              if (v[key] == "rgb(171, 239, 0)") completedtopics++;
            }
          });

          return Math.round((100 / totaltopics) * completedtopics);
        }
      : 0
  );
  let [percentofjavascript, setpercentofjavascript] = useState(
    localStorage.javascript_completition
      ? () => {
          let totaltopics = 0;
          let completedtopics = 0;

          arrofcoursedata[0].map((v) => {
            totaltopics += v.topics.length;
          });

          JSON.parse(localStorage.javascript_completition).map((v) => {
            for (const key in v) {
              if (v[key] == "rgb(171, 239, 0)") completedtopics++;
            }
          });

          return Math.round((100 / totaltopics) * completedtopics);
        }
      : 0
  );
  let [percentofmongoDB, setpercentofmongoDB] = useState(
    localStorage.mongoDB_completition
      ? () => {
          let totaltopics = 0;
          let completedtopics = 0;

          arrofcoursedata[4].map((v) => {
            totaltopics += v.topics.length;
          });

          JSON.parse(localStorage.mongoDB_completition).map((v) => {
            for (const key in v) {
              if (v[key] == "rgb(171, 239, 0)") completedtopics++;
            }
          });

          return Math.round((100 / totaltopics) * completedtopics);
        }
      : 0
  );


// Calculating How many days to left 
  let setremaindays = (value, currentdate, index) => {
    let whencreate = value.whencreate.date;
    let finalgapdate;

    if (whencreate > 28) {
      finalgapdate = whencreate - currentdate;
    } else if (whencreate <= 28) {
      finalgapdate = whencreate - currentdate;
    }

    value.remainingdays = Math.abs(finalgapdate) - value.totaltimetodo.days;

    if (value.remainingdays > 1) {
      let loca = JSON.parse(localStorage.data);
      loca[index].remainingdays = value.remainingdays;

      if (localStorage.data) {
        localStorage.data = JSON.stringify(loca);
      }
    }
  };

  return (
    <>
      <div className="coursedata">

        {data.map((value, index) => {
          return (
            <>
              <div
                key={index}
                className="indicourse"
                style={{
                  backgroundColor:
                    value.branch.branch_name == "HTML"
                      ? "#E44D26"
                      : value.branch.branch_name == "css"
                      ? "#2965F1"
                      : value.branch.branch_name == "javascript"
                      ? "#F7DF1E"
                      : value.branch.branch_name == "node"
                      ? "rgb(145, 221, 32)"
                      : value.branch.branch_name == "react"
                      ? "skyblue"
                      : "white",
                }}
              >
                <div className="branchbox">
                  <img src={value.branch.branch_link} alt="" />
                  {value.branch.branch_name}
                </div>
                <div className="indicoursehour">
                  <span>
                    {value.hours}
                    <span>/Hours</span>
                  </span>
                  Day
                </div>
                <div className="indicoursedays">
                  <span>
                    {value.days}
                    <span>/Days</span>
                  </span>
                  Week
                </div>

                <div className="indicoursetotaltime">
                  <span>
                    {Math.round((28 / value.days) * 7)}
                    <span>/Days</span>
                  </span>
                  <span>
                    {value.totaltimetodo.month} month{" "}
                    {value.totaltimetodo.remaindays
                      ? `${value.totaltimetodo.remaindays} days`
                      : null}
                  </span>
                  Challenge
                </div>
                <div className="indicourseremeintime">
                  <span>
                    {setremaindays(value, currentdate, index)}
                    {Math.abs(value.remainingdays)}
                    <span>/Days</span>
                  </span>
                  Remeining
                </div>
                <div className="abilityavtar">
                  <CircularProgressbar
                    value={
                      value.branch.branch_name == "node"
                        ? percentofnode
                        : value.branch.branch_name == "react"
                        ? percentofreact
                        : value.branch.branch_name == "css"
                        ? percentofcss
                        : value.branch.branch_name == "HTML"
                        ? percentofHTML
                        : value.branch.branch_name == "mongoDB"
                        ? percentofmongoDB
                        : percentofjavascript
                    }
                    text={`${
                      value.branch.branch_name == "node"
                        ? percentofnode
                        : value.branch.branch_name == "react"
                        ? percentofreact
                        : value.branch.branch_name == "css"
                        ? percentofcss
                        : value.branch.branch_name == "HTML"
                        ? percentofHTML
                        : value.branch.branch_name == "mongoDB"
                        ? percentofmongoDB
                        : percentofjavascript
                    }%`}
                    maxValue={100}
                    strokeWidth={8}
                    styles={{
                      background: { fill: "transparent" },
                      path: { stroke: "black" },

                      trail: {
                        stroke: `${
                          value.branch.branch_name == "mongoDB"
                            ? "rgb(243, 243, 243)"
                            : "transparent"
                        }`,
                      },

                      text: { fill: "black" },
                    }}
                    counterClockwise={true}
                    background={true}
                    backgroundPadding={10}
                  />
                </div>

                <img
                  onClick={(e) => {
                    e.currentTarget.parentElement.nextElementSibling.style.display =
                      e.currentTarget.parentElement.nextElementSibling.style
                        .display == "none"
                        ? "block"
                        : "none";
                  }}
                  className="downarrow"
                  src="src/assets/arrow-down-sign-to-navigate-svgrepo-com.svg"
                  alt="gg"
                />
              </div>

              <div style={{ display: "none" }} className="courseinbrief">


                {arrofcoursedata.map((v, i) => {

                  let coursename =
                    i == 0
                      ? "javascript"
                      : i == 1
                      ? "HTML"
                      : i == 2
                      ? "css"
                      : i == 3
                      ? "node"
                      : i == 4
                      ? "mongoDB"
                      : "react";

                  if (coursename === value.branch.branch_name) {
                    return (
                      <>
                        <div key={i} className="courseparentbox">
                          <div className="courseheading">
                            {coursename}
                            <div
                            // onClick={(event) => {
                            //   let currenttopictext =
                            //     event.currentTarget.parentElement.innerText;

                            //   setislistlocked((prev) => {
                            //     return prev.color == "red"
                            //       ? {
                            //           color: "green",
                            //           d: "M25 12.034l-14.28 0-0.518-2.321c-0.883-3.293 0.65-6.576 4.159-7.516 3.473-0.93 6.534 1.061 7.432 4.41l0.425 1.686c0.143 0.534 0.691 0.85 1.225 0.707s0.85-0.691 0.707-1.225l-0.425-1.687c-1.187-4.433-5.325-7.045-9.881-5.824-4.574 1.226-6.741 5.607-5.573 9.966l0.402 1.803h-1.673c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h18c2.206 0 4-1.794 4-4v-12c0-2.206-1.794-4-4-4zM27 28.035c0 1.102-0.898 2-2 2h-18c-1.103 0-2-0.898-2-2v-12c0-1.102 0.897-2 2-2h18c1.102 0 2 0.898 2 2v12zM16 18.035c-1.104 0-2 0.895-2 2 0 0.738 0.405 1.376 1 1.723v3.277c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.277c0.595-0.346 1-0.985 1-1.723 0-1.105-0.895-2-2-2z",
                            //           whichtopic: currenttopictext,
                            //         }
                            //       : {
                            //           color: "red",
                            //           whichtopic: "none",
                            //           d: "none",
                            //         };
                            //   });
                            // }}
                            >
                              {/* <svg
                                fill={
                                  islistlocked.whichtopic ==
                                  value.branch.branch_name
                                    ? "green"
                                    : "red"
                                }
                                width="100%"
                                height="100%"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d={
                                    islistlocked.whichtopic ==
                                    value.branch.branch_name
                                      ? islistlocked.d
                                      : "M25 12h-1v-3.816c0-4.589-3.32-8.184-8.037-8.184-4.736 0-7.963 3.671-7.963 8.184v3.816h-1c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h18c2.206 0 4-1.794 4-4v-12c0-2.206-1.794-4-4-4zM10 8.184c0-3.409 2.33-6.184 5.963-6.184 3.596 0 6.037 2.716 6.037 6.184v3.816h-12v-3.816zM27 28c0 1.102-0.898 2-2 2h-18c-1.103 0-2-0.898-2-2v-12c0-1.102 0.897-2 2-2h18c1.102 0 2 0.898 2 2v12zM16 18c-1.104 0-2 0.895-2 2 0 0.738 0.405 1.376 1 1.723v3.277c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.277c0.595-0.346 1-0.985 1-1.723 0-1.105-0"
                                  }
                                ></path>
                              </svg> */}
                            </div>
                            <img
                              onClick={(e) => {
                                e.currentTarget.parentElement.nextElementSibling.style.display =
                                  e.currentTarget.parentElement
                                    .nextElementSibling.style.display == "none"
                                    ? "block"
                                    : "none";
                              }}
                              src="src/assets/arrow-down-sign-to-navigate-svgrepo-com.svg"
                              alt=""
                            />
                          </div>

                          <div
                            style={{ display: "none" }}
                            className="coursetopicsbox"
                          >
                            {v.map((va, ii) => {
                              return (
                                <>
                                  <div key={ii} className="topics">
                                    <div className="topicshead">
                                      {va.category}

                                      <img
                                        src="src/assets/arrow-down-sign-to-navigate-svgrepo-com.svg"
                                        alt=""
                                        onClick={(e) => {
                                          e.currentTarget.parentElement.nextElementSibling.style.display =
                                            e.currentTarget.parentElement
                                              .nextElementSibling.style
                                              .display == "none"
                                              ? "block"
                                              : "none";
                                        }}
                                      />
                                    </div>

                                    <div
                                      style={{ display: "none" }}
                                      className="subtopics"
                                    >
                                      {va.topics.map((vo, iii) => {
                                        let getcheck = (getforwhichsearch) => {
                                          if (
                                            JSON.parse(getforwhichsearch).some(
                                              (obj) =>
                                                Object.keys(obj).includes(vo)
                                            )
                                          ) {
                                            for (let value of JSON.parse(
                                              getforwhichsearch
                                            )) {
                                              for (const key in value) {
                                                if (vo == key) {
                                                  return value[key];
                                                }
                                              }
                                            }
                                          }

                                          if (
                                            !JSON.parse(getforwhichsearch).some(
                                              (obj) =>
                                                Object.keys(obj).includes(vo)
                                            )
                                          ) {
                                            return "white";
                                          }
                                        };

                                        return (
                                          <>
                                            <div
                                              key={iii}
                                              className="subtopicschild"
                                            >
                                              {vo}
                                              <div
                                                className="checkicon"
                                                onClick={(event) => {
                                                  event.currentTarget.children[0].setAttribute(
                                                    "fill",
                                                    event.currentTarget.childNodes[0].getAttribute(
                                                      "fill"
                                                    ) == "white"
                                                      ? "rgb(171, 239, 0)"
                                                      : "white"
                                                  );


                                                  let keyofclick =
                                                    event.currentTarget
                                                      .parentElement.innerText;

                                                  switch (
                                                    event.currentTarget
                                                      .parentElement
                                                      .parentElement
                                                      .parentElement
                                                      .parentElement
                                                      .parentElement.children[0]
                                                      .innerText
                                                  ) {
                                                    case "css":
                                                      if (
                                                        !localStorage.css_completition
                                                      ) {
                                                        localStorage.css_completition =
                                                          JSON.stringify([]);
                                                      }

                                                      let isdonestoreddata =
                                                        JSON.parse(
                                                          localStorage.css_completition
                                                        );

                                                      if (
                                                        !isdonestoreddata.some(
                                                          (obj) =>
                                                            Object.keys(
                                                              obj
                                                            ).includes(
                                                              keyofclick
                                                            )
                                                        )
                                                      ) {
                                                        isdonestoreddata.push({
                                                          [keyofclick]:
                                                            event.currentTarget.children[0].getAttribute(
                                                              "fill"
                                                            ),
                                                        });
                                                      } else {
                                                        for (const obj of isdonestoreddata) {
                                                          for (let key in obj) {
                                                            if (
                                                              key == keyofclick
                                                            ) {
                                                              obj[key] =
                                                                obj[key] ==
                                                                "white"
                                                                  ? "rgb(171, 239, 0)"
                                                                  : "white";
                                                            }
                                                          }
                                                        }
                                                      }

                                                      localStorage.css_completition =
                                                        JSON.stringify(
                                                          isdonestoreddata
                                                        );

                                                      setpercentofcss(() => {
                                                        let totaltopics = 0;
                                                        let completedtopics = 0;

                                                        arrofcoursedata[2].map(
                                                          (v) => {
                                                            totaltopics +=
                                                              v.topics.length;
                                                          }
                                                        );

                                                        JSON.parse(
                                                          localStorage.css_completition
                                                        ).map((v) => {
                                                          for (const key in v) {
                                                            if (
                                                              v[key] ==
                                                              "rgb(171, 239, 0)"
                                                            )
                                                              completedtopics++;
                                                          }
                                                        });

                                                        return Math.round(
                                                          (100 / totaltopics) *
                                                            completedtopics
                                                        );
                                                      });

                                                      break;

                                                    case "HTML":
                                                      if (
                                                        !localStorage.HTML_completition
                                                      ) {
                                                        localStorage.HTML_completition =
                                                          JSON.stringify([]);
                                                      }

                                                      let isdonestoreddatahtml =
                                                        JSON.parse(
                                                          localStorage.HTML_completition
                                                        );

                                                      if (
                                                        !isdonestoreddatahtml.some(
                                                          (obj) =>
                                                            Object.keys(
                                                              obj
                                                            ).includes(
                                                              keyofclick
                                                            )
                                                        )
                                                      ) {
                                                        isdonestoreddatahtml.push(
                                                          {
                                                            [keyofclick]:
                                                              event.currentTarget.children[0].getAttribute(
                                                                "fill"
                                                              ),
                                                          }
                                                        );
                                                      } else {
                                                        for (const obj of isdonestoreddatahtml) {
                                                          for (let key in obj) {
                                                            if (
                                                              key == keyofclick
                                                            ) {
                                                              obj[key] =
                                                                obj[key] ==
                                                                "white"
                                                                  ? "rgb(171, 239, 0)"
                                                                  : "white";
                                                            }
                                                          }
                                                        }
                                                      }

                                                      localStorage.HTML_completition =
                                                        JSON.stringify(
                                                          isdonestoreddatahtml
                                                        );

                                                      setpercentofHTML(() => {
                                                        let totaltopics = 0;
                                                        let completedtopics = 0;

                                                        arrofcoursedata[1].map(
                                                          (v) => {
                                                            totaltopics +=
                                                              v.topics.length;
                                                          }
                                                        );

                                                        JSON.parse(
                                                          localStorage.HTML_completition
                                                        ).map((v) => {
                                                          for (const key in v) {
                                                            if (
                                                              v[key] ==
                                                              "rgb(171, 239, 0)"
                                                            )
                                                              completedtopics++;
                                                          }
                                                        });

                                                        return Math.round(
                                                          (100 / totaltopics) *
                                                            completedtopics
                                                        );
                                                      });

                                                      break;

                                                    case "mongoDB":
                                                      if (
                                                        !localStorage.mongoDB_completition
                                                      ) {
                                                        localStorage.mongoDB_completition =
                                                          JSON.stringify([]);
                                                      }

                                                      let isdonestoreddatamongoDB =
                                                        JSON.parse(
                                                          localStorage.mongoDB_completition
                                                        );

                                                      if (
                                                        !isdonestoreddatamongoDB.some(
                                                          (obj) =>
                                                            Object.keys(
                                                              obj
                                                            ).includes(
                                                              keyofclick
                                                            )
                                                        )
                                                      ) {
                                                        isdonestoreddatamongoDB.push(
                                                          {
                                                            [keyofclick]:
                                                              event.currentTarget.children[0].getAttribute(
                                                                "fill"
                                                              ),
                                                          }
                                                        );
                                                      } else {
                                                        for (const obj of isdonestoreddatamongoDB) {
                                                          for (let key in obj) {
                                                            if (
                                                              key == keyofclick
                                                            ) {
                                                              obj[key] =
                                                                obj[key] ==
                                                                "white"
                                                                  ? "rgb(171, 239, 0)"
                                                                  : "white";
                                                            }
                                                          }
                                                        }
                                                      }

                                                      localStorage.mongoDB_completition =
                                                        JSON.stringify(
                                                          isdonestoreddatamongoDB
                                                        );

                                                      setpercentofmongoDB(
                                                        () => {
                                                          let totaltopics = 0;
                                                          let completedtopics = 0;

                                                          arrofcoursedata[4].map(
                                                            (v) => {
                                                              totaltopics +=
                                                                v.topics.length;
                                                            }
                                                          );

                                                          JSON.parse(
                                                            localStorage.mongoDB_completition
                                                          ).map((v) => {
                                                            for (const key in v) {
                                                              if (
                                                                v[key] ==
                                                                "rgb(171, 239, 0)"
                                                              )
                                                                completedtopics++;
                                                            }
                                                          });

                                                          return Math.round(
                                                            (100 /
                                                              totaltopics) *
                                                              completedtopics
                                                          );
                                                        }
                                                      );

                                                      break;
                                                    case "node":
                                                      if (
                                                        !localStorage.node_completition
                                                      ) {
                                                        localStorage.node_completition =
                                                          JSON.stringify([]);
                                                      }

                                                      let isdonestoreddatanode =
                                                        JSON.parse(
                                                          localStorage.node_completition
                                                        );

                                                      if (
                                                        !isdonestoreddatanode.some(
                                                          (obj) =>
                                                            Object.keys(
                                                              obj
                                                            ).includes(
                                                              keyofclick
                                                            )
                                                        )
                                                      ) {
                                                        isdonestoreddatanode.push(
                                                          {
                                                            [keyofclick]:
                                                              event.currentTarget.children[0].getAttribute(
                                                                "fill"
                                                              ),
                                                          }
                                                        );
                                                      } else {
                                                        for (const obj of isdonestoreddatanode) {
                                                          for (let key in obj) {
                                                            if (
                                                              key == keyofclick
                                                            ) {
                                                              obj[key] =
                                                                obj[key] ==
                                                                "white"
                                                                  ? "rgb(171, 239, 0)"
                                                                  : "white";
                                                            }
                                                          }
                                                        }
                                                      }

                                                      localStorage.node_completition =
                                                        JSON.stringify(
                                                          isdonestoreddatanode
                                                        );

                                                      setpercentofnode(() => {
                                                        let totaltopics = 0;
                                                        let completedtopics = 0;

                                                        arrofcoursedata[3].map(
                                                          (v) => {
                                                            totaltopics +=
                                                              v.topics.length;
                                                          }
                                                        );

                                                        JSON.parse(
                                                          localStorage.node_completition
                                                        ).map((v) => {
                                                          for (const key in v) {
                                                            if (
                                                              v[key] ==
                                                              "rgb(171, 239, 0)"
                                                            )
                                                              completedtopics++;
                                                          }
                                                        });

                                                        return Math.round(
                                                          (100 / totaltopics) *
                                                            completedtopics
                                                        );
                                                      });

                                                      break;

                                                    case "react":
                                                      if (
                                                        !localStorage.react_completition
                                                      ) {
                                                        localStorage.react_completition =
                                                          JSON.stringify([]);
                                                      }

                                                      let isdonestoreddatareact =
                                                        JSON.parse(
                                                          localStorage.react_completition
                                                        );

                                                      if (
                                                        !isdonestoreddatareact.some(
                                                          (obj) =>
                                                            Object.keys(
                                                              obj
                                                            ).includes(
                                                              keyofclick
                                                            )
                                                        )
                                                      ) {
                                                        isdonestoreddatareact.push(
                                                          {
                                                            [keyofclick]:
                                                              event.currentTarget.children[0].getAttribute(
                                                                "fill"
                                                              ),
                                                          }
                                                        );
                                                      } else {
                                                        for (const obj of isdonestoreddatareact) {
                                                          for (let key in obj) {
                                                            if (
                                                              key == keyofclick
                                                            ) {
                                                              obj[key] =
                                                                obj[key] ==
                                                                "white"
                                                                  ? "rgb(171, 239, 0)"
                                                                  : "white";
                                                            }
                                                          }
                                                        }
                                                      }

                                                      localStorage.react_completition =
                                                        JSON.stringify(
                                                          isdonestoreddatareact
                                                        );

                                                      setpercentofreact(() => {
                                                        let totaltopics = 0;
                                                        let completedtopics = 0;

                                                        arrofcoursedata[5].map(
                                                          (v) => {
                                                            totaltopics +=
                                                              v.topics.length;
                                                          }
                                                        );

                                                        JSON.parse(
                                                          localStorage.react_completition
                                                        ).map((v) => {
                                                          for (const key in v) {
                                                            if (
                                                              v[key] ==
                                                              "rgb(171, 239, 0)"
                                                            )
                                                              completedtopics++;
                                                          }
                                                        });

                                                        return Math.round(
                                                          (100 / totaltopics) *
                                                            completedtopics
                                                        );
                                                      });

                                                      break;
                                                    case "javascript":
                                                      if (
                                                        !localStorage.javascript_completition
                                                      ) {
                                                        localStorage.javascript_completition =
                                                          JSON.stringify([]);
                                                      }

                                                      let isdonestoreddatajavascript =
                                                        JSON.parse(
                                                          localStorage.javascript_completition
                                                        );

                                                      if (
                                                        !isdonestoreddatajavascript.some(
                                                          (obj) =>
                                                            Object.keys(
                                                              obj
                                                            ).includes(
                                                              keyofclick
                                                            )
                                                        )
                                                      ) {
                                                        isdonestoreddatajavascript.push(
                                                          {
                                                            [keyofclick]:
                                                              event.currentTarget.children[0].getAttribute(
                                                                "fill"
                                                              ),
                                                          }
                                                        );
                                                      } else {
                                                        for (const obj of isdonestoreddatajavascript) {
                                                          for (let key in obj) {
                                                            if (
                                                              key == keyofclick
                                                            ) {
                                                              obj[key] =
                                                                obj[key] ==
                                                                "white"
                                                                  ? "rgb(171, 239, 0)"
                                                                  : "white";
                                                            }
                                                          }
                                                        }
                                                      }

                                                      localStorage.javascript_completition =
                                                        JSON.stringify(
                                                          isdonestoreddatajavascript
                                                        );

                                                      setpercentofjavascript(
                                                        () => {
                                                          let totaltopics = 0;
                                                          let completedtopics = 0;

                                                          arrofcoursedata[0].map(
                                                            (v) => {
                                                              totaltopics +=
                                                                v.topics.length;
                                                            }
                                                          );

                                                          JSON.parse(
                                                            localStorage.javascript_completition
                                                          ).map((v) => {
                                                            for (const key in v) {
                                                              if (
                                                                v[key] ==
                                                                "rgb(171, 239, 0)"
                                                              )
                                                                completedtopics++;
                                                            }
                                                          });

                                                          return Math.round(
                                                            (100 /
                                                              totaltopics) *
                                                              completedtopics
                                                          );
                                                        }
                                                      );

                                                      break;

                                                    default:
                                                      console.log(
                                                        " data not found"
                                                      );
                                                      break;
                                                  }
                                                }}
                                              >
                                                <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 24 24"
                                                  fill={
                                                    value.branch.branch_name ==
                                                      "javascript" &&
                                                    localStorage.javascript_completition
                                                      ? getcheck(
                                                          localStorage.javascript_completition
                                                        )
                                                      : value.branch
                                                          .branch_name ==
                                                          "node" &&
                                                        localStorage.node_completition
                                                      ? getcheck(
                                                          localStorage.node_completition
                                                        )
                                                      : value.branch
                                                          .branch_name ==
                                                          "HTML" &&
                                                        localStorage.HTML_completition
                                                      ? getcheck(
                                                          localStorage.HTML_completition
                                                        )
                                                      : value.branch
                                                          .branch_name ==
                                                          "mongoDB" &&
                                                        localStorage.mongoDB_completition
                                                      ? getcheck(
                                                          localStorage.mongoDB_completition
                                                        )
                                                      : value.branch
                                                          .branch_name ==
                                                          "css" &&
                                                        localStorage.css_completition
                                                      ? getcheck(
                                                          localStorage.css_completition
                                                        )
                                                      : value.branch
                                                          .branch_name ==
                                                          "react" &&
                                                        localStorage.react_completition
                                                      ? getcheck(
                                                          localStorage.react_completition
                                                        )
                                                      : "white"
                                                  }
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    id="svgicon"
                                                    opacity="0.1"
                                                    d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z"
                                                    fill=""
                                                  />
                                                  <path
                                                    d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z"
                                                    stroke="#323232"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  />
                                                  <path
                                                    d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10"
                                                    stroke="#323232"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </div>
                                            </div>
                                          </>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
