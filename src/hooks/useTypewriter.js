import { useState, useEffect } from "react";

export default function useTypewriter(lines, active) {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;

    async function run() {
      for (let i = 0; i < lines.length; i++) {
        const { cmd, out } = lines[i];
        let typed = "";
        for (let c = 0; c < cmd.length; c++) {
          if (cancelled) return;
          typed += cmd[c];
          setOutput((prev) => {
            const next = [...prev];
            next[i] = { cmd: typed, out: "", showOut: false };
            return next;
          });
          await new Promise((r) => setTimeout(r, 26));
        }
        await new Promise((r) => setTimeout(r, 200));
        if (cancelled) return;
        setOutput((prev) => {
          const next = [...prev];
          next[i] = { cmd, out, showOut: true };
          return next;
        });
        await new Promise((r) => setTimeout(r, 260));
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [lines, active]);

  return output;
}
