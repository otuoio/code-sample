import { NozzleTitle } from "./components/nozzle-title/NozzleTitle";

const SomeFeature = () => {

    const injectorAlarm = "alarm";
    const injector = "inj";
    return (
        <NozzleTitle
            props={{alarm: injectorAlarm, text: injector}}
            params={{itemsToRemove: ["injector", "injectorAlarm"], route: "/newRoute"}}
        />
    )
}

export { SomeFeature };