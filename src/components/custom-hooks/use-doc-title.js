import React, { useEffect } from "react";
//Lets set a doc title for each page different
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
