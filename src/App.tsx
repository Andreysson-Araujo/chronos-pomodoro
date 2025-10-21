import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export default function App() {
  return (
    <>
      <Heading>
        Ola Mundo2
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        placeat explicabo ut autem sequi dolorem enim est rem nam quod officia,
        voluptatibus consectetur at. Nisi delectus id doloremque animi dolorem.
      </p>
    </>
  );
}
