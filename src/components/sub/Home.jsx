import { React, useState, useRef, useEffect } from "react";
import Footer from "./Footer";

import "/src/styles.css";

const date = {
  _13: [
    {
      heading: "Felt Happy",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima corporis debitis quaerat tenetur, itaque natus.",
      timestamp: "12:30 am",
      hashtags: ["#hello", "#hai", "#bye"],
    },
    {
      heading: "hii",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima corporis debitis quaerat tenetur, itaque natus.",
      timestamp: "12:30 am",
      hashtags: ["#whatsappp", "#hai", "#bye"],
    },
    {
      heading: "Felt Happy",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima corporis debitis quaerat tenetur, itaque natus.",
      timestamp: "12:30 am",
      hashtags: ["#hello", "#hai", "#bye"],
    },
  ],
};

function Card({ user = "Bharath" }) {
  return (
    <div id="Card" className="bg-ntr-150 pb-4">
      <div className="flex justify-between pt-4 pr-1">
        <div className="bg-white py-1 px-4 rounded-r-xl">
          <img
            width="56px"
            height="54px"
            src="/src/assets/icon-app.png"
            alt="icon"
          />
        </div>
        <img src="/src/assets/notification.svg" alt="notification-icon" />
      </div>
      <div className="px-8 pt-5 pb-3">
        <h1 className="font-mon text-32xl font-bold">
          Hello, <span className="text-pr-500">{user}</span>
        </h1>
        <p className="font-rob text-14xl text-ntr-500">
          Mushio greets you good morning
        </p>
      </div>
    </div>
  );
}
function Events({ record }) {
  function Hashtags({ tags }) {
    return (
      <>
        {tags.map((hashtag, index) => {
          return (
            <span key={index} className="bg-pr-500 px-1 rounded-[9px]">
              {hashtag}
            </span>
          );
        })}
      </>
    );
  }
  return (
    <div
      element="Event"
      className="flex font-rob mx-[14px] br rounded-[8px] py-[20px] px-[23px] sh"
    >
      <div className="flex flex-col flex-[6] overflow-hidden">
        <div className="text-18xl font-bold">{record.heading}</div>
        <div className="text-12xl my-1">{record.text}</div>
        <div className="text-10xl flex gap-1 text-white overflow-scroll no-scrollbar">
          <Hashtags tags={record.hashtags} />
        </div>
      </div>
      <div className="flex-[1] flex flex-col items-center justify-between">
        <div>OG</div>
        <div className="text-10xl">{record.timestamp}</div>
      </div>
    </div>
  );
}

function Calender() {
  const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, []);

  const year = useRef(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [today, setToday] = useState(new Date().getDate());
  const numDays = new Date(year.current, month, 0).getDate();
  const days = [];
  const records = date[`_${today}`];

  for (let day = 1; day <= numDays; day++) {
    const date = new Date(year.current, month - 1, day);
    const name = date.toLocaleDateString("en-US", { weekday: "short" });
    const isToday = day === today ? true : false;
    days.push({ name, day, isToday });
  }

  function Cell({ dayName, dayNum, isToday, setToday }) {
    const addulation = isToday ? "bg-pr-500" : "hover:bg-pr-200";
    return (
      <span
        ref={isToday ? elementRef : null}
        className={
          addulation +
          " active:bg-pr-750 min-w-[35px] p-[4px] font-rob flex flex-col cursor-pointer justify-center items-center rounded-[8px]"
        }
        onClick={() => {
          !isToday && setToday(dayNum);
        }}
      >
        <div className="text-14xl">{dayName}</div>
        <div className="text-20xl font-bold">{dayNum}</div>
      </span>
    );
  }

  function up(month) {
    if (month === 13) {
      year.current = year.current + 1;
      setMonth(1);
    } else if (month === 0) {
      year.current = year.current - 1;
      setMonth(12);
    } else setMonth(month);
  }

  return (
    <div id="Calender" className="flex flex-grow flex-col overflow-hidden">
      <div className="flex justify-between items-center py-3">
        <span onClick={() => up(month - 1)}>
          <img height={18} width={18} src="/src/assets/chevron-l.svg" alt="" />
        </span>
        <span className="font-bold text-20xl">
          {new Date(year.current, month - 1).toLocaleDateString("en-US", {
            month: "long",
          }) +
            ", " +
            year.current}
        </span>
        <span onClick={() => up(month + 1)}>
          <img height={18} width={18} src="/src/assets/chevron-r.svg" alt="" />
        </span>
      </div>

      <div className="relative mb-[24px]">
        <span className="w-[55px] h-[100%] absolute left-0 fl"></span>
        <span className="w-[55px] h-[100%] absolute right-0 fr"></span>
        <div className="flex gap-2 overflow-scroll no-scrollbar ">
          <span className="px-4"></span>
          {days.map((date, index) => {
            return (
              <Cell
                key={index}
                dayName={date.name}
                dayNum={date.day}
                isToday={date.isToday}
                setToday={setToday}
              />
            );
          })}
          <span className="px-4"></span>
        </div>
      </div>
      <div className="overflow-scroll py-3 flex flex-col gap-[0.89rem]">
        {records &&
          records.map((record, index) => {
            return <Events key={index} record={record} />;
          })}
        {!records && (
          <div className="grid place-content-center"> No records found </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Card />
      <Calender />
      <Footer />
    </>
  );
}
