
import "./Demo.css"
import DemoFooter from "./DemoFooter";
import DemoHeader from "./DemoHeader";
import DemoMain from "./DemoMain";



export default function Demo() {
    const company = "CodeNova"

    return (
        <>
            <DemoHeader />
            <DemoMain />
            <DemoFooter company="코드노바" />
        </ >
    );
}