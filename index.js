    const hourHand = document.querySelector('[date-hour-hand]');
    const minutesHand = document.querySelector('[date-minutes-hand]');
    const secondHand = document.querySelector('[date-seconds-hand]');
    const run = (element, rate) => {
        element.style.setProperty('--rotation', rate * 360);
    }
    const clock = () => {
        const currentDate = new Date();
        const secondRatio = currentDate.getSeconds() / 60;
        const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
        const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

        run(secondHand, secondRatio);
        run(minutesHand, minutesRatio);
        run(hourHand, hoursRatio);

    }
    setInterval(clock, 1000);