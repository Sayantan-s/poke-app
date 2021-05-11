import { Artboard, Backdrop, GameModal } from "components";
import { GlobalContext } from "context";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";

function App() {

  const { modalIsOpen } = useContext(GlobalContext);

  return (
    <>
      <Artboard />
      <AnimatePresence>
        {
          modalIsOpen &&   
          <>
            <GameModal />
            <Backdrop />
          </>
        }
      </AnimatePresence>
    </>
  );
}

export default App;
