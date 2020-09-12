import {findBestMatch} from "string-similarity";
import clusters from "./clusters";

const bestCluster = (raw: string) => {
    if (!raw) return raw;
    const res = findBestMatch(raw, clusters);
    return res.bestMatch.target;
}

export default bestCluster