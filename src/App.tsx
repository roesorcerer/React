//importing from components folder and getting ListGroup
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

//function to call the message inside div tags.
function App() {
  const [alertVisibile, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisibile && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      Hello <strong>World</strong>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisibility(true)}>Press Me</Button>
    </div>
  );
}

//displaying the App
export default App;
