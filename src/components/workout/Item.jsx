import React from "react";
import Card from "../ui/Card";
import {
  BiBarChart,
  BiBlock,
  BiDumbbell,
  BiRepeat,
  BiTrash,
} from "react-icons/bi";

const Item = ({ workout }) => {
  return (
    <Card className={"max-w-[380px]"}>
      <header className="flex justify-between items-center border-b py-4 px-2">
        <div className="flex flex-col">
          <h4 className="text-lg">{workout?.exercise.name}</h4>
          <small className="bg-green-300 p-1 rounded-md self-start">
            {workout?.session.title}
          </small>
        </div>
        <BiTrash className="ml-auto" />
      </header>
      <div className="p-4">
        {workout.note ? (
          <p>{workout.note}</p>
        ) : (
          <p className="text-sm text-gray-500">No note for this workout.</p>
        )}
      </div>
      <footer className="flex gap-4 px-4 py-2 mt-auto">
        <p className="flex gap-4 items-center">
          <BiDumbbell /> {workout.weight}
        </p>
        <p className="flex gap-4 items-center">
          <BiBarChart /> {workout.numberOfSets}
        </p>
        <p className="flex gap-4 items-center">
          <BiRepeat /> {workout.repetations}
        </p>
      </footer>
    </Card>
  );
};

export default Item;
