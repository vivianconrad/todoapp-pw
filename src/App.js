import React, { useState, useRef, useEffect } from "react";
import 'react-circular-progressbar/dist/styles.css';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form.js";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import LandingPageColorLight from "./components/LandingPageColorLight";
import ScrollLight from "./components/ScrollLight";
import PopUpLight from "./components/PopUpLight";
import ShoppingLight from "./components/ShoppingLight";
import SettingsLight from "./components/SettingsLight";
import SettingsScroll from "./components/SettingsScroll";

import { nanoid } from "nanoid";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";

const percentage = 66;

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');
  const percentage = 66;

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new obkect
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }


  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }


  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks
      .filter(FILTER_MAP[filter])
      .map(task => (
          <Todo
              id={task.id}
              name={task.name}
              completed={task.completed}
              key={task.id}
              toggleTaskCompleted={toggleTaskCompleted}
              deleteTask={deleteTask}
              editTask={editTask}
          />
      ));

  const filterList = FILTER_NAMES.map(name => (
      <FilterButton
          key={name}
          name={name}
          isPressed={name === filter}
          setFilter={setFilter}
      />
  ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }


  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
      <CircularProgressbarWithChildren
          value={75}
          strokeWidth={8}
          styles={buildStyles({
            pathColor: "#f00",
            trailColor: "transparent"
          })}
      >
        {/*
          Width here needs to be (100 - 2 * strokeWidth)%
          in order to fit exactly inside the outer progressbar.
        */}
        <div style={{ width: "84%" }}>
          <CircularProgressbar
              value={70}
              styles={buildStyles({
                trailColor: "transparent"
              })}
          />
        </div>
      </CircularProgressbarWithChildren>,

      <div className="todoapp stack-large">
        <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">
          {filterList}
        </div>
        <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
          {headingText}
        </h2>
        <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
  );
}

export default App;

const smileData = {
  overlapGroup: "/img/ellipse-2@1x.png",
  path7: "/img/path-28@1x.png",
  path28: "/img/path-28@1x.png",
  path6: "/img/path-6@1x.png",
};

const sendButtonData = {
  src: "/img/send-button-triangle@1x.png",
};

const badPieChartData = {
  path3: "/img/path-3@1x.png",
  path4: "/img/path-4@1x.png",
  path5: "/img/path-5@1x.png",
  line2: "/img/line-2@1x.png",
  line3: "/img/line-3@1x.png",
  line4: "/img/line-4@1x.png",
};

const redTaskData = {
  path8: "/img/path-8-2@1x.png",
  line1: "/img/line-1-2@1x.png",
  path17: "/img/path-17@1x.png",
};

const task1Data = {
  path8: "/img/path-8-2@1x.png",
  line1: "/img/line-1-2@1x.png",
};

const greenTask1Data = {
  path8: "/img/path-8-1@1x.png",
  line1: "/img/line-1-1@1x.png",
};

const task21Data = {
  greenTaskProps: greenTask1Data,
};

const greenTask2Data = {
  path8: "/img/path-8@1x.png",
  line1: "/img/line-1@1x.png",
};

const task22Data = {
  greenTaskProps: greenTask2Data,
};

const landingPageColorLightData = {
  title: "Welcome, User!",
  letsAddATaskTypeHere: "Let’s add a task! Type here…",
  task: "Task",
  smileProps: smileData,
  sendButtonProps: sendButtonData,
  badPieChartProps: badPieChartData,
  redTaskProps: redTaskData,
  taskProps: task1Data,
  task21Props: task21Data,
  task22Props: task22Data,
};

const sendButton2Data = {
  src: "/img/polygon-1-1@1x.png",
};

const coloredSmile1Data = {
  path18: "/img/path-18@1x.png",
};

const task3Data = {
  path8: "/img/path-8-2@1x.png",
  line1: "/img/line-1-2@1x.png",
  className: "task-4",
};

const task4Data = {
  path8: "/img/path-8-2@1x.png",
  line1: "/img/line-1-2@1x.png",
};

const task5Data = {
  path8: "/img/path-8-1@1x.png",
  line1: "/img/line-1-1@1x.png",
};

const task6Data = {
  path8: "/img/path-8@1x.png",
  line1: "/img/line-1@1x.png",
};

const task7Data = {
  path8: "/img/path-8-2@1x.png",
  line1: "/img/line-1-2@1x.png",
};

const task8Data = {
  path8: "/img/path-8-2@1x.png",
  line1: "/img/line-1-2@1x.png",
};

const task9Data = {
  path8: "/img/path-8-1@1x.png",
  line1: "/img/line-1-1@1x.png",
};

const task10Data = {
  path8: "/img/path-8@1x.png",
  line1: "/img/line-1@1x.png",
  className: "task-6",
};

