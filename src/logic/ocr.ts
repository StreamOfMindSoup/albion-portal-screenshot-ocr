import { createScheduler, createWorker } from "tesseract.js";

const scheduler = createScheduler();
const init = Promise.all(
  Array(2)
    .fill(0)
    .map(async () => {
      const worker = createWorker({ logger: console.log });
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      scheduler.addWorker(worker);
    })
);

const ocr = async (
  imageUrl: string,
  progressCallback?: (progress: number) => void
) => {
  await init;
  const {
    data: { text },
  } = await scheduler.addJob("recognize", imageUrl);
  console.log(text);
  return text;
};

export default ocr;
