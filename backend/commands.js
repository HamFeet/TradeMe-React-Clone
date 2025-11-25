// commands.js
import { Command } from "commander";
import inquirer from "inquirer";

import {
  addItem,
  findItem,
  updateItem,
  removeItem,
  listItems,
} from "./index.js";

import { connectDB } from "./db.js";

const program = new Command();

// Item questions
const questions = [
  {
    type: "input",
    name: "item",
    message: "Name of the item",
  },
  {
    type: "input",
    name: "description",
    message: "Description of the item",
  },
  {
    type: "input",
    name: "startPrice",
    message: "Starting price of the item",
  },
  {
    type: "input",
    name: "reservePrice",
    message: "Reserve price of the item",
  },
];

const main = async () => {
  // 1) Connect to MongoDB (works locally + in Docker)
  await connectDB();

  program.version("1.0.0").description("Auction Management System");

  // Add item
  program
    .command("add")
    .alias("a")
    .description("Add an item")
    .action(async () => {
      const answers = await inquirer.prompt(questions);
      await addItem(answers);
    });

  // Find item
  program
    .command("find <item>")
    .alias("f")
    .description("Find an item")
    .action(async (item) => {
      await findItem(item);
    });

  // Remove item
  program
    .command("remove <_id>")
    .alias("r")
    .description("Remove an item")
    .action(async (_id) => {
      await removeItem(_id);
    });

  // Update item
  program
    .command("update <_id>")
    .alias("u")
    .description("Update an item")
    .action(async (_id) => {
      const answers = await inquirer.prompt(questions);
      await updateItem(_id, answers); // <- fixed
    });

  // List items
  program
    .command("list")
    .alias("l")
    .description("List all items")
    .action(async () => {
      await connectDB();
      try {
        await listItems();
      } catch (err) {
        console.error("Error listing items:", err);
      } finally {
        process.exit(0);
      }
    });

  program.parse(process.argv);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
