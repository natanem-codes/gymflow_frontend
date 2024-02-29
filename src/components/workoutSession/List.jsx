import Item from "./Item";
import Alert from "../ui/Alert";

const List = ({ sessions }) => {
  return (
    <section className="">
      {sessions?.length > 0 ? (
        <>
          <h2 className="text-xl text-center">Here are your sessions</h2>
          <div className="grid grid-cols-4 gap-4 my-4 ">
            {sessions.map((s) => (
              <Item key={s._id} session={s} />
            ))}
          </div>
        </>
      ) : (
        <Alert>
          <p>
            You have no sessions created. Please create one to track you
            workout.
          </p>
        </Alert>
      )}
    </section>
  );
};

export default List;
