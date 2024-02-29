import React, { useState } from "react";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { useWorkoutSession } from "../../contexts/WorkoutSessionContext";

const Item = ({ session }) => {
  const [show, setShow] = useState(false);
  const { deleteSession } = useWorkoutSession();

  return (
    <Card className={"max-w-96"}>
      <header className="flex justify-between items-center px-4 py-2 border-b">
        <div>
          {session.title}
          <h4 className="text-sm text-gray-500">@{session.user.username}</h4>
        </div>
        <BiTrash
          className="text-red-500 cursor-pointer"
          size={20}
          onClick={() => deleteSession(session._id)}
        />
      </header>
      <div className="p-4">
        <small className="">
          {session.note.length > 0
            ? session.note.length > 50 && show
              ? session.note + " "
              : session.note.slice(0, 50) + " ... "
            : ""}
        </small>
        {session.note.length > 50 && (
          <button
            className="text-xs text-blue-500"
            onClick={() => setShow((show) => !show)}
          >
            {show ? " hide " : " show "}
          </button>
        )}
      </div>
      <footer className="flex justify-between items-center p-4 mt-auto">
        <Link className="text-lg text-green-700" to={`sessions/${session._id}`}>
          Detail
        </Link>
      </footer>
    </Card>
  );
};

export default Item;
