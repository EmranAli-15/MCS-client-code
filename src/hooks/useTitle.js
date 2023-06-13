import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Knowledge`;
    }, [title])
}
export default useTitle;