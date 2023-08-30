interface NozzleTitleProps {
    props: {
        alarm: string;
        text: string;
    };
    params: HandleBack;
}
interface HandleBack{
    itemsToRemove: string[];
    route: string;
}

export { NozzleTitleProps, HandleBack };