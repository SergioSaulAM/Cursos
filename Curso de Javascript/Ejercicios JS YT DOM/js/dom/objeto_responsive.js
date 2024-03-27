const d = document;

const responsiveMedia = (id, mq, mobileContent, desktopContent) => {
    let breakpoint = matchMedia(mq);
    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
        // console.log("MQ", breakpoint, e.matches);
    }
    breakpoint.addEventListener('change', responsive);
    responsive(breakpoint);
}

export default responsiveMedia;