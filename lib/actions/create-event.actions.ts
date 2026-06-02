'use server';

import connectToDatabase from "@/lib/mongodb";
import { Event } from "@/database";
import { revalidatePath } from "next/cache";

export async function createEvent(data: any) {
  try {
    await connectToDatabase();

    const event = await Event.create({
      title: data.title,
      description: data.shortDescription,
      overview: data.overview,
      image: data.image,

      venue: data.location,
      location: data.location,

      date: data.date,
      time: data.time,
      mode: data.mode,

      audience: data.targetAudience,

      agenda: data.agenda
        .split("\n")
        .map((item: string) => item.trim())
        .filter(Boolean),

      organizer: data.organizer,

      tags: data.tags
        .split(",")
        .map((tag: string) => tag.trim())
        .filter(Boolean),
    });

    revalidatePath("/");

    return {
      success: true,
      event: JSON.parse(JSON.stringify(event)),
    };
  } catch (error) {
    console.error("Create Event Error:", error);

    return {
      success: false,
      error: String(error),
    };
  }
}