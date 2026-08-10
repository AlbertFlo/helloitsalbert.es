import { useEffect } from "react"

const BASE_TITLE = "Albert Flores | Frontend Developer"

/** Sets the document title, resetting to the base title on unmount. Useful subpages. */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE
    return () => { document.title = BASE_TITLE }
  }, [title])
}
