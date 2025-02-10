import { connectToDB } from "@Utils/database";
import Prompt from "@Models/prompt";

export const GET = async (request) => {
  try {
    await connectToDB(); // Ensure MongoDB is connected

    const prompts = await Prompt.find({}).populate("creator"); // FIX: Removed space in populate

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error("Error fetching prompts:", error); // FIX: Log error to debug
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
