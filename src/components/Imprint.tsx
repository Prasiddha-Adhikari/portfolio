import React from "react";
import { useLanguage } from "../context/language-context";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "NE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>साइट सूचना</h1> {/* Nepali translation of "Site Notice" */}
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Site Notice</h1>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
