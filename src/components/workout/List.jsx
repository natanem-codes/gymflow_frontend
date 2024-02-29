import Item from "./Item";
import Box from "../ui/Box";
import Alert from "../ui/Alert";

const List = ({ workouts }) => {
  return (
    <>
      {workouts.length > 0 ? (
        <>
          <h2>Here are your workouts</h2>
          <Box>
            {workouts.map((workout) => (
              <Item key={workout._id} workout={workout} />
            ))}
          </Box>
        </>
      ) : (
        <Alert>
          <p>
            No workouts recorded yet. Start yourworkout and record your progress
          </p>
        </Alert>
      )}
    </>
  );
};

export default List;
