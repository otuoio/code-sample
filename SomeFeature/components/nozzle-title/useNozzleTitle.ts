import {history} from "../../../../lib/history";
import {HandleBack} from "./interfaces";

const useNozzleTitle = () => {

    const handleBack = (handleBack: HandleBack) => {

        const {itemsToRemove, route} = handleBack;

        (window as any).clearMessages();
        itemsToRemove.map(item => localStorage.removeItem(item));
        history.push(route);
    }

    return {
        handleBack
    };
};

export { useNozzleTitle };