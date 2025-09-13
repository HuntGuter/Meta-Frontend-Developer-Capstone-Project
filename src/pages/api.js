export function fetchAPI(date) {
    const baseTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    
    const day = new Date(date).getDate();
    let times = [...baseTimes];

    if (day % 2 === 0) {
        times = times.filter((t) => t !== "19:00");
    }
    if (day % 3 === 0) {
        times = times.filter((t) => t !== "21:00");
    }

    return [...new Set(times)];
}

export function submitAPI(formData) {
    console.log("Submitting reservation: ", formData);
    return true;
}