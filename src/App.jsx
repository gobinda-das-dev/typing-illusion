import React, { useRef, useEffect } from "react";

const App = () => {
  const characters = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
  ];

  useEffect(() => {
    const keys = document.querySelectorAll('.keys');
    window.addEventListener("keypress", event => makeActive(event.key));
    window.addEventListener("keyup", event => makeInactive(event.key));

    const makeActive = (key) => {
      keys.forEach(k => {
        if(k.textContent === key) {
          k.classList.add('active');
        }
      })
    }

    const makeInactive = (key) => {
      keys.forEach(k => {
        if(k.textContent === key) {
          k.classList.remove('active');
        }
      })
    }


    return () => {
      window.removeEventListener("keypress", makeActive);
      window.removeEventListener("keyup", makeInactive);
    };
  }, []);

  return (
    <main className="w-full h-screen flex flex-col items-center gap-3 justify-center bg-[var(--bg)]">
      <div className="h-fit flex flex-col gap-y-3 items-center w-full">
        {characters.map((cr, id) => (
          <div key={id} className="flex gap-x-3">
            {cr.map((c, index) => (
              <button
                key={c}
                className="keys shadow-lg transition-all duration-75 size-20 rounded-2xl font-semibold text-3xl text-[var(--text)] bg-[var(--primary)]"
              >
                {c}
              </button>
            ))}
          </div>
        ))}
      </div>

      <button className="px-52 py-6 text-2xl font-semibold rounded-lg bg-[var(--secondary)] text-[var(--bg)]">
        qwerty
      </button>
    </main>
  );
};

export default App;