const scrollLightData = {
  overlapGroup: "/img/smaller-text-box@1x.png",
  letsAddATaskTypeHere: "Let’s add a task! Type here…",
  overlapGroup9: "/img/rectangle-7@1x.png",
  shareIcon: "/img/share-icon@1x.png",
  group6: "/img/smile-white@1x.png",
  settingIcon: "/img/setting-icon@1x.png",
  sendButton2Props: sendButton2Data,
  coloredSmileProps: coloredSmile1Data,
  task1Props: task3Data,
  task2Props: task4Data,
  task3Props: task5Data,
  task4Props: task6Data,
  task5Props: task7Data,
  task6Props: task8Data,
  task7Props: task9Data,
  task8Props: task10Data,
};

const coloredSmile2Data = {
  path18: "/img/path-18-1@1x.png",
  className: "group-2-1",
};

const task11Data = {
  path8: "/img/path-8-2@1x.png",
  line1: "/img/line-1-2@1x.png",
  className: "task-7",
};

const task12Data = {
  path8: "/img/path-8-2@1x.png",
  line1: "/img/line-1-2@1x.png",
};

const task13Data = {
  path8: "/img/path-8@1x.png",
  line1: "/img/line-1@1x.png",
};

const task14Data = {
  path8: "/img/path-8-2@1x.png",
  line1: "/img/line-1-2@1x.png",
};

const task15Data = {
  path8: "/img/path-8-2@1x.png",
  line1: "/img/line-1-2@1x.png",
};

const task16Data = {
  path8: "/img/path-8@1x.png",
  line1: "/img/line-1@1x.png",
  className: "task-8",
};

const task17Data = {
  path8: "/img/path-8-1@1x.png",
  line1: "/img/line-1-1@1x.png",
  className: "task-9",
};

const shareIconData = {
  src: "/img/file--color-1x-png@1x.png",
};

const coloredSmile3Data = {
  path18: "/img/path-18-1@1x.png",
  className: "group-2-2",
};

const settingIconData = {
  src: "/img/file--color-1x-png-1@1x.png",
};

const popUpLightData = {
  overlapGroup: "/img/smaller-text-box@1x.png",
  typeSomethingHere: "Type something here…",
  polygon1: "/img/polygon-1-1@1x.png",
  overlapGroup4: "/img/opened-task--red@1x.png",
  task: "Task",
  completedButtonBlue: "/img/completed-button---blue@1x.png",
  thisIsATaskDescr: <React.Fragment>This is a task description paragraph. This is a <br />task description paragraph. This is a task<br />description paragraph. This is a task description<br /> paragraph.</React.Fragment>,
  itsCompleted: "It’s Completed!",
  coloredSmile1Props: coloredSmile2Data,
  task1Props: task11Data,
  task2Props: task12Data,
  task3Props: task13Data,
  task4Props: task14Data,
  task5Props: task15Data,
  task6Props: task16Data,
  task7Props: task17Data,
  shareIconProps: shareIconData,
  coloredSmile2Props: coloredSmile3Data,
  settingIconProps: settingIconData,
};

const heartIconData = {
  src: "/img/file--color@1x.png",
};

const profileCoinData = {
  heartIconProps: heartIconData,
};

const categoryName21Data = {
  overlapGroup3: "/img/category-name-red@1x.png",
};

const categoryName22Data = {
  overlapGroup3: "/img/category-name-blue@1x.png",
  className: "category-name-4",
};

const categoryName23Data = {
  overlapGroup3: "/img/category-name-green@1x.png",
  className: "category-name-4",
};

const settingsLightData = {
  profile: "Profile",
  name: "Name:",
  displaySettings: "Display Settings",
  profileCoinProps: profileCoinData,
  categoryName21Props: categoryName21Data,
  categoryName22Props: categoryName22Data,
  categoryName23Props: categoryName23Data,
};

const categoryName3Data = {
  className: "category-name-1",
};

const categoryName32Data = {
  path29: "/img/path-29-2@1x.png",
};

const categoryName33Data = {
  path29: "/img/path-29-1@1x.png",
};

const categoryName34Data = {
  path29: "/img/path-29-3@1x.png",
};

const heading2Data = {
  className: "heading-2",
};

const settingsScrollData = {
  displaySettings: "Display Settings",
  notificationSettings: "Notification Settings",
  scheduleNotifications: <React.Fragment>Schedule <br />Notifications</React.Fragment>,
  on1: "ON",
  place: "Change",
  stimuliSettings: "Stimuli Settings",
  confetti: "Confetti",
  on2: "ON",
  viewTutorial: "View Tutorial",
  categoryNameProps: categoryName3Data,
  categoryName31Props: categoryName32Data,
  categoryName32Props: categoryName33Data,
  categoryName33Props: categoryName34Data,
  headingProps: heading2Data,
};