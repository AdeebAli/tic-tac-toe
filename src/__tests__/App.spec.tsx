import App from "../App";
import {render} from "@testing-library/react"

describe("App.tsx", () => {
    test("the app file should render", () => {
        const {getByText} = render(<App />)
        expect(getByText("Vite + React")).toBeInTheDocument()
    })
})
