export async function runDistance(description: string): Promise<number> {
  console.log(`Starting ${description}...`);
  const timeInMinutes = Math.floor(Math.random() * (90 - 25 + 1)) + 25;
  const simulatedWaitTime = timeInMinutes * 100;
  await new Promise((resolve) => setTimeout(resolve, simulatedWaitTime));
  console.log(`Finished ${description} in ${timeInMinutes} minutes.`);
  return timeInMinutes;
}

export async function warmUp(): Promise<number> {
  console.log("Starting warm-up...");
  const timeInMinutes = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const simulatedWaitTime = timeInMinutes * 100;
  await new Promise((resolve) => setTimeout(resolve, simulatedWaitTime));
  console.log(`Finished warm-up in ${timeInMinutes} minutes.`);
  return timeInMinutes;
}

export async function coolDown(): Promise<number> {
  console.log("Starting cool-down...");
  const timeInMinutes = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
  const simulatedWaitTime = timeInMinutes * 100;
  await new Promise((resolve) => setTimeout(resolve, simulatedWaitTime));
  console.log(`Finished cool-down in ${timeInMinutes} minutes.`);
  return timeInMinutes;
}
