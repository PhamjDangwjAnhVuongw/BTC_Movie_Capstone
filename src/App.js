import { TimePicker } from "antd";
import dayjs from "dayjs";

function App() {
  return (
    <>
      <TimePicker defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")} />
    </>
  );
}

export default App;
