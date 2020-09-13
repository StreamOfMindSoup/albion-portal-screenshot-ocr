import { clusterNamesById } from "./clusters";

const annotate = (
  rawData: Array<{
    from: string;
    to: string;
    currentTime: string;
    remainingTime: string;
  }>
) => {
  const currentDate = new Date();
  return rawData.map((x) => {
    let closingDate;
    const observationTimeMatch = x.currentTime.match(/(\d{2}):(\d{2})/);
    if (observationTimeMatch) {
      const observationHours = parseInt(observationTimeMatch[1]);
      const observationMinutes = parseInt(observationTimeMatch[2]);
      const remainingTimeMatch = x.remainingTime.match(
        /(?:(\d{0,2})h)?(?:(\d{1,2}m))/
      );
      if (remainingTimeMatch) {
        const remainingHours = parseInt(remainingTimeMatch[1] || "0");
        const remainingMinutes = parseInt(remainingTimeMatch[2]);
        const observationDate = new Date(
          Date.UTC(
            currentDate.getUTCFullYear(),
            currentDate.getUTCMonth(),
            currentDate.getUTCDate(),
            observationHours,
            observationMinutes
          )
        );
        if (observationDate > currentDate) {
          observationDate.setUTCDate(observationDate.getUTCDate() - 1);
        }
        closingDate = new Date(observationDate);
        closingDate.setUTCMinutes(observationMinutes + remainingMinutes);
        closingDate.setUTCHours(
            closingDate.getUTCHours() + remainingHours
        );
      }
    }
    return {
      ...x,
      fromId: clusterNamesById[x.from],
      toId: clusterNamesById[x.to],
      closingDate,
    };
  });
};

export default annotate;
