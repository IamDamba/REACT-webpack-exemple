// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";

// ||||||||||||||||||||||||||||| App Component ||||||||||||||||||||||||||||||||||||

const App = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};
export default App;
