import React from "react";



const Calendar = props => {
    return(
        <div className={props.class}>
            <p className="mb-4 h5"><b className="text-warning">Working hours</b></p>
            <iframe className="w-100" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=a2VuamkubGFtLjkyQGdtYWlsLmNvbQ&amp;color=%23616161&amp;showPrint=0&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showTabs=0&amp;mode=WEEK&amp;showTz=1&amp;showCalendars=0" height={props.height} frameborder="0" scrolling="no" title="working hours"></iframe>
        </div>
    );
}
export default Calendar;