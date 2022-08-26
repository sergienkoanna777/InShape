import { useEffect } from "react";
const App = () => {

    useEffect(() => {
      fetch("/hi")
      .then(res => res.json())
      .then(data => console.log(data));
    }, [])
  return (
    <h1>Hello word!</h1>
  );
}

export default App;
