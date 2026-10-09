// 03 - Promises and async/await
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fakeFetch(id) {
  await wait(200);
  if (id < 0) throw new Error("Invalid id");
  return { id, title: `Post #${id}` };
}

async function main() {
  try {
    const one = await fakeFetch(1);
    console.log("Single:", one);

    const many = await Promise.all([fakeFetch(2), fakeFetch(3), fakeFetch(4)]);
    console.log(
      "Parallel:",
      many.map((p) => p.title),
    );

    await fakeFetch(-1);
  } catch (err) {
    console.log("Caught:", err.message);
  } finally {
    console.log("Done");
  }
}
main();
