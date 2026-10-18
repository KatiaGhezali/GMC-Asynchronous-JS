// Task 01: Iterating with Async/Await
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await delay(1000);
  }
}

// Task 02 & 03: Awaiting a Call and Handling Errors
async function fetchData() {
  // API request
  await delay(1000);
  return { id: 1, name: "Katia" };
}

async function awaitCall() {
  try {
    const data = await fetchData();
    console.log("API response:", data);
  } catch (error) {
    console.log("Sorry, something went wrong. Please try again.");
  }
}

// Async/Await
async function firstFunction() {
  await delay(1000);
  console.log("First function completed");
}

async function secondFunction() {
  await delay(1000);
  console.log("Second function completed");
}

async function thirdFunction() {
  await delay(1000);
  console.log("Third function completed");
}

async function chainedAsyncFunctions() {
  await firstFunction();
  await secondFunction();
  await thirdFunction();
}

// Task 04: Awaiting Concurrent Requests
async function concurrentRequests() {
  try {
    const [firstResponse, secondResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
        if (!response.ok) throw new Error("First request failed");
        return response.json();
      }),
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
        if (!response.ok) throw new Error("Second request failed");
        return response.json();
      }),
    ]);

    console.log("Combined results:", firstResponse, secondResponse);
  } catch (error) {
    console.log("Sorry, the requests failed. Please try again.");
  }
}

// Run the functions
async function main() {
  await iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  await awaitCall();
  await chainedAsyncFunctions();
  await concurrentRequests();
}

main();
